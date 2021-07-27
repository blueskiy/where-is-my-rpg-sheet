import { useState } from 'react'
import { FormWrapper } from './styles'
import { useMutation, gql } from '@apollo/client'

const CREATE_SHEET_MUTATION = gql`
  mutation AddTemplate($newTemplateData: NewTemplateInput!) {
    addTemplate(newTemplateData: $newTemplateData) {
      title
      author
      content
    }
  }
`

const CreateSheetForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    content: ''
  })

  const [createSheet] = useMutation(CREATE_SHEET_MUTATION, {
    variables: {
      newTemplateData: {
        title: formState.title,
        author: formState.author,
        content: formState.content
      }
    }
  })

  return (
    <FormWrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createSheet()
        }}
      >
        <label htmlFor="">
          Título
          <input
            type="text"
            value={formState.title}
            onChange={(e) =>
              setFormState({
                ...formState,
                title: e.target.value
              })
            }
          />
        </label>
        <label htmlFor="">
          Autor
          <input
            type="text"
            value={formState.author}
            onChange={(e) =>
              setFormState({
                ...formState,
                author: e.target.value
              })
            }
          />
        </label>
        <label htmlFor="">
          Conteúdo
          <input
            type="text"
            value={formState.content}
            onChange={(e) =>
              setFormState({
                ...formState,
                content: e.target.value
              })
            }
          />
        </label>
        <button type="submit">Criar Ficha</button>
      </form>
    </FormWrapper>
  )
}

export default CreateSheetForm
