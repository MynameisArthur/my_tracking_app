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
                    id: 1
                },
                {
                    title: 'workout',
                    imageUrl: './assets/workout.jpg',
                    id: 2
                },
                {
                    title: 'code',
                    imageUrl: './assets/code.jpg',
                    id: 3
                },
                {
                    title: 'communication skills',
                    imageUrl: './assets/communication.jpg',
                    id: 4
                },
                {
                    title: 'general knowledge',
                    imageUrl: './assets/knowledge.jpg',
                    id: 5
                },
                {
                    title: 'relax',
                    imageUrl: './assets/relax.jpg',
                    id: 6
                },
            ]
        };
    }
    render() {
        return (
            <div className="directory-menu">
               {
                   this.state.sections.map(({title,imageUrl,id})=>{
                       return <MenuItem key={id} title={title} imageUrl={imageUrl} />
                   })
               }
            </div>
        );
    }
}
export default DirectoryComponent;