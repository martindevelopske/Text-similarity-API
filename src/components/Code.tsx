"use client";
import { FC, useEffect, useState } from "react";
import { type Language } from "prism-react-renderer";
import { useTheme } from "next-themes";

interface CodeProps {
  code: string;
  show: boolean;
  language: Language;
  animationDelay: number;
  animated?: boolean;
}
const Code: FC<CodeProps> = ({
  code,
  language,
  show,
  animated,
  animationDelay,
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState(animated ? " " : code);
  //use effect
  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;
          if (i > code.length) {
            clearInterval(intervalId);
          }
        }, 15);
        return () => clearInterval(intervalId);
      }, animationDelay || 150);
    }
  }, [code, language, show, animated, animationDelay]);
  return <div>code</div>;
};
