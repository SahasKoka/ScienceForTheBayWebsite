import Link from "next/link";

export default function NotFound() {

  return (
    <div className="mx-10 flex flex-col gap-16 pt-24 text-primary">
      <section className="relative min-h-screen flex flex-col items-center text-center bg-[var(--primary-background-color)]">
        <h1 className='mt-6 text-5xl font-bold lg:text-7xl'>404</h1>
        <h1 className='text-3xl font-bold lg:text-5xl'>Page Not Found</h1>
        <hr className="my-4 border-primary"/>
        <Link href="/" className='text-lg font-bold underline text-primary lg:text-2xl'>Return Home</Link>
      </section>
    </div>
  )
}
