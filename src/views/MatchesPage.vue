<template>
  <div class="bg-cover">
    <NavigationOpenDota />
    <div class="wrapper-grid matches-page">
      <div class="matches-page_title">
        <h1>Список матчей</h1>
      </div>
      <div class="matches-table">
        <div class="matches-table-header">
          <div class="matches-table-header_id">
            <p class="matches-table-header_value">ID</p>
          </div>
          <div class="matches-table-header_duration">
            <p class="matches-table-header_value">Длительность</p>
          </div>
          <div class="matches-table-header_radiant">
            <p class="matches-table-header_value">Radiant</p>
          </div>
          <div class="matches-table-header_dire">
            <p class="matches-table-header_value">Dire</p>
          </div>
        </div>
        <TransitionGroup name="fade">
          <MatchesTableRow
            v-for="opendotaMatche in opendotaMatches"
            :opendotaMatche="opendotaMatche"
            :key="opendotaMatche.matches_id"
            v-if="!isMatchesDataLoading"
          />
          <div v-else class="matches-table-loading">
            <h2>Loading...</h2>
          </div>
        </TransitionGroup>
      </div>
      <button-white class="matches-page_button">Загрузить еще</button-white>
    </div>
    <button-top />
    <FooterDefault />
  </div>
</template>

<script>
import axios from "axios";
import NavigationOpenDota from "@/components/NavigationOpenDota.vue";
import FooterDefault from "@/components/FooterDefault.vue";
import MatchesTableRow from "@/components/MatchesTableRow.vue";

export default {
  name: "matches-page",
  components: {
    NavigationOpenDota,
    FooterDefault,
    MatchesTableRow,
  },
  data() {
    return {
      opendotaMatches: [],
      timer: "",
      isMatchesDataLoading: false,
      authModal: { isOpened: false },
    };
  },
  methods: {
    async fetchOpendotaMatches() {
      try {
        this.isMatchesDataLoading = true;
        const response = await axios.get(
          "https://api.opendota.com/api/publicMatches"
        );
        this.opendotaMatches = response.data.slice(0, 10);
      } catch (e) {
        alert("Error");
      } finally {
        this.isMatchesDataLoading = false;
      }
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  created() {
    this.fetchOpendotaMatches();
    this.timer = setInterval(this.fetchOpendotaMatches, 1000 * 60);
  },
  beforeUnmount() {
    this.cancelAutoUpdate();
  },
};
</script>

<style lang="scss" scoped>
.matches-page {
  z-index: 1;
  padding-bottom: 3.375em;
  &_title {
    padding-top: 9.25em;
    grid-column: 3 / span 4;
  }

  &_button {
    grid-column: 6 / span 2;
    margin: 0 auto;
    padding: 0.9em 1.25em;
  }
}
.matches-table {
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
    gap: 0 0.6em;
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
