import { io } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Adaptați la portul pe care rulează serverul Node.js

export default socket;
export const socketEvents = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message',
  JOIN_ROOM: 'joinRoom',
  LEAVE_ROOM: 'leaveRoom',
  START_GAME: 'startGame',
  END_GAME: 'endGame',
  SEND_QUESTION: 'sendQuestion',
  ANSWER_QUESTION: 'answerQuestion',
  GAME_RESULT: 'gameResult'
};
export const socketEmitEvents = {
  JOIN_ROOM: 'joinRoom',
  LEAVE_ROOM: 'leaveRoom',
  START_GAME: 'startGame',
  SEND_QUESTION: 'sendQuestion',
  ANSWER_QUESTION: 'answerQuestion'
};