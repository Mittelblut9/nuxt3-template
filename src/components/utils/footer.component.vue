<template>
    <UFooter :links="links">
        <template #left>
            <span
                v-text="$t('footer.copyright', {
                    year: new Date().getFullYear(),
                })"
            />
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
          label: this.$t('header.links.example.label'),
          icon: this.$t('header.links.example.icon'),
          to: this.$t('header.links.example.to')
        },
      ]
    };
  }
};
</script>
