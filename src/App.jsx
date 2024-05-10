import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './pages/home/Home';
import About from './pages/about/About';
import BookList from './components/booklist/BookList';
import BookDetails from './components/bookdetails/BookDetails';

function App() {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path ="/" element ={<Home />}> 
              <Route path = "about" element ={<About />} />
              <Route path = "book" element = {<BookList />} />
              <Route path = "/book/:id" element = {<BookDetails />} />
            </Route> 
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
