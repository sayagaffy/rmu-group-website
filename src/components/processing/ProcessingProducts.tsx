'use client';

import { Package } from 'lucide-react';

interface Product {
  name: string;
  grade: string;
  application: string;
  image: string;
}

interface ProcessingProductsProps {
  title: string;
  description: string;
  items: Product[];
}

export default function ProcessingProducts({ title, description, items }: ProcessingProductsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <Package className="w-16 h-16 text-primary-500 mb-6" />

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {product.name}
              </h3>

              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500">Grade:</span>
                <p className="text-lg text-gray-700 font-medium">{product.grade}</p>
              </div>

              <div>
                <span className="text-sm font-semibold text-gray-500">Application:</span>
                <p className="text-gray-700 leading-relaxed">{product.application}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
