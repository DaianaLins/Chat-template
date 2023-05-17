import styled from 'styled-components'

export const Wrapper = styled.View`
  flex: 1;
`
export const WrapperP = styled.View`
  background: ${props => props.theme.background};
  flex: 1;
  align-items: center;
  align-content: center;
 
`
export const ContainerForm = styled.View`
  justify-content: center;
  align-content: center;
  flex: 1;
`

export const TextInput2 = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colorSecundary
}))`
  width: 80%;
  height: 80px;
  bottom: 5%;
  border-bottom-width: 0.5px;
  margin-left: 40px;
  border-color: #ACAEB0;
  font-size: 17px;
`

