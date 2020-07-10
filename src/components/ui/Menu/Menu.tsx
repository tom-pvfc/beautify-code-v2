import * as React from 'react';
import { NavMenu } from '../NavMenu/NavMenu';

const Menu = (props) => {

    return (
        <div className="menu">

            <i className="menu__close icon-close" onClick={props.toggleBurger} />

            {props.navData && props.navData.length > 0 && (
                <NavMenu
                    currSection={props.currSection}
                    navData={props.navData}
                    handleClick={props.handleClick}
                />
            )}

        </div>
    )
}

export default Menu;