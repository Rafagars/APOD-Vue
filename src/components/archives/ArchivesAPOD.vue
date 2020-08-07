<template>
    <div>
        <APOD :date="new Date(date)"/>
    </div>
</template>

<script>
import APOD from "../APOD.vue";
export default {
    name: "ArchivesAPOD",
    components: {
        APOD
    },
    data: () => ({
        date: null,
    }),
    created(){
		this.date = `${this.$route.params.year}-${this.$route.params.month}-${this.$route.params.day}`
    }
}
</script>

<style scoped>

</style>