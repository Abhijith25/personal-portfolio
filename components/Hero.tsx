"use client";

import React, { useState, useEffect } from "react";
import Section from "./Section";
import Link from "next/link";
import { Braces, Cpu, Linkedin, Mail, Sparkles } from "lucide-react";

const metrics = [
  { value: 4, suffix: "+", decimals: 0, label: "years building production systems" },
  { value: 30, suffix: "+", decimals: 0, label: "external integrations owned" },
  { value: 69.3, suffix: "%", decimals: 1, label: "AI-assisted code in Q2 2025" },
];

function AnimatedMetric({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    let startTime: number | null = null;
    const duration = 1300;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const formattedValue = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  return (
    <>
      {formattedValue}
      {suffix}
    </>
  );
}

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Abhijith";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <Section className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center pb-20">
        <div className="max-w-5xl reveal-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 font-mono text-xs font-semibold text-primary terminal-edge">
            <Sparkles className="h-4 w-4" />
            Backend Engineer - AI Integrations - System Design
          </div>

          <h1 className="text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Hi, I am{" "}
            <span className="font-mono text-primary">{text}</span>
            <span className="ml-2 inline-block h-[0.82em] w-[0.46em] translate-y-[5px] animate-blink rounded-sm bg-primary" />
          </h1>

          <p className="mt-6 max-w-3xl border-l-2 border-primary/50 pl-5 text-base leading-8 text-muted-foreground md:text-lg">
            I design and develop scalable APIs, integration platforms, serverless workflows, and AI-powered automation with the practical details teams care about: clear ownership, observable failures, and calm production behavior.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Connect</span>
            <div className="flex items-center gap-3">
              <Link href="https://linkedin.com/in/abhijith-vijayakumar" target="_blank" rel="noopener noreferrer" className="rounded-md border border-border bg-panel p-2.5 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:abhijithvijayakumarsarasija@gmail.com" className="rounded-md border border-border bg-panel p-2.5 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-border/70 bg-panel/70 p-5 terminal-edge">
                <p className="font-mono text-4xl font-bold text-accent md:text-5xl">
                  <AnimatedMetric value={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-panel px-3 py-2"><Cpu className="h-4 w-4 text-primary" /> serverless</span>
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-panel px-3 py-2"><Braces className="h-4 w-4 text-accent" /> structured outputs</span>
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-panel px-3 py-2">observability</span>
        </div>
      </Section>
    </section>
  );
}
