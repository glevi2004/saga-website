"use client";

import Navbar from "@/components/Navbar";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <section className="flex flex-col items-center justify-center flex-1 px-4">
        <h1 className="mt-8 text-5xl font-bold text-foreground mb-4 text-center">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground mb-6 text-center max-w-2xl">
          Ready to transform education? We&apos;re here to help you create an
          environment that values emotional intelligence alongside academic
          achievement.
        </p>
        <p className="text-lg text-muted-foreground mb-12 text-center">
          Reach out to our team to learn more about our solutions.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <a
            href="mailto:hpgodoi@bu.edu"
            className="group flex items-center justify-center gap-3 border border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-xl transition-all duration-300"
          >
            <IoMailOutline className="h-6 w-6" />
            <span className="text-lg">Email</span>
          </a>

          <a
            href="tel:+5564999851333"
            className="group flex items-center justify-center gap-3 border-2 border-primary text-primary hover:bg-primary/10 font-medium px-8 py-4 rounded-xl transition-all duration-300"
          >
            <FiPhone className="h-6 w-6" />
            <span className="text-lg">Call</span>
          </a>
        </div>
      </section>
    </main>
  );
}
