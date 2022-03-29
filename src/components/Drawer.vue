<template>
    <div>
        <div class="hamburger" @click="show = !show">
            <i class="mdi mdi-menu" large>mdi-menu</i>
        </div>
        <aside class="menu" :class="{show}">
            <ul class="menu-list">
                <li class="menu-item"></li>
                <li class="menu-item">
                    <i class="mdi mdi-home-outline"></i>
                </li>
                <li class="menu-item">
                    <i class="mdi mdi-tag"></i>
                </li>
                <li class="menu-item">
                    <i class="mdi mdi-file-document-outline"></i>
                </li>
                <li class="menu-item active">
                    <i class="mdi mdi-google-cloud"></i>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};
</script>

<style lang="scss" scoped>
.hamburger {
    display: none;
}
.menu {
    display: flex;
    justify-content: flex-start;
    min-height: 100vh;
    margin: 2px 0;

    background: white;
    max-width: 81px;
    box-shadow: 0px 3px 20px #e4edf5;
    border-radius: 0px 11px 11px 0px;
    .menu-list {
        list-style: none;
        padding: 0.5rem 0;

        .menu-item {
            color: #989898;
            width: 63px;
            height: 50px;
            text-align: center;
            margin: 2px 0;
            color: #989898;
            width: 63px;
            height: 50px;
            text-align: center;
            margin: 2px 0;
            vertical-align: middle;
            display: flex;
            justify-content: center;
            align-items: center;
            &.active {
                color: #fff;
                background: linear-gradient(
                    270deg,
                    rgba(180, 122, 243, 1) 1%,
                    rgba(130, 121, 242, 1) 270%
                );
                border-radius: 0 26px 26px 0;
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .hamburger {
        display: block;
        margin: 0px 10px;
        width: 50px;
    }
    .menu {
        /* display: none; */
        transform: translateX(-100vw);
        opacity: 0;
        transition: tranform ease-in 0.3s, opacity ease 0.2s;
    }
}
.show {
    /* display: block; */
    transition: tranform ease-in 0.3s, opacity ease 0.2s;
    transform: translateX(0);
    opacity: 1;
}
</style>
>
