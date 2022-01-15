import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Page1 from'./Components/Page1/Page1.js'
import Page2 from'./Components/Page2/Page2.js'
import Page3 from'./Components/Page3/Page3.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
            <Route path="/" element={<Page1/>} exact />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/page3" element={<Page3/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
