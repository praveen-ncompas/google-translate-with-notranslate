import React, { useState, useEffect } from 'react';
import './App.css';

function Contact() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then((res) => res.json())
            .then((json) => setProduct(json))
            .catch((error) => console.error('Error:', error));
    }, []);

    const categoryOptions = [
        { value: "men's clothing", label: "Men's Clothing" },
        { value: "women's clothing", label: "Women's Clothing" },
        { value: 'jewelery', label: 'Jewelery' },
        { value: 'electronics', label: 'Electronics' },
    ];

    return (
        <div>
            <h1>Contact</h1>
            <p>
                Name : <span className="">{product?.title}</span>
            </p>
            <p>
                Description :<span className="">{product?.description}</span>
            </p>

            {product && (
                <form>
                    <label htmlFor="title">Title:</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={product.title}
                        className="notranslate"
                    />
                    <br />
                    <br />
                    <label htmlFor="price">Price:</label>
                    <br />
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={product.price}
                        className="notranslate"
                    />
                    <br />
                    <br />
                    <label htmlFor="description">Description:</label>
                    <br />
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        cols="50"
                        value={product.description}
                        className="notranslate"
                    />
                    <br />
                    <br />
                    <label htmlFor="category">Category:</label>
                    <br />
                    <select
                        id="category"
                        name="category"
                        value={product.category}
                        className="notranslate"
                    >
                        {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <label htmlFor="image">Image:</label>
                    <br />
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={product.image}
                        className="notranslate"
                    />
                    <br />
                    <br />
                    <label htmlFor="rating">Rating:</label>
                    <br />
                    <input
                        type="text"
                        id="rating"
                        name="rating"
                        value={product.rating.rate}
                        className="notranslate"
                    />
                    <br />
                    <br />
                    <label htmlFor="ratingCount">Rating Count:</label>
                    <br />
                    <input
                        type="text"
                        id="ratingCount"
                        name="ratingCount"
                        value={product.rating.count}
                        className="notranslate"
                    />
                    <br />
                    <br />
                </form>
            )}
        </div>
    );
}

export default Contact;
