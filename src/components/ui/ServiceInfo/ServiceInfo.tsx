import * as React from 'react';

const ServiceInfo = (props) => {
    let title = props.title;
    let number = props.number;
    let copy = props.copy;

    return (
        <div className={`service-info`}>
          <div className="service-info__row">
            <h3 className="service-info__row--number">
                {
                    number + "."
                }
            </h3>
            <h3 className="service-info__row--title">
                {
                    title
                }
            </h3>
          </div>
          <div className="service-info__row">
              <p className="service-info__row--copy">
                {
                    copy
                }
              </p>
          </div>
        </div>
    )
}

export default ServiceInfo;