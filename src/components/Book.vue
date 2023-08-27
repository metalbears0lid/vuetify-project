<script setup>
const props = defineProps({
    book: Object
})
</script>

<template>
    <v-container>
        <v-card>
            <v-card-title>{{ book.title }}</v-card-title>
            <v-card-subtitle>{{ book.author }}</v-card-subtitle>
            <v-card-text>{{ book.age }}</v-card-text>
            <v-card-actions>
                <v-btn @click="book.age++">Incr age</v-btn>
                <v-btn @click="book.age--">Decr age</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>