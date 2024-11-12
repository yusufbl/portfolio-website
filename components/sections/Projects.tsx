"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Expense and Consultancy Tracking App",
    description: "A full-stack web and mobile app for tracking expenses and consultancy services with automated weekly and monthly reports.",
    image: "https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Azure"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Warehouse Management System",
    description: "A comprehensive full-stack web application for efficient warehouse management and inventory tracking.",
    image: "https://images.unsplash.com/photo-1601598704991-eef6114775e0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [".NET Core", "Blazor"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Event Tracking Platform",
    description: "A full-stack web app that manages events, tracks attendees, and monitors invitation statuses in real time.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    technologies: ["ASP.NET Core"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Article Recommendation Engine",
    description: "A personalized article suggestion web app that curates content based on your reading habits and preferences.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
    technologies: ["Django", "Elasticsearch", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Coffee Kiosk Management App",
    description: "A console-based application for managing tables, taking orders, and processing payments efficiently.",
    image: "https://images.unsplash.com/photo-1494346480775-936a9f0d0877?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["C#"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Highlighted Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here is a selection of my recent work and personal projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
