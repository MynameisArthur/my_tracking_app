import React from 'react';
import './category-preview.styles.sass';
import CategoryItem from '../category-item/category-item.component';

const CategoryPreview = ({title,days})=> {
    return (
        <div className="category-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    days
                    .filter((day,index)=> index < 4)
                    .map(({id,...itemProps})=>(
                        <CategoryItem key={id} {...itemProps} />
                    ))
                }
            </div>
        </div>
    )
}
export default CategoryPreview;
