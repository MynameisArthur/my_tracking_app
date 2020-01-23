import React,{Component} from 'react';
import {connect} from 'react-redux';
import './tracker-list.styles.sass';
import {createStructuredSelector} from 'reselect';
import {selectTrackerItems} from '../../redux/tracker/tracker.selectors';
import TrackerListItem from '../../components/tracker-list-item/tracker-list-item.component';
import {firestore,convertCategoriesSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCategories} from '../../redux/category/category.actions';

class TrackerList extends Component {
    unsubscribeFromSnapshot = null;
    componentDidMount()
    {
        const {updateCategories} = this.props;
        const categoriesRef = firestore.collection('categories');
        this.unsubscribeFromSnapshot = categoriesRef.onSnapshot(async snapshot=>{
            const categoriesMap = convertCategoriesSnapshotToMap(snapshot);
            updateCategories(categoriesMap);            
        });
    }
    render()
    {
        const {trackerItems} = this.props;
        return (
            <div className="tracker-list">
                <div className="tracker-header">
                    <p>title</p>
                    <p>date</p>
                    <p>category</p>
                    <p>description</p>
                    <p>remove</p>
                </div>
                {
                    trackerItems && trackerItems.map((trackerItem,index)=>{
                        return(
                            <TrackerListItem key={trackerItem.item+index} trackerItem={trackerItem}/>
                        );
                    })
                }       
            </div>
        );
    }
};
const mapStateToProps = createStructuredSelector({
    trackerItems: selectTrackerItems
});
const mapDispatchToProps = dispatch=>({
    updateCategories : categoriesMap => dispatch(updateCategories(categoriesMap))
});

export default connect(mapStateToProps,mapDispatchToProps)(TrackerList);