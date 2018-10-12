<template>
  <div class="sc-message--text" :style="messageColors">
    <p class="message-body" v-html="messageText"></p>
    <p v-if="data.meta" class='message-body sc-message--meta' :style="{color: messageColors.color}">{{data.meta}}</p>
  </div>
</template>

<script>
import escapeGoat from 'escape-goat'
import Autolinker from 'autolinker'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  },
  computed: {
    messageText() {
      return Autolinker.link(escapeGoat.escape(this.data.text), {
        className: 'chatLink',
        truncate: { length: 50, location: 'smart' }
      })
    }
  }
}
</script>

<style scoped>
a.chatLink {
  color: inherit !important;
}

.message-body {
  margin: 3px auto
}
</style>
