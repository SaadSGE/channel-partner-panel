<script setup>
import universitylogo from '../../../images/university.jpg';
const topTenUniversities = [
    {
        name: 'University of Oxford',
        country: 'UK',
        applications: 450,
    },
    {
        name: 'University of Cambridge',
        country: 'UK',
        applications: 425,
    },
    {
        name: 'Harvard University',
        country: 'USA',
        applications: 400,
    },
    {
        name: 'MIT',
        country: 'USA',
        applications: 380,
    },
    {
        name: 'Stanford University',
        country: 'USA',
        applications: 350,
    },
    {
        name: 'Imperial College London',
        country: 'UK',
        applications: 320,
    },
]

const moreList = [
    {
        title: 'View All',
        value: 'View All',
    },
]
</script>

<template>
    <VCard title="Top Ten Universities" subtitle="The best 10 universities in the world">
        <template #append>
            <div class="mt-n4 me-n2">
                <MoreBtn size="small" :menu-list="moreList" />
            </div>
        </template>

        <VCardText>
            <VList class="card-list">
                <VListItem v-for="university in topTenUniversities" :key="university.name">
                    <template #prepend>
                        <VAvatar size="34" color="secondary" variant="tonal" class="me-1" :image="universitylogo" />
                    </template>

                    <VListItemTitle class="font-weight-medium">
                        {{ university.name }}
                    </VListItemTitle>
                    <VListItemSubtitle>
                        {{ university.country }}
                    </VListItemSubtitle>

                    <template #append>
                        <div class="d-flex align-center font-weight-medium">
                            <div class="font-weight-medium">
                                {{ university.applications }}
                            </div>
                        </div>
                    </template>
                </VListItem>
            </VList>
        </VCardText>
    </VCard>
</template>

<style lang="scss" scoped>
.card-list {
    --v-card-list-gap: 1rem;
}
</style>
