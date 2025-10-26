import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "Thank you for reaching out. We will be in touch shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
          <User className="w-4 h-4 text-gold" />
          Full Name
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-card border-muted text-black placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
          <Mail className="w-4 h-4 text-gold" />
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="bg-card border-muted text-black placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-gold" />
          Message
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={6}
          className="bg-card border-muted resize-none text-black placeholder:text-gray-500"
        />
      </div>

      <Button type="submit" variant="gold" size="lg" className="w-full">
        Send Confidential Inquiry
      </Button>
    </form>
  );
};
