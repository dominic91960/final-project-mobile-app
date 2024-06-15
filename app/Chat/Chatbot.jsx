import React, { useState } from "react";
// import { View, Text} from 'react-native-animatable';
import axios from "axios";
// import { TextInput } from 'react-native-gesture-handler';
import {
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Text,
  ScrollView,
} from "react-native";

import { API_KEY } from "@env";

const Chatbot = () => {
  const [data, setData] = useState([]);

  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const [textInput, setTextInput] = useState("");

  const handleSend = async () => {
    if (!textInput.trim()) return;

    // Add user message to messages array
    const userMessage = { type: "user", text: textInput };
    setData((prevMessages) => [...prevMessages, userMessage]);
    const currentTextInput = textInput; // Store current input before clearing

    // Clear the input
    setTextInput("");
    try {
      // const prompt = textInput
      const response = await axios.post(
        apiUrl,
        {
          // prompt: prompt,
          // model: 'gpt-3.5-turbo-0125', // Specify the model you want to use
          //     messages: {role: "user", content: textInput},
          // max_tokens: 256,
          // temperature: 1,
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: currentTextInput }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      const botText = response.data.choices[0].message.content;
      const botMessage = { type: "bot", text: botText };

      // Add bot response to messages array
      setData((prevMessages) => [...prevMessages, botMessage]);

      console.log("reaquest sent");
      // const text = response.data.choices[0].text;
      // setData([...data, {type: 'user', 'text': textInput}, {type: 'bot', 'text': text}]);
      // setTextInput('');
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <SafeAreaView>

    // <View style={styles.container}>
    //     <Text>Hi</Text>
    //     <FlatList
    //     data={data}
    //     keyExtractor={(item, index) => index.toString()}
    //     style={StyleSheet.body}
    //     renderItem={({item}) => (
    //         <View style={{flexDirection:'row', padding: 10}}>
    //             <Text style={{fontWeight:'bold', color: item.type === 'user' ? 'green' : 'red'}}>{item.type === 'user' ? 'Veronica' : 'Bot'}</Text>
    //             <Text >{item.text}</Text>
    //         </View>
    //     )}/>
    //     <TextInput
    //     style={styles.input}
    //     value={textInput}
    //     onChangeText = {text => setTextInput(text) }
    //     placeholder='Ask me anything'
    //     />
    //     <TouchableOpacity style={styles.button} onPress={handleSend}>
    //         <Text>Let's Go</Text>
    //     </TouchableOpacity>

    // </View>
    // </SafeAreaView>
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {data.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.type === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={setTextInput}
        placeholder="Ask me anything"
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     body: {
//         width: '102%',
//         margin: 10
//     },
//     bot: {
//         fontSize: 16
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'black',
//         width: '90%',
//         height: 60,
//         marginBottom: 10,
//         borderRadius: 10
//     },
//     button: {
//         width: '90%',
//         height: 60,
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 10
//     }

// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 16,
  },
  message: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  userMessage: {
    backgroundColor: "#dcf8c6",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#ececec",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
  },
});

export default Chatbot;
