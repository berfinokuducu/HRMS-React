import axios from "axios"

export default class CurriculumVitaeService{

    createCV(coverLetter,jobSeekerId)
    {
        return axios.post("http://localhost:4000/api/curriculumvitaes/add",{
            coverLetter,
            jobSeeker:{
                id:jobSeekerId
            }
        })
    }

    addAbility(jobSeekerId,ability){
        return axios.post("http://localhost:4000/api/curriculumvitaes/addAbility",{
            jobSeeker:{
                id:jobSeekerId
            },
            name:ability
        })
    }
    addForeignLanguage(jobSeekerId,level,name){
        return axios.post("http://localhost:4000/api/curriculumvitaes/addForeignLanguage",{
            curriculumVitae:{
                jobSeeker:{id:jobSeekerId
            }},
            level,
            name
        })
    }
    addJobExperience(jobSeekerId,dateOfEnd,dateOfStart,position,workplaceName){
        return axios.post("http://localhost:4000/api/curriculumvitaes/addJobExperience",{
            curriculumVitae:{
                jobSeeker:{id:jobSeekerId
            }},
            dateOfEnd,
            dateOfStart,
            position,
            workplaceName
        })
    }
    addLink(jobSeekerId,name,url){
        return axios.post("http://localhost:4000/api/curriculumvitaes/addForeignLanguage",{
            curriculumVitae:{
                jobSeeker:{id:jobSeekerId
            }},
            name,
            url
        })
    }
    addSchoolInfo(jobSeekerId,department,graduationDate,name,startDate){
        return axios.post("http://localhost:4000/api/curriculumvitaes/addSchoolInfo",{
            curriculumVitae:{
                jobSeeker:{id:jobSeekerId
            }},
            department,
            graduationDate,
            name,
            startDate
        })
    }
    getCvByJobSeekerId(jobSeekerId)
    {
        return axios.get("http://localhost:4000/api/curriculumvitaes/getCV?id="+jobSeekerId)
    }

    addImage(file, cv_id)
    {
        const data = new FormData();
        data.append('file', file);
        return axios.post(`http://localhost:4000/api/curriculumvitaes/addImage`, data, { headers: { 'Content-Type': 'multipart/form-data' }, params: { cv_id } });
    }
}