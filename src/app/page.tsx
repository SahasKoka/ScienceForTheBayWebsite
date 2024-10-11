"use client"
import Image from 'next/image';
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

import userPrefersReducedMotion from "@/hooks/userPrefersReducedMotion";

import EmojiScene from "@/components/EmojiCanvas";
import {Partners, PartnerType} from "@/data/partners";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = userPrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // If the user prefers reduced motion, set the opacity to 1
    if (prefersReducedMotion || window.location.hash) {
      gsap.set(
        ".hero_rest, .hero_heading_title",
        {opacity: 1}
      )

      return
    }

    const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

    tl.fromTo(".hero_heading_title", {scale: 0.5}, {scale: 1, opacity: 1, duration: 1.4})
      .fromTo(".hero_rest", {y: 60}, {y: 0, opacity: 1, duration: 1.5})


  }, {scope: container})

  return (
    <div ref={container} className="w-full flex flex-col gap-16 relative">
      {/*<div className="absolute inset-0 -z-10 h-screen w-full">*/}
      {/*  <Image src={"/sftbCover.jpg"} alt={"Hero Image"} layout={"fill"} objectFit={"cover"} className="brightness-75"/>*/}
      {/*</div>*/}

      <div className="absolute w-full h-screen">
        <Image src="/sftbCover.jpg" alt="Hero Image" fill className="object-cover md:object-center object-center brightness-75"/>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"/>
      </div>
      <section className="mx-10 h-screen flex flex-col">
        <div
          className="mx-auto flex h-1/2 max-w-screen-xl items-center justify-center opacity-0 hero_heading_title sm:h-full"
        >
          <div className="flex w-full flex-col items-center sm:mb-24 sm:mt-0 mt-24">
            <h1
              className="mb-6 max-w-5xl text-5xl font-semibold leading-none tracking-tight text-ascent sm:text-center sm:text-8xl md:text-9xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              Science For
              <span className="text-white">
               &nbsp;The Bay
              </span>
            </h1>
            <p
              className="font-mono w-full mb-6 max-w-2xl text-sm font-light text-white sm:text-center sm:text-lg md:text-lg lg:mb-8 lg:text-lg xl:text-xl 2xl:text-2xl">
              "Inspiring the next generation of scientists"
            </p>
            {/*<p className="mb-6 max-w-2xl font-light text-gray-400 text-balance md:text-lg lg:mb-8 lg:text-xl">*/}
            {/*  Contact me at <span className="font-bold">somwonglukas@gmail.com</span>*/}
            {/*</p>*/}
          </div>
        </div>
        <EmojiScene/>
      </section>
      <section className="mx-10">
        <div className="mx-auto flex max-w-screen-xl flex-col">
          <h1 id="about" className="mb-5 max-w-2xl scroll-m-24 text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            About Us
          </h1>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
              <p className="mb-6 font-light leading-relaxed text-balance md:text-lg lg:mb-8 lg:text-xl">
                Science for the Bay is a <span className="font-extrabold">501c3 non-profit organization</span> where high school students teach elementary school students
                comprehensive science lessons. The program covers all types of science from biology to chemistry to physics.
                The high school students engage the elementary school students in interactive activities and experiments to make
                the learning experience engaging and hands-on. This is a great space to share our passion for science and the
                impact it can have on young minds. We strive to <span className="font-extrabold">make science education fun and accessible for all students</span>,
                fostering a love for learning and exploration.
              </p>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <p className="mb-6 font-light leading-relaxed text-balance md:text-lg lg:mb-8 lg:text-xl">
               "At Science for the Bay, we believe in the potential of every child  to discover the wonders of science,
                to shape their own future, and to contribute positively to the world."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-10">
        <div className="mx-auto flex max-w-screen-xl flex-col">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="order-2 md:order-1 flex flex-col md:w-1/2 items-center">
              <Image src="/ourMissionImage.jpg" alt="Classroom of children" width={500} height={500}  className="rounded-xl shadow-lg shadow-stone-700 hidden lg:block"/>
              <Image src="/ourMissionImage.jpg" alt="Classroom of children" width={300} height={300}  className="rounded-xl shadow-lg shadow-stone-700 lg:hidden"/>
            </div>
            <div className="order-1 md:order-2 flex flex-col md:w-1/2 justify-center">
              <h1 className="mb-5 lg:max-w-2xl scroll-m-24 lg:text-center text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
                Our Mission
              </h1>
              <p className="mb-6 font-light leading-relaxed lg:text-center text-balance md:text-lg lg:mb-8 lg:text-xl">
                We are 501(c)(3) non-profit dedicated to spreading STEM education to children with developmental disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-10">
        <div className="mx-auto flex max-w-screen-xl flex-col">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="order-1 md:order-2 flex flex-col md:w-1/2 justify-center">
              <h1 className="mb-5 lg:max-w-2xl scroll-m-24 lg:text-center text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
                Our Visison
              </h1>
              <p className="mb-6 font-light leading-relaxed lg:text-center text-balance md:text-lg lg:mb-8 lg:text-xl">
               Our vision is to create a community where science education is accessible, engaging, and
                inclusive, inspiring the next generation of scientists, engineers, and innovators.
              </p>
            </div>
            <div className="order-1 md:order-2 flex flex-col md:w-1/2 items-center">
              <Image src="/ourVisionImage.jpg" alt="Classroom of children" width={500} height={500}  className="rounded-xl shadow-lg shadow-stone-700 hidden lg:block"/>
              <Image src="/ourVisionImage.jpg" alt="Classroom of children" width={300} height={300}  className="rounded-xl shadow-lg shadow-stone-700 lg:hidden"/>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-10">
        <div className="mx-auto flex max-w-screen-xl flex-col">
          <h1 className="mb-10 lg:max-w-2xl scroll-m-24 text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
            Partners
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
            {Partners.map((partner: PartnerType, index) => (
              <div key={index} className="flex flex-col items-center sm:w-52 xs:w-36 w-28 relative rounded-xl">
                <Image src={partner.imageUrl} alt={partner.name} width={500} height={500} className="rounded-xl"/>
                <div className="absolute flex w-full h-full bg-blue-400/80 rounded-xl items-center justify-center transition-opacity duration-500 opacity-0 hover:opacity-100">
                  <h1 className="text-white text-center font-bold sm:text-lg text-xs">{partner.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
