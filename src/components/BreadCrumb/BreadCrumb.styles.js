import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:70px;
    background: var(--medGrey);
    color: var(--white);

`;


export const Content = styled.div`
      max-width: var(--maxWidth);
      display:flex;
      max-width: var(--maxWidth);
      padding: 0 20px;
      width:100%;
      span{
          font-size: var(--fontMed);
          color: var(--white);
          padding-right:10px;
          @media screen and (max-width: 500px){
            font-size: var(--fontSmall);
        }
      }

`;
