import axios from "axios"
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";

// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

// 752dba902a872f6001e92845f040516c

// const BASE_URL = "https://api.themoviedb.org/3/";
// const API_KEY_PARAM = "?api_key=752dba902a872f6001e92845f040516c";

export class TVShowAPI {
    static async fetchPopulars() {
    //    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM }`);
    //    console.log(response.data.results);
    //    return response.data.results;
    return FAKE_POPULARS;

    }

    static async fetchRecommendations(tvShowId) {
           const response = await axios.get(
            `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM }`
            );
           console.log(response.data.results);
           return response.data.results;

        // return FAKE_RECOMMENDATIONS;
        
    
        }
}