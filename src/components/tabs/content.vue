<script>
export default {
    name:"Content",
    props:{
      showContent:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
    render(){
      return(
        <div>
          {
            this.showContent.map((element,index)=>{
              return <div>{element.isActive?element.$slots.default:''}</div>
            })
          }
        </div>
      )
    }
}
</script>
