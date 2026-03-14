import React from 'react';
import { Clock, Star, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Get your food delivered within campus in minutes"
    },
    {
      icon: Star,
      title: "Best Local Food",
      description: "Curated selection from trusted restaurants"
    },
    {
      icon: Users,
      title: "Student & Lecturer",
      description: "Special discounts for both students and staff"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;