import Moment from 'react-moment'
import { Container } from './style'

interface RepositoryItemProps {
  name: string
  private: boolean
  description: string
  html_url: string
  updated_at: string
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <Container>
      <p className='title'>
        <a href={props.html_url} target='_blank'>
          <strong>{props.name}</strong>
        </a>
        {props.private ? '(private)' : '(public)'}
      </p>
      <p className='description'>
        {
          /* prettier-ignore */
          props.description ? props.description : 'No description was provided for this repository'
        }
      </p>
      <p className='time'>
        Updated <Moment fromNow>{props.updated_at}</Moment>
      </p>
      <div></div>
    </Container>
  )
}
