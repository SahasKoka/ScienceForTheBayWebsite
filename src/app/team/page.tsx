import NextImage from 'next/image';
import {Officers, OfficerType} from '@/data/officers';

export default function OfficersPage() {

  // @ts-ignore
  return <>
    { /* image in background takes up full width and fades to black downwards */}
    <div className="relative w-full">
      <div className="absolute w-full h-[500px]">
        <NextImage src="/sftbCover.jpg" alt="cover photo" fill priority className="object-cover object-middle brightness-75"/>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"/>
      </div>
      <div className="relative mx-auto max-w-screen-xl text-primary z-[5]">
        <section className="h-[500px] -mb-8 flex flex-col items-center justify-center sm:flex-row lg:mb-24 mx-10">
          <h1 className="pb-20 sm:text-center text-6xl font-bold sm:text-8xl md:text-8xl lg:text-9xl text-white">The SFTB Team</h1>
        </section>

        <section className="mb-16 mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center sm:gap-5 gap-8">
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
                       className="flex flex-col items-center rounded-xl bg-neutral-200 pb-3 shadow-xl w-full min-h-72 group sm:min-h-80 sm:w-80 lg:min-h-[330px] lg:w-96 px-2">
                    <div className="relative h-52 w-52">
                      <NextImage src={officer.imageUrl} alt={officer.name} fill className="-mt-5 rounded-full border-2 object-cover transition-all border-primary group-hover:scale-105 group-hover:border-blue-600 group-hover:brightness-125"/>
                    </div>
                    <p
                      className="mt-2 w-full text-center font-black text-black text-md md:text-xl">{officer.name}</p>
                    <p
                      className="mb-2 w-full text-center font-medium text-sm italic text-primary md:text-lg">{officer.position}</p>
                    {/*<p*/}
                    {/*  className="w-full text-center font-light text-sm text-primary text-balance text-md md:text-lg">{officer.bio}</p>*/}
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