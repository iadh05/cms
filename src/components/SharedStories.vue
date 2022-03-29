<template>
    <div>
        <div>
            <Actions />
            <hr />
            <ToggleSwitch @set-checkbox-val="toggle" />
            <Stories :isList="isList" />
        </div>
    </div>
</template>

<script>
import Actions from "./SharedStories/Actions.vue";
import Stories from "./SharedStories/Stories.vue";
import ToggleSwitch from "./common/ToggleSwitch.vue";
export default {
    data() {
        return {
            isList: false,
        };
    },
    methods: {
        toggle(isChecked) {
            this.isList = isChecked;
        },
    },
    components: {
        Actions,
        Stories,
        ToggleSwitch,
    },
};
</script>

<style lang="scss" scoped>
hr {
    opacity: 0.3;
    margin: 3rem 0;
}
</style>
