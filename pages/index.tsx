import { Api } from "../core";
import MoviePage from "../components/pages/movie-page";

const HomePage: React.FC<{ movie: movieProps }> = ({ movie }) => {
    return <MoviePage initialMovie={movie} />;
};

export const getStaticProps = async () => {
    const movie = await Api.getRandomMovie();
    return {
        props: { movie },
    };
};

export default HomePage;
