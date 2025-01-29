import styles from "./Form.module.css";
import { useThemeContext } from "../../context/ThemeContext";
import { useState } from "react";

export function Form() {
  const { theme } = useThemeContext();

  const [selectedOption, setSelectedOption] = useState<string>("mathematik");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const getButtonClassName = (option: string) => {
    if (theme === "light") {
      return selectedOption === option
        ? styles.lightModeTopicButtonsSelected
        : styles.lightModeTopicButtons;
    } else {
      return selectedOption === option
        ? styles.darkModeTopicButtonsSelected
        : styles.darkModeTopicButtons;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    switch (id) {
      case "email":
        setEmail(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const validateForm = () => {
    let newErrors = {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
    };
    let isValid = true;

    if (!email) {
      newErrors.email = "E-Mail ist erforderlich";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Ungültige E-Mail-Adresse";
      isValid = false;
    }

    if (!firstName.trim()) {
      newErrors.firstName = "Vorname ist erforderlich";
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Nachname ist erforderlich";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formular ist gültig, sende Daten...");
    } else {
      console.log("Formular ist ungültig");
    }
  };

  return (
    <div className={styles.headlineFormContainer}>
      <h2
        className={`${styles.h2} ${
          theme === "light"
            ? styles.lightModeHeadline
            : styles.darkModeHeadline
        }`}
      >
        Du brauchst persönliche Hilfe?
      </h2>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.topicButtonsContainer}>
          <div className={styles.radioButtonWrapper}>
            <input
              type="radio"
              id="mathematik"
              name="topic"
              value="mathematik"
              checked={selectedOption === "mathematik"}
              onChange={handleOptionChange}
              className={styles.radioInput}
            />
            <label
              htmlFor="mathematik"
              className={`tagline-medium ${getButtonClassName("mathematik")}`}
            >
              Mathematik
            </label>
          </div>
          <div className={styles.radioButtonWrapper}>
            <input
              type="radio"
              id="informatik"
              name="topic"
              value="informatik"
              checked={selectedOption === "informatik"}
              onChange={handleOptionChange}
              className={styles.radioInput}
            />
            <label
              htmlFor="informatik"
              className={`tagline-medium ${getButtonClassName("informatik")}`}
            >
              Informatik
            </label>
          </div>
          <div className={styles.radioButtonWrapper}>
            <input
              type="radio"
              id="design"
              name="topic"
              value="design"
              checked={selectedOption === "design"}
              onChange={handleOptionChange}
              className={styles.radioInput}
            />
            <label
              htmlFor="design"
              className={`tagline-medium ${getButtonClassName("design")}`}
            >
              Design
            </label>
          </div>
        </div>

        <div className={styles.emailContainer}>
          <div className={styles.labelContainer}>
            <label
              className={`${
                theme === "light" ? styles.lightModeText : styles.darkModeText
              } tagline-regular`}
            >
              E-Mail Adresse
            </label>
            <label className={`${styles.requiredField} tagline-regular `}>
              *
            </label>
          </div>
          <div className={styles.generalInputContainer}>
            <input
              id="email"
              className={`${styles.emailInput} ${
                theme === "light"
                  ? styles.lightModeInput
                  : styles.darkModeInput
              } tagline-regular`}
              placeholder="E-Mail"
              value={email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className={`${styles.errorMessage} tagline-regular`}>
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.labelContainer}>
            <label
              className={`${
                theme === "light" ? styles.lightModeText : styles.darkModeText
              } tagline-regular`}
            >
              Voller Name
            </label>
            <label className={`${styles.requiredField} tagline-regular`}>
              *
            </label>
          </div>
          <div className={styles.nameInputsContainer}>
            <div className={styles.firstNameInputContainer}>
              <input
                id="firstName"
                className={`${styles.nameInput} ${
                  theme === "light"
                    ? styles.lightModeInput
                    : styles.darkModeInput
                } tagline-regular`}
                placeholder="Vorname"
                value={firstName}
                onChange={handleInputChange}
              />
              {errors.firstName && (
                <span
                  className={`${styles.errorMessage} ${styles.errorFirstName} tagline-regular`}
                >
                  {errors.firstName}
                </span>
              )}
            </div>

            <div className={styles.lastNameInputContainer}>
              <input
                id="lastName"
                className={`${styles.nameInput} ${
                  theme === "light"
                    ? styles.lightModeInput
                    : styles.darkModeInput
                } tagline-regular`}
                placeholder="Nachname"
                value={lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && (
                <span
                  className={`${styles.errorMessage} ${styles.errorLastName} tagline-regular`}
                >
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.messageContainer}>
          <div className={styles.labelContainer}>
            <label
              className={`${
                theme === "light" ? styles.lightModeText : styles.darkModeText
              } tagline-regular`}
            >
              Nachricht
            </label>
            <label className={`${styles.requiredField} tagline-regular`}>
              *
            </label>
          </div>
          <div className={styles.generalInputContainer}>
            <textarea
              id="message"
              className={`${styles.messageInput} ${
                theme === "light"
                  ? styles.lightModeInput
                  : styles.darkModeInput
              } tagline-regular`}
              placeholder="Erzähle uns von deinem Anliegen (z.B. Anfrage zur Nachhilfe oder Wünsche)"
              value={message}
              onChange={handleInputChange}
            />
            {errors.message && (
              <span
                className={`${styles.errorMessage} ${styles.errorMessage} tagline-regular`}
              >
                {errors.message}
              </span>
            )}
          </div>
          <div
            className={`${styles.labelContainer} ${styles.pflichtfeldContainer}`}
          >
            <p
              className={`${styles.requiredField} tagline-regular no-margin`}
            >
              *
            </p>
            <p
              className={`${
                theme === "light" ? styles.lightModeText : styles.darkModeText
              } tagline-regular no-margin`}
            >
              Pflichtfeld
            </p>
          </div>
        </div>

        <div className={styles.sendButtonContainer}>
          <button
            type="submit"
            className={`${
              theme === "light"
                ? styles.lightModeSendButton
                : styles.darkModeSendButton
            } tagline-medium`}
          >
            Senden
          </button>
        </div>
      </form>
    </div>
  );
}
