import PropTypes from "prop-types";
import { useContext } from "react";
import { Breadcrumbs } from "@material-ui/core";

import { SkeletonComponent, LoadingContexnt } from "../";

interface MovieGenresProps {
    genres: genreProps[];
}

const MovieGenres: React.FC<MovieGenresProps> = ({ genres }) => {
    const isLoading = useContext(LoadingContexnt);
    return (
        <>
            {isLoading ? (
                <SkeletonComponent animation="wave" />
            ) : (
                <>
                    {genres.length > 0 && (
                        <Breadcrumbs>
                            {genres.map(({ name, id }) => (
                                <span key={id}>{name}</span>
                            ))}
                        </Breadcrumbs>
                    )}
                </>
            )}
        </>
    );
};

MovieGenres.propTypes = {
    genres: PropTypes.array.isRequired,
};

export default MovieGenres;
