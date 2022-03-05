<script>
import Content from './content.vue'
export default {
  name: 'tabs',
  //props不能直接被改变
  props:{
    defaultActiveKey:{
      type:String,
      default:''
    }
  },
  components:{
    Content
  },
  data(){
    return{
      activeKey:'1',
      showContent:[]
    }
  },
  mounted(){
    if(this.defaultActiveKey){
      this.activeKey = this.defaultActiveKey;
    }
  },
  render () {
    return (
      <div>
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <Content showContent={this.showContent}/>
      </div>
    )
  }
}
</script>

<style scoped>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>