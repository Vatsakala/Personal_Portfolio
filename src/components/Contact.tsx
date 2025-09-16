// Contact.tsx
import { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// ✅ Formspree
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  // Formspree hook uses your form ID from the screenshot
  const [state, handleSubmit] = useForm('mandgwgp');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // honeypot (leave empty)
    _gotcha: ''
  });

  const { toast } = useToast();

  // When Formspree reports success, toast + reset inputs
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out — I'll get back to you soon."
      });
      setFormData({ name: '', email: '', message: '', _gotcha: '' });
    }
  }, [state.succeeded, toast]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vatsa.kala@email.com',
      href: 'mailto:vatsa.kala@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (979) 555-0123',
      href: 'tel:+19795550123'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/vatsa-kala',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vatsa-kala',
      color: 'text-foreground hover:text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:vatsakala.contact@gmail.com',
      color: 'text-red-400 hover:text-red-300'
    }
  ];

  return (
    <section
      id="contact"
      ref={targetRef}
      className={`
        scroll-mt-15 py-20 px-4 sm:px-6 lg:px-8
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        transition-opacity transition-transform duration-700
      `}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`
            text-center mb-16
            ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            transition-opacity transition-transform duration-700 delay-200
          `}
        >
          <h2 className="text-4xl font-bold mb-4 hero-accent">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss opportunities, collaborate on projects, or just have a chat about data science and technology
          </p>
        </div>

        {/* Wider form (3) + sidebar (2) on lg+ */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div
            className={`
              glass-card p-8 lg:col-span-3
              ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              transition-opacity transition-transform duration-700 delay-300
            `}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a message</h3>

            {/* ✅ Formspree: onSubmit={handleSubmit} */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden extras */}
              <input type="hidden" name="subject" value="New message from portfolio contact form" />
              {/* Honeypot anti-spam field (kept hidden) */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleInputChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"                // ✅ must have name
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"              // ✅ must have name
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
                {/* ✅ Field-level errors from Formspree */}
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"            // ✅ must have name
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="min-h-[120px]"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                className="w-full group"
                disabled={state.submitting}   // ✅ prevent double submits
              >
                <Send className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {state.submitting ? 'Sending…' : 'Send Message'}
              </Button>

              {/* Global (non-field) errors */}
              <ValidationError errors={state.errors} />
            </form>
          </div>

          {/* Contact Info & Social */}
          <div
            className={`
              space-y-8 lg:col-span-2
              ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
              transition-opacity transition-transform duration-700 delay-400
            `}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`
                      flex items-center gap-4 p-4 rounded-lg hover:bg-card/50
                      ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                      transition-opacity transition-transform duration-300 ${index === 0 ? 'delay-500' : 'delay-600'}
                    `}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links — one row, equal pill sizes */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Follow & Connect</h3>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 p-4 rounded-lg hover:bg-card/50
                      ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                      transition-opacity transition-transform duration-300
                      ${index === 0 ? 'delay-600' : index === 1 ? 'delay-700' : 'delay-800'}
                      min-w-[120px]`}   // equal pill width
                  >
                    <social.icon className={`h-6 w-6 ${social.color}`} />
                    <span className="text-sm text-muted-foreground">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
