import * as React from 'react';

const MainHeader = (props) => {
    
    let title = props.title;
    let subtitle = props.subtitle;
    let copy = props.copy;
    let inverted = props.inverted;

    return (
        <div className={`main-header ${inverted ? "main-header__light" : "main-header__dark"}`}>
            <div className="main-header__focus">
                <h1 className="main-header__focus--title">
                    {
                        title
                    }
                </h1>
                <h3 className="main-header__focus--subtitle">
                    {
                        subtitle
                    }
                </h3>
            </div>
            <div className="main-header__info">
                <p className="main-header__info--copy">
                    {
                        copy
                    }
                </p>
            </div>
        </div>
    )
}

export default MainHeader;