import NavBar from './NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Base Page</div>}/>
      <Route path="/login" element={<div>Login Page</div>}/>


    </Routes>
    </BrowserRouter>
      <NavBar/>
      <h1 className="text-3xl font-bold underline">Dev World</h1>
    </>
  );
}

export default App;
