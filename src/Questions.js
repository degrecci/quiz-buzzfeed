import React from 'react';
import { Heading, Box, Button } from 'react-bulma-components';
import questions from './questionsArray';

function Questions() {
  return (
    <div>
      {questions.map(({ id, title, answers }) => (
        <Box key={id}>
          <Heading>{title}</Heading>
          {answers.map((answer, index) => (
            <Button key={index} fullwidth>
              {answer}
            </Button>
          ))}
        </Box>
      ))}
    </div>
  );
}

export default Questions;
