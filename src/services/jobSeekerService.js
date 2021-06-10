import axios from "axios"

export default class JobSeekerService{
    getAllJobSeeker(){
        return axios.get("http://localhost:4000/api/jobSeekers/getall");
    }

    register(birthDate, email, firstName, lastName,identityNumber,password,confirmPassword){
        return axios.post("http://localhost:4000/api/jobSeekers/add",{birthDate, email, firstName, lastName,identityNumber,password,confirmPassword})
    }


}