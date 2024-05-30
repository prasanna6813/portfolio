"use client";
import React, { FC, memo, useState } from "react";
import Link from "next/link";
import { AboutIcon, RocketIcon, ResumeIcon } from "@/app/icons";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import variables from "@/app/utils.module.scss";
import classNames from "classnames";

const Header: FC = () => {
  return (
    <nav className={styles.appHeader}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <h4 className={classNames(styles.shortName)}>KLPK</h4>
        </Link>
        <div className={styles.pageList}>
          {[
            { href: "/", icon: <AboutIcon />, label: "About" },
            { href: "/projects", icon: <RocketIcon />, label: "Projects" },
            { href: "/resume", icon: <ResumeIcon />, label: "Resume" },
          ].map((item, index) => (
            <LinkItem item={item} key={index} />
          ))}
        </div>
      </div>
    </nav>
  );
};

const LinkItem = ({ item }: any) => {
  const [isHover, setHover] = useState<boolean>(false);
  const currentRoute = usePathname();
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={item.href}
      passHref
      className={`${styles.iconWrapper} ${
        currentRoute === item.href ? styles.activeLink : ""
      }`}>
      {React.cloneElement(item.icon as React.ReactElement<any>, {
        isActive: currentRoute === item.href,
        fill:
          currentRoute === item.href || isHover
            ? variables?.white
            : variables?.grey,
      })}
      <small
        className={
          currentRoute === item.href || isHover ? styles.activeLabel : ""
        }>
        {item.label}
      </small>
    </Link>
  );
};

export default memo(Header);
