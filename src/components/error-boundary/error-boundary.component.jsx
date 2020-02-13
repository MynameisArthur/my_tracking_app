import React,{Component} from 'react';
import './error-boundary.styles.sass';

class ErrorBoundary extends Component{
    constructor()
    {
        super();
        this.state= {
            hasErrored: false
        };
    }
    static getDerivedStateFromError(error){
        return {
            hasErrored: true
        };
    }
    componentDidCatch(error,info)
    {
        console.log(error);        
    }
    render()
    {
        if(this.state.hasErrored)
        {
            return (
                <div className="error-image-overlay">
                    <div className="error-image-container">
                    </div>
                    <h2 className="error-image-text">
                        This Page is Not on the Map
                    </h2>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;