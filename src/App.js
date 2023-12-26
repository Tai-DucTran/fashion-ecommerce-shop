import CategorySectionComponent from "./components/category-item/category-item.component";
import categories from "./constants/constants";

import "./App.styles.scss";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategorySectionComponent
          title={category.title}
          imageUrl={category.imageUrl}
          key={category.id}
        />
      ))}
    </div>
  );
};

export default App;
