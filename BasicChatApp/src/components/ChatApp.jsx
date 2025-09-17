// import { useEffect, useRef, useState } from 'react'
// import { collection, addDoc, Timestamp , getDocs } from "firebase/firestore"; 
// import { store } from '../../firebase'; 
// import '../style/chatApp.css'
// import ScreenNavbar from './ScreenNavbar';
// import { IoIosSend } from "react-icons/io";
// import DefualtMessage from './DefualtMessage';

// const ChatApp = () => {
//   const messageRefOne = useRef("")
//   const messageRefTwo = useRef("")
//   const [messages , setMessages] = useState([])
 


//   // handleSendMessageUserOne 
//   const handleSendMessageUserOne =  () => {
//     const msg = messageRefOne.current.value;

//     if(msg !== ""){
//               addDoc(collection(store , "ChatAppData"), {
//               sender : "User-ONE",
//               text: msg.trim(),
//               time: Timestamp.now()
//             }).catch((error)=>alert("can`t send message !" , error))

//             handleGetMessages()
//       }

//       messageRefOne.current.value = "";
//       // // Fetch data
//       // 
//       //   console.log(doc.id, " => ", doc.data());
//       // });
//   }

//   // handleSendMessageUsertwo
//   const handleSendMessageUserTwo = ()=> {
//     const msg = messageRefTwo.current.value;

//     if(msg !== ""){
//              addDoc(collection(store , "ChatAppData"), {
//               sender : "User-TWO",
//               text: msg.trim(),
//               time: Timestamp.now()
//             }).catch((error)=>alert("can`t send message !" , error));
            
//             handleGetMessages();
//     }
//     messageRefTwo.current.value = "";
//   }

//   //Get messages from data
//   const handleGetMessages = async ()=> {
//       const querySnapshot = await getDocs(collection(store , "ChatAppData"));

//       const msgList = [];
//       querySnapshot.forEach((doc)=>{
//         msgList.push({
//           ...doc.data(),
//           docId : doc.id
//         })
//       })

//       msgList.sort((a,b)=> a.time - b.time);
//       setMessages(msgList)
//   }

//   useEffect(()=> {
//     handleGetMessages()
//   } , [])

//   return (

//     <div className="chatAppMainContainer d-flex justify-content-center align-items-center">

//           {/* user One Display */}
//         <div className="userOneDisplay">
//             <ScreenNavbar name="Arush" />
//         {messages.length === 0 ?   ( <DefualtMessage />)
//            :
//           ( <div className="messages">
//             {messages.map((msg , index)=> (
//                 <div className={`${msg.sender !== "User-ONE" ? "messagesLeft" : "messagesRight"}`}>    
//                     <h6>{msg.text}</h6>
//                  </div>
//             ))}
//             </div>
//           )}
              
//              <div className="inputField">
//                 <input type="text" ref={messageRefOne} placeholder='Message'  onChange={(e) => setTyping(e.target.value.length > 0)}/>
//                 <button onClick={handleSendMessageUserOne}   ><IoIosSend /></button>
//               </div>
//         </div>

//         {/* user Two Display */}
//         <div className="userTwoDisplay" >
//           <ScreenNavbar name="Varun" />
//           {messages.length === 0 
//           ? (<DefualtMessage />) 
//            : (
//              <div className="messages">
//             {messages.map((msg , index)=>(
//                   <div className={`${msg.sender !== "User-TWO" ? "messagesLeft" : "messagesRight"}`}>
//                      <h6>{msg.text}</h6>
//                   </div>
//             ))}
//             </div>
//            )}

//             <div className="inputField">
//                 <input type="text" placeholder='Message' ref={messageRefTwo}/>
//                 <button onClick={handleSendMessageUserTwo}><IoIosSend /></button>
//             </div>
//         </div>

    
//     </div>
//   )
// }

// export default ChatApp
