import Image from 'next/image';
import {Projects, ProjectType} from "@/data/projects";

export default function ProjectPage() {

  return (
    <div className="w-full flex flex-col gap-16 relative mt-16">
      <section className="mx-10">
        <div className="mx-auto flex max-w-screen-xl flex-col">
          <h1 className="mb-10 max-w-2xl scroll-m-24 text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {Projects.map((project: ProjectType) => (
              <div key={project.title} className="w-full bg-neutral-200 shadow-2xl">
                <div className="w-full h-72 relative">
                  <Image src={project.imageUrl} alt={project.title} className="object-cover w-full" fill />
                </div>

                <div className="p-8">
                  <h4 className="font-medium mb-2 text-lg">{project.title}</h4>
                  <p className="font-light">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
