<template>
    <UFooter :links="links">
        <template #left>
            Copyright © {{ new Date().getFullYear() }}
        </template>

        <template #right>
            <UColorModeButton />
            <UButton
                icon="i-simple-icons-github"
                color="gray"
                variant="ghost"
                to="https://github.com/Mittelblut9"
                target="_blank"
            />
        </template>
    </UFooter>
</template>

<script lang="ts">
export default {
  name: 'FooterComponent',
  data() {
    return {
      links: [
        {
          label: 'Nuxt UI',
          to: 'https://ui.nuxt.com/'
        },
        {
          label: 'Nuxt Docs',
          to: 'https://nuxt.com'
        },
        {
          label: 'Nuxt Studio',
          to: 'https://nuxt.studio'
        }
      ]
    };
  }
};
</script>
