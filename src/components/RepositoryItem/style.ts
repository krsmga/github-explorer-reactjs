import styled from 'styled-components'

export const Container = styled.li`
  padding: 10px;

  p.title {
    color: var(--background);
    font-size: 0.8rem;
    font-weight: 400;

    a {
      color: blue;
      text-decoration: none;
      transition: filter 0.2s;

      strong {
        font-size: 1.2rem;
        font-weight: 600;
        margin-right: 0.5rem;
      }

      &:visited {
        color: blue;
      }

      &:hover {
        filter: opacity(0.7);
      }
    }
  }

  p.description {
    font-size: 1rem;
    font-weight: 300;
  }

  div {
    height: 1px;
    background: var(--gold-dark);
    margin-top: 2rem;
  }

  p.time {
    font-size: 0.9rem;
    display: flex;
    margin-top: 0.7rem;

    time {
      margin-left: 0.3rem;
    }
  }
  
`
