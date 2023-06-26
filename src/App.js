import './App.scss';
import {Routes, Route} from 'react-router-dom'; 
import Layout from './components/Layouts/Layout';
import About from './components/About/About';
import Home from './components/Home/Home';
// import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path="about" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
