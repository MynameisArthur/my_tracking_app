import React, { Component } from 'react';
import './categories-overview.styles.sass';
import CategoryPreview from '../category-preview/category-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCategoriesForPreview} from '../../redux/category/category.selectors';
import {fetchCategoriesStart} from '../../redux/category/category.actions';


class CategoriesOverview extends Component{  
    state ={
        currentCategory: 'Food'
    }   
    componentDidMount()
    {
        const {loadCategories}= this.props;
        loadCategories();
    }
    changeCategory = (title)=>{
        this.setState({currentCategory:title});
    }
    render()
    {
       const {categoriesList} = this.props;
        return (           
            <div className="categories-overview">
                <div className="categories-switch">
                    {
                        categoriesList.map(category=>(
                        <span 
                            key={category.id}
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
    categoriesList: selectCategoriesForPreview
});
const mapDispatchToProps = dispatch=>({
    loadCategories: ()=> dispatch(fetchCategoriesStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(CategoriesOverview);


