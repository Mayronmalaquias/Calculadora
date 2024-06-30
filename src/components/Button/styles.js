import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 15px 30px;
    border: 2px solid #4CAF50;
    border-radius: 8px;
    background-color: transparent;
    color: #4CAF50;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    margin-bottom: 20px; /* Adiciona espaço inferior de 20px */
    margin-top: 10px; /* Adiciona espaço superior de 10px */

    &:hover {
        background-color: #4CAF50;
        color: #ffffff;
        border-color: #4CAF50;
    }
`;