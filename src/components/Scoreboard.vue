<script setup>
import { ref, onMounted } from 'vue';

let socket = null;

// Initial teams with scores
let defaultTeams = ref([
  { team: 'Ferrari', score: 0 },
  { team: 'Mercedes', score: 0 },
  { team: 'Red Bull', score: 0 },
]);


onMounted(() => {

  socket = new WebSocket('wss://labo6-back.onrender.com/primus');

  socket.onmessage = (event) => {
    let score = JSON.parse(event.data);
    console.log(score);
    if (score.action === 'updateScore') {
      // Check if the team is one of the default teams
      let selectedTeam = defaultTeams.value.findIndex(
        (t) => t.team === score.team
      );
      if (selectedTeam !== -1) {
        // Update the score for the default team
        defaultTeams.value[selectedTeam].score = score.score;
      }
    }
  };
});
</script>

<template>
    <div>
      <ul>
        <!-- Default teams with initial scores -->
         <li v-for="t in defaultTeams" :key="t.team">
          {{ t.team }}: {{ t.score }}
        </li>  
      </ul>
    </div>
  </template>
  

<style scoped>

</style>