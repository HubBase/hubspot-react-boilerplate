import React from 'react';
import { Container } from './App.styles';
import Card from './components/Card';


function App({ moduleData }) {
  return (
    <Container>
      <Card initialClickCount={moduleData.initial_count} />
      <Card initialClickCount={moduleData.initial_count} />
    </Container>
  );
}

export default App;
