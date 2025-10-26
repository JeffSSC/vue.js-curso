<template>
  <div
    @click="emit('clickEpisode')"
    class="card bg-base-200 shadow-sm hover:bg-secondary cursor-pointer"
  >
    <div class="avatar-group -space-x-6">
      <div v-for="(character, index) in charactersFilter" :key="index" class="avatar">
        <div class="w-12">
          <img :src="getImage(character)" />
        </div>
      </div>
      <div v-if="characters.length > 0" class="avatar avatar-placeholder">
        <div class="bg-neutral text-neutral-content w-12">
          <span>{{ `+${charactersTotal}` }}</span>
        </div>
      </div>
    </div>

    <div class="card-body">
      <h2 class="card-title">
        {{ name }}
        <BadgeEpisode>{{ episode }}</BadgeEpisode>
      </h2>
      <BadgeAirDate>{{ air_date }}</BadgeAirDate>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  episode: String,
  air_date: String,
  characters: Array,
})

const charactersFilter = computed(() => {
  if (props.characters.length > 5) {
    return props.characters.splice(0, 5)
  }
  return props.characters.splice(0)
})

const charactersTotal = computed(() => {
  return props.characters.length
})

const emit = defineEmits(['clickEpisode'])

function getImage(url) {
  const newUrl = url.replace(
    'https://rickandmortyapi.com/api/character/',
    'https://rickandmortyapi.com/api/character/avatar/',
  )
  return `${newUrl}.jpeg`
}
</script>
