// Split Log into text messages of max length 140
function splitTextIntoChunks(input, maxLength = 140) {
    let result = [];
    let position = 0;

    while (position < input.length) {
        let chunk = input.substring(position, position + maxLength);
        let lastSpaceIndex = chunk.lastIndexOf(' ');

        if (lastSpaceIndex !== -1 && lastSpaceIndex !== maxLength) {
            result.push(chunk.substring(0, lastSpaceIndex));
            position += lastSpaceIndex + 1;
        } else {
            result.push(chunk.trim());
            position += maxLength;
        }
    }

    return result;
}


  // Example usage with placeholders
  const fullMessage =
    "Whatifawriterornovelistdecidedtowritea300-pagebookwithnobreaksinthetextfornew ideas, new chapters, or even character dialogue? It would be so overwhelming that the reader would probably take one look and close the book forever. When writing is divided up into manageable parts that are cohesive, it's much easier for the reader to take in and process. A paragraph is a distinct segment of writing, often includes more than one sentence, and is separated from other paragraphs and text by a space. END";
  const fullMessage2 =
    "What if a writer or novelist decided to write a 300-page book with no breaks in the text for new ideas, new chapters, or even character dialogue? It would be so overwhelming that the reader would probably take one look and close the book forever. Whatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornew When writing is divided up into manageable parts that are cohesive, it's much easier for the reader to take in and process. A paragraph is a distinct segment of writing, often includes more than one sentence, and is separated from other paragraphs and text by a space.  END";
  const fullMessage3 =
    "Whatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksint a Whatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksint What if a writer or novelist decided to write a 300-page book with no breaks in the text for new ideas, new chapters, or even character dialogue? It would be so overwhelming that the reader would probably take one look and close the book forever. Whatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornewWhatifawriterornovelistdecidedtowritea300pagebookwithnobreaksinthetextfornew When writing is divided up into manageable parts that are cohesive, it's much easier for the reader to take in and process. A paragraph is a distinct segment of writing, often includes more than one sentence, and is separated from other paragraphs and text by a space.  END";
  
  // Call the function with a sample log content
  const res = splitLogIntoTexts(fullMessage4);
  
  // Check text messages
  res.forEach((a) => {
    console.log(a.length, a)
  });


  