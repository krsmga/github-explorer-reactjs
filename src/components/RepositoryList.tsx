import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RespositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [user, setUser] = useState('krsmga')

  useEffect(() => {
    GetUrl()
  }, [])

  function GetUrl() {
    fetch(`https://api.github.com/users/${user}/repos`)
    .then(response => response.json())
    .then(data => setRepositories(data))
  }

  function Change() {
    setUser('teste');
    GetUrl();    
  }

  return (
    <section className="repository-list">
      <form name="form">
        <div>
          <span>Informe o usuário do repositório:</span>
          <input type="text" name="reposName"></input>
          <input type="button" value="Continue" onClick={() => Change()}></input>
        </div>
      </form>
      <h1>Lista de repositórios - {user}</h1>
      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
