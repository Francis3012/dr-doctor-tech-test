<script setup lang="ts">
</script>

<template>
    <section>
        <article>
            <span>
                <h1>Healthcare has changed.</h1>
                <p>Clinicians all over the UK use the DrDoctor Patient Engagement Platform to make data driven decisions, activate patients through self-booking and provide remote care.</p>
            </span>
            <div>
                <img src="https://www.drdoctor.co.uk/hubfs/patientportal1.svg" alt="DrDoctor">
            </div>
        </article>
        <div>
            <img src="https://www.drdoctor.co.uk/hubfs/2nd%20HOMEPAGE%20STAT%20BANNER.png" alt="DrDoctor">
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

article span h1 {
    font-size: 2em;
    margin-bottom: 1em;
    color: hsla(160, 100%, 37%, 1);;
}

article div img {
    width: 100%;
    height: 350px;
}

section div img {
    width: 100%;
    object-fit: cover;
}

@media (min-width: 1024px) {

    article {
        display: flex;
        align-items: center;
    }

    article span {
        display: flex;
        flex-direction: column;
    }

    article span p {
        width: 75%;
        font-size: 18px;
    }

    article div img {
        width: 450px;
        height: 450px;
        object-fit: cover;
    }

}
</style>
  