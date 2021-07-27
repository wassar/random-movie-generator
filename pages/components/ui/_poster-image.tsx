import { Box, makeStyles } from "@material-ui/core";
import Image from "next/image";

const useStyles = () =>
    makeStyles((theme) => ({
        borderRadius: {
            borderRadius: theme.spacing(1),
        },
    }));

interface PosterImageProps {
    poster_path: string;
    title: string;
    size: string;
}

const PosterImage: React.FC<PosterImageProps> = ({
    title,
    poster_path,
    size = "w92",
}) => {
    const styles = useStyles()();
    return (
        <Box
            position="relative"
            className={styles.borderRadius}
            overflow="hidden"
        >
            <Image
                src={`/images/${size}${poster_path}`}
                alt={title}
                width={92}
                height={138}
                className={styles.borderRadius}
            />
            <Box
                position="absolute"
                top="0"
                bottom="0"
                left={0}
                right={0}
                component="span"
            />
        </Box>
    );
};

export default PosterImage;
