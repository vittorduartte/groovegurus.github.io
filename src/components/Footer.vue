<template>
<footer class="flex justify-center w-full bg-brand-velvet py-12">
    <div class="flex flex-col items-center">
        <div class="flex flex-col lg:flex-row my-10">
            <div class="lg:mr-10 m-auto">
                <img src="../assets/images/logo-velvet.svg" alt="">
            </div>
            <div class="flex flex-col">
                <p class="font-medium text-left text-brand-velvetdark my-4 lg:mb-3 tracking-widest">
                    NOS ACOMPANHE NAS REDES:
                </p>
                <div class="flex flex-col justify-center lg:flex-row">
                    <img class="widget-anchor lg:mr-5 mb-3 hover:shadow-lg transition-shadow duration-500" src="../assets/images/instagram-widget.svg" alt="" srcset="">
                    <img class="widget-anchor lg:mr-5 mb-3 hover:shadow-lg transition-shadow duration-500" src="../assets/images/tiktok-widget.svg" alt="" srcset="">
                    <img class="widget-anchor hover:shadow-lg transition-shadow duration-500" src="../assets/images/youtube-widget.svg" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row footer-text-copyright text-sm">
            &lt;/> DESENVOLVIDO E MANTIDO PELO<span class="font-bold ml-3"> TIME DE TECNOLOGIA GROOVE GURUS </span>
        </div>
    </div>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.footer-text-copyright {
    @apply flex justify-center font-regular text-brand-velvetdark;
    letter-spacing: .2rem;
}

.widget-anchor {
    cursor: pointer;
    max-height: 45px; 
}
</style>