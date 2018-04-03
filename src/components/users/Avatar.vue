<template>
  
  <div>
      <img :class="imageClass" :src="user.avatar"/>
      <div class="" v-if="showName">
        <span>{{user.display_name}}</span>
        <span>{{user.display_name_extension}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props: {
      user: {
          type: Object,
          required: true
      },
      includeName: {
          type: Boolean,
          required: false,
          default: true
      },
      size: {
          type: String,
          default: "small",
          validator: function (value) {
            return ['tiny', 'small', 'regular'].indexOf(value) !== -1
          }
      }
  },

  computed: {
      imageClass: function() {
          return this.size + " avatar";
      },
      showName: function() {
          return this.size != 'tiny' && this.includeName;
      }
  }
}
</script>

<style scoped>
.avatar {
  border-radius: 100%;
}

.avatar.small {
    width: 50px;
    height: 50px;
}

.avatar.regular {
    width: 100px;
    height: 100px;
}
</style>

