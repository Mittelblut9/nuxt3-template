<template>
    <UHeader :links="links">
        <template #logo>
            <Logo class="w-auto h-6" />
        </template>

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
          label: 'Docs',
          icon: 'i-heroicons-book-open',
          to: '/getting-started'
        },
        {
          label: 'Pro',
          icon: 'i-heroicons-square-3-stack-3d',
          to: '/pro'
        },
        {
          label: 'Releases',
          icon: 'i-heroicons-rocket-launch',
          to: '/releases'
        }
      ]
    };
  }
};
</script>
