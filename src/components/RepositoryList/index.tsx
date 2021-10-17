import { useState, useEffect } from 'react'
import { RepositoryItem } from '../RepositoryItem'
import { Container } from './style'

interface RepositoryListProps {
  username: string
}

interface Repository {
  name: string
  private: boolean
  description: string
  html_url: string
  updated_at: string
}

export function RepositoryList({ username }: RepositoryListProps) {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc`)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [username])

  return (
    <Container>
      {
        /* prettier-ignore */
        repositories.map(repository => {
          return <RepositoryItem 
                    key={repository.name} 
                    name={repository.name} 
                    private={repository.private}
                    description={repository.description} 
                    html_url={repository.html_url} 
                    updated_at={repository.updated_at}
                 />
          })
      }
    </Container>
  )
}
