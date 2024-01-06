<template>
<footer class="bg-brand-velvet py-12">
    <div class="flex flex-col items-center">
        <div class="flex my-10">
            <div class="mr-10">
                <img src="../assets/images/logo-velvet.svg" alt="">
            </div>
            <div class="flex flex-col">
                <p class="font-medium text-left text-brand-velvetdark mb-3 tracking-widest">
                    NOS ACOMPANHE NAS REDES:
                </p>
                <div class="flex">
                    <img class="widget-anchor mr-5 hover:shadow-lg" src="../assets/images/instagram-widget.svg" alt="" srcset="">
                    <img class="widget-anchor mr-5 hover:shadow-lg" src="../assets/images/tiktok-widget.svg" alt="" srcset="">
                    <img class="widget-anchor hover:shadow-lg" src="../assets/images/youtube-widget.svg" alt="" srcset="">
                </div>
            </div>
        </div>
        <div class="footer-text-copyright text-sm">
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
}
</style>