import React from 'react'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import { Grid } from 'semantic-ui-react'
import JobSeekerList from '../pages/JobSeekerList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <JobPositionList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} >
                    <Grid.Column>
                        <EmployerList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <JobSeekerList />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <JobAdvertisementList />
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        </div>
    )
}
