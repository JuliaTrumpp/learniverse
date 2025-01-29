import {
  ReactNode,
  useContext,
  useState,
  createContext,
  useEffect,
} from "react";

interface Props {
  children: ReactNode;
}

interface Context {
  chapter: string;
  currentModule: string;
  handleChapter: (currentModule: string, chapter: string) => void;
}

const initialState: Context = {
  chapter: "1",
  currentModule: "Lineare Algebra",
  handleChapter: () => {},
};

const ChapterContext = createContext(initialState);

export const ChapterContextProvider = ({ children }: Props) => {
  const [chapter, setChapter] = useState(initialState.chapter);
  const [currentModule, setModule] = useState(initialState.currentModule);

  useEffect(() => {
    const chapterStateAusStorage = localStorage.getItem("chapter");
    const moduleStateAusStorage = localStorage.getItem("currentModule");
    if (chapterStateAusStorage && moduleStateAusStorage) {
      setChapter(JSON.parse(chapterStateAusStorage));
      setModule(JSON.parse(moduleStateAusStorage));
    }
  }, []);

  const handleChapter = (currentModule: string, chapter: string) => {
    setChapter(chapter);
    setModule(currentModule);
    localStorage.setItem("chapter", JSON.stringify(chapter));
    localStorage.setItem("currentModule", JSON.stringify(currentModule));
  };

  return (
    <ChapterContext.Provider value={{ currentModule, chapter, handleChapter }}>
      {children}
    </ChapterContext.Provider>
  );
};

export const useChapterContext = () => {
  return useContext(ChapterContext);
};
