# Shabeh

✨ **A light-weight Javascript package to calculate the percentage of similarity between two Arabic words.** ✨


## Installation

To install this module, run:

bash npm install shabeh

## Usage

### Importing the Module

typescript import calculateSimilarity from 'shabeh';

#### `calculateSimilarity(word1: string, word2: string): number`

Calculates the percentage similarity between two Arabic words.

typescript const similarity = calculateSimilarity("كلمة", "كلمتة"); console.log(similarity.toFixed(2)); // Output: 66.67%
