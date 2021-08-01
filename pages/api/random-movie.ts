import { Api } from "../../core";
import { NextApiRequest, NextApiResponse } from "next";

const randomMovieController = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        const response: apiResponse = await Api.getRandomMovie();

        if (response.status !== 200 && response.error) throw response;

        return res.json({
            success: true,
            movie: response.data,
        });
    } catch (error) {
        return res.status(error.status || 500).json({
            success: false,
            error_message: error.error,
        });
    }
};

export default randomMovieController;
