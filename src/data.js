// eslint-disable-next-line
import data from './data.json';

const allCategories = data.map(obj => obj.category)


const categorieSet = new Set(allCategories) 
const categoriesUnique = Array.from(categorieSet)

// console.log(categoriesUnique)

const categoriesWithCounts = data.reduce((obj, item) => {
    const category = item.category;
    
    if (!obj[category]) {
      obj[category] = 1; 
    } else {
      obj[category]++; 
    }
  
    return obj;
  }, {}); // Start with an empty object
  
//   console.log(categoriesWithCounts);
const namesAndCategories = categoriesUnique.map(name => {
    return {
      name: name,
      count: categoriesWithCounts[name] // Get the count from the histogram
    };
  });
  
  console.log(namesAndCategories);


// The default export
export default data 

// The other exports
export { allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories }

