<template>
    <div class="dark">
        <NuxtPage />
        <UNotifications>
            <template #title="{ title }">
                <span
                    class="text-black"
                    v-html="title"
                />
            </template>

            <template #description="{ description }">
                <span
                    class="text-black"
                    v-html="description"
                />
            </template>
        </UNotifications>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DefaultLayout',
};
</script>