export const botProfileData = {
    imgUrl: "../../public/images/chabot-pfp.gif",
    name: "Millie"
};
export const dropdownMenuOptionsData = [
    {text: "Forget user data"},
    {text: "Change language"},
    {text: "Access the privacy policy"}
];
export const chatOptionsList = [
    {content: "Qué es un chatbot"},
    {content: "Para qué sirve"},
    {content: "Qué es 1millionbot"},
    {content: "Qué es una IA"}
];
export const botResponsesData = [
    {
        type: "default",
        content: "random response from chatbot"
    },
    {
        type: "default",
        content: "another random response"
    },
    
    {
        type: "imageCard",
        content: [
            {
                imgUrl: "public/images/article-image.webp",
                title: "article title",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                articleUrl: "https://placehold.jp/150x150.png"
            },
            {
                imgUrl: "public/images/article-image.webp",
                title: "article title",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                articleUrl: "https://placehold.jp/150x150.png"
            },
            {
                imgUrl: "public/images/article-image.webp",
                title: "article title",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
                articleUrl: "https://placehold.jp/150x150.png"
            },
        ]
    }
];

/*** COMPONENTS ***/
// Icons
export {default as IconClose} from '../components/icons/IconClose.vue';
export {default as IconMenu} from '../components/icons/IconMenu.vue';
export {default as IconMinimize} from '../components/icons/IconMinimize.vue';
export {default as IconSend} from '../components/icons/IconSend.vue';
export {default as IconFullscreen} from '../components/icons/IconFullscreen.vue';
export {default as IconFullscreenOff} from '../components/icons/IconFullscreenOff.vue';

// Buttons
export {default as ButtonCloseCto} from '../components/buttons/ButtonCloseCto.vue';
export {default as ButtonCloseChat} from '../components/buttons/ButtonCloseChat.vue';
export {default as ButtonMinimizeChat} from '../components/buttons/ButtonMinimizeChat.vue';
export {default as ButtonToggleDropdown} from '../components/buttons/ButtonToggleDropdown.vue';
export {default as ButtonDropdownMenuItem} from '../components/buttons/ButtonDropdownMenuItem.vue';
export {default as ButtonSendMessage} from '../components/buttons/ButtonSendMessage.vue';
export {default as ButtonShowChat} from '../components/buttons/ButtonShowChat.vue';
export {default as ButtonFullscreen} from '../components/buttons/ButtonFullscreen.vue';
export {default as ButtonChatOption} from '../components/buttons/ButtonChatOption.vue';

// Messages
export {default as MessageWriting} from '../components/messages/MessageWriting.vue';
export {default as MessageDefault} from '../components/messages/MessageDefault.vue';
export {default as MessageImageCard} from '../components/messages/MessageImageCard.vue';

// Chat window
export {default as Cto} from '../components/cto/Cto.vue';
export {default as DropdownMenu} from '../components/dropdownMenu/DropdownMenu.vue';
export {default as TopBar} from '../components/topBar/TopBar.vue';
export {default as Chat} from '../components/chat/Chat.vue';
export {default as ChatFooter} from '../components/chatFooter/ChatFooter.vue';
export {default as ChatInput} from '../components/chatInput/ChatInput.vue';
export {default as ChatOptionsCarousel} from '../components/chatOptionsCarousel/ChatOptionsCarousel.vue';




  