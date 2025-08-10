<template>
    <UFooter>
        <template #left>
            <span
                v-text="useI18n().t('footer.copyright', {
                    year: new Date().getFullYear(),
                })"
            />
        </template>

        <UNavigationMenu
            :items="links"
            variant="link"
        />

        <template #right>
            <UColorModeButton />
            <UButton
                icon="i-simple-icons-github"
                color="neutral"
                variant="ghost"
                to="https://github.com/Mittelblut9"
                target="_blank"
            />
        </template>
    </UFooter>
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
