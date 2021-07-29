import PropTypes from "prop-types";
import { Breadcrumbs } from "@material-ui/core";

interface MovieGenresProps {
    genres: genreProps[];
}

const MovieGenres: React.FC<MovieGenresProps> = ({ genres }) => {
    return (
        <>
            {genres.length > 0 && (
                <Breadcrumbs>
                    {genres.map(({ name, id }) => (
                        <span key={id}>{name}</span>
                    ))}
                </Breadcrumbs>
            )}
        </>
    );
};

MovieGenres.propTypes = {
    genres: PropTypes.array.isRequired,
};

export default MovieGenres;
