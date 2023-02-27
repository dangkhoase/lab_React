import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Player from "./components/player";
import Detail from "./components/player/detail";
import Navigation from "./components/navigation";
// import Footer from "./components/navigation/footer";
import Popup from "./components/popup";
import { usePopup } from "./hooks/usePopup";
import About from "./components/about";
import New from "./components/new";
function App() {
    const { popup, handleClick } = usePopup();
    const [playerId, setPlayerId] = useState();
  return (
    <div className="App">
      <div style={{ position: "absolute", width: "100%" }}>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Player setPlayerId={setPlayerId} handleClick={handleClick} />
            }
          ></Route>
          <Route path="/detail/:playerId" element={<Detail />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/new" element={<New />}></Route>
        </Routes>
        {/* <Footer /> */}
      </div>
      {popup && <Popup playerId={playerId} handleClick={handleClick} />}
    </div>
  );
}

export default App;
