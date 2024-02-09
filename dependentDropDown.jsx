import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [categories, setCategories] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [isSubCategory, setIsSubCategory] = useState(false);

  const category = ["Fruits", "Vegetables", "Dairy"];

  const subCategories = {
    Fruits: ["Apple", "Banana"],
    Vegetables: ["Carrot", "Broccoli"],
    Dairy: ["Milk", "Cheese"],
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategories(selectedCategory);
    setSubCategory("");
    setIsSubCategory(true);
  };

  return (
    <div className="App">
      <label htmlFor="category">Selected Category: </label>
      <select
        id="category"
        onChange={(e) => handleCategoryChange(e.target.value)}
        value={categories}
      >
        <option value="">Select </option>

        {category.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <br />

      <label htmlFor="subCategory">Selected Sub Category: </label>
      <select
        id="subCategory"
        onChange={(e) => setSubCategory(e.target.value)}
        value={subCategory}
        disabled={!isSubCategory}
      >
        <option value="">Select </option>
        {isSubCategory &&
          subCategories[categories].map((subItem) => (
            <option key={subItem} value={subItem}>
              {subItem}
            </option>
          ))}
      </select>
    </div>
  );
}
