<template>
  <section id="research">
    <div class="flex justify-center items-center w-full py-10 lg:py-24">
        <div class="flex flex-col my-24 px-3 lg:px-0 lg:mr-5">
            <h3 class="text-2xl lg:text-3xl text-brand-main text-center font-medium">
                Dê voz à sua experiência e <br/>
                participe da nossa pesquisa<span class="writing-machine">_</span> 
            </h3>
            <a href="#" class="button-anchor hover:shadow-xl hover:shadow-brand-main/50 transition-shadow duration-500">
                <img class="mr-3" src="../assets/icons/bx_user-voice.svg">
                RESPONDER PESQUISA
            </a>
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
 cursor: pointer;
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