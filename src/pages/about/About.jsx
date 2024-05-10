import React from 'react';
import "./about.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookByte</h2>
            <p className='text fs-17'>Welcome to BookByte, your premier destination for discovering and exploring your next favorite book! BookByte is a streamlined platform dedicated to helping you find and learn more about the books you love, all in one convenient place.</p>
            <p className='text fs-17'>With BookByte, searching for books has never been easier. Our powerful search feature allows you to effortlessly browse through an extensive database of books, enabling you to quickly find titles that match your interests. Whether you're in the mood for a thrilling mystery, a heartwarming romance, or an insightful biography, BookByte has you covered.</p>
            <p className='text fs-17'>Once you've found a book that piques your interest, simply click on it to view detailed information. From synopsis and author details to reader reviews and ratings, BookByte provides comprehensive insights to help you make informed decisions about your next read. Dive into the world of each book, explore its themes, characters, and plot, and discover what makes it a must-read for you.</p>
            <p className='text fs-17'>At BookByte, we're dedicated to making your book-searching experience as seamless and enjoyable as possible. Join us today and let BookByte be your trusted companion on your literary journey. Happy reading!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
