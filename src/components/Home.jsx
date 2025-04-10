import React, { useMemo } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/footer'


//useMemo

const home = () => {
  const productList = useMemo(() => (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Product 1</h3>
        <p className="text-gray-600">Description or details about Product 1.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Product 2</h3>
        <p className="text-gray-600">Description or details about Product 2.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Product 3</h3>
        <p className="text-gray-600">Description or details about Product 3.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Product 4</h3>
        <p className="text-gray-600">Description or details about Product 4.</p>
      </div>
    </div>
  ), []);

  return (
    <div className='overflow-x-hidden flex flex-col min-h-screen'>
      <Header />
      <div className="bg-blue-300 py-30 border-1 flex-grow">
        <h2 className="text-center font-bold text-4xl text-black mb-10">Products</h2>
        {productList}
      </div>
      <Footer />
    </div>
  );
};

export default home;
