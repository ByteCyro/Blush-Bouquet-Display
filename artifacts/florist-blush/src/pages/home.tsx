import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-1.png"
            alt="Handmade crochet bouquet"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-8"
          >
            <motion.span variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm">
              Handcrafted Crochet Studio
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-foreground leading-tight">
              Bouquets that last <br/>
              <span className="italic text-primary/80">forever.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/70 max-w-xl mx-auto font-light leading-relaxed">
              Crochet bouquets, plush arrangements, and keychains — each piece stitched by hand with love. Gifts that never wilt, memories that never fade.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base border-primary/20 hover:bg-primary/5 hover:text-primary">
                <Link href="/about">Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif">Made to be kept forever</h2>
            <p className="text-muted-foreground font-light">
              Unlike real flowers, these never wilt. Browse our handmade collections — crochet bouquets, plush arrangements, and adorable keychains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "crochet", name: "Crochet Bouquets", image: "/images/product-blush-romance.png", desc: "Yarn flowers stitched petal by petal" },
              { id: "plush", name: "Plush Bouquets", image: "/images/product-wild-at-heart.png", desc: "Soft, huggable stuffed flower arrangements" },
              { id: "keychains", name: "Flower Keychains", image: "/images/product-garden-party.png", desc: "Tiny blooms to carry everywhere" },
            ].map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer block"
              >
                <Link href="/shop">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-serif text-xl group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="link" className="text-primary hover:text-primary/80 font-medium text-lg underline-offset-4">
              <Link href="/shop">View all products &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Teaser */}
      <section className="py-24 bg-accent/30 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src="/images/hero-2.png"
                alt="Crochet craft supplies and handmade bouquets"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-1 lg:order-2 lg:pl-10"
            >
              <h2 className="text-4xl font-serif leading-tight">More than a gift. <br/><span className="italic text-primary/80">A keepsake.</span></h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                Every stitch is placed with intention. I make crochet bouquets, plush flower arrangements, and keychains that people hold onto long after the occasion has passed. They don't wilt, they don't fade — they just get more loved.
              </p>
              <Button asChild variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Link href="/about">Read my story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why us section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-serif">Why crochet bouquets?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
            {[
              { title: "They last forever", desc: "No wilting, no watering, no waiting. Your bouquet looks just as beautiful years from now." },
              { title: "Fully handmade", desc: "Every petal is crocheted or stitched by hand. No two pieces are ever exactly alike." },
              { title: "Perfect gifts", desc: "Birthdays, graduations, anniversaries, just-because — they suit every occasion and everyone." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="space-y-3"
              >
                <div className="w-10 h-px bg-primary mx-auto" />
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
