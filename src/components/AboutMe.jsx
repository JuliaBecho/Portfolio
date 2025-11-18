import { Code, Briefcase, Camera } from "lucide-react";

import alien from "@/assets/alien.png";
import shark from "@/assets/shark.png";

function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold md-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              Hi! I'm Julia Becho, a passionate web developer with a strong
              focus on front-end technologies. I graduated in Full Stack Web
              Development from CCTB (Canadian College of Technology and
              Business), where I gained solid experience building responsive,
              user-focused web applications.
            </p>
            <p className="text-muted-foreground">
              I hold a Front-End Development certification from Microsoft, and
              I've worked on a variety of personal and collaborative projects
              that demonstrate my skills in HTML, CSS, JavaScript, React, and
              modern UI/UX practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {/* Alien (aparece apenas no modo escuro) */}
            <img
              src={alien}
              alt="alien"
              width={250}
              className="mx-auto hidden dark:block"
            />

            {/* Tubarão (aparece apenas no modo claro / fundo branco) */}
            <img
              src={shark}
              alt="shark"
              width={250}
              className="mx-auto block dark:hidden"
            />

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites with modern frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI UX Desing</h4>
                  <p className="text-muted-foreground">
                    Desing intuitive user interfaces and semless user experience
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Camera className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Photograpy</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites with modern frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
