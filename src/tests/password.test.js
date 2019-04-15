import * as PS from '../password/password'

it('should return true when password is long enough', () => 
{    
    expect ( PS.isLongEnough('123456') ).toBe(true);
});

it('should return false when password is short', () => 
{    
    expect ( PS.isLongEnough('12345') ).toBe(false);
    expect ( PS.isLongEnough('') ).toBe(false);
});

it('should return true when password has a number', () => 
{    
    expect ( PS.hasNumber('1') ).toBe(true);
    expect ( PS.hasNumber('1asasaas112') ).toBe(true);
});

it('should return false when password has does not have a number', () => 
{    
    expect ( PS.hasNumber('') ).toBe(false);
    expect ( PS.hasNumber('abcdef') ).toBe(false);
});

it('should return true when password has a letter', () => 
{    
    expect ( PS.hasLetter('a') ).toBe(true);
    expect ( PS.hasLetter('ab13243cd') ).toBe(true);
});

it('should return false when password has does not have a letter', () => 
{    
    expect ( PS.hasLetter('') ).toBe(false);
    expect ( PS.hasLetter('123456') ).toBe(false);
});

it('should return true when password has a special symbol', () => 
{   
    ['!','@','#','$','%','&','*','+','^','~'].forEach( 
        sym => expect( PS.hasSpecialChar(sym) ).toBe(true) );
});

it('should return false when password does not have a special symbol', () => 
{    
    expect ( PS.hasSpecialChar('') ).toBe(false);
    expect ( PS.hasSpecialChar('123456abcdef') ).toBe(false);
});

it('should return true when password has good length', () => 
{    
    expect ( PS.isLengthGood('12345678') ).toBe(true);
});

it('should return false when password is too short', () => 
{    
    expect ( PS.isLengthGood('123456') ).toBe(false);
    expect ( PS.isLengthGood('') ).toBe(false);
});

it('should return true when password has up and downcase', () => 
{    
    expect ( PS.hasUpAndDownCase('Aa') ).toBe(true);
});


it('should return false when password does not have up or downcase', () => 
{    
    expect ( PS.hasUpAndDownCase('AAAA') ).toBe(false);
    expect ( PS.hasUpAndDownCase('aaaaa') ).toBe(false);
    expect ( PS.hasUpAndDownCase('') ).toBe(false);
});

it('should return false when password is not valid', () => 
{    
    expect ( PS.isValid('12345678 ') ).toBe(false); //has space
    expect ( PS.isValid('12345678-') ).toBe(false); //has minus
    expect ( PS.isValid('12345') ).toBe(false); //too short
    expect ( PS.isValid('12345678123456781234567812345678123' +
                        '123456784567812345678123456789') ).toBe(false); //too logn
    expect ( PS.isValid('{12345678') ).toBe(false); //has curly bracket
    expect ( PS.isValid('12345678}') ).toBe(false); //has curly bracket
    expect ( PS.isValid('12345678]') ).toBe(false); //has bracket
    expect ( PS.isValid('[12345678') ).toBe(false); //has bracket
    expect ( PS.isValid('12345678)') ).toBe(false); //has parenthesis
    expect ( PS.isValid('12345678)') ).toBe(false); //has parenthesis
    expect ( PS.isValid('12345678\'') ).toBe(false); //has apostrophe
    expect ( PS.isValid('12345678\"') ).toBe(false); //has quotation mark
});


it('should return true when password is valid', () => 
{    
    expect ( PS.hasUpAndDownCase('AaBb12345678') ).toBe(true);
});

it('should return password strength', () => 
{    
    expect ( PS.strength(' ') ).toBe(-1);
    expect ( PS.strength('123456') ).toBe(0);
    expect ( PS.strength('abcdef') ).toBe(0);
    expect ( PS.strength('12345678') ).toBe(1);
    expect ( PS.strength('1a2b3c5d') ).toBe(2);
    expect ( PS.strength('1a2b3c4D5E') ).toBe(3);
    expect ( PS.strength('1@2b3C4d5E') ).toBe(4);
});

it('should return password strength as an adjective', () => 
{
    expect ( PS.strengthAdjective(-1) ).toBe('invalid');
    expect ( PS.strengthAdjective(0) ).toBe('very-weak');
    expect ( PS.strengthAdjective(1) ).toBe('weak');
    expect ( PS.strengthAdjective(2) ).toBe('medium');
    expect ( PS.strengthAdjective(3) ).toBe('strong');
    expect ( PS.strengthAdjective(4) ).toBe('very-strong');
});



