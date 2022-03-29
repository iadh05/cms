<template>
    <div v-click-outside="clickOutside">
        <div class="dropdown" :class="{selected: isShow}" @click="show">
            <slot name="label"></slot>
        </div>
        <div v-show="isShow" class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ["isShow", "dropDownName"],

    methods: {
        show() {
            this.$emit("show", this.isShow);
        },
        clickOutside() {
            this.$emit("clickOutSide", false);
        },
    },
};
</script>

<style lang="scss" scoped>
div {
    .dropdown {
        background: #f4f7f8;
        border-radius: 10px;
        color: #6e6e6e;
        font-size: 13px;
        height: 40px;
        min-width: 150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        position: relative;

        &.selected {
            opacity: 0.5;
        }
    }
    .content {
        /* background: white; */
        position: absolute;
        z-index: 1;
    }
}
</style>
