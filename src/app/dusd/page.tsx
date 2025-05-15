import NextImage from 'next/image';

export default function OfficersPage() {

  // @ts-ignore
  return <>
    { /* image in background takes up full width and fades to black downwards */}
    <div className="relative w-full scroll-m-20">
      <div className="absolute w-full h-[500px]">
        <NextImage src="/DUSD1.jpg" alt="cover photo" fill priority className="object-cover brightness-75 object-middle"/>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"/>
      </div>
      <div className="relative mx-auto max-w-screen-xl text-primary z-[5]">
        <section className="mx-10 mb-12 flex flex-col items-center justify-center h-[500px] sm:mb-24">
          <h1 className="pb-20 text-7xl font-bold text-white sm:text-center sm:text-8xl md:text-8xl lg:text-9xl">DUSD Program</h1>
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
                  and interactive games making learning enjoyable for the students. We have taught at schools 
                  such as Dublin High School, Dublin Elementary, Murray Elementary, John Green Elementary, and 
                  Wells Middle School. We are always looking for new classes to teach so feel free to contact us
                  and we will work on scheduling a class. 
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </>
}
