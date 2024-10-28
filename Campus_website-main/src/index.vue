<script setup>
import page_foot from '@/view/foot.vue'
import page_head from '@/view/headers.vue'
</script>

<template>
    <page_head></page_head>
    <page_foot></page_foot>
    <t-back-top container="body" :visible-height="0" :offset="[20, 0]" style="position: fixed; right: 20px; bottom: 15px"></t-back-top>
</template>

<style scoped>

</style>
