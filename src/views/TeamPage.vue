<template>
  <div class="bg-cover">
    <NavigationOpenDota />
    <div class="wrapper-grid team-page">
      <div class="team-page_title">
        <h1>Список команд</h1>
      </div>
      <div class="team-table">
        <div class="team-table-header">
          <div class="team-table-header_rank">
            <p class="team-table-header_value">Ранг</p>
          </div>
          <div class="team-table-header_name">
            <p class="team-table-header_value">Название команды</p>
          </div>
          <div class="team-table-header_rating">
            <p class="team-table-header_value">Рейтинг</p>
          </div>
          <div class="team-table-header_wins">
            <p class="team-table-header_value">Победы</p>
          </div>
          <div class="team-table-header_losses">
            <p class="team-table-header_value">Проигрыши</p>
          </div>
        </div>
        <TeamTableRow
          v-for="opendotaTeam in opendotaTeams"
          :opendotaTeam="opendotaTeam"
          :key="opendotaTeam.team_id"
          v-if="!isTeamDataLoading"
        />
        <div v-else class="team-table-loading">
          <h2>Loading...</h2>
        </div>
        <div class="team-table-info" v-if="!isTeamDataLoading">
          <p class="team-table-info_data">Team Elo Rankings</p>
          <p>k=32, init=1000</p>
        </div>
      </div>
      <button-white class="team-page_button">Загрузить еще</button-white>
    </div>
    <button-top />
    <FooterDefault />
  </div>
</template>

<script>
import axios from "axios";
import NavigationOpenDota from "@/components/NavigationOpenDota.vue";
import FooterDefault from "@/components/FooterDefault.vue";
import TeamTableRow from "@/components/TeamTableRow.vue";

export default {
  name: "team-page",
  components: {
    NavigationOpenDota,
    FooterDefault,
    TeamTableRow,
  },
  data() {
    return {
      opendotaTeams: [],
      isTeamDataLoading: true,
      timer: "",
      currentRank: []
    };
  },
  methods: {
    async fetchOpendotaTeams() {
      try {
        this.isTeamDataLoading = true;
        const response = await axios.get("https://api.opendota.com/api/teams");
        this.opendotaTeams = response.data.slice(0, 10);
      } catch (e) {
        alert("Error");
      } finally {
        this.isTeamDataLoading = false;
      }
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  created() {
    this.fetchOpendotaTeams();
    this.timer = setInterval(this.fetchOpendotaTeams, 1000 * 60);
  },
  beforeUnmount() {
    this.cancelAutoUpdate();
  },
};
</script>

<style lang="scss" scoped>
.team-page {
  z-index: 1;
  padding-bottom: 3.375em;
  @media (max-width: 390px) {
    margin: 0 auto;
  }

  &_title {
    padding-top: 9.25em;
    grid-column: 3 / span 4;
    @media (max-width: 390px) {
      padding-top: 4em;
      text-align: center;
    }
  }

  &_button {
    grid-column: 6 / span 2;
    margin: 0 auto;
    padding: 0.9em 1.25em;
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
    grid-template-columns: 120px auto 150px 150px 150px;
    background-color: var(--violet);
    @media (max-width: 390px) {
      grid-template-columns: 35% 65%;
      gap: 0 10px;
    }

    &_value {
      text-transform: uppercase;
    }
    &_rank {
      padding: 1.25em 0 1.25em 2.5em;
      @media (max-width: 390px) {
        padding: 1em 0;
      }
    }
    &_name {
      padding: 1.25em 0 1.25em 2em;
      @media (max-width: 390px) {
        padding: 1em 0;
      }
    }
    &_rating,
    &_wins {
      padding: 1.25em 0;
      @media (max-width: 390px) {
        display: none;
      }
    }
    &_losses {
      padding: 1.25em 2.5em 1.25em 0;
      @media (max-width: 390px) {
        display: none;
      }
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
