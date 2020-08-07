<template>
    <div class="container text-center">
        <h1>Archives - {{$route.params.month}}/{{$route.params.year}}</h1>
        <div class="flexs">
            <div class="flex" v-for="(day, i) in days" :key=i>
                <router-link :to="{ path: '/archives/' + $route.params.year + '/' + $route.params.month + '/' + day }">
                    <h3>{{day}}</h3>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
const date = new Date();
const thisYear = date.getFullYear();
const days = []

export default {
    name: 'Months',
    data: () => ({
        days: days
       
    }),
    methods: {
        setDays(){
            let numOfDays = new Date(this.$route.params.year, this.$route.params.month, 0).getDate()
            numOfDays = parseInt(numOfDays.toString())
            console.log(numOfDays);
            if(this.$route.params.year == 1995 && this.$route.params.month == 6){
                this.days = Array.from(Array(11), (_, i) => i + 20);
                console.log("1995")
            } else if(this.$route.params.year == thisYear && this.$route.params.month == (date.getMonth() + 1)) {
                this.days = Array.from(Array(date.getDate()), (_, i) => i + 1);
                console.log(`${thisYear}`)
            } else {
                this.days = Array.from(Array(numOfDays), (_, i) => i + 1);
                console.log("Other")
            }
            console.log(`Year: ${this.$route.params.year} Month: ${this.$route.params.month}`)
        }
    },
    mounted(){
        this.setDays();
    }
}
</script>

<style scoped>
.flexs{
    display: flex;
    flex-wrap: wrap;
}
.flex{
    flex: 1 0 20%;
    height: 120px;
    background-color:#2c2f33;
    border: 2px solid#23272a;
    opacity: 0.9;
	margin: 10px;
	padding: 25px;
}
a, a:hover {
    text-decoration: none;
}
a{
    color: white;
}
a:hover {
    color: gray;
}
</style>