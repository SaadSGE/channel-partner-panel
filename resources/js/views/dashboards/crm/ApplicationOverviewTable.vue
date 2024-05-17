<script setup lang="ts">
const intakes = [
    {
        intake: 'April/May/June/July 2024',
        details: '15 Offers',
        applicationsSubmitted: 15,
        noOfAppProcess: 3,
        appNotProcess: 0,
        caseClose: 1,
        totalOffer: 15,
        payment: 3,
    },
    {
        intake: 'August/September/October/November 2023',
        details: '10 Processing, 4 Not Processed',
        applicationsSubmitted: 88,
        noOfAppProcess: 10,
        appNotProcess: 4,
        caseClose: 9,
        totalOffer: 6,
        payment: 0,
    },
    {
        intake: 'August/September/October/November 2024',
        details: '4 Not Processed',
        applicationsSubmitted: 49,
        noOfAppProcess: 8,
        appNotProcess: 4,
        caseClose: 12,
        totalOffer: 12,
        payment: 3,
    },
    {
        intake: 'December 2023',
        details: '0 Offers',
        applicationsSubmitted: 4,
        noOfAppProcess: 0,
        appNotProcess: 0,
        caseClose: 1,
        totalOffer: 1,
        payment: 0,
    },
    {
        intake: 'January/February/March 2022',
        details: '0 Offers',
        applicationsSubmitted: 35,
        noOfAppProcess: 3,
        appNotProcess: 0,
        caseClose: 29,
        totalOffer: 3,
        payment: 0,
    },
    {
        intake: 'January/February/March 2023',
        details: '3 Processing, 0 Not Processed',
        applicationsSubmitted: 31,
        noOfAppProcess: 3,
        appNotProcess: 0,
        caseClose: 12,
        totalOffer: 2,
        payment: 1,
    },
    {
        intake: 'January/February/March 2024',
        details: '4 Not Processed',
        applicationsSubmitted: 62,
        noOfAppProcess: 4,
        appNotProcess: 4,
        caseClose: 20,
        totalOffer: 22,
        payment: 1,
    },
    {
        intake: 'September/October 2024',
        details: '2 Not Processed',
        applicationsSubmitted: 2,
        noOfAppProcess: 0,
        appNotProcess: 2,
        caseClose: 2,
        totalOffer: 0,
        payment: 0,
    }
];
</script>

<template>
  <VTable class="text-no-wrap">
    <thead>
      <tr>
        <th>Intake</th>
        <th>Details</th>
        <th>Applications Submitted</th>
        <th>No of App Process</th>
        <th>App Not Process</th>
        <th>Case Close</th>
        <th>Total Offer</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in intakes" :key="item.intake">
        <td>{{ item.intake }}</td>
        <td>{{ item.details }}</td>
        <td>{{ item.applicationsSubmitted }}</td>
        <td>{{ item.noOfAppProcess }}</td>
        <td>{{ item.appNotProcess }}</td>
        <td>{{ item.caseClose }}</td>
        <td>{{ item.totalOffer }}</td>
        <td>{{ item.payment }}</td>
      </tr>
    </tbody>
  </VTable>
</template>
