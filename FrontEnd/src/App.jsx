import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import './assets/styles/variables.css';
import BookNow from './Components/BookNow/BookNow';
import Checkout from './Components/Checkout/Checkout';
import Layout from './Components/Layout';
import FAQ from './Components/FAQ/FAQ';
import Services from './Components/Services/Services';
import OurFleet from './Components/OurFleet/OurFleet';
import Excursions from './Components/Excursions/Excursions';
import StandardPlus from './Components/Excursions/StandardPlus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout Children={<Home />} isLocation={false} />}
        />
        <Route
          path="/book-now"
          element={<Layout Children={<BookNow />} isLocation={true} />}
        />
        <Route
          path="/check-out"
          element={<Layout Children={<Checkout />} isLocation={true} />}
        />
        <Route
          path="/Our-Fleet"
          element={<Layout Children={<OurFleet />} isLocation={true} />}
        />

        <Route
          path="/faq"
          element={<Layout Children={<FAQ />} isLocation={true} />}
        />

        <Route
          path="/services"
          element={<Layout Children={<Services />} isLocation={true} />}
        />
        <Route
          path="/Excursions"
          element={<Layout Children={<Excursions />} isLocation={true} />}
        />
        <Route
          path="/Standard-Plus"
          element={<Layout Children={<StandardPlus />} isLocation={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
