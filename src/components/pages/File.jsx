import React, { useEffect, useState } from "react";
import './File.css'; // Import the CSS file
export const File = () => {
  const [selectedFileContent, setSelectedFileContent] = useState(null); // State to store the text content of the selected file
	const [language, setLanguage] = useState("English"); // State to manage selected language
	const [currentLineIndex, setCurrentLineIndex] = useState(0); // State to keep track of the currently displayed line index
	const [startIndex, setStartIndex] = useState(0); // State to keep track of the start index of the words displayed in Box 2

	// Function to handle file selection
	const handleFileChange = (event) => {
		const file = event.target.files[0]; // Get the selected file
		const reader = new FileReader();

		reader.onload = (e) => {
			const fileContent = e.target.result; // Get the text content of the selected file
			const lines = fileContent.split("\n"); // Split the text content into lines
			setSelectedFileContent(lines); // Update state with the array of lines
			setCurrentLineIndex(0); // Reset the line index
			setStartIndex(0); // Reset the start index
		};

		reader.readAsText(file); // Read the content of the selected file as text
	};

  return (
    
          <div className="file-upload-container">
				<label htmlFor="file">Select File :</label>
				<input type="file" id="file" onChange={handleFileChange} />
			</div>
  );
};