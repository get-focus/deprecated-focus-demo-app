import React, {PropTypes, Component} from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as MetadataProvider } from 'focus-graph/behaviours/metadata';
import { Provider as FieldHelpersProvider } from 'focus-graph/behaviours/field';
import { Provider as MasterdataProvider } from 'focus-graph/behaviours/master-data';
import { Provider as SearchProvider } from 'focus-search/behaviours/search';

import routes from './router/routes';
import definitions from './config/entity-definitions';
import domains from './config/domains';
import masterdatas from './config/master-datas';
import configSearch from './config/search';

import InputText from 'focus-components/input-text';
import DisplayComponent from 'focus-components/input-display/text';
import SelectComponent from 'focus-components/select-mdl';
import SelectComponentDisplay from 'focus-components/input-display/text';

const FieldHelperProps = {
    InputComponent: InputText,
    DisplayComponent: DisplayComponent,
    SelectComponent: SelectComponent,
    SelectComponentDisplay: SelectComponentDisplay
};

//to make hot reload work, we have to write Application as a Component.
class Application extends Component {
    render() {
        const {history, store} = this.props;
        return (
            <StoreProvider store={store}>
                <MetadataProvider definitions={definitions} domains={domains}>
                    <FieldHelpersProvider>
                        <MasterdataProvider configuration={masterdatas}>
                            <SearchProvider store={store} searchMetadata={configSearch}>
                                <Router history={history} routes={routes} />
                            </SearchProvider>
                        </MasterdataProvider>
                    </FieldHelpersProvider>
                </MetadataProvider>
            </StoreProvider>
        );
    }
}

//Application.propTypes = propTypes;
Application.displayName = 'Application';
Application.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};
export default Application;
