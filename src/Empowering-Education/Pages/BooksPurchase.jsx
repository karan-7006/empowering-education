import React, { useEffect } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import NavHeader from '../Common/NavHeader';

export default function BooksPurchase() {
    useEffect(() => {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const priceFilter = document.getElementById('priceFilter');
        const booksGrid = document.getElementById('booksGrid');

        const filterBooks = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const category = categoryFilter.value;
            const priceRange = priceFilter.value;

            const bookCards = booksGrid.querySelectorAll('.book-card');

            bookCards.forEach((card) => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const priceText = card.querySelector('.price')?.textContent.replace('₹', '').trim();
                const price = priceText === 'FREE' ? 0 : parseFloat(priceText);

                const matchesSearch = title.includes(searchTerm);
                const matchesCategory = !category || card.dataset.category === category;
                const matchesPrice =
                    !priceRange ||
                    (priceRange === 'low' && price < 500) ||
                    (priceRange === 'medium' && price >= 500 && price < 1000) ||
                    (priceRange === 'high' && price >= 1000);

                card.style.display = matchesSearch && matchesCategory && matchesPrice ? 'block' : 'none';
            });
        };

        searchInput.addEventListener('input', filterBooks);
        categoryFilter.addEventListener('change', filterBooks);
        priceFilter.addEventListener('change', filterBooks);

        return () => {
            searchInput.removeEventListener('input', filterBooks);
            categoryFilter.removeEventListener('change', filterBooks);
            priceFilter.removeEventListener('change', filterBooks);
        };
    }, []);

    const books = [
        {
            title: 'Mechanical Engineering',
            price: '₹125',
            condition: 'Good Condition',
            category: 'engineering',
            image: 'https://m.media-amazon.com/images/I/51cPI8rdKuL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            title: 'Data Engineering',
            price: '₹75',
            condition: 'Good Condition',
            category: 'engineering',
            image: 'https://m.media-amazon.com/images/I/71yQPL3zr3L._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            title: 'C++ Language',
            price: '₹110',
            condition: 'Moderate Condition',
            category: 'programming',
            image: 'https://m.media-amazon.com/images/I/5197qo6Q1GL._AC_UL480_FMwebp_QL65_.jpg',
        },
        {
            title: 'Web Engineering',
            price: 'FREE',
            condition: 'Moderate Condition',
            category: 'engineering',
            image: 'https://m.media-amazon.com/images/I/A1yzzRvGABL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            title: 'JavaScript',
            price: '₹150',
            condition: 'Very Good Condition',
            category: 'programming',
            image: 'https://m.media-amazon.com/images/I/61HCuZwPljL._AC_UL480_FMwebp_QL65_.jpg',
        },
        {
            title: 'DC Circuits',
            price: 'FREE',
            condition: 'Poor Condition',
            category: 'science',
            image: 'https://m.media-amazon.com/images/I/811-dZecSIL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            title: 'Mechanical Engineering',
            price: '₹125',
            condition: 'Good Condition',
            category: 'engineering',
            image: 'https://m.media-amazon.com/images/I/51cPI8rdKuL._AC_UY327_FMwebp_QL65_.jpg',
        },
        {
            title: 'Data Engineering',
            price: '₹75',
            condition: 'Good Condition',
            category: 'engineering',
            image: 'https://m.media-amazon.com/images/I/71yQPL3zr3L._AC_UY327_FMwebp_QL65_.jpg',
        }
        // Add more if needed...
    ];

    return (
        <div className="bg-light">
            <Header />
            <NavHeader title="Purchase Books" />

            {/* Filters */}
            <div className="container py-5">
                <div className="row g-3 mb-4">
                    <div className="col-md">
                        <input type="text" id="searchInput" className="form-control" placeholder="Search books, subjects..." />
                    </div>
                    <div className="col-md">
                        <select id="categoryFilter" className="form-select">
                            <option value="">All Categories</option>
                            <option value="engineering">Engineering</option>
                            <option value="science">Science</option>
                            <option value="arts">Arts & Humanities</option>
                            <option value="management">Management</option>
                        </select>
                    </div>
                    <div className="col-md">
                        <select id="priceFilter" className="form-select">
                            <option value="">Price Range</option>
                            <option value="low">₹0 - ₹500</option>
                            <option value="medium">₹500 - ₹1000</option>
                            <option value="high">₹1000+</option>
                        </select>
                    </div>
                </div>

                {/* Book Grid */}
                <div id="booksGrid" className="row g-4">
                    {books.map((book, i) => (
                        <div className="col-md-4 col-lg-3" key={i}>
                            <div className="card h-100 shadow-sm book-card" data-category={book.category}>
                                <img src={book.image} className="card-img-top img-fluid" alt={book.title} style={{ height: '300px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{book.title}</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className={`fw-bold price ${book.price === 'FREE' ? 'text-danger' : 'text-primary'}`}>{book.price}</span>
                                        <small className="text-success">{book.condition}</small>
                                    </div>
                                    <button className="btn btn-primary w-100 mt-3">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="d-flex justify-content-center my-5">
                    <ul className="pagination">
                        <li className="page-item active"><button className="page-link">1</button></li>
                        <li className="page-item"><button className="page-link">2</button></li>
                        <li className="page-item"><button className="page-link">3</button></li>
                        <li className="page-item"><button className="page-link">Next →</button></li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
}
