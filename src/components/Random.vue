<template>    
    <div v-if="result">
        <APOD  :date="new Date(result[0].date)" />
    </div>
</template>
<script>
import axios from "axios";
import APOD from "./APOD.vue";
export default {
    name: 'Random',
    components: {
        APOD
    },
    data: () => ({
        result: null,
    }),
    created(){
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_API}&count=1`).then((result) => {
            this.result = result.data;
        })
    }

}
</script>

<style scoped>
img{
    width: 85%;
}
</style>