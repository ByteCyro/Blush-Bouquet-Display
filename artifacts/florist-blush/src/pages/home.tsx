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
            alt="Beautiful bouquet on a wooden table" 
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
              Handcrafted Floral Studio
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-foreground leading-tight">
              Handcrafted with love, <br/>
              <span className="italic text-primary/80">bloomed just for you.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/70 max-w-xl mx-auto font-light leading-relaxed">
              Delicate, personal floral arrangements for life's beautiful moments. Each bouquet is thoughtfully designed to bring a touch of nature's poetry into your hands.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/shop">Shop Collections</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base border-primary/20 hover:bg-primary/5 hover:text-primary">
                <Link href="/about">Our Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif">A Touch of Romance</h2>
            <p className="text-muted-foreground font-light">
              Explore our signature collections, carefully curated to evoke warmth, joy, and wild beauty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: "blush", name: "Blush Romance", image: "/images/product-blush-romance.png", desc: "Soft pinks and cream roses" },
              { id: "golden", name: "Golden Hour", image: "/images/product-golden-hour.png", desc: "Warm peach and apricot tones" },
              { id: "wild", name: "Wild at Heart", image: "/images/product-wild-at-heart.png", desc: "Wildflowers and eucalyptus" },
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
              <Link href="/shop">View all bouquets &rarr;</Link>
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
                alt="Florist holding flowers"
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
              <h2 className="text-4xl font-serif leading-tight">More than just flowers. <br/><span className="italic text-primary/80">It's a feeling.</span></h2>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                I believe that flowers speak the language of the heart. Every stem is chosen with care, every ribbon tied with intention. FloristBlush was born from a desire to bring a little more beauty and warmth into the everyday.
              </p>
              <Button asChild variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Link href="/about">Read my story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
