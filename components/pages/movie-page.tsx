import Head from "next/head";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

import SwipableCard from "react-tinder-card";
import { Button } from "@material-ui/core";
import { RefreshRounded as RefershIcon } from "@material-ui/icons";

import { ReloadingIcon, MovieCard, LoadingContexnt, Error } from "..";

import { useStyles } from "./styles";

const MobileMovieCard: React.FC<{ serverProps: serverResponse }> = ({
    serverProps,
}) => {
    //
    const [movie, setMovie] = useState<movieProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const styles = useStyles()();

    useEffect(() => {
        if (serverProps.data) setMovie(serverProps.data);
        else if (serverProps.error_message) setError(serverProps.error_message);
    }, [serverProps]);

    // fetch the api for a new movie
    const handleMovieRefresh = () => {
        /**
         * response error handler
         * @param error {AxiosError}
         */
        const handleResponseError = (error: AxiosError) => {
            setMovie(null);
            setIsLoading(false);
            if (error.response?.data.error)
                setError(error.response?.data.error_message);
            else setError("Internal Server Error");
        };

        //reset states
        setError("");
        setIsLoading(true);
        setMovie((prev) =>
            prev ? { ...prev, id: 12, backdrop_path: "" } : prev
        );

        axios
            .get("/api/random-movie")
            .then(({ data }) => setMovie(data.movie))
            .then(() => setIsLoading(false))
            .catch(handleResponseError);
    };

    return (
        <>
            <Head>
                <title>
                    {error ? error : `What about watching ${movie?.title}?`}
                </title>
            </Head>
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    {error && <Error error={error} />}
                    {movie && !error && (
                        <>
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
                                        isLoading ? (
                                            <ReloadingIcon />
                                        ) : (
                                            <RefershIcon />
                                        )
                                    }
                                >
                                    Next Movie
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default MobileMovieCard;
