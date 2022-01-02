import styled from "styled-components";

export const Container = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  margin-top: -5rem;
  padding: 1rem;
  background: var(--gold-light);
  border-radius: 1rem;

`
export const UserDetails = styled.div`
  display: absolute;
  text-align: center;
  margin-top: -6rem;

  img {
    width: 11rem;
    border: 4px solid var(--background);
    border-radius: 50%;
    background: var(--background);
  }

  h2 {
    color: var(--background);
    font-weight: 600;
    font-size: 1.7rem;
    margin-top: -0.5rem;

    h3 {
      margin-top: -0.5rem;
      font-weight: 200;
      font-size: 1.3rem;
    }
  }
`
export const Content = styled.div`
  margin: 0 auto;     
`