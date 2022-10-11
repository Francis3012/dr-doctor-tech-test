<script setup lang="ts">
import UserSelection from '../components/UserSelection/index.vue'
</script>

<template>
	<section class="account">
		<UserSelection />
	</section>
</template>
  
<style>
.account {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

@media (min-width: 1024px) {
  .account {
    min-height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
  