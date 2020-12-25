<template>
    <div class=" text-center" v-if="result">
		<h1> Astronomy Picture of the Day </h1>
		<p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer. </p>
        <h2>{{result.title}}</h2>
        <h5>{{result.date}}</h5>
        <div class="flex">
            <button id="prev" class="btn bg-transparent col-flex" @click="prev()"> &lt; </button>
            <div v-if="result.media_type === 'image'" class="col-flex">
                <a :href=result.url >
                    <img :src=result.url :alt=result.title >
                </a>
            </div>
            <div v-else-if="result.media_type === 'video'" class="embed-responsive embed-responsive-16by9 col-flex">
                <iframe :title=result.title class="embed-responsive-item" :src=result.url ></iframe>
            </div>
            <div v-else class="col-flex">
                <a :href=result.apod_site > Click Here </a>
            </div>
            <button id="next" class="btn bg-transparent col-flex" @click="next()"> &gt; </button>
        </div> 
        <h6>{{result.copyright}}</h6>
        <br>
        <p class="container">{{result.description}}</p>
    </div>
</template>

<script>
import axios from "axios";
const max = new Date();
console.log(`Max: ${max}`);
const min = new Date('1995-06-20');
console.log(`Min: ${min}`);
export default {
    name: 'APOD',
    props: {
        date: {
            type: Date,
            default: function () { return new Date() }
        }
    },
    data: () => ({
        result: null
    }),
    methods: {
        apodFetch() {
            let year = this.date.getFullYear();
            let month = this.date.getMonth() + 1;
            let day = this.date.getUTCDate();
            console.log(`Date: ${this.date}; Year: ${year}, Month: ${month}, Day: ${day}`);
         
            let url = `https://apodapi.herokuapp.com/api/?date=${year}-${month}-${day}`;
            console.log(`Url: ${url}`);
            axios.get(url).then((result) => {
                this.result = result.data;
            })
            console.log(this.result);
        },
        prev() {
            if( this.date.getDate() !== min.getDate() ){
                this.date.setDate(this.date.getDate() - 1);
            }
            this.apodFetch();   
        },
        next()  {
            if( this.date.getDate() !== max.getDate() ){
               this.date.setDate(this.date.getDate() + 1);
            }
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
.flex{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.col-flex{
    font-size: 2em;
    color: white;
}

</style>