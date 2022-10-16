<template>
  <div class="bg-cover">
    <NavigationOpenDota />
    <div class="wrapper-grid match-details">
      <div class="match-details_title">
        <h1>Детальная информация матча</h1>
      </div>
      <div class="match-stats">
        <div class="match-stats_winner-banner">
          <img src="../assets/svg/Radiant.svg" width="24" height="24" />
          <p class="match-stats_winner-banner_title">Победа: Radiant</p>
        </div>
        <div class="match-stats_info">
          <div class="match-stats_info_value">
            <span class="match-stats_info_value-lime">99</span>
          </div>
          <div class="match-stats_info-data">
            <p class="p-title">All draft</p>
            <h2>99:59:59</h2>
            <p>Закончился 23 часа назад</p>
          </div>
          <div class="match-stats_info_value">
            <span class="match-stats_info_value-orange">99</span>
          </div>
        </div>
        <div class="match-stats_about">
          <div>
            <p>ID матча</p>
            <p>6434888016</p>
          </div>
          <div>
            <p>Регион</p>
            <p>Singapore</p>
          </div>
          <div>
            <p>Навык</p>
            <p>Unknow</p>
          </div>
        </div>
      </div>
      <div class="match-details_warning">
        <p class="match-details_warning-text p-yellow">
          Запись этого матча не может быть проанализирована, так как недоступна
          вся информация о матче
        </p>
      </div>
      <div class="match-details_buttons">
        <button-analysis />
        <button-download />
      </div>
      <!-- v-if lossers -->
      <div class="match-details-table">
        <div class="match-details-table_loss">
          <div class=""><p>Radiant</p></div>
          <div class=""><p>стастистика комманды</p></div>
          <div class="match-details-table_loss-badge"><p>Проигравшие</p></div>
        </div>
        <div class="match-details-table-header">
          <div class="match-details-table-header_gamer">
            <p class="uppercase">Игрок</p>
          </div>
          <div class="match-details-table-header_LVL">
            <p class="uppercase">LVL</p>
          </div>
          <div class="match-details-table-header_K">
            <p class="uppercase">K</p>
          </div>
          <div class="match-details-table-header_D">
            <p class="uppercase">D</p>
          </div>
          <div class="match-details-table-header_A">
            <p class="uppercase">A</p>
          </div>
          <div class="match-details-table-header_LH-DN">
            <p class="uppercase">LH/DN</p>
          </div>
          <div class="match-details-table-header_NET">
            <p class="uppercase">NET</p>
          </div>
          <div class="match-details-table-header_GMP-XPM">
            <p class="uppercase">GMP/XPM</p>
          </div>
          <div class="match-details-table-header_HD">
            <p class="uppercase">HD</p>
          </div>
          <div class="match-details-table-header_TD">
            <p class="uppercase">TD</p>
          </div>
          <div class="match-details-table-header_HH">
            <p class="uppercase">HH</p>
          </div>
          <div class="match-details-table-header_tools">
            <p class="uppercase">Предметы / Бафы</p>
          </div>
        </div>
        <MatchDetailsRow />
      </div>
      <!-- v-else winners -->
      <div class="match-details-table">
        <div class="match-details-table_win">
          <div class=""><p>Dire</p></div>
          <div class=""><p>стастистика комманды</p></div>
          <div class="match-details-table_win-badge"><p>Победители</p></div>
        </div>
        <div class="match-details-table-header">
          <div class="match-details-table-header_gamer">
            <p class="uppercase">Игрок</p>
          </div>
          <div class="match-details-table-header_LVL">
            <p class="uppercase">LVL</p>
          </div>
          <div class="match-details-table-header_K">
            <p class="uppercase">K</p>
          </div>
          <div class="match-details-table-header_D">
            <p class="uppercase">D</p>
          </div>
          <div class="match-details-table-header_A">
            <p class="uppercase">A</p>
          </div>
          <div class="match-details-table-header_LH-DN">
            <p class="uppercase">LH/DN</p>
          </div>
          <div class="match-details-table-header_NET">
            <p class="uppercase">NET</p>
          </div>
          <div class="match-details-table-header_GMP-XPM">
            <p class="uppercase">GMP/XPM</p>
          </div>
          <div class="match-details-table-header_HD">
            <p class="uppercase">HD</p>
          </div>
          <div class="match-details-table-header_TD">
            <p class="uppercase">TD</p>
          </div>
          <div class="match-details-table-header_HH">
            <p class="uppercase">HH</p>
          </div>
          <div class="match-details-table-header_tools">
            <p class="uppercase">Предметы / Бафы</p>
          </div>
        </div>
        <MatchDetailsRow />
      </div>
    </div>
    <button-top />
    <FooterDefault />
  </div>
</template>

<script>
import axios from "axios";
import NavigationOpenDota from "@/components/NavigationOpenDota.vue";
import MatchDetailsRow from "@/components/MatchDetailsRow.vue";
import FooterDefault from "@/components/FooterDefault.vue";
export default {
  name: "match-details-page",
  components: {
    NavigationOpenDota,
    MatchDetailsRow,
    FooterDefault,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.match-details {
  z-index: 1;
  padding-bottom: 3.375em;

  &_title {
    padding-top: 9.25em;
    padding-bottom: 3.1em;
    grid-column: 3 / span 8;
  }
  &_warning {
    grid-column: 4 / span 6;
    justify-self: center;
    padding: 1.25em 0;
    &-text {
      position: relative;
      padding-left: 2.1em;
      &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-image: url("@/assets/svg/Warning-yellow.svg");
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
  }
  &_buttons {
    grid-column: 5 / span 4;
    justify-self: center;
    :not(:last-child) {
      margin-right: 0.8em;
    }
  }

  &-table {
    width: 100%;
    grid-column: 3 / span 8;
    margin: 3.125em 0;
    border: 2px solid var(--violet);
    filter: drop-shadow(0px 48px 64px var(--dark-violet));
    border-radius: 10px;
    &_loss {
      display: flex;
      align-items: center;
      gap: 1.25em;
      padding: 1.25em 0 1.25em 2.5em;
      background-color: transparent;

      &-badge {
        padding: 0.3em 0.9em;
        color: var(--orange);
        background: rgba(250, 112, 0, 0.25);
        border-radius: 30px;
      }
    }
    &_win {
      display: flex;
      align-items: center;
      gap: 1.25em;
      padding: 1.25em 0 1.25em 2.5em;
      background-color: transparent;

      &-badge {
        padding: 0.3em 0.9em;
        color: var(--lime);
        background: rgba(187, 221, 0, 0.25);
        border-radius: 30px;
      }
    }
    &-header {
      display: grid;
      gap: 0 14px;
      grid-template-columns: 1fr 40px 30px 30px 30px 70px 60px 100px 50px 40px 50px 1fr;
      background-color: var(--violet);

      &_gamer {
        padding: 1.25em 0 1.25em 2.5em;
      }
      &_LVL,
      &_K,
      &_D,
      &_A,
      &_LH-DN,
      &_NET,
      &_GMP-XPM,
      &_HD,
      &_TD,
      &_HH {
        padding: 1.25em 0;
      }
      &_K > p {
        color: var(--lime);
      }
      &_D > p {
        color: var(--orange);
      }
      &_NET > p {
        color: var(--yellow);
      }
      &_tools {
        padding: 1.25em 2.5em 1.25em 0;
      }
    }
  }
}
.match-stats {
  grid-column: 3 / span 8;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.25em;

  &_winner-banner {
    align-self: flex-end;
    display: flex;
    gap: 0 0.6em;
    width: 227;
    height: 44px;
    padding: 0.6em;
    border-radius: 10px;
    background-color: var(--white);

    &_title {
      color: var(--orange);
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      opacity: 70%;
    }
  }
  &_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 1em;
    &_value {
      &-lime {
        color: var(--lime);
        font-weight: 700;
        font-size: 64px;
        line-height: 77px;
      }
      &-orange {
        color: var(--orange);
        font-weight: 700;
        font-size: 64px;
        line-height: 77px;
      }
    }
    &-data {
      text-align: center;
    }
  }
  &_about {
    align-self: flex-end;
    display: flex;
    gap: 0 1em;
    text-align: right;
  }
}
</style>
