export interface ProjectType {
  imageUrl: string;
  title: string;
  description: string;
}

export const Projects: ProjectType[] = [
 {
    imageUrl: "/fcsn-teaching.jpg",
    title: "FCSN & College of Adaptive Arts",
    description: "FCSN is an organization that specializes in the neurodiverse community by providing them with after-school workshops and educational opportunities. Through our hands-on science-based model, we are hoping to bridge the barrier of access to science to the neurodiverse community.",
  },
  {
    imageUrl: "/ace-science-fair-project.jpg",
    title: "ACE Esperanza Science Fair",
    description: "The ACE Esperanza Middle School is one of our partner schools. We help organize science fairs and workshops to encourage students' interest in STEM fields.",
  },
  {
    imageUrl: "/rehabAfrica.png",
    title: "Rehab Africa",
    description: "Through our partnership with Rehab Africa, we are initiating an inaugural science program aimed to increase STEM in Liberia. Through hands-on-experiments we are introducing concepts like density and velocity. Ensuring these students have proper access and encouraging them to pursue a career in STEM.",
  }
];