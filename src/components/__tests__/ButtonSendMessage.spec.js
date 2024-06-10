import { mount } from "@vue/test-utils";
import Vuex from "vuex";
import ButtonSendMessage from "../buttons/ButtonSendMessage.vue";
import IconSend from "../icons/IconSend.vue";

describe("ButtonSendMessage", () => {
  let state = {
    currentUserMessage: {
      content: "",
    },
  };

  let actions = {
    processUserMessage: vi.fn(),
  };

  let store = new Vuex.Store({
    state: state,
    actions: actions,
  });

  it("renders properly", () => {
    const wrapper = mount(ButtonSendMessage, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find(".btn--send-message").exists()).toBe(true);
    expect(wrapper.findComponent(IconSend).exists()).toBe(true);
  });

  it("button is disabled when currentUserMessage.content is empty", () => {
    const wrapper = mount(ButtonSendMessage, {
      global: {
        plugins: [store],
      },
    });

    const button = wrapper.find(".btn--send-message");

    expect(button.attributes("disabled")).toBeDefined();
  });

  it("button is not disabled when currentUserMessage.content has content", () => {
    state.currentUserMessage.content = "random user message content";

    const wrapper = mount(ButtonSendMessage, {
      global: {
        plugins: [store],
      },
    });

    const button = wrapper.find(".btn--send-message");
    expect(button.attributes("disabled")).toBeUndefined();
  });

  it("button dispatches processUserMessage action on clicking", () => {
    state.currentUserMessage.content = "random user message content";

    const wrapper = mount(ButtonSendMessage, {
      global: {
        plugins: [store],
      },
    });

    const button = wrapper.find(".btn--send-message");

    button.trigger("click");
    expect(actions.processUserMessage).toHaveBeenCalled();
  });
});
