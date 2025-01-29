import styles from "./OverlayMenu.module.css";
import HeaderLink from "./Header-Link/Header-Link";
import ToggleButton from "./ToggleButton/ToggleButton";
import CLOSEICON from "@/public/Icons/close.svg";
import { useThemeContext } from "@/context/ThemeContext";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
  handleLinkClick: (
    href: string
  ) => (e: React.MouseEvent<HTMLAnchorElement>) => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({
  isOpen,
  onClose,
  handleLinkClick,
  setIsMenuOpen,
}) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`
            ${styles.container} 
            ${isOpen ? styles.open : ""} 
            ${theme === "dark" ? styles.dark : styles.light}
        `}
    >
      <div className={styles.menuContent}>
        <div className={styles.closeButtonContainer}>
          <button
            className={`
              ${styles.closeButton} 
              ${
                theme === "dark"
                  ? styles.darkCloseButton
                  : styles.lightCloseButton
              }
            `}
            onClick={onClose}
          >
            <CLOSEICON />
          </button>
        </div>
        <div
          className={`${styles.linkContainer} ${
            theme === "dark"
              ? styles.darkLinkContainer
              : styles.lightLinkContainer
          }`}
        >
          <HeaderLink
            link="/"
            buttonText="Über Learniverse"
            onClick={(e) => {
              handleLinkClick("/")(e);
              setIsMenuOpen(false);
            }}
          />
          <HeaderLink
            link="/#modules"
            buttonText="Module"
            onClick={(e) => {
              handleLinkClick("/#modules")(e);
              setIsMenuOpen(false);
            }}
          />
          <HeaderLink
            link="/graphiverse"
            buttonText="Graphiverse"
            onClick={(e) => {
              handleLinkClick("/graphiverse")(e);
              setIsMenuOpen(false);
            }}
          />
          <HeaderLink
            link="/#contact"
            buttonText="Kontakt"
            onClick={(e) => {
              handleLinkClick("/#contact")(e);
              setIsMenuOpen(false);
            }}
          />
          <ToggleButton
            className={`
                ${styles.overlayToggle} 
                ${theme === "dark" ? styles.darkToggle : styles.lightToggle}
                `}
            style={{ display: "block", width: "88px", height: "48px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
