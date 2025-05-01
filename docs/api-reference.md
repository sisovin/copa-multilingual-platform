# API Reference

## Authentication

### POST /auth/login

- **Description**: User login
- **Request Body**: 
  - `username` (string): The username of the user
  - `password` (string): The password of the user
- **Response**: 
  - `accessToken` (string): The JWT access token

### POST /auth/register

- **Description**: User registration
- **Request Body**: 
  - `username` (string): The username of the user
  - `password` (string): The password of the user
- **Response**: 
  - `id` (number): The ID of the registered user
  - `username` (string): The username of the registered user

## Interview

### GET /interview/tech-prompt

- **Description**: Get a technical interview prompt
- **Response**: 
  - `prompt` (string): The technical interview prompt

### GET /interview/behavioral-prompt

- **Description**: Get a behavioral interview prompt
- **Response**: 
  - `prompt` (string): The behavioral interview prompt

### POST /interview/evaluate

- **Description**: Evaluate an interview response
- **Request Body**: 
  - `response` (string): The interview response to be evaluated
- **Response**: 
  - `evaluation` (string): The evaluation of the interview response

## Video

### POST /video/peer-connection

- **Description**: Create a new peer connection
- **Request Body**: 
  - `createPeerConnectionDto` (object): The DTO for creating a peer connection
- **Response**: 
  - `id` (string): The ID of the created peer connection
  - `peerConnection` (object): The created peer connection

### GET /video/peer-connection/:id

- **Description**: Get an existing peer connection by ID
- **Parameters**: 
  - `id` (string): The ID of the peer connection
- **Response**: 
  - `peerConnection` (object): The retrieved peer connection

## Voice

### POST /voice/transcribe

- **Description**: Transcribe audio file
- **Request Body**: 
  - `audioFile` (string, binary): The audio file to be transcribed
- **Response**: 
  - `transcription` (string): The transcription of the audio file

### POST /voice/synthesize

- **Description**: Synthesize speech from text
- **Request Body**: 
  - `text` (string): The text to be synthesized
  - `voice` (string): The voice to be used for synthesis
- **Response**: 
  - `speech` (string, binary): The synthesized speech
