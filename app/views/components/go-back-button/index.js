import React from 'react';
import {withRouter} from 'react-router';
import ButtonBack from 'focus-components/button-back';

const GoBackComponent = ({router}) => (
    <ButtonBack back={router.goBack} />
);

export default withRouter(GoBackComponent);
