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
        <nav class="text-center">
            <button @click="prev()">Prev</button>
            <button @click="next()">Next</button>
        </nav>
    </div>
</template>

<script>
import axios from "axios";
const date = new Date();
export default {
    name: 'APOD',
    data: () => ({
        result: null
    }),
    methods: {
        apodFetch() {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate()
            console.log(`Date: ${date}; Year: ${year}, Month: ${month}, Day: ${day}`);
         
            let url = `https://apodapi.herokuapp.com/api/?date=${year}-${month}-${day}`;
            console.log(`Url: ${url}`);
            axios.get(url).then((result) => {
                this.result = result.data;
            })
            console.log(this.result);
        },
        prev() {
            date.setDate(date.getDate() - 1);
            this.apodFetch()   
        },
        next()  {
            date.setDate(date.getDate() + 1);
            this.apodFetch();
        }
    }, 
    created() {
        this.apodFetch();
    }
}
</script>

<style scoped>
img{
    width: 85%;
}
</style>