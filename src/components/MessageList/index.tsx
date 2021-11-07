import React, { useState, useEffect } from 'react';

import {
  ScrollView,
  View,
  FlatList
} from 'react-native';
import { api } from '../../services/api';
import { io } from 'socket.io-client';

import { MESSAGES_EXAMPLE } from '../../utils/messages';

import { Message, MessageProps } from '../Message';

import { styles } from './styles';

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE

// socket faz a parte do RealTime para verificar as mensagens novas
const socket = io(String(api.defaults.baseURL))
socket.on('new_message', (newMessage) => {
  messagesQueue.push(newMessage)
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([])

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3')
      setCurrentMessages(messagesResponse.data)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]])
        messagesQueue.shift()
      }
    }, 3000)

    // função de desmontagem do useEffect (limpar variáveis na memória e etc)
    return () => clearInterval(timer)
  }, [])

  return (
    // CÓDIGO FEITO NA NLW
    // <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={styles.content}
    //     keyboardShouldPersistTaps="never"
    // >
    //     {currentMessages.map(message => {
    //         console.log(message)
    //         return <Message key={message?.id} data={message} />
    //     })}
    // </ScrollView>

    <FlatList
      data={currentMessages}
      keyExtractor={item => item?.id}
      style={styles.container}
      contentContainerStyle={styles.content}
      renderItem={(message) => (
        <Message data={message?.item} />
      )}
    />
  );
}
