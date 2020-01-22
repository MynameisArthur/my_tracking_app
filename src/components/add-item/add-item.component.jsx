import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './add-item.styles.sass';
import {connect} from 'react-redux';
import {addItem} from '../../redux/tracker/tracker.actions';
import {auth,createTrackerDocument} from '../../firebase/firebase.utils';
class AddItem extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            category: this.props.category,                  
            item: '',
            description: ''
        }
    }
    handleSubmit = async (e)=>{
        e.preventDefault(); 
        const newItem =  {
            category: this.state.category,
            item: e.target.elements[0].value,
            description: e.target.elements[1].value,
            date: (new Date()).getTime()
        };               
        try{
            this.props.addItem(newItem);
            const uid = await this.props.currentUser.id;
            createTrackerDocument(uid,newItem);
            this.setState({
                item: '',
                description: ''
            });           
        }catch(error){
            return console.log(error);            
        }
    }
    handleChange = (e)=>{        
        const {name,value} = e.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <form className="add-item-form" onSubmit={this.handleSubmit}>
                <FormInput 
                    type="text"
                    name="item"
                    label="track item name"
                    value={this.state.item}
                    required
                    onChange={this.handleChange}
                />
                <FormInput 
                    type="text"
                    name="description"
                    label="track item description"
                    value={this.state.description}                    
                    onChange={this.handleChange}
                />                
                <CustomButton type="submit">ADD ITEM</CustomButton>
            </form>
        );
    }
}
const mapStateToProps = ({user:{currentUser}})=>({
   currentUser
})
const mapDispatchToProps = (dispatch)=>{
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
