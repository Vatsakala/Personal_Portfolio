import { BookOpen, Award, ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useMemo, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  duration: string;
  gpa?: string;
  status?: string;
  coursework?: string[];
  achievements?: string[];
  logoSrc?: string;
  logoAlt?: string;
};

export type CertificateItem = {
  name: string;
  issuer: string;
  date?: string;
  fileUrl: string;   // pdf or image
  thumbUrl?: string; // optional thumbnail
};

type FileCheck =
  | { state: "idle" }
  | { state: "checking" }
  | { state: "ok"; contentType?: string }
  | { state: "missing" };

// Browser flags
const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
const isSafari =
  /safari/i.test(ua) && !/chrome|chromium|crios|edg|opera|opr/i.test(ua);
const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);

const Education = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const education: EducationItem[] = [
    {
      degree: "Master of Science in Management Information Systems",
      school: "Texas A&M University",
      location: "College Station, TX",
      duration: "2024 – 2026",
      gpa: "3.83/4.0",
      status: "Expected Graduation: May 2026",
      coursework: [
        "Advanced Database Systems",
        "MIS Project Management",
        "Advanced System Design & Analysis",
        "Advanced Statistics for Data Science",
        "Startup Fundamentals",
        "Data Analytics and Machine Learning",
      ],
      achievements: ["Mays Business School MS Excellence Scholarship recipient"],
      logoSrc: "/logos/TAMU.svg",
      logoAlt: "Texas A&M University logo",
    },
    {
      degree:
        "Bachelor of Technology in Electronics and Communications Engineering",
      school: "Pandit Deendayal Energy University",
      location: "Gandhinagar, India",
      duration: "2020 – 2024",
      gpa: "9.42/10",
      coursework: [
        "Computer Programming with C",
        "Fundamentals of Python Programming",
        "Machine Learning and Applications",
        "Introduction to Data Mining",
        "Artificial Intelligence",
        "Internet of Things",
      ],
      achievements: [
        "Graduated Summa Cum Laude",
        "Awarded $1700 Research Grant for AI/ML Work",
      ],
      logoSrc: "/logos/PDEU.png",
      logoAlt: "PDEU logo",
    },
  ];

  const certifications: CertificateItem[] = [
    { name: "Professional Scrum Master I", issuer: "Scrum.org", fileUrl: "/certs/csm.pdf", thumbUrl: "/certs/csm.png" },
    { name: "Advanced Learning Algorithms", issuer: "Stanford", fileUrl: "/certs/Advanced Learning Algorithms.pdf", thumbUrl: "/certs/ALA.png" },
    { name: "Fundamentals of Deep Learning", issuer: "NVIDIA", fileUrl: "/certs/Nvidia Deep Learning.pdf", thumbUrl: "/certs/Nvidia Deep Learning.png" },
    { name: "Data Engineer Associate", issuer: "LinkedIn Learning", fileUrl: "/certs/Data_Eng.pdf", thumbUrl: "/certs/Data_Eng.png" },
    { name: "Power BI for Data Analysts", issuer: "Microsoft Press", fileUrl: "/certs/PowerBI.pdf", thumbUrl: "/certs/PowerBI.png" },
    { name: "Understanding Entrepreneurship", issuer: "NPTEL", fileUrl: "/certs/Enterpreneurship.pdf", thumbUrl: "/certs/Enterpreneurship.png" },
    { name: "Understanding Python", issuer: "Kaggle", fileUrl: "/certs/Python.pdf", thumbUrl: "/certs/Python.png" },
    { name: "Research Paper Presentation – Springer SIGMAA 2023", issuer: "Springer", fileUrl: "/certs/Springer.pdf", thumbUrl: "/certs/Springer.png" }
  ];

  const [open, setOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [isWide, setIsWide] = useState(false);

  const [fileCheck, setFileCheck] = useState<FileCheck>({ state: "idle" });
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  const encodeUrl = (url?: string) => (url ? encodeURI(url) : "");

  // media query setup
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsWide("matches" in e ? e.matches : (e as MediaQueryList).matches);
    setIsWide(mq.matches);
    if ("addEventListener" in mq) {
      mq.addEventListener("change", onChange as any);
      return () => mq.removeEventListener("change", onChange as any);
    } else {
      // Safari <14 fallback
      // @ts-ignore
      mq.addListener(onChange);
      // @ts-ignore
      return () => mq.removeListener(onChange);
    }
  }, []);

  const visibleCount = expanded ? certifications.length : isWide ? 4 : 2;
  const visibleCerts = useMemo(
    () => certifications.slice(0, visibleCount),
    [certifications, visibleCount]
  );

  const handleOpen = (cert: CertificateItem) => {
    setActiveCert(cert);
    setOpen(true);
  };

  const extIsPDF = (url?: string) => !!url && /\.pdf(\?.*)?$/i.test(url);
  const extIsImage = (url?: string) =>
    !!url && /\.(png|jpe?g|webp|gif|bmp|svg)(\?.*)?$/i.test(url);

  // preflight file check
  useEffect(() => {
    let abort = false;
    const check = async () => {
      if (!activeCert?.fileUrl) {
        setFileCheck({ state: "missing" });
        return;
      }
      setFileCheck({ state: "checking" });
      const url = encodeUrl(activeCert.fileUrl);
      try {
        let res = await fetch(url, { method: "HEAD", cache: "no-store" });
        if (!res.ok) {
          res = await fetch(url, {
            method: "GET",
            headers: { Range: "bytes=0-0" },
            cache: "no-store",
          });
        }
        if (abort) return;
        if (res.ok) {
          const ct = res.headers.get("content-type") || undefined;
          setFileCheck({ state: "ok", contentType: ct || undefined });
        } else {
          setFileCheck({ state: "missing" });
        }
      } catch {
        if (!abort) setFileCheck({ state: "missing" });
      }
    };

    if (open && activeCert) check();
    else setFileCheck({ state: "idle" });
    return () => { abort = true; };
  }, [open, activeCert]);

  const sameOrigin =
    typeof window !== "undefined" &&
    !!activeCert?.fileUrl &&
    new URL(encodeUrl(activeCert.fileUrl), window.location.origin).origin ===
      window.location.origin;

  const resolvedIsPDF = useMemo(() => {
    if (fileCheck.state === "ok" && fileCheck.contentType) {
      return /pdf/i.test(fileCheck.contentType);
    }
    return extIsPDF(activeCert?.fileUrl);
  }, [fileCheck, activeCert]);

  const resolvedIsImage = useMemo(() => {
    if (fileCheck.state === "ok" && fileCheck.contentType) {
      return /^image\//i.test(fileCheck.contentType);
    }
    return extIsImage(activeCert?.fileUrl);
  }, [fileCheck, activeCert]);

  /**
   * Mobile-safe PDF loader:
   * - If same-origin + PDF: fetch -> Blob -> object/embed (works on Safari/Chrome/Edge/Opera mobile)
   * - If cross-origin: skip inline viewer (most mobile browsers block it) and show link fallback
   */
  useEffect(() => {
    let revoked = false;
    const buildBlob = async () => {
      setBlobUrl(null);
      if (!open || !activeCert?.fileUrl || !resolvedIsPDF) return;
      if (!sameOrigin) return; // cross-origin: use link fallback
      try {
        const res = await fetch(encodeUrl(activeCert.fileUrl), { cache: "no-store" });
        if (!res.ok) return;
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        if (!revoked) setBlobUrl(url);
      } catch {
        // ignore, link fallback below will still be available
      }
    };
    // Always create a blob on MOBILE; desktop can rely on native PDF viewer if desired
    if (isMobile || isSafari) buildBlob();
    else buildBlob(); // keep it unified & robust
    return () => {
      revoked = true;
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, activeCert, resolvedIsPDF, sameOrigin]);

  return (
    <section
      id="education"
      ref={targetRef}
      className={`scroll-mt-15 py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 hero-accent text-center">
            Education & Certifications
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise through academic excellence and continuous learning
          </p>
        </div>

        {/* Education cards */}
        <div className="relative mb-14 space-y-8">
          {education.map((edu, idx) => (
            <article
              key={idx}
              className="rounded-2xl p-6 ring-1 ring-border/40 bg-background/30 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                {edu.logoSrc && (
                  <img
                    src={edu.logoSrc}
                    alt={edu.logoAlt || `${edu.school} logo`}
                    className="h-24 w-24 md:h-32 md:w-32 object-contain flex-shrink-0"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-primary font-medium">
                    {edu.school}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {edu.location} • {edu.duration}
                  </div>
                  {edu.status && (
                    <div className="mt-1 text-sm text-muted-foreground">{edu.status}</div>
                  )}
                </div>
                {edu.gpa && (
                  <div className="sm:text-right">
                    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">GPA</span>
                      <span className="text-base font-semibold text-primary">{edu.gpa}</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={`transition-all duration-700 delay-150 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Certifications</h3>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-1.5 text-sm font-medium text-primary shadow-sm transition-all hover:bg-background/80 hover:shadow-md"
              aria-expanded={expanded}
              aria-controls="cert-grid"
            >
              {expanded ? "Show less" : `Show all (${certifications.length})`}
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
            </button>
          </div>

          <ul id="cert-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleCerts.map((cert, idx) => {
              const isImage = extIsImage(cert.fileUrl);
              const thumb = cert.thumbUrl || (isImage ? cert.fileUrl : undefined);
              return (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => handleOpen(cert)}
                    className="group w-full text-left rounded-xl p-4 ring-1 ring-border/40 bg-background/30 backdrop-blur-sm hover:scale-[1.01] transition-transform duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-xl">
                      {thumb ? (
                        <img
                          src={encodeUrl(thumb)}
                          alt={`${cert.name} thumbnail`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full grid place-items-center bg-muted/40 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            <span className="text-sm">PDF Preview</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-foreground line-clamp-2">{cert.name}</h4>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{cert.issuer}</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[90vw] max-w-5xl p-0 overflow-hidden">
          {activeCert && (
            <>
              <DialogHeader className="px-6 pt-6 pb-2">
                <DialogTitle className="text-base sm:text-lg text-foreground">{activeCert.name}</DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-muted-foreground">
                  {activeCert.issuer}
                  {activeCert.date ? ` • ${activeCert.date}` : null}
                </DialogDescription>
              </DialogHeader>

              <div className="px-6 pb-6">
                {fileCheck.state === "checking" && (
                  <div className="rounded-xl ring-1 ring-border bg-background/60 p-12 grid place-items-center text-sm text-muted-foreground">
                    Checking file…
                  </div>
                )}

                {fileCheck.state === "missing" && (
                  <div className="rounded-xl ring-1 ring-border bg-background/60 p-8">
                    <p className="text-sm text-muted-foreground">This certificate file could not be found.</p>
                    <div className="mt-3">
                      <a
                        href={encodeUrl(activeCert.fileUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-primary text-sm"
                      >
                        Open in a new tab
                      </a>
                    </div>
                  </div>
                )}

                {fileCheck.state === "ok" && (
                  <>
                    {resolvedIsImage && (
                      <div className="rounded-xl ring-1 ring-border overflow-hidden bg-background grid place-items-center">
                        <img
                          src={encodeUrl(activeCert.fileUrl)}
                          alt={activeCert.name}
                          className="max-h-[75svh] w-auto object-contain"
                          loading="eager"
                        />
                      </div>
                    )}

                    {resolvedIsPDF && (
                      <>
                        {/* Same-origin blob => reliable on mobile */}
                        {sameOrigin && blobUrl ? (
                          <div className="rounded-xl ring-1 ring-border overflow-hidden bg-background">
                            <object
                              data={blobUrl}
                              type="application/pdf"
                              className="w-full h-[70svh] block"
                            >
                              <embed src={blobUrl} type="application/pdf" className="w-full h-[70svh] block" />
                            </object>
                          </div>
                        ) : (
                          // Cross-origin: show link fallback (mobile browsers often block inline viewer)
                          <div className="rounded-xl ring-1 ring-border bg-background/60 p-8">
                            <p className="text-sm text-muted-foreground">
                              This PDF is hosted on another domain and may not render inside the page on mobile.
                            </p>
                            <div className="mt-3">
                              <a
                                href={encodeUrl(activeCert.fileUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-primary text-sm"
                              >
                                Open the PDF in a new tab
                              </a>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}

                {/* Footer helper for all cases */}
                {fileCheck.state === "ok" && resolvedIsPDF && (
                  <div className="p-3 text-xs text-muted-foreground">
                    Can’t see it?{" "}
                    <a
                      href={encodeUrl(activeCert.fileUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-primary"
                    >
                      Open the PDF in a new tab
                    </a>
                    .
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Education;
