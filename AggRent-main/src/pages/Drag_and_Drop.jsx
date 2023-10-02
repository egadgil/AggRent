import React, { useState } from 'react';
import './ImageDragAndDrop.css';

const ImageDragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles.length > 0) {
      const file = droppedFiles[0];

      if (file.type.startsWith('image/')) {
        const imageURL = URL.createObjectURL(file);
        setImage(imageURL);
      } else {
        alert('Please drop a valid image file.');
      }
    }
  };

  const handleSubmit = () => {
    // Add your submission logic here
    alert('Submitting the image...');
    // Set submitted to true to show the image
    setSubmitted(true);
  };

  return (
    <div
      className={`image-dropzone ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {submitted ? (
        <img
          src="https://i.imgur.com/6yWmXFP.png" // Replace with your image URL
          alt="Submitted"
          className="image-preview"
        />
      ) : image ? (
        <img src={image} alt="Dropped" className="image-preview" />
      ) : (
        <p className="text">
          {dragging ? (
            // Displayed when a file is being dragged over the drop zone
            'Drop an image here: This area can be used to predict the price of machinery'
          ) : (
            // Displayed when no file is being dragged over the drop zone
            'Drag an image here: Use AggAi to determine the cost of your machinery'
          )}
        </p>
      )}
      <div className="drag-button">
        {!submitted && (
          <button onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageDragAndDrop;
