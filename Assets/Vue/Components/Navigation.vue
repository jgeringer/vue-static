<template>
    <nav>
        <router-link :to="route.path" v-for="route in routes" :key="route.path">
            {{route.name}}
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            routes: this.$router.options.routes
        }
    }
}
</script>
