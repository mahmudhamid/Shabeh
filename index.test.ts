import { isSimilar, similarityPercentage, countMatched, countUnmatched } from './index';

describe('Arabic Text Similarity Functions', () => {
    const input1 = ['مرحبا', 'مرحباً'];
    const input2 = ['علي بنمبارك', 'علي بن مبارك'];
    const input3 = ['محمد', 'محمود'];
    const input4 = ['فاطمة', 'فاطمه'];
    const input5 = ['داوود', 'داؤود'];
    const input6 = ['أحمد بن داوودمحمد', 'احْمد بِن دَاؤود مُحمد'];

    it('should correctly determine if two words are similar', () => {
        expect(isSimilar(input1[0], input1[1])).toBe(true);
        expect(isSimilar(input2[0], input2[1])).toBe(true);
        expect(isSimilar(input3[0], input3[1])).toBe(false);
        expect(isSimilar(input4[0], input4[1])).toBe(true);
        expect(isSimilar(input5[0], input5[1])).toBe(true);
        expect(isSimilar(input6[0], input6[1])).toBe(true);
    });

    it('should correctly calculate the similarity percentage between two words', () => {
        expect(similarityPercentage(input1[0], input1[1])).toBe(100);
        expect(similarityPercentage(input2[0], input2[1])).toBe(100);
        expect(similarityPercentage(input3[0], input3[1])).toBeLessThan(100);
        expect(similarityPercentage(input4[0], input4[1])).toBe(100);
        expect(similarityPercentage(input5[0], input5[1])).toBe(100);
        expect(similarityPercentage(input6[0], input6[1])).toBe(100);
    });

    it('should correctly count the number of matched characters between two words', () => {
        expect(countMatched(input1[0], input1[1])).toBe(input1[0].replace(/\s/g,'').length);
        expect(countMatched(input2[0], input2[1])).toBe(input2[0].replace(/\s/g,'').length);
        expect(countMatched(input3[0], input3[1])).toBeLessThan(input3[0].replace(/\s/g,'').length);
        expect(countMatched(input4[0], input4[1])).toBe(input4[0].replace(/\s/g,'').length);
        expect(countMatched(input5[0], input5[1])).toBe(input5[0].replace(/\s/g,'').length);
        expect(countMatched(input6[0], input6[1])).toBe(input6[0].replace(/\s/g,'').length);
    });

    it('should correctly count the number of unmatched characters between two words', () => {
        expect(countUnmatched(input1[0], input1[1])).toBe(0);
        expect(countUnmatched(input2[0], input2[1])).toBe(0);
        expect(countUnmatched(input3[0], input3[1])).toBeGreaterThan(1);
        expect(countUnmatched(input4[0], input4[1])).toBe(0);
        expect(countUnmatched(input5[0], input5[1])).toBe(0);
        expect(countUnmatched(input6[0], input6[1])).toBe(0);
    });
});