import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';

export interface HomePageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: HomePageState = {

}

export interface HomePageState {

}

export class HomePage extends React.Component<HomePageProps, HomePageState> {

    constructor(props: HomePageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount(){
        
    }
    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        let titleHtml = { __html: props.sectionData.title }
        
        return (
            <div className={"home-page " + cls}>
                <div className="home-page__wrapper">
                    <div dangerouslySetInnerHTML={titleHtml} className="home-page__wrapper--title" ></div>
                    <p className="home-page__wrapper--subtitle">
                        {
                            props.sectionData.subTitle
                        }
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<HomePageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
