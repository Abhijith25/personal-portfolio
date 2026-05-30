import React from "react";
import Section from "./Section";

const experiences = [
  {
    role: "Senior Product Developer - Integrations",
    company: "SurveySparrow",
    duration: "July 2024 - Present",
    location: "Chennai, India",
    signal: "owns integrations architecture",
    responsibilities: [
      "Owned the end-to-end Integrations module, leading architecture, development, mentoring, and release management for more than 30 external platforms serving enterprise automation workflows.",
      "Architected and delivered AI-powered survey response enrichment using GPT-4o and Gemini 2.0, transforming manual survey analysis into automated structured insights.",
      "Built and scaled marketplace applications using AWS Lambda, DynamoDB, and CloudWatch in serverless environments.",
      "Led cross-team collaboration to resolve critical customer escalations, ensuring production stability and long-term architectural improvements.",
      "Integrated AI-assisted engineering workflows using Cursor and Codex, achieving 69.3% AI-generated code in Q2 2025 and accelerating feature delivery cycles.",
    ],
  },
  {
    role: "Product Developer",
    company: "SurveySparrow",
    duration: "Mar 2023 - July 2024",
    location: "Chennai, India",
    signal: "scaled product extensibility",
    responsibilities: [
      "Designed and enhanced integrations connecting SurveySparrow with external platforms (Freshdesk, Zendesk, Zapier), improving product extensibility and automation capabilities.",
      "Partnered with the Rapid Action Team to resolve L2 production issues, ensuring minimal downtime and high customer satisfaction.",
      "Improved and scaled existing integrations, increasing sync performance and reliability for mission-critical customer workflows.",
    ],
  },
  {
    role: "Software Engineer I",
    company: "Gain Credit",
    duration: "Jun 2022 - Feb 2023",
    location: "Remote",
    signal: "financial services backend",
    responsibilities: [
      "Delivered end-to-end backend features for financial services products (Lending Stream and Drafty), supporting lending workflows, decisioning systems, and customer lifecycle operations.",
      "Leveraged monitoring and decisioning tools (New Relic, Blaze Advisor, Adobe Campaign) to improve system reliability and campaign efficiency.",
    ],
  },
  {
    role: "SDE Intern",
    company: "Gain Credit",
    duration: "Jan 2022 - Jun 2022",
    location: "Remote",
    signal: "internal tooling",
    responsibilities: [
      "Built internal tools for Ops Engineers including permission controls and a custom configuration management console.",
      "Automated customer communication workflows via Adobe Campaign for account suspension events.",
    ],
  },
];

export default function ExperienceView() {
  return (
    <Section id="experience" title="Experience" eyebrow="work.timeline">
      <div className="relative space-y-6 before:absolute before:left-3 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-border md:before:block">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative grid gap-4 md:grid-cols-[180px_minmax(0,1fr)] md:pl-10">
            <span className="absolute left-0 top-6 hidden h-6 w-6 rounded-md border border-primary/50 bg-background md:block">
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-primary shadow-[0_0_22px_hsl(var(--primary)/0.8)]" />
            </span>
            <div className="font-mono text-sm text-muted-foreground md:pt-6">
              <p className="text-primary">{exp.duration}</p>
              <p className="mt-2">{exp.signal}</p>
            </div>
            <div className="editor-panel rounded-lg p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 md:p-6">
              <div className="flex flex-col gap-2 border-b border-border/70 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.company} / {exp.location}</p>
                </div>
                <span className="rounded-md border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                  job_{index + 1}
                </span>
              </div>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {exp.responsibilities.map((req, idx) => (
                  <li key={idx} className="grid grid-cols-[18px_minmax(0,1fr)] gap-3 text-[15px] leading-7">
                    <span className="mt-3 h-1.5 w-1.5 rounded-md bg-accent" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
