import React, { useState } from 'react';
import styled from 'styled-components';
import creditCardHelper from './creditCardHelper';

import { CreditCard } from './CreditCard';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const YEARS = [2021, 2022, 2023, 2024];

export const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [name, setName] = useState('');
    const [month, setMonth] = useState('MM');
    const [year, setYear] = useState('YY');
    const [cvc, setCvc] = useState('');
    const [brand, setBrand] = useState('');

    const [invalidCardNumber, setInvalidCardNumber] = useState(false);

    const [flipCard, setFlipCard] = useState(false);

    const handleCardNumberChange = (e) => {
        setInvalidCardNumber(false);
        let cardNumber =
            e.target.value.length > 16
                ? e.target.value.substring(0, 16)
                : e.target.value;

        setCardNumber(cardNumber);

        const brand = creditCardHelper.getCreditCardBrand(cardNumber);
        setBrand(brand);
    };

    const handleCvcChange = (e) => {
        let cardNumber =
            e.target.value.length > 3
                ? e.target.value.substring(0, 3)
                : e.target.value;
        setCvc(cardNumber);
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (creditCardHelper.validateCreditCardNumber(cardNumber)) {
            setCardNumber('');
            setName('');
            setMonth('MM');
            setYear('YY');
            setCvc('');
        } else {
            setInvalidCardNumber(true);
        }
    };

    return (
        <Wrapper onSubmit={(e) => submitForm(e)}>
            <CreditCard
                flipCard={flipCard}
                cardNumber={cardNumber}
                name={name}
                month={month}
                year={year}
                cvc={cvc}
                brand={brand}
            />
            <FormWrapper>
                <InputRow>
                    <InputGroup>
                        <label htmlFor="cardnumber">Card number</label>
                        <InputWrapper>
                            <input
                                id="cardnumber"
                                type="number"
                                onChange={(e) => handleCardNumberChange(e)}
                                value={cardNumber}
                            />
                        </InputWrapper>
                        {invalidCardNumber && (
                            <ValidationMessage id="validationmessage">
                                Wrong format on creditcard number!
                            </ValidationMessage>
                        )}
                    </InputGroup>
                </InputRow>
                <InputRow>
                    <InputGroup>
                        <label htmlFor="name">Name</label>
                        <InputWrapper>
                            <input
                                id="name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </InputWrapper>
                    </InputGroup>
                </InputRow>
                <InputRow>
                    <InputGroup style={{ marginRight: '50px' }}>
                        <legend>Exparation date</legend>
                        <fieldset>
                            <InputWrapper>
                                <select
                                    style={{ marginRight: '10px' }}
                                    id="month"
                                    type="text"
                                    aria-label="month"
                                    onChange={(e) => setMonth(e.target.value)}
                                    value={month}
                                >
                                    <option defaultValue hidden>
                                        Month
                                    </option>
                                    {MONTHS.map((month) => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    id="year"
                                    type="text"
                                    aria-label="year"
                                    onChange={(e) => setYear(e.target.value)}
                                    value={year}
                                >
                                    <option defaultValue hidden>
                                        Year
                                    </option>
                                    {YEARS.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </InputWrapper>
                        </fieldset>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="cvc">CVC</label>
                        <InputWrapper>
                            <input
                                id="cvc"
                                type="number"
                                onFocus={() => {
                                    setFlipCard(true);
                                }}
                                onBlur={() => {
                                    setFlipCard(false);
                                }}
                                onChange={(e) => handleCvcChange(e)}
                                value={cvc}
                            />
                        </InputWrapper>
                    </InputGroup>
                </InputRow>
                <InputRow>
                    <Button>Submit</Button>
                </InputRow>
            </FormWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 100px 50px 21px;
    border-radius: 10px;
    box-shadow: 0 4px 5px gray;
`;

const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 13px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const InputWrapper = styled.div`
    display: flex;
    input[type='text'],
    input[type='number'],
    select {
        width: 100%;
        height: 40px;
        margin-top: 5px;
        padding: 0 13px;
        border: 1px solid lightgray;
        border-radius: 4px;
        box-sizing: border-box;

        :focus {
            outline: none;
            border: 1px solid blue;
            box-shadow: 0 4px 5px -5px gray;
        }
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;

const ValidationMessage = styled.div`
    color: red;
`;

const InputGroup = styled.div`
    width: 100%;
    margin-top: auto;

    font-family: system-ui;
    font-size: 12px;

    fieldset {
        border: none;
        padding: 0;
        margin: 0;
    }
`;

const Button = styled.button`
    background-color: blue;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
`;
