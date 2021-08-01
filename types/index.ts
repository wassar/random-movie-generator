declare global {
    interface genreProps {
        name: string;
        id: number;
    }

    interface castProps {
        id: number;
        adult: boolean;
        gender: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path?: string | null | undefined;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
    }

    interface crewProps {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string | null;
        credit_id: string;
        department: string;
        job: string;
    }

    interface countryProps {
        iso_3166_1: string;
        name: string;
    }

    interface productionCompanyProps {
        id: number;
        name: string;
        logo_path?: string | null;
        origin_country?: string | null;
    }

    interface videosResultProps {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: number;
        type: string;
    }

    interface videosProps {
        results: videosResultProps[];
    }

    interface castsProps {
        cast: castProps[];
        crew?: crewProps[];
    }

    interface similarProps {
        page: number;
        results: any[];
        total_pages: number;
        total_results: number;
    }

    interface movieProps {
        adult: boolean;
        backdrop_path: string;
        belongs_to_collection: any;
        budget: number;
        genres: genreProps[];
        homepage: string;
        id: number;
        imdb_id: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        production_companies: productionCompanyProps[];
        production_countries: countryProps[];
        release_date: string;
        revenue: number;
        runtime: number;
        spoken_languages: any[];
        status: string;
        tagline: string;
        title: string;
        videos?: videosProps;
        vote_average: number;
        vote_count: number;
        casts?: castsProps[];
        similar?: similarProps;
    }

    type posterImageSize = "w92" | "w154" | "w185" | "w342" | "w500" | "w780";

    interface serverResponse {
        success: boolean;
        data?: movieProps;
        error_message?: string;
    }

    interface apiResponse {
        status: number;
        data?: any;
        error?: string;
    }
}

export {};
