import axios from "axios"

export default class JobAdvertisementService{
    getAllActiveJobAdvertisement(){
        return axios.get("http://localhost:4000/api/jobAdvertisements/getAllActiveJobAdvertisement");
    }
    getAllByOrderByCreatedDateDesc(){
        return axios.get("http://localhost:4000/api/jobAdvertisements/getAllByOrderByCreatedDateDesc");
    }
    addJobAdvertisement(cityId,deadline,description,employerId,positionId,openPositionCount,salaryMax,salaryMin){
        return axios.post("http://localhost:4000/api/jobAdvertisements/add",{
            city: { id: cityId },
            deadline,
            description,
            employer:{id:employerId},
            jobPosition:{id:positionId},
            openPositionCount,
            salaryMax,
            salaryMin
            
        })
    }
    deactivateJobAdvertisement(id)
    {
        return axios.post("http://localhost:4000/api/jobAdvertisements/deactivateJobAdvertisement",{id})
    }
}