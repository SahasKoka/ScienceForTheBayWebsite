import NextImage from 'next/image';
import {Officers, OfficerType} from '@/data/officers';
import Image from "next/image";

export default function OfficersPage() {

  // @ts-ignore
  return <>
    { /* image in background takes up full width and fades to black downwards */}
    <div className="relative w-full">
      <div className="absolute w-full h-[500px]">
        <NextImage src="/DUSD1.jpg" alt="cover photo" fill priority className="object-cover object-middle brightness-75"/>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"/>
      </div>
      <div className="relative mx-auto max-w-screen-xl text-primary z-[5]">
        <section className="h-[500px] mb-12 flex flex-col items-center justify-center sm:mb-24 mx-10">
          <h1 className="pb-20 sm:text-center text-7xl font-bold sm:text-8xl md:text-8xl lg:text-9xl text-white">DUSD Program</h1>
        </section>

        <section className="mx-10">
          <div className="mx-auto flex max-w-screen-xl flex-col">
            <h1 className="mb-5 max-w-2xl scroll-m-24 text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
              What is the DUSD Program?
            </h1>
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex flex-col">
                <p className="mb-6 font-light leading-relaxed text-balance md:text-lg lg:mb-8 lg:text-xl">
                  Throughout Dublin Unified School District, volunteers from Dublin High School volunteer at
                  schools in the district, inspiring a curiosity in STEM. The curriculum focuses on experiments
                  and interactive games making learning enjoyable for the students. Through over 60 classes across
                  the school district, the initiative has positively impacted the lives of 120+ students.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
}