import React, { Component } from 'react';
import './directory.styles.sass';
import MenuItem from '../menu-item/menu-item.component';

class DirectoryComponent extends Component {
    constructor()
    {
        super();
        this.state = {
            sections:[
                {
                    title: 'food',
                    imageUrl: './assets/food.jpg',
                    id: 1,
                    linkUrl: 'food'
                },
                {
                    title: 'workout',
                    imageUrl: './assets/workout.jpg',
                    id: 2,
                    linkUrl: 'workout'
                },
                {
                    title: 'code',
                    imageUrl: './assets/code.jpg',
                    id: 3,
                    linkUrl: 'code'
                },
                {
                    title: 'communication',
                    imageUrl: './assets/communication.jpg',
                    id: 4,
                    linkUrl: 'communication'
                },
                {
                    title: 'knowledge',
                    imageUrl: './assets/knowledge.jpg',
                    id: 5,
                    linkUrl: 'knowledge'
                },
                {
                    title: 'relax',
                    imageUrl: './assets/relax.jpg',
                    id: 6,
                    linkUrl: 'relax'
                },
                {
                    title: 'money',
                    imageUrl: './assets/money.jpg',
                    id: 7,
                    linkUrl: 'money'
                },
            ]
        };
    }
    render() {
        return (
            <div className="directory-menu">
               {
                   this.state.sections.map(({id,...otherSectionProps})=>{
                       return <MenuItem key={id} {...otherSectionProps} />
                   })
               }
            </div>
        );
    }
}
export default DirectoryComponent;