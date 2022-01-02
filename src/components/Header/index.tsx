import { Container, Content } from './style'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'

interface HeaderProps {
  onRequestUsername: (username: string) => void
}

export function Header({ onRequestUsername }: HeaderProps) {
  const [usernameInput, setUsernameInput] = useState('')
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src='logo.svg' alt='' />
          <h1>Github Explorer</h1>
        </div>
        <div className='search'>
          {/* prettier-ignore */}
          <input 
            type='text'
            placeholder='Enter the Github username' 
            onChange={e => setUsernameInput(e.target.value)}
            value={usernameInput}
          />
          <button type='submit' onClick={() => onRequestUsername(usernameInput)}>
            <FiSearch />
          </button>
        </div>
      </Content>
    </Container>
  )
}
