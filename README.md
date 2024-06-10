Brieffing:
Create a chatbot window

Framework: Vue 3.0;

Requisites:
- The messages from the chatbot must be different from the user ones, positioning them right and left its the easiest way to fullfill this one
- The image and the name of the chatbot must appear so that the user knows at all times who they are talking to.
- The chat window must have a drop-down menu to select options such as forgetting user data, changing the language or accessing the privacy policy.

- Implement:
    - Image-card messages
    - Chat Buttons
    - Other kind of messages or enhancements you want to implement and think would be a nice implementation

- The design does not have to be super sophisticated, but it must at least responsive and full-screen on mobile phones.



🔨 TOOLS 🔨

- Vite
- Vue
- Vuex
- Vitest
- Swiper
- Prettier
- Sass


🧩 COMPONENTS 

Component has TWO status: 

    1. Minimized
    2. Showing
    

1. Minimized chatbot container ✔

    - Call to action button ✔
        - Close Cto button

    - Show chatbot button ✔
        - Bot image

    - Close chatbot button ✔

2. Showing chatbot container ✔

    - Topbar ✔
        1. Minimize window button ✔
        2. Maximize window button ✔
        3. Botprofile ✔
            - botName
            - botImage

    - Dropdown Menu ✔
        1. Toggle dropdown button
        2. Dropdown menu item

    - Chat ✔
        - Messages ✔
            1. user message
            2. bot message
            3. image card message
                - image 
                - text 
                - link button 
                - swiper carousel
            4. writting message

        - Chat options carousel ✔
            2. swiper
            1. option button
            3. swiper navigation buttons

        - Chat input ✔
            1. input message text
            2. send message button
                - disabled & enabled state

    - Footer ✔


⌨ FUNCTIONS ⌨

- Close Cto ✔
    - Setting a countback
    - Showing chatbot window

- Showing Cto only on first visit ✔
    - Check if there's a session storaged

- Toggle Chatbot Window Status ✔
    - Four status:
        1. Minimized
        2. ToShowing
        3. Showing
        4. ToMinimized

- Close Chatbot ✔

- Send messages ✔
    - User message ✔
        - Write
        - Send
        - Process message
        - Display message

    - Processing bot response when user sends a message ✔
        - Turn is processing to TRUE
        - Choose randomly a response from responses array
        - Turn is processing to FALSE
        - Push response into messages log
        - Displays response

    - Writing message ✔
        - Showing component while response is processing 

    - Send chat option as user message

- Scrolling down the chat ✔
    - On new message
    - On showing chatbot window

- Toggle Dropdown ✔
    - Toggles ON and OFF when clicking button

    - Toggle OFF on:
        1. Mouse leaving
        2. Clicking out
        3. Clicking dropdown menu item

- Fullscreen Chatbot window ✔
    - Quitting fullscreen on minimizing chatbot window
    
- Try it with Vuex ✔

- Close Chatbot ✔


🧪 TESTING 🧪

- Try some components with Vitest for learning purposes 

    Install:

    - Vitest
    - Vue-Utils
    - Happy DOM
    
    Test:

    - Send message button
    - Chat
    - Store.js


🔴 PROBLEMS FOUNDED 🔴

- Styling Swiper Element.
    1. Tried to inject style (didn't work)
    2. Overrided style by:
        - style attribute
        - appending a child to shadowRoot element

- Find better solution ✍


📗 What I've learned 📗
    - Some Vue
    - Some Vuex
    - Testing a bit with Vitest
    