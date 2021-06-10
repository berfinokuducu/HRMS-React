import axios from "axios"

export default class EmployerService{

    getEmployers(){
        return axios.get("http://localhost:4000/api/employers/getAll");
    }
}