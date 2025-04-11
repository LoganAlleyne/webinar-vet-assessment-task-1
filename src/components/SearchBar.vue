<template>
    <div class="px-2 py-2">
        <input 
            type="text" 
            placeholder="Search..." 
            class="w-full p-2 bg-white border border-gray-300 rounded" 
            @keyup="search"
        />
    </div> 
</template>

<script setup>
	import { useStore } from '../stores/store.js'

	// Define the store 
	const store = useStore()

	// Seach functionality
	const search = (event) => {
        if (event.key === 'Tab') return

        store.page = 0
		store.searchQuery = event.target.value
		console.log(store.searchQuery)
	}
</script>
