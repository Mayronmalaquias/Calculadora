import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => {
      
      if (prev === '0') {
        return num;
      } else {
        return prev + num;
      }
    });
  };

  const handlePointNumber = () => {
    
    if (!currentNumber.includes('.')) {
      setCurrentNumber(prev => prev + '.');
    }
  };

  const handleOperation = (op) => {
    
    if (operation !== '') {
      handleEquals();
    }
    
    setFirstNumber(currentNumber);
    setOperation(op);
    setCurrentNumber('0'); 
  };

  const handleEquals = () => {
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(currentNumber);
        break;
      case 'x':
        result = parseFloat(firstNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(firstNumber) / parseFloat(currentNumber);
        break;
      default:
        return;
    }
    setCurrentNumber(String(result));
    setFirstNumber(''); 
    setOperation(''); 
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} style={{ marginBottom: '20px' }} />
        <Row>
          <Button label="x" onClick={() => handleOperation('x')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="." onClick={handlePointNumber} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;