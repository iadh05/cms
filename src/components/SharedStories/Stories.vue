<template>
    <div class="section">
        <div v-for="(date, i) in dateRange" :key="i">
            <div class="section-range">
                {{ convertDateRange(date) }}
            </div>
            <component
                class="section-content"
                :is="renderComponent"
                v-bind="currentProps(date)"
            ></component>
        </div>
    </div>
</template>

<script>
import StoriesCardList from "./StoriesCardList.vue";
import StoriesItemsList from "./StoriesItemsList.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    props: ["isList"],
    components: {
        StoriesCardList,
        StoriesItemsList,
    },
    methods: {
        ...mapActions(["fetchStories"]),
        currentProps(date) {
            return {list: this.getStories[date]};
        },
        convertDateRange(dateRange) {
            const dateRangeInfrensh = {
                yesterday: "Hier",
                lastWeek: "Cette semaine",
                lastMonth: "Le mois dernier",
            };
            return dateRangeInfrensh[dateRange];
        },
    },
    computed: {
        ...mapGetters(["getStories"]),
        renderComponent() {
            if (this.isList) return "StoriesItemsList";
            return "StoriesCardList";
        },
        dateRange() {
            return Object.keys(this.getStories).filter(
                (el) => this.getStories[el]
            );
        },
    },
    mounted() {
        this.fetchStories();
    },
};
</script>

<style scoped lang="scss">
.section {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 2rem;
    .section-range {
        font: normal normal bold 14px/18px Muli;
        letter-spacing: 0px;
        color: #5d5d5d;
    }
    .section-content {
        margin-top: 1rem;
    }
}
</style>
