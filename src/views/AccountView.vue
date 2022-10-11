<script setup lang="ts">
import UserInput from '../components/Userinput/index.vue'
</script>

<template>
	<section class="account">
		<UserInput />
	</section>
</template>
  
<style>
.account {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 1024px) {
  .account {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
  