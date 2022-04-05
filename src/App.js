import './App.css';
import NavBar from './components/NavBar'
import ImageGallery from './pages/Gallery/ImageGallery'
import Porfolio from './pages/Home/Porfolio';
import AboutPage from './pages/About/AboutPage';
import {
  Route,
  Routes
} from "react-router-dom";
import { Box } from "gestalt";

function App() {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box maxWidth={1440} width={"97%"} >
          <NavBar />
          <Routes>
            <Route path="/" element={<Porfolio />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery/:id" element={<ImageGallery />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
