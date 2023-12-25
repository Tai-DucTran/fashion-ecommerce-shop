import CategorySectionComponent from "./components/category/category-section.component";
import categories from "./constants/constants";

const App = () => {
  return (
    <div className="App">
      <div className="categories-container">
        {categories.map((category) => (
          <CategorySectionComponent title={category.title} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
