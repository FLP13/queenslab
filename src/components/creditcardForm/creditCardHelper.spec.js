import creditCardHelper from './creditCardHelper';

const VALID_AMEX_1 = '342321344298321';
const VALID_AMEX_2 = '372321344298323';
const INVALID_AMEX_1 = '3412358372831485';
const INVALID_AMEX_2 = '3792847382384956';

const VALID_VISA_1 = '4423213442983213';
const VALID_VISA_2 = '4423213442983';
const INVALID_VISA_1 = '442321344298313';
const INVALID_VISA_2 = '44232134429833';

const VALID_MASTERCARD_1 = '5124546423543456';
const VALID_MASTERCARD_2 = '5544445566778676';
const INVALID_MASTERCARD_1 = '51245464235434';
const INVALID_MASTERCARD_2 = '55444456677867';

const VALID_DISCOVERY_1 = '6011546423543456';
const VALID_DISCOVERY_2 = '561546423543456';
const INVALID_DISCOVERY_1 = '601154642354345';
const INVALID_DISCOVERY_2 = '56154642353456';

const VALID_DC_1 = '30545643132394';
const VALID_DC_2 = '38545643132394';
const INVALID_DC_1 = '3054564313239';
const INVALID_DC_2 = '3854564313239465';

const VALID_JCB_1 = '213145265845215';
const VALID_JCB_2 = '3531245265845215';
const INVALID_JCB_1 = '2131452658452152';
const INVALID_JCB_2 = '353124526584521';

describe('CreditCardHelper', () => {
    test('Testing American Express', () => {
        expect(creditCardHelper.getCreditCardBrand(VALID_AMEX_1)).toBe(
            'American Express'
        );
        expect(creditCardHelper.validateCreditCardNumber(VALID_AMEX_1)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(VALID_AMEX_2)).toBe(
            'American Express'
        );
        expect(creditCardHelper.validateCreditCardNumber(VALID_AMEX_2)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(VALID_AMEX_1)).toBe(
            'American Express'
        );
        expect(creditCardHelper.validateCreditCardNumber(INVALID_AMEX_1)).toBe(
            false
        );
        expect(creditCardHelper.getCreditCardBrand(INVALID_AMEX_2)).toBe(
            'American Express'
        );
        expect(creditCardHelper.validateCreditCardNumber(INVALID_AMEX_2)).toBe(
            false
        );
    });

    test('Testing VISA', () => {
        expect(creditCardHelper.getCreditCardBrand(VALID_VISA_1)).toBe('VISA');
        expect(creditCardHelper.validateCreditCardNumber(VALID_VISA_1)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(VALID_VISA_2)).toBe('VISA');
        expect(creditCardHelper.validateCreditCardNumber(VALID_VISA_2)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(INVALID_VISA_1)).toBe(
            'VISA'
        );
        expect(creditCardHelper.validateCreditCardNumber(INVALID_VISA_1)).toBe(
            false
        );
        expect(creditCardHelper.getCreditCardBrand(INVALID_VISA_2)).toBe(
            'VISA'
        );
        expect(creditCardHelper.validateCreditCardNumber(INVALID_VISA_2)).toBe(
            false
        );
    });

    test('Testing MasterCard', () => {
        expect(creditCardHelper.getCreditCardBrand(VALID_MASTERCARD_1)).toBe(
            'MasterCard'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(VALID_MASTERCARD_1)
        ).toBe(true);
        expect(creditCardHelper.getCreditCardBrand(VALID_MASTERCARD_2)).toBe(
            'MasterCard'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(VALID_MASTERCARD_2)
        ).toBe(true);
        expect(creditCardHelper.getCreditCardBrand(INVALID_MASTERCARD_1)).toBe(
            'MasterCard'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(INVALID_MASTERCARD_1)
        ).toBe(false);
        expect(creditCardHelper.getCreditCardBrand(INVALID_MASTERCARD_2)).toBe(
            'MasterCard'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(INVALID_MASTERCARD_2)
        ).toBe(false);
    });

    test('Testing Discovery', () => {
        expect(creditCardHelper.getCreditCardBrand(VALID_DISCOVERY_1)).toBe(
            'Discovery'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(VALID_DISCOVERY_1)
        ).toBe(true);
        expect(creditCardHelper.getCreditCardBrand(VALID_DISCOVERY_2)).toBe(
            'Discovery'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(VALID_DISCOVERY_2)
        ).toBe(true);
        expect(creditCardHelper.getCreditCardBrand(INVALID_DISCOVERY_1)).toBe(
            'Discovery'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(INVALID_DISCOVERY_1)
        ).toBe(false);
        expect(creditCardHelper.getCreditCardBrand(INVALID_DISCOVERY_2)).toBe(
            'Discovery'
        );
        expect(
            creditCardHelper.validateCreditCardNumber(INVALID_DISCOVERY_2)
        ).toBe(false);
    });

    test('Testing Diners Club', () => {
        expect(creditCardHelper.getCreditCardBrand(VALID_DC_1)).toBe(
            'Diners Club'
        );
        expect(creditCardHelper.validateCreditCardNumber(VALID_DC_1)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(VALID_DC_2)).toBe(
            'Diners Club'
        );
        expect(creditCardHelper.validateCreditCardNumber(VALID_DC_2)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(INVALID_DC_1)).toBe(
            'Diners Club'
        );
        expect(creditCardHelper.validateCreditCardNumber(INVALID_DC_1)).toBe(
            false
        );
        expect(creditCardHelper.getCreditCardBrand(INVALID_DC_2)).toBe(
            'Diners Club'
        );
        expect(creditCardHelper.validateCreditCardNumber(INVALID_DC_2)).toBe(
            false
        );
    });

    test('Testing JCB', () => {
        expect(creditCardHelper.getCreditCardBrand(VALID_JCB_1)).toBe('JCB');
        expect(creditCardHelper.validateCreditCardNumber(VALID_JCB_1)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(VALID_JCB_2)).toBe('JCB');
        expect(creditCardHelper.validateCreditCardNumber(VALID_JCB_2)).toBe(
            true
        );
        expect(creditCardHelper.getCreditCardBrand(INVALID_JCB_1)).toBe('JCB');
        expect(creditCardHelper.validateCreditCardNumber(INVALID_JCB_1)).toBe(
            false
        );
        expect(creditCardHelper.getCreditCardBrand(INVALID_JCB_2)).toBe('JCB');
        expect(creditCardHelper.validateCreditCardNumber(INVALID_JCB_2)).toBe(
            false
        );
    });
});
