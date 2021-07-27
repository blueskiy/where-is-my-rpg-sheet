const TemplatesList = ({ templates, createNewSheet, setCreateNewSheet }) => {
  const isCreatingNewSheet = () => {
    setCreateNewSheet(!createNewSheet)
  }

  return (
    <ul>
      {templates.map((template) => (
        <li key={template.id}>{template.title}</li>
      ))}
      <button onClick={isCreatingNewSheet}>Criar Novo Template</button>
    </ul>
  )
}

export default TemplatesList
