import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import styles from "./Plotter.module.css";
import { useThemeContext } from "@/context/ThemeContext";
import TOOLTIP from "@/public/Icons/tooltip.svg";
import { Config, Layout } from "plotly.js";

interface PlotterProps {
  xRange: [number, number];
}

interface ExtendedConfig extends Config {
  modeBarPosition?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

function Plotter({ xRange }: PlotterProps) {
  const [inputFunc, setInputFunc] = useState<string>("");
  const [parsedFunc, setParsedFunc] = useState<((x: number) => number) | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInputFunc(newInput);

    const variableRegex = /[a-zA-Z]/g;
    const variables = Array.from(new Set(newInput.match(variableRegex)));

    try {
      const newFunc = new Function(...variables, `return ${newInput}`) as (
        ...args: number[]
      ) => number;

      const testValues = variables.map(() => 1);
      newFunc(...testValues);

      setParsedFunc(() => newFunc);
      setError(null);
    } catch {
      setParsedFunc(null);
      setError("Ungültige Funktion");
    }
  };

  const { theme } = useThemeContext();

  const colorScheme = {
    light: {
      text: "black",
      line: "#0000FE",
      grid: "#cccccc",
    },
    dark: {
      text: "white",
      line: "#EF7D00",
      grid: "#8A8A8A",
    },
  };

  const colors = colorScheme[theme];
  if (!colors) {
    console.error(`Invalid theme: ${theme}`);
    return null;
  }

  const xValues = [];
  const step = (xRange[1] - xRange[0]) / 100;
  for (let x = xRange[0]; x <= xRange[1]; x += step) {
    xValues.push(x);
  }

  const yValues = parsedFunc ? xValues.map((x) => parsedFunc(x)) : [];

  const plotWidth = screenWidth * 0.95;
  const plotHeight = screenHeight * 0.75;

  return (
    <>
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: "scatter",
            mode: "lines",
            marker: { color: colors.line },
            line: { width: 3, color: colors.line },
          },
        ]}
        layout={
          {
            width: plotWidth,
            height: plotHeight,
            plot_bgcolor: "transparent",
            paper_bgcolor: "transparent",
            xaxis: {
              tickcolor: colors.text,
              linecolor: colors.text,
              title: { font: { color: colors.text } },
              gridcolor: colors.grid,
            },
            yaxis: {
              tickcolor: colors.text,
              linecolor: colors.text,
              title: { font: { color: colors.text } },
              gridcolor: colors.grid,
            },
            modebar: {
              orientation: "h",
              bgcolor: "rgba(0,0,0,0)",
              color: colors.text,
              activecolor: colors.line,
            },
          } as Partial<Layout>
        }
        config={
          {
            responsive: true,
            scrollZoom: true,
            modeBarPosition: "top-left",
            modeBarButtonsToAdd: [
              "zoom2d",
              "pan2d",
              "select2d",
              "lasso2d",
              "zoomIn2d",
              "zoomOut2d",
              "autoScale2d",
              "resetScale2d",
            ],
            modeBarButtonsToRemove: ["toImage", "sendDataToCloud"],
            displayModeBar: true,
            displaylogo: false,
          } as ExtendedConfig
        }
      />

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={`${styles.input} ${
            theme === "light" ? styles.lightModeInput : styles.darkModeInput
          }`}
          placeholder="Geben Sie hier Ihre Funktion ein"
          value={inputFunc}
          onChange={handleInputChange}
        />
        <div
          className={`${styles.tooltip} ${
            theme === "light" ? styles.lightModeTooltip : styles.darkModeTooltip
          }`}
        >
          <TOOLTIP />
          <span
            className={`${styles.tooltipText} ${
              theme === "light"
                ? styles.lightModeTooltipText
                : styles.darkModeTooltipText
            } tagline-regular`}
          >
            Example function of x: x * x + 99
          </span>
        </div>
      </div>
      {error && <p className={`${styles.error} tagline-medium`}>{error}</p>}
    </>
  );
}

export default Plotter;
