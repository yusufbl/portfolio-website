"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
              alt="Profile"
              fill
              className="object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a drive for creating
              exceptional digital experiences. With expertise in modern web technologies,
              I bring ideas to life through clean code and intuitive interfaces.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="shadow-lg border border-gray-200 rounded-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">Experience</h3>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700">Software Developer</h4>
                    <p className="text-gray-500">2023 January - Present</p>
                    <p className="text-gray-500">Guma Business Solutions</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700">Software Developer Intern</h4>
                    <p className="text-gray-500">2023 November - 2024 January</p>
                    <p className="text-gray-500">Haratres Technology</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700">Software Developer Intern</h4>
                    <p className="text-gray-500">2023 July - 2023 October</p>
                    <p className="text-gray-500">MER Software</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-gray-200 rounded-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">Education</h3>
                  <p className="text-gray-600">Computer Science, BSc at Kocaeli University</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
