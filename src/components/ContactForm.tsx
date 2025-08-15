import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';

// Initialize EmailJS with the public key - not needed in v4 but keeping for reference
// emailjs.init(EMAILJS_CONFIG.publicKey);

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);
      const name = formData.get('from_name');
      const email = formData.get('reply_to');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Check if all required fields are filled
      if (!name || !email || !subject || !message) {
        throw new Error('Please fill in all required fields');
      }
      
      // Check if EmailJS is properly configured
      if (EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY" || 
          EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID" || 
          EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID") {
        // If not configured, fall back to mailto link
        toast({
          title: "EmailJS not configured",
          description: "Redirecting to your email client instead.",
        });
        
        const mailtoUrl = `mailto:${EMAILJS_CONFIG.toEmail}?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoUrl;
        
        setIsSubmitting(false);
        return;
      }
      
      // Log the configuration for debugging
      console.log('EmailJS Config:', {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_CONFIG.templateId,
        publicKey: EMAILJS_CONFIG.publicKey ? EMAILJS_CONFIG.publicKey.substring(0, 3) + '...' : 'Missing'
      });
      
      // Validate EmailJS configuration before sending
      if (!EMAILJS_CONFIG.publicKey || EMAILJS_CONFIG.publicKey.length < 10) {
        throw new Error('Invalid EmailJS public key configuration');
      }
      
      if (!formRef.current) {
        throw new Error('Form reference is not available');
      }
      
      // Send the email using EmailJS with proper error handling
      let result;
      try {
        result = await emailjs.sendForm(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          formRef.current,
          { publicKey: EMAILJS_CONFIG.publicKey }
        );
        
        console.log('EmailJS result:', result);
      } catch (sendError) {
        console.error('EmailJS send error:', sendError);
        throw new Error(sendError instanceof Error ? sendError.message : 'Failed to send email through EmailJS');
      }
      
      // Check if the email was sent successfully
      if (result.status === 200) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        setIsSubmitted(true);
        formElement.reset();
        
        // Reset submitted state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(`Failed to send email: Status ${result.status}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Provide more specific error information
      let errorMessage = "Please contact me directly at joydeeppaul791@gmail.com";
      
      if (error instanceof Error) {
        errorMessage = `${error.message}. Please contact me directly at joydeeppaul791@gmail.com`;
      }
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "joydeeppaul791@gmail.com",
      href: "mailto:joydeeppaul791@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8240672326",
      href: "tel:+918240672326",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bally, Howrah, West Bengal",
      href: "https://www.google.com/maps/@22.6533704,88.3420857,16z?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <Card className="relative overflow-hidden group">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
            Get in Touch
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Let's discuss your next project or just say hello!
          </CardDescription>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="reply_to"
                  placeholder="your.email@example.com"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
              />
            </div>
            
                         <Button
               type="submit"
               disabled={isSubmitting}
               className={cn(
                 "w-full transition-all duration-200",
                 isSubmitted && "bg-success hover:bg-success/90"
               )}
             >
               {isSubmitting ? (
                 <>
                   <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                   Sending...
                 </>
               ) : isSubmitted ? (
                 <>
                   <CheckCircle className="mr-2 h-4 w-4" />
                   Message Sent!
                 </>
               ) : (
                 <>
                   <Send className="mr-2 h-4 w-4" />
                   Send Message
                 </>
               )}
             </Button>
             
             {/* Alternative Contact Methods */}
             <div className="text-center space-y-2">
               <p className="text-xs text-muted-foreground">Or contact me directly:</p>
               <div className="flex justify-center gap-2">
                 <Button
                   variant="outline"
                   size="sm"
                   asChild
                   className="text-xs"
                 >
                   <a href="mailto:joydeeppaul791@gmail.com">
                     <Mail className="mr-1 h-3 w-3" />
                     Direct Email
                   </a>
                 </Button>
                 <Button
                   variant="outline"
                   size="sm"
                   asChild
                   className="text-xs"
                 >
                   <a href="https://wa.me/918240672326" target="_blank" rel="noopener noreferrer">
                     <ExternalLink className="mr-1 h-3 w-3" />
                     WhatsApp
                   </a>
                 </Button>
               </div>
             </div>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <div className="space-y-6">
        <Card className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardHeader className="relative z-10">
            <CardTitle className="text-xl font-semibold group-hover:text-accent transition-colors">
              Contact Information
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Reach out through any of these channels
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative z-10 space-y-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "Location" ? "_blank" : undefined}
                rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/10 transition-colors group/item"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{info.label}</p>
                  <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-warning/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardHeader className="relative z-10">
            <CardTitle className="text-lg font-semibold group-hover:text-success transition-colors">
              Quick Links
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                Resume
              </Badge>
              <Badge variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                Portfolio
              </Badge>
              <Badge variant="outline" className="hover:bg-success hover:text-success-foreground transition-colors cursor-pointer">
                GitHub
              </Badge>
              <Badge variant="outline" className="hover:bg-warning hover:text-warning-foreground transition-colors cursor-pointer">
                LinkedIn
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
