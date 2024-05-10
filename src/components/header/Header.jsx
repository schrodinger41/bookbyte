import React from 'react';
import Navbar from "../navbar/NavBar";
import SearchForm from "../searchform/SearchForm";
import "./header.css";

const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">Search for your Book</h2>
                    <br />
                    <p className="header-text fs-18 fw-3">Welcome to BookByte, your ultimate destination for book discovery! Search for your next literary adventure effortlessly with our user-friendly platform. Explore genres, authors, and titles with ease, and let BookByte be your trusted companion on your reading journey. Happy browsing!</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}

export default Header