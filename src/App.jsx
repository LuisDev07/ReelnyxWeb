import { useState } from "react";

import "./style/App.css";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Navar from "./Components/Nav/nav";
import Interfaz from "./Components/interfazsecction/interfaz";
import Idea from "./Components/IdeaReelnyx/idea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="body-contenedor">
        <Navar />
        <Hero />
        <main>
          <Interfaz />
          <Idea />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
