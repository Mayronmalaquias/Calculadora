import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1a1a1a; /* Fundo preto escuro */
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #2b2b2b; /* Fundo roxo escuro */
    width: 400px; /* Largura fixa */
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 15px;
`

export const Button = styled.button`
    padding: 15px 30px;
    font-size: 24px;
    border: 2px solid #4CAF50; /* Borda verde */
    border-radius: 8px;
    background-color: #4CAF50; /* Verde para os botões */
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049; /* Verde escuro no hover */
    }
`