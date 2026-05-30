import React from "react";
import Section from "./Section";

const experiences = [
  {
    role: "Senior Product Developer - Integrations",
    company: "SurveySparrow",
    duration: "July 2024 – Present",
    location: "Chennai, India",
    responsibilities: [
      "Owned the end-to-end Integrations module, leading architecture, development, mentoring, and release management for more than 30 external platforms serving enterprise automation workflows.",
      "Architected and delivered AI-powered survey response enrichment using GPT-4o and Gemini 2.0, transforming manual survey analysis into automated structured insights.",
      "Built and scaled marketplace applications using AWS Lambda, DynamoDB, and CloudWatch in serverless environments.",
      "Led cross-team collaboration to resolve critical customer escalations, ensuring production stability and long-term architectural improvements.",
      "Integrated AI-assisted engineering workflows using Cursor and Codex, achieving 69.3% AI-generated code in Q2 2025 and accelerating feature delivery cycles."
    ]
  },
  {
    role: "Product Developer",
    company: "SurveySparrow",
    duration: "Mar 2023 – July 2024",
    location: "Chennai, India",
    responsibilities: [
      "Designed and enhanced integrations connecting SurveySparrow with external platforms (Freshdesk, Zendesk, Zapier), improving product extensibility and automation capabilities.",
      "Partnered with the Rapid Action Team to resolve L2 production issues, ensuring minimal downtime and high customer satisfaction.",
      "Improved and scaled existing integrations, increasing sync performance and reliability for mission-critical customer workflows."
    ]
  },
  {
    role: "Software Engineer I",
    company: "Gain Credit",
    duration: "Jun 2022 – Feb 2023",
    location: "Remote",
    responsibilities: [
      "Delivered end-to-end backend features for financial services products (Lending Stream and Drafty), supporting lending workflows, decisioning systems, and customer lifecycle operations.",
      "Leveraged monitoring and decisioning tools (New Relic, Blaze Advisor, Adobe Campaign) to improve system reliability and campaign efficiency."
    ]
  },
  {
    role: "SDE Intern",
    company: "Gain Credit",
    duration: "Jan 2022 – Jun 2022",
    location: "Remote",
    responsibilities: [
      "Built internal tools for Ops Engineers including permission controls and a custom configuration management console.",
      "Automated customer communication workflows via Adobe Campaign for account suspension events."
    ]
  }
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
           <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="md:w-1/4 shrink-0">
              <p className="text-sm font-medium text-muted-foreground">{exp.duration}</p>
            </div>
            <div className="md:w-3/4 space-y-3">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <p className="text-base text-muted-foreground">{exp.company} • {exp.location}</p>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {exp.responsibilities.map((req, idx) => (
                  <li key={idx} className="leading-relaxed text-[15px]">{req}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
