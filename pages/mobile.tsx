import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Api } from "../core";

import { Button } from "@material-ui/core";
import { RefreshRounded as RefershIcon } from "@material-ui/icons";

import { ReloadingIcon, MovieCard, LoadingContexnt } from "../components";

const MobileMovieCard: React.FC<MoviePageProps> = ({ initialMovie }) => {
    const [movie, setMovie] = useState(initialMovie);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // fetch the database for new movie
    const handleMovieRefresh = async () => {
        /**
         * ctatch and set api erros
         * @param error {AxiosError}
         */
        const handleResponseError = (error: AxiosError) => {
            if (error.response?.data.error_message)
                setError(error.response?.data.error_message);
            else setError("Internal Server Error");
        };

        setIsLoading(true);
        axios
            .get("/api/random-movie")
            .then(({ data }) => setMovie(data.movie))
            .then(() => setIsLoading(false))
            .catch(handleResponseError);
    };

    return (
        <>
            <LoadingContexnt.Provider value={isLoading}>
                <MovieCard {...movie} />
            </LoadingContexnt.Provider>
            <Button
                onClick={handleMovieRefresh}
                color="primary"
                variant="contained"
                size="large"
                disabled={isLoading}
                startIcon={isLoading ? <ReloadingIcon /> : <RefershIcon />}
            >
                Refresh
            </Button>
        </>
    );
};

interface MoviePageProps {
    initialMovie: movieProps;
}

export const getStaticProps = async () => {
    const initialMovie = await Api.getRandomMovie();
    return {
        props: { initialMovie },
    };
};

export default MobileMovieCard;
