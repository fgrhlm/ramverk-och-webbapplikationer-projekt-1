<script>
export default {
    mounted(){
        const time = new Date(`2021-01-01 ${this.$props.departureRow["departs"]}`);
    },
    props: ["departureRow"],
    
}
</script>

<template>
    <div class="departure-row">
        <span>{{departureRow["line"]}}</span>
        <span>{{departureRow["name"]}}</span>
        <span>{{departureRow["departs"]}}</span>
    </div>
</template>

<style scoped>    
    span{
        margin: 0;
        padding: 0;
    }

    .departure-row {
        margin-top: 16px;
        font-family: "Concert One";
        font-size: 32px;
        display: flex;
        justify-content: space-between;
        padding: 0px 50px 0px 50px;
        min-width: 300px;
        width: 60%;
        height: 45px;
        border-radius: 30px;
        background-color: #afe2ff;
        color: #464660;
    }

    .urgency-0 {
        color: #353535;
    }

    .urgency-1 {
        color: #ff7777;
    }
</style>