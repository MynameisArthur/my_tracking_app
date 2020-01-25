import CategoryActionTypes from './category.types';
import {firestore,convertCategoriesSnapshotToMap} from '../../firebase/firebase.utils';


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
export const fetchCategoriesStartAsync = ()=>{
    return dispatch =>{       
        const categoriesRef = firestore.collection('categories'); 
        dispatch(fetchCategoriesStart);
        categoriesRef.get()
        .then(snapshot=>{                  
            const categoriesMap = convertCategoriesSnapshotToMap(snapshot);
            dispatch(fetchCategoriesSuccess(categoriesMap));            
        })
        .catch(error=>dispatch(fetchCategoriesFailure(error.message)));
    };
};