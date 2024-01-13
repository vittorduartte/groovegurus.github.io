<template>
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mb-3">
        <ul :class="{'animate-infinite-scroll': !inverse, 'animate-infinite-scrollinverse': inverse}" class="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none">
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
        </ul>
        <ul :class="{'animate-infinite-scroll': !inverse, 'animate-infinite-scrollinverse': inverse}" class="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none" aria-hidden="true">
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
            <li>
                <img src="../assets/images/guru-pass.svg" alt="GuruPass" />
            </li>
        </ul>               
    </div>
</template>

<script>

export default {
    props: {
        inverse: Boolean
    },
}
</script>