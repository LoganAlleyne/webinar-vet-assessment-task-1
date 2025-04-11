<template>
	<!-- Page wrapper -->
	<div class="max-w-[1200px] h-full mx-auto flex flex-col">
		<HeaderBar
			class="flex-shrink-0" />

		<SearchBar
			class="flex-shrink-0" />

		<!-- Add new video button -->
		<button
			class="bg-blue-500 text-white p-2 py-2 rounded m-2 mb-4 hover:bg-blue-600 transition duration-200"
			@click="store.activateModal('add')"

		>
			+ Add new video
		</button>

		<VideoList 
			class="flex-shrink-1 overflow-y-auto"
		/>

		<Pagination
			class="flex-shrink-0" />
	</div>

	<!-- Modal -->
	<Modal v-if="store.modalActive" />
</template>

<script setup>
	import { computed, onMounted } from 'vue';
	import { useStore } from './stores/store.js'
	import HeaderBar from './components/HeaderBar.vue'
	import SearchBar from './components/SearchBar.vue'
	import VideoList from './components/VideoList.vue'
	import Pagination from './components/Pagination.vue'
	import Modal from './components/Modal.vue'
	
	// Define the store 
	const store = useStore()

	// Fetch videos when the component is mounted
	onMounted(() => {
		store.getVideos()
	})
</script>
