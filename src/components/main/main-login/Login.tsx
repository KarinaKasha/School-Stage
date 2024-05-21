import React, { useState } from 'react';
import styled from 'styled-components'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// Define styled components
const LoginContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffd700; /* Yellow background */
  padding: 20px;
  border-radius: 25px;
  width: 400px; /* Increased width */
  max-width: 90%; /* Added max-width for responsiveness */
  text-align: center;
  font-family: Arial, sans-serif;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  color: #000;
  font-size: 24px;
  margin-bottom: 20px; /* Added margin-bottom */
`;

const Paragraph = styled.p`
  color: #000;
  font-size: 14px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;
  width: 100%; /* Ensure inputs take full width */
`;

const Input = styled.input`
  width: calc(100% - 16px); 
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px; 
  background-color: transparent; 
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 30px; /* Increased padding */
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Added transition for smoother hover effect */

  &:hover {
    background-color: #444; /* Darker background color on hover */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #000;
  cursor: pointer;
`;

interface LoginProps {
  show: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ show, onClose }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (login === 'user' && password === '123') {
      navigate('/school-stage/account'); 
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    show && (
      <LoginContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div className="login-content">
          <FormContainer>
            <Heading>Вход в личный кабинет</Heading>
            <Paragraph>
              После первого занятия мы выдаем ребенку логин и пароль от его личного кабинета на сайте. Если Вы не получили эти данные, обратитесь к педагогу.
            </Paragraph>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Логин"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
              <Button type="submit">Войти</Button>
            </form>
          </FormContainer>
        </div>
      </LoginContainer>
    )
  );
};

export default Login;