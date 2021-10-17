import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [user, setUser] = useState('krsmga')
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [user])

  return (
    <section className='repository-list'>
      <form name='form'>
        <div>
          <span>Informe o usuário do repositório:</span>
          <input type='text' name='reposName' onChange={e => setUserInput(e.target.value)} value={userInput}></input>
          <input type='button' value='Continue' onClick={() => setUser(userInput)}></input>
        </div>
      </form>
      <h1>Lista de repositórios</h1>
      <ul>
        {
          /* prettier-ignore */
          repositories.map(repository => {
          return <RepositoryItem 
                    key={repository.name} 
                    name={repository.name} 
                    description={repository.description} 
                    html_url={repository.html_url} 
                 />
          })
        }
      </ul>
    </section>
  )
}
