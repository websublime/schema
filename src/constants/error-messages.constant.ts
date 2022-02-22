/**
 * Copyright Websublime All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://websublime.dev/license
 */

const errorMessages = {
  array: {
    maxLength: 'ERRORS.ARRAY.MAX_LENGTH',
    minLength: 'ERRORS.ARRAY.MIN_LENGTH',
    rangeLength: 'ERRORS.ARRAY.RANGE_LENGTH',
    type: 'ERRORS.ARRAY.INVALID_TYPE',
  },
  base: {
    isRequired: 'ERRORS.IS_REQUIRED',
    isRequiredOrEmpty: '${name} is a required field',
  },
  boolean: {
    type: 'ERRORS.BOOLEAN.INVALID_TYPE',
  },
  date: {
    max: 'ERRORS.DATE.MAX',
    min: 'ERRORS.DATE.MIN',
    range: 'ERRORS.DATE.RANGE',
    type: 'ERRORS.DATE.INVALID_TYPE',
  },
  number: {
    isInteger: 'ERRORS.NUMBER.IS_INTEGER',
    isOneOf: 'ERRORS.NUMBER.IS_ONE_OF',
    max: 'ERRORS.NUMBER.MAX',
    min: 'ERRORS.NUMBER.MIN',
    pattern: 'ERRORS.NUMBER.PATTERN',
    range: 'ERRORS.NUMBER.RANGE',
    type: 'ERRORS.NUMBER.INVALID_TYPE',
  },
  object: {
    type: 'ERRORS.OBJECT.INVALID_TYPE',
  },
  string: {
    containsLetter: 'ERRORS.STRING.CONTAINS_LETTER',
    containsLetterOnly: 'ERRORS.STRING.CONTAINS_LETTER_ONLY',
    containsLowercaseLetter: 'ERRORS.STRING.CONTAINS_LOWERCASE_LETTER',
    containsNumber: 'ERRORS.STRING.CONTAINS_NUMBER',
    containsUppercaseLetter: 'ERRORS.STRING.CONTAINS_UPPERCASE_LETTER',
    isEmail: 'ERRORS.STRING.IS_EMAIL',
    isHex: 'ERRORS.STRING.IS_HEX',
    isOneOf: 'ERRORS.STRING.IS_ONE_OF',
    isURL: 'ERRORS.STRING.IS_URL',
    maxLength: 'ERRORS.STRING.MAX_LENGTH',
    minLength: 'ERRORS.STRING.MIN_LENGTH',
    pattern: 'ERRORS.STRING.PATTERN',
    rangeLength: 'ERRORS.STRING.RANGE_LENGTH',
    type: 'ERRORS.STRING.INVALID_TYPE',
  },
};

export { errorMessages };
