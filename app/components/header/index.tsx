"use client";
import React, { FC } from "react";
import Link from "next/link";
import { AboutIcon, RocketIcon, ResumeIcon } from "@/app/icons";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import variables from "@/app/utils.module.scss";


const Header: FC = () => {
  const currentRoute = usePathname();

  return (
    <nav className={styles.appHeader}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <h4 className={styles.shortName}>KLPK</h4>
        </Link>
        <div className={styles.pageList}>
          {[
            { href: "/", icon: <AboutIcon />, label: "About" },
            { href: "/projects", icon: <RocketIcon />, label: "Projects" },
            { href: "/resume", icon: <ResumeIcon />, label: "Resume" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              passHref
              className={`${styles.iconWrapper} ${
                currentRoute === item.href ? styles.activeLink : ""
              }`}>
              {React.cloneElement(item.icon as React.ReactElement<any>, {
                isActive: currentRoute === item.href,
                fill:
                  currentRoute === item.href ? variables?.white : variables?.grey,
              })}
              <small>{item.label}</small>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
