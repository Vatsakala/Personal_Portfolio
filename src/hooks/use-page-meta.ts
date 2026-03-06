import { useEffect } from "react";

type PageMetaOptions = {
  title: string;
  description: string;
  noIndex?: boolean;
  type?: "website" | "article";
  image?: string;
};

const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://vatsa-kala-folio.vercel.app").replace(/\/+$/, "");
const DEFAULT_IMAGE = "/Favicon.png";

const ensureMetaTag = (
  selector: string,
  attr: "name" | "property",
  key: string,
  content: string
) => {
  let node = document.querySelector<HTMLMetaElement>(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(attr, key);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
};

const ensureCanonical = (href: string) => {
  let node = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
};

export const usePageMeta = ({
  title,
  description,
  noIndex = false,
  type = "website",
  image = DEFAULT_IMAGE,
}: PageMetaOptions) => {
  useEffect(() => {
    const path = window.location.pathname === "/" ? "/" : window.location.pathname;
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = title;
    ensureCanonical(canonicalUrl);

    ensureMetaTag('meta[name="description"]', "name", "description", description);
    ensureMetaTag(
      'meta[name="robots"]',
      "name",
      "robots",
      noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
    );

    ensureMetaTag('meta[property="og:title"]', "property", "og:title", title);
    ensureMetaTag('meta[property="og:description"]', "property", "og:description", description);
    ensureMetaTag('meta[property="og:type"]', "property", "og:type", type);
    ensureMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    ensureMetaTag('meta[property="og:image"]', "property", "og:image", image);

    ensureMetaTag('meta[name="twitter:title"]', "name", "twitter:title", title);
    ensureMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);
    ensureMetaTag('meta[name="twitter:image"]', "name", "twitter:image", image);
  }, [title, description, noIndex, type, image]);
};

