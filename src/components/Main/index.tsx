import NewSheetContainer from 'components/NewSheetContainer'
import React, { useState } from 'react'
import Modal from 'react-modal'

import { MainContent } from './styles'

const customStyles = {
  overlay: {
    zIndex: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.295)'
  },
  content: {
    background: 'rgb(47, 52, 55)',
    border: 'none',
    height: '90vh',
    width: '55vw',
    top: '47%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    maxWidth: '93vw',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next')

const Main = ({ templates }) => {
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
        contentLabel="Example Modal"
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
