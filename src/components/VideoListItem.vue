<template>
    <div>
        <div class="flex items-center p-4 m-2 border border-gray-300 rounded bg-white shadow-md hover:shadow-lg hover:cursor-pointer hover:bg-green-50 transition-shadow duration-200">
            <div 
                class="flex flex-col w-full"
                @click="manipulateVideo('view')"
                @keydown.enter="manipulateVideo('view')"
                tabindex="0"
                role="button"
            >
                <h3 class="text-lg font-semibold mt-2">{{ video.name }}</h3>
                <p class="text-gray-600">{{ video.description }}</p>
                <p class="text-sm text-gray-500">{{  video.video_length }}</p>
                <p class="text-sm text-gray-500">{{ video.created_at }}</p>
            </div>

            <div class="flex flex-col flex-shrink-0 ml-4">
                <button
                    class="p-2 mb-2 flex-grow bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer transition duration-200"
                    @click="manipulateVideo('edit')"
                >
                    <img :src="editIcon" alt="edit"/>
                </button>
                <button
                    class="p-2 mt-2 bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer transition duration-200"
                    @click="manipulateVideo('delete')"
                >
                    <img :src="deleteIcon" alt="delete"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import { useStore } from '../stores/store.js'
    import editIcon from '../assets/edit-icon.svg';
    import deleteIcon from '../assets/delete-icon.svg';

    // Define the store 
    const store = useStore()

    // Define the props for the component
    const props = defineProps({
        video: {
            type: Object,
            required: true
        }
    });

    // Function to handle the edit/delete action
    const manipulateVideo = (action) => {
        store.currentVideo = props.video;
        store.activateModal(action);
    }
</script>