<template>
    <div class="container text-center">
        <h1>Archives</h1>
        <div class="flexs">
            <div class="flex" v-for="(year, i) in years" :key=i>
                <router-link :to="{ path: '/archives/' + year }"><h3>{{year}}</h3></router-link>
            </div>
        </div>
    </div>
</template>

<script>
const date = new Date();
const thisYear = date.getFullYear();
const years = Array.from(Array((thisYear + 1) - 1995), (_, i) => i + 1995)
export default {
    name: 'Years',
    data: () => ({
        years: years
    })
}
</script>

<style scoped>
.flexs{
    display: flex;
    flex-wrap: wrap;
}
.flex{
    flex: 1 0 20%;
    height: 100px;
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