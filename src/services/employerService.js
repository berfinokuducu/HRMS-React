import axios from "axios"

export default class EmployerService{

    getEmployers(){
        return axios.get("http://localhost:4000/api/employers/getAll");
    }
    register(companyName,email,password,phoneNumber,webAddress,confirmPassword){
        return axios.post("http://localhost:4000/api/employers/add",{companyName,email,password,phoneNumber,webAddress,confirmPassword})
    }
}