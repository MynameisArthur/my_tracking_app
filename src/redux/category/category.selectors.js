import {createSelector} from 'reselect';

const selectCategory = state => {
    return state.categories;
}


export const selectCategories = createSelector(
    [selectCategory],
    categories => categories.categoryItems
);