<template>
    <div class="actions">
        <FilterAction />
        <BaseButton :bgColor="'primary'" :color="'#fff'" :large="true">
            <i class="mdi mdi-cloud-upload"></i>
            Importer un fichier</BaseButton
        >
    </div>
</template>

<script>
import BaseButton from "../common/BaseButton.vue";
import FilterAction from "./Filter.vue";
export default {components: {BaseButton, FilterAction}};
</script>

<style scoped lang="scss">
.actions {
    display: flex;
    justify-content: space-around;
    i {
        font-size: 14px;
    }
}
</style>
