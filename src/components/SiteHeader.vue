<template>
    <header class=" ">
      <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Vendo</span>
            <img class="h-16 w-auto" src="../assets/zap_stream_logo.png" alt="" />
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <router-link v-for="item in navigation" :key="item.name" :to="item.href"
            class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</router-link>
        </div>
        <div class="flex flex-1 items-center justify-end gap-x-6">
        <!--  <a href="#" class="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">Log in</a> 
          <a href="X"
            class="rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Book Your Free Consultation 
          </a>-->
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center gap-x-6">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Vendo Data</span>
              <img class="h-8 w-auto" src="../assets/vendo-logo-mark-midnight-rgb-1500px-w-72ppi.png" alt="" />
            </a>
            <a href="#"
              class="ml-auto rounded-md bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
              up</a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{
                  item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                  in</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      
    </header>

</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  //{ name: 'Product', href: '/' },
  //{ name: 'Integrations', href: '/integrations' },
  //{ name: 'About', href: '/about' },
  //{ name: 'Pricing', href: '/pricing' },
  //{ name: 'Contact', href: '/contact' },
]

const mobileMenuOpen = ref(false)
</script>