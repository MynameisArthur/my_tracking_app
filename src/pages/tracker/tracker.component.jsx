import React from 'react';
import CategoriesOverview from '../../components/categories-overview/categories-overview.component';
import {Route} from 'react-router-dom';
import CategoryPage from '../category/category.component';

const TrackerPage = ({match})=> {
    return (
        <div className="tracker-page">
            <Route exact path={`${match.path}`} component={CategoriesOverview} />
            <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
        </div>
    );
};


export default TrackerPage;

