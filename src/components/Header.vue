<template>
    <div>
        <header id="header-nav" class="navbar">
            <div>
                <h1><img id="logo-img" src="../assets/nasa.png"/><router-link to="/" >APOD NASA </router-link></h1> 
            </div>
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