import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import styleApp from './App.module.css'

import style from './App.module.css'

// importando rotas
import Tecnologias from "./components/pages/Tecnologias";


// importando layouts
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Profiledev from "./components/layout/ProfileDev";
import Home from "./components/pages/Home";


function App() {

    return (
        <div className={style.app}>
            <Router>
                <div>
                    <Navbar />
                </div>
                
                <Container>
                    <Profiledev/>
                    <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/tecnologias" element={<Tecnologias />} />
                        {/* <Route path="/tools" element={<Tools />} /> */}
                    </Routes>
                </Container>
            </Router>
        </div>
    )
}

export default App;