<template>
  <div class="user-list">
    <table class="" style="padding-top: 5px">
      <tbody>
        <tr v-for="user in participants" :key="user.id">
            <td style="text-align: center;">
              <img v-if="user.imageUrl" :src="user.imageUrl" class="img-msg"/>
              <div v-else class="no-avatar sc-message--initials">
                {{ initialsFilter(user.name) }}
              </div>
            </td>
            <td>{{user.name}}</td>
        </tr>
      </tbody>
  </table>
  </div>
</template>
<script>
import initials from './filters/initials'
export default {
  props: {
    participants: {
      type: Array,
      required: true
    }
  },
  methods: {
    initialsFilter (name) {
      return initials(name)
    }
  }
}
</script>
<style scoped>
  .user-list {
    height: 100%;
    overflow: auto;
    padding-left: 5px;
    padding-top: 8px;
  }
  .img-msg {
    border-radius: 50%;
    max-width: 50px;
    margin-right: 15px;
    margin: 0 auto;
  }

  .no-avatar {
    height: 40px;
    width: 40px;
    margin: 0 auto;
    font-size: 20px;
  }
</style>
