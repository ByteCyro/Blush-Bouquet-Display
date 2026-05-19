import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Mail, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-24 pb-20">
      {/* Header */}
      <section className="text-center py-16 px-6 bg-accent/20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-xl mx-auto space-y-4"
        >
          <motion.span variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-xs">
            Place an Order
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif">
            Let's make something for you.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed">
            All orders are placed through Instagram DM or this form. I'll reply within 24 hours to discuss your piece and confirm details.
          </motion.p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-10"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-serif">How to order</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                The quickest way is to DM me on Instagram at{" "}
                <a
                  href="https://instagram.com/floristblush_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @floristblush_
                </a>
                {" "}— you can also see my latest work there.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Or fill in the form and I'll get back to you to discuss colors, size, and your preferred design.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-serif">Good to know</h2>
              <ul className="space-y-3 text-muted-foreground font-light text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  All items are made to order — typically ready in 5–7 days
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Custom colors, sizes, and flower types available on request
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Keychains can be ordered individually or as a set
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Bulk orders and gifting sets welcome — contact me early
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-2xl font-serif">Find me here</h2>
              <div className="space-y-3">
                <a
                  href="https://instagram.com/floristblush_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Instagram</div>
                    <div className="text-sm">@floristblush_</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-sm">hello@floristblush.com</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-sm"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-serif">Order received!</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Thank you for reaching out. I'll be in touch within 24 hours to confirm your order details. Can't wait to make something special for you.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a href="https://instagram.com/floristblush_" target="_blank" rel="noopener noreferrer">
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-serif mb-2">Send an order inquiry</h2>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Your name</Label>
                  <Input
                    id="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="rounded-xl border-border/60 focus:border-primary/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="rounded-xl border-border/60 focus:border-primary/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product" className="text-sm font-medium">What are you interested in?</Label>
                  <Input
                    id="product"
                    placeholder="Crochet bouquet, plush bouquet, keychains..."
                    value={form.product}
                    onChange={(e) => setForm({ ...form, product: e.target.value })}
                    className="rounded-xl border-border/60 focus:border-primary/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Tell me more</Label>
                  <Textarea
                    id="message"
                    placeholder="Colors, size, occasion, any special requests — the more detail, the better!"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={4}
                    className="rounded-xl border-border/60 focus:border-primary/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Inquiry
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
