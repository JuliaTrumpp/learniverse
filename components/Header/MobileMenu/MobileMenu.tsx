import styles from "./MobileMenu.module.css";
import CLOSEBUTTON from "@/public/Icons/close.svg";

export default function MobileMenu() {
  return (
    <div className={styles.mobileMenuContainer}>
      <div className={styles.closingButton}>
        <CLOSEBUTTON />
      </div>
      <div className={styles.menuLinksConatainer}>Hallo</div>
    </div>
  );
}
