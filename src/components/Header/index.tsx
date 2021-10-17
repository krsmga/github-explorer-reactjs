import { Container, Content } from './style'
import { FiSearch } from 'react-icons/fi'

export function Header() {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src='logo.svg' alt='' />
          <h1>Github Explorer</h1>
        </div>
        <div className='search'>
          <input type='text' placeholder='Enter the Github username' />
          <button type='submit'>
            <FiSearch />
          </button>
        </div>
      </Content>
    </Container>
  )
}
