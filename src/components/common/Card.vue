<template>
    <div class="card">
        <div class="card-action">
            <i class="mdi mdi-star-outline"></i>
            <div>
                <i class="mdi mdi-download-circle-outline"></i>
                <i class="mdi mdi-eye-settings-outline"></i>
            </div>
        </div>
        <div class="content">
            <div>{{ item.name }}</div>
            <div class="details">
                <p>Ticket {{ item.id.substr(0, 8) }}</p>
                <p>{{ formatDate(item.createdAt) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["item"],
    methods: {
        formatDate(date) {
            const currentDate = new Date(date);
            return `${currentDate.getFullYear()}-${this.humanizeDate(
                currentDate.getMonth()
            )}-${this.humanizeDate(
                currentDate.getDate()
            )} à ${this.humanizeDate(
                currentDate.getHours()
            )}:${this.humanizeDate(
                currentDate.getMinutes()
            )}:${this.humanizeDate(currentDate.getSeconds())}`;
        },
        humanizeDate(date) {
            if (date.toString().length === 1) {
                return "0" + date;
            }
            return date;
        },
    },
};
</script>

<style scoped lang="scss">
.card {
    width: 187px;
    height: 181px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0px 0px 3px #0000001f;
    border: 1px solid #e8f1f8;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
        background: #f4f7f8;
        border-radius: 10px 10px 0px 0px;
        transform: translateY(0);
        overflow: hidden;
        padding: 9px 0px 0 11px;
        font-size: 12px;
    }
    .details {
        opacity: 0;
        /* display: none; */
        transition: 0.5s;
        height: 0px;
        p {
            font-size: 11px;

            letter-spacing: 0px;
            color: #6c6c6c;
        }
    }
    .card-action {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.1rem;

        margin-top: 6px;
        margin-inline: 8px;
        div {
            width: 43px;
            display: flex;
            justify-content: space-around;
        }

        i {
            font-size: 16px;
            color: #8279f2;
        }
    }
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
        .content {
            /* transform: translateY(20px); */
        }
        .details {
            /* display: block; */
            opacity: 1;
            height: 40px;
        }
    }
}
@keyframes showText {
    0% {
        height: 0;
        opacity: 0;
    }
    50% {
        height: 50px;
        opacity: 0;
    }
    100% {
        opacity: 1;
        height: 50px;
    }
}
</style>
