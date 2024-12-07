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
                    label: useI18n().t('header.links.example.label'),
                    icon: useI18n().t('header.links.example.icon'),
                    to: useI18n().t('header.links.example.to')
                },
            ]
        };
    }
};
</script>
