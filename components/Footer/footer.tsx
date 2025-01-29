import styles from "./footer.module.css";
import LogoIconDarkmode from "@/public/Icons/logo-footer_darkmode.svg";
import LogoIconLightmode from "@/public/Icons/logo-footer_lightmode.svg";
import InstagramIconDarkmode from "@/public/Icons/instagram_darkmode.svg";
import InstagramIconLightmode from "@/public/Icons/instagram_lightmode.svg";
import HSRMIconDarkmode from "@/public/Icons/hsrm_darkmode.svg";
import HSRMIconLightmode from "@/public/Icons/hsrm_lightmode.svg";
import { useThemeContext } from "@/context/ThemeContext";

export function Footer() {
  const { theme } = useThemeContext();
  const superLink = "https://www.instagram.com/p/C0J9eULiKkd/";
  const hsrmLink =
    "https://www.hs-rm.de/de/fachbereiche/design-informatik-medien/aktuelles";

  return (
    <footer
      className={`${styles.container} section-spacing-lr ${theme} ${
        theme === "light" ? styles.light : styles.dark
      } `}
    >
      <div className={styles.footerContent3}>
        <div className={styles.logo}>
          {theme === "light" ? <LogoIconLightmode /> : <LogoIconDarkmode />}
        </div>
        <div className={styles.textLinks}>
          <a
            href="#"
            className={`tagline-regular ${
              theme === "light" ? styles.textLight : styles.textDark
            }`}
          >
            AGB
          </a>
          <p
            className={`tagline-regular ${
              theme === "light" ? styles.textLight : styles.textDark
            }`}
          >
            /
          </p>
          <a
            href="#"
            className={`tagline-regular ${
              theme === "light" ? styles.textLight : styles.textDark
            }`}
          >
            Impressum
          </a>
          <p
            className={`tagline-regular ${
              theme === "light" ? styles.textLight : styles.textDark
            }`}
          >
            /
          </p>
          <a
            href="#"
            className={`tagline-regular ${
              theme === "light" ? styles.textLight : styles.textDark
            }`}
          >
            Datenschutz
          </a>
        </div>
        <div className={styles.socialsIcons}>
          <a href={superLink}>
            {theme === "light" ? (
              <InstagramIconLightmode
                id="socialImg1"
                className={styles.socialsImg}
              />
            ) : (
              <InstagramIconDarkmode
                id="socialImg1"
                className={styles.socialsImg}
              />
            )}
          </a>
          <a href={hsrmLink}>
            {theme === "light" ? (
              <HSRMIconLightmode
                id="socialImg2"
                className={styles.socialsImg}
              />
            ) : (
              <HSRMIconDarkmode id="socialImg2" className={styles.socialsImg} />
            )}
          </a>
        </div>
      </div>
    </footer>
  );
}
