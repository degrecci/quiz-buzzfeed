import React, { useState } from 'react';
import { Section } from 'react-bulma-components';

import Header from './Header';
import Questions from './Questions';
import initialQuestions from './questionsArray';
import Result from './Result';

function App() {
  const [responses, setResponses] = useState({});

  const computeResponse = (questionIndex, answerId) => {
    setResponses({
      ...responses,
      [questionIndex]: {
        responseId: answerId,
        correctResponse: initialQuestions[questionIndex].correctAnswerId,
        isCorrectResponse:
          answerId === initialQuestions[questionIndex].correctAnswerId
      }
    });
  };

  const responsesArray = Object.values(responses);
  const hasQuizEnded = initialQuestions.length === responsesArray.length;
  const countCorrectResponses = responsesArray.filter(
    value => value.isCorrectResponse
  ).length;

  return (
    <Section>
      <Header />
      <Questions computeResponse={computeResponse} responses={responses} />
      {hasQuizEnded && (
        <Result
          resetQuiz={() => setResponses({})}
          total={initialQuestions.length}
          result={countCorrectResponses}
        />
      )}
    </Section>
  );
}

export default App;
