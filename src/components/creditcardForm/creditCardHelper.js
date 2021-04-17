const getCreditCardBrand = (input) => {
    if (input.length > 0) {
        if (input.substring(0, 2) === '34' || input.substring(0, 2) === '37')
            return 'American Express';
        if (input.substring(0, 1) === '4') return 'VISA';
        if (
            parseInt(input.substring(0, 2)) >= 51 &&
            parseInt(input.substring(0, 2)) <= 55
        )
            return 'MasterCard';
        if (input.substring(0, 4) === '6011' || input.substring(0, 1) === '5')
            return 'Discovery';
        if (
            (parseInt(input.substring(0, 3)) >= 300 &&
                parseInt(input.substring(0, 3)) <= 305) ||
            input.substring(0, 2) === '36' ||
            input.substring(0, 2) === '38'
        )
            return 'Diners Club';
        if (
            input.substring(0, 4) === '2131' ||
            input.substring(0, 4) === '1800' ||
            input.substring(0, 2) === '35'
        )
            return 'JCB';
    }
    return '';
};

const validateCreditCardNumber = (input) => {
    if (input.length > 0) {
        if (
            (input.substring(0, 2) === '34' ||
                input.substring(0, 2) === '37') &&
            input.length === 15
        )
            return true;
        if (
            input.substring(0, 1) === '4' &&
            (input.length === 13 || input.length === 16)
        )
            return true;
        if (
            parseInt(input.substring(0, 2)) >= 51 &&
            parseInt(input.substring(0, 2)) <= 55 &&
            input.length === 16
        )
            return true;
        if (
            (input.substring(0, 4) === '6011' && input.length === 16) ||
            (input.substring(0, 1) === '5' && input.length === 15)
        )
            return true;
        if (
            ((parseInt(input.substring(0, 3)) >= 300 &&
                parseInt(input.substring(0, 3)) <= 305) ||
                input.substring(0, 2) === '36' ||
                input.substring(0, 2) === '38') &&
            input.length === 14
        )
            return true;
        if (
            ((input.substring(0, 4) === '2131' ||
                input.substring(0, 4) === '1800') &&
                input.length === 15) ||
            (input.substring(0, 2) === '35' && input.length === 16)
        )
            return true;
    }
    return false;
};

export default { getCreditCardBrand, validateCreditCardNumber };
