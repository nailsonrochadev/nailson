import {useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import styleApp from './App.module.css'

// import stylesApp from './App.module.css'

// importando rotas
import Tecnologias from "./components/pages/Tecnologias";

// import Tools from "../src/components/pages/Tools";
import Contact from "../src/components/pages/Contact";

// importando layouts
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Profiledev from "./components/layout/ProfileDev";
import Home from "./components/pages/Home";

import api from './Api'
// import axios from "axios";



function App() {

    useEffect(() => {
     api.get('/noticias').then(res =>{
        console.log(res.data)
     })
    }, []) 

    return (
        <div>
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
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
            </Router>
        </div>
    )
}

export default App;