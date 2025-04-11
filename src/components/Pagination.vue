<template>
    <div class="flex justify-space-between items-center py-4 px-2">
        <button 
            class="w-22 bg-blue-500 text-white p-2 py-2 rounded hover:bg-blue-600 transition duration-200" 
            :class="{ invisible: !hasPrevPage }"
            :disabled="!hasPrevPage"
            @click="prevPage"
        >
            Previous
        </button>
        <div class="flex-grow text-center">
            <span class="text-gray-700">Page {{ page + 1 }} of {{ totalPages }}</span>
        </div>
        <button 
            class="w-22 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            :class="{ invisible: !hasNextPage }"
            :disabled="!hasNextPage"
            @click="nextPage"
        >
            Next
        </button>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from '../stores/store.js'

    // Define the store 
	const store = useStore()

    // Set pagination computed properties
	const page = computed(() => store.page)
	const totalPages = computed(() => Math.ceil(store.filteredVideos.length / store.pageSize))
	const hasNextPage = computed(() => page.value < totalPages.value - 1)
	const hasPrevPage = computed(() => page.value > 0)

    // Functions to handle pagination
	const nextPage = () => {
		if (hasNextPage.value) {
			store.page++
		}
	}

	const prevPage = () => {
		if (hasPrevPage.value) {
			store.page--
		}
	}
</script>