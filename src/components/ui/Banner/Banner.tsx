import * as React from 'react';
import { RES_URL } from '../../../config';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__wrapper">
                <div className="banner__wrapper--circle">
                    <img src={RES_URL + "img/test.jpg"} />
                    <p>
                        Web
                    </p>
                </div>

                <div className="banner__wrapper--circle">
                    <img src={RES_URL + "img/test.jpg"} />
                    <p>
                        Design
                    </p>
                </div>

                <div className="banner__wrapper--circle">
                    <img src={RES_URL + "img/test.jpg"} />
                    <p>
                        Circle
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;