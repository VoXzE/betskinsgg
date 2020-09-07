import React, { Component } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import MessageItem from './MessageItem';
import StreakMessage from './StreakMessage';

const dummyData = [
  {
    avatar: require("../../assets/images/Avatar.png"),
    name: "Solar Studios",
    message: "Hey guys! Its me, video game dunkey!",
    time: "16:14",
    isAdmin: false,
    isMod: true,
    level: 2
  }, 
  {
    avatar: "https://www.rollingstone.com/wp-content/uploads/2019/05/R1328_FEA_LilNasX_B.jpg?crop=900:600&width=440",
    name: "Lil Nas X",
    message: "I got the 🐎 in the 🅱️",
    time: "11:19",
    isAdmin: false,
    isMod: false,
    level: 12
  },
  {
    avatar: "https://amp.insider.com/images/5c7e1158eb3ce82b475665e2-750-563.jpg",
    name: "HeyHey",
    message: "Keep on hustling!",
    time: "16:14",
    isAdmin: true,
    isMod: false,
    level: 44
  },
  {
    avatar: "https://pbs.twimg.com/profile_images/1119979405537947653/0JpnZQ8s_400x400.jpg",
    name: "Bas",
    message: "Haha I win 😎",
    time: "12:02",
    isAdmin: false,
    isMod: false,
    level: 7
  },
]

export class ChatBox extends Component {
  render() {
    return (
      <div className="ChatBox">

        <div className="ChatBoxTop">
          <div className="ChatStatus">
            <div className="Circle"></div>
            <h1><span>355</span> Online</h1>
          </div>
          <div className="ChatFlagSection">
            <ReactFlagsSelect 
              defaultCountry="US"
              className="ChatFlag"
              showSelectedLabel={false} 
              />
          </div>
        </div>

        <div className="ChatMessageSection">
          {dummyData.map((player) => (
            <MessageItem data={player}/>
          ))}
          
          <StreakMessage />

          {dummyData.map((player) => (
            <MessageItem data={player}/>
          ))}
        </div>

        <div className="ChatInputBox">
          <input type="text" placeholder="Your message..."/>
        </div>

      </div>
    )
  }
}

export default ChatBox
