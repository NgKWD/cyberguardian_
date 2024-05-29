<template>
  <div class="question1-container">
    <span class="question1-text heading3">{{ question }}</span>
    <span class="bodySmall">{{ answer }}</span>
  </div>
</template>

<script>
export default {
  name: 'Question1',
  props: {
    question: {
      type: String,
      default:
        'Use Multi-Factor Authentication (MFA) for all critical systems and services. MFA adds an extra layer of security by requiring multiple forms of verification. This reduces the risk of unauthorized access even if credentials are compromised.',
    },
    answer: {
      type: String,
      default:
        'NIST Special Publication 800-63B on Digital Authentication Guidelines',
    },
  },
}
</script>

<style scoped>
.question1-container {
  gap: var(--dl-space-space-unit);
  flex: 1;
  width: auto;
  height: auto;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.question1-text {
  font-weight: 700;
}
@media(max-width: 767px) {
  .question1-text {
    align-self: flex-start;
  }
}
</style>
