import { View, StyleSheet, TouchableOpacity, AsyncStorage, Image, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useCallback, useContext, useEffect, useState } from "react";
import { Bubble, GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ModalClip from '../../components/modalClip/modalClip';
import HeaderChat from '../../components/headerChat/headerChat';
import { Wrapper } from '../../routes/styles'
import { SettingsContext } from '../../context/SettingsContext';
import themeColor from '../../themes'
import { sendChats, chats } from '../../utils/apiRequest';

const DetailsConversation = ({ route }) => {
  const navigation = useNavigation()
  const { userName, protocolo, online, details, avatar } = route.params
  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [modal, setModal] = useState(false)
  const [token, setToken] = useState(false)
  const [chat, setChat] = useState([])
  const journalEntries = [];
  const id = []
  const idU = []
  const create = []

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  const { theme } = useContext(SettingsContext)
  const [loading, setLoading] = useState(false)
  async function getToken() {
    const token = await AsyncStorage.getItem('TOKEN')
    setToken(token)
  }

  useEffect(() => {
    getToken()
    // loadApi()
    if (chat.data) setLoading(false)
  }, [loading])

  const handleClose = () => {
    setModal(false)
  }


  // async function loadApi() {
  //   setLoading(true)
  //   await chats(token, `${protocolo.id}`).then(response => {
  //     setChat(response)
  //     setLoading(false)
  //   }).catch(err => {
  //     setLoading(false)
  //   })
  // }
  useEffect(() => {

    if (chat.data) {
      setMessages(chat.data);
    }
  }, [loading]);

  const giftedChatMessages = messages.map((item) => {
    let send = {}
    let gcm = {
      _id: item.id_msg || item._id,
      text: item.texto_limpo || item.text,
      createdAt: item.created_at || item.createdAt,
      image: item.image ? item.media.url : '',
      audio: item.audio ? item.media.url : '',
      video: item.video ? item.media.url : '',
      user: {
        _id: `${idU}`,
        name: userName,
        avatar: `${avatar}`
      }

    };
    if (item.user) {
      send = {
        _id: item.id_msg || item._id,
        text: item.texto_limpo || item.text,
        createdAt: item.created_at || item.createdAt,
        user: {
          _id: 1,
          name: `${data.full_name}`,
          // avatar: `${protocolo.operador.avatar}`
        }
      }
      return send
    }
    return gcm;
  });


  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text, user } = messages[0]
    // sendChats(token, `${protocolo.id}`, { _id, createdAt, text, user }).then(response => {
    //   console.log(response)
    //   setLoading(false)
    // }).catch(err => {
    //   console.log({ err })
    //   setLoading(false)
    // })
    console.log(_id, createdAt, text, user)
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  const customtInputToolbar = props => {
    return (
      <View style={{ backgroundColor: '#E0E0E0', width: '100%', opacity: 0.7 }}>
        <View style={{ width: '70%', alignSelf: 'center', bottom: '15%' }}>
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', left: 40, top: '45%' }}>
            <TouchableOpacity>
              <FontAwesome name='microphone' size={30} color='#676767' />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', right: 40, bottom: '10%' }}>
            <TouchableOpacity onPress={() => {
              setModal(true)
            }}>
              <Fontisto name='paperclip' size={30} color='#676767' />
            </TouchableOpacity>
          </View>
          <InputToolbar
            {...props}
            placeholder="Digite algo para enviar"
            containerStyle={{
              backgroundColor: "white",
              borderTopColor: "#E8E8E8",
              borderTopWidth: 1,
              borderRadius: 20,
            }}
          />
        </View>
      </View>
    );
  };

  const renderSend = (props) => {
    return (

      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5 }}
            size={35}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {

    return (

      <View style={{ flex: 1 }}>
        <Bubble
          {...props}
          // renderMessageAudio={() => {

          // }}
          renderMessageVideo={() =>
            <Pressable style={styles.video}>
              {props.currentMessage?.video &&
                <View
                  videoId={'76979871'}
                  loop={false}
                  autoPlay={false}
                  controls={false}
                  speed={false}
                  time={'0m0s'}
                />
              }
            </Pressable>}
             
          wrapperStyle={{
            right: {
              backgroundColor: '#CAEDAE',
              opacity: 0.7,
              width: 246,
            },
            left: {
              backgroundColor: '#8FC6FC',
              opacity: 0.8,
              width: 246,
            }
          }}
          textStyle={{
            right: {
              color: 'black',
            },
            left: {
              color: 'black',
            },
            image:{
            width: '92%',
            aspectRatio: 16 / 9,
            marginTop: 10,
            marginLeft: '4%',
            marginRight: '4%'
            }
          }}
        />
        {/* <Image source={`${protocolo.operador.avatar}`} style={{ width: 100}}/> */}
      </View>
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <Wrapper style={{ backgroundColor: themeColor[theme].background }} >
      <ModalClip visible={modal} handleClose={handleClose} />
      <HeaderChat name={userName} online={online} avatar={avatar} />
      <View style={{ flex: 1, paddingTop: 25, paddingBottom: 18 }}>
        <GiftedChat
          messages={giftedChatMessages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 0,
            name: 'Daiana',
            // avatar: `${protocolo.operador.avatar}`,
          }}
          renderUsernameOnMessage
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          renderInputToolbar={props => customtInputToolbar(props)}
          scrollToBottomComponent={scrollToBottomComponent}
        />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  contaneirHeader: {
    paddingTop: '10%',
    paddingBottom: '10%',
    backgroundColor: '#1976D2',
    paddingStart: '5%'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  contentImg: {
    borderRadius: 50,
    width: 60,
    height: 60
  },
  video: {
    width: '92%',
    aspectRatio: 16 / 9,
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%'
  },
  arrow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    paddingEnd: '8%',

  },
  message2: {
    position: 'absolute',
    paddingRight: 180,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 20,
    width: '100%',
    paddingLeft: 10,
    fontWeight: '500'
  },
  text2: {
    fontSize: 12,
    color: '#D1D1D1',
    paddingLeft: 10,
  },
  exclude: {
    fontWeight: 'bold',
    color: '#FFF',
    paddingStart: '30%',
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    position: 'absolute',
    top: '50%',
    backgroundColor: '#BDBDBD',
    borderRadius: 15,
    paddingVertical: 5,
    width: 291,
    height: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentM: {
    // backgroundColor: '#212121',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    width: 200,
    // paddingLeft: 80,
    height: 30,
    // borderWidth: 0.5,
    marginTop: 860,
    // borderColor: "#998282",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChatMessageSytemMessageContaine: {
    width: 246,
    height: 56,
    borderRadius: 10
  }
})
export default DetailsConversation

