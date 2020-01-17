import React, { Component } from 'react';
import TRACKER_DATA from './tracker.data';
import CategoryPreview from '../../components/category-preview/category-preview.component';

class TrackerPage extends Component {
    constructor()
    {
        super();
        this.state = {
            categories : TRACKER_DATA
        };
    }
    render() {
        const {categories} = this.state;
        
        return (
            <div className="category-page">
                {
                    categories.map(({id,...otherCategoryProps})=>(
                        <CategoryPreview key={id} {...otherCategoryProps}/>
                    ))
                }
            </div>
        );
    }
}
export default TrackerPage;

