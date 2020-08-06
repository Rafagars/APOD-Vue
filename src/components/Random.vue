<template>    
    <div class="container text-center" v-if="result">
		<h1> Astronomy Picture of the Day </h1>
		<p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </p>
        <h2>{{result[0].title}}</h2>
        <h5>{{result[0].date}}</h5>
        <div v-if="result[0].media_type === 'image'">
            <a :href=result[0].url >
                <img :src=result[0].url >
            </a>
        </div>
        <div v-else-if="result[0].media_type === 'video'" class="embed-responsive embed-responsive-16by9">
			<iframe :title=result[0].title class="embed-responsive-item" :src=result[0].url ></iframe>
		</div>
        <div v-else>
            <a :href=result.apod_site > Click Here </a>
        </div>
        <h6>{{result[0].copyright}}</h6>
        <br>
        <p>{{result[0].description}}</p>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'Random',
    data: () => ({
        result: null
    }),
    created(){
        axios.get("https://apodapi.herokuapp.com/api/?count=1").then((result) => {
            this.result = result.data;
        })
        console.log(this.result);
    }

}
</script>

<style scoped>
img{
    width: 85%;
}
</style>