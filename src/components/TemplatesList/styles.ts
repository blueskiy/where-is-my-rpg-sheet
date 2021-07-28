import styled from 'styled-components'

export const TemplatesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  ul {
    margin-bottom: 3rem;
  }

  li {
    cursor: pointer;
    font-size: 25px;
    list-style: none;
    text-align: center;
    padding: 12px 100px;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &:hover {
      background-color: #0003;
    }
  }

  button {
    cursor: pointer;
    padding: 12px 15px;
    border-radius: 6px;
    border: transparent 2px solid;
    background: #0003;
    color: #fff;
    font-size: 20px;
    transition: border 140ms ease-in-out;

    &:hover {
      border: #3dffcb 2px solid;
    }
  }
`
