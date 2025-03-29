import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8 mt-16">
        <h1 className="text-5xl font-bold text-foreground mb-6 text-center">
          About <span className="text-primary">SAGA</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-center">
          Transforming education through connection, emotional intelligence, and
          collaboration.
        </p>
      </section>

      {/* Our Story */}
      <section className="min-h-screen py-16 px-8 flex items-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground mb-6">
                SAGA is an educational technology startup founded on the belief
                that emotional intelligence is just as vital as academic
                achievement.
              </p>
              <p className="text-lg text-foreground mb-6">
                Our mission is to create an integrated online environment that
                brings parents, teachers, and students together—strengthening
                the support system around every young learner to foster social
                and emotional development from an early age.
              </p>
              <p className="text-lg text-foreground">
                We envision a world where education nurtures not just brilliant
                minds, but compassionate, emotionally intelligent individuals
                ready to thrive in all aspects of life.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-6 relative h-72 md:h-full">
              {/* Placeholder for image - replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <p className="text-center">
                  Image showcasing students, parents, and teachers collaborating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="min-h-screen bg-gradient-to-b from-background to-muted py-16 px-8 flex items-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connection</h3>
              <p className="text-muted-foreground">
                We believe in breaking down barriers between home and school to
                create a unified support system for learners.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Emotional Intelligence
              </h3>
              <p className="text-muted-foreground">
                We prioritize social-emotional development as a fundamental
                aspect of education and growth.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We empower parents, teachers, and students to work together with
                shared insights and tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="min-h-screen py-16 px-8 flex items-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Our Approach
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  A Unified Digital Ecosystem
                </h3>
                <p className="text-muted-foreground">
                  We're building a platform that breaks down silos between home
                  and school. By connecting parents, educators, and students in
                  one seamless interface, SAGA ensures that everyone involved in
                  a child's growth has access to the same insights, tools, and
                  communication channels—making collaboration easy, meaningful,
                  and proactive.
                </p>
              </div>
              <div className="md:w-1/2 bg-muted rounded-xl p-6 h-48 md:h-64 flex items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Platform visualization
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="md:w-1/2 bg-muted rounded-xl p-6 h-48 md:h-64 flex items-center justify-center">
                <p className="text-center text-muted-foreground">
                  SEL components illustration
                </p>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Social-Emotional Skills at the Core
                </h3>
                <p className="text-muted-foreground">
                  In today's fast-paced and often overwhelming world,
                  social-emotional learning (SEL) is not a luxury—it's a
                  necessity. Our technology is designed to support the
                  development of core SEL competencies like self-awareness,
                  empathy, emotional regulation, and responsible
                  decision-making. Through interactive modules, real-time
                  feedback, and progress tracking, we empower students to
                  understand themselves and relate better to others.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Personalized, Data-Driven, Human-Centered
                </h3>
                <p className="text-muted-foreground">
                  We leverage data to offer personalized learning experiences
                  without losing the human touch. Our platform adapts to each
                  student's needs while providing educators and families with
                  actionable insights to guide their support. The result? A more
                  compassionate, informed, and connected educational experience.
                </p>
              </div>
              <div className="md:w-1/2 bg-muted rounded-xl p-6 h-48 md:h-64 flex items-center justify-center">
                <p className="text-center text-muted-foreground">
                  Data visualization interface
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="min-h-[50vh] bg-gradient-to-br from-navy to-purple py-16 px-8 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join us in reshaping education
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Together, we can create an educational ecosystem that nurtures the
            whole student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/team"
              className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Meet Our Team
            </Link>
            <Link
              href="/contact"
              className="border border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
