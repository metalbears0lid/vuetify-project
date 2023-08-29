<template>
  <v-app>
    <v-main>
      <Books :books="books" />
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import Books from '@/components/Books.vue'
import { useBookStore } from '@/stores/book_store'
import { storeToRefs } from 'pinia'

const store = useBookStore()

const { books } = storeToRefs(store)
</script>
