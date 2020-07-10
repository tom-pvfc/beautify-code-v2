import * as React from 'react';

const AboutProcess = (props) => {
    let data = props.data;

    return (
        <div className={`about-process`}>
          {
            data.map((item,i)=>{
              return <div key={"about-"+i} className="about-process__item">
                    <h1 className="about-process__item--title">
                      {
                        item.title
                      }
                    </h1>
                    <p className="about-process__item--copy">
                      {
                          item.copy
                      }
                    </p>
                </div>
            })
          }
        </div>
    )
}

export default AboutProcess;