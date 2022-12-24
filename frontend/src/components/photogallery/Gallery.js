import React from 'react'
import GalleryIns from './GalleryIns'


function Gallery() {
    const imageUrls =[
        "https://kanishkalakmina.github.io/visitsl/1.jpg",
        "https://kanishkalakmina.github.io/visitsl/2.jpg",
        "https://kanishkalakmina.github.io/visitsl/3.jpg",
        "https://kanishkalakmina.github.io/visitsl/4.jpg",
        "https://kanishkalakmina.github.io/visitsl/5.jpg",
        "https://kanishkalakmina.github.io/visitsl/6.jpg",
        "https://kanishkalakmina.github.io/visitsl/18.jpg",
        "https://kanishkalakmina.github.io/visitsl/7.jpg",
        "https://kanishkalakmina.github.io/visitsl/8.jpg",
        "https://kanishkalakmina.github.io/visitsl/9.jpg",
        "https://kanishkalakmina.github.io/visitsl/10.jpg",
        "https://kanishkalakmina.github.io/visitsl/11.jpg",
        "https://kanishkalakmina.github.io/visitsl/12.jpg",
        "https://kanishkalakmina.github.io/visitsl/13.jpg",
        "https://kanishkalakmina.github.io/visitsl/14.jpg",
        "https://kanishkalakmina.github.io/visitsl/15.jpg",
        "https://kanishkalakmina.github.io/visitsl/16.jpg",
        "https://kanishkalakmina.github.io/visitsl/7.jpg",
       
        
        
    ]
  return (
    <div>
        <GalleryIns imageUrls={imageUrls} columnCount='3' gap='10'></GalleryIns>
    </div>
  )
}

export default Gallery