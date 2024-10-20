import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AddToCartModal from './components/AddToCartModal';
import Pagination from './components/Pagination';
import ThankYouPage from './components/ThankYouPage';
import "./App.css";
import Footer from './components/Footer';
import Faqs from './components/Faqs';

const mockProducts = [
  { id: 1, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  { id: 2, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 3, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  { id: 4, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  
  { id: 5, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 6, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  { id: 7, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 8, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  
  { id: 9, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  { id: 10, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 11, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  { id: 12, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },

  { id: 13, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 14, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },
  { id: 15, name: 'Snake Plant', price: 199, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-y8pY1RUyWyV1PDpz3p2KPZGvaL3C7yZszNoqoT_eNhoTXQDL_-_B&usqp=CAE&s' },
  { id: 16, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },

  { id: 17, name: 'Monstera', price: 299, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_btmGz4phe1z84YndmbNKpuoOcxUcfWy98sbJnSSBKYVWj7x' },

  // Add more products here...
];

function App() {
  const [cartModal, setCartModal] = useState({ isOpen: false, product: null });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const openModal = (product) => {
    setCartModal({ isOpen: true, product });
  };

  const closeModal = () => {
    setCartModal({ isOpen: false, product: null });
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedProducts = mockProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className='home_section'>
                  <div className='faqs_section'>
                    <Faqs/>
                  </div>
                  <div>
                    <div className="product-list">
                    {displayedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} openModal={openModal} />
                    ))}
                    
                    
                  </div>
                  <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(mockProducts.length / productsPerPage)}
                      onPageChange={onPageChange}
                    />
                  <div>
                    <AddToCartModal
                        product={cartModal.product}
                        isOpen={cartModal.isOpen}
                        closeModal={closeModal}
                      />
                  </div>
                    
                  </div>
              </div>
            }
          />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
