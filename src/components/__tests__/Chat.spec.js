import { mount } from '@vue/test-utils';
import Chat from '../chat/Chat.vue';
import { store } from '../../store/store.js';

describe('Chat', () => {
    it('renders properly', () => {
        const wrapper = mount(Chat, {
            global: {
                plugins: [store],
            },
        });

        expect(wrapper.find('.chat').exists()).toBe(true);
    });

    it('renders all messages in messagesLog', () => {
        const wrapper = mount(Chat, {
            global: {
                plugins: [store],
            },
        });

        const allMessages = wrapper.findAll('.message');
        const messagesLog = store.state.messagesLog;

        expect(allMessages.length).toBe(messagesLog.length);
    });
});
