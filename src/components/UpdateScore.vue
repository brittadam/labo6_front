<script setup>
import { ref, onMounted } from 'vue';


let socket = null;

let team = ref(null);
let score = ref(null);

const teamScores = ref([
    "Ferrari",
    "Mercedes",
    "Red Bull",
]);

 


onMounted(()=>{
    socket = new WebSocket('ws://localhost:3000/primus');
    
    //listen for scores from web socket server
    socket.onmessage=(event)=>{
        let data = JSON.parse(event.data);
        if (data.action === "updateScore"){
        
        };
       
    };
});

const updateScore = () => {
    socket.send(JSON.stringify({
        "action": "updateScore",
        "team": team.value,
        "score": score.value,
    }));
    
};

</script>

<template>
  <div>
    <h1>Update Score</h1>
    <label for="teamSelector">Select your team</label>
    <select v-model="team" id="teamSelector">
        <option v-for="t in teamScores">
          {{ t }}
        </option>
      </select>
    <input type="number" v-model="score">
    <button type="submit" @click="updateScore">Update Score</button>
  </div>
</template>

<style scoped>

</style>