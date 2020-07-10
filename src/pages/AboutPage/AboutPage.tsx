import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainHeader from '../../components/ui/MainHeader/MainHeader';
import AboutProcess from '../../components/ui/AboutProcess/AboutProcess';

export interface AboutPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: AboutPageState = {

}

export interface AboutPageState {

}

export class AboutPage extends React.Component<AboutPageProps, AboutPageState> {

    constructor(props: AboutPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        let titleHtml = { __html: props.sectionData.title }

        return (
            <div className={"about-page " + cls}>
                <div className="about-page__wrapper">
                    <div dangerouslySetInnerHTML={titleHtml} className="about-page__wrapper--title" ></div>
                    <p className="about-page__wrapper--sub">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<AboutPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
