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
const searchQuery = ref('')
const isLoading  = ref(false)
onMounted(async () => {
  userData.value = await store.fetchUser(route.params.id);
  applicationLists.value = await storeApplication.getApplicationList(route.params.id);
  await getRecord();
});
const getRecord = async (page=1) => {
  const fetchRecord = await recordStore.fetchRecord(page,searchQuery.value,route.params.id);
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
const resolveStatusColor = status => {
  switch (status) {
    case 0: // Application Processing
      return 'primary';
    case 1: // Application Submitted
      return 'success';
    case 2: // Pending Docs
      return 'warning';
    case 3: // Offer Issue Conditional
      return 'info';
    case 4: // Offer Issue Unconditional
      return 'info';
    case 5: // Need Payment
      return 'warning';
    case 6: // CAS Issued
      return 'success';
    case 7: // Additional Doc Needed
      return 'warning';
    case 8: // Refund Required
      return 'danger';
    case 9: // Application Rejected
      return 'danger';
    case 10: // Session Expired
      return 'secondary';
    case 11: // Doc Received
      return 'success';
    case 12: // Partial Payment
      return 'warning';
    default:
      return 'secondary'; // Default or unknown status
  }
}


const resolveStatusName = status => {
  switch (status) {
    case 0:
      return 'Application Processing';
    case 1:
      return 'Application Submitted';
    case 2:
      return 'Pending Docs';
    case 3:
      return 'Offer Issue Conditional';
    case 4:
      return 'Offer Issue Unconditional';
    case 5:
      return 'Need Payment';
    case 6:
      return 'CAS Issued';
    case 7:
      return 'Additional Doc Needed';
    case 8:
      return 'Refund Required';
    case 9:
      return 'Application Rejected';
    case 10:
      return 'Session Expired';
    case 11:
      return 'Doc Received';
    case 12:
      return 'Partial Payment';
    default:
      return 'Unknown Status'; // Default or unknown status
  }
}
const viewApplicationDetail = (applicationId) => {
  router.push({ name: "application-details", params: { id: applicationId } });
};
const intake = ref("");
const courseType = ref("");
const university = ref("");
const course = ref("");
const records = ref();
const total = ref();
const itemsPerPage = ref(10);
const page = ref(1);
const updateOptions = (event) =>{
  getRecord(event.page)
}

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

  <VCard class="mt-5" v-if="userData.role === 'channel partner'">

    <VCardText>
      <h5 class="text-h5">
            User Application
          </h5>
      <VRow>
        <VCol cols="12" offset-md="8" md="4">
          <AppTextField
            v-model="search"
            placeholder="Search ..."
            append-inner-icon="tabler-search"
            single-line
            hide-details
            dense
            outlined
          />
        </VCol>
      </VRow>
    </VCardText>

    <!-- 👉 Data Table  -->
    <VDataTable
      :headers="headersApplication"
      :items="applicationLists || []"
      :search="search"
      :items-per-page="5"
      class="text-no-wrap color-black"
    >
      <template #item.student.name="{ item }">
        <p>{{ item.student.first_name }} {{ item.student.last_name }}</p>
      </template>
      <template #item.university.name="{ item }">
        <div class="d-flex flex-column ms-3">
          <span
            class="d-block font-weight-medium text-truncate text-high-emphasis"
            >{{ item.university.name }}</span
          >
          <span class="text-md">{{ item.course.name }}</span>
          <span class="text-md">{{ item.intake.name }}</span>
        </div>
      </template>
      <template #item.status="{ item }">
        <VChip
          :color="resolveStatusColor(item.status)"
          :class="`text-${resolveStatusColor(item.status)}`"
          size="small"
          class="font-weight-medium"
        >
          {{ resolveStatusName(item.status) }}
        </VChip>
      </template>
      <template #item.action="{ item }">
        <div class="d-flex flex-column ms-3">
          <IconBtn @click="viewApplicationDetail(item.id)">
            <VIcon icon="tabler-eye" />
          </IconBtn>
          <IconBtn @click="deleteItem(item.id)">
            <VIcon icon="tabler-trash" />
          </IconBtn>
        </div>
      </template>
    </VDataTable>
  </VCard>

  <VCard title="Course Details" class="mt-2" v-if="userData.role === 'editor'">
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
