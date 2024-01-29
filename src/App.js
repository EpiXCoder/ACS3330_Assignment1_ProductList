// App.js
import React, { useState } from 'react';
import CategoryButton from './CategoryButton.js';
import Product from './Product.js';
import data from './data.json';
import './App.css'; 

function App() {
  // Update the state to hold an array of categories
  const [selectedCategories, setSelectedCategories] = useState(['All']);

  const handleCategoryClick = (category) => {
    console.log(`Category clicked: ${category}`); // For debugging

    // If "All" is clicked, reset the categories to just "All"
    if (category === 'All') {
      setSelectedCategories(['All']);
    } else {
      // Otherwise, add or remove the category from the array
      setSelectedCategories(prevCategories => {
        if (prevCategories.includes('All')) {
          return [category];
        }
        const isAlreadySelected = prevCategories.includes(category);
        if (isAlreadySelected) {
          // Remove the category if it's already selected
          return prevCategories.filter(cat => cat !== category);
        } else {
          // Add the category
          return [...prevCategories, category];
        }
      });
    }
  };

  const getCategoriesWithCounts = () => {
    return data.reduce((acc, product) => {
      const { category } = product;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
  };

  const categoriesWithCounts = getCategoriesWithCounts();

  // Sort categories alphabetically
  const sortedCategories = Object.keys(categoriesWithCounts).sort((a, b) => {
    return a.localeCompare(b);
  });

  // Filter products to include any that match the selected categories
  const filteredData = selectedCategories.includes('All')
    ? data
    : data.filter(item => selectedCategories.includes(item.category));

  console.log(`Selected categories: ${selectedCategories}`); // For debugging
  console.log(`Filtered products: ${filteredData.length}`); // For debugging

  return (
    <div className="App">
      <div className="CategoryList">
        {sortedCategories.map((category) => (
          <CategoryButton 
            key={category} 
            label={category} 
            count={categoriesWithCounts[category]} 
            onClick={() => handleCategoryClick(category)}
            isSelected={selectedCategories.includes(category)}
          />
        ))}
        <CategoryButton 
          key="All" 
          label="All" 
          count={data.length} 
          onClick={() => handleCategoryClick('All')} 
          isSelected={selectedCategories.includes('All')}
        />
      </div>
      <div className="ProductList">
        {filteredData.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;

