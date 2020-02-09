import React, { Component } from 'react';
import {connect} from 'react-redux';
import './tracker-list.styles.sass';
import {createStructuredSelector} from 'reselect';
import {selectTrackerItems,selectTrackersIsFetching} from '../../redux/tracker/tracker.selectors';
import TrackerListItem from '../../components/tracker-list-item/tracker-list-item.component';
import {fetchTrackersListStart} from '../../redux/tracker/tracker.actions';


class TrackerList extends Component {    
    componentDidMount()
    {
        const {fetchTrackersListStart} = this.props;
        fetchTrackersListStart();
        this.setState({loading: false})
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
                        return(<TrackerListItem key={trackerItem.item+index} trackerItem={trackerItem}/>);
                    })
                }       
            </div>
        );
    }
};
const mapStateToProps = createStructuredSelector({
    trackerItems: selectTrackerItems,
    isTrackersFetching: selectTrackersIsFetching
});
const mapDispatchToProps = dispatch=>({
    fetchTrackersListStart: ()=> dispatch(fetchTrackersListStart())
});


export default connect(mapStateToProps,mapDispatchToProps)(TrackerList);