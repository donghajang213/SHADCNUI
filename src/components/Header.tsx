"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // 햄버거 아이콘
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 border-b bg-white dark:bg-zinc-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-zinc-800 dark:text-white">
          MySite
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-6 items-center text-sm text-zinc-700 dark:text-zinc-200">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* 모바일 메뉴 */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 mt-12">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
