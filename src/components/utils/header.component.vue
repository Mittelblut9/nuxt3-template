<template>
    <UHeader>
        <UNavigationTree :links="links" />
    </UHeader>
</template>

<script lang="ts" setup>
const links = [
    {
        label: useI18n().t('header.links.example.label'),
        icon: useI18n().t('header.links.example.icon'),
        to: useI18n().t('header.links.example.to')
    },
];
</script>
