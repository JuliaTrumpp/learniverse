import LearniverseLogo from "@/public/Icons/Logo-header.svg";
import styles from "./Logo.module.css";
import Link from "next/link";

function LearniverseButton() {
  return (
    <Link href="/" className={styles.logoButton}>
      <LearniverseLogo alt="Learniverse Logo" data-testid="Learniverse Logo" />
    </Link>
  );
}

export default LearniverseButton;
