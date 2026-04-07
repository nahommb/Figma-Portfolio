import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Full Stack Developer - Ethio Solutions",
    description: "As a Full Stack Developer at Ethio Solutions, I was responsible for designing and implementing web applications using a variety of technologies, including React.js, Node.js, and SQL. I collaborated with cross-functional teams to deliver high-quality software solutions that met client requirements and contributed to the overall success of the company.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Frontend Developer & QA Tester - Tria",
    description: "Frontend Developer & QA Tester at Tria, a leading software development company specializing in web and mobile applications. In this role, I was responsible for designing and implementing user interfaces using React.js, ensuring seamless user experiences across various devices. Additionally, I conducted thorough testing to identify and resolve bugs, contributing to the overall quality and performance of the applications.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Freelance Developer",
    description: "As a freelance developer, I have worked on various projects, including web development, mobile app development, and software development. I have experience working with clients from different industries and have delivered high-quality solutions that meet their needs.",
    icon: "/cards/card-3.png",
  },
  // {
  //   id: 4,
  //   title: "FileIT - File Sharing App",
  //   description: "FileIT is a file sharing app that allows you to share files with your friends and family. It is a simple and easy to use app that allows you to share files with your friends and family.",
  //   icon: "/cards/card-4.png",
  // },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              {/* <Link
                href="https://ibiimemon.com/lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link> */}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

