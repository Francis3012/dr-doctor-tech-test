<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <RouterLink to="/">
                <img alt="DrDoctor logo" class="logo" src="@/assets/drdoctor-company-logo.svg" width="125" height="125" />
            </RouterLink>

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/account">Account</RouterLink>
            </nav>
        </div>
    </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
}

.wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
  display: block;
  margin: 0
}

nav {
  font-size: 14px;
  display: flex;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: flex-start;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
  }

  nav {
    text-align: right;
    font-size: 1rem;
  }
}
</style>
