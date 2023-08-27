<script setup>
import Book from '@/components/Book.vue'
import { ref } from 'vue'

const books = ref([
    {
        showBook: true,
        title: "Ender's Game",
        author: "Orson Scott Card",
        age: 72
    },
    {
        showBook: true,
        title: "The Final Empire",
        author: "Brandom Sanderson",
        age: 47
    }
])
</script>

<template>
    <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
        <v-layout>
            <v-app-bar color="teal-darken-4">
                <template v-slot:image>
                <v-img
                    gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
                ></v-img>
                </template>

                <template v-slot:prepend>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </template>

                <v-app-bar-title>Books</v-app-bar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-app-bar>
        
            <v-main>
                <v-container>
                    <div v-for="book in books">
                        <Book :book="book" />
                    </div>
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>