import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import './assets/styles/variables.css';
import BookNow from './Components/BookNow/BookNow';
import Checkout from './Components/Checkout/Checkout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/check-out" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
