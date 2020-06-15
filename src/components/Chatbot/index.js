import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../utils/dialogFlowConfig.js';

const BOT_USER = {
    _id: 2,
    name: 'FAQ Bot',
    avatar: 'https://i.pinimg.com/736x/fd/a1/3b/fda13b9d6d88f25a9d968901d319216a.jpg'
  };

export default class ChatBot extends Component {
    state = {
        messages: [
            {
            _id: 1,
            text: `Olá! Eu sou o BrutoBot 🤖, eu sou um robô e vou te dar algumas opções para te ajudar a escolher o que podemos fazer juntos:
            \n\nTraçar Rota\nGanhar Pontos\nRelatar algum problema\nDicas para melhorar a saúde\nEncontrar um estabelecimento`,
            createdAt: new Date(),
            user: BOT_USER
            }
        ]
    };

    componentDidMount() {
    Dialogflow_V2.setConfiguration(
        dialogflowConfig.client_email,
        dialogflowConfig.private_key,
        Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
        dialogflowConfig.project_id
    );
    }

    handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
    }

    onSend(messages = []) {
    this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    Dialogflow_V2.requestQuery(
        message,
        result => this.handleGoogleResponse(result),
        error => console.log(error)
    );
    }

    sendBotResponse(text) {
    let msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT_USER
    };

    this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, [msg])
    }));
    }  

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1
              }}
              placeholder="Escreva sua mensagem... "
            />
          </View>
        )
    }
}
