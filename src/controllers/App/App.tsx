import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom';
import { ACTIONS } from './Actions';
import { AppProps, inAppState, inAppInitialState } from './StateAndProps';
import SinglePage from '../../pages/SinglePage/SinglePage';

export const STATE_KEY = 'app';

class App extends React.Component<AppProps, inAppState>{
    constructor(props: AppProps) {
        super(props);
        this.state = inAppInitialState;
    }

   
    render() {
        return (
            <div className={`app`}>
                <Router hashType="noslash">
                    <Switch>
                        <Route exact path="/" component={SinglePage} />
                        <Route exact path="/:key?" component={SinglePage} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

function mapStateToProps(state: any, ownProps) {
    return {
        appState: state.app
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ loadData: ACTIONS.DATA_LOADED, getDeeplinkEl: ACTIONS.GET_DEEPLINK }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
