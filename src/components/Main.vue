<template>
    <div class="main">
        <div>
            <Nav @section-active="isActiveComponent" />
            <section>
                <component :is="component" />
            </section>
        </div>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
import SharedStories from "./SharedStories.vue";
import SharedDocuments from "./SharedDocuments.vue";
import ConfidentialDocuments from "./ConfidentialDocuments.vue";

export default {
    data() {
        return {
            component: "SharedStories",
        };
    },
    components: {
        Nav,
        SharedStories,
        SharedDocuments,
        ConfidentialDocuments,
    },
    methods: {
        isActiveComponent(component) {
            this.component = component;
        },
    },
};
</script>

<style lang="scss" scoped>
.main {
    margin-top: 2rem;
    section {
        background: #fff;
        padding: 1.8rem 0.3rem;
        box-shadow: 0px 3px 20px #e4edf5;
        border-radius: 0px 0px 11px 11px;
    }
}
</style>
