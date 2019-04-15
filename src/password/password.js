const minLen = 6;
const goodLen = 8;
const maxLen = 64;
export const specialChars = ['!','@','#','$','%','&','*','+','^','~'];
const validSpecialChars = new RegExp(
    '['+specialChars.reduce((concat,curr) => concat + curr)+']'
    );
const validPassword = new RegExp(
    '^['+specialChars.reduce((concat,curr) => concat + curr)+
    'A-Za-z0-9]{' + minLen + ',' + maxLen + '}$'
    );


/* Clarifying strength values: 
    -1: password is not valid;
    0: password is valid, but very weak;
    1: password is weak;
    2: password is has medium strength;
    3: password is strong;
    4: password is very strong;
*/
export function strength( password ) {
    if ( !isValid(password) ) return -1;
    return isLengthGood(password) + 
        ( hasNumber(password) && hasLetter(password) ) +
        hasUpAndDownCase(password) +
        hasSpecialChar(password);
}

export function isLongEnough( password ) {
    return password.length >= minLen;
}

export function isLengthGood( password ) {
    return password.length >= goodLen;
}

export function hasNumber( password ) {
    return Boolean(password.match(/[0-9]/));
}

export function hasLetter( password ) {
    return Boolean(password.match(/[a-zA-Z]/));
}

export function hasUpAndDownCase( password ) {
    return Boolean(password.match(/[a-z]/)) && Boolean(password.match(/[A-Z]/));
}

export function hasSpecialChar ( password ) {
    return Boolean(password.match(validSpecialChars));
}

export function isValid( password ) {
    return Boolean(password.match(validPassword));
}

export function strengthAdjective( strength ) {
    switch( strength ) {
        case 0:
            return 'very-weak';
        case 1:
            return 'weak';
        case 2:
            return 'medium';
        case 3:
            return 'strong';
        case 4:
            return 'very-strong';
        default:
            return 'invalid'
    }
}