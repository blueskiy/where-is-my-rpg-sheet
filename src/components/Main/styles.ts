import styled from 'styled-components'

export const MainContent = styled.div`
  width: 85vw;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    color: #fff;
    border: none;
    background: none;
    position: absolute;
    font-size: 2.5rem;
    cursor: pointer;
    display: inline-block;
    padding: 12px 20px;
    border-radius: 5px;
    /* transition: 65ms all ease-in-out; */
  }
  button:hover {
    background-color: #474c50;
  }
`
