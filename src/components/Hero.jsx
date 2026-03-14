import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Order from Local Restaurants Around School
          </h1>
          <p className="text-xl mb-8 text-green-100">
            For Students and Lecturers - Fast, Fresh, and Affordable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Order as Student
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Order as Lecturer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;