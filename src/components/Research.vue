<template>
  <section id="research">
    <div class="flex justify-center items-center w-full py-24">
        <div class="flex flex-col my-24 lg:mr-5">
            <h3 class="text-4xl text-brand-main text-center font-medium">
                Dê voz à sua experiência e <br/>
                participe da nossa pesquisa<span class="writing-machine">_</span> 
            </h3>
            <button class="button-anchor hover:shadow-xl hover:shadow-mediumslateblue-400 transition-shadow duration-500">
                <img class="mr-3" src="../assets/icons/bx_user-voice.svg">
                RESPONDER PESQUISA
            </button>
        </div>
        <div class="hidden lg:inline-block">
            <img src="../assets/images/research-iillustration.svg" alt="">
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.button-anchor {
 @apply flex justify-center items-center text-white font-bold bg-brand-main p-4 mt-10 rounded-lg;
 letter-spacing: 0.2em;
}

@keyframes blinking {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0.05;
    }
}

.writing-machine {
    @apply font-black;
    animation: blinking 0.5s infinite;
}
</style>