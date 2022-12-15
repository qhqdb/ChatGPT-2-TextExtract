// Import the Tesseract library
const Tesseract = require('tesseract.js');

// Create a function that will handle the OCR process
function extractText(image) {
  // Use Tesseract to process the image
  Tesseract.recognize(image)
    .then(result => {
      // Print the extracted text to the console
      console.log(result.text);
    });
}

// Create a file input element in the HTML
<input type="file" onChange={event => extractText(event.target.files[0])} />
