import React from "react";
import Section from "./Section";

const skillGroups = [
  {
    title: "Backend & Architecture",
    skills: ["Node.js", "Python", "REST APIs", "Microservices", "Event-driven systems", "Hapi.js", "Sequelize"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "S3", "CloudWatch", "Docker", "ArgoCD", "CI/CD"]
  },
  {
    title: "Monitoring & Observability",
    skills: ["New Relic", "ElasticSearch", "Logz.io"]
  },
  {
    title: "Languages & Tools",
    skills: ["JavaScript", "TypeScript", "SQL"]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" eyebrow="stack.index">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <div key={index} className="editor-panel rounded-lg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
            <div className="mb-5 flex items-center justify-between border-b border-border/70 pb-3">
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="rounded-md border border-border bg-background/55 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
