"use client";

import React, { FormEvent, useState } from "react";
import Section from "./Section";
import Link from "next/link";
import { Linkedin, Mail, X } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  purpose: "Opportunity",
  message: "",
};

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry - ${form.purpose}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Purpose: ${form.purpose}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:abhijithvijayakumarsarasija@gmail.com?subject=${subject}&body=${body}`;
    setIsOpen(false);
    setForm(initialForm);
  };

  return (
    <Section id="contact" title="Get In Touch" eyebrow="contact.dispatch">
      <div className="editor-panel flex flex-col gap-8 overflow-hidden rounded-lg p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="max-w-md space-y-4">
          <p className="font-mono text-sm text-primary">await inbox.open()</p>
          <p className="text-lg leading-8 text-muted-foreground">
            I am open to backend, integrations, and AI platform work where reliability matters as much as speed. Send a note and I will get back to you.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-semibold text-primaryForeground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Say Hello
            <Mail className="ml-2 h-4 w-4" />
          </button>
          
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <Link 
              href="https://linkedin.com/in/abhijith-vijayakumar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-md border border-border bg-background/55 p-4 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="mailto:abhijithvijayakumarsarasija@gmail.com"
              className="rounded-md border border-border bg-background/55 p-4 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-background/80 px-4 py-8 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <div className="editor-panel w-full max-w-xl overflow-hidden rounded-lg">
            <div className="flex items-center justify-between border-b border-border/70 bg-panelStrong px-5 py-4">
              <div>
                <p className="font-mono text-xs text-primary">contact.form</p>
                <h3 id="contact-modal-title" className="mt-1 text-xl font-semibold text-foreground">
                  Say Hello
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-border bg-background/50 p-2 text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                aria-label="Close contact form"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Name
                  <input
                    required
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="w-full rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="w-full rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Phone
                  <input
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className="w-full rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Optional"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-foreground">
                  Purpose
                  <select
                    value={form.purpose}
                    onChange={(event) => updateField("purpose", event.target.value)}
                    className="w-full rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option>Opportunity</option>
                    <option>Collaboration</option>
                    <option>Project discussion</option>
                    <option>General message</option>
                  </select>
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-foreground">
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="w-full resize-none rounded-md border border-border bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Tell me what you would like to discuss."
                />
              </label>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md border border-border bg-background/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primaryForeground transition-colors hover:bg-primary/90"
                >
                  Open Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Section>
  );
}
