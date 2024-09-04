<script setup>

definePage({
  meta: {
    public:true,
  }
});
import { ref } from 'vue';
import pdfFile from '@images/pdf/university-list.pdf'

import VuePdfEmbed from 'vue-pdf-embed'
import 'vue-pdf-embed/dist/styles/annotationLayer.css'
import 'vue-pdf-embed/dist/styles/textLayer.css'
</script>

<template>
    <VCard title="University List">
        <VuePdfEmbed annotation-layer text-layer :source="pdfFile" />
        </VCard>
</template>




