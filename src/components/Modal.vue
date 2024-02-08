<template>
    <div v-if="modalState"
        class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        :class="{'overflow-hidden': modalState}"
        @click="store.commit('handleModal')">
        <div class="fixed w-96 lg:w-auto lg:mx-10" @click.stop>
            <div
                class="flex flex-col overflow-hidden bg-white rounded-lg animate__animated animate__fadeInDown animate__faster">
                <div class="guru-pass__modal flex flex-col px-6 py-6 lg:px-16 lg:py-10 bg-white">
                    <div class="flex justify-end mb-3">
                        <font-awesome-icon :icon="['fa', 'xmark']" size="xl" class="text-brand-main cursor-pointer"
                            @click="store.commit('handleModal')" />
                    </div>
                    <h1 class="font-black text-2xl text-brand-velvetdark text-center tracking-widest mb-5">VOCÊ ESTÁ GARANTIDO!</h1>
                    <h4 class="font-regular text-xl text-brand-velvetdark text-justify lg:text-center mb-10">
                        <span class="font-bold">Seu acesso para versão alpha da nossa<br class="hidden lg:block"> 
                        plataforma está garantido</span>. Enquanto isso,<br class="hidden lg:block"> 
                        também estamos trabalhando duro para<br class="hidden lg:block"> 
                        encontrar os melhores parceiros e vantagens<br class="hidden lg:block"> 
                        para tornar a sua experiência ainda mais incrível.<br class="hidden lg:block"> 
                        Estamos ansiosos!
                    </h4>
                    <div class="flex flex-col">
                        <h4 class="font-regular text-xl text-brand-success text-center">
                            <span class="font-bold">ASSINE O NOSSO CANAL</span><br />
                            E FIQUE POR DENTRO DAS NOVIDADES!
                        </h4>
                        <a href="https://forms.gle/VuQ4PdpWhTeVoDTV6"
                            class="flex justify-center items-center text-white font-bold bg-brand-success p-4 mt-4 rounded-lg tracking-widest hover:shadow-xl hover:shadow-brand-success/50 transition-shadow duration-500"
                            target="_blank">
                            <img class="mr-3" src="../assets/icons/whatsapp.svg" alt="Whatsapp Icon">
                            CANAL DE WHATSAPP
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import store from '../store';

export default {
    setup() {
        const modalState = computed(() => {
            return store.state.modal
        })

        return {
            store,
            modalState
        }
    }
}
</script>

<style scoped>
.guru-pass__modal {
    background-image: url(../assets/images/confete-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
