import React from 'react';
import './categories-overview.styles.sass';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CategoryPreview from '../category-preview/category-preview.component';
import {selectCategoriesForPreview} from '../../redux/category/category.selectors';


const CategoriesOverview = ({categories})=>{
    return (
        <div className="categories-overview">
            {
             categories.map(({id,...otherCategoryProps})=>(
                    <CategoryPreview key={id} {...otherCategoryProps}/>
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    categories: selectCategoriesForPreview
});


export default connect(mapStateToProps)(CategoriesOverview);

