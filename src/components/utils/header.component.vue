<template>
    <UHeader :links="links">
        <template #panel>
            <UNavigationTree :links="links" />
        </template>
    </UHeader>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
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
