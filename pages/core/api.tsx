import axios from "axios";

class Api {
    private api_key: string = "";
    apiUri: string = "https://api.themoviedb.org/3/movie";

    constructor(api_key?: string) {
        if (api_key) this.api_key = api_key;
    }
}

export default new Api(process.env.API_KEY);
