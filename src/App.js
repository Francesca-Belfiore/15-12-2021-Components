import './App.css';
import Header from './components/Header/index.jsx';
import Nav from './components/Nav/index.jsx';

import Home from "./pages/Home/index.jsx";


function App() {
  const name = "Yo! Tube";
  
  const nav = [
    { link: "/home", label: "Home"},
    { link: "/explore", label: "Esplora"},
    { link: "/shorts", label: "Shorts"},
    { link: "/subscriptions", label: "Iscrizioni"},
    { link: "/library", label: "Raccolta"}
  ];

  return (
    <div>

      <Header name={name}/>

      <main>
        <Nav links={nav} />
        <Home/>
      </main>

    </div>
  );
}

export default App;
