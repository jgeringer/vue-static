<template>
    <div>
        <p>This is a test vue component, which is part of the initial build process.</p>
        <button @click="buttonClick">Click to count up store variable</button>
    </div>
</template>

<script>
    export default {
        name: 'first',
        methods: {
            buttonClick() {
                this.$store.commit('clickUp')
            }
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
    p{font-size:16px;color:#fff;background:#000;}
</style>