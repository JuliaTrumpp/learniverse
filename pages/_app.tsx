import { useEffect } from "react";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { Footer } from "../components/Footer/footer";
import HeaderComponent from "@/components/Header/HeaderComponent";
import { useThemeContext, ThemeContextProvider } from "../context/ThemeContext";
import { MessageProvider } from "@/context/MessageContext";
import { ChapterContextProvider } from "@/context/ChapterContext";

export default function App({ Component, pageProps }: AppProps) {
  const themeContext = useThemeContext();
  useEffect(() => {
    document.title = "Learniverse";
  });

  return (
    <MessageProvider>
      <ThemeContextProvider>
        <ChapterContextProvider>
          <header>
            <HeaderComponent />
          </header>
          <Component {...pageProps} />
          <footer>
            <Footer />
          </footer>
        </ChapterContextProvider>
      </ThemeContextProvider>
    </MessageProvider>
  );
}
