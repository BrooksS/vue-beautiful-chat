<template>
  <div v-if="isOpen" class="sc-chat-window">
    <Header
      :title="title"
      :imageUrl="titleImageUrl"
      :onClose="onClose"
      :colors="colors"
      @userList="handleUserListToggle"
    />
    <UserList
      v-if="showUserList"
      :participants="participants"
    />
    <MessageList
      v-if="!showUserList"
      :messages="messages"
      :participants="participants"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
    />
    <UserInput
      v-if="!showUserList"
      :showEmoji="showEmoji"
      :onSubmit="onUserInputSubmit"
      :showFile="showFile"
      :placeholder="placeholder"
      :colors="colors" />
  </div>
</template>

<script>
import Header from './Header.vue'
import MessageList from './MessageList.vue'
import UserInput from './UserInput.vue'
import UserList from './UserList.vue'

export default {
  components: {
    Header,
    MessageList,
    UserInput,
    UserList
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    showFile: {
      type: Boolean,
      default: false
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    titleImageUrl: {
      type: String,
      default: ''
    },
    onUserInputSubmit: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: 'Write a reply'
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      showUserList: false
    }
  },
  computed: {
    messages() {
      let messages = this.messageList

      return messages
    }
  },
  methods: {
    handleUserListToggle(showUserList) {
      this.showUserList = showUserList
    }
  }
}
</script>
<style scoped>
.sc-chat-window {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s ease-in-out;
  font-family: 'Lato', sans-serif;
}

.sc-message--me {
  text-align: right;
}

.sc-message--them {
  text-align: left;
}
</style>
