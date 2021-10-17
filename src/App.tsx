import { Header } from './components/Header'
import { RepositoryList } from './components/RepositoryList'
import { GlobalStyles } from './styles/global'

export function App() {
  return (
    <>
      <Header />
      <RepositoryList />
      <GlobalStyles />
    </>
  )
}
