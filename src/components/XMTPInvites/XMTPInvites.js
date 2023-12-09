// import {
//   getAddress,
//   getSigner,
// } from '../../backendConnector/ConnectWallet/connectWallet';
// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { Card, CardBody, Col, Container, Row } from 'reactstrap';
// import { Client } from '@xmtp/xmtp-js';
// import { useSendMessage, useStartConversation } from '@xmtp/react-sdk';

// const BOT_ADDRESS = '0x937C0d4a6294cdfa575de17382c7076b579DC176';

// const XMTPInvites = () => {
//   const [messages, setMessages] = useState(null);
//   const convRef = useRef(null);
//   const clientRef = useRef(null);
//   const [address, setAddress] = useState('');
//   const [signer, setSigner] = useState('');
//   const isConnected = !!signer;
//   const [isOnNetwork, setIsOnNetwork] = useState(false);
//   const [showContactsList, setShowContactList] = useState(false);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [peerAddress, setPeerAddress] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   const { sendMessage } = useSendMessage();
//   const { startConversation } = useStartConversation();

//   const newConversation = async function (xmtp_client, addressTo) {
//     if (await xmtp_client?.canMessage(addressTo)) {
//       const conversation = await xmtp_client.conversations.newConversation(
//         addressTo
//       );
//       convRef.current = conversation;
//       const messages = await conversation.messages();
//       setMessages(messages);
//     } else {
//       alert(
//         "The contact you searched for can't be messaged because they are not on the xmtp network."
//       );
//     }
//   };

//   const initXmtp = async function () {
//     const startConvo = async (contactToInit) => {
//       const xmtp = await Client.create(signer, { env: 'production' });
//       newConversation(xmtp, contactToInit.address);
//       setIsOnNetwork(!!xmtp.address);
//       clientRef.current = xmtp;
//     };

//     if (selectedContact) {
//       startConvo(selectedContact);
//     } else {
//       startConvo({ address: BOT_ADDRESS });
//     }
//   };

//   useEffect(async () => {
//     const addressFromMetaMask = await getAddress();
//     setAddress(addressFromMetaMask);
//   }, []);

//   useEffect(async () => {
//     const signerFromFunction = await getSigner();
//     setSigner(signerFromFunction);
//   }, []);

//   useEffect(() => {
//     const startConvo = async () => {
//       const xmtp = await Client.create(signer, { env: 'production' });
//       newConversation(xmtp, selectedContact.address);
//       setIsOnNetwork(!!xmtp.address);
//       clientRef.current = xmtp;
//     };

//     if (selectedContact) {
//       startConvo();
//     }
//   }, []);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (peerAddress) {
//       console.log('first');
//       try {
//         const conversation = await startConversation(
//           peerAddress,
//           'Hello Conversation'
//         );
//         console.log('conversation', conversation);
//         let res = await sendMessage(conversation, 'Hello Dev');
//         console.log('res', res);
//       } catch (err) {
//         console.log('err', err);
//       }
//     }
//   };

//   console.log('isConnected', isConnected)
//   console.log('!isOnNetwork', !isOnNetwork)

//   return (
//     <>
//       <Container className="mt-3">
//         <Row className="justify-content-center mt-3">
//           <Col md="6" className="mt-3">
//             <Card className="free-trial-card">
//               <h5>
//                 Connect to XMTP Send Invites Friends to get free prompts call
//               </h5>
//               {isConnected && !isOnNetwork ? (
//                 <>
//                   <button onClick={initXmtp}>Connect to XMTP</button>
//                 </>
//               ) : (
//                 <>
//                   <input
//                     name="addressInput"
//                     type="text"
//                     onChange={(e) => setPeerAddress(e.target.value)}
//                     disabled={isSending}
//                   />
//                   <button onClick={handleSendMessage}>Invite</button>
//                 </>
//               )}
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default XMTPInvites;

import React from 'react'

const XMTPInvites = () => {
  return (
    <div>XMTPInvites</div>
  )
}

export default XMTPInvites


