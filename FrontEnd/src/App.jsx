import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import './assets/styles/variables.css';
import BookNow from './Components/BookNow/BookNow';
import Checkout from './Components/Checkout/Checkout';
import Layout from './Components/Layout';
import OurFleet from './Components/Fleet/OurFleet';

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
          element={<Layout Children={<BookNow />} isLocation={false} />}
        />
        <Route
          path="/check-out"
          element={<Layout Children={<Checkout />} isLocation={false} />}
        />
        <Route
          path="/Our-Fleet"
          element={<Layout Children={<OurFleet />} isLocation={false} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
