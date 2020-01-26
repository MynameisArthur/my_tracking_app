import React, { Component } from 'react';
import './categories-overview.styles.sass';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CategoryPreview from '../category-preview/category-preview.component';
import {selectCategoriesForPreview,selectIsCategoriesFetching} from '../../redux/category/category.selectors';
import {fetchCategoriesStartAsync} from '../../redux/category/category.actions';


class CategoriesOverview extends Component{  
    state ={
        currentCategory: 'Food'
    }
    componentDidMount()
    {
        const {fetchCategoriesStartAsync} = this.props;
        fetchCategoriesStartAsync();  
    }
    changeCategory = (title)=>{
        this.setState({currentCategory:title});
    }
    render()
    {
       const {categories} = this.props;
        return (
            <div className="categories-overview">
                <div className="categories-switch">
                    {
                        categories.map(category=>(
                        <span 
                            key={category.title}
                            className={category.title === this.state.currentCategory ? 'active':''}
                            onClick={()=>this.changeCategory(category.title)}
                            >{category.title}</span>
                        ))
                    }
                </div>
                <CategoryPreview 
                    title={this.state.currentCategory} 
                    category={this.state.currentCategory.toLowerCase()}
                />
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


