const UniqueInt = require('./UniqueInt');
const uniqueIntProcessor = new UniqueInt();

// Provide correct paths for your input and output files
const inputFilePath = 'C:/Users/hp/Desktop/Dsa_hw01/code/src/sample_inputs/sample_02.txt';
const outputFilePath = 'C:/Users/hp/Desktop/Dsa_hw01/code/src/sample_results/sample_02.txt_result';

uniqueIntProcessor.processFile(inputFilePath, outputFilePath);
