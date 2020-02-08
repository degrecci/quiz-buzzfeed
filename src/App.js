import React from 'react';
import { Section } from 'react-bulma-components';

import Header from './Header';
import Questions from './Questions';

function App() {
  return (
    <Section>
      <Header />
      <Questions />
    </Section>
  );
}

export default App;
