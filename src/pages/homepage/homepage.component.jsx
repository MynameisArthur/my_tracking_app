import React from 'react';
import './homepage.styles.sass';
import DirectoryComponent from '../../components/directory/directory.component';

const HomePage = ()=> {
    return (
        <div className="homepage">
            <DirectoryComponent />
        </div>
    )
};
export default HomePage;

