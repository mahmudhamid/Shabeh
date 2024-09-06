# Shabeh

✨ **A light-weight Javascript package to calculate the similarity between two Arabic words.** ✨

## Installation

To install this module, run:

```bash
npm install shabeh
```

## Usage

### Importing the Module

```typescript
import { isSimilar, isEqual, similarityPercentage, countMatched, countUnmatched } from 'shabeh';
```

### Functions

#### `isSimilar(word1: string, word2: string): boolean`

```typescript
console.log(isSimilar("فاطمه", "فاطمة")); // Output: true
console.log(isSimilar("داوود", "داؤود")); // Output: true
console.log(isSimilar("علي", "على")); // Output: true
console.log(isSimilar("أحمد بن داوودمحمد", "احْمد بِن دَاؤود مُحمد")); // Output: true
```

#### `isEqual(word1: string, word2: string): boolean`

```typescript
console.log(isEqual("فاطمه", "فاطمة")); // Output: false
console.log(isEqual("داوود", "داؤود")); // Output: false
console.log(isEqual("علي", "على")); // Output: false
console.log(isEqual("مرحباً", "مرحبا")); // Output: true
console.log(isEqual("علي بنمبارك", "علي بن مبارك")); // Output: true
```

#### `similarityPercentage(word1: string, word2: string): number`

```typescript
const similarity = similarityPercentage("داؤود", "داوود");
console.log(similarity.toFixed(2)); // Output: 100
```

#### `countMatched(word1: string, word2: string): number`

```typescript
const matched = countMatched("محمد", "محمود");
console.log(matched); // Output: 4
```

#### `countUnmatched(word1: string, word2: string): number`

```typescript
const unmatched = countUnmatched("محمد", "محمود");
console.log(unmatched); // Output: 1
```

## Testing

To run the tests, run:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.