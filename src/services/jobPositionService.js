import axios from "axios"

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://localhost:4000/api/jobPositions/getall");
    }
}