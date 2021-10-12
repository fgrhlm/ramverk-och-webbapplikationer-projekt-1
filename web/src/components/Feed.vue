<script>
import axios from "axios";
import Departure from "./Departure.vue";

export default {
    mounted() {
        let self = this;
        this.fetchData();

        setInterval(function() {
            self.fetchData();
        },3000);
    },
    components: {Departure},
    data() {
        return {
            leaveBy: "",
            apiData: []
        }
    },
    methods: {
        fetchData: async function() {
            const req = await axios.get("https://api.raitiovaunu.spionsatellit.com");
            this.apiData = req["data"]["stopTimes"];

            this.leaveBy = this.apiData[0]["leaveAt"];
        }
    }
}
</script>

<template>
    <div class="container">
       <div class="info">
            Starta vid denna tidpunkt för att hinna med nästa: {{this.leaveBy}}
        </div>
        <div v-for="dep in apiData" :key="dep.departureTime" class="container">
            <departure :departure-row="dep"/>
        </div>     
    </div>
    
</template>

<style scoped>
    .info {
        margin-bottom: 35px;
        font-size: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: 100%;
    }

    @media only screen and (max-width: 600px) {
        .info { 
            font-size: 20px;
        }
    }
</style>