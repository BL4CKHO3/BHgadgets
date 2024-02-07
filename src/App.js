import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './hoc/Navbar';
import Users from './components/Users';
import About from './pages/About';
import GadgetBlog from './components/GadgetBlog';
import Blog from './components/Blog';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';
import NewBlog from './pages/NewBlog';

function App() {



  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/gadgets' element={<GadgetBlog />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/gadgets/:id' element={<DetailPage />} />
        <Route path='/addblog' element={<NewBlog />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
