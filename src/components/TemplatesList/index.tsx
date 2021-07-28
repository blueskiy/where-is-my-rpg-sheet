import { NewSheetContainerProps } from 'interfaces/interfaces'
import { TemplatesListContainer } from './styles'

const TemplatesList = ({
  templates,
  createNewSheet,
  setCreateNewSheet
}: NewSheetContainerProps) => {
  const isCreatingNewSheet = () => {
    setCreateNewSheet(!createNewSheet)
  }

  return (
    <TemplatesListContainer>
      <ul>
        {templates.map((template) => {
          const title = template.title
          const formatedTitle = title.charAt(0).toUpperCase() + title.slice(1)

          return <li key={template.id}>{formatedTitle}</li>
        })}
      </ul>
      <button onClick={isCreatingNewSheet}>Criar Novo Template</button>
    </TemplatesListContainer>
  )
}

export default TemplatesList
