import { createSelector } from 'reselect';

// select the specific reducer
const selectCategoriesReducer = (state) => state.categories;

// create memoized selector
/* 
    [categoriesSlice.categories] only run 
    if [categoriesSlice] is changed, which based on
    [selectCategoriesReducer]
*/
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

/* 
    [categories.reduce] only run 
    if [categories] is changed, which based on
    [selectCategories]
*/
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
