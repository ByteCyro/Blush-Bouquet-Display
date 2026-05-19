import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const bouquets = [
  {
    id: "blush-romance",
    name: "Blush Romance",
    image: "/images/product-blush-romance.png",
    description: "Soft blush pink roses and cream garden roses wrapped in satin ribbon. A timeless declaration of affection, perfect for anniversaries or just because.",
    price: "From $55",
    tag: "Bestseller",
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    image: "/images/product-golden-hour.png",
    description: "Warm peach ranunculus, apricot garden roses, and sun-kissed coral spray roses. Like holding a sunset in your hands.",
    price: "From $60",
    tag: "New",
  },
  {
    id: "wild-at-heart",
    name: "Wild at Heart",
    image: "/images/product-wild-at-heart.png",
    description: "Lavender, eucalyptus, chamomile, and wildflowers tied with rustic twine. For the free spirit who loves the beauty of untamed nature.",
    price: "From $50",
    tag: null,
  },
  {
    id: "soft-sunday",
    name: "Soft Sunday",
    image: "/images/product-soft-sunday.png",
    description: "Pure white spray roses, baby's breath, and pale lilac lisianthus in a minimal, tender arrangement. Quiet beauty at its most refined.",
    price: "From $48",
    tag: null,
  },
  {
    id: "garden-party",
    name: "Garden Party",
    image: "/images/product-garden-party.png",
    description: "Pink peonies, coral dahlias, and mixed garden blooms overflowing with color and joy. The life of every celebration.",
    price: "From $70",
    tag: "Popular",
  },
  {
    id: "midnight-garden",
    name: "Midnight Garden",
    image: "/images/product-midnight-garden.png",
    description: "Deep burgundy roses, plum dahlias, and forest green eucalyptus in a dramatic, moody arrangement. Sophisticated and unforgettable.",
    price: "From $65",
    tag: null,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Shop() {
  return (
    <div className="w-full pt-24 pb-20">
      {/* Header */}
      <section className="text-center py-16 px-6 bg-accent/20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="max-w-2xl mx-auto space-y-4"
        >
          <motion.span variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-xs">
            Our Collections
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif">
            Every bouquet, a story.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed text-lg">
            Browse our handcrafted collections. Each arrangement is made fresh to order with seasonal blooms chosen with care.
          </motion.p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {bouquets.map((b) => (
            <motion.div
              key={b.id}
              variants={fadeInUp}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-muted">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {b.tag && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {b.tag}
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-xl">{b.name}</h3>
                  <span className="text-primary font-medium text-sm pt-1">{b.price}</span>
                </div>
                <p className="text-muted-foreground font-light text-sm leading-relaxed flex-1">
                  {b.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full mt-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors w-full"
                >
                  <Link href="/contact">Order Now</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Custom Order Banner */}
      <section className="bg-accent/30 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif"
          >
            Don't see what you're looking for?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground font-light leading-relaxed"
          >
            Every bouquet can be customized to your colours, occasion, and style. Reach out and let's create something unique together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Request Custom Bouquet</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
