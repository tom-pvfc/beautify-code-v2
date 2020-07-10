import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainHeader from '../../components/ui/MainHeader/MainHeader';
import PortfolioCard from '../../components/ui/PortfolioCard/PortfolioCard';

export interface PortfolioPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: PortfolioPageState = {

}

export interface PortfolioPageState {

}

export class PortfolioPage extends React.Component<PortfolioPageProps, PortfolioPageState> {

    constructor(props: PortfolioPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount() {

    }
    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        let imageData = PORTFOLIO_IMG;

        return (
            <div className={"portfolio-page " + cls}>
                <div className="portfolio-page__wrapper">
                    <div className="portfolio-page__wrapper--header">
                        <MainHeader
                            title={props.sectionData.title}
                            subtitle={props.sectionData.subTitle}
                            copy={props.sectionData.copy}
                            inverted={true}
                        />
                    </div>
                    <div className="portfolio-page__wrapper--data">
                        {
                            imageData.map((item,ii)=>{
                                return <PortfolioCard 
                                            key={"card-"+ii}
                                            title={item.title}
                                            imgSrc={item.imgSrc}
                                        />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const PORTFOLIO_IMG = [
    {
        key: 0,
        title: "Droplet",
        imgSrc: "img1.jpg"
    },
    {
        key: 1,
        title: "The Lamp",
        imgSrc: "img2.jpg"
    },
    {
        key: 2,
        title: "Minimal",
        imgSrc: "img3.jpg"
    },
    {
        key: 3,
        title: "Shutter",
        imgSrc: "img4.jpg"
    },
    {
        key: 4,
        title: "Fuji",
        imgSrc: "img5.jpg"
    },
    {
        key: 5,
        title: "Skaterboy",
        imgSrc: "img6.jpg"
    },
]

const mapStateToProps = (state: IStoreState, ownProps): Partial<PortfolioPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);
