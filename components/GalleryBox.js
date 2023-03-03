import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import StickyBox from "react-sticky-box";
import ModalImage from "react-modal-image";

import styles from './../styles/components/GalleryBox.module.css'

export const GalleryBox = ({ categories, galleries }) => {

    const [activeItem, setActiveItem] = useState('All');
    const [showItems, setShowItems] = useState(galleries);

    const handleClick = (item) => {

        if (item === 'All') {
            setShowItems(galleries);
            setActiveItem(item);
        } else {
            setActiveItem(item.name);
            setShowItems(item.galleries?.filter(item => item.status !== 'draft'));
        }
    }

    return (
        <div>
            {galleries.length === 0 && <h3>No galleries are published yet.</h3>}
            {galleries.length > 0 && (
                <div className='row'>
                    <div className='col-md-3'>
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div className={styles.filter}>
                                <h5>Filter...</h5>
                                <ul className='list-unstyled'>
                                    <li className={`item ${activeItem === 'All' ? styles.active : ''}`} onClick={() => handleClick('All')}>All</li>
                                    {categories.map(item =>
                                        item.galleries.filter(item => item.status !== 'draft').length > 0 && (
                                            <li className={`item ${activeItem === item.name ? styles.active : ''}`} key={item._id} onClick={() => handleClick(item)}>{item.name}</li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </StickyBox>
                    </div>
                    <div className='col-md-9'>
                        <Masonry
                            breakpointCols={2}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">
                            {showItems.length > 0 ? (showItems?.map(gallery => (
                                <div key={gallery._id} className={styles.imgBlock}>
                                    <ModalImage
                                        small={gallery.image}
                                        large={gallery.image}
                                        alt={gallery.title}
                                    />
                                    <figcaption>
                                        <p>{gallery.title}</p>
                                    </figcaption>
                                </div>
                            ))) : (<div className='no-result galleries'>No galleries are published in this category.</div>)}
                        </Masonry>
                    </div>
                </div>
            )}

        </div>
    )
}