<template>
  <router-link to="/MatchDetailsPage">
    <div class="team-table-row" @click.once="fetchMatchDetails">
      <div class="team-table-content">
        <div class="team-table-content_id">
          <p class="team-table-content_id-data">
            {{ opendotaMatche.match_id }}
          </p>
          <p>{{ `${matchStartTime} часов назад / Immortal` }}</p>
        </div>
        <div class="team-table-content_duration">
          <div class="team-table-content_duration-data">
            <p>{{ matchDurationData }}</p>
          </div>
        </div>
        <div class="team-table-content_radiant">
          <div class="team-table-content_radiant-data">
            <img src="../assets/heroes.png" width="64" height="36" />
          </div>
        </div>
        <div class="team-table-content_dire">
          <div class="team-table-content_dire-data">
            <img src="../assets/heroes.png" width="64" height="36" />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import axios from "axios"
export default {
  props: {
    opendotaMatche: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  computed: {
    matchDurationData() {
      return (Math.trunc((this.opendotaMatche.duration / 60) * 100) / 100)
        .toString()
        .replace(".", ":");
    },
    matchStartTime() {
      return Math.trunc(this.opendotaMatche.start_time / 86400000);
    },
  },
};
</script>

<style lang="scss" scoped>
.team-table-row:nth-child(even) {
  background-color: var(--dark-violet-alt-3);
  border-bottom: 2px solid var(--violet);
  transition: all 0.6s;
  &:hover {
    background-color: var(--bright-violet-gradient);
    transition: all 0.6s;
  }
}
.team-table-row:nth-child(odd) {
  background-color: var(--dark-violet);
  border-bottom: 2px solid var(--violet);
  transition: all 0.6s;
  &:hover {
    background-color: var(--bright-violet-gradient);
    transition: all 0.6s;
  }
}
.team-table-content {
  display: grid;
  gap: 0 20px;
  grid-template-columns: auto 300px 300px 300px;

  &_id {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 1.25em 0 1.25em 2.5em;
    &-data {
      color: var(--lime);
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
    }
  }
  &_duration {
    align-self: center;
    padding: 1.25em 0;

    &-data {
      display: flex;
      align-items: center;
      gap: 0.6em;

      .team-logo {
        color: var(--lime);
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
      }
    }
  }
  &_radiant {
    align-self: center;
    padding: 1.25em 0;
  }
  &_dire {
    align-self: center;
    padding: 1.25em 0;
  }
  &_losses {
    align-self: center;
    padding: 1.25em 2.5em 1.25em 0;
  }
}
</style>
