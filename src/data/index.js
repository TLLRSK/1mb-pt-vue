export const dropdownMenuOptionsData = [
  { text: "Forget user data" },
  { text: "Change language" },
  { text: "Access the privacy policy" },
];
export const chatOptionsList = [
  { content: "Hi" },
  { content: "Does this really work?" },
  { content: "What is this app" },
  { content: "Is this an AI" },
];
export const botResponsesData = [
  {
    type: "default",
    content: "Random response from chatbot",
  },
  {
    type: "default",
    content: "Another kind of random response from chatbot!",
  },
  {
    type: "imageCard",
    content: [
      {
        imgUrl: "https://www.researchgate.net/profile/Alaa-Shabeeb-2/publication/311936981/figure/fig7/AS:444251172544519@1482929141640/Figure-38-Geometric-Schema-of-the-Manipulator.png",
        title: "article title",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
        articleUrl: "https://www.researchgate.net/figure/Figure-38-Geometric-Schema-of-the-Manipulator_fig7_311936981",
      },
      {
        imgUrl: "https://www.mdpi.com/machines/machines-11-00952/article_deploy/html/images/machines-11-00952-g001.png",
        title: "article title",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
        articleUrl: "https://www.mdpi.com/2075-1702/11/10/952",
      },
      {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Albedo_geometrica_-_schema.PNG/724px-Albedo_geometrica_-_schema.PNG?20151001112832",
        title: "article title",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
        articleUrl: "https://commons.wikimedia.org/wiki/File:Albedo_geometrica_-_schema.PNG",
      },
    ],
  },
];

/*** COMPONENTS ***/
// Icons
export { default as IconClose } from "../components/icons/IconClose.vue";
export { default as IconMenu } from "../components/icons/IconMenu.vue";
export { default as IconMinimize } from "../components/icons/IconMinimize.vue";
export { default as IconSend } from "../components/icons/IconSend.vue";
export { default as IconFullscreen } from "../components/icons/IconFullscreen.vue";
export { default as IconFullscreenOff } from "../components/icons/IconFullscreenOff.vue";

// Chatbot Avatar
export { default as ChatbotAvatar } from "../components/ChatbotAvatar/ChatbotAvatar.vue";

// Buttons
export { default as ButtonCloseCto } from "../components/buttons/ButtonCloseCto.vue";
export { default as ButtonCloseChat } from "../components/buttons/ButtonCloseChat.vue";
export { default as ButtonMinimizeChat } from "../components/buttons/ButtonMinimizeChat.vue";
export { default as ButtonToggleDropdown } from "../components/buttons/ButtonToggleDropdown.vue";
export { default as ButtonDropdownMenuItem } from "../components/buttons/ButtonDropdownMenuItem.vue";
export { default as ButtonSendMessage } from "../components/buttons/ButtonSendMessage.vue";
export { default as ButtonShowChat } from "../components/buttons/ButtonShowChat.vue";
export { default as ButtonFullscreen } from "../components/buttons/ButtonFullscreen.vue";
export { default as ButtonChatOption } from "../components/buttons/ButtonChatOption.vue";

// Messages
export { default as MessageWriting } from "../components/messages/MessageWriting.vue";
export { default as MessageDefault } from "../components/messages/MessageDefault.vue";
export { default as MessageImageCard } from "../components/messages/MessageImageCard.vue";

// Chat window
export { default as Cto } from "../components/cto/Cto.vue";
export { default as DropdownMenu } from "../components/dropdownMenu/DropdownMenu.vue";
export { default as TopBar } from "../components/topBar/TopBar.vue";
export { default as Chat } from "../components/chat/Chat.vue";
export { default as ChatFooter } from "../components/chatFooter/ChatFooter.vue";
export { default as ChatInput } from "../components/chatInput/ChatInput.vue";
export { default as ChatOptionsCarousel } from "../components/chatOptionsCarousel/ChatOptionsCarousel.vue";
