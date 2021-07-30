import { Api } from "../../core";
import { NextApiRequest, NextApiResponse } from "next";
const randomMovieController = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const movie = await Api.getRandomMovie();
    const timeout = () => new Promise((resolve) => setTimeout(resolve, 10));
    await timeout();
    res.json({
        success: true,
        movie,
    });
};

export default randomMovieController;
