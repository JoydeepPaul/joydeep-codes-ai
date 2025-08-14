import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    try {
      // Create a comprehensive email body
      const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
      `;

      // Create mailto link with all form data
      const mailtoLink = `mailto:joydeeppaul791@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${subject}`)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open default email client
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Email client opened!",
        description: "Your default email client has been opened. Please send the email to complete the process.",
      });
      
      setIsSubmitted(true);
      e.currentTarget.reset();
      
      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error opening email client",
        description: "Please contact me directly at joydeeppaul791@gmail.com",
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
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
                  name="email"
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
                   Opening Email...
                 </>
               ) : isSubmitted ? (
                 <>
                   <CheckCircle className="mr-2 h-4 w-4" />
                   Email Opened!
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
