import axios, { AxiosResponse } from "axios";

class Api {
    private params = {};
    api: string = "https://api.themoviedb.org/3/movie";

    constructor(api_key?: string) {
        if (api_key) this.params = { api_key };
    }

    private generateRandomId(): number {
        return Math.floor(Math.random() * 1000) + 1;
    }

    async getMovieById(id: number): Promise<AxiosResponse> {
        const { params, api } = this;
        return await axios.get(`${api}/${id}`, {
            params,
        });
    }

    async getRandomMovie(): Promise<apiResponse> {
        let response: apiResponse;
        try {
            const movieId = this.generateRandomId();
            const { data, status } = await this.getMovieById(movieId);
            response = {
                status,
                data,
            };
        } catch (e) {
            // check if its a 404
            // and regen a new movie
            if (e.response.status === 404) return await this.getRandomMovie();
            // else return the error
            else
                response = {
                    status: e.response.status,
                    error:
                        e.response?.data.error_message ||
                        "Internal Server Error",
                };
        }
        return response;
    }
}

export default new Api(process.env.API_KEY);
