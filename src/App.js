import React from 'react';
import styled from 'styled-components';

import { CreditCardForm } from './components/creditcardForm/CreditCardForm.js';

export const App = () => {

    return (
        <ContentArea>
            <CreditCardForm />
        </ContentArea>
    );
};

const ContentArea = styled.div`
    display: flex;
    justify-content: center;
`;