/**
 * Convert a string from camelCase to Title Case
 * @param camelCaseText 
 * @returns {string} titleCaseText
 */
export function camelCaseToTitleCase(camelCaseText: string): string {
    const withSpaces = camelCaseText.replace(/([A-Z])/g, " $1");
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}