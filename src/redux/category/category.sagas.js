import {takeLatest,put,call,all} from 'redux-saga/effects';
import CategoryActionTypes from './category.types';
import {firestore,convertCategoriesSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCategoriesStart,fetchCategoriesFailure,fetchCategoriesSuccess} from '../category/category.actions';

export function* fetchCategories()
{
    try{
        const categoriesRef = yield firestore.collection('categories');
        const categorySnapshot = yield categoriesRef.orderBy('title','asc').get();          
        const categoriesMap = convertCategoriesSnapshotToMap(categorySnapshot);        
        yield put(fetchCategoriesSuccess(categoriesMap)); 
    }catch(error){
        yield put(fetchCategoriesFailure(error.message));
    }
}

export function* onFetchCategoriesStart()
{
    yield takeLatest(CategoryActionTypes.FETCH_CATEGORIES_START,fetchCategories);
}

export function* categorySagas()
{
    yield all([
        call(onFetchCategoriesStart),
    ]);
}