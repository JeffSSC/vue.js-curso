<script setup>
import axios from 'axios'

const page = ref(1)
const totalPages = ref(0)
const chosenEpisodeId = ref('')
const modalOpen = ref(false)

const episodes = ref([])

function openModal(episodeId) {
  chosenEpisodeId.value = episodeId.toString()
  modalOpen.value = true
}

async function handleGetEpisodes() {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/episode', {
      params: {
        page: page.value,
      },
    })
    episodes.value = response.data.results
    totalPages.value = response.data.info.pages
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  handleGetEpisodes()
})

watch(page, () => {
  handleGetEpisodes()
})
</script>

<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardBase
        v-for="episode in episodes"
        :key="episode.id"
        :name="episode.name"
        :episode="episode.episode"
        :air_date="episode.air_date"
        :characters="episode.characters"
        @clickEpisode="openModal(episode.id)"
      />
    </div>
    <div class="flex justify-center py-4">
      <div class="join">
        <button
          v-for="i in totalPages"
          :key="i"
          class="join-item btn btn-lg md:btn-md"
          :class="{ 'btn-active': i === page }"
          @click="page = i"
        >
          {{ i }}
        </button>
      </div>
    </div>
    <ModalEpisode v-model="modalOpen" :episodeId="chosenEpisodeId" />
  </div>
</template>
