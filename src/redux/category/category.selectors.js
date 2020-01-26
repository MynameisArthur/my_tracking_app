import {createSelector} from 'reselect';

const selectCategoryList = state => {
    return state.categories.categories;
};

export const selectCategoriesForPreview = createSelector(
    [selectCategoryList],    
    categories => {  
        return categories ? Object.keys(categories).map(key=>categories[key]) : []
    }
);


