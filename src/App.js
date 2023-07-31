import "./App.css";
import Dictionary from "./Dictionary";
import header from "./header.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={header} className="header" alt="App Header" />
        </header>
        <Dictionary defaultKeyword="Library" />
        <footer>
          <p>
            {" "}
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/mildred-arizpe-vicencio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mildred Arizpe
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/MArizpe83/dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://lustrous-mochi-ab690c.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
