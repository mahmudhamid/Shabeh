// Mapping of Arabic letters with their different forms
const arabicFormsMapping: { [key: string]: string[] } = {
    'ا': ['أ', 'إ', 'آ', 'ٱ', 'ٲ', 'ٵ', 'ٳ', 'ٵ'],
    'ب': ['ٻ', 'پ', 'ڀ', 'ٮ', 'ٹ'],
    'ت': ['ٺ', 'ټ'],
    'ث': ['ٽ', 'ٿ'],
    'ج': ['ڃ', 'ڄ', 'چ', 'ڿ', 'ڇ'],
    'ح': ['ځ'],
    'خ': ['څ', 'ڂ'],
    'د': ['ڈ', 'ډ', 'ڋ', 'ڌ', 'ڊ', 'ڍ', 'ڎ', 'ڏ', 'ۮ', 'ذ'],
    'ر': ['ڑ', 'ڒ', 'ړ', 'ڔ', 'ڕ', 'ږ'],
    'ز': ['ڗ', 'ژ', 'ڙ'],
    'س': ['ښ', 'ڛ'],
    'ش': ['ڜ'],
    'ص': ['ڝ'],
    'ض': ['ڟ', 'ظ', 'ڞ'],
    'ط': [],
    'ع': [],
    'غ': ['ڠ'],
    'ف': ['ڡ', 'ڢ', 'ڧ', 'ڤ', 'ڥ'],
    'ق': ['ڦ', 'ڨ'],
    'ك': ['ڪ', 'ڭ', 'ڬ', 'ڮ', 'ڰ', 'ڱ', 'ڲ', 'ڳ', 'ڴ', 'ک', 'ڳ'],
    'ل': ['ڵ', 'ڶ', 'ڷ', 'ڸ'],
    'م': [],
    'ن': ['ڼ', 'ڽ', 'ڹ', 'ں', 'ڻ'],
    'ه': ['ة', 'ھ', 'ۀ', 'ہ', 'ۂ'],
    'و': ['ۄ', 'ۅ', 'ۆ', 'ۇ', 'ۈ', 'ۉ', 'ۊ', 'ۋ', 'ؤ', 'ۏ', 'ٷ'],
    'ي': ['ى', 'ئ', 'ؽ', 'ؾ', 'ؿ', 'ے', 'ۓ'],
};

// Function to remove diacritics from Arabic text
function removeArabicDiacritics(text: string): string {
    return text.replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED]/g, '');
}

// Function to remove spaces text
function removeSpaces(text: string): string {
    return text.replace(/\s/g, '');
}

// Function to replace letters with their key forms
function replaceForms(text: string): string {
    let replacedText = text;
    Object.keys(arabicFormsMapping).forEach((key) => {
        arabicFormsMapping[key].forEach((form) => {
            const regex = new RegExp(form, 'g');
            replacedText = replacedText.replace(regex, key);
        });
    });
    return replacedText;
}

// Function to calculate the percentage of similarity between two Arabic words
interface SimilarityResult {
    matchCount: number;
    maxLength: number;
}
function calculateSimilarity(word1: string, word2: string): SimilarityResult {

    // Step 1: Remove diacritics
    word1 = removeArabicDiacritics(word1);
    word2 = removeArabicDiacritics(word2);

    // Step 2: Remove spaces
    word1 = removeSpaces(word1);
    word2 = removeSpaces(word2);

    // Step 3: Replace letters with their key forms
    word1 = replaceForms(word1);
    word2 = replaceForms(word2);

    // Step 4: Calculate similarity using a fast method
    const length1 = word1.length;
    const length2 = word2.length;
    const maxLength = Math.max(length1, length2);

    let matchCount = 0;
    for (let i = 0; i < maxLength; i++) {
        if (word1[i] === word2[i]) {
            matchCount++;
        }
    }

    return { matchCount, maxLength };
}

function isSimilar(word1: string, word2: string): boolean {
    const { matchCount, maxLength } = calculateSimilarity(word1, word2);
    return matchCount === maxLength;
}

function isEqual(word1: string, word2: string): boolean {
    word1 = removeArabicDiacritics(word1);
    word2 = removeArabicDiacritics(word2);

    // Step 2: Remove spaces
    word1 = removeSpaces(word1);
    word2 = removeSpaces(word2);

    return word1 === word2;
}

function similarityPercentage(word1: string, word2: string): number {
    const { matchCount, maxLength } = calculateSimilarity(word1, word2);
    return (matchCount / maxLength) * 100;
}

function countMatched(word1: string, word2: string): number {
    const { matchCount } = calculateSimilarity(word1, word2);
    return matchCount;
}

function countUnmatched(word1: string, word2: string): number {
    const { matchCount, maxLength } = calculateSimilarity(word1, word2);
    return maxLength - matchCount;
}

export {
    isSimilar,
    isEqual,
    similarityPercentage,
    countMatched,
    countUnmatched
};