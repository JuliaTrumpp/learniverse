import styles from "./FormAndImage.module.css";
import { useThemeContext } from "../../context/ThemeContext";
import { Form } from "./Form";

export function FormAndImage() {
  const { theme } = useThemeContext();

  return (
    <div className={`${styles.container} section-spacing-lr`} id="contact">
      <div className={styles.formContainer}>
        <Form />
      </div>
      <div className={styles.imageContainer}>
        <img
          src="./images/julian.webp"
          alt="Kontakt Person Bild"
          className={styles.contactPersonImage}
        />
        <div className={styles.imageLabels}>
          <p
            className={`${
              theme === "light" ? styles.lightText : styles.darkText
            } tagline-medium`}
          >
            Julian Saarmann
          </p>
          <p
            className={`${styles.descriptionP} ${
              theme === "light" ? styles.lightP : styles.darkP
            } tagline-medium`}
          >
            Kontaktperson
          </p>
        </div>
      </div>
    </div>
  );
}
