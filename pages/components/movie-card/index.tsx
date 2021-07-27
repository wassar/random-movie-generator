import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MovieCardContainer from "./_card-container";

const movie = {
    adult: false,
    backdrop_path: "/jEmib2xjkgWeSVhqKXKEkHWK14H.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
        {
            id: 35,
            name: "Comedy",
        },
        {
            id: 10749,
            name: "Romance",
        },
    ],
    homepage: "",
    id: 512019,
    imdb_id: "tt6869362",
    original_language: "es",
    original_title: "Gente que viene y bah",
    overview:
        "Bea is a successful architect who lives in Barcelona (Catalonia, northeast to Spain) with her boyfriend and boss, Víctor, a CEO of an important company. During a night celebration of an important contract signed to make a skyscraper designed by Bea, in the bar appears the famous TV reporter and anchorwoman Rebecca Ramos, Victor's personal erotic fantasy. Not measuring the consequences of her actions due to the alcohol she drank, Bea makes a meeting between Víctor and Rebecca. When to the next day she wakes up, Víctor proposes to wed Bea and she accepts, but after she arrives to the job, Bea learns about a videotape where Víctor and Rebecca make the love in a car that it's in all TV channels. In front of all CEOs during a full meeting, Bea slaps Víctor and destroys her design, being fired from the job. Looking for a break, she travels her natal coastal town, Santa Clara, just to discover that her rest isn't so easy as it seems: her eccentric, free-spirited and eternal smiling mother ...",
    popularity: 5.373,
    poster_path: "/nHaZbu9rtmDheImnkKz1kLHM86I.jpg",
    production_companies: [
        {
            id: 78488,
            logo_path: null,
            name: "Zeta Cinema",
            origin_country: "",
        },
        {
            id: 103476,
            logo_path: null,
            name: "Mogambo Films",
            origin_country: "ES",
        },
        {
            id: 11427,
            logo_path: null,
            name: "Instituto de Crédito Oficial (ICO)",
            origin_country: "",
        },
        {
            id: 30258,
            logo_path: null,
            name: "Generalitat de Catalunya - Departament de Cultura",
            origin_country: "",
        },
    ],
    production_countries: [
        {
            iso_3166_1: "ES",
            name: "Spain",
        },
    ],
    release_date: "2019-01-18",
    revenue: 0,
    runtime: 94,
    spoken_languages: [
        {
            english_name: "Spanish",
            iso_639_1: "es",
            name: "Español",
        },
    ],
    status: "Released",
    tagline: "",
    title: "In Family I Trust",
    video: false,
    vote_average: 6.3,
    vote_count: 167,
};

const useStyles = () =>
    makeStyles((theme) => ({
        root: {
            minWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    }));

const MovieCard: React.FC = () => {
    const styles = useStyles()();
    return (
        <div className={styles.root}>
            <div>
                <MovieCardContainer {...movie} />
            </div>
        </div>
    );
};

export default MovieCard;
