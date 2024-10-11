import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Science for the Bay | DUSD Program",
  description: "Science for the Bay is a 501c3 non-profit organization that strives to make science education fun and accessible for all students",
  openGraph: {
    title: "Science for the Bay | DUSD Program",
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

export default function Layout({children}: { children: React.ReactNode }) {
  return <>
    {children}
  </>
}
