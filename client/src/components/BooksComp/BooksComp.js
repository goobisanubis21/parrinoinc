import React from 'react';
import './booksComp.css';
import { Link } from 'react-router-dom';

function BooksComp() {
    return (
        <div>
            <div className='category-links'>
                <p><Link to='/books/rrated'>R Rated Book</Link></p>
            </div>
        </div>
    )
}

export default BooksComp
