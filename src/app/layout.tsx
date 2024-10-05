import "styles/tailwind.css"

import {NavBar} from "@/components/NavBar"
import {Footer} from "@/components/Footer";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Science for the Bay",
  description: "Science for the Bay is a 501c3 non-profit organization that strives to make science education fun and accessible for all students",
  openGraph: {
    title: "Science for the Bay",
    description: "Science for the Bay is a 501c3 non-profit organization that strives to make science education fun and accessible for all students",
    type: 'website',
    // images: [
    //   {
    //     url: "",
    //     width: 4032,
    //     height: 3024,
    //   },
    // ],
  }
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="">
    <body>
    {/*<div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">*/}
    {/*</div>*/}

    {/*<div*/}
    {/*  className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>*/}

    {/*<div className="absolute -z-10 min-h-full w-full bg-black">*/}
    {/*  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_3px,transparent_1px),linear-gradient(to_bottom,#8080800a_2px,transparent_1px)] bg-[size:14px_24px]"></div>*/}
    {/*</div>*/}
    <NavBar/>
    {children}
    <Footer/>
    </body>
    </html>
  )
}