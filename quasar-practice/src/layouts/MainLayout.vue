<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-grey-5 text-black">
      <div class="row">
        <div class="col-10 q-mx-auto">
          <div class="">

            <q-list class="flex flex-center">
              <q-item>
                <q-item-section>
                  <RouterLink class="text-black no-decoration" > Home</RouterLink>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>

                  <RouterLink class="text-black no-decoration" > Product</RouterLink>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                 <RouterLink class="text-black no-decoration" > Cart</RouterLink>
                </q-item-section>
              </q-item>


            </q-list>
          </div>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'MainLayout'
})


</script>


<style>

    .no-decoration{
      text-decoration: none
    }
</style>