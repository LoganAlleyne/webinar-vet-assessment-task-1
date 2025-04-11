<template>
    <div>
        <img 
            src="../assets/thumbnail-placeholder.jpg" 
            alt="Video Thumbnail"
            class="max-w-full max-auto object-cover rounded-lg mb-4"
        />

        <div class="flex">
            <div class="grow text-lg">
                <p>{{ store.currentVideo.description }}</p>
            </div>

            <div class="flex flex-col shrink-0 w-fit text-right ml-8 text-gray-500">
                <p>{{ store.currentVideo.video_length }}</p>
                <p>{{ store.currentVideo.created_at }}</p>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { useStore } from '../stores/store.js'

    // Define the store 
    const store = useStore()
</script>