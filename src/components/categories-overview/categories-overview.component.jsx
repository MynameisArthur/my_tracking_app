import React, { Component } from 'react';
import './categories-overview.styles.sass';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CategoryPreview from '../category-preview/category-preview.component';
import {selectCategoriesForPreview,selectIsCategoriesFetching} from '../../redux/category/category.selectors';
import {fetchCategoriesStartAsync} from '../../redux/category/category.actions';


class CategoriesOverview extends Component{  
    componentDidMount()
    {
        const {fetchCategoriesStartAsync} = this.props;
        fetchCategoriesStartAsync();  
    }
    render()
    {
       const {categories} = this.props;
        return (
            <div className="categories-overview">
                {
                    categories.map(({id,...otherCategoryProps})=>(
                      <CategoryPreview key={id} {...otherCategoryProps}/>
                    ))
                }
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    categories:selectCategoriesForPreview,
    isCategoriesFetching: selectIsCategoriesFetching
});
const mapDispatchToProps = dispatch=>({
    fetchCategoriesStartAsync: ()=> dispatch(fetchCategoriesStartAsync())
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesOverview);


