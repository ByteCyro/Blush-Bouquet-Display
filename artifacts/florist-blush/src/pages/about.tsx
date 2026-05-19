import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, Leaf, Sparkles } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const values = [
  {
    icon: Heart,
    title: "Made with Intention",
    desc: "Every stem is chosen with care. Nothing is rushed, nothing is accidental. Each bouquet carries the same love as a handwritten letter.",
  },
  {
    icon: Leaf,
    title: "Seasonal & Fresh",
    desc: "I work with what nature offers each season — the blooms that are at their peak, their most vibrant, their most alive.",
  },
  {
    icon: Sparkles,
    title: "Beautifully Personal",
    desc: "No two arrangements are identical. Your bouquet is made for your moment, your person, your feeling.",
  },
];

export default function About() {
  return (
    <div className="w-full pt-24 pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6 bg-accent/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeInUp}
              className="space-y-6"
            >
              <span className="text-primary font-medium tracking-widest uppercase text-xs">
                The Florist
              </span>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                Flowers are my love language.
              </h1>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Hi, I'm the florist behind FloristBlush. What started as a weekend obsession with farmers' market blooms became something I could not imagine living without. I wanted to share that feeling — that quiet joy of holding something so beautiful it makes you pause.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Every arrangement I create is made by hand, with flowers I've personally selected, chosen for their colour, their scent, and the feeling they carry. I don't follow a formula — I follow my instinct, the season, and the story you want to tell.
              </p>
              <Button asChild variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                <a href="https://instagram.com/floristblush_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram size={16} />
                  Follow along on Instagram
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="aspect-[3/4] rounded-3xl overflow-hidden"
            >
              <img
                src="/images/about-florist.png"
                alt="The florist behind FloristBlush"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif">What I believe in</h2>
            <p className="text-muted-foreground font-light">
              The principles that guide every bouquet I make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-primary mx-auto">
                  <v.icon size={24} />
                </div>
                <h3 className="font-serif text-xl">{v.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="bg-muted/50 py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif">How it all began</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                It started with a single bunch of peonies from a Saturday market. I arranged them in an old jam jar on my kitchen table and couldn't stop looking at them. There was something about the way they opened slowly, petal by petal, that felt like a small miracle happening right in front of me.
              </p>
              <p>
                I started gifting arrangements to friends — birthdays, anniversaries, just-because moments. The smiles, the messages, the photos they'd send back — it all told me I was onto something real. FloristBlush grew out of those moments.
              </p>
              <p>
                Today, I create every bouquet by hand, working from home with flowers sourced fresh each week. I share what I make on Instagram, and I love connecting with the people who find their way here. If you're one of them — thank you for being here.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              <Link href="/shop">Explore the Collection</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
