<template>
    <header>
        <div class="header-actions">
            <div class="button-actions">
                <BaseButton
                    :small="true"
                    :round="true"
                    class="mx-1"
                    :bgColor="'primary'"
                    :color="'#fff'"
                >
                    <i class="mdi mdi-message-plus-outline"></i>
                </BaseButton>
                <BaseButton
                    :small="true"
                    :round="true"
                    class="mx-1"
                    :bgColor="'primary'"
                    :color="'#fff'"
                >
                    <i class="mdi mdi-soccer"></i>
                </BaseButton>
                <BaseButton
                    :small="true"
                    :round="true"
                    class="mx-1"
                    :bgColor="'primary'"
                    :color="'#fff'"
                >
                    <i class="mdi mdi-alert-outline"></i>
                </BaseButton>
            </div>
            <div class="notification">
                <BaseButton
                    :small="true"
                    class="mx-1"
                    :color="'#8579F2'"
                    :notification="true"
                    :notification-red="true"
                >
                    <i class="mdi mdi-bell-outline"></i>
                </BaseButton>
                <BaseButton
                    :notification="true"
                    :notification-purple="true"
                    :small="true"
                    class="mx-1"
                    :color="'#8579F2'"
                >
                    <i class="mdi mdi-message-outline"></i>
                </BaseButton>
            </div>
        </div>
        <div class="user-profile">
            <div class="avatar"></div>
            <div class="user-detail">
                <div class="user-name">Jhon Doe</div>
                <div class="user-company">Epitech</div>
            </div>
        </div>
    </header>
</template>

<script>
import BaseButton from "./common/BaseButton.vue";
export default {
    components: {
        BaseButton,
    },
};
</script>

<style lang="scss" scoped>
header {
    background: #fff;
    border-radius: 5px;
    display: flex;
    min-height: 73px;
    .header-actions {
        width: 74%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1.5rem;
    }
    .user-profile {
        background: linear-gradient(
            270deg,
            rgba(180, 122, 243, 1) 1%,
            rgba(130, 121, 242, 1) 270%
        );
        flex-grow: 1;
        display: flex;
        align-items: center;
        font-size: 16px;
        gap: 0.3rem;
        padding: 5px;
        border-radius: 0px 5px 5px 0;
        /* justify-content: space-around; */
        .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url("../assets/avatar.jpg");
            padding: 0.2rem img {
                width: fit-content;
            }
        }
        .user-detail {
            color: #fff;
            letter-spacing: 0;
            .user-name {
                text-transform: capitalize;
            }
            .user-company {
                text-transform: uppercase;
                font-size: 12px;
            }
        }
    }
}
i {
    font-size: 20px;
}
.mx-1 {
    margin-inline: 4px;
}
</style>
