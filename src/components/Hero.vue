<template>
  <header class="header-container">
    <div class="flex flex-col w-4/5 max-w-6xl">
        <div class="flex items-center justify-center lg:justify-between py-10">
            <div clas="w-28 lg:w-32">
                <a href="#" class="">
                    <img class="w-full" src="../assets/images/logo-white.svg" alt="" srcset="">
                </a>
            </div>
            <nav class="items-center hidden lg:flex">
                <a class="font-medium text-md text-brand-gray menu-item-hover mr-8" href="#about-us">Sobre Nós</a>
                <a class="font-medium text-md text-brand-gray menu-item-hover mr-8" href="#research">Pesquisa</a>
                <a class="font-medium text-md text-brand-gray menu-item-hover mr-8" href="#comunity">Comunidade</a>
                <a class="button-anchor border-2 border-brand-main transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-secondary/50 hover:border-white/80" href="#">
                    <font-awesome-icon class="fa-lg mr-2" :icon="['fas', 'hand-holding-heart']" />
                    Quero ser apoiador
                </a>
            </nav>
        </div>
        <div class="flex flex-col pb-48 pt-32">
            <div class="flex flex-col text-4xl lg:text-7xl text-center text-white drop-shadow-2xl drop-shadow-[0px_0_12px_rgba(255,255,255,0.5)]">
                <span class="font-regular lg:font-black">Revolucione sua</span>
                <span class="font-black uppercase mt-2 lg:mt-0 tracking-wider lg:lowercase lg:tracking-none">experiência musical</span>
            </div>
            <div class="font-regular text-justify lg:text-center text-white text-base lg:text-xl tracking-widest lg:tracking-wide items-center my-8">
                <div>
                    Descubra uma nova era na conexão entre <span class="mx-1 font-bold">mercado criativo, comercial e serviços</span>. <br class="hidden lg:inline-block">
                    Participe dessa transformação que vai elevar seu  som  para um patamar inédito.
                </div>
            </div>
            <div class="flex justify-center">
                <a class="flex justify-center items-center py-3 px-12 text-white w-full lg:w-auto font-medium bg-brand-secondary tracking-widest rounded-lg transition duration-500 ease-in-out hover:shadow-lg hover:shadow-brand-secondary/50" href="#">
                    <font-awesome-icon class="mr-3 fa-lg" :icon="['far', 'compass']" />
                    EXPLORAR MAIS
                </a>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.header-container {
 @apply flex w-full flex justify-center;
 background: url('../assets/images/hero-bg.png');
 background-repeat: no-repeat;
 background-size: cover;
 background-position: 90% 60%;
}
.button-anchor {
    @apply flex justify-center items-center text-white font-medium bg-gradient-to-r from-brand-secondary to-mediumslateblue-500 py-2.5 px-6 tracking-widest rounded-lg;
    letter-spacing: 0.05em;
    cursor: pointer;
}

.menu-item-hover {
    @apply transition duration-500 hover:text-white;
}
</style>