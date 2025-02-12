<script setup lang="ts">
interface Props {
    color?: string;
}

const props = withDefaults(defineProps<Props>(), {
    color: 'white'
});
</script>

<template>
    <div class="brutal-card">
        <slot></slot>
    </div>
</template>