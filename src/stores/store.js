import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        videos: [],
        page: 0,
        pageSize: 10,
        searchQuery: '',
        modalActive: false,
        modalType: '',
        currentVideo: null, 
    }),

    getters: {
        // Filter videos based on the search query can be easily extended to include other filters
        filteredVideos: (state) => {
            if (state.searchQuery === '') {
                return state.videos;
            }
            return state.videos.filter(video =>
                video.name.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
        },

        // Dynamically set the Modal title based on the modal type
        modalTitle: (state) => {
            switch (state.modalType) {
                case 'add':
                    return 'Add new video'
                case 'edit':
                    return 'Edit video'
                case 'delete':
                    return 'Are you sure you want to delete this video?'
                case 'view':
                    return state.currentVideo.name
                default:
                    return ''
            }
        }
    },

    actions: {
        // Fetch videos from JSON file
        // This function is called when the store is created
        async getVideos() {
            try {
                const response = await fetch('src/data/videos.json');
                const data = await response.json();
                this.videos = data;
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        },

        // Delete video
        // Were this to be a full application, this would either edit the JSON file with something like node + fs or make a DELETE request to a REST API to delete the video 
        deleteVideo(id) {
            this.videos = this.videos.filter(video => video.id !== id);
        },


        // Add video
        // Were this to be a full application, this would either edit the JSON file with something like node + fs or make a POST request to a REST API to add the video
        addVideo(video) {        
            // Generate a new ID for the video based on the highest existing ID
            // This is a simple way to generate a new ID, but in a real application, you would want to use a more robust method for generating unique IDs such as a UUID or a database auto-incrementing ID
            const highestID = this.videos.reduce((max, video) => Math.max(max, video.id), 0);
            video.id = highestID + 1; 
            console.log(video.id);   
            console.log(highestID);
            this.videos.push(video);
        },

        // Update video
        // Were this to be a full application, this would either edit the JSON file with something like node + fs or make a PUT request to a REST API to update the video
        updateVideo(updatedVideo) {
            const index = this.videos.findIndex(video => video.id === updatedVideo.id);
            if (index !== -1) {
                this.videos[index] = updatedVideo;
            }
        },

        // Open modal 
        activateModal(type) {
            this.modalType = type;
            this.modalActive = true;
        },

        // Close modal
        deactivateModal() {
            this.modalActive = false;
            this.modalType = '';
            this.currentVideo = null;
        },
    },
});
