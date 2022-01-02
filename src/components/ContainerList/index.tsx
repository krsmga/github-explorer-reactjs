import { useEffect, useState } from 'react'
import { RepositoryList } from '../RepositoryList'
import { Container, UserDetails, Content } from './style'

interface ContainerListProps {
  username: string
}

interface RepositoryUser {
  avatar_url: string
  url: string
  name: string
  location: string
}

export function ContainerList({ username }: ContainerListProps) {
  const [repositoryUser, setRepositoryUser] = useState<RepositoryUser>()

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setRepositoryUser(data))
  }, [username])

  return (
    <Container>
      <UserDetails>
        <img src={repositoryUser?.avatar_url} alt='' />
        <h2>
          {repositoryUser?.name}
          <h3>{username}</h3>
        </h2>
        <p>{repositoryUser?.location}</p>
      </UserDetails>
      <Content>
        <RepositoryList username={username} />
      </Content>
    </Container>
  )
}
