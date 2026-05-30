import React from "react";
import Section from "./Section";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "SurveySparrow Apps & Integrations Platform",
    description: "Led and scaled the integrations marketplace module serving enterprise automation use cases across more than 30 external platforms.",
    tech: ["Node.js", "Hapi.js", "AWS Lambda", "DynamoDB"],
    systemAspects: "Serverless architecture, scalable marketplace, high-reliability sync pipelines",
    github: "", // Placeholder
    link: "" // Placeholder
  },
  {
    title: "AI Response Enrichment (Smart Columns)",
    description: "Engineered AI-based enrichment system for automated summaries, keyword extraction, and structured insights using LLM APIs.",
    tech: ["GPT-4o", "Gemini APIs", "Node.js", "Prompt Engineering"],
    systemAspects: "Structured output validation, reliable AI workflows",
    github: "", 
    link: "" 
  },
  {
    title: "Snowflake Integration",
    description: "Designed and launched native integration enabling automated survey data sync to Snowflake data warehouses.",
    tech: ["Node.js", "Snowflake", "SQL", "Event-driven Systems"],
    systemAspects: "Data warehousing, automated data sync",
    github: "",
    link: ""
  }
];

export default function Projects() {
  return (
    <Section id="projects" title="Key Projects" eyebrow="featured.builds">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="editor-panel group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-signal" />
            <div>
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-border/70 pb-4">
                <div>
                  <p className="mb-2 font-mono text-xs text-primary">project_0{index + 1}</p>
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub Repository">
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                  {project.link && (
                    <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Project Link">
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="mb-2 font-mono text-xs font-semibold text-accent">core.systems</h4>
                <p className="text-sm leading-6 text-muted-foreground">{project.systemAspects}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="rounded-md border border-border bg-background/60 px-3 py-1.5 font-mono text-xs font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
