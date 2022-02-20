import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Characters from "./pages/Characters/Characters";
import {Character} from "./pages/Characters/Character";
import {Locations} from "./pages/Locations/Locations";
import {Episodes} from "./pages/Episodes/Episodes";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route key={"/"} path="/" element={<Characters />} />
                <Route key={"/character"} path="/character">
                    <Route key={":id"} path=":id" element={<Character />} />
                </Route>
                <Route key={"/locations"} path="/locations" element={<Locations />} />
                <Route key={"/episodes"} path="/episodes" element={<Episodes />} />
            </Routes>
        </>
    );
}
export default App;
