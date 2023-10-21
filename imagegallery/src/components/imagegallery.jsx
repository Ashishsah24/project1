import React from 'react';
import '../css/Imagegallery.css';

function ImageGallery() {
    return (
        <div>
            <div className='image-gallery'>
                <div className='image'>
                    <span><img src="fwdbtn.jpeg" alt="Forward Button" id="nextbtn" /></span>
                    <span><img src="img1.png" alt="Image 1" id="img1" /></span>
                    <span><img src="img2.png" alt="Image 2" id="img2" /></span>
                    <span><img src="img3.png" alt="Image 3" id="img3" /></span>
                    <span><img src="img4.png" alt="Image 4" id="img4" /></span>
                    <span><img src="img5.png" alt="Image 5" id="img5" /></span>
                    <span><img src="img6.png" alt="Image 6" id="img6" /></span>
                    <span><img src="backwd.jpeg" alt="Backward Button" id="backbtn" /></span>
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;