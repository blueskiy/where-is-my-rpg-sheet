import CreateSheetForm from 'components/CreateSheetForm'
import TemplatesList from 'components/TemplatesList'
import { NewSheetContainerProps } from 'interfaces/interfaces'

const NewSheetContainer = ({
  templates,
  createNewSheet,
  setCreateNewSheet
}: NewSheetContainerProps) => {
  if (createNewSheet) {
    return <CreateSheetForm />
  }

  return (
    <TemplatesList
      templates={templates}
      createNewSheet={createNewSheet}
      setCreateNewSheet={setCreateNewSheet}
    />
  )
}

export default NewSheetContainer
