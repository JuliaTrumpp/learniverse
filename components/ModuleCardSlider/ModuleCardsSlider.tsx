import ModuleCard from "./ModuleCard/ModuleCard";
import styles from "./ModuleCardsSlider.module.css";
import apiData from "@/pages/api/content";
import { Module } from "@/interfaces/moduleInterfaces";

interface ApiData {
  moduleCards: ModuleCardData[];
  modules: any[];
}

interface ModuleCardData {
  name: string;
  number: string;
  description: string;
  color: string;
}

interface ModuleCardSliderContainerProps {
  currentModule?: Module;
}

function ModuleCardsSlider({ currentModule }: ModuleCardSliderContainerProps) {
  let suggestedModulesModuleCards: ModuleCardData[] = [];

  if (currentModule && currentModule.suggestedModules) {
    const suggestedModules = currentModule.suggestedModules; // Hier default-Wert gesetzt, falls undefined
    suggestedModules.forEach((suggestedModule) => {
      const moduleData = apiData.moduleCards.find(
        (card) => card.name === suggestedModule
      );
      if (moduleData) {
        suggestedModulesModuleCards.push(moduleData);
      }
    });
  } else {
    suggestedModulesModuleCards = apiData.moduleCards;
  }

  return (
    <div className={styles.slider}>
      {suggestedModulesModuleCards.map((card, index) => (
        <ModuleCard
          key={index}
          lv={card.number}
          name={card.name}
          text={card.description}
          color={card.color}
        />
      ))}
    </div>
  );
}

export default ModuleCardsSlider;
