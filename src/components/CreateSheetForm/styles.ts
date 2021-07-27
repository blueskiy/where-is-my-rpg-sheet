import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;

    label {
      font-size: 25px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      input {
        height: 30px;
        margin-left: 20px;
      }
    }
  }
`
