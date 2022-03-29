<template>
    <div class="filter-actions">
        <div class="text">
            <i class="mdi mdi-tune"></i>
            <span>Filtres</span>
        </div>
        <DropDown
            class="dropdown-search"
            @show="isSelected('dropdownSearch')"
            :isShow="dropdowns.dropdownSearch"
            @clickOutSide="clickOutSide('dropdownSearch')"
        >
            <template v-slot:label>
                Tous les tickets
                <i
                    :class="[
                        'mdi',
                        dropdowns.dropdownSearch
                            ? 'mdi-chevron-up'
                            : ' mdi-chevron-down ',
                        'active',
                    ]"
                ></i>
            </template>
            <template v-slot:content>
                <div class="content-dropdown-search">
                    <i class="mdi mdi-magnify"></i>
                    <input type="text" placeholder="Rechereche ..." />
                    <hr />
                    <ul>
                        <li class="item">
                            <div>ticket</div>
                            <div>id 12345-2piècejointe</div>
                        </li>
                        <li class="item">
                            <div>ticket</div>
                            <div>id 12345-2piècejointe</div>
                        </li>
                        <li class="active item">
                            <div>ticket</div>
                            <div>id 12345-2piècejointe</div>
                        </li>
                        <li class="item">
                            <div>ticket</div>
                            <div>id 12345-2piècejointe</div>
                        </li>
                    </ul>
                </div>
            </template>
        </DropDown>
        <DropDown
            class="normal-size"
            @show="isSelected('dropdownDate')"
            @clickOutSide="clickOutSide('dropdownDate')"
            :isShow="dropdowns.dropdownDate"
        >
            <template v-slot:label>
                Date
                <i class="mdi mdi-calendar active"></i>
            </template>
            <template v-slot:content>
                <div class="content-dropdown-date">
                    <v-date-picker
                        title-position="left"
                        color="purple"
                        is-range
                    />
                    <BaseButton
                        :medium="true"
                        :bgColor="'primary'"
                        :color="'#fff'"
                        >Appliquer</BaseButton
                    >
                </div>
            </template>
        </DropDown>
        <DropDown
            class="normal-size"
            @show="isSelected('dropdownType')"
            @clickOutSide="clickOutSide('dropdownType')"
            :isShow="dropdowns.dropdownType"
        >
            <template v-slot:label>
                type
                <i
                    :class="[
                        'mdi',
                        dropdowns.dropdownType
                            ? 'mdi-chevron-up'
                            : ' mdi-chevron-down',
                        'active',
                    ]"
                ></i>
            </template>
            <template v-slot:content>
                <div class="content-dropdow-file-type">
                    <div class="title">Type de fichier</div>
                    <hr />
                    <div class="content">
                        <div class="tags">
                            <div>.pdf</div>
                            <div>.pdf</div>
                            <div>.pdf</div>
                            <div class="active">.pdf</div>
                            <div>.pdf</div>
                            <div>.pdf</div>
                            <div>.pdf</div>
                            <div>.pdf</div>
                        </div>
                        <BaseButton
                            :medium="true"
                            :bgColor="'primary'"
                            :color="'#fff'"
                            >Appliquer</BaseButton
                        >
                    </div>
                </div>
            </template>
        </DropDown>
    </div>
</template>

<script>
import DropDown from "../common/DropDown.vue";
import BaseButton from "../common/BaseButton.vue";
export default {
    data() {
        return {
            show: false,
            dropdowns: {
                dropdownSearch: false,
                dropdownType: false,
                dropdownDate: false,
            },
        };
    },
    methods: {
        isSelected(dropDown) {
            for (const key in this.dropdowns) {
                if (key === dropDown) {
                    this.dropdowns[key] = !this.dropdowns[key];
                } else {
                    this.dropdowns[key] = false;
                }
            }
        },
        clickOutSide(dropdown) {
            for (const key in this.dropdowns) {
                if (key === dropdown && this.dropdowns[key]) {
                    this.dropdowns[key] = false;
                }
            }
        },
    },

    components: {
        DropDown,
        BaseButton,
    },
};
</script>

<style lang="scss">
.filter-actions {
    display: flex;
    align-items: center;

    width: 59%;
    gap: 17px;

    .text {
        letter-spacing: 0.6px;
        color: #8279f2;
    }
    .dropdown-search {
        width: 199px;
        .content-dropdown-search {
            width: 316px;

            /* UI Properties */
            background: #ffffff 0% 0% no-repeat padding-box;
            box-shadow: 0px 0px 33px #0000001f;
            border: 1px solid #e8f1f8;
            border-radius: 10px;
            color: #6e6e6e;
            font-size: 13px;
            .item {
                padding: 0.4rem 0.3rem;
                &:hover {
                    color: #8279f2;
                }
                cursor: pointer;
            }
            hr {
                opacity: 0.2;
            }
            i {
                position: absolute;
                right: 11px;
                bottom: 89%;
                color: #8279f2;
            }
            input {
                border: none;
                padding: 5px 12px;
                outline: #6e6e6e;
                margin-left: 11px;
                &::placeholder {
                    color: #6e6e6e;
                    font-size: 11px;
                    margin-left: 9px;
                }
            }
            ul {
                list-style: none;
            }
        }
    }

    .vc-container {
        border: none;
    }
    .content-dropdown-date {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        min-height: 302px;
    }
    .content-dropdow-file-type {
        width: 304px;
        height: 293px;
        /* UI Properties */
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 0px 33px #0000001f;
        border: 1px solid #e8f1f8;
        border-radius: 10px;
        padding: 1rem;
        .title {
            font: normal normal bold 14px/18px Muli;
            letter-spacing: 0px;
            color: #6e6e6e;
        }
        hr {
            opacity: 0.4;
        }
        .content {
            display: flex;
            flex-direction: column;
            height: 83%;
            justify-content: space-around;
            align-items: center;
            padding: 0.5rem;
            color: #6e6e6e;
            opacity: 1;
            .tags {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                /* align-content: start; */
                row-gap: 17px;
                div {
                    border: 1px solid #eaeaeb;
                    border-radius: 40px;
                    width: 77px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;

                    &.active {
                        background: transparent
                            linear-gradient(270deg, #b47af3 0%, #8279f2 100%) 0%
                            0% no-repeat padding-box;
                        border-radius: 40px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
