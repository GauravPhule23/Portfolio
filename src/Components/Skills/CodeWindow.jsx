import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import codeFiles from "./codeData";

export default function CodeWindow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % codeFiles.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D1117] rounded-3xl overflow-hidden shadow-2xl h-fit">

      {/* Header */}

      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700">

        <div className="flex gap-2">

          <div className="w-3 h-3 rounded-full bg-red-500"/>

          <div className="w-3 h-3 rounded-full bg-yellow-500"/>

          <div className="w-3 h-3 rounded-full bg-green-500"/>

        </div>

        <span className="text-gray-300 text-sm">
          {codeFiles[index].file}
        </span>

      </div>

      <pre className="p-6 overflow-x-auto text-sm leading-7 text-green-400 font-mono min-h-[430px]">

<Typewriter
key={index}
words={[codeFiles[index].code]}
loop={1}
cursor
cursorStyle="|"
typeSpeed={20}
deleteSpeed={9999}
/>

      </pre>

    </div>
  );
}