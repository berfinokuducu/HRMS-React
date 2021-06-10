import axios from "axios"

export default class JobAdvertisementService{
    getAllActiveJobAdvertisement(){
        return axios.get("http://localhost:4000/api/jobAdvertisements/getAllActiveJobAdvertisement");
    }
    getAllByOrderByCreatedDateDesc(){
        return axios.get("http://localhost:4000/api/jobAdvertisements/getAllByOrderByCreatedDateDesc");
    }
}