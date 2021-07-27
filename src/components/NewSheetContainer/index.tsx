import CreateSheetForm from 'components/CreateSheetForm'
import TemplatesList from 'components/TemplatesList'

const NewSheetContainer = ({
  templates,
  createNewSheet,
  setCreateNewSheet
}) => {
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
