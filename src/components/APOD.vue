<template>
    <div class="container text-center" v-if="result">
		<h1> Astronomy Picture of the Day </h1>
		<p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </p>
        <h2>{{result.title}}</h2>
        <h5>{{result.date}}</h5>
        <div v-if="result.media_type === 'image'">
            <a :href=result.url >
                <img :src=result.url >
            </a>
        </div>
        <div v-else-if="result.media_type === 'video'" class="embed-responsive embed-responsive-16by9">
			<iframe :title=result.title class="embed-responsive-item" :src=result.url ></iframe>
		</div>
        <div v-else>
            <a :href=result.apod_site > Click Here </a>
        </div>
        <h6>{{result.copyright}}</h6>
        <br>
        <p>{{result.description}}</p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: 'APOD',
    data: () => ({
        result: null
    }),
    created() {
        axios.get("https://apodapi.herokuapp.com/api/").then((result) => {
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