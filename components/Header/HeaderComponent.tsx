import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Logo from "./Logo/Logo";
import HeaderLink from "./Header-Link/Header-Link";
import ToggleButton from "./ToggleButton/ToggleButton";
import OverlayMenu from "./OverlayMenu";
import styles from "./Header.module.css";
import { useThemeContext } from "@/context/ThemeContext";
import MENUICON from "@/public/Icons/menu.svg";

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = -150;
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

function HeaderComponent() {
  const { theme } = useThemeContext();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url.includes("#")) {
        const id = url.split("#")[1];
        setTimeout(() => {
          scrollToElement(id);
        }, 0);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const handleLinkClick =
    (href: string) => async (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setIsMenuOpen(false);
      if (href.includes("#")) {
        const [path, hash] = href.split("#");
        if (router.pathname !== "/" && (path === "/" || path === "")) {
          await router.push("/");
          setTimeout(() => {
            scrollToElement(hash);
          }, 100);
        } else if (router.pathname === "/") {
          scrollToElement(hash);
        } else {
          router.push(href);
        }
      } else {
        router.push(href);
      }
    };

  return (
    <div
      className={`${styles.container} section-spacing-lr ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <Logo />
      <div className={styles.linkContainer}>
        <HeaderLink
          link="/#about"
          buttonText="Über Learniverse"
          onClick={handleLinkClick("/#about")}
        />
        <HeaderLink
          link="/#modules"
          buttonText="Module"
          onClick={handleLinkClick("/#modules")}
        />
        <HeaderLink
          link="/graphiverse"
          buttonText="Graphiverse"
          onClick={handleLinkClick("/graphiverse")}
        />
        <HeaderLink
          link="/#contact"
          buttonText="Kontakt"
          onClick={handleLinkClick("/#contact")}
        />
      </div>
      <ToggleButton />
      <div>
        <a className={styles.hamburgerButton} onClick={toggleMenu}>
          <MENUICON />
        </a>
      </div>
      <OverlayMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        handleLinkClick={handleLinkClick}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  );
}

export default HeaderComponent;
