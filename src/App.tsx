import { Header } from './components/Header'
import { ContainerList } from './components/ContainerList'
import { RepositoryList } from './components/RepositoryList'
import { GlobalStyles } from './styles/global'
import { useEffect, useState } from 'react'

export function App() {
  const [username, setUsername] = useState('krsmga')

  return (
    <>
      <Header onRequestUsername={setUsername} />
      <ContainerList username={username} />
      <GlobalStyles />
    </>
  )
}
