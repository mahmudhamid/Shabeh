import calculateSimilarity from './index';

describe('calculateSimilarity function', () => {
    it('should handle empty strings', () => {
        expect(calculateSimilarity("", "")).toBe(100);
        expect(calculateSimilarity("مرحبا", "")).toBe(0);
        expect(calculateSimilarity("علي بن مبارك", "علي بنمبارك")).toBe(100);
    });

    it('should remove diacritics', () => {
        expect(calculateSimilarity("مَرحبًا", "مرحبا")).toBe(100);
    });

    it('should replace Arabic forms', () => {
        expect(calculateSimilarity("علي", "على")).toBe(100);
        expect(calculateSimilarity("فاطمة", "فاطمه")).toBe(100);
        expect(calculateSimilarity("داوود", "داؤود")).toBe(100);
    });

    it('should calculate similarity correctly', () => {
        expect(calculateSimilarity("أحمد بن داوودمحمد", "احْمد بِن دَاؤود مُحمد")).toBe(100);
    });
});
