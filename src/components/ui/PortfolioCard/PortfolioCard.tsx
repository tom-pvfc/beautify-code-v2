import * as React from 'react';
import { RES_URL } from '../../../config';

const PortfolioCard = (props) => {
    let title = props.title;
    let imgSrc = props.imgSrc;

    return (
        <div className={`portfolio-card`}>
          <div className="portfolio-card__wrapper">
              <div className="portfolio-card__wrapper--img">
                <img src={`${RES_URL}img/portfolio/${imgSrc}`} />
              </div>
              <div className="portfolio-card__wrapper--title">
                <p>
                    {
                        title
                    }
                </p>
              </div>
          </div>
        </div>
    )
}

export default PortfolioCard;