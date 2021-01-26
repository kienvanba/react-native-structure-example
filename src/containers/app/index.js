import React, { Fragment } from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { AppURLs } from 'src/configs/urls';

import Init from 'containers/init';
import Auth from './Auth';
import Main from 'containers/main';
import Loading from 'src/components/popup/loading';

export default () => {
    return (
        <Fragment>
            <NativeRouter>
                <Fragment>
                    <Route exact path={AppURLs.root} component={Init} />
                    <Route exact path={AppURLs.auth} component={Auth} />
                    <Route exact path={AppURLs.main} component={Main} />
                </Fragment>
            </NativeRouter>
            <Loading />
        </Fragment>
    );
};
