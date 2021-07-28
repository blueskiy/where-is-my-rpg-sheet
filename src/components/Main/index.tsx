import NewSheetContainer from 'components/NewSheetContainer'
import { Templates } from 'interfaces/interfaces'
import React, { useState } from 'react'
import Modal from 'react-modal'

import { MainContent, customStyles } from './styles'

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next')

const Main = ({ templates }: Templates) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [createNewSheet, setCreateNewSheet] = useState(false)

  function openModal() {
    setIsOpen(true)
    setCreateNewSheet(false)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <MainContent>
        <button onClick={openModal}>Criar nova ficha</button>
      </MainContent>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={
          createNewSheet ? 'Criar nova ficha' : 'Lista de templates'
        }
      >
        <NewSheetContainer
          templates={templates}
          createNewSheet={createNewSheet}
          setCreateNewSheet={setCreateNewSheet}
        />
      </Modal>
    </>
  )
}

export default Main
