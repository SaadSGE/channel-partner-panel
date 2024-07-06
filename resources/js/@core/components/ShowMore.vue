<template>
    <div>
      <div v-html="truncatedText" v-if="!isExpanded"></div>
      <div v-html="fullText" v-else></div>
      <a @click.prevent="toggle">{{ isExpanded ? 'Show Less' : 'Show More' }}</a>
    </div>
  </template>

  <script>
  import { computed, onMounted, ref } from 'vue';

  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
      lines: {
        type: Number,
        default: 3,
      },
      characters: {
        type: Number,
        default: 200,
      },
    },
    setup(props) {
      const isExpanded = ref(false);
      const truncatedText = ref('');
      const fullText = ref(props.text);

      const lineHeight = computed(() => 1.2); // assuming line-height is 1.2em

      const toggle = () => {
        isExpanded.value = !isExpanded.value;
      };

      const truncateText = () => {
        const lineLimit = props.lines;
        const charLimit = props.characters;

        const words = props.text.split(' ');
        let charCount = 0;
        let lineCount = 1;
        truncatedText.value = '';

        for (let i = 0; i < words.length; i++) {
          charCount += words[i].length + 1; // adding 1 for the space or newline

          if (charCount > charLimit || lineCount > lineLimit) {
            truncatedText.value += '...';
            break;
          }

          truncatedText.value += words[i] + ' ';

          if (words[i].includes('\n')) {
            lineCount++;
          }
        }

        if (lineCount <= lineLimit && charCount <= charLimit) {
          truncatedText.value = props.text;
        }
      };

      onMounted(() => {
        truncateText();
      });

      return {
        isExpanded,
        truncatedText,
        fullText,
        toggle,
        lineHeight,
      };
    },
  };
  </script>

  <style scoped>
  a {
    color: blue;
    cursor: pointer;
  }
  </style>
