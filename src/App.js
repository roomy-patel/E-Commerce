import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route index element={<ProductList/>}/>
        <Route path="/admin/products" element={<ProductPage/>} /> 
      </Routes> 
    </Router>
  );
}

export default App;
