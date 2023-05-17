import axios from "axios";
// export const doLogin = user => {
//   return axios({
//     method: "POST",
//     url: 'https://api.callon.com.br/api/login',
//     headers: { "Content-Type": "application/json" },
//     data: user
//   });
// };
// // nick e numero
// export const createContact = (token, params) => {
//   return axios({
//     method: "POST",
//     url: 'https://api.callon.com.br/api/contatos',
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     data: params
//   });
// };

// // Em atendimento: Quando o protocolo está no status Aguardando e o autoatendimento for igual a zero, e o operador clica sobre esse contato, o app deverá acessar a rota [POST] api/protocolos/{id}/abrir
// export const searchProtocol = token => {
//   return axios({
//     method: "GET",
//     url: 'https://api.callon.com.br/api/protocolos',
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//   });
// };
// // https://api.callon.com.br/api/protocolos/${id}?last_id=${id2}
// export const chats = (token, id) => {
//   return axios({
//     method: "GET",
//     url: `https://api.callon.com.br/api/protocolos/${id}`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     }
//   });
// };

// export const sendChats = (token, id, params) => {
//   return axios({
//     method: "POST",
//     url: `https://api.callon.com.br/api/protocolos/${id}`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     data: `${params}`
//   });
// };

// export const openProtocol = (token, id) => {
//   return axios({
//     method: "GET",
//     url: `https://api.callon.com.br/api/protocolos/${id}/abrir`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     }
//   });
// };

// export const createNewProtocol = (token, id) => {
//   return axios({
//     method: "POST",
//     url: `https://api.callon.com.br/api/protocolos`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     },
//     data: id
//   });
// };

// export const closeProtocol = (token, id) => {
//   return axios({
//     method: "GET",
//     url: `https://api.callon.com.br/api/protocolos/${id}/encerrar`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     }
//   });
// };

// export const reOpenProtocol = (token, id) => {
//   return axios({
//     method: "GET",
//     url: `https://api.callon.com.br/api/protocolos/${id}/reabrir`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     }
//   });
// };