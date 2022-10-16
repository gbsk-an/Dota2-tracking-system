<template>
  <div class="team-table-row">
    <div class="team-table-content">
      <div class="team-table-content_rank">
        <p class="team-table-content_rank-data" :rankData="rankData">{{rank}}</p>
      </div>
      <div class="team-table-content_name">
        <div class="team-table-content_name-data">
          <img
            class="team-logo-image"
            :src="opendotaTeam.logo_url"
            width="40"
            height="40"
          />
          <div>
            <p class="team-logo">{{ opendotaTeam.name }}</p>
            <p class="info-update-time">{{ opendotaTeam.last_match_time }}</p>
          </div>
        </div>
      </div>
      <div class="team-table-content_rating">
        <div class="team-table-content_rating-data">
          <p>{{ opendotaTeam.rating }}</p>
          <img
            src="../assets/svg/Status-100.svg"
            width="110"
            height="20"
            alt="100%"
          />
        </div>
      </div>
      <div class="team-table-content_wins">
        <div class="team-table-content_wins-data">
          <p>{{ opendotaTeam.wins }}</p>
          <img
            src="../assets/svg/Status-80.svg"
            width="110"
            height="20"
            alt="80%"
          />
        </div>
      </div>
      <div class="team-table-content_losses">
        <div class="team-table-content_losses-data">
          <p>{{ opendotaTeam.losses }}</p>
          <img
            src="../assets/svg/Status-30.svg"
            width="110"
            height="20"
            alt="30%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rank: 1
    }
  },
  props: {
    opendotaTeam: {
      type: Object,
      required: true,
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
    background-color: rgba(48, 16, 112, 0.4);
    transition: all 0.6s;
  }
}
.team-table-row:nth-child(odd) {
  background-color: var(--dark-violet);
  border-bottom: 2px solid var(--violet);
  transition: all 0.6s;
  &:hover {
    background-color: rgba(48, 16, 112, 0.4);
    transition: all 0.6s;
  }
}
.team-table-content {
  display: grid;
  gap: 0 20px;
  grid-template-columns: 120px auto 150px 150px 150px;
  &_rank {
    align-self: center;
    padding: 1.25em 0 1.25em 2.5em;
  }
  &_name {
    align-self: center;
    padding: 1.25em 0 1.25em 2em;

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
  &_rating {
    align-self: center;
    padding: 1.25em 0;

    &-data {
      display: flex;
      flex-direction: column;
    }
  }
  &_wins {
    align-self: center;
    padding: 1.25em 0;
  }
  &_losses {
    align-self: center;
    padding: 1.25em 2.5em 1.25em 0;
  }
}
</style>
