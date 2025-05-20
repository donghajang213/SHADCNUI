"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-white dark:bg-zinc-900 px-6 py-12 text-center space-y-24">
      
      {/* ✅ Hero Section */}
      <section id="home">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
          👋 Welcome to My Website
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl">
          Built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>shadcn/ui</strong>. Deployed on Vercel.
        </p>
        <div className="flex gap-4 flex-col sm:flex-row mb-12 justify-center">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>

      {/* ✅ Projects Section */}
      <section id="projects" className="w-full px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-zinc-800 dark:text-white">💼 Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>📊 AI Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              A real-time dashboard built with Next.js and shadcn UI. Visualizes trends and supports filtering.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🧠 Chatbot App</CardTitle>
            </CardHeader>
            <CardContent>
              A smart chatbot using OpenAI API and React. Supports multi-turn conversation and history.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ✅ About Section */}
      <section id="about" className="max-w-2xl px-4">
        <h2 className="text-3xl font-bold mb-4 text-zinc-800 dark:text-white">🙋 About Me</h2>
        <p className="text-zinc-600 dark:text-zinc-300">
          Hello! I&apos;m a passionate developer who enjoys building web applications with modern tools and great UI/UX.
          I specialize in React, TypeScript, and backend APIs. I love working on both personal and real-world projects.
        </p>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className="w-full max-w-xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">📩 Contact</h2>
        <ContactForm />
      </section>

      {/* ✅ Footer */}
      <footer className="mt-24 text-sm text-zinc-500 dark:text-zinc-400">
        © 2025 MySite. All rights reserved.
      </footer>
    </main>
  );
}
