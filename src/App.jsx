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
          {data.map(({ id, title }) => (
            <button className={id === language.id && "active"} onClick={() => setLanguage(data[id - 1])} key={id}>
              {title}
            </button>
          ))}

          <div className="paragraph">{data[language.id - 1].description}</div>
        </div>
      </section>
    </>
  );
}

export default App;
