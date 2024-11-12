"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Database, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "React-Native", "Next.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "C#", ".Net Core", "Java", "Django", "Python", "PostgreSQL", "REST APIs"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["UI/UX Design", "Figma", "Canva", "Responsive Design"],
  },
  {
    icon: Globe,
    title: "Other Skills",
    skills: ["Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <skill.icon className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skill.skills.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}