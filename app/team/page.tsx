"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  borderColor: "primary" | "secondary";
}

const teamMembers: TeamMember[] = [
  {
    name: "Henrique",
    role: "CEO and Founder",
    photo: "/team/henrique.jpg", // Add your photo path here
    borderColor: "primary",
    bio: [
      "A Boston University student majoring in neuroscience, data science and business administration. Henrique has engaged in entrepreneurial projects from an early age, founding the Merzenich Corporation and Merzenich Institute, where he created a life-long impact on over 3,000 neurodivergent individuals through scientific competitions, case studies, and public libraries worldwide.",
      "As the youngest competitor in history at the World Schools Debating Championship for the Brazilian National Team, he also created Brazil's largest Model United Nations high school project, ArenaMun. His achievements earned him recognition as one of the 50 most prominent social scientific entrepreneurs in the world by the Varkey Foundation from a pool of over 5,000 applicants.",
    ],
  },
  {
    name: "Elijah Phommachanh",
    role: "Designer and Product Developer",
    photo: "/team/elijah.jpg", // Add your photo path here
    borderColor: "secondary",
    bio: [
      "A student at Boston University, Class of 2028, and a graduate of Lynn English High School. Elijah brings hands-on experience from work as a Tool Inventory Manager and General Laborer at G&S Wood Floor Service. Skilled in CAD design, prototyping, 3D printing, blueprint reading, and sales and persuasion, Elijah is also fluent in Korean.",
      "His academic achievements include the MCAS Student Achievement Award, Dean's List, and Honor Roll, along with strong AP scores—earning a 5 in U.S. Government and 4s in Statistics, Biology, and English Literature. Committed to community service, Elijah has volunteered at Golden Monkey Cafe, served as a caretaker at the Boys & Girls Club, and supported registration efforts for Innovate@BU.",
    ],
  },
];

export default function Team() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center p-8 mt-16">
        <h1 className="text-5xl font-bold text-foreground mb-6 text-center">
          Our <span className="text-primary">Team</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl text-center">
          Meet the passionate individuals driving SAGA's mission forward.
        </p>
      </section>

      {/* Team Members */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`relative h-64 w-64 rounded-full overflow-hidden mb-6 border-4 border-${member.borderColor}`}
                >
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover scale-125"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Photo of {member.name}
                      </p>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {member.name}
                </h2>
                <h3
                  className={`text-xl font-medium text-${member.borderColor} mb-4`}
                >
                  {member.role}
                </h3>
                {member.bio.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`text-muted-foreground text-center ${
                      idx > 0 ? "mt-4" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="min-h-[100vh] bg-gradient-to-br from-navy to-purple py-16 px-8 flex items-center mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Are you passionate about transforming education through emotional
            intelligence and technology? We're always looking for talented
            individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="border border-white text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="border border-primary text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
