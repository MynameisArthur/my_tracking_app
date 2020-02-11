import CategoryActionTypes from './category.types';

export const fetchCategoriesStart = () => {
    return {
        type: CategoryActionTypes.FETCH_CATEGORIES_START      
    };
};
export const fetchCategoriesSuccess = categoriesMap=>({
    type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesMap
});
export const fetchCategoriesFailure = errorMessage =>({
    type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: errorMessage
});
