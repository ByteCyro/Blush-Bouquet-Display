import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, Sparkles, Scissors } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every stitch is placed with care. Whether it's a bouquet or a keychain, I put the same love into every piece I make.",
  },
  {
    icon: Scissors,
    title: "Fully Handmade",
    desc: "No machines, no shortcuts. Each petal is crocheted or stitched by hand — which means no two pieces are ever exactly the same.",
  },
  {
    icon: Sparkles,
    title: "Gifts That Last",
    desc: "Real flowers wilt. Mine don't. Every piece I create is made to be kept, treasured, and loved for years.",
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
                The Maker
              </span>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                I crochet blooms that never fade.
              </h1>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Hi, I'm the maker behind FloristBlush. I've always loved flowers — but the first time I crocheted a tiny rose, I realized I could make something even better: flowers that stay beautiful forever, that you can hold and treasure long after the occasion has passed.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                I make crochet bouquets, plush flower arrangements, and flower keychains entirely by hand. Everything is stitched with care, made to order, and designed to feel like a genuine gift — not something mass-produced. You can follow my work on Instagram, where I share my process, new designs, and behind-the-scenes moments.
              </p>
              <Button asChild variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                <a href="https://instagram.com/floristblush_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram size={16} />
                  Follow @floristblush_ on Instagram
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
                alt="Handmade crochet bouquet showcase"
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
            <h2 className="text-3xl md:text-4xl font-serif">What I stand for</h2>
            <p className="text-muted-foreground font-light">
              The values behind every piece I create.
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
            <h2 className="text-3xl md:text-4xl font-serif">How it started</h2>
            <div className="space-y-4 text-muted-foreground font-light leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                It started with a crochet hook and a ball of pink yarn. I was learning to crochet during a quiet afternoon, and somehow ended up making a tiny rose. I held it up, looked at it, and thought — this is actually kind of magical.
              </p>
              <p>
                I started gifting crocheted flowers to friends and family. Their reactions told me everything: people held these little handmade things like they were precious. Because they are. They're made of time, attention, and care — things you can't buy in a store.
              </p>
              <p>
                FloristBlush grew from those first gifts. Now I make crochet bouquets, plush arrangements, and flower keychains from home, and I share them on Instagram. If you're here — thank you for finding me, and for appreciating the art of making something slowly, by hand, with love.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              <Link href="/shop">Shop the Collection</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
