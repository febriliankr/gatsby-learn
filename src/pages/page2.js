import React from 'react'
import {navigate} from 'gatsby'
import PrimaryLayout from '../layout/PrimaryLayout'

function page2() {
    return (
        <div>
            <PrimaryLayout>
            <h1>Next Gatsby Page</h1>
            <img onClick={() => navigate("/")} src="https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/wb-883316828380-Full-Image_GalleryBackground-en-US-1484000599070._SX1080_.jpg" width="700" alt="gatsby"/>
            </PrimaryLayout>
        </div>
    )
}

export default page2;
