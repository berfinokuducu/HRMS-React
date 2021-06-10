import axios from "axios"

export default class JobSeekerService{
    getAllJobSeeker(){
        return axios.get("http://localhost:4000/api/jobSeekers/getall");
    }
}