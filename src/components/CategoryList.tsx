import { useEffect, useState } from 'react';
import api from '../api/axios';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  categoryName: string;
  description: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get('/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="section">
      <h2>Categories</h2>
      <div className="grid">
        {categories.map(c => (
          <motion.div
            key={c.id}
            whileHover={{ scale: 1.02 }}
            className="card"
          >
            <h3 className="card-title">{c.categoryName}</h3>
            <p className="card-text">{c.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
