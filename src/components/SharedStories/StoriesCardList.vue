<template>
    <div class="card-list">
        <Card v-for="item in list" :key="item.id" :item="item" />
    </div>
</template>

<script>
import Card from "../common/Card.vue";
export default {
    props: ["list"],
    components: {
        Card,
    },
};
</script>

<style scoped style="scss">
.card-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2px;
    margin: 0 auto;
}
</style>
