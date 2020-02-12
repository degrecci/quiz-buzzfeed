import React from 'react';
import { Button, Box, Media, Content } from 'react-bulma-components';

function Result(props) {
  return (
    <Box>
      <Media>
        <Media.Item>
          <Content>
            Você acertou{' '}
            <strong data-resultado={props.result}>{props.result}</strong> de{' '}
            <strong>{props.total}</strong> perguntas
          </Content>
        </Media.Item>
        <Media.Item position="right">
          <Button onClick={props.resetQuiz} color="info" data-test="refazer">
            Refazer o Quiz
          </Button>
        </Media.Item>
      </Media>
    </Box>
  );
}

export default Result;
