<template>
    <div class="team-table-row">
        <div class="team-table-content">
                <div class="team-table-content_id">		
                <p class="team-table-content_id-data">{{opendotaMatche.match_id}}</p>
                <p>17 часов назад / Immortal</p>
            </div>
            <div class="team-table-content_duration">
                <div class="team-table-content_duration-data">
                    <p>{{Math.trunc((opendotaMatche.duration / 60)*100)/100}}</p>
                </div>
            </div>
            <div class="team-table-content_radiant">
                <div class="team-table-content_radiant-data">
                    <p>{{opendotaMatche.radiant_team}}</p>
                </div>
            </div>
            <div class="team-table-content_dire">
                <div class="team-table-content_dire-data">
                    <p>{{opendotaMatche.dire_team}}</p>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    props: {
        opendotaMatche: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.team-table-row:nth-child(even) {
    background-color: var(--dark-violet-alt-3); 
    border-bottom: 2px solid var(--violet);
    transition: all .6s;
    &:hover {
        background-color: var(--bright-violet-gradient);
        transition: all .6s;
    }
}
.team-table-row:nth-child(odd) {
    background-color: var(--dark-violet); 
    border-bottom: 2px solid var(--violet);
    transition: all .6s;
    &:hover {
        background-color: var(--bright-violet-gradient);
        transition: all .6s;
    }
}
.team-table-content {
    display: grid;
    gap: 0 20px; 
    grid-template-columns: 1fr 300px 300px 300px;

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
        padding: 1.25em 0 1.25em 2em;

        &-data {
            display: flex;
            align-items: center;
            gap: .6em;
            

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

        &-data {
            
        }
    }
    &_dire {
        align-self: center;
        padding: 1.25em 0;

        &-data {
        
        }
    }
    &_losses {
        align-self: center;
        padding: 1.25em 2.5em 1.25em 0;
        
        &-data {
        
        }
    }
}
</style>