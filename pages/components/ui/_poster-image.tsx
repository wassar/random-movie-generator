import Image from "next/image";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import SkeletonComponent from "./_skeleton";

const useStyles = () =>
    makeStyles((theme) => ({
        borderRadius: {
            borderRadius: theme.spacing(1),
        },
        root: {
            position: "relative",
            borderRadius: theme.spacing(1),
            overflow: "hidden",
            minHeight: 87,
        },
        overlay: {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: "none",
        },
    }));

interface PosterImageProps {
    poster_path: string;
    title: string;
    size: string;
    isLoading?: boolean;
}

const PosterImage: React.FC<PosterImageProps> = ({
    title,
    poster_path,
    size = "w92",
    isLoading,
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [imageId, setImageId] = useState(poster_path);

    const styles = useStyles()();
    useEffect(() => {
        setIsImageLoaded(!isLoading);
        setImageId(isLoading ? "" : poster_path);
    }, [isLoading, poster_path]);

    const handleImageLoaded = () => {
        setIsImageLoaded(true);
    };

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
            {!isImageLoaded && isLoading ? (
                <SkeletonComponent
                    className={styles.overlay}
                    animation="wave"
                />
            ) : (
                <span className={styles.overlay} />
            )}
        </div>
    );
};

export default PosterImage;
