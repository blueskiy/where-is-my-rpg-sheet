import { Dispatch } from 'react'

export interface Template {
  id: number
  title: string
  author: string
  content: string
}

export interface Templates {
  templates: Template[]
}

export interface NewSheetContainerProps {
  templates: Template[]
  createNewSheet: boolean
  setCreateNewSheet: Dispatch<React.SetStateAction<boolean>>
}
