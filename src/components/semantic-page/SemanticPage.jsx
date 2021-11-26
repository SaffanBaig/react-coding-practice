import React from 'react'
import { Card, Container, Grid, GridColumn } from 'semantic-ui-react'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import Image from 'semantic-ui-react/dist/commonjs/elements/Image'
import './SemanticPage.css'

const SemanticPage = () => {
    return(
        <Container>
            <h1>Demo Text</h1>
            <Grid.Row>
            <Grid.Column>
            <Card className='custom-card'>
                <Image className='image-container' src={require('../../assets/img.png')} heiwrapped ui={false} />
                <Card.Content>
                <Card.Description className='card-desription' textAlign='center'>
                    
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={10} className="v-align">
                                    <div>
                                    <p className='card-text'>Demo Name</p>
                                    <p className='small-text'>1 Jan 2021</p>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={6} className="v-align">
                                    <Icon name='ellipsis vertical'></Icon>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        
                </Card.Description>
                </Card.Content>
               
            </Card>
            </Grid.Column>
            
            </Grid.Row>
            
        </Container>
    )
}

export default SemanticPage

