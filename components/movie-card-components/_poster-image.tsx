import PropTypes from "prop-types";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { SkeletonComponent, LoadingContexnt } from "..";

import { usePosterStyles as useStyles } from "../ui/styles";

interface PosterImageProps {
    poster_path: string;
    title: string;
    size?: posterImageSize;
}

const PosterImage: React.FC<PosterImageProps> = ({
    title = "",
    poster_path = "",
    size = "w92",
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [imageId, setImageId] = useState(poster_path);
    const isLoading = useContext(LoadingContexnt);

    const styles = useStyles()();

    useEffect(() => {
        setIsImageLoaded(!isLoading);
        setImageId(isLoading ? "" : poster_path);
    }, [isLoading, poster_path]);

    const handleImageLoaded = () => setIsImageLoaded(true);

    return (
        <div className={styles.root}>
            {imageId && (
                <Image
                    src={`/images/${size}${imageId}`}
                    alt={title}
                    width={92}
                    height={138}
                    className={styles.borderRadius}
                    onLoad={handleImageLoaded}
                />
            )}
            {!isImageLoaded ? (
                <SkeletonComponent
                    animation="wave"
                    className={styles.overlay}
                />
            ) : (
                <span className={styles.overlay} />
            )}
        </div>
    );
};

PosterImage.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["w92", "w154", "w185", "w342", "w500", "w780"]),
};

export default PosterImage;
