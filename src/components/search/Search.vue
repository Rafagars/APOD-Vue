<template>
    <div>
        <h1>Search: {{$route.query.q}} </h1>
        <div v-if="result" class="flexs">
            <div v-for="(item, i) in result" :key=i class="search-flex">
                <a href="" @click="redirect(item.date)" ><h2>{{item.title}}</h2></a>
                <h6>{{item.date}}</h6>
                <div v-if="item.media_type === 'image'">
                    <a :href="item.url"><img :src="item.url" :alt="item.title" ></a>
                </div>
                <div v-else>
                    <a :href="item.apod_site">Click Here </a>
                </div>
            </div>
        </div>
        <nav class="text-center">
            <button class="btn btn-dark" @click="prev()">Prev</button>
            <router-link to="/archives">Archives</router-link>
            <button class="btn btn-dark" @click="next()">Next</button>
        </nav>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Search",
    data: () => ({
        result: null
    }),
    props: {
        query:  {
            type: String,
            default: ''
        },
        page: {
            type: Number,
            default: 1
        }
    },
    methods: {
        searchFecth(){
            const url = `https://apodapi.herokuapp.com/search/?search_query=${this.query}&number=10&page=${this.page}`;
            console.log(`Url: ${url}`);
            axios.get(url).then((result) => {
                this.result = result.data;
            })
            console.log(this.result);
        },
        next(){
            this.page += 1;
            this.searchFecth();
        },
        prev(){
            if(this.page != 1){
                this.page -= 1;
            }
            this.searchFecth();
        },
        redirect(date){
            const apod = new Date(date)
            this.$router.push({ path: `/archives/${apod.getFullYear()}/${apod.getMonth() + 1}/${apod.getDate()}` });
        }
    },
    created(){
        this.searchFecth();
    }
    
}
</script>
<style scoped>
a{
    color: white;
    text-decoration: none;
}
a:hover{
    color: gray;
}
.flexs {
	display: flex;
	flex-wrap: wrap;
}

.search-flex {
	flex: 1 0 20%;
	margin: 10px;
    padding: 25px;
}
.search-flex img{
    width: 65%;
}

</style>