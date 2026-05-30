import React from "react";

export default function FooterView() {
  return (
    <footer className="mt-auto w-full border-t border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-5 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row lg:px-10">
        <p>(c) {new Date().getFullYear()} Abhijith. All rights reserved.</p>
        <p className="mt-2 font-mono md:mt-0">next build --output export</p>
      </div>
    </footer>
  );
}
