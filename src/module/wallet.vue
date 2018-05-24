<template>
  <div class="hello">
    錢包
    <BaseButton>btn</BaseButton>
  </div>
</template>

<script>
import BaseButton from '../components/baseButton'
export default {
  name: 'Wallet',
  components:{
    BaseButton
  },
  data () {
    return {
        title:'标题'
    }
  },
  methods:{

  }
}
</script>

