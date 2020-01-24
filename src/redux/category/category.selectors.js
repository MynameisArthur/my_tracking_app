import {createSelector} from 'reselect';

const selectCategory = state => {
    return state.categories.categories;
};

export const selectCategoriesForPreview = createSelector(
    [selectCategory],    
    categories => categories ? Object.keys(categories).map(key=>categories[key]) : []
);

export const selectCategories = createSelector(
    [selectCategory],
    categories => categories ? categories.categoryItems : null
);

