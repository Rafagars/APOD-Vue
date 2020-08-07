<template>
    <div class="container text-center">
        <h1>Archives - {{ $route.params.year }}</h1>
        <div class="flexs">
            <div class="flex" v-for="(month, i) in months" :key=i>
                <router-link :to="{ path: '/archives/' + $route.params.year + '/' + month }">
                    <h3>{{month}}</h3>
                    <h4>{{monthsName[i]}}</h4>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
const date = new Date();
const thisYear = date.getFullYear();
const months = []
const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
export default {
    name: 'Months',
    data: () => ({
        months: months,
        monthsName: monthNames
    }),
    methods: {
        setMonths(){
            if (this.$route.params.year == thisYear){
                this.months = Array.from(Array((date.getMonth()) + 1), (_, i) => i + 1) 
            }else if (this.$route.params.year == 1995 ){
                this.months = Array.from(Array(12 - 5), (_, i) => i + 6) 
            } else {
                this.months = Array.from(Array(12), (_, i) => i + 1)
            }
            console.log(`Year: ${this.$route.params.year}`)
        }
    },
    created(){
        this.setMonths();
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