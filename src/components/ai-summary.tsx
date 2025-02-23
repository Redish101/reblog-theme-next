"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Bot } from "lucide-react";
import clsx from "clsx";

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (text) {
      setIsTyping(true);
      let currentIndex = 0;

      const typeNextCharacter = () => {
        if (currentIndex < text.length) {
          const codePoint = text.codePointAt(currentIndex);
          if (codePoint !== undefined) {
            const char = String.fromCodePoint(codePoint);
            setDisplayText((prev) => prev + char);
            currentIndex += char.length; // 移动索引到下一个字符
          }
          timer = setTimeout(typeNextCharacter, speed);
        } else {
          setIsTyping(false);
        }
      };

      typeNextCharacter();
    }

    return () => clearTimeout(timer);
  }, [text, speed]);

  return { displayText, isTyping };
};

interface AISummaryCardProps {
  summary: string;
}

export function AISummary({ summary }: AISummaryCardProps) {
  const { displayText, isTyping } = useTypewriter(summary || "");
  const [showCursor, setShowCursor] = useState(true);

  // 光标闪烁动画
  useEffect(() => {
    if (!isTyping) {
      setShowCursor(false);
      return;
    }

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [isTyping]);

  if (!summary) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="mt-6"
    >
      <Card className="bg-muted">
        <CardHeader className="flex flex-row items-center space-y-0 space-x-3 pb-3">
          <Bot
            className={clsx(
              "h-5 w-5 text-primary",
              isTyping ? "animate-pulse" : ""
            )}
          />
          <span
            className={clsx(
              "font-medium text-primary",
              isTyping ? "animate-pulse" : ""
            )}
          >
            AI 摘要
          </span>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <p className="leading-relaxed transition-colors">
              {displayText}
              <span
                className={`ml-1 mx-1 border-l-2 border-primary ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
                style={{ height: "1.2em" }}
              />
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
