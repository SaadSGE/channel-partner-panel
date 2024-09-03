<script setup>
definePage({
  meta: {
    action: "read",
    subject: "dashboard",
  },
});
import { useApplicationListStore } from "@/@core/stores/applicationList";
import { } from "@/@core/stores/commonFunction";
import { useRecordStore } from "@/@core/stores/recordStore";
import { useUserStore } from "@/@core/stores/user";
import { containsString } from '@/@core/utils/helpers.js';
import ApplicationList from "@/pages/application/index.vue";
import UserBioPanel from "@/pages/user/UserBioPanel.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const route = useRoute("apps-user-view-id");
const userTab = ref(null);
const router = useRouter();
const recordStore = useRecordStore();
const tabs = [
  {
    icon: "tabler-users",
    title: "Account",
  },
  {
    icon: "tabler-lock",
    title: "Security",
  },
  {
    icon: "tabler-bookmark",
    title: "Billing & Plan",
  },
  {
    icon: "tabler-bell",
    title: "Notifications",
  },
  {
    icon: "tabler-link",
    title: "Connections",
  },
];
const applicationLists = ref();
const store = useUserStore();
const storeApplication = useApplicationListStore();
const userData = ref([]);
const searchQuery = ref("");
const isLoading = ref(false);
onMounted(async () => {
  userData.value = await store.fetchUser(route.params.id);
  currentDocuments.value = userData.value.documents || [];
  await getRecord();
  //await fetchUsers();
});
const downloadFile = (fileUrl) => {
  const link = document.createElement('a');
      link.href = fileUrl;
      link.target = '_blank';
      link.download = 'test';

      // Simulate a click on the element <a>
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
};
const getRecord = async (page = 1) => {
  const fetchRecord = await recordStore.fetchRecord(
    page,
    searchQuery.value,
    route.params.id
  );
  records.value = fetchRecord.data;
  total.value = fetchRecord.total;
};

// const { data: userData } = await useApi(`/apps/users/${ route.params.id }`)
// if (userData.value) {
//   const [firstName, lastName] = userData.value.fullName.split(' ')

//   userData.value.firstName = firstName
//   userData.value.lastName = lastName
// }

const formatKey = (key) => {
  return key
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize the first letter of each word
};
const headersApplication = [
  {
    title: "APPLICATION ID",
    key: "application_id",
  },
  {
    title: "Student Name",
    key: "student.name",
  },

  {
    title: "University/Course Details",
    key: "university.name",
  },
  {
    title: "Status",
    key: "status",
  },

  {
    title: "Date Added",
    key: "created_at",
  },
  {
    title: "Action",
    key: "action",
    sortable: false,
  },
];
const headersRecord = [
  { title: "Country", key: "country.name" },
  { title: "Intake", key: "intake.name" },
  { title: "University", key: "university.name" },
  { title: "Course Type", key: "course.type" },
  { title: "Course Name", key: "course.name" },
  { title: "Tution Fee", key: "tuition_fee" },
  { title: "Course Duration", key: "course_duration" },
  { title: "Academic Requirement", key: "academic_requirement" },
  { title: "English Requirement", key: "english_requirement" },
  { title: "Actions", key: "actions", sortable: false },
];

const headersUser = [
  { title: "Name", key: "full_name" },
  { title: "Email", key: "email" },
  { title: "Record Count", key: "record_count" },
  { title: "Actions", key: "actions", sortable: false },
];


const currentDocuments = ref([]);


const intake = ref("");
const courseType = ref("");
const university = ref("");
const course = ref("");
const records = ref();
const total = ref();
const itemsPerPage = ref(10);
const page = ref(1);
const updateOptions = (event) => {
  getRecord(event.page);
};
const users = ref([]);

const totalUsers = ref(0);

const sortBy = ref();
const orderBy = ref();

const fetchUsers = async () => {
  isLoading.value = true;
  try {
    const response = await store.fetchUsers(
      page.value,
      searchQuery.value,
      selectedRole.value,
      route.params.id
    );
    users.value = response.data;
    console.log(users.value);
    totalUsers.value = response.total;
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    isLoading.value = false;
  }
};
const updateUserOptions = (options) => {
  sortBy.value = options.sortBy[0]?.key;
  orderBy.value = options.sortBy[0]?.order;
  fetchUsers();
};

</script>

<template>
  <VRow>
    <VCol cols="12" md="5" lg="4">
      <UserBioPanel :user-data="userData" />
    </VCol>
    <VCol cols="12" md="4" sm="6" lg="8">
      <VRow>
        <VCol
          cols="12"
          md="5"
          lg="4"
          v-for="(value, key) in userData.dashboard"
          :key="key"
        >
          <VCard>
            <VCardItem class="pb-3">
              <VCardTitle>{{ formatKey(key) }}</VCardTitle>
              <VCardSubtitle>Last Week</VCardSubtitle>
            </VCardItem>

            <VCardText>
              <div class="d-flex align-center justify-space-between gap-x-2">
                <h4 class="text-h4 text-center">{{ value }}</h4>
                <!-- You can add dynamic percentage changes here if you have that data -->
                <!-- <div v-if="key === 'application_processing'" class="text-sm text-success">+12.6%</div>
               <div v-else class="text-sm text-neutral">0%</div> -->
              </div>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VCol>
  </VRow>

  <VCard class="mt-5" v-if="containsString(userData.role,'channel partner')">
    <ApplicationList :userId="route.params.id"/>
    <VCardTitle>Documents</VCardTitle>
    <VCardText>
      <VCard
        v-for="(document, index) in currentDocuments"
        :key="index"
        class="mb-2"
      >
        <VCardText class="d-flex justify-space-between align-center">
          <div>

            <VIcon size="26" color="red" icon="tabler-file-type-doc" />
            <a :href="document.document_path" target="_blank">{{ formatKey(document.document_type) }}</a>
          </div>
          <VBtn icon @click="downloadFile(document.document_path)">
            <VIcon size="24" icon="tabler-eye" />
          </VBtn>
        </VCardText>
      </VCard>
    </VCardText>
  </VCard>

  <VCard title="Course Details" class="mt-2" v-if="containsString(userData.role,'editor')">
    <VCardText>
      <div class="d-flex justify-space-between flex-wrap gap-6">
        <div>
          <AppTextField
            v-model="searchQuery"
            style="max-inline-size: 200px; min-inline-size: 200px"
            placeholder="Search Record"
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
      :headers="headersRecord"
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
    </VDataTableServer>
  </VCard>


</template>
