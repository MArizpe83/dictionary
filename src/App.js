import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <footer className="Footer">
        <p>
          <a
            href="https://github.com/MArizpe83"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>{" "}
          by Mildred Arizpe
        </p>
      </footer>
    </div>
  );
}
