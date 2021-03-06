import PropTypes from "prop-types";
import { useContext } from "react";
import { Breadcrumbs, Typography } from "@material-ui/core";

import { SkeletonComponent, LoadingContexnt, LanguageFlag } from "..";

export interface MovieInfoProps {
    runtime?: number;
    release_date?: string;
    original_language?: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
    release_date,
    runtime,
    original_language,
}) => {
    const isLoading = useContext(LoadingContexnt);

    return (
        <>
            {isLoading ? (
                <SkeletonComponent animation="wave" />
            ) : (
                <Breadcrumbs separator="&middot;">
                    {original_language && (
                        <LanguageFlag original_language={original_language} />
                    )}

                    {release_date && (
                        <Typography variant="subtitle1">
                            {new Date(release_date).getUTCFullYear()}
                        </Typography>
                    )}
                    {runtime && (
                        <Typography variant="subtitle1">
                            {runtime} min
                        </Typography>
                    )}
                </Breadcrumbs>
            )}
        </>
    );
};

MovieInfo.propTypes = {
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    original_language: PropTypes.string,
};

export default MovieInfo;
