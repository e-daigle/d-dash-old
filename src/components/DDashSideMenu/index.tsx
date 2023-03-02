import BurgerClose from "../../icons/BurgerClose"
import BurgerBars from "../../icons/BurgerBars"
//import { verifyImage } from "@/common/Image";
import { ImageProps, NavLink } from "../../../types";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./ddash-side-menu.module.css";

type Props = {
  image?: ImageProps;
  links: NavLink[];
};

const DDashSideMenu = ({ image, links }: Props) => {
  const router = useRouter();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={styles.container}>
      <div className={styles.burgerIcon} onClick={handleClick}>
        {click ? <BurgerClose /> : <BurgerBars />}
      </div>
      <nav
        className={
          click ? [styles.nav, styles.active].join(" ") : styles.nav
        }
      >
        <div className={styles.logo}>
          <img src={image?.src} alt={image?.alt} />
        </div>
        <ul className={styles.links}>
          {links.map((link, idx) => (
            <li
              key={idx}
              className={
                router.pathname == link.link ? styles.link__active : ""
              }
            >
              <Link href={link.link} onClick={closeMobileMenu}>
                {link.displayName}
              </Link>
              <div></div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DDashSideMenu;
