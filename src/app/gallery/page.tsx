'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the props interface for ImageBlock
interface ImageBlockProps {
  bgImage: string;
}

// Styled components
const GalleryContainer = styled.div`
  padding: 50px 20px;
  background-color: #cad9e4; /* Soft blue-gray background */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the left */
  max-width: 1200px;
  margin: 0 auto;
  width: calc(100% - 40px); /* Account for 20px padding on each side */
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 30px 10px; /* Reduce padding on smaller screens */
    width: calc(100% - 20px); /* Adjust for smaller padding */
  }
`;

const GalleryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #292a2d; /* Black text */
  background-color: #fddeb4; /* Tinted yellow background */
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
  gap: 15px; /* Spacing between blocks */
  width: 100%; /* Full width of the parent */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
`;

const ImageBlock = styled.div<ImageBlockProps>`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 200px; /* Consistent height */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer; /* Indicate the image is clickable */
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02); /* Slight scale effect on hover */
  }
  &:focus {
    outline: 2px solid #fddeb4; /* Add focus outline for accessibility */
  }
`;

// Modal styles for fullscreen image
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Slightly darker background for better contrast */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it appears above other content */
  margin: 0; /* Remove any default margins */
  padding: 0; /* Remove any padding */
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Add some padding to ensure the image doesn't touch the edges */
  box-sizing: border-box;
`;

const FullscreenImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto; /* Allow the image to scale naturally */
  height: auto; /* Allow the image to scale naturally */
  object-fit: contain; /* Ensure the entire image is visible */
  border-radius: 8px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #fddeb4; /* Tinted yellow background */
  color: #292a2d; /* Black text */
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #e6c79c; /* Slightly darker yellow on hover */
  }
  &:focus {
    outline: 2px solid #292a2d; /* Add focus outline for accessibility */
  }
`;

export default function Gallery() {
  // State to track the currently selected image for fullscreen view
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Generate image paths for IMG1.jpeg to IMG56.jpeg
  const images = Array.from({ length: 56 }, (_, i) => `/gallery/IMG${i + 1}.jpeg`);

  // Function to open the modal with the selected image
  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, image: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(image);
    }
  };

  // Handle keyboard events for closing the modal
  const handleModalKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Prevent body scrolling when the modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <GalleryContainer>
      <GalleryTitle className="font-heading">Gallery</GalleryTitle>
      <GridContainer>
        {images.map((image, index) => (
          <ImageBlock
            key={index}
            bgImage={image}
            onClick={() => openModal(image)}
            onKeyDown={(e) => handleKeyDown(e, image)}
            tabIndex={0} /* Make the image focusable */
            role="button" /* Indicate it's interactive */
            aria-label={`Open image ${index + 1} in fullscreen`}
          />
        ))}
      </GridContainer>

      {/* Modal for fullscreen image */}
      {selectedImage && (
        <ModalOverlay onClick={closeModal} onKeyDown={handleModalKeyDown} tabIndex={0}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <FullscreenImage src={selectedImage} alt={`Fullscreen image ${images.indexOf(selectedImage) + 1}`} />
            <CloseButton onClick={closeModal} aria-label="Close fullscreen image">×</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </GalleryContainer>
  );
}