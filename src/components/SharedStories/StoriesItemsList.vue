<template>
    <div>
        <div v-for="item in list" :key="item.id" class="item">
            <Item :item="item" />
        </div>
    </div>
</template>

<script>
import Item from "../common/Item.vue";
export default {
    props: ["list"],
    components: {
        Item,
    },
};
</script>

<style scoped lang="scss">
.item {
    margin-top: 0.2rem;
}
</style>
