import { Api } from "./core";

import MobileCard from "./components/mobile-card";
import { useMediaQuery, useTheme } from "@material-ui/core";

export const getStaticProps = async () => {
    const initialMovie = await Api.getRandomMovie();
    return {
        props: initialMovie,
    };
};

const MobileMovieCard: React.FC<movieProps> = (props) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("small"));

    return (
        <>
            <MobileCard {...props} />
        </>
    );
};

export default MobileMovieCard;
