<template>
  <div class="home">
    <LogInHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LogInHeader from '@/components/LogInHeader.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LogInHeader
  }
}
</script>
