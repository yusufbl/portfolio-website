"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="container px-4 py-32 mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Creative Developer & Designer
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Passion-driven innovation, where creativity meets technology to build tomorrow's digital experiences.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}