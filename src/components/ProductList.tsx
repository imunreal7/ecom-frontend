import { useEffect, useState } from 'react';
import api from '../api/axios';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  productName: string;
  description: string;
  price: number;
  stockQuantity: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="section">
      <h2>Products</h2>
      <div className="grid">
        {products.map(p => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.02 }}
            className="card"
          >
            <h3 className="card-title">{p.productName}</h3>
            <p className="card-text">{p.description}</p>
            <p className="card-meta">Price: ${p.price}</p>
            <p className="card-meta">Stock: {p.stockQuantity}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
