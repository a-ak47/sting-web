"use client";

import "@/assets/styles/header.scss";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";
import Button from "./UI/Button";
import Link from "next/link";
import { navItems } from "@/const/header_nav";
import { useState, useEffect } from "react";
import useWindowWidth from "@/app/hooks/useWindowWidth";
import { ClickAwayListener } from "@mui/base";
import { usePathname } from "next/navigation";

const DroppedContainer = ({ title, items, isServices, isCompany, isResources, isShown }) => {
  return (
    <div
      className={`header__nav--dropped-container drop ${
        isServices
          ? "nav-services-container"
          : isCompany
          ? "nav-company-container"
          : "nav-simple-container"
      }`}
      style={isResources ? { left: "-500%" } : isCompany ? { left: "-500%" } : null}
    >
      <div className="header__nav--dropped-inner">
        {/* {<h3 className="header__nav--dropped-title">{title}</h3>} */}
        {isServices ? (
          <div className="header__nav--dropped-services">
            {items.map((section, index) => (
              <div key={index} className="header__nav--services-column">
                <p className="header__nav--dropped-subtitle" style={{ marginBottom: 20 }}>
                  {isServices && section.title ? (
                    <Link href={`/services/${section.title.toLowerCase().replace(/ /g, "-")}`}>
                      {section.title}
                    </Link>
                  ) : (
                    section.text
                  )}
                </p>
                <ul className="">
                  {section.items?.map((item, key) => (
                    <li key={key} className="header__nav--dropped-link">
                      <svg
                        width="20"
                        height="10"
                        viewBox="0 0 20 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-opacity"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.7197 0.71967C15.0126 0.426777 15.4874 0.426777 15.7803 0.71967L19.5303 4.46967C19.8232 4.76256 19.8232 5.23744 19.5303 5.53033L15.7803 9.28033C15.4874 9.57322 15.0126 9.57322 14.7197 9.28033C14.4268 8.98744 14.4268 8.51256 14.7197 8.21967L17.1893 5.75H1C0.585786 5.75 0.25 5.41421 0.25 5C0.25 4.58579 0.585786 4.25 1 4.25H17.1893L14.7197 1.78033C14.4268 1.48744 14.4268 1.01256 14.7197 0.71967Z"
                          fill="#2563EB"
                        />
                      </svg>

                      <Link href={item.link}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul
            className={"header__nav--dropped-links"}
            style={
              items.length > 2
                ? { gridTemplateColumns: "repeat(3, 1fr)" }
                : { gridTemplateColumns: "repeat(2, 1fr)" }
            }
          >
            {items.map((item, key) => (
              <li
                className="header__nav--dropped-subtitle"
                style={{ maxWidth: isCompany ? 250 : 300 }}
                key={key}
              >
                <Link href={item.link}>{item.text}</Link>
                {item.subtext && <p className="header__nav--dropped-subtext">{item.subtext}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const NavMenu = ({ renderNavItem, className, handleClickAway }) => {
  const callClickAway = () => {
    handleClickAway();
  };
  return (
    <ClickAwayListener onClickAway={callClickAway}>
      <div className={`align-center-container ${className} mobile-container`}>
        <nav className="header__nav">
          <ul className="header__nav--container align-center-container">
            {Object.entries(navItems).map(([name, data]) => renderNavItem(name, data))}
          </ul>
        </nav>
        <div className="header__buttons align-center-container">
          <Button text={"Book Free Consultation"} className={"secondary"} href={"/book-free"} />
          <Button text={"Get a Quote"} className={"primary"} href={"/get-a-quote?ref=navbar"} />
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default function Header() {
  const width = useWindowWidth();

  const renderNavItem = (name, data) => {
    const isServices = name === "Services";
    const isCompany = name === "Company";
    const isResources = name === "Resources";

    const [isShown, setIsShown] = useState();
    const handleShown = () => {
      if (width < 1100) {
        setIsShown(!isShown);

        //
      }
    };

    return (
      <li onClick={handleShown} className="header__nav--item">
        {name === "Services" ? <Link href={"/services"}>{name}</Link> : name}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="header__nav--arrow"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
          />
        </svg>

        <DroppedContainer
          title={name}
          items={data}
          isServices={isServices}
          isCompany={isCompany}
          isResources={isResources}
          isShown={isShown}
        />
      </li>
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const handleClickAway = () => {
    console.log("I am click away");
    setIsOpen(false);
  };

  return (
    <>
      <header className="header-container">
        <div className="header container">
          <Link href="/">
            <Image src={logo} alt="main logo icon" />
          </Link>
          <NavMenu renderNavItem={renderNavItem} className={"desktop"} />

          <>
            <div onClick={handleClick} className={`header__burger-button ${isOpen ? "open" : ""}`}>
              <div></div>
              <div className="header__burger-button--line"></div>
              <div></div>
            </div>

            {/* Условное рендеринг NavMenu */}

            <>
              {isOpen && (
                <NavMenu
                  handleClickAway={handleClickAway}
                  renderNavItem={renderNavItem}
                  className={"mob"}
                />
              )}
            </>
          </>
        </div>
      </header>
    </>
  );
}
