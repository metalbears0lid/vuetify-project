<script setup>
const props = defineProps({
    book: Object
})
</script>

<template>
    <v-card :title="book.title" :subtitle="book.author" class="mb-2">
        <v-card-text>{{ book.age }}</v-card-text>
        <v-card-actions>
            <v-btn @click="book.age++">Incr age</v-btn>
            <v-btn @click="book.age--">Decr age</v-btn>
        </v-card-actions>
    </v-card>
</template>