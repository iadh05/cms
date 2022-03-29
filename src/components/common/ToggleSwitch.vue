<template>
    <div class="panel-body">
        <label class="switch">
            <input type="checkbox" :value="checkbox" @click="toggleCheckbox" />
            <div class="slider round">
                <i class="mdi mdi-view-sequential"></i>
                <i class="mdi mdi-view-grid-outline"></i>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkbox: false,
        };
    },
    methods: {
        toggleCheckbox() {
            this.checkbox = !this.checkbox;
            this.$emit("set-checkbox-val", this.checkbox);
        },
    },
};
</script>

<style scoped>
.panel-body {
    text-align: right;
}
.switch {
    position: relative;
    display: inline-block;
    width: 57px;
    height: 30px;
    /* UI Properties */
    background: #fafafa 0% 0% no-repeat padding-box;
    border: 2px solid #e7eff7;
    border-radius: 11px;
}
input {
    display: none;
}
i {
    z-index: 9;
    color: #8279f2;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: #ccc; */
    -webkit-transition: 0.4s;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.slider:before {
    position: absolute;
    content: "";

    right: -1px;
    bottom: -1px;

    transition: 0.4s;
    width: 31px;
    height: 30px;
    /* UI Properties */
    background: #dedcfa;
    border: 2px solid #8279f2;
    border-radius: 10px;
    opacity: 1;
}

input:focus + .slider {
    box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
    transform: translateX(-26px);
}

.slider.round {
    border-radius: 34px;
}
</style>
