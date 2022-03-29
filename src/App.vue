<template>
    <div class="app">
        <Drawer />
        <main>
            <Header></Header>
            <Main />
        </main>
    </div>
</template>
<script>
import Drawer from "./components/Drawer.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
    components: {
        Drawer,
        Header,
        Main,
    },
};
</script>
<style lang="scss">
.app {
    display: flex;
    justify-content: space-between;
}
body {
    background-color: #eef7fd;
    margin: 0;
    font-family: Muli;
}
main {
    width: 80%;
    margin: 2rem auto;
}
</style>
