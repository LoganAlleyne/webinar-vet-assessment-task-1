<template>
    <div 
        class="mx-2 bg-white border border-gray-300 rounded"
    >
        <VideoListItem v-for="video in pageContent" :key="video.id" :video="video" />
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from '../stores/store.js'
	import VideoListItem from './VideoListItem.vue'

    // Define the store
    const store = useStore()

    // Set page content based on the current page
    const pageContent = computed(() => {
		const start = store.page * store.pageSize
		const end = start + store.pageSize
		return store.filteredVideos.slice(start, end)
	})
</script>