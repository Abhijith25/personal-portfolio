import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Abhijith V S. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
