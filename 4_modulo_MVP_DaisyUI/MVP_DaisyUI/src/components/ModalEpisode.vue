<script setup>
import axios from 'axios'

const props = defineProps({
  episodeId: {
    type: String,
    required: true,
  },
})

function getImage(url) {
  const newUrl = url.replace(
    'https://rickandmortyapi.com/api/character/',
    'https://rickandmortyapi.com/api/character/avatar/',
  )
  return `${newUrl}.jpeg`
}

const show = defineModel()

const episode = ref(null)
async function handleGetEpisode() {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${props.episodeId}`)
    episode.value = response.data
  } catch (error) {
    console.error(error)
  }
}

watch(show, (newValue) => {
  if (newValue) {
    handleGetEpisode()
  }
  episode.value = null
})
</script>

<template>
  <dialog
    id="modal-episode"
    class="modal"
    :class="{ 'modal-open': show }"
    @click.self="show = false"
  >
    <div class="modal-box" v-if="episode">
      <form method="dialog">
        <button
          class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          @click="show = false"
        >
          ✕
        </button>
      </form>
      <h3 class="text-lg font-bold pb-2">
        {{ episode.name }} <BadgeEpisode>{{ episode.episode }}</BadgeEpisode>
      </h3>
      <div v-for="(character, index) in episode.characters" :key="index" class="avatar p-1">
        <div class="w-16 rounded-full">
          <img :src="getImage(character)" />
        </div>
      </div>
      <p class="py-4">
        <BadgeAirDate>{{ episode.air_date }}</BadgeAirDate>
      </p>
    </div>
    <div class="modal-box flex justify-center" v-else>
      <span class="loading loading-bars loading-xl"></span>
    </div>
  </dialog>
</template>
