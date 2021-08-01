import { Api } from "../core";
import { RandomMoviePage } from "../components";

const HomePage: React.FC<{ response: serverResponse }> = ({ response }) => {
    return <RandomMoviePage serverProps={response} />;
};

export const getStaticProps = async () => {
    const response = await Api.getRandomMovie();

    return {
        props: {
            response,
        },
    };
};

export default HomePage;
