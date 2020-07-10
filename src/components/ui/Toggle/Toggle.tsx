import * as React from 'react';

const Toggle = (props) => {

    let item1 = props.item1;
    let item2 = props.item2;
    let active = props.active;

    return (
        <div className={"toggle"}>
            <div className={`toggle__left ${item1.key === active ? "toggle__left--active" : ""}`} 
                    onClick={() => props.change(item1.key)}>
                <p>
                    {
                        item1.title
                    }
                </p>
            </div>
            <div className={`toggle__right ${item2.key === active ? "toggle__right--active" : ""}`} 
                    onClick={()=>{ props.change(item2.key)}}>
                <p>
                    {
                        item2.title
                    }
                </p>
            </div>
        </div>
    )
}

export default Toggle;