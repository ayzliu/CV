import React from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <h1>My CV Application</h1>
      <General />
      <Education />
      <Experience />
    </div>
  );
}

export default App;