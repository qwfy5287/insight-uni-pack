<script>
// https://github.com/TuiMao233/uni-composition-api
import { onLaunch, onShow, onHide } from 'uni-composition-api'
import { defineComponent } from '@vue/composition-api'

// 嵌套 defineComponent 可能会引起问题 待确认
export default defineComponent({
  setup() {
    onLaunch((...args) => {
      console.log('🚀 ~ file: App.vue ~ line 8 ~ onLaunch ~ args', args)
    })
    onShow((...args) => {
      console.log('🚀 ~ file: App.vue ~ line 11 ~ onShow ~ args', args)
    })
    onHide((...args) => {
      console.log('🚀 ~ file: App.vue ~ line 15 ~ onHide ~ args', args)
    })
  },
  // onLaunch: function() {
  //   console.log('App Launch')
  // },
  // onShow: function() {
  //   console.log('App Show')
  // },
  // onHide: function() {
  //   console.log('App Hide')
  // },
})
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';
/*每个页面公共css */
</style>
