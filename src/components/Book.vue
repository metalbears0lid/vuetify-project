<script setup>
const props = defineProps({
    book: Object
})

function toggleFav(book) {
    book.isFav = !book.isFav
}
</script>

<template>
    <v-card :title="book.title" :subtitle="book.author" class="mb-2">
        <v-card-text>{{ book.age }}</v-card-text>
        <v-card-actions>
            <v-btn @click="toggleFav(book)" icon>
                <v-icon v-if="book.isFav">mdi-heart</v-icon>
                <v-icon v-else>mdi-heart-outline</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>