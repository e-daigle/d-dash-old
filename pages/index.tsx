import DDashContainer from "@/src/components/DDashContainer";
import LeftNav from "@/src/components/DDashLeftNav";
import React from "react";

const links = [
  {
    link: "/",
    displayName: "Accueil",
  },
  {
    link: "/accueil",
    displayName: "Guides",
  },
  {
    link: "/accueil",
    displayName: "Available products",
  },
];
const Home = () => {
  return (
    <>
      <DDashContainer><LeftNav links={links}/></DDashContainer>
    </>
  );
};

export default Home;
