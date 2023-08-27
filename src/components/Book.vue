<script setup>
const props = defineProps({
    book: Object
})

function toggleFav(book) {
    book.isFav = !book.isFav
}

</script>

<style>
    .v-card .fav {
        background-color: #ff9ed2
    }
</style>

<template>
    <v-card :title="book.title" :subtitle="book.author" class="mb-2" :class="{ fav: book.isFav}">
        <v-card-text>{{ book.age }}</v-card-text>
        <v-card-actions>
            <v-btn @click="toggleFav(book)" icon>
                <v-icon v-if="book.isFav">mdi-heart</v-icon>
                <v-icon v-else>mdi-heart-outline</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>