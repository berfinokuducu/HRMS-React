import React, { useEffect, useState } from 'react'
import EmployerService from '../services/employerService'
import { Table, Divider, Header } from 'semantic-ui-react'
export default function EmployerList() {
    const [employers, setemployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then(result => setemployers(result.data.data))
    },[]
    )
    return (
        <div>
            <Divider horizontal>
                <Header as='h2' color="olive">

                    İş Verenler
                </Header>
            </Divider>
            <Table color="olive" textAlign="center">
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webAddress}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>
    )
}
