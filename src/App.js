import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="cat" />
        <footer>
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
        </footer>
      </div>
    </div>
  );
}

export default App;
