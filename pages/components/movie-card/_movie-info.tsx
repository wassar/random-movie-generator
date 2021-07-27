import { Breadcrumbs, Typography } from "@material-ui/core";
import LanguageFlag from "../ui/_language-flag";
import MovieRating from "../ui/_rating";

export interface MovieInfoProps {
    runtime: number;
    release_date: string;
    original_language: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({
    release_date,
    runtime,
    original_language,
}) => {
    return (
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
                <Typography variant="subtitle1">{runtime} min</Typography>
            )}
        </Breadcrumbs>
    );
};

export default MovieInfo;
