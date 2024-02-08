<template>
    <section id="community">
        <div class="flex flex-col max-w-6xl mx-auto">
            <div class="flex justify-center">
                <div>
                    <h3 class="text-2xl lg:text-4xl text-center font-medium my-10 lg:my-16 text-brand-velvetdark">
                        <span class="font-black">Faça parte da nossa história</span> <br /> 
                        garanta seu passe pra nossa comunidade!
                    </h3>
                </div>
            </div>
            <div class="flex justify-center">
                <form @submit.prevent="handleRegisterUserCommunity()" class="z-10 flex flex-col px-6 lg:px-10 py-12 mb-6 lg:w-3/6 lg:shadow-xl bg-white rounded-lg lg:border border-brand-grayborder/[.3]">
                    <h3 class="hidden lg:inline-block text-2xl text-center font-medium text-brand-velvetdark tracking-wider mb-8">
                        QUERO GARANTIR MINHA <br />
                        <span class="font-black">VAGA 100% GRATUITA!</span>
                    </h3>
                    <div class="mb-5">
                        <label for="" class="mb-[10px] block text-base font-medium text-dark">
                            Qual o seu nome?
                        </label>
                        <input :model="state.name" type="text" placeholder="Digite o seu nome"
                            class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-brand-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
                    </div>
                    <div class="mb-5">
                        <label for="" class="mb-[10px] block text-base font-medium text-dark">
                            Qual sua tribo?
                        </label>
                        <div class="relative z-20">
                            <select
                                :model="state.group"
                                class="relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-brand-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2">
                                <option value="aprendiz" >Músico Aprendiz</option>
                                <option value="amador" >Músico Amador</option>
                                <option value="profissional" >Músico Profissional</option>
                                <option value="lojista" >Lojista</option>
                                <option value="servico" >Serviço (luthier, roadie, guitar tech e etc)
                                </option>
                            </select>
                            <span
                                class="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="" class="mb-[10px] block text-base font-medium text-dark">
                            Qual o seu email?
                        </label>
                        <input :model="state.email" type="email" placeholder="Digite o seu e-mail"
                            class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-brand-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
                    </div>
                    <div class="mb-5">
                        <label for="" class="mb-[10px] block text-base font-medium text-dark">
                            Qual o seu contato?
                        </label>
                        <input :model="state.phone" type="text" placeholder="Digite o seu contato c/ DDD"
                            class="w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-brand-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2" />
                    </div>
                    <div class="mb-5">
                        <label class="flex items-start font-regular text-justify text-xs cursor-pointer select-none text-brand-dark tracking-wider">
                            <div class="relative">
                              <input type="checkbox" class="sr-only" @change="handleCheckboxChange" />
                              <div
                                class="box mr-4 flex h-5 w-5 items-center justify-center rounded border-stroke dark:border-dark-3 border"
                              >
                                <span :class="{ '!bg-primary': state.isChecked }" class="dot h-[10px] w-[10px] rounded-sm"></span>
                              </div>
                            </div>
                            <span>
                                Concordo com a política de dados da empresa. A Groove Gurus valoriza sua confiança. Seus dados <span class="font-bold">são preciosos e serão tratados com respeito</span>. Garantimos que suas informações <span class="font-bold">serão protegidas, usadas apenas para aprimorar sua experiência e nunca compartilhadas sem seu consentimento</span>. Sua privacidade é nossa prioridade.
                            </span>
                          </label>
                    </div>
                    <button type="submit" :class="{'disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 hover:shadow-none': !state.isChecked}" class="flex justify-center items-center text-lg text-brand-velvetdark font-bold bg-brand-velvet p-4 rounded-lg tracking-wider cursor-pointer hover:shadow-xl hover:shadow-brand-velvetdark/30 transition-shadow duration-500">
                        <span class="hidden lg:inline-block">PARTICIPAR DA COMUNIDADE</span>
                        <span class="sm:inline-block lg:hidden text-xl">
                            GARANTIR MINHA VAGA <br/>
                            <span class="font-black">100% GRATUITA</span>
                        </span>
                    </button>
                </form>
            </div>
        </div>
        <div class="relative -top-96 -mt-40 hidden lg:flex flex-col rotate-12 mx-auto max-w-5xl overflow-x-hidden -z-10">
            <GuruPassInfinityScrool :inverse="true"/>
            <GuruPassInfinityScrool />
            <GuruPassInfinityScrool :inverse="true"/>
        </div>
    </section>
</template>
<script>
import { reactive } from 'vue';
import GuruPassInfinityScrool from './GuruPassInfinityScrool.vue';
import store from '../store';
import { registerUserCommunity } from '../services'

export default {
    setup() {
        const state = reactive({
            isChecked: false,
            name: '',
            group: '',
            email: '',
            phone: ''
        })
        
        function handleCheckboxChange() {
            state.isChecked = !state.isChecked
        }

        async function handleRegisterUserCommunity() {
            let body = {
                user: {
                    name: state.name,
                    group: state.group,
                    email: state.email,
                    phone: state.phone
                }
            }

            store.commit('handleModal')
        }

        return {
            state,
            handleCheckboxChange,
            handleRegisterUserCommunity
        }
    },
    components: {
        GuruPassInfinityScrool
    }
}
</script>