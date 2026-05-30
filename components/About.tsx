import React from "react";
import Section from "./Section";

import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

const principles = [
  "Architecture that stays readable after the launch rush",
  "AI features with validation, observability, and rollback paths",
  "Integrations that are boring in production for the right reasons",
];

export default function About() {
  return (
    <Section id="about" title="About Me" eyebrow="profile.readme">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="space-y-5 text-muted-foreground">
          <p className="text-2xl font-semibold leading-9 text-foreground">
            Backend engineer with a system-design brain and a strong bias for shipping reliable product work.
          </p>
          <div className={`space-y-4 text-[15px] leading-relaxed ${outfit.className}`}>
            <p>
              I have over 4 years of experience building scalable backend architectures across fintech, lending, and enterprise SaaS platforms. At SurveySparrow, I lead the Integrations module and own architecture, delivery, and reliability for more than 30 external platform integrations.
            </p>
            <p>
              My recent work blends backend depth with AI product engineering: GPT-4o and Gemini-powered survey response enrichment, serverless marketplace applications on AWS, and automation workflows that turn messy operational data into structured insight.
            </p>
            <p>
              I enjoy the engineering work that happens after the demo: production escalations, API contracts, traceable failures, clean rollbacks, and systems that keep getting easier to reason about.
            </p>
          </div>
        </div>

        <div className="editor-panel overflow-hidden rounded-lg">
          <div className="border-b border-border/70 bg-panelStrong px-4 py-3 font-mono text-xs text-muted-foreground">
            principles.config
          </div>
          <div className="space-y-4 p-5">
            {principles.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border/70 bg-background/40 p-4 terminal-edge">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border/70 bg-background/35 p-5 font-mono text-xs leading-6 text-muted-foreground">
            <p><span className="text-primary">status:</span> open to complex backend and AI platform work</p>
            <p><span className="text-accent">mode:</span> build, observe, iterate</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
