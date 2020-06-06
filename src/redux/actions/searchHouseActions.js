import { GATHER_SEARCH_HOUSE_INFO } from "./types";

export const gatherSearchHouseInfo = searchHouseInfo => {
    return {
        type: GATHER_SEARCH_HOUSE_INFO,
        payload: searchHouseInfo
    }
}