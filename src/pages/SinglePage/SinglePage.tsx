import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import {
    configureAnchors,
    goToAnchor,
    removeHash
} from 'react-scrollable-anchor';

import { IStoreState } from '../../_reducers';
import { iData, iNavData, Dictionary } from '../../models/models';
import { DP } from '../../constants';
import { SHOW_MENU_DIALOG } from '../../components/ui/Dialog/Utils';
import { Header } from '../../components/ui/Header/Header';
import ScrollableAnchor from 'react-scrollable-anchor';
import GET_CUSTOM_COMPONENT from './getCustomContent';
import { Spinner } from '../../components/ui/Spinner/Spinner';

export interface SinglePageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
}

const INIT_STATE: SinglePageState = {
    showHeader: false,
    navData: []
}

export interface SinglePageState {
    showHeader: boolean,
    navData: iNavData[];
}

export class SinglePage extends React.Component<SinglePageProps, SinglePageState>{

    constructor(props: SinglePageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount() {
        configureAnchors({ offset: -100, scrollDuration: 600 });

        this.setNavData();
    }

    setNavData = () => {
        this.setState({
            navData: SECTIONS
        })
    }

    scrollToAnchor = (id: string) => {
        if (id !== this.props.match.params.key) {
            goToAnchor(id, true);
        } else {
            //added this to scroll to top of section
            removeHash();
            goToAnchor(id, true);
        }

        if (DP.dialogEl) {
            DP.hide();
        }
    };

    openBurgerMenu = () => {
        SHOW_MENU_DIALOG(
            this.state.navData,
            this.props.match.params.key,
            this.scrollToAnchor
        );
    };

    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        if(!state.navData)
        {
            return <Spinner />
        }

        return (
            <div className={"single-page " + cls}>
                {
                    state.showHeader &&
                    <div className="single-page__header">
                        <Header
                            navData={state.navData}
                            currSection={props.match.params.key}
                            scrollToAnchor={this.scrollToAnchor}
                            openBurgerMenu={this.openBurgerMenu}
                        />
                    </div>
                }
                <div className="single-page__content">
                    {
                        SECTIONS.map((section, ii) => {
                            return <ScrollableAnchor
                                key={"section" + ii}
                                className={`${section.class}`}
                                id={section.key}>
                                <div className={`single-page__section single-page__${section.key}`}>
                                    {
                                        GET_CUSTOM_COMPONENT(section)
                                    }
                                </div>
                            </ScrollableAnchor>
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<SinglePageProps> => {
    return {
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);

const SECTIONS = [
    {
        key: "home",
        title: "Hello, this is <span class='teal-highlight'> BeautifyCode</span>. We specialize is making code <span class='teal-highlight'>beautiful!</span>",
        subTitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id neque id diam imperdiet finibus. Proin pretium urna vitae nulla lobortis, vel sodales nunc vulputate. Nunc facilisis justo eget nulla efficitur condimentum eget et odio. Etiam sit amet rutrum lacus, id aliquet tellus",
        navTitle: "Home",
        url: "/",
        class:"",
        copy: "this is the home page",
        data: ""
    },
    {
        key: "about",
        title: "About Us",
        subTitle:"This is what we are.",
        navTitle: "About Us",
        url: "/about",
        class:"",
        copy: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        data: ""
    },
    {
        key: "services",
        title: "Services",
        subTitle:"Our list of awesome services.",
        navTitle: "Services",
        url: "/services",
        class:"",
        copy: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        data: ""
    },
    {
        key: "portfolio",
        title: "Portfolio",
        subTitle:"Check out our latest projects.",
        navTitle: "Portfolio",
        url: "/portfolio",
        class:"",
        copy: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
        data: ""
    }
]