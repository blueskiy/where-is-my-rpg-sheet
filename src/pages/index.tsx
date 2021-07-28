import { gql } from '@apollo/client'
import client from '../services/apollo-client'

import Main from 'components/Main'
import Sidebar from 'components/Sidebar'
import { Templates } from 'interfaces/interfaces'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Teste {
        templates {
          title
          author
          content
          id
        }
      }
    `
  })

  return {
    props: {
      templates: data.templates
    }
  }
}

export default function Home({ templates }: Templates) {
  console.log('os templates', templates)
  return (
    <>
      <Sidebar />
      <Main templates={templates} />
    </>
  )
}
