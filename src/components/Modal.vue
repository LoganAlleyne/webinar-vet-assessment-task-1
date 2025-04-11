<template>
   <div 
        class="z-10 sticky inset-0 w-full h-dvh flex justify-center items-center"
        
    > 
        <div 
            class="z-0 absolute w-full h-full bg-[rgb(0,0,0)]/[.2]"
            @click="store.deactivateModal()"
            @keydown.enter="store.deactivateModal()"
        ></div>

        <div 
            class="z-10 max-w-[90%] border border-grey-500 rounded bg-white p-4 overflow-y-auto"
            tabindex="0"
            ref="modal"
        >
            <div class="flex justify-between mb-6">
                <h2 class="text-2xl">{{ store.modalTitle }}</h2>

                <button
                    class="h-8 w-8 flex items-center justify-center bg-red-500 text-white p-2 ml-4 rounded hover:bg-red-600 transition duration-200"
                    @click="store.deactivateModal()"
                >
                    X
                </button>
            </div>

            <ModalAdd v-if="store.modalType === 'add'" />

            <ModalEdit v-if="store.modalType === 'edit'" />

            <ModalConfirmDelete v-if="store.modalType === 'delete'" />

            <ModalViewVideo v-if="store.modalType === 'view'" />
        </div>
   </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { useStore } from '../stores/store.js'
    import ModalAdd from './ModalAdd.vue';
    import ModalEdit from './ModalEdit.vue';
    import ModalConfirmDelete from './ModalConfirmDelete.vue';
    import ModalViewVideo from './ModalViewVideo.vue';

	// Define the store 
	const store = useStore()

    // Define the modal reference
    const modal = ref(null)

    onMounted(() => {
        // Focus the modal when it is opened
        if (store.modalActive) {
            modal.value.focus()
        }
    })
</script>