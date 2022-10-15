<template>
    <div class="bg-cover">
        <Nav />
        <div class="wrapper-grid team-page">
            <div class="team-page_title">
                <h1>Список матчей</h1>
            </div>
            <div class="team-table">
                <div class="team-table-header">
                    <div class="team-table-header_id"><p class="team-table-header_value">ID</p></div>
                    <div class="team-table-header_duration"><p class="team-table-header_value">Длительность</p></div>
                    <div class="team-table-header_radiant"><p class="team-table-header_value">Radiant</p></div>
                    <div class="team-table-header_dire"><p class="team-table-header_value">Dire</p></div>
                </div>            
                <MatchesTableRow 
                    v-for="opendotaMatche in opendotaMatches"
                    :opendotaMatche="opendotaMatche"
                    :key="opendotaMatche.team_id"
                    v-if="!isMatchesDataLoading"
                />  
                <div v-else class="team-table-loading">
                    <h2>Loading...</h2>
                  </div>         	
            </div>
            <button-white class="team-page_button">Загрузить еще</button-white>
        </div>
        <button-top />
        <Footer />
    </div>
</template>

<script>
import axios from "axios"
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import MatchesTableRow from '@/components/MatchesTableRow.vue'

export default {
    name: 'matches-page',
    components: {
        Nav,
        Footer,
        MatchesTableRow
    },
    data() {
        return {
            opendotaMatches: [],
            isMatchesDataLoading: false
        }
    },
    methods: {
        async fetchOpendotaMatches() {
        try {
        this.isMatchesDataLoading = true;
          const response = await axios.get('https://api.opendota.com/api/publicMatches');
          this.opendotaMatches = response.data.slice(0, 10);
        } catch (e) {
          alert('Error')
        } finally {
            this.isMatchesDataLoading = false;
        }
      },
    },
    mounted() {
      this.fetchOpendotaMatches();
    },
}
</script>

<style lang="scss" scoped>
.team-page {
    z-index: 1;
    padding-bottom: 3.375em;
    &_title {
        padding-top: 9.25em;
        grid-column: 3 / span 4;
    }

    &_button {
        grid-column: 6 / span 2;
        margin: 0 auto;
        padding: .9em 1.25em;
    }

}
.team-table {
    width: 100%;
    grid-column: 3 / span 8;
    margin: 3.125em 0;
    border: 2px solid var(--violet);
    filter: drop-shadow(0px 48px 64px var(--dark-violet));
    border-radius: 10px;
    &-loading {
        padding: 1em 2em;
    }
    &-header {
        display: grid;
        gap: 0 20px; 
        grid-template-columns: 1fr 300px 300px 300px;
        background-color: var(--violet);     

        &_value {
            text-transform: uppercase;
        }
        &_id {            
            padding: 1.25em 0 1.25em 2.5em;
        }
        &_duration {
            padding: 1.25em 0;
        }
        &_radiant {
            padding: 1.25em 0;
        }
        &_dire {
            padding: 1.25em 2.5em 1.25em 0;
        }
    }
    &-info {
        display: flex;
        align-items: center;
        gap: 0 .6em;
        padding: 1.3em 0 1.3em;
        &_data {
            position: relative;
            padding-left: 3em;
            color: var(--white);
            &::before {
                content: "";
                position: absolute;
                width: 24px;
                height: 24px;
                background-image: url("@/assets/svg/Icons_04.svg");
                background-repeat: no-repeat;
                background-position: center;
                left: 1em;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
            }
        }
    }
}

</style>