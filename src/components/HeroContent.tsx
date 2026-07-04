import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- Scramble Text Component ---
const CHARS = '!<>-_\\/[]{}—=+*^?#________';

function ScrambleText({ text, trigger }: { text: string; trigger: number }) {
  const [displayText, setDisplayText] = useState(text);
  const requestRef = useRef<number>(0);
  const frameRef = useRef(0);

  useEffect(() => {
    let frame = 0;
    const queue = text.split('').map((char) => ({
      from: CHARS[Math.floor(Math.random() * CHARS.length)],
      to: char,
      start: Math.floor(Math.random() * 20),
      end: Math.floor(Math.random() * 20) + 20,
    }));

    const update = () => {
      let output = '';
      let complete = 0;
      for (let i = 0, n = queue.length; i < n; i++) {
        let { from, to, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!charQueue[i] || Math.random() < 0.28) {
            charQueue[i] = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          output += charQueue[i];
        } else {
          output += from;
        }
      }
      setDisplayText(output);
      if (complete === queue.length) {
        cancelAnimationFrame(requestRef.current);
      } else {
        frameRef.current = frame++;
        requestRef.current = requestAnimationFrame(update);
      }
    };

    const charQueue: string[] = [];
    cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(update);

    return () => cancelAnimationFrame(requestRef.current);
  }, [text, trigger]);

  return <span>{displayText}</span>;
}

// --- Typewriter Component ---
function TypewriterText({ text, triggerKey }: { text: string; triggerKey: number }) {

  return (
    <motion.p
      key={triggerKey}
      className="text-white/60 font-sans text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md mx-auto sm:mx-0 leading-relaxed text-center sm:text-left z-20 pointer-events-auto"
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            delay: index * 0.02,
            duration: 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

// --- Main HeroContent Component ---
export default function HeroContent() {
  const words = ['PURPOSE', 'IMPACT', 'INTENT'];
  const [wordIndex, setWordIndex] = useState(0);
  const [bioKey, setBioKey] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);

    const bioInterval = setInterval(() => {
      setBioKey((prev) => prev + 1);
    }, 7000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(bioInterval);
    };
  }, [words.length]);

  return (
    <div className="relative z-20 flex-1 flex flex-col justify-center items-center sm:items-start px-6 sm:px-16 lg:px-24 w-full h-full pointer-events-none mt-20 sm:mt-0">
      <div className="flex flex-col mb-8 sm:mb-12 pointer-events-auto text-center sm:text-left">
        <h2 
          className="font-display text-[17px] sm:text-[40px] md:text-[70px] leading-none text-transparent uppercase tracking-wide"
          style={{ WebkitTextStroke: '1px white' }}
        >
          DESIGN WITH
        </h2>
        <h1 className="font-display text-[50px] sm:text-[100px] md:text-[140px] lg:text-[180px] leading-[0.85] text-[#CCFF00] uppercase">
          <ScrambleText text={words[wordIndex]} trigger={wordIndex} />
        </h1>
      </div>
      
      <TypewriterText 
        text="I'm Eathan — a freelance UI/UX designer crafting bold, high-contrast digital experiences that are intuitive, impactful, and built to stand out."
        triggerKey={bioKey}
      />
    </div>
  );
}
