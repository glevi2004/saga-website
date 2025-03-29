import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-center">
          Connecting the <span className="text-primary">Educational</span>{" "}
          Ecosystem
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-center mb-10">
          Empowering parents, teachers, and students through emotional
          intelligence and collaborative education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/about"
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-full transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="min-h-screen bg-gradient-to-b from-background to-muted py-16 px-8 flex items-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-background rounded-xl p-8 shadow-lg border-t-4 border-primary">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Create an Integrated Educational Environment
              </h3>
              <p className="text-muted-foreground">
                We're building a unified digital ecosystem that connects
                parents, educators, and students in one seamless
                interface—ensuring everyone involved in a child's growth has
                access to the same insights, tools, and communication channels.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 shadow-lg border-t-4 border-secondary">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Promote Social Emotional Skills
              </h3>
              <p className="text-muted-foreground">
                Our platform supports the development of core social-emotional
                learning competencies like self-awareness, empathy, emotional
                regulation, and responsible decision-making—making these skills
                an integral part of education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Brief Overview */}
      <section className="min-h-screen py-16 px-8 flex items-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
              <h3 className="text-xl font-semibold mb-2">Unified Platform</h3>
              <p className="text-muted-foreground">
                Breaking down silos between home and school to foster
                collaboration.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">SEL Focus</h3>
              <p className="text-muted-foreground">
                Prioritizing social-emotional learning alongside academic
                achievement.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-muted-foreground">
                Personalized experiences backed by insights and actionable
                recommendations.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/what-we-do"
              className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
            >
              Learn more about our approach
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[50vh] bg-gradient-to-br from-navy to-purple py-16 px-8 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform education?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join us in creating an educational experience that values emotional
            intelligence alongside academic achievement.
          </p>
          <Link
            href="/contact"
            className="bg-pink hover:bg-pink/90 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
