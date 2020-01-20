import React from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {connect} from 'react-redux';
import {selectCategories} from '../../redux/category/category.selectors';
import {createStructuredSelector} from 'reselect';

const TrackerPage = ({categories})=> {
    return (
        <div className="category-page">
            {
                categories.map(({id,...otherCategoryProps})=>(
                    <CategoryPreview key={id} {...otherCategoryProps}/>
                ))
             }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    categories: selectCategories
});

export default connect(mapStateToProps)(TrackerPage);

