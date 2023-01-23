import React from 'react'
import Masonry from 'react-masonry-css'
import StickyBox from "react-sticky-box";
import ModalImage from "react-modal-image";

import styles from './../styles/components/GalleryBox.module.css'

export const GalleryBlock = () => {
    return (
        <div className={styles.imgBlock}>
            <img src='/images/skills/01.jpg' className='img-fluid' />
            <figcaption>
                <h2>AWS Security</h2>
                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                <a href="#">View more</a>
            </figcaption>
        </div>
    )
}

export const GalleryBox = ({ categories }) => {

    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>
                    <StickyBox offsetTop={20} offsetBottom={20}>
                        <div className={styles.filter}>
                            <h5>Filter...</h5>
                            <ul className='list-unstyled'>
                                <li className={styles.active}>All</li>
                                {categories?.map(item => (
                                    <li key={item._id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    </StickyBox>
                </div>
                <div className='col-md-9'>
                    <Masonry
                        breakpointCols={2}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/01.jpg'}
                                large={'/images/skills/01.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/02.jpg'}
                                large={'/images/skills/02.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/03.jpg'}
                                large={'/images/skills/03.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/04.jpg'}
                                large={'/images/skills/04.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/05.jpg'}
                                large={'/images/skills/05.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/06.jpg'}
                                large={'/images/skills/06.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/01.jpg'}
                                large={'/images/skills/01.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/02.jpg'}
                                large={'/images/skills/02.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/03.jpg'}
                                large={'/images/skills/03.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/04.jpg'}
                                large={'/images/skills/04.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/05.jpg'}
                                large={'/images/skills/05.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                        <div className={styles.imgBlock}>
                            <ModalImage
                                small={'/images/skills/06.jpg'}
                                large={'/images/skills/06.jpg'}
                                alt="Milo went to the woods. He took a fun ride and never came back."
                            />
                            <figcaption>
                                <p>Milo went to the woods. He took a fun ride and never came back.</p>
                            </figcaption>
                        </div>
                    </Masonry>
                </div>
            </div>

        </div>
    )
}