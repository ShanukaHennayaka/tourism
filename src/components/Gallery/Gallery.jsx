import React from 'react'
import Lightroom from 'yet-another-react-lightbox'
import GalleryImg1 from "../../assets/images/gallery/g1.webp"
import GalleryImg3 from "../../assets/images/gallery/g3.webp"
import GalleryImg4 from "../../assets/images/gallery/g4.jpg"
import GalleryImg6 from "../../assets/images/gallery/g6.jpg"
import GalleryImg7 from "../../assets/images/gallery/g7.jpg"


const Gallery = () => {

    var images = [
        {
            src: GalleryImg1,
            desc: "",
            sub: ""
        },
        {
            src: GalleryImg3,
            desc: "",
            sub: ""
        },
        {
            src: GalleryImg6,
            sub: ""
        },
        {
            src: GalleryImg4,
            desc: "",
            sub: ""
        },
        {
            src: GalleryImg7,
            sub: ""
        },
        {
            src: GalleryImg6,
            desc: "",
            sub: ""
        },
    ];

    var settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom:false,
    };
    return (
        <Lightroom images={images} settings={settings} />
   );
}

export default Gallery;