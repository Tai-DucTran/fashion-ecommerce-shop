import CategorySectionComponent from "./components/category/category-section.component";
import categories from "./constants/constants";

import "./App.styles.scss";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategorySectionComponent title={category.title} key={category.id} />
      ))}
    </div>
  );
};

export default App;
