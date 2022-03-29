<template>
    <div class="item">
        <div>{{ item.name }}</div>
        <div class="actions">
            <i class="mdi mdi-star-outline"></i>
            <i class="mdi mdi-dots-vertical"></i>
        </div>
    </div>
</template>

<script>
export default {
    props: ["item"],
};
</script>

<style lang="scss" scoped>
.item {
    box-shadow: 0px 0px 1px #0000001f;
    border: 1px solid #e8f1f8;
    border-radius: 10px;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    color: #6c6c6c;
    /* height: 40px; */
    padding: 0.7rem;
    .actions {
        i {
            color: #8279f2;
        }
    }
}
</style>
