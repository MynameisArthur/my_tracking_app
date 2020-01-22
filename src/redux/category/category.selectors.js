import {createSelector} from 'reselect';

const selectCategory = state => {
    return state.categories;
};

export const selectCategoriesForPreview = createSelector(
    [selectCategory],
    categories => Object.keys(categories.categoryItems).map(key=>categories.categoryItems[key])
);

export const selectCategories = createSelector(
    [selectCategory],
    categories => categories.categoryItems
);

