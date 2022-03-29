<template>
    <button
        :style="{background: handleBgColor(bgColor), color}"
        :class="{
            small: small,
            round,
            notification,
            medium,
            large,
            'notification-red': notificationRed,
            'notification-purple': notificationPurple,
        }"
    >
        <slot></slot>
    </button>
</template>

<script>
const BG_COLORS = {
    primary: "transparent linear-gradient(270deg, #B47AF3 0%, #8279F2 100%)",
};
export default {
    props: [
        "small",
        "round",
        "bgColor",
        "color",
        "notification",
        "medium",
        "large",
        "notification-red",
        "notification-purple",
    ],
    methods: {
        handleBgColor(bgColor) {
            return BG_COLORS[bgColor] || bgColor;
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    border: none;
    background: transparent;
    padding-top: 3px;
    cursor: pointer;
    position: relative;
}
.round {
    border-radius: 50%;
}
.medium {
    width: 100px;
    height: 29px;
    padding: 5px;
    border-radius: 40px;
}
.large {
    width: 197px;
    height: 40px;
    /* UI Properties */
    border-radius: 40px;
    padding: 0.5rem;
}
.small {
    width: 40px;
    height: 40px;
}
.notification::after {
    content: "";
    position: absolute;

    top: 6px;
    right: 8px;
    width: 4px;
    height: 4px;
    /* border: 5px solid rgba(0, 0, 255, 0.315); */

    border-radius: 50%;
}
.notification-red::after {
    background: #ef4d45;
    box-shadow: 0px 0px 5px 13px rgba(239, 77, 69, 0.23);
}
.notification-purple::after {
    background: #aa81f1;
    box-shadow: 0px 0px 5px 13px #aa81f13a;
}
</style>
