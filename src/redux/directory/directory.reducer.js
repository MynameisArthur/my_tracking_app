const INITIAL_STATE = {
    sections: [
        {
            title: 'food',
            imageUrl: './images/food.jpg',
            id: 1,
            linkUrl: 'food'
        },
        {
            title: 'workout',
            imageUrl: './images/workout.jpg',
            id: 2,
            linkUrl: 'workout'
        },
        {
            title: 'code',
            imageUrl: './images/code.jpg',
            id: 3,
            linkUrl: 'code'
        },
        {
            title: 'communication',
            imageUrl: './images/communication.jpg',
            id: 4,
            linkUrl: 'communication'
        },
        {
            title: 'knowledge',
            imageUrl: './images/knowledge.jpg',
            id: 5,
            linkUrl: 'knowledge'
        },
        {
            title: 'relax',
            imageUrl: './images/relax.jpg',
            id: 6,
            linkUrl: 'relax'
        },
        {
            title: 'money',
            imageUrl: './images/money.jpg',
            id: 7,
            linkUrl: 'money'
        },
        {
            title: 'other',
            imageUrl: './images/other.jpg',
            id: 8,
            linkUrl: 'other'
        },
    ]
};

const directoryReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        default:
            return state;
    }
};

export default directoryReducer;