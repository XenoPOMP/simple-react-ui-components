import React, {FC, useState} from 'react';
// @ts-ignore
import styles from './Gallery.module.scss';
import {
    ChevronBack,
    ChevronForward
} from 'react-ionicons';

interface props {
    imageList : Array<string>
    cssProperties? : React.CSSProperties
}

const Gallery : FC<props> =
    (
        {
            imageList,
            cssProperties
        }
    ) => {
    const [imageNumber, setImageNumber] = useState(1);

    const getWrapperMove = () => {
        const fullMove = parseInt(`${imageNumber - 1}00`);
        const partMove = fullMove / imageList.length;

        return `-${partMove}%`;
    }

    const isFirst = () => imageNumber === 1;
    const isLast = () => imageNumber === (imageList.length);

    const imageArray = imageList.map((e, index) =>
        <div className={styles.box}>
            <img src={imageList[index]} />
        </div>
    );

    const dotControlArray = imageList.map((e, index) =>
        <div
            className={`${styles.control} ${(imageNumber === (index + 1)) ? styles.active : ''}`}
            onClick={() => setImageNumber(index + 1)}
        ></div>
    );

    return (
        <div
            className={styles.body}
            style={cssProperties}
        >
            <div
                className={styles.wrapper}
                style={{
                    width: `${imageList.length}00%`,
                    transform: `translateX(${(imageNumber === 1) ? 0 : getWrapperMove()})`
                }}
            >
                {imageArray}
            </div>

            <div className={styles.overlay}>
                <div
                    className={styles.leftControl}
                    style={{display: (isFirst()) ? 'none' : 'flex'}}
                    onClick={() => setImageNumber(imageNumber - 1)}
                >
                    <ChevronBack
                        color={'#FFF'}
                        height="25px"
                        width="25px"
                    />
                </div>

                <div className={styles.mobileLeftControl}
                     style={{display: (isFirst()) ? 'none' : 'flex'}}
                     onClick={() => setImageNumber(imageNumber - 1)}></div>

                <div className={styles.mobileRightControl}
                     style={{display: (isLast()) ? 'none' : 'flex'}}
                     onClick={() => setImageNumber(imageNumber + 1)}></div>

                <div
                    className={styles.rightControl}
                    style={{display: (isLast()) ? 'none' : 'flex'}}
                    onClick={() => setImageNumber(imageNumber + 1)}
                >
                    <ChevronForward
                        color={'#FFF'}
                        height="25px"
                        width="25px"
                    />
                </div>

                <div className={styles.bottomControl}>
                    {dotControlArray}
                </div>
            </div>
        </div>
    );
};

export default Gallery;