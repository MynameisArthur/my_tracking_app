import CATEGORIES_DATA from './category.data';

const INITIAL_STATE = {
    categoryItems: CATEGORIES_DATA
};

const categoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {

        default:
            return state;
    }
};

export default categoryReducer;