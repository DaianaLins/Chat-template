import styled from "styled-components"

export const TextInput2 = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colorSecundary
}))`
  width: 80%;
  height: 20px;
  /* bottom: 5%; */
  border-bottom-width: 0.5px;
  border-color: #ACAEB0;
  color: ${props => props.theme.color};
  font-size: 17px;
`

export const Title = styled.Text`
  font-size: 28px;
  top: 8%;
  font-weight: bold;
  color: ${props => props.theme.color};
`
