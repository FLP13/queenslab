import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CreditCard = ({
    flipCard,
    cardNumber,
    name,
    month,
    year,
    cvc,
    brand,
}) => {
    useEffect(() => {
        let formatedNumbers = '';
        for (let i = 0; i < 16; i++) {
            if (i < cardNumber.length) {
                const number = i > 3 && i < 12 ? '*' : cardNumber.charAt(i);
                formatedNumbers = formatedNumbers.concat(number);
            } else {
                formatedNumbers = formatedNumbers.concat('#');
            }
        }
        formatedNumbers = formatedNumbers.match(/.{1,4}/g).join(' ');
        setVisibleCardNumber(formatedNumbers);
    }, [cardNumber]);

    useEffect(() => {
        setVisibleCvc(cvc.replace(/./g, '*'));
    }, [cvc]);

    const [visibleCardNumber, setVisibleCardNumber] = useState();
    const [visibleCvc, setVisibleCvc] = useState();

    return (
        <Wrapper>
            <Card style={{ transform: flipCard ? 'rotateY(180deg)' : '' }}>
                <Front>
                    <CardNumberWrapper>{visibleCardNumber}</CardNumberWrapper>
                    <ContentWrapper bottom={'30px'} left={'10px'} small>
                        Card Holder
                    </ContentWrapper>
                    <ContentWrapper bottom={'10px'} left={'10px'}>
                        {name}
                    </ContentWrapper>
                    <ContentWrapper bottom={'30px'} right={'10px'} small>
                        Expires
                    </ContentWrapper>
                    <ContentWrapper bottom={'10px'} right={'10px'}>
                        {month} / {year}
                    </ContentWrapper>
                    <ContentWrapper top={'10px'} right={'10px'}>
                        {brand}
                    </ContentWrapper>
                </Front>
                <Back>
                    <LineThrough />
                    <CvcWrapper>
                        CVC
                        <p>{visibleCvc}</p>
                    </CvcWrapper>
                </Back>
            </Card>
        </Wrapper>
    );
};

CreditCard.propTypes = {
    flipCard: PropTypes.bool,
    cardNumber: PropTypes.string,
    name: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
    cvc: PropTypes.string,
    brand: PropTypes.string,
};

const CardNumberWrapper = styled.div`
    position: absolute;
    top: 100px;
    left: 60px;

    font-size: 32px;
`;

const ContentWrapper = styled.div`
    position: absolute;
    bottom: ${(props) => (props.bottom ? props.bottom : 'none')};
    left: ${(props) => (props.left ? props.left : 'none')};
    right: ${(props) => (props.right ? props.right : 'none')};
    top: ${(props) => (props.top ? props.top : 'none')};

    font-size: ${(props) => (props.small ? '12px' : '16px')};
`;

const LineThrough = styled.div`
    position: absolute;
    top: 100px;
    border: solid 25px white;
    width: 350px;
`;

const CvcWrapper = styled.div`
    position: absolute;
    top: 75px;
    right: 10px;
    p {
        color: black;
    }
`;

const Wrapper = styled.div`
    background-color: transparent;
    width: 400px;
    height: 200px;
    perspective: 1000px;
    margin: 0 auto -90px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Card = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;

    background-color: #0f4bab;
    color: white;

    border-radius: 10px;
    box-shadow: 0 4px 5px gray;
`;

const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;

    background-color: dodgerblue;
    color: white;

    border-radius: 10px;
    box-shadow: 0 4px 5px gray;

    transform: rotateY(180deg);
`;
