import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const allProducts = [
  {
    id: "blush-crochet",
    category: "crochet",
    name: "Blush Crochet Bouquet",
    image: "/images/product-blush-romance.png",
    description: "Delicate blush pink and cream crocheted roses tied with a satin ribbon. Stitched petal by petal — a timeless gift that lasts forever.",
    price: "From $35",
    tag: "Bestseller",
  },
  {
    id: "golden-crochet",
    category: "crochet",
    name: "Sunshine Crochet Bouquet",
    image: "/images/product-golden-hour.png",
    description: "Warm peach and apricot crocheted sunflowers and roses wrapped in kraft paper. Cheerful, cozy, and impossible to forget.",
    price: "From $40",
    tag: "New",
  },
  {
    id: "daisy-crochet",
    category: "crochet",
    name: "Daisy Dream Bouquet",
    image: "/images/product-soft-sunday.png",
    description: "Tiny crocheted white daisies and baby's breath in pastel tissue paper. Minimal, sweet, and perfect for someone who loves soft things.",
    price: "From $30",
    tag: null,
  },
  {
    id: "rainbow-crochet",
    category: "crochet",
    name: "Rainbow Garden Bouquet",
    image: "/images/about-florist.png",
    description: "A full rainbow of crocheted roses, tulips, and sunflowers — vibrant, joyful, and bursting with color. The showstopper of the collection.",
    price: "From $55",
    tag: "Popular",
  },
  {
    id: "pastel-plush",
    category: "plush",
    name: "Pastel Plush Bouquet",
    image: "/images/product-wild-at-heart.png",
    description: "Soft stuffed plush roses in lavender, baby blue, and mint green. Huggable, adorable, and kawaii in every way.",
    price: "From $45",
    tag: "Bestseller",
  },
  {
    id: "red-plush",
    category: "plush",
    name: "Love Plush Bouquet",
    image: "/images/product-midnight-garden.png",
    description: "Large soft stuffed roses in deep red and pink with green yarn leaves, tied with a bow. The ultimate romantic gift that will never fade.",
    price: "From $50",
    tag: null,
  },
  {
    id: "keychain-bundle",
    category: "keychains",
    name: "Flower Keychain Bundle",
    image: "/images/product-garden-party.png",
    description: "A set of tiny crocheted flower keychains — roses, sunflowers, and daisies in your choice of colors. Perfect as a gift set or treat for yourself.",
    price: "From $12",
    tag: "New",
  },
  {
    id: "keychain-single",
    category: "keychains",
    name: "Mini Bloom Keychain",
    image: "/images/keychain-closeup.png",
    description: "A single handmade crocheted flower keychain on a silver ring. Small enough to fit in your pocket, sweet enough to brighten any day.",
    price: "From $8",
    tag: null,
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "crochet", label: "Crochet Bouquets" },
  { id: "plush", label: "Plush Bouquets" },
  { id: "keychains", label: "Keychains" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? allProducts
    : allProducts.filter((p) => p.category === activeCategory);

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
            The Shop
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-serif">
            Handmade with every stitch.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground font-light leading-relaxed text-lg">
            Crochet bouquets, plush arrangements, and flower keychains — all made to order, all made with love.
          </motion.p>
        </motion.div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-30 bg-background/90 backdrop-blur-md border-b border-border/40 py-4">
        <div className="container mx-auto px-6 flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filtered.map((b) => (
            <motion.div
              key={b.id}
              variants={fadeInUp}
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-5 bg-muted">
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {b.tag && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {b.tag}
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg leading-snug">{b.name}</h3>
                  <span className="text-primary font-medium text-sm pt-0.5 shrink-0">{b.price}</span>
                </div>
                <p className="text-muted-foreground font-light text-xs leading-relaxed flex-1">
                  {b.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
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
            Want something custom?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground font-light leading-relaxed"
          >
            I can crochet any flower in any color combination you have in mind. Send me a message and let's design your perfect piece together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Request Custom Order</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
