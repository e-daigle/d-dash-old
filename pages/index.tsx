import DDashContainer from "@/src/components/DDashContainer";
import React from "react";
import DDashSideMenu from "@/src/components/DDashSideMenu";
import DDashSmallSection from "@/src/components/DDashSmallSection";
import DDashSmallCard from "@/src/components/DDashSmallCard";
import BurgerBars from "@/src/icons/BurgerBars";
import DDashLargeSection from "@/src/components/DDashLargeSection";
import DDashTable from "@/src/components/DataTable/DDashTable";
import people from "../data/people.json";
import { columns } from "../data/columns";

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

const defaultConfig = {
  title: "Are you sure?",
  message: "This action cannot be undone! Are you sure you want to continue?",
  cancelButton: "Cancel",
  confirmButton: "Confirm",
};

const Home = () => {
  const data = people;
  console.log(data);

  const handleClick = (idx: number | string) => {
    console.log(idx);
    console.log();
  };

  return (
    <>
      <DDashContainer
        nav={{ component: <DDashSideMenu links={links} />, position: "left" }}
        defaultDialogText={defaultConfig}
      >
        <DDashSmallSection>
          <DDashSmallCard title={"allo"} value={"2222"} />
          <DDashSmallCard
            title={"allo"}
            value={"2222"}
            image={{ component: <BurgerBars />, type: "icon" }}
          />
          <DDashSmallCard
            title={"allo"}
            value={"2222"}
            image={{ component: <img src="edit-icon.png" />, type: "icon" }}
            comment={[
              { text: "25%", weight: "bold", color: "#ee0000" },
              { text: "de moins" },
            ]}
          />
        </DDashSmallSection>
        <DDashSmallSection>
          <DDashSmallCard title={"allo"} value={"2222"} />
          <DDashSmallCard title={"allo"} value={"2222"} />
        </DDashSmallSection>
        <DDashLargeSection>
          <DDashTable
            title="Guides"
            tableActions={[{ name: "Nouveau", onClick: () => {} }]}
            data={data}
            columns={columns}
            uniqueField={"id"}
          />
        </DDashLargeSection>
        <DDashLargeSection>
          <DDashTable
            data={data}
            columns={columns}
            uniqueField={"id"}
            rowActions={[
              {
                name: "Supprimer",
                onClick: handleClick,
                needsConfirmation: true,
              },
            ]}
            numberPerPage={2}
          />
          <p>allo</p>
        </DDashLargeSection>
      </DDashContainer>
    </>
  );
};

export default Home;
