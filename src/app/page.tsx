"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-zinc-900 px-6 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
        👋 Welcome to My Website
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl">
        Built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>shadcn/ui</strong>. Deployed on Vercel.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row mb-12">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>

      {/* 🔽 Projects Section */}
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl w-full px-4">
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
    </main>
  );
}
