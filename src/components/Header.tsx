"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 border-b bg-white dark:bg-zinc-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-zinc-800 dark:text-white">
          MySite
        </a>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-6 items-center text-sm text-zinc-700 dark:text-zinc-200">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
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
              <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
