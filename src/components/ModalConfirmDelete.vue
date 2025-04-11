<template>
    <div
        class="flex items-center justify-center ">
        <!-- Delete Button -->
        <button
            class="bg-blue-500 text-white p-2 py-2 rounded  mr-4 hover:bg-blue-600 transition duration-200"
            @click="confirmDeleteVideo"
        >
            Confirm
        </button>
        <!-- Cancel Button -->
        <button
            class="bg-red-500 text-white p-2 py-2 rounded mt-26mover:bg-red-600 transition duration-200"
            @click="store.modalActive = false"  
        >
            Cancel
        </button>
    </div>
</template>

<script setup>
    import { useStore } from '../stores/store.js'

    // Define the store 
    const store = useStore()

    // Function to delete the current video
    const confirmDeleteVideo = () => {
        // Call the deleteVideo function from the store
        store.deleteVideo(store.currentVideo.id)
        store.deactivateModal()
    }
</script>