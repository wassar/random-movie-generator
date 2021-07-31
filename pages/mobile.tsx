import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { Api } from "../core";

import SwipableCard from "react-tinder-card";
import { Button, makeStyles } from "@material-ui/core";
import { RefreshRounded as RefershIcon } from "@material-ui/icons";

import { ReloadingIcon, MovieCard, LoadingContexnt } from "../components";

const useStyles = () =>
    makeStyles((theme) => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        },
        wrapper: {
            width: "100%",
        },
        buttonContainer: {
            display: "none",
            textAlign: "center",
            marginTop: 40,
            [theme.breakpoints.up("small")]: {
                display: "block",
            },
        },
    }));

interface MoviePageProps {
    initialMovie: movieProps;
}

const MobileMovieCard: React.FC<MoviePageProps> = ({ initialMovie }) => {
    //
    const [movie, setMovie] = useState(initialMovie);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const styles = useStyles()();

    // fetch the api for a new movie
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
        setMovie((prev) => ({ ...prev, id: 12, backdrop_path: "" }));
        axios
            .get("/api/random-movie")
            .then(({ data }) => setMovie(data.movie))
            .then(() => setIsLoading(false))
            .catch(handleResponseError);
    };

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <SwipableCard
                    key={movie.id}
                    onCardLeftScreen={handleMovieRefresh}
                    preventSwipe={["bottom"]}
                >
                    <LoadingContexnt.Provider value={isLoading}>
                        <MovieCard {...movie} />
                    </LoadingContexnt.Provider>
                </SwipableCard>

                <div className={styles.buttonContainer}>
                    <Button
                        onClick={handleMovieRefresh}
                        color="primary"
                        variant="contained"
                        size="large"
                        disabled={isLoading}
                        startIcon={
                            isLoading ? <ReloadingIcon /> : <RefershIcon />
                        }
                    >
                        Next Movie
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const initialMovie = await Api.getRandomMovie();
    return {
        props: { initialMovie },
    };
};

export default MobileMovieCard;
