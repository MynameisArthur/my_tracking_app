import React, { Component } from 'react';
import './categories-overview.styles.sass';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CategoryPreview from '../category-preview/category-preview.component';
import {selectCategoriesForPreview} from '../../redux/category/category.selectors';
import {updateCategories} from '../../redux/category/category.actions';
import {firestore,convertCategoriesSnapshotToMap} from '../../firebase/firebase.utils';


class CategoriesOverview extends Component{  
    componentDidMount()
    {
        const {updateCategories} = this.props;
        const categoriesRef = firestore.collection('categories'); 
        categoriesRef.get().then(snapshot=>{
            const categoriesMap = convertCategoriesSnapshotToMap(snapshot);
            updateCategories(categoriesMap);   
            this.setState({loading: false});
        });
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
    categories:selectCategoriesForPreview
});
const mapDispatchToProps = dispatch=>({
    updateCategories : categoriesMap => dispatch(updateCategories(categoriesMap))
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesOverview);


