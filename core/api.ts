import axios from "axios";

class Api {
    private params = {};
    api: string = "https://api.themoviedb.org/3/movie";

    constructor(api_key?: string) {
        if (api_key) this.params = { api_key };
    }

    private generateRandomId() {
        return Math.floor(Math.random() * 1000) + 1;
    }

    async getMovieById(id: number) {
        const { params, api } = this;
        return await axios.get(`${api}/${id}`, {
            params,
        });
    }

    async getRandomMovie(): Promise<any> {
        try {
            const movieId = this.generateRandomId();
            const { data } = await this.getMovieById(movieId);
            return data;
        } catch (e) {
            console.log("error @getRandomMovie ");
            // check if its a 404
            return await this.getRandomMovie();
        }
    }
}

export default new Api(process.env.API_KEY);
