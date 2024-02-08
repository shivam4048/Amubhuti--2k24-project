import React, { useState } from 'react';
import Navbar from './Navbar';
import Modal from 'react-modal';
import './Gallery.css';
import Footer from './Footer';

const images = [
  "/Images/Gallery/1.jpg",
  "/Images/Gallery/2.jpg",
  "/Images/Gallery/3.jpg",
  "/Images/Gallery/4.jpg",
  "/Images/Gallery/5.jpg",
  "/Images/Gallery/6.jpg",
  "/Images/Gallery/7.jpg",
  "/Images/Gallery/8.jpg",
  "/Images/Gallery/9.jpg",
  "/Images/Gallery/10.jpg",
  "/Images/Gallery/11.jpg",
  "/Images/Gallery/13.jpg",
  "/Images/Gallery/14.jpg",
  "/Images/Gallery/15.jpg",
  "/Images/Gallery/16.jpg",
  "/Images/Gallery/17.jpg",
  "/Images/Gallery/18.jpg",
  "/Images/Gallery/19.jpg",
  "/Images/Gallery/20.jpg",
  "/Images/Gallery/21.jpg",
  "/Images/Gallery/22.jpg",
  "/Images/Gallery/23.jpg",
  "/Images/Gallery/24.jpg",
  "/Images/Gallery/25.jpg",
  "/Images/Gallery/26.jpg",
  "/Images/Gallery/27.jpg",
  "/Images/Gallery/28.jpeg",
  "/Images/Gallery/29.jpg",
  "/Images/Gallery/30.jpeg",
  "/Images/Gallery/31.jpeg",
  "/Images/Gallery/32.jpeg",
  "/Images/Gallery/33.jpeg",
  "/Images/Gallery/34.jpeg",
  "/Images/Gallery/35.jpeg",
  "/Images/Gallery/36.jpeg",
  "/Images/Gallery/37.jpeg",
  "/Images/Gallery/38.jpeg",
  "/Images/Gallery/39.jpeg",
  "/Images/Gallery/40.jpeg",
  "/Images/Gallery/41.jpeg",
  "/Images/Gallery/42.jpeg",
  "/Images/Gallery/43.jpeg",
  "/Images/Gallery/44.jpeg",
  "/Images/Gallery/45.jpeg",
  "/Images/Gallery/46.jpg",
  "/Images/Gallery/47.jpg",
  "/Images/Gallery/48.jpg",
  "/Images/Gallery/49.jpg",
  "/Images/Gallery/50.jpg",
  "/Images/Gallery/51.jpg",
  "/Images/Gallery/52.jpg",
  "/Images/Gallery/53.jpg",
  "/Images/Gallery/54.jpg",
  "/Images/Gallery/55.jpg",

  // ... add all other image paths
];

export default function OurTeam() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='body'>
      <Navbar title="Anubhuti" mode='dark' className="navbar" />

      {/* <div className="heading mb-4">
                <h1>Glimpses of Anubhuti</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque modi tenetur eum tempora aperiam saepe excepturi exercitationem voluptatem molestias incidunt?</p>
            </div> */}

      <div className="grid-wrapper mt-2">
        {images.map((image, index) => (
          <div key={index} onClick={() => openModal(image)}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-button" onClick={closeModal}>Close</button>
        {selectedImage && <img className="preview-image" src={selectedImage} alt="Preview" />}
      </Modal>

      <Footer />
    </div>

  );
}
