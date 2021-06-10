import React, { useState, useEffect } from 'react'
import { Table , Divider, Header } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService';

export default function JobPositionList() {
    const [jobPositions, setjobPositions] = useState([]);
    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setjobPositions(result.data.data))

    }, [])

    return (
        <div>
            <Divider horizontal>
                <Header as='h2'color="teal">
                    İş Pozisyonları
                </Header>
            </Divider>
            <Table color="teal" textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Pozisyonları</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        jobPositions.map(jobPosition => (
                            <Table.Row key={jobPosition.id}>
                                <Table.Cell>{jobPosition.positionName}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
