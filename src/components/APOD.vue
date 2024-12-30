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
        <p class="container">{{result.explanation}}</p>
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
            default: function () { return null }
        }
    },
    data: () => ({
        result: null
    }),
    methods: {
        apodFetch() {
            let year, month, day;
            let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_API}`;
            if (this.date !== null){
                year = this.date.getFullYear();
                month = this.date.getMonth() + 1;
                day = this.date.getUTCDate();
                url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_API}&date=${year}-${month}-${day}`;
            }
            axios.get(url).then((result) => {
                this.result = result.data;
            })
        },
        arrowButton(instruction) {
            this.date = new Date(this.result.date);
            if( instruction === 'prev' && this.date.getUTCDate() !== min.getUTCDate() ){
                this.date.setDate(this.date.getUTCDate() - 2);
            } else if(instruction === 'next' && this.date.getUTCDate() !== max.getUTCDate() ){
               this.date.setDate(this.date.getUTCDate());
            }
            this.$router.push({name: 'ArchivesAPOD', params: { year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getUTCDate()  }})
            location.reload()   
        },
    }, 
    created() {
        this.apodFetch();
    }
}
</script>

<style scoped>
.flex{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.bg-transparent{
    font-size: 2em;
    color: white;
}
img{
    width: 75%
}
.container{
    background-color: rgba(45, 45, 45, 0.65);
    border: 10px solid#23272a;

}
</style>