import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Prodcut';
import Error from './Error';
import SharedLayout from './components/sharedLayout';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
          <Route path='*' element={<Error />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
