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
    background-color: #d4faff;
}

img.book {
    width: auto;
    height: 150px;
}
</style>

<template>
    <v-card width="300" :title="book.title" :subtitle="book.author" class="mb-2 mr-2" :class="{ fav: book.isFav }">
        <v-card-text>
            <img class="book" :src="book.img" :alt="book.title">
        </v-card-text>
        <v-card-actions>
            <v-btn @click="toggleFav(book)" icon>
                <v-icon v-if="book.isFav">mdi-star-face</v-icon>
                <v-icon v-else>mdi-star-outline</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>