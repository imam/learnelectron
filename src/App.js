import React, { Component } from 'react';
import './App.scss';
import { Container, Box, Field, Label, Control, Input, Button } from 'bloomer';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <div className="centered">
          <Box className="primary">I Want To Play A game</Box>
          <Field>
            <Label>Name</Label>
            <Control>
              <Input type="text" placeholder='Text Input' />
            </Control>
          </Field>
          <Field isGrouped>
            <Control>
              <Button isColor='primary'>Submit</Button>
            </Control>
            <Control>
              <Button isLink>Cancel</Button>
            </Control>
          </Field>
        </div>
      </Container>
    );
  }
}

export default App;
