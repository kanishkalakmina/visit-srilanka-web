import React from 'react'


export default function GalleryIns(props) {
    console.log(props)
    
  return (
    <div>
    <div style={{columns: props.columnCount, columnGap: 0 }} className='py-10 '>
        {props.imageUrls.map((img,i) =>
        <img src={img} alt='imageGallery' key={i} className="cursor-pointer" style={{padding: props.gap/2}}/>
        )}
        
    </div>
    
    </div>
  )
}

