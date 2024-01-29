// CategoryButton.js
function CategoryButton({ label, count, onClick, isSelected }) {
  const className = isSelected ? 'category-button selected' : 'category-button';
  return (
    <button className={className} onClick={() => onClick(label)}>
      {label} <span className="category-count">{count}</span>
    </button>
  );
}

export default CategoryButton;

