import React from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Menu.Item
                    name='HRMS' icon="star half empty"
                />
                <Menu.Item>
                    <Button color="black " icon='home'></Button>
                </Menu.Item>

                <Menu.Item>
                    <Button basic inverted color='grey'><Icon name="group" />İş İlanları</Button>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button.Group >
                        <Button basic inverted color='teal'><Icon name="user outline" />Giriş Yap</Button>
                        <Button.Or />
                        <Button basic inverted color='blue'><Icon name="paper plane" /> Kayıt Ol</Button>
                    </Button.Group>
                </Menu.Item>


            </Menu>
        </div>
    )
}
