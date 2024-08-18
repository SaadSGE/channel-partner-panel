
<script lang="js" setup>
definePage({
  meta: {
    action: 'read',
    subject: 'record',
  },
})
import ShowMore from "@/@core/components/ShowMore.vue";
import { commonFunction } from "@/@core/stores/commonFunction";
import { useRecordStore } from "@/@core/stores/recordStore";
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import Swal from 'sweetalert2';
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { VForm } from 'vuetify/components/VForm';
const router = useRouter();
const commonFunctionStore = commonFunction();
const recordStore = useRecordStore();

// Reactive state
const country = ref("");
const passportCountry = ref("");
const intake = ref("");
const courseType = ref("");
const university = ref("");
const course = ref("");
const tutionFee = ref("");
const courseDuration = ref("");
const id = ref(null);
const strp = ref();
const countries = ref();
const intakes = ref();
const universities = ref();
const courses = ref();
const academicRequirementEditor = ref('');
const englishRequirementEditor = ref('');
const records = ref();
const total = ref();
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const showAddForm = ref(true);
const showEditForm = ref(false);
const isContentCollapsed = ref(true);
const refForm = ref(null);
const refFormEdit = ref(null);
const showAppllicationForm = ref(true);
const showCourseDetails = ref(false);

const passportCountries = [
  "Bangladesh",
  "Nigeria",
  "Sri Lanka",
  "India",
  "Bhutan",
  "Ghana",
];

const courseTypes = ["Graduate", "Post Graduate"];
const headers = [
  { title: 'Country', key: 'country.name' },
  { title: 'Intake', key: 'intake.name' },
  { title: 'University', key: 'university.name' },
  { title: 'Course Type', key: 'course.type' },
  { title: 'Course Name', key: 'course.name' },
  { title: 'Tution Fee', key: 'tuition_fee' },
  { title: 'Course Duration', key: 'course_duration' },
  { title: 'Academic Requirement', key: 'academic_requirement' },
  { title: 'English Requirement', key: 'english_requirement' },
  { title: 'Actions', key: 'actions', sortable: false },
];

// Computed properties
const filteredCourseDetails = computed(() => {
  return commonFunctionStore.getFilteredCourseDetails(
    country.value,
    course.value,
    intake.value,
    university.value
  );
});

// Methods
const getRecord = async (page=1) => {
  const fetchRecord = await recordStore.fetchRecord(page,searchQuery.value);
  records.value = fetchRecord.data;
  total.value = fetchRecord.total;
};

const resetForm = async() => {
  country.value = '';
  intake.value = '';
  courseType.value = '';
  university.value = '';
  course.value = '';
  tutionFee.value = '';
  courseDuration.value = '';
  academicRequirementEditor.value = '\n';
  englishRequirementEditor.value = '\n';


  await refForm.value.resetValidation();

};
const submit = async () => {

  const isFormValid = await refForm.value.validate();
  if (isFormValid) {
    try {
      const recordData = {
        countryId: country.value,
        intakeId: intake.value,
        courseType: courseType.value,
        universityId: university.value,
        course: course.value,
        tutionFee: tutionFee.value,
        courseDuration: courseDuration.value,
        academicRequirement: academicRequirementEditor.value,
        englishRequirement: englishRequirementEditor.value,
      };

      const response = await recordStore.submitApplication(recordData);

      if (response) {
        console.log(recordStore.successMessage);
        await resetForm();
        getRecord();
        isContentCollapsed.value = true;
      }
    } catch (error) {
      console.error('Form submission error:', recordStore.errors, error);
    }
    await refForm.value.resetValidation();
  }
};

const submitEdit = async () => {
  const isFormValid = await refFormEdit.value.validate();
  if (isFormValid) {
    try {
      const recordData = {
        countryId: country.value,
        intakeId: intake.value,
        courseType: courseType.value,
        universityId: university.value,
        course: course.value,
        tutionFee: tutionFee.value,
        courseDuration: courseDuration.value,
        academicRequirement: academicRequirementEditor.value,
        englishRequirement: englishRequirementEditor.value,
      };

      const response = await recordStore.submitEditApplication(id.value, recordData);

      if (response) {
        console.log(response);
        resetForm();
        showEditForm.value = false;
        showAddForm.value = true;
        getRecord();
      }
    } catch (error) {
      console.error('Form submission error:', recordStore.errors, error);
    }
    await refForm.value.resetValidation();
  }
};

const editItem = (item) => {
  showAddForm.value = false;
  id.value = item.id;
  country.value = item.country_id;
  intake.value = item.intake_id;
  courseType.value = item.course.type;
  university.value = item.university_id;
  course.value = item.course.name;
  tutionFee.value = item.tuition_fee;
  courseDuration.value = item.course_duration;
  academicRequirementEditor.value = item.academic_requirement;
  englishRequirementEditor.value = item.english_requirement;
  showEditForm.value = true;
};

const closeEditForm = () => {
  showEditForm.value = false;
  showAddForm.value = true;
  resetForm();
};

const triggerCollapse = () => {
  isContentCollapsed.value = !isContentCollapsed.value;
};

const deleteItem = async (item) => {
  const data = { ...item };
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to delete this item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    try {
      await recordStore.deleteRecord(data.id);
      getRecord();

      Swal.fire(
        'Deleted!',
        'The item has been deleted.',
        'success'
      );
    } catch (error) {
      Swal.fire(
        'Error!',
        'There was an error deleting the item.',
        'error'
      );
    }
  }
};


const isLoading  = ref(false)
const searchQuery = ref('')
const updateOptions = (event) =>{
  getRecord(event.page)
}

onMounted(async () => {
  isLoading.value = true
  if (commonFunctionStore.countries.length === 0) await commonFunctionStore.getCountries();
  if (commonFunctionStore.courses.length === 0) await commonFunctionStore.getCourses();
  if (commonFunctionStore.intakes.length === 0) await commonFunctionStore.getIntakes();
  if (commonFunctionStore.universities.length === 0) await commonFunctionStore.getUniversities();
  if (commonFunctionStore.courseDetails.length === 0) await commonFunctionStore.getCourseDetails();

  countries.value = commonFunctionStore.countries;
  courses.value = commonFunctionStore.courses;
  intakes.value = commonFunctionStore.intakes;
  universities.value = commonFunctionStore.universities;
  await getRecord();
  isLoading.value = false
});
</script>

<template>
  <div v-if="showAppllicationForm">
    <AppCardActions title="Add Record" v-if="showAddForm" :loading="isLoading" no-actions>
      <template #append>
        <!-- 👉 Before actions slot -->
        <div>
          <IconBtn
            v-if="
              (!(actionRemove || actionRefresh) || actionCollapsed) &&
              !noActions
            "
            @click="triggerCollapse"
          >
            <VIcon
              size="20"
              icon="tabler-chevron-up"
              :style="{
                transform: isContentCollapsed ? 'rotate(-180deg)' : undefined,
              }"
              style="transition-duration: 0.28s"
            />
          </IconBtn>
        </div>
      </template>

      <VForm
        ref="refForm"
        @submit.prevent="() => {}"
        class="form-padding"
        v-show="!isContentCollapsed"
      >
        <VRow>
          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="country"
              :items="countries"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Country to Apply"
              placeholder="Select Country"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="intake"
              :items="intakes"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Intake"
              placeholder="Select Intake"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="courseType"
              :items="courseTypes"
              label="Course Type"
              placeholder="Select Course Type"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="university"
              :items="universities"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="University"
              placeholder="Select University"
              :rules="[requiredValidator]"
            />
          </VCol>

          <!-- University -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="course"
              label="Course Name."
              placeholder="BSC in Machine Learning"
              :rules="[requiredValidator]"
            />
          </VCol>

          <!-- Course -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="tutionFee"
              label="Tuttion Fee (Mention euro or dollar)"
              placeholder="1000 euro"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppTextField
              v-model="courseDuration"
              label="Course Duration (Mention years)"
              placeholder="2 years"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="12" style="margin: auto">
            <VLabel class="mb-2">Academic Requirement</VLabel>
            <QuillEditor
              theme="snow"
              v-model:content="academicRequirementEditor"
              content-type="html"
            />
          </VCol>

          <VCol cols="12" md="12" style="margin: auto">
            <VLabel class="mb-2">English Requirement</VLabel>
            <QuillEditor
              theme="snow"
              v-model:content="englishRequirementEditor"
              content-type="html"
            />
          </VCol>

          <!-- Submit and Reset Buttons -->
          <VCol cols="12">
            <VBtn @click="submit()" type="submit" color="primary" block>
              Submit
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </AppCardActions>

    <AppCardActions class="mt-2" v-if="showEditForm" :loading="isLoading" no-actions>
      <VCardTitle class="d-flex justify-space-between align-center mt-2 mb-2">
        <span>Edit Record</span>
        <IconBtn @click="closeEditForm">
          <VIcon icon="tabler-x" />
        </IconBtn>
      </VCardTitle>
      <VForm ref="refFormEdit" @submit.prevent="() => {}" class="form-padding">
        <VRow>
          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="country"
              :items="countries"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Country to Apply"
              placeholder="Select Country"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="intake"
              :items="intakes"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="Intake"
              placeholder="Select Intake"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="courseType"
              :items="courseTypes"
              label="Course Type"
              placeholder="Select Course Type"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppAutocomplete
              v-model="university"
              :items="universities"
              :item-title="(item) => item.name"
              :item-value="(item) => item.id"
              label="University"
              placeholder="Select University"
              :rules="[requiredValidator]"
            />
          </VCol>

          <!-- University -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="course"
              label="Course Name."
              placeholder="BSC in Machine Learning"
              :rules="[requiredValidator]"
            />
          </VCol>

          <!-- Course -->
          <VCol cols="12" md="6">
            <AppTextField
              v-model="tutionFee"
              label="Tuttion Fee (Mention euro or dollar)"
              placeholder="1000 euro"
              :rules="[requiredValidator]"
            />
          </VCol>

          <VCol cols="12" md="6">
            <AppTextField
              v-model="courseDuration"
              label="Course Duration (Mention years)"
              placeholder="2 years"
              :rules="[requiredValidator]"
            />
          </VCol>
          <VCol cols="12" md="12" style="margin: auto">
            <VLabel class="mb-2">Academic Requirement</VLabel>
            <QuillEditor
              theme="snow"
              v-model:content="academicRequirementEditor"
              content-type="html"
            />
          </VCol>

          <VCol cols="12" md="12" style="margin: auto">
            <VLabel class="mb-2">English Requirement</VLabel>
            <QuillEditor
              theme="snow"
              v-model:content="englishRequirementEditor"
              content-type="html"
            />
          </VCol>

          <!-- Submit and Reset Buttons -->
          <VCol cols="12">
            <VBtn @click="submitEdit()" type="submit" color="primary" block>
              Submit
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </AppCardActions>

    <AppCardActions title="Course Details" class="mt-2" :loading="isLoading" no-actions>
      <VCardText>
        <div class="d-flex justify-space-between flex-wrap gap-6">
          <div>
            <AppTextField
              v-model="searchQuery"
              style="max-inline-size: 200px; min-inline-size: 200px"
              placeholder="Search Review"
            />
          </div>
          <div class="d-flex flex-row gap-4 align-center flex-wrap">
            <AppSelect
              v-model="itemsPerPage"
              :items="[10, 25, 50, 100]"
              style="inline-size: 6.25rem"
            />
          </div>
        </div>
      </VCardText>
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :loading="isLoading"
        :items-length="total"
        :headers="headers"
        :items="records"
        item-value="total"
        class="text-no-wrap text-sm rounded-0"
        @update:options="updateOptions"
      >
        <template #item.academic_requirement="{ item }">
          <ShowMore :text="item.academic_requirement" :lines="3" />
        </template>
        <template #item.english_requirement="{ item }">
          <ShowMore :text="item.english_requirement" :lines="3" />
        </template>
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="total"
          />
        </template>
        <template #item.actions="{ item }">
          <div class="d-flex gap-1">
            <IconBtn @click="editItem(item)">
              <VIcon icon="tabler-edit" />
            </IconBtn>
            <IconBtn @click="deleteItem(item)">
              <VIcon icon="tabler-trash" />
            </IconBtn>
          </div>
        </template>
      </VDataTableServer>
    </AppCardActions>
  </div>
</template>
<style lang="scss">
.form-padding {
  padding: 0rem 2rem 2rem 2rem;
}
.label {
  color: black;
}
.ql-editor {
  height: 250px;
  max-height: 250px;
  overflow: auto;
}

.v-data-table > .v-data-table__wrapper > table > thead > tr > th,td {
  max-width: 30rem; /* Adjust the max-width as needed */
  overflow: auto;
  white-space: nowrap;
  word-wrap: break-word;

}

.v-table__wrapper{
  max-height: 35rem !important;
}
</style>
