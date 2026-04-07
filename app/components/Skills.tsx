
interface Skill {
  id: number;
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    icon: "/assets/javascript.png",
  },
  {
    id: 2,
    name: "React",
    icon: "/assets/react.png",
  },
  {
    id: 3,
    name: "Node.js",
    icon: "/assets/nodejs.png",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "/assets/typescript.png",
  },
  {
    id: 5,
    name: "Python",
    icon: "/assets/python.png",
  },
  {
    id: 6,
    name: "Nest.js",
    icon: "/assets/nestjs.png",
  },
  {
    id: 7,
    name: "Express.js",
    icon: "/assets/express.png",
  },
  {
    id: 8,
    name: "Angular",
    icon: "/assets/angular.png",
  },
  {
    id: 9,
    name: "Docker",
    icon: "/assets/docker.png",
  },
  {
    id: 10,
    name: "Flutter",
    icon: "/assets/flutter.png",
  },
];

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex flex-col items-center gap-4"
            >
              <div className="mb-4 ">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</   h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
