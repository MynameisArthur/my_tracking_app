import React, { Component } from 'react';
import './categories-overview.styles.sass';
import CategoryPreview from '../category-preview/category-preview.component';


class CategoriesOverview extends Component{  
    state ={
        currentCategory: 'Food',
        categoryList: [
            'Code',
            'Communication',
            'Food',
            'Knowledge',
            'Money',
            'Other',
            'Relax',
            'Workout'
        ]
    }    
    changeCategory = (title)=>{
        this.setState({currentCategory:title});
    }
    render()
    {
       const {categoryList} = this.state;
        return (
            <div className="categories-overview">
                <div className="categories-switch">
                    {
                        categoryList.map(category=>(
                        <span 
                            key={category}
                            className={category === this.state.currentCategory ? 'active':''}
                            onClick={()=>this.changeCategory(category)}
                            >{category}</span>
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


export default CategoriesOverview;


