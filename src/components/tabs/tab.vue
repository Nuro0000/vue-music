<script>
export default {
  name: 'tab',
  props: {
    label: {
      type: String,
      default: 'tab'
    },
    index: {
      type: String,
      default: '1'
    }
  },
  computed: {
    isActive () {
      return this.$parent.activeKey == this.index;
    }
  },
  methods: {
    clickHandle () {
      this.$parent.activeKey = this.index;
    }
  },
  mounted(){
    this.$parent.showContent.push(this);  //将整个实例push给父级->Content
  },
  render () {
    const classStyle = {
      tab: true,
      active: this.isActive
    };
    return (
      <li onclick={this.clickHandle} class={classStyle}>{this.label}</li>
    )
  }
}
</script>

<style scoped>
.tab {
  flex: 1;
  list-style: none;
  line-height: 40px;
  margin: 0 15px;
  position: relative;
  text-align: center;
}

.tab.active {
  border-bottom: 2px solid blue;
}
</style>
