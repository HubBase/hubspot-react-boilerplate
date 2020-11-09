import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 500px;
  margin-bottom: 40px;
  padding: 0.5em 1em;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;`;

export const Button = styled.button`  
    border: 1px solid #ff7a59;
    background-color: #ff7a59;
    border-radius: 3px;
    color: #ffffff;
    font-size: 1rem;
    padding: 11px 24px;
    text-align: center;
    user-select: none;
    transition: all 0.15s ease-out;
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    &:hover {
      background-color: #ff8f73;
      border-color: #ff8f73;
      color: #ffffff;
      cursor: pointer;
    }
`