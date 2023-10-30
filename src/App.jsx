import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div className="text-3xl pt-4 pl-4 dark:bg-slate-400">Hello World</div>
    </>
  );
}

export default App;
