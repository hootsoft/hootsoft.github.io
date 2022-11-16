/**
 * Snake Case
 *
 * Snake case is the practice of writing compound words in which the words are separated by one underscore character and no spaces.
 * The first letter is either upper- or lowercase.
 * It is commonly used in declaring variable names, function names, and sometimes computer’s filenames.
 *
 * e.g. Hello_world, it_department
 */
export declare function toSnakeCase(str: string): string | undefined;
/**
 * Kebab Case
 *
 * In Kebab case, all letters are written in lower case and the words are separated by a hyphen or minus sign.
 * The kebab notation is often used as a convention for naming filenames.
 *
 * e.g. kebab-case, football-match
 */
export declare function toKebabCase(str: string): string | undefined;
/** Camel Case
 *
 * Camel case describes the practice of writing phrases such that each word or abbreviation in the middle of the
 * phrase begins with a capital letter, without intervening spaces or punctuation.
 *
 * e.g. camelCase, myLaptop
 */
export declare function toCamelCase(str: string): string;
/** Pascal Case
 *
 * Pascal case is similar to camel case but the first letter is in uppercase.
 * There is no space and hyphen to separate the words.
 * The pascal case is often used as a convention in creating class in many programming language.
 *
 * e.g. MainBuilding, RedDress
 */
export declare function toPascalCase(str: string): string;
/** Removes punctuation and spaces from a string. */
export declare const flattenString: (str: string) => string;
/** Removes punctuation and spaces from a string. */
export declare const flattenStringToLowerCase: (str: string) => string;
export declare function toFirstLetterLowerCase(str: string): string;
