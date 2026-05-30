"use client";

import React, { useRef, useState, useEffect } from "react";
import Section from "./Section";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const AI_TOOLS = [
  {
    name: "Cursor",
    imgSrc: "https://cdn.simpleicons.org/cursor/ffffff",
    fallbackSrc: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128",
    invertInLightMode: true,
    description: "AI-first code editor",
    command: "cursor .",
  },
  {
    name: "Codex",
    imgSrc: "https://cdn.simpleicons.org/openai/ffffff",
    fallbackSrc: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
    invertInLightMode: true,
    description: "Agentic code generation",
    command: "codex exec",
  },
  {
    name: "Claude Code",
    imgSrc: "https://cdn.simpleicons.org/anthropic/ffffff",
    fallbackSrc: "https://www.google.com/s2/favicons?domain=anthropic.com&sz=128",
    invertInLightMode: true,
    description: "Coding assistant for complex codebases",
    command: "claude --continue",
  },
  {
    name: "Antigravity",
    imgSrc: "https://www.google.com/s2/favicons?domain=antigravity.google&sz=128",
    fallbackSrc: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    invertInLightMode: false,
    description: "Agentic development environment",
    command: "agent.run",
  },
  {
    name: "Kiro",
    imgSrc: "https://www.google.com/s2/favicons?domain=kiro.dev&sz=128",
    fallbackSrc: "https://kiro.dev/favicon.ico",
    invertInLightMode: false,
    description: "Spec-driven AI development",
    command: "kiro spec",
  },
  {
    name: "LiteLLM",
    imgSrc: "https://www.google.com/s2/favicons?domain=litellm.ai&sz=128",
    fallbackSrc: "https://www.google.com/s2/favicons?domain=docs.litellm.ai&sz=128",
    invertInLightMode: false,
    description: "LLM API routing and load balancing",
    command: "proxy.start",
  },
  {
    name: "Perplexity",
    imgSrc: "https://cdn.simpleicons.org/perplexity/ffffff",
    fallbackSrc: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128",
    invertInLightMode: true,
    description: "AI research and answer engine",
    command: "research.query",
  },
  {
    name: "CrewAI",
    imgSrc: "https://www.google.com/s2/favicons?domain=crewai.com&sz=128",
    fallbackSrc: "https://cdn.simpleicons.org/crewai/ffffff",
    invertInLightMode: false,
    description: "Multi-agent workflow framework",
    command: "crew.kickoff",
  },
];

type Tool = (typeof AI_TOOLS)[number];

function ToolLogo({ tool }: { tool: Tool }) {
  const [src, setSrc] = useState(tool.imgSrc);
  const [failed, setFailed] = useState(false);

  return (
    <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg border border-border bg-background/70 p-3 terminal-edge transition-colors group-hover:border-primary/60">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${tool.name} logo`}
          loading="lazy"
          onError={() => {
            if (src !== tool.fallbackSrc) {
              setSrc(tool.fallbackSrc);
              return;
            }
            setFailed(true);
          }}
          className={`h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 ${tool.invertInLightMode ? "invert dark:invert-0" : ""}`}
        />
      ) : (
        <span className="font-mono text-sm font-bold text-primary">
          {tool.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </span>
      )}
    </div>
  );
}

export default function AITools() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <Section id="ai-tools" title="AI Toolchain" eyebrow="agent.toolbox" className="relative overflow-hidden">
      <div className="absolute inset-x-5 top-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="relative z-10 space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <p className="max-w-2xl font-mono text-sm leading-7 text-muted-foreground md:text-base">
              // Tools I use to move faster without treating production quality as optional.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll("left")} 
              disabled={!canScrollLeft}
              className={`rounded-md border p-3 transition-all ${canScrollLeft ? "border-primary/50 text-foreground hover:bg-primary/15" : "border-border text-muted-foreground opacity-30 cursor-not-allowed"}`}
              aria-label="Scroll AI tools left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`rounded-md border p-3 transition-all ${canScrollRight ? "border-primary/50 text-foreground hover:bg-primary/15" : "border-border text-muted-foreground opacity-30 cursor-not-allowed"}`}
              aria-label="Scroll AI tools right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-8 pt-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {AI_TOOLS.map((tool, index) => (
              <div
                key={tool.name}
                className="group relative flex min-h-[250px] w-[280px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-lg border border-border/70 bg-panel/80 p-5 shadow-[0_12px_26px_hsl(var(--primary)/0.07)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_16px_34px_hsl(var(--primary)/0.14)] md:w-[320px]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-signal opacity-70" />

                <div className="relative z-10 flex items-start justify-between">
                  <ToolLogo tool={tool} />
                  <span className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    ai_{index + 1}
                  </span>
                </div>

                <div className="relative z-10 mt-6 space-y-3">
                  <div>
                    <h3 className="font-mono text-xl font-semibold text-foreground">{tool.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{tool.description}</p>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/70 bg-background/45 px-3 py-3 font-mono text-xs text-muted-foreground terminal-edge">
                    <span><span className="text-primary">$</span> {tool.command}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </Section>
  );
}
