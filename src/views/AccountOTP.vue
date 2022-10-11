<script setup lang="ts">
import UserOTP from '../components/UserOTP/index.vue'
</script>

<template>
	<section class="account">
		<UserOTP />
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