import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  // link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Ethio Pay ",
    description: "A secure and user-friendly fintech application designed to enable seamless money transfers from international credit cards to Ethiopian bank accounts. The system ensures fast processing, reliable transaction handling, and an intuitive user experience.",
    // link: "https://www.figma.com/community/file/1441377868897233703/ai-website-landing-design",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    title: "Niya Sports Wear E-commerce",
    description: "E-commerce platform specializing in sportswear, offering a wide range of athletic apparel and accessories. The website provides a seamless shopping experience with features like product browsing, secure checkout, and personalized recommendations to cater to the needs of sports enthusiasts.",
  //  link: "https://www.figma.com/community/file/1371824014208363481/apple-vision-pro-hr-software-design",
    image: "/projects/project-2.png",
  },
   {
    id: 3,
    title: "Ethio Solutions",
    description: "A comprehensive solution for managing and optimizing business operations in Ethiopia. The platform provides tools for financial management, inventory control, and customer relationship management to support the growth and efficiency of local businesses.",
  //  link: "https://www.figma.com/community/file/1371824014208363481/apple-vision-pro-hr-software-design",
    image: "/projects/project-2.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;
          
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:grid-flow-dense" : ""
              }`}>
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                      isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                    }`}>
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Website link */}
                  {/* {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )} */}
                </div>

                {/* Image Content */}
                {/* <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

