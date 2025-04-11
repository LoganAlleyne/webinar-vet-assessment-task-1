<template>
    <div>
        <!-- Name -->
        <label 
            for="name" 
            class="text-lg"
        >
            Video name
        </label>
        <input 
            type="text" 
            name="name" 
            v-model="newVideo.name" 
            placeholder="Video Name" 
            class="p-2 mt-2 mb-4 border border-gray-300 rounded w-full"
        />

        <!-- Slug -->
        <label 
            for="slug" 
            class="text-lg"
        >
            Slug
        </label>
        <input 
            type="text" 
            name="slug" 
            v-model="newVideo.slug" 
            placeholder="Slug" 
            class="p-2 mt-2 mb-4 border border-gray-300 rounded w-full"
        />

        <!-- Description -->
        <label 
            for="description" 
            class="text-lg"
        >
            Description
        </label>
        <textarea 
            name="description" 
            v-model="newVideo.description" 
            placeholder="Description" 
            class="p-2 mt-2 mb-2 border border-gray-300 rounded w-full"
            rows="4"
        ></textarea>

        <!-- Video Length -->
        <label 
            for="video_length" 
            class="text-lg"
        >
            Video Length
        </label>
        <input 
            type="text" 
            name="video_length" 
            v-model="newVideo.video_length" 
            placeholder="Video Length" 
            class="p-2 mt-2 mb-4 border border-gray-300 rounded w-full"
        />

        <!-- Created At -->
        <label 
            for="created_at" 
            class="text-lg"
        >
            Created At
        </label>
        <input 
            type="date" 
            name="created_at" 
            v-model="newVideo.created_at" 
            placeholder="Created At" 
            class="p-2 mt-2 mb-4 border border-gray-300 rounded w-full"
        />

        <!-- Add Video Button -->
        <button
            class="bg-blue-500 text-white p-2 py-2 rounded mt-6 mr-2 hover:bg-blue-600 transition duration-200"
            @click="addVideo"
        >
            Add Video
        </button>
        <!-- Cancel Button -->
        <button
            class="bg-red-500 text-white p-2 py-2 rounded mt-26mover:bg-red-600 transition duration-200"
            @click="store.deactivateModal()"
        >
            Cancel
        </button>
    </div>
</template>

<script setup>
    import { useStore } from '../stores/store.js'
    import { ref } from 'vue'

    // Define the store 
    const store = useStore()

    // Define the new video object
    const newVideo = ref({
        name: '',
        slug: '',
        description: '',
        video_length: '',
        created_at: ''
    })

    // Function to add a new video
    const addVideo = () => {
        store.addVideo(newVideo.value)
        store.deactivateModal()
        resetForm()
    }

    // Function to reset the form
    const resetForm = () => {
        newVideo.value = {
            name: '',
            slug: '',
            description: '',
            video_length: '',
            created_at: ''
        }
    }
</script>