import React, { useEffect,useState } from 'react'
import { Table, Divider, Header } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService'
export default function JobSeekerList() {
    const [jobSeekers, setJobSeekers] = useState([])
    useEffect(()=>{
        let jobSeekerService=new JobSeekerService();
        jobSeekerService.getAllJobSeeker().then(result=>setJobSeekers(result.data.data))
    },[])
    return (
        <div>
            <Divider horizontal>
                <Header as='h2'color="red">
                    İş Arayanlar
                </Header>
            </Divider>
            <Table color="red" textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soyisim</Table.HeaderCell>
                        <Table.HeaderCell>TC No</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker => (
                            <Table.Row key={jobSeeker.id}>
                                <Table.Cell>{jobSeeker.email}</Table.Cell>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.nationalId}</Table.Cell>
                                <Table.Cell>{jobSeeker.birthDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
