<template>
    <div>
        <header id="header-nav" class="navbar">
            <router-link to="/" ><h1><img id="logo-img" />APOD NASA </h1></router-link>
            <router-link to="/" class="nav-link nav-item">Home</router-link>
            <router-link to="/archives" class="nav-link nav-item">Archives</router-link>
            <router-link to="/random" class="nav-link nav-item">Random</router-link>
            <form action="/search" @submit="search" >
                <input id="searchForm"  type="text" name="q" placeholder="Search..." class="form-control">
            </form>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        search(event){
            event.preventDefault();
            const form = document.getElementById('searchForm');
            console.log(form.value);
            this.$router.push({ name: 'Search', query: {q : form.value } });
        }
    }
}
</script>

<style scoped>
#logo-img {
    width: 100px;
    content: url("../assets/nasa.png");
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