<template>
  <Header />
  <router-view/>
      <div>

      </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import Header from '@/components/Header.vue'
  
  export default {
    name: 'Home',
    components: {
      Header
    }
  }
  </script>
 <script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>