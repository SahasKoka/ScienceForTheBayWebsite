import NextImage from 'next/image';
import {Officers, OfficerType} from '@/data/officers';

export default function OfficersPage() {

  // @ts-ignore
  return <>
    { /* image in background takes up full width and fades to black downwards */}
    <div className="relative w-full">
      <div className="absolute w-full h-[500px]">
        <NextImage src="/sftbCover.jpg" alt="cover photo" fill priority className="object-cover object-middle"/>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"/>
      </div>
      <div className="relative mx-auto max-w-screen-xl px-5 py-16 text-primary z-[5] sm:py-16">
        <section className="mb-52 flex flex-col items-center justify-center sm:flex-row lg:mb-64">
          <div className="flex h-min flex-col">
            <h1 className="text-center text-7xl font-bold sm:text-8xl md:text-8xl lg:text-9xl text-white">Our Team</h1>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap items-start justify-center gap-x-3 gap-y-8">
            {/*{officers.map((member, index) => (*/}
            {/*  <div key={index} className="flex w-40 flex-col items-center min-h-60 group lg:min-h-72 lg:w-48">*/}
            {/*    <div className="relative h-32 w-32 lg:h-40 lg:w-40">*/}
            {/*      <NextImage src={member.image} alt={member.name} fill className="rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125" />*/}
            {/*    </div>*/}
            {/*    <p className="mt-2 w-full text-center font-extrabold text-gray-300 text-md lg:text-xl">{member.name}</p>*/}
            {/*    <p className="w-full text-center text-sm text-gray-300 lg:text-lg">{member.caption}</p>*/}
            {/*  </div>*/}
            {/*))}*/}
            {/* larger box with background, if more than one photo have them slightly overlap like a stack. Include bio and role. Some are of type Officer, some are of type OfficerGroup */}
            {Officers.map((officer: OfficerType, index) => {
                return (
                  <div key={index}
                       className="flex w-full flex-col items-center rounded-xl bg-neutral-200 pb-3 shadow-xl min-h-72 group sm:min-h-56 sm:w-56 md:min-h-[450px] md:w-96 px-2">
                    <div className="relative h-32 w-32 md:h-52 md:w-52">
                      <NextImage src={officer.imageUrl} alt={officer.name} fill className="rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125"/>
                    </div>
                    <p
                      className="mt-2 w-full text-center font-black text-black text-md md:text-xl">{officer.name}</p>
                    <p
                      className="mb-2 w-full text-center font-medium text-sm italic text-primary md:text-lg">{officer.position}</p>
                    <p
                      className="w-full text-center font-light text-sm text-primary text-balance text-md md:text-lg">{officer.bio}</p>
                  </div>
                )
              })
            }
          </div>
        </section>

      </div>
    </div>
  </>
}