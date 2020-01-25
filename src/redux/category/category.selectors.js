import {createSelector} from 'reselect';

const selectCategory = state => {
    return state.categories;
};
const selectCategoryList = state => {
    return state.categories.categories;
};

export const selectCategoriesForPreview = createSelector(
    [selectCategoryList],    
    categories => {            
        return categories ? Object.keys(categories).map(key=>categories[key]) : []
    }
);

export const selectIsCategoriesFetching = createSelector(
    [selectCategory],
    categories => categories.isFetching
);
