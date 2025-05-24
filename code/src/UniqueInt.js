const fs = require('fs');
const path = require('path');

class UniqueInt {
  processFile(inputFilePath, outputFilePath) {
    try {
      // Resolve file paths for cross-platform compatibility
      const inputPath = path.resolve(inputFilePath);
      const outputPath = path.resolve(outputFilePath);

      // Read input file
      const inputFileStream = fs.readFileSync(inputPath, 'utf8');
      const uniqueIntegers = new Set();

      // Process each line
      inputFileStream.split('\n').forEach((line) => {
        const trimmedLine = line.trim();
        if (trimmedLine !== '' && !isNaN(parseInt(trimmedLine))) {
          uniqueIntegers.add(parseInt(trimmedLine));
        }
      });

      // Sort unique integers
      const sortedUniqueIntegers = Array.from(uniqueIntegers).sort((a, b) => a - b);

      // Write to output file
      const outputFileContent = sortedUniqueIntegers.join('\n');
      fs.writeFileSync(outputPath, outputFileContent);
      
      // Log success message
      console.log(`File written successfully to ${outputPath}`);
      
      // Print the result to the console
      console.log('Result of unique sorted integers:');
      console.log(sortedUniqueIntegers.join('\n'));

    } catch (error) {
      console.error('Error processing file:', error.message);
    }
  }
}

module.exports = UniqueInt;
