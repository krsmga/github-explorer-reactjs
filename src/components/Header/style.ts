import styled from 'styled-components';

export const Container = styled.header`
  background: var(--header-color);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.title {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
      margin-right: 1rem;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }
  }

  div.search {
      display: flex;
      align-items: center;

      input {
        color: var(--input-text-color);
        background: var(--input-color);        
        font-size: 1rem;
        font-weight: 400;
        width: 18rem;
        padding: 12px 12px;
        border-radius: 5px;
        border: 0;
        margin-right: 1rem;

        &::placeholder {
          color: var(--input-placeholder-color);
        }

      }

      button {
        display: flex;
        background-color: var(--button-color);
        color: #fff;
        font-size: 1.6rem;
        font-weight: 600;
        padding: .7rem;
        border: 0;
        border-radius: 5px;
        flex-direction: row;
        align-items: center;
        transition: filter 0.2s;

        &:hover {
          filter: opacity(0.8);
        }      
      }
    }  
`