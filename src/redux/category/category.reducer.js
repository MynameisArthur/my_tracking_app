import CATEGORIES_DATA from './category.data';

import CategoriesActionTypes from './category.types';
import {updateCategories} from './category.actions';

const INITIAL_STATE = {
    categoryItems: CATEGORIES_DATA
};

const categoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case CategoriesActionTypes.UPDATE_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};

export default categoryReducer;