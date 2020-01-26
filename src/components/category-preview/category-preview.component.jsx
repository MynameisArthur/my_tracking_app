import React from 'react';
import './category-preview.styles.sass';
import AddItem from '../add-item/add-item.component';


const CategoryPreview = ({title,category})=> {
    return (
        <div className="category-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">                
                <AddItem category={category}/>
            </div>
        </div>
    )
}
export default CategoryPreview;
