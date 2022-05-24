import styled from 'styled-components'

export const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 990;
`

export const Modal = styled.div`
  position: fixed;
  top: 20%;
  left: 20%;
  align-items: center;
  padding-top: 100px;
  width: 350px;
  height: 70vh;
  background-color: rgb(236, 236, 236);
  border-radius: 10px;
  z-index: 999;
  min-height: 10em;
  padding: 25px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  overflow-y: scroll;
  @media (max-width: 600px) {
    width: 280px;
  }
`