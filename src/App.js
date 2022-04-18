import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Home from "./pages/Home"
import Edit from "./pages/Edit"
import Delete from "./pages/Delete"
import Post from "./pages/Post"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/edit/:id' element={<Edit />} />
           <Route path='/delete/:id' element={<Delete />} />
           <Route path='/post/:id' element={<Post />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
