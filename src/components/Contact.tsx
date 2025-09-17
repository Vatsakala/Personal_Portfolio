// Contact.tsx
import { useEffect, useState } from 'react';
import { Mail, Phone, Linkedin, Github, TwitterIcon, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [state, handleSubmit] = useForm('mandgwgp');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: ''
  });

  const { toast } = useToast();

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
  ) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vatsakala.contact@gmail.com',
      href: 'mailto:vatsakala.contact@gmail.com'
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
      href: 'https://github.com/vatsakala',
      color: 'text-foreground hover:text-primary'
    },
    {
      icon: TwitterIcon,
      label: 'Twitter',
      href: 'https://x.com/KalaVatsa',
      color: 'text-blue-400 hover:text-blue-300'
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
        overflow-x-clip
      `}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
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

        {/* Grid wrapper */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 max-w-3xl mx-auto lg:max-w-none">
          {/* Contact Form */}
          <div
            className={`
              glass-card p-6 sm:p-4 w-full
              max-w-md sm:max-w-lg mx-auto
              lg:max-w-none lg:mx-0 lg:col-span-3
              ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              transition-opacity transition-transform duration-700 delay-300
              overflow-hidden
            `}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New message from portfolio contact form" />
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleInputChange}
                className="sr-only"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="w-full max-w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full max-w-full"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  className="
                    min-h-[140px] w-full max-w-full
                    resize-none sm:resize-y
                    overflow-auto
                    appearance-none
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                    [&::-webkit-resizer]:hidden
                  "
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button type="submit" className="w-full group" disabled={state.submitting}>
                <Send className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {state.submitting ? 'Sending…' : 'Send Message'}
              </Button>

              <ValidationError errors={state.errors} />
            </form>
          </div>

          {/* Contact Info & Social */}
          <div
            className={`
              space-y-12 w-full
              max-w-md sm:max-w-lg mx-auto
              lg:max-w-none lg:mx-0 lg:col-span-2
              ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
              transition-opacity transition-transform duration-700 delay-400
              overflow-hidden
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

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Follow & Connect</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const isLinkedinOrGithub =
                    social.label === 'LinkedIn' || social.label === 'GitHub';

                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex items-center justify-center gap-2 px-4 py-2 rounded-lg hover:bg-card/50
                        ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                        transition-all duration-300
                        ${index === 0 ? 'delay-600' : index === 1 ? 'delay-700' : 'delay-800'}
                        ${
                          isLinkedinOrGithub
                            ? 'max-sm:active:scale-110 max-sm:hover:animate-pulse'
                            : ''
                        }
                      `}
                    >
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                      <span className="text-sm text-muted-foreground">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
