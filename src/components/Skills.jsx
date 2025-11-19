import { useState } from "react";

function Skills() {
  const skills = [
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 55, category: "frontend" },
    { name: "React", level: 70, category: "frontend" },

    { name: "Node.js", level: 95, category: "backend" },
    { name: "Firebase", level: 55, category: "backend" },
    { name: "Rest APIs", level: 70, category: "backend" },

    { name: "Git/Github", level: 95, category: "tools" },
    { name: "Vs Code", level: 55, category: "tools" },
    { name: "Figma", level: 70, category: "tools" },
  ];

  const categories = ["all", "frontend", "backend", "tools"];

  const [activeCategory, setActiveCategory] = useState("all");

  const filtredSkills = skills.filter((skill) => {
    return activeCategory === "all" || skill.category === activeCategory
  })

  return (
    <section
      id="skills"
      className="py-24 px-4 relative min-h-scren flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mb-16 text-lg">
          {
            categories.map((category, key) => (
              <button key={key}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))
          }
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {filtredSkills.map((skill, key) => (
            <div key={key} className="skill-circle group cursor-pointer">
              <div className="relative w-32 h-32 md:w-36 lg:w-40 lg:h-40">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-blue-500/30 group-hover:border-blue-400/60 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/20"></div>

                <svg
                  className="absolute inset-0 w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(59,130,246,0.1)"
                    strokeWidth="3"
                  />

                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(59,130,246)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="ground-hover:stroke-blue-300 transition-all duration-300"
                    strokeDasharray={`${skill.level * 2.83} ${(100 - skill.level) * 2.83
                      }`}
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(59, 130,256,0.4))",
                    }}
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                  <h3 className="font-bold text-white text-sm md:text-base lg-text-lg mb-1 leading-tight">
                    {skill.name}
                  </h3>

                  <span className="text-blue-400 text-xs md:text-sm font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>


            </div>


          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
