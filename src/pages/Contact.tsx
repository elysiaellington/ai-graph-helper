
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Information Card */}
        <Card className="p-6 shadow-lg border-border/30 bg-background/70 backdrop-blur-sm h-full">
          <CardContent className="p-0">
            <h2 className="text-2xl font-semibold mb-6 text-foreground/90 border-b border-border/50 pb-2">Get in Touch</h2>
            
            <div className="space-y-8 mt-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-neon-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-foreground/90">Email Us</h3>
                  <p className="text-muted-foreground mt-1">support@pcbottleneckcalculator.com</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">We'll respond within 24-48 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-neon-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-foreground/90">Call Us</h3>
                  <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">Monday-Friday, 9AM-5PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-neon-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-foreground/90">Visit Us</h3>
                  <p className="text-muted-foreground mt-1">123 Tech Avenue</p>
                  <p className="text-muted-foreground">Silicon Valley, CA 94043</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">By appointment only</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-6 border-t border-border/50">
              <h3 className="text-lg font-medium text-foreground/90 mb-2">Follow Us</h3>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="p-6 shadow-lg border-border/30 bg-background/70 backdrop-blur-sm">
          <CardContent className="p-0">
            <h2 className="text-2xl font-semibold mb-6 text-foreground/90 border-b border-border/50 pb-2">Send a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/90">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-background/50 border-border/50 focus:border-neon-blue"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/90">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full bg-background/50 border-border/50 focus:border-neon-blue"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/90">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  {...register("message", { required: "Message is required" })}
                  className="w-full min-h-[150px] bg-background/50 border-border/50 focus:border-neon-blue"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </>
                )}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
