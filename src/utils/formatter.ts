/**
 @module Formatters
*/

/**
    Returns the given value if it is a number and not NaN, otherwise returns the specified empty character.
    @function
    @param {any} value - The value to be checked if it is a number.
    @param {string} [emptyChar='-'] - The character to be returned if the value is not a number or is NaN.
    @returns {number|string} The given value if it is a number and not NaN, otherwise the specified empty character.
*/
export const isNumberOrEmpty = (value: any, emptyChar: string = '-'): number | string => {
    return typeof value === 'number' && !Number.isNaN(value) ? value : emptyChar
}

/**
    Formats the given value to a decimal with the specified number of decimal places.
    @function
    @category Formatters
    @param {any} value - The value to be formatted.
    @param {number} [decimals=2] - The number of decimal places to include in the formatted value.
    @returns {string} The formatted value.
*/

export const formatDecimal = (value: any, decimals: number = 2): string => {
    const num = typeof value === 'number' ? value : Number(value)
    return num.toFixed(decimals)
}

/**
 * This is a constant function that takes two parameters.
 * @function
 * @category Formatters
 * @param {string} param1 - The first parameter.
 * @param {number} param2 - The second parameter.
 * @returns {string} The result of the function.
 */
export const myFunction = (param1: any, param2: any) => {
    // function body
  };
  
