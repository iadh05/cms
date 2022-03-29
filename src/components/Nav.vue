<template>
    <nav>
        <div
            @click="setActiveNav('sharedStories')"
            :class="{active: sections.sharedStories}"
        >
            <i class="mdi mdi-message-plus-outline"></i>
            <span>Ticket partagés</span>
        </div>
        <div
            @click="setActiveNav('sharedDocuments')"
            :class="{active: sections.sharedDocuments}"
        >
            <i class="mdi mdi-share-variant-outline"></i>
            Documents partagés
        </div>
        <div
            @click="setActiveNav('confidentialDocuments')"
            :class="{active: sections.confidentialDocuments}"
        >
            <i class="mdi mdi-lock-open"></i>
            Documents confidentiels
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            sections: {
                sharedStories: true,
                sharedDocuments: false,
                confidentialDocuments: false,
            },
        };
    },
    methods: {
        setActiveNav(activeSection) {
            for (const key in this.sections) {
                this.sections[key] = false;
                if (key === activeSection) {
                    this.sections[activeSection] = true;
                }
            }

            this.$emit(
                "section-active",
                activeSection[0].toUpperCase() + activeSection.substr(1)
            );
        },
    },
};
</script>

<style scoped lang="scss">
nav {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    min-height: 60px;
    div {
        background: #ffffff 0% 0% no-repeat padding-box;
        border-radius: 11px 11px 0px 0px;
        opacity: 0.5;

        flex-grow: 0.33;
        text-align: center;
        padding-top: 19px;
        font: normal normal 600 Muli;
        font-size: 14px;
        letter-spacing: 0px;
        color: #898989;

        &.active {
            /* box-shadow: -1px -2px 5px 0px rgba(0, 0, 0, 0.21); */
            opacity: 1;
            color: #8279f2;
            position: relative;
            &::before {
                content: "";

                background: #8279f2;
                height: 1px;
                position: absolute;
                display: block;
                top: -2px;
                width: 95%;
                text-align: center;
                right: 6px;
                animation: border-shrink 0.5s ease-in;
            }
        }
        span {
            margin-left: 0.5rem;
        }
    }
}
@keyframes border-shrink {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>
