import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import ShowFood from "./components/ShowFood";

function App() {
  return (
    
      <div className="h-screen w-screen bg-[#e1cccc27]">
        
        <Routes>
          <Route path="/" exact element={<SearchBox />} />
          <Route path="/food/:foodName" element={<ShowFood />} />
        </Routes>
      </div>
  );
}

export default App;