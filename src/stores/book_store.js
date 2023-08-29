import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookStore = defineStore('bookStore', () => {

    const books = ref([
        {
            title: "Ender's Game",
            author: "Orson Scott Card",
            age: 72,
            img: "src/assets/ender.png",
            isFav: false
        },
        {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 47,
            img: "src/assets/empire.png",
            isFav: false
        },
        {
            title: "Where The Wild Things Are",
            author: "Maurice Sendak",
            age: 83,
            img: "src/assets/wild.png",
            isFav: false
        },
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: "J. K. Rowling",
            age: 58,
            img: "src/assets/harrypotter.png",
            isFav: false
        }
    ])

    return { books }
})