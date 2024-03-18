import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import styleApp from './App.module.css'

import style from './App.module.css'

// importando rotas
import HardSkills from "./components/pages/hardSkills";


// importando layouts
import Navbar from "./components/layout/navbar";
import Container from "./components/layout/container";
import FixedScreen from "./components/pages/fixedScreen";
import Home from "./components/pages/home";


function App() {

    return (
        <div className={style.app}>
            <Router>
                <div>
                    <Navbar />
                </div>
                
                <Container>
                    <FixedScreen/>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/hardSkills" element={<HardSkills />} />
                        {/* <Route path="/tools" element={<Tools />} /> */}
                    </Routes>
                </Container>
            </Router>
        </div>
    )
}

export default App;