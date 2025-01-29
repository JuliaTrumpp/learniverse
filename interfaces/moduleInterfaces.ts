export interface Module {
  modulename: string;
  suggestedModules: string[];
  chapters: Chapter[];
}

export interface Chapter {
  name: string;
  number: string;
  introductionText: string;
  videoIds: string[];
  contentPart: { title: string; description: string }[];
}
