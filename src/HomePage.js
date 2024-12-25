import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import heroImage from './images/image.png'; // Hero image for the section
import Button from './components/button';

// Example products array with images and details
const products = [
  {
    id: 1,
    name: 'Perfume 1',
    image: require('./images/image.png'),
    price: '$10'
  },
  {
    id: 2,
    name: 'Perfume 2',
    image: require('./images/image.png'),  // Path to your product image
    price: '$60'
  },
  {
    id: 3,
    name: 'Perfume 3',
    image: './assets/images/product3.jpeg',  // Path to your product image
    price: '$70'
  },
  {
    id: 4,
    name: 'Perfume 4',
    image: './assets/images/product4.jpeg',  // Path to your product image
    price: '$80'
  },
  // Add more products as needed
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-screen bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Signature Scent</h2>
            <p className="text-lg md:text-xl max-w-3xl">
              Perfumes that define elegance and style.
            </p>
            
            <Button />
          </div>
        </section>

        {/* Best-Selling Products */}
        <section id="products" className="py-16 bg-gray-50">
          <h3 className="text-3xl font-bold text-center mb-8">Best-Selling Products</h3>
          <div className="grid gap-8 max-w-7xl mx-auto px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Loop through the products array */}
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.image} // Use the product image from the array
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h4 className="text-lg font-semibold">{product.name}</h4>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
