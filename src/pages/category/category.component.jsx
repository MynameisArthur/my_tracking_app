import React from 'react';
import './category.styles.sass';
import TrackerListItem from '../../components/tracker-list-item/tracker-list-item.component';
import {connect} from 'react-redux';
import {selectItemInCategory} from '../../redux/tracker/tracker.selectors';

const CategoryPage = ({items,match})=>{ 
    return(
        <div className="category-page">
            <h2>CATEGORY {match.params.categoryId.toUpperCase()}</h2>
            <div className="tracker-header">
                <p>title</p>
                <p>date</p>
                <p>category</p>
                <p>description</p>
                <p>remove</p>
            </div>
            {
                items && items.map(item => <TrackerListItem key={item.date} trackerItem={item}/>)
            }
        </div>
    );
};


const mapStateToProps = (state,ownProps) => ({
    items: selectItemInCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
