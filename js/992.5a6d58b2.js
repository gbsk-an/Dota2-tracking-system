"use strict";(self["webpackChunkitgrade_test"]=self["webpackChunkitgrade_test"]||[]).push([[992],{2094:function(a,t,e){e.r(t),e.d(t,{default:function(){return V}});var s=e(3396),l=e(9242);const n=a=>((0,s.dD)("data-v-04100f12"),a=a(),(0,s.Cn)(),a),d={class:"bg-cover"},i={class:"wrapper-grid team-page"},o=n((()=>(0,s._)("div",{class:"team-page_title"},[(0,s._)("h1",null,"Список команд")],-1))),m={class:"team-table"},c=(0,s.uE)('<div class="team-table-header" data-v-04100f12><div class="team-table-header_tag" data-v-04100f12><p class="team-table-header_value" data-v-04100f12>Ранг</p></div><div class="team-table-header_name" data-v-04100f12><p class="team-table-header_value" data-v-04100f12>Название команды</p></div><div class="team-table-header_rating" data-v-04100f12><p class="team-table-header_value" data-v-04100f12>Рейтинг</p></div><div class="team-table-header_wins" data-v-04100f12><p class="team-table-header_value" data-v-04100f12>Победы</p></div><div class="team-table-header_losses" data-v-04100f12><p class="team-table-header_value" data-v-04100f12>Проигрыши</p></div></div>',1),r={key:1,class:"team-table-loading"},p=n((()=>(0,s._)("h2",null,"Loading...",-1))),v=[p],_={key:0,class:"team-table-info"},u=n((()=>(0,s._)("p",{class:"team-table-info_data"},"Team Elo Rankings",-1))),g=n((()=>(0,s._)("p",null,"k=32, init=1000",-1))),h=[u,g];function f(a,t,e,n,p,u){const g=(0,s.up)("NavigationOpenDota"),f=(0,s.up)("TeamTableRow"),b=(0,s.up)("button-white"),w=(0,s.up)("button-top"),T=(0,s.up)("FooterDefault");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(g),(0,s._)("div",i,[o,(0,s._)("div",m,[c,(0,s.Wm)(l.W3,{name:"fade"},{default:(0,s.w5)((()=>[p.isTeamDataLoading?((0,s.wg)(),(0,s.iD)("div",r,v)):((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(p.opendotaTeams,(a=>((0,s.wg)(),(0,s.j4)(f,{opendotaTeam:a,key:a.team_id},null,8,["opendotaTeam"])))),128))])),_:1}),p.isTeamDataLoading?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",_,h))]),(0,s.Wm)(b,{class:"team-page_button"},{default:(0,s.w5)((()=>[(0,s.Uk)("Загрузить еще")])),_:1})]),(0,s.Wm)(w),(0,s.Wm)(T)])}var b=e(70),w=e(2182),T=e(9710),D=e(7139),k=e.p+"img/Status-100.6ce5731e.svg",y=e.p+"img/Status-80.1a064576.svg",z=e.p+"img/Status-30.666272b3.svg";const L=a=>((0,s.dD)("data-v-3f24e8ff"),a=a(),(0,s.Cn)(),a),O={class:"team-table-row"},W={class:"team-table-content"},Z={class:"team-table-content_tag"},C={class:"team-table-content_tag-data"},I={class:"team-table-content_name"},U={class:"team-table-content_name-data"},E=["src"],R={class:"team-logo"},S={class:"info-update-time"},j={class:"team-table-content_rating"},q={class:"team-table-content_rating-data"},A=L((()=>(0,s._)("img",{src:k,width:"110",height:"20",alt:"100%"},null,-1))),F={class:"team-table-content_wins"},N={class:"team-table-content_wins-data"},H=L((()=>(0,s._)("img",{src:y,width:"110",height:"20",alt:"80%"},null,-1))),K={class:"team-table-content_losses"},Y={class:"team-table-content_losses-data"},$=L((()=>(0,s._)("img",{src:z,width:"110",height:"20",alt:"30%"},null,-1)));function x(a,t,e,l,n,d){return(0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("div",W,[(0,s._)("div",Z,[(0,s._)("p",C,(0,D.zw)(`${n.rank}st`),1)]),(0,s._)("div",I,[(0,s._)("div",U,[(0,s._)("img",{class:"team-logo-image",src:e.opendotaTeam.logo_url,width:"40",height:"40"},null,8,E),(0,s._)("div",null,[(0,s._)("p",R,(0,D.zw)(e.opendotaTeam.name),1),(0,s._)("p",S,(0,D.zw)(e.opendotaTeam.last_match_time),1)])])]),(0,s._)("div",j,[(0,s._)("div",q,[(0,s._)("p",null,(0,D.zw)(e.opendotaTeam.rating),1),A])]),(0,s._)("div",F,[(0,s._)("div",N,[(0,s._)("p",null,(0,D.zw)(e.opendotaTeam.wins),1),H])]),(0,s._)("div",K,[(0,s._)("div",Y,[(0,s._)("p",null,(0,D.zw)(e.opendotaTeam.losses),1),$])])])])}var B={data(){return{rank:1}},props:{opendotaTeam:{type:Object,required:!0}}},G=e(89);const J=(0,G.Z)(B,[["render",x],["__scopeId","data-v-3f24e8ff"]]);var M=J,P={name:"team-page",components:{NavigationOpenDota:w.Z,FooterDefault:T.Z,TeamTableRow:M},data(){return{opendotaTeams:[],isTeamDataLoading:!0,timer:""}},methods:{async fetchOpendotaTeams(){try{this.isTeamDataLoading=!0;const a=await b.Z.get("https://api.opendota.com/api/teams");this.opendotaTeams=a.data.slice(0,10)}catch(a){alert("Error")}finally{this.isTeamDataLoading=!1}},cancelAutoUpdate(){clearInterval(this.timer)}},created(){this.fetchOpendotaTeams(),this.timer=setInterval(this.fetchOpendotaTeams,6e4)},beforeUnmount(){this.cancelAutoUpdate()}};const Q=(0,G.Z)(P,[["render",f],["__scopeId","data-v-04100f12"]]);var V=Q}}]);
//# sourceMappingURL=992.5a6d58b2.js.map