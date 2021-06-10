import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Table, Divider, Header } from 'semantic-ui-react'
export default function JobAdvertisementList() {
    const [jobAdverts, setJobAdverts] = useState([])
    useEffect(()=>{
        let jobAdvertisementService=new JobAdvertisementService();
        jobAdvertisementService.getAllActiveJobAdvertisement().then(result=>setJobAdverts(result.data.data))
    })
    return (
        <div>
            <Divider horizontal>
                <Header as='h2' color="orange">

                    Aktif İş İlanları
                </Header>
            </Divider>
            <Table color="orange" textAlign="center">
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>Firma Adı</Table.HeaderCell>
                        <Table.HeaderCell>Genel iş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Adedi</Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.jobPosition.positionName}</Table.Cell>
                                <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                                <Table.Cell>{jobAdvert.createdDate}</Table.Cell>
                                <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
