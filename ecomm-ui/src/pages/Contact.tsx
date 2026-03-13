import { Mail, Phone, MapPin, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const email = "anjalideshmukh2541@gmail.com";
  const phoneDisplay = "+91 9098163924";
  const phoneNumber = "919098163924"; // For WhatsApp (no + or spaces)
  const location =
    "Bhopal, MadhyaPradesh";

  // ===== Prefilled Messages =====
  const emailSubject = encodeURIComponent("Inquiry from EMart Website");
  const emailBody = encodeURIComponent(
    "Hello,\n\nI am contacting you from your website.\n\nThank you."
  );

  const whatsappMessage = encodeURIComponent(
    "Hello, I visited your website and would like to know more."
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "service_v5th7gr",
      "template_did5z0o",
      formRef.current,
      "qsS1cozi-uPBsJMLn"
    )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      },
        (error) => {
          console.error(error);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have query? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a
                  href={`mailto:${email}?subject=${emailSubject}&body=${emailBody}`}
                  className="text-sm text-muted-foreground hover:underline cursor-pointer"
                >
                  {email}
                </a>
                {/* <p className="text-sm text-muted-foreground">anjalideshmukh2541@gmail.com</p> */}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call or Whatshapp Us</h3>
                <a
                  href={`tel:${phoneDisplay}`}
                  className="block text-sm text-muted-foreground hover:underline cursor-pointer"
                >
                  {phoneDisplay}
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-green-600 hover:underline cursor-pointer mt-1"
                >
                  Chat on WhatsApp
                </a>

                {/* <p className="text-sm text-muted-foreground">+91 9098163924</p> */}
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:underline cursor-pointer"
                >
                  {location}
                </a>
                {/* <p className="text-sm text-muted-foreground"> JM, SectorB, Rajiv Nagar, Ayodhya bypass rd, Bhopal</p> */}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
