<template>
  <VCard>
    <VCardText>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle class="padding-bottom">Lead Information</VCardTitle>
      </div>

      <VRow>
        <VCol cols="12" md="6">
          <VTable density="compact" class="info-table custom-table">
            <tbody>
              <tr>
                <td class="font-weight-bold">Email</td>
                <td>{{ lead.email || '-' }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Name</td>
                <td>{{ lead.name || '-' }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Phone</td>
                <td>{{ lead.phone || '-' }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Interested Course</td>
                <td>{{ lead.interested_course || '-' }}</td>
              </tr>
            </tbody>
          </VTable>
        </VCol>

        <VCol cols="12" md="6">
          <VTable density="compact" class="info-table custom-table">
            <tbody>
              <tr>
                <td class="font-weight-bold">Interested Country</td>
                <td>{{ lead.interested_country || '-' }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">IELTS or English Test</td>
                <td>{{ lead.ielts_or_english_test || '-' }}</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Current Educational Qualifications</td>
                <td>{{ lead.current_educational_qualifications || '-' }}</td>
              </tr>
            </tbody>
          </VTable>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  lead: {
    type: Object,
    required: true,
    default: () => ({
      email: '',
      name: '',
      phone: '',
      interested_course: '',
      interested_country: '',
      Ielts_or_english_test: '',
      current_educational_qualifications: ''
    })
  }
});
</script>

<style lang="scss" scoped>
.padding-bottom {
  padding-block-end: 30px;
}

.info-table {
  overflow: hidden;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  background: #f0f7ff !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 24px -4px rgba(var(--v-shadow-key-umbra-color), 0.2);
    transform: translateY(-2px);
  }

  td {
    background-color: #f0f7ff !important;
    border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    padding-block: 12px !important;
    padding-inline: 16px !important;
  }

  td:first-child {
    background-color: #e1f0ff !important;
    font-weight: 600;
    inline-size: 140px;
  }

  tr:last-child td {
    border-block-end: none;
  }
}

.custom-table {
  position: relative;
  z-index: 1;
  background: #f0f7ff !important;
  box-shadow: 0 2px 6px 0 rgba(var(--v-shadow-key-umbra-color), 0.14);
}
</style>
