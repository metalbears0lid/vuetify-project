<script setup>
import Book from '@/components/Book.vue'
import { ref } from 'vue'

const props = defineProps({
    books: Array
})

const showFavs = ref(false)

function toggleShowFavs() {
    showFavs.value = !showFavs.value
    console.log(showFavs.value)
}

</script>


<style>
.v-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>


<template>
    <v-card max-width="1600" class="mx-auto" color="grey-lighten-3">
        <v-layout>
            <v-app-bar color="teal-darken-4">
                <template v-slot:image>
                    <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
                </template>

                <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template>

                <v-app-bar-title>Books</v-app-bar-title>

                <v-spacer></v-spacer>

                <v-btn @click="toggleShowFavs">
                    <span v-if="showFavs">Show All</span>
                    <span v-else>Show Favorites</span>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>


                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>

            <v-main>
                <v-container fluid>
                    <div v-for="book in books">
                        <span v-show="!showFavs | (showFavs & book.isFav)">
                            <Book :book="book" />
                        </span>
                    </div>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>