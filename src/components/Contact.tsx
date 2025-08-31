import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const Contact = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'College Station, TX',
      href: '#'
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
      href: 'mailto:vatsa.kala@email.com',
      color: 'text-red-400 hover:text-red-300'
    },
    {
      icon: Calendar,
      label: 'Schedule Call',
      href: 'https://calendly.com/vatsa-kala',
      color: 'text-green-400 hover:text-green-300'
    }
  ];

  return (
    <section 
      id="contact" 
      ref={targetRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl font-bold mb-4 hero-accent">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a chat about data science and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`glass-card p-8 transition-all duration-700 delay-300 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full"
                  placeholder="Your full name"
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
                  className="w-full"
                  placeholder="your.email@example.com"
                />
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
                  className="w-full min-h-[120px]"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>
              
              <Button type="submit" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className={`space-y-8 transition-all duration-700 delay-400 ${
            isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Contact Information */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-200 group transition-all duration-300 ${
                      index === 0 ? 'delay-500' : 
                      index === 1 ? 'delay-600' : 'delay-700'
                    } ${
                      isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
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

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Follow & Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg hover:bg-card/50 transition-colors duration-200 group transition-all duration-300 ${
                      index === 0 ? 'delay-600' : 
                      index === 1 ? 'delay-700' : 
                      index === 2 ? 'delay-800' : 'delay-900'
                    } ${
                      isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{social.label}</div>
                    </div>
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
