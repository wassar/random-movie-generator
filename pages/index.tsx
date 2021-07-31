import { Api } from "../core";
import { RandomMoviePage } from "../components";

const HomePage: React.FC<{ movie: movieProps }> = ({ movie }) => {
    return <RandomMoviePage initialMovie={movie} />;
};

export const getStaticProps = async () => {
    const movie = await Api.getRandomMovie();
    return {
        props: { movie },
    };
};

export default HomePage;
