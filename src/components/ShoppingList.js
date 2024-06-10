import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  //const [itemList, setItemList] = useState(items);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(search) {
    setSearchText(search);
  }
/*
  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }
*/
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) {
      return false;
    }
    if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return false;
    }
    return true;
  });
/*
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
*/
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={searchText}
              onCategoryChange={handleCategoryChange} 
              onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
