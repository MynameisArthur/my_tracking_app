import CategoryActionTypes from './category.types';

export const updateCategories = (categoriesMap) => {
    return {
        type: CategoryActionTypes.UPDATE_CATEGORIES,
        payload: categoriesMap
    };
};