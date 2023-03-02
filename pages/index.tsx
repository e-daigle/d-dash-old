import DDashContainer from "@/src/components/DDashContainer";
import React from "react";
import DDashSideMenu from "@/src/components/DDashSideMenu";
import SmallSection from "@/src/components/SmallSection";
import SmallCard from "@/src/components/SmallCard";
import BurgerBars from "@/src/icons/BurgerBars";
import LargeSection from "@/src/components/LargeSection";
import DDashTable from "@/src/components/DataTable/DDashTable";

const data = [
  {
    name: "Emile",
    last: "Daigle",
  },
  {
    name: "Je",
    last: "Suis",
  },
  {
    name: "Pomme",
    last: "Banane",
  },
  {
    name: "Caca",
    last: "Chat",
  },
];
const columns = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Last",
    field: "last",
  },
];

const links = [
  {
    link: "/",
    displayName: "Accueil",
  },
  {
    link: "/accueil",
    displayName: "Autre page",
  },
  {
    link: "/accueil",
    displayName: "Blablabla",
  },
];

const Home = () => {
  const handleClick = (idx: number) => {
    console.log(idx);
    console.log(data[idx].name);
  };
  const handleClickTop = () => {
    console.log("ok");
  };
  const options = [
    {
      name: "Supprimer",
      onClick: handleClick,
    },
    {
      name: "Supprimer",
      onClick: handleClick,
    },
  ];

  return (
    <>
      <DDashContainer
        nav={{ component: <DDashSideMenu links={links} />, position: "left" }}
      >
        <SmallSection>
          <SmallCard title={"allo"} value={"2222"} />
          <SmallCard
            title={"allo"}
            value={"2222"}
            image={{ component: <BurgerBars />, type: "icon" }}
          />
          <SmallCard
            title={"allo"}
            value={"2222"}
            image={{ component: <img src="edit-icon.png" />, type: "icon" }}
            comment={[
              { text: "25%", weight: "bold", color: "#ee0000" },
              { text: "de moins" },
            ]}
          />
        </SmallSection>
        <SmallSection>
          <SmallCard title={"allo"} value={"2222"} />
          <SmallCard title={"allo"} value={"2222"} />
        </SmallSection>
        <LargeSection>
          <DDashTable
            title="Guides"
            button={{ name: "Nouveau", onClick: handleClickTop }}
            data={data}
            columns={columns}
            rowActions={options}
          />
        </LargeSection>
        <LargeSection>
          <DDashTable
            data={data}
            columns={columns}
            rowActions={[
              {
                name: "Supprimer",
                onClick: handleClick,
              },
            ]}
          />
          <p>allo</p>
        </LargeSection>
      </DDashContainer>
    </>
  );
};

export default Home;
