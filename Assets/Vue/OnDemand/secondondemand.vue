<template>
    <div>
        <p>This is another test vue component, which is loaded on demand when you want it.</p>
        <p>Button has been clicked <span v-html="clicked"></span> times.</p>
    </div>
</template>

<script>
    export default {
        name: 'secondondemand',
        computed: {
            clicked() {
                return this.$store.getters.clicked
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    p{font-size:14px;color:#fff;background:#000;}
</style>