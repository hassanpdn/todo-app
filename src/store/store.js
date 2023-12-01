// store.js
import { defineStore } from "pinia";

export const useStore = defineStore('use-store',{
  state: () => ({
    // your state properties go here
    name: 'Babak'
  }),
  // your getters, actions, and mutations go here
});
