# Chatbot Components Implementation

## Overview
This step involved building the core UI components for the chatbot: the message bubbles and the main chatbot interface.

## Actions Taken

### 1. MessageBubble Component (`src/components/MessageBubble.jsx`)
Created a reusable component to display individual chat messages.
- **Props**: Accepts a `message` object containing `text`, `sender`, and `timestamp`.
- **Styling**:
    - Differentiates between 'user' and 'bot' messages using conditional classes.
    - **User Messages**: Aligned right, `bg-primary` (Indigo), white text, rounded corners (except bottom-right).
    - **Bot Messages**: Aligned left, white background, gray text, border, rounded corners (except bottom-left).
    - Added a fade-in animation (`animate-fade-in-up`).
    - Displays timestamp with appropriate styling.

### 2. Chatbot Component (`src/components/Chatbot.jsx`)
Implemented the main chatbot container and logic.

#### State Management
- `messages`: Array of message objects. Initialized with a welcome message.
- `inputText`: State for the current input field value.
- `isTyping`: Boolean state to control the visibility of the typing indicator.

#### Features & Logic
- **Auto-scroll**: Uses a `useRef` (`messagesEndRef`) and `useEffect` to automatically scroll to the bottom whenever messages change or typing status changes.
- **Message Handling**:
    - `handleSend`: Adds the user's message to the state immediately.
    - Clears input and sets `isTyping` to true.
    - Simulates a network delay (random between 700ms and 1200ms).
    - Adds a dummy bot response after the delay and resets `isTyping`.

#### UI Structure
- **Header**:
    - Displays bot avatar (icon), name ("AI Assistant"), and online status indicator.
    - Includes a settings/options button (visual only).
- **Messages Area**:
    - Scrollable container with a custom background pattern.
    - Renders the list of `MessageBubble` components.
    - Displays a typing indicator (animated dots) when `isTyping` is true.
- **Input Area**:
    - Fixed at the bottom.
    - Contains a text input and a send button with an icon.
    - Send button is disabled when input is empty.
    - styled with focus rings and shadows for a premium feel.
