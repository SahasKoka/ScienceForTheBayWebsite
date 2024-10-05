import Link from "next/link";

export default function NotFound() {

  return (
    <div className="mx-10 flex flex-col gap-16 pt-24 text-primary">
      <section className="relative min-h-screen flex flex-col items-center text-center bg-[var(--primary-background-color)]">
        <h1 className='lg:text-7xl text-5xl font-bold mt-6'>404</h1>
        <h1 className='lg:text-5xl text-3xl font-bold'>Page Not Found</h1>
        <hr className="my-4 border-primary"/>
        <Link href="/" className='lg:text-2xl text-lg text-primary font-bold underline'>Return Home</Link>
      </section>
    </div>
  )
}
