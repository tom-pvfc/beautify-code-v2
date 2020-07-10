import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';

export interface ContactPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    sectionData: any;
}

const INIT_STATE: ContactPageState = {

}

export interface ContactPageState {

}

export class ContactPage extends React.Component<ContactPageProps, ContactPageState> {

    constructor(props: ContactPageProps) {
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
            <div className={"contact-page " + cls}>
                <div className="contact-page__wrapper">
                    <div dangerouslySetInnerHTML={titleHtml} className="contact-page__wrapper--title" ></div>
                    <p className="contact-page__wrapper--subtitle">
                        {
                            props.sectionData.subTitle
                        }
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<ContactPageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
