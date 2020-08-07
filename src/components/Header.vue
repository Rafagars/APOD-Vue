<template>
    <div>
        <header id="header-nav" class="navbar">
            <router-link to="/" ><h1><img id="logo-img" src="../assets/nasa.png"/>APOD NASA </h1></router-link>
            <router-link to="/">Home</router-link>
            <router-link to="/archives" class="nav-link nav-item">Archives</router-link>
            <router-link to="/random" class="nav-link nav-item">Random</router-link>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
#logo-img {
    width: 25%;
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