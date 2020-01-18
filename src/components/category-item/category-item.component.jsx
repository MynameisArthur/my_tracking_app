import React from 'react';
import './category-item.styles.sass';



const CategoryItem = ({id,date})=> {
    return (
        <div className="category-item">
            <div className="category-footer">
                <span className="date">{date}</span>
            </div>
        </div>
    );
};




export default CategoryItem;
