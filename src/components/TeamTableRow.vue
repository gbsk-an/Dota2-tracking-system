<template>
    <div class="team-table-row">
        <div class="team-table-content">
            <div class="team-table-content_tag">		
                <p class="team-table-content_tag-data">{{opendotaTeam.tag}}</p>
            </div>
            <div class="team-table-content_name">
                <div class="team-table-content_name-data">
                    <img class="team-logo-image" :src="opendotaTeam.logo_url" width="40" height="40" />
                    <div>
                        <p class="team-logo">{{opendotaTeam.name}}</p>
                        <p class="info-update-time">{{opendotaTeam.last_match_time}}</p>
                    </div>
                </div>
            </div>
            <div class="team-table-content_rating">
                <div class="team-table-content_rating-data">
                    <p>{{opendotaTeam.rating}}</p>
                </div>
            </div>
            <div class="team-table-content_wins">
                <div class="team-table-content_wins-data">
                    <p>{{opendotaTeam.wins}}</p>
                </div>
            </div>
            <div class="team-table-content_losses">
                <div class="team-table-content_losses-data">
                    <p>{{opendotaTeam.losses}}</p>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    props: {
        opendotaTeam: {
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
        background-color: rgba(48, 16, 112, 0.4);
        transition: all .6s;
    }
}
.team-table-row:nth-child(odd) {
    background-color: var(--dark-violet); 
    border-bottom: 2px solid var(--violet);
    transition: all .6s;
    &:hover {
        background-color: rgba(48, 16, 112, 0.4);
        transition: all .6s;
    }
}
.team-table-content {
    display: grid;
    gap: 0 20px; 
    grid-template-columns: 120px 1fr 150px 150px 150px;

    &_tag {
        align-self: center;
        padding: 1.25em 0 1.25em 2.5em;
    }
    &_name {
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
    &_rating {
        align-self: center;
        padding: 1.25em 0;

        &-data {
            
        }
    }
    &_wins {
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