import data from "../data/languages.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState(data[0]);

  return (
    <>
      <section>
        <h1>Learn Web Development</h1>

        <div className="box">
          {data.map((curLanguage) => (
            <button onClick={() => setLanguage(curLanguage.id)} key={curLanguage.id}>
              {curLanguage.title}
            </button>
          ))}

          <div className="paragraph">{language.description}</div>
        </div>
      </section>
    </>
  );
}

export default App;
