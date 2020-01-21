const INITIAL_STATE = {
    sections: [
        {
            title: 'food',
            imageUrl: './images/food.jpg',
            id: 1,
            linkUrl: 'tracker/food'
        },
        {
            title: 'workout',
            imageUrl: './images/workout.jpg',
            id: 2,
            linkUrl: 'tracker/workout'
        },
        {
            title: 'code',
            imageUrl: './images/code.jpg',
            id: 3,
            linkUrl: 'tracker/code'
        },
        {
            title: 'communication',
            imageUrl: './images/communication.jpg',
            id: 4,
            linkUrl: 'tracker/communication'
        },
        {
            title: 'knowledge',
            imageUrl: './images/knowledge.jpg',
            id: 5,
            linkUrl: 'tracker/knowledge'
        },
        {
            title: 'relax',
            imageUrl: './images/relax.jpg',
            id: 6,
            linkUrl: 'tracker/relax'
        },
        {
            title: 'money',
            imageUrl: './images/money.jpg',
            id: 7,
            linkUrl: 'tracker/money'
        },
        {
            title: 'other',
            imageUrl: './images/other.jpg',
            id: 8,
            linkUrl: 'tracker/other'
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