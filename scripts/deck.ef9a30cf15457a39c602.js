!function(e){function t(t){for(var a,c,i=t[0],o=t[1],l=t[2],d=0,u=[];d<i.length;d++)c=i[d],r[c]&&u.push(r[c][0]),r[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(m&&m(t);u.length;)u.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={0:0},s=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=o;s.push([126,1]),n()}({100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},114:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);n(73);var a=n(67),r=n.n(a),s=n(0),c=n.n(s),i=n(68),o=n.n(i),l=n(6),m=(n(5),n(10)),d=n(4);function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){p(e,t,n[t])})}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f={BASIC:"基本",DETAIL:"詳細"},h={beReady:Object(d.createAction)("BE_READY"),openFilter:Object(d.createAction)("CHANGE_FILTER_VISIBLE",e=>()=>e({openedFilter:!0})),closeFilter:Object(d.createAction)("CHANGE_FILTER_VISIBLE",e=>()=>e({openedFilter:!1})),closeAllModal:Object(d.createAction)("CLOSE_ALL_MODAL"),changeActiveFilterTab:Object(d.createAction)("CHANGE_ACTIVE_FILTER",e=>t=>e({activeFilter:t}))},b={ready:!1,openedFilter:!1,activeFilter:"BASIC"};var E=n(72);function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const y={belongStates:[],costs:[],unitTypes:[],forceMin:1,forceMax:10,useCostRatioForce:!1,costRatioForceMin:-4,costRatioForceMax:5,costRatioBaseForces:{10:3,15:6,20:8,25:9,30:10},intelligenceMin:1,intelligenceMax:10,conquestMin:0,conquestMax:4,skills:[],skillsAnd:!1,genMains:[],genMainsAnd:!1,rarities:[],generalTypes:[],varTypes:[],majorVersions:[],versions:[],enableDetailVersion:!1,pockets:[],searchText:""},C={filterCondition:y,effectiveFilterCondition:y,filterContents:{belongStates:[],costs:[],unitTypes:[],skills:[],genMains:[],rarities:[],generalTypes:[],varTypes:[],versions:[],majorVersions:[]},generals:[]},N={resetConditions:Object(d.createAction)("RESET_CONDITIONS"),applyCondition:Object(d.createAction)("APPLY_CONDITION"),setCondition:Object(d.createAction)("SET_CONDITION",e=>t=>e({condition:t})),setBaseData:Object(d.createAction)("SET_BASE_DATA",e=>t=>e({baseData:t}))};function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){O(e,t,n[t])})}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const A={deckCards:[]},j={addDeckGeneral:Object(d.createAction)("ADD_DECK_GENERAL",e=>t=>e(t)),changeDeckGeneral:Object(d.createAction)("CHANGE_DECK_GENERAL",e=>(t,n)=>e({index:t,card:n})),addDeckDummy:Object(d.createAction)("ADD_DECK_DUMMY",e=>t=>e(t)),removeDeck:Object(d.createAction)("REMOVE_DECK",e=>t=>e(t)),setActiveCard:Object(d.createAction)("SET_ACTIVE_CARD",e=>t=>e(t)),clearActiveCard:Object(d.createAction)("CLEAR_ACTIVE_CARD"),selectMainGen:Object(d.createAction)("SELECT_MAIN_GEN",e=>(t,n)=>e({index:t,genMain:n}))};n(94);var S=n(2),w=n.n(S);n(58),n(61),n(100);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,s=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}class I extends c.a.PureComponent{constructor(){super(...arguments),this.handleTabClick=(e=>{const t=e.currentTarget.dataset.tab;t&&this.props.onTabChanged(t)})}render(){const e=this.props,t=e.tabs,n=e.activeTab,a=[];return Object.entries(t).forEach(e=>{let t=T(e,2),r=t[0],s=t[1];const i=n===r,o=`tab-button-${r.toLowerCase()}`,l=w()([o,{active:i}]);a.push(c.a.createElement("button",{key:r,"data-tab":r,className:l,onClick:this.handleTabClick},s))}),c.a.createElement("div",{className:"card-filter-tabs"},a)}}n(101);var D=c.a.memo(e=>{let t=e.resetConditions,n=e.closeFilter;return c.a.createElement("div",{className:"card-filter-actions"},c.a.createElement("button",{className:"action-buton-reset",onClick:t},"リセット"),c.a.createElement("button",{className:"action-buton-ok",onClick:n},"OK"))}),M=(n(102),n(8)),R=n(24),x=(n(106),n(36)),_=n(37);class P extends c.a.PureComponent{constructor(){super(...arguments),this.handleSelectMainGen=(e=>{const t=this.props,n=t.index,a=t.onSelectMainGen;let r=e.currentTarget.value;null!=r&&""!==r||(r=void 0),a(n,r)}),this.handleActive=(e=>{e.stopPropagation();const t=this.props,n=t.index;(0,t.onActive)(n)}),this.handleRemove=(e=>{e.stopPropagation();const t=this.props,n=t.index;(0,t.onRemoveDeck)(n)})}render(){const e=this.props,t=e.general,n=e.genMain,a=e.active,r={backgroundColor:t.state.thinColor},s=t.state.color,i={backgroundColor:s},o={background:`linear-gradient(-30deg, ${[s,`${s} 30px`,"transparent 92px","transparent"].join(",")})`},l=[];t.skills.forEach(e=>{l.push(c.a.createElement("span",{className:"skill",key:e.id},e.nameShort))}),0===l.length&&l.push(c.a.createElement("span",{className:"no-skill",key:0},"特技なし"));const m=[];t.genMains.forEach((e,t)=>{m.push(c.a.createElement("option",{value:e.id,key:t},e.nameShort))});const d=null!=n?n:"";return c.a.createElement("div",{className:w()("deck-card",{active:a}),style:r,onClick:this.handleActive},c.a.createElement("div",{className:"deck-card-inner-top"},c.a.createElement("img",{className:"general-thumb",src:t.thumbUrl}),c.a.createElement("div",{className:"shadow",style:o}),c.a.createElement("span",{className:"state",style:i},t.state.nameShort),c.a.createElement("span",{className:"version",style:i},t.version),c.a.createElement("span",{className:"cost","data-label":"コスト"},t.cost.name),c.a.createElement("span",{className:"unit","data-label":"兵種"},t.unitType.nameShort),c.a.createElement("span",{className:"name"},c.a.createElement("span",{className:"rarity"},t.rarity.name),t.name)),c.a.createElement("div",{className:"deck-card-inner-bottom"},c.a.createElement("span",{className:"force","data-label":"武"},t.force),c.a.createElement("span",{className:"intelligence","data-label":"知"},t.intelligence),c.a.createElement("span",{className:"conquest","data-label":"制圧"},t.conquest),c.a.createElement("span",{className:"skills"},l),c.a.createElement("span",{className:"gen-mains","data-label":"主将器"},c.a.createElement("select",{className:"gen-mains-select",value:d,onChange:this.handleSelectMainGen},c.a.createElement("option",{value:""}),m))),c.a.createElement("div",{className:"tool-box"},c.a.createElement("button",{className:"remove",onClick:this.handleRemove},c.a.createElement(M.a,{icon:x.faMinusCircle})),c.a.createElement("button",{className:"search"},c.a.createElement(M.a,{icon:_.faSearch}))))}}n(107);class F extends c.a.PureComponent{constructor(){super(...arguments),this.handleActive=(e=>{e.stopPropagation();const t=this.props,n=t.index;(0,t.onActive)(n)}),this.handleRemove=(e=>{e.stopPropagation();const t=this.props,n=t.index;(0,t.onRemoveDeck)(n)})}render(){const e=this.props,t=e.deckCard,n=e.active,a=e.belongStates,r=e.costs,s=e.unitTypes,i={},o={},l=t.belongState?a.find(e=>e.id===t.belongState):void 0,m=t.cost?r.find(e=>e.id===t.cost):void 0,d=t.unitType?s.find(e=>e.id===t.unitType):void 0;let u="",p=!1;l&&(i.backgroundColor=l.thinColor,o.backgroundColor=l.color,u=l.nameShort||"",p=!0);let f="";m&&(f=m.name);const h={};let b="";return d?b=d.nameShort||"":h.display="none",c.a.createElement("div",{className:w()("deck-dummy-card",{"has-state":p,active:n}),style:i,onClick:this.handleActive},c.a.createElement("div",{className:"deck-card-inner-top",style:o},c.a.createElement("span",{className:"state"},u),c.a.createElement("span",{className:"cost","data-label":"コスト"},f),c.a.createElement("span",{className:"unit",style:h,"data-label":"兵種"},b)),c.a.createElement("div",{className:"deck-card-inner-bottom"},c.a.createElement("div",{className:"tool-box"},c.a.createElement("button",{className:"remove",onClick:this.handleRemove},c.a.createElement(M.a,{icon:x.faMinusCircle})),c.a.createElement("button",{className:"search"},c.a.createElement(M.a,{icon:_.faSearch})))))}}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var V=Object(l.b)(e=>e,e=>({dispatch:e}),(e,t)=>{let n=t.dispatch;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){L(e,t,n[t])})}return e}({},e.deckReducer,{generals:e.datalistReducer.generals,belongStates:e.datalistReducer.filterContents.belongStates,costs:e.datalistReducer.filterContents.costs,unitTypes:e.datalistReducer.filterContents.unitTypes},Object(m.a)({selectMainGen:j.selectMainGen,setActiveCard:j.setActiveCard,removeDeck:j.removeDeck},n),{addDeckDummy:()=>{const t=e.datalistReducer.filterCondition,a=t.costs,r=t.belongStates,s=t.unitTypes;let c,i,o="10";a.length>=1&&(o=[...a].sort()[0]),1===r.length&&(c=r[0]),1===s.length&&(i=s[0]),n(j.addDeckDummy({cost:o,belongState:c,unitType:i}))}})})(class extends c.a.Component{render(){const e=this.props,t=e.deckCards,n=e.activeIndex,a=e.generals,r=e.belongStates,s=e.costs,i=e.unitTypes,o=e.addDeckDummy,l=e.selectMainGen,m=e.setActiveCard,d=e.removeDeck,u=[];return t.forEach((e,t)=>{let o;e.general&&(o=a.find(t=>t.id===e.general));const p=n===t;o?u.push(c.a.createElement(P,{key:t,index:t,active:p,genMain:e.genMain,general:o,onSelectMainGen:l,onActive:m,onRemoveDeck:d})):u.push(c.a.createElement(F,{key:t,index:t,active:p,deckCard:e,belongStates:r,costs:s,unitTypes:i,onActive:m,onRemoveDeck:d}))}),c.a.createElement("div",{className:"deck-board"},c.a.createElement("div",{className:"deck-card-list"},u,c.a.createElement("div",{className:"add-new-deck-card",onClick:o},"追加",c.a.createElement(M.a,{icon:R.faPlusCircle}))),c.a.createElement("div",{className:"deck-total"}))}});n(108),n(109),n(114);class B extends c.a.PureComponent{constructor(){super(...arguments),this.handleAddDeckClick=(e=>{const t=this.props,n=t.general,a=t.onAddDeck,r=e.currentTarget.dataset.genMain;a({general:n.id,cost:n.raw.cost,genMain:r})})}render(){const e=this.props,t=e.general,n=e.show,a={backgroundColor:t.state.thinColor},r={backgroundColor:t.state.color};null==n||n||(a.display="none");const s=[];t.skills.forEach(e=>{s.push(c.a.createElement("span",{className:"skill",key:e.id},e.nameShort))}),0===s.length&&s.push(c.a.createElement("span",{className:"no-skill",key:0},"特技なし"));let i="",o="",l="";t.strategy&&(i=t.strategy.name,o=t.strategy.morale,l=(l=t.strategy.explanation).replace(/\<br\s*\/?\>/g,"\n"));const m=[];return t.genMains.forEach((e,t)=>{m.push(c.a.createElement("button",{className:"gen-main",key:t,"data-gen-main":e.id,onClick:this.handleAddDeckClick},e.nameShort,c.a.createElement(M.a,{icon:R.faPlusCircle})))}),c.a.createElement("div",{className:"general-card",style:a},c.a.createElement("span",{className:"state",style:r},t.state.nameShort),c.a.createElement("span",{className:"version"},t.version),c.a.createElement("span",{className:"rarity"},t.rarity.name),c.a.createElement("span",{className:"name"},t.name),c.a.createElement("span",{className:"image"},c.a.createElement("img",{className:"general-thumb"})),c.a.createElement("span",{className:"cost","data-label":"コスト"},t.cost.name),c.a.createElement("span",{className:"unit","data-label":"兵種"},t.unitType.nameShort),c.a.createElement("span",{className:"force","data-label":"武"},t.force),c.a.createElement("span",{className:"intelligence","data-label":"知"},t.intelligence),c.a.createElement("span",{className:"conquest","data-label":"制圧"},t.conquest),c.a.createElement("span",{className:"skills"},s),c.a.createElement("span",{className:"strategy","data-label":"計略名",title:l},i),c.a.createElement("span",{className:"strategy-morale","data-label1":"必要","data-label2":"士気"},o),c.a.createElement("span",{className:"gen-mains","data-label":"主将器"},m),c.a.createElement("span",{className:"buttons"},c.a.createElement("button",{className:"add-deck",onClick:this.handleAddDeckClick},c.a.createElement(M.a,{icon:R.faPlusCircle}))))}}var G=Object(l.b)(e=>e,e=>({dispatch:e}),(e,t)=>{let n=t.dispatch;const a=e.datalistReducer,r=a.generals,s=a.effectiveFilterCondition,c=r.filter(e=>((e,t)=>{const n=t.belongStates,a=t.costs,r=t.unitTypes,s=t.forceMin,c=t.forceMax,i=t.useCostRatioForce,o=t.costRatioForceMin,l=t.costRatioForceMax,m=t.costRatioBaseForces,d=t.intelligenceMin,u=t.intelligenceMax,p=t.conquestMin,f=t.conquestMax,h=t.skills,b=t.skillsAnd,E=t.genMains,g=t.genMainsAnd,v=t.rarities,y=t.generalTypes,C=t.varTypes,N=t.versions,k=t.majorVersions,O=t.enableDetailVersion,A=t.pockets,j=e.raw;if(n.length>0&&!n.includes(j.state))return!1;if(a.length>0&&!a.includes(j.cost))return!1;if(r.length>0&&!r.includes(j.unit_type))return!1;if(i){const t=m[e.raw.cost];if(null==t)return!1;const n=e.force-t;if(o>n)return!1;if(l<n)return!1}else{if(s>e.force)return!1;if(c<e.force)return!1}if(d>e.intelligence)return!1;if(u<e.intelligence)return!1;if(p>e.conquest)return!1;if(f<e.conquest)return!1;if(h.length>0){const t=t=>"0"===t?0===e.skills.length:e.skills.map(e=>e.id).includes(t);if(b){if(!h.every(t))return!1}else if(!h.some(t))return!1}if(v.length>0&&!v.includes(j.rarity))return!1;if(O){if(N.length>0&&!N.includes(e.versionValue))return!1}else if(k.length>0&&!k.includes(j.major_version))return!1;if(E.length>0){const t=t=>e.genMains.map(e=>e.id).includes(t);if(g){if(!E.every(t))return!1}else if(!E.some(t))return!1}return!(y.length>0&&!y.includes(j.general_type)||C.length>0&&!C.includes(j.ver_type)||1===A.length&&"1"===A[0]!=(""!==j.pocket_code))})(e,s)).map(e=>e.id);return{generals:r,searchedGeneralIds:c,addDeckGeneral:t=>{null!=e.deckReducer.activeIndex?n(j.changeDeckGeneral(e.deckReducer.activeIndex,t)):n(j.addDeckGeneral(t))}}})(class extends c.a.PureComponent{render(){const e=this.props,t=e.generals,n=e.searchedGeneralIds,a=e.addDeckGeneral,r=[];return t.forEach(e=>{const t=n.includes(e.id);r.push(c.a.createElement(B,{key:e.id,general:e,onAddDeck:a,show:t}))}),c.a.createElement("div",{className:"cardlist-container"},r)}});let $;const q=500;function K(e){return t=>{e(N.setCondition(t)),clearTimeout($),$=setTimeout(()=>{e(N.applyCondition())},q)}}n(115);function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){H(e,t,n[t])})}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const U=e=>{let t=e.filterContents,n=e.filterCondition,a=e.value,r=e.checked,s=n.filter(e=>!e.startsWith(`${a}-`));if(!r){const e=[].concat(...t).filter(e=>e.id.startsWith(`${a}-`));s=s.concat(e.map(e=>e.id))}return s},W=(e,t,n,a,r)=>{let s=[...t];const c=a.split("-")[0];if(r)n.some(e=>e.startsWith(`${c}-`))||(s=s.filter(e=>e!==c));else if(!s.includes(c)){[].concat(...e).filter(e=>e.id.startsWith(`${c}-`)).every(e=>n.includes(e.id))&&s.push(c)}return s};function X(e,t,n){const a=e.filterCondition[t];if(!(a instanceof Array))return console.warn(`${t} is not array.`),{};const r=a.includes(n);let s;const c={[t]:s=r?a.filter(e=>e!==n):[...a,n]};switch(t){case"majorVersions":return Y({},c,{versions:U({filterContents:e.filterContents.versions,filterCondition:e.filterCondition.versions,value:n,checked:r})});case"versions":return Y({},c,{majorVersions:W(e.filterContents.majorVersions,e.filterCondition.majorVersions,s,n,r)});default:return c}}n(118),n(119);const J=["button","filter-item"];class z extends c.a.PureComponent{constructor(e){super(e),this.handleClickItem=(e=>{const t=e.currentTarget.value,n=this.props,a=n.itemName;(0,n.onClickItem)(a,t)}),this.buttonClasses=e.addtionalClasses?[...J,...e.addtionalClasses]:J,this.square=this.props.square||!1}createButton(e,t,n,a){return c.a.createElement("button",{key:e,value:e,style:n,className:a,onClick:this.handleClickItem},t)}render(){const e=this.props,t=e.checkedItems,n=e.items,a=e.show,r=this.square,s=[];n.forEach(e=>{const n=e.id,a=e.nameShort||e.name,c={};e.color&&(c.backgroundColor=e.color);const i=t.includes(n);s.push(this.createButton(n,a,c,w()(this.buttonClasses,{checked:i,square:r})))});const i={};return null==a||a||(i.display="none"),c.a.createElement("div",{className:"button-list",style:i},s)}}var Q=Object(l.b)(e=>e.datalistReducer,e=>({dispatch:e}),(e,t)=>{let n=t.dispatch;return{filterCondition:e.filterCondition.belongStates,filterContents:e.filterContents.belongStates,toggleCheckList:(t,a)=>{K(n)(X(e,t,a))}}})(class extends c.a.Component{render(){const e=this.props,t=e.filterContents,n=e.filterCondition,a=e.toggleCheckList;return c.a.createElement("section",{className:"simple-filter-section"},c.a.createElement("div",{className:"simple-filter-state"},c.a.createElement("h2",{className:"title-inline"},"勢力"),c.a.createElement(z,{itemName:"belongStates",items:t,checkedItems:n,onClickItem:a,square:!0})))}});n(120),n(121);class Z extends z{createButton(e,t,n,a){return"0"!==e?super.createButton(e,t,n,a):super.createButton(e,"無",n,w()(a,"no-skill"))}}n(122);class ee extends c.a.PureComponent{constructor(){super(...arguments),this.handleClickItem=(()=>{const e=this.props,t=e.isOn,n=e.itemName;(0,e.setCondition)({[n]:!t})})}render(){const e=this.props,t=e.isOn,n=e.labelOff,a=e.labelOn,r=e.width,s={};return null!=r&&(s.width=r),w()("switch-button",{active:t}),c.a.createElement("div",{style:s,className:"switch-item",onClick:this.handleClickItem},c.a.createElement("div",{className:w()("switch-button",{active:!t})},c.a.createElement("button",{className:"switch-button-child"},n)),c.a.createElement("div",{className:w()("switch-button",{active:t})},c.a.createElement("button",{className:"switch-button-child"},a)))}}n(123);class te extends c.a.PureComponent{constructor(){super(...arguments),this.handleChange=(e=>{const t=parseFloat(e.currentTarget.value),n=this.props,a=n.itemName,r=n.itemKey,s=n.setCondition;s(null!=r?{[a]:{[r]:t}}:{[a]:t})})}render(){const e=this.props,t=e.min,n=e.max,a=e.value,r=e.className,s=e.halfStep,i=void 0!==s&&s,o=t<0,l=[];for(let e=t;e<=n;e+=i?.5:1){const t=i?`${e.toFixed(1)}`:`${e}`,n=o&&e>0?"+":"";l.push(c.a.createElement("option",{key:e,value:e},n,t))}return c.a.createElement("select",{value:a,className:w()("number-select",r),onChange:this.handleChange},l)}}n(124);function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ae extends c.a.PureComponent{constructor(){super(...arguments),this.handleSetCondition=(e=>{const t=this.props,n=t.setCondition,a=t.costRatioBaseForces;e.costRatioBaseForces&&(e.costRatioBaseForces=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ne(e,t,n[t])})}return e}({},a,e.costRatioBaseForces)),n(e)})}render(){const e=this.props.costRatioBaseForces;return c.a.createElement("div",{className:"cost-ratio-base-force"},c.a.createElement("span",{className:"title-inline"},"基準武力"),c.a.createElement("label",null,"1.0",c.a.createElement(te,{itemName:"costRatioBaseForces",itemKey:"10",setCondition:this.handleSetCondition,value:e[10],max:5,min:1})),c.a.createElement("label",null,"1.5",c.a.createElement(te,{itemName:"costRatioBaseForces",itemKey:"15",setCondition:this.handleSetCondition,value:e[15],max:7,min:2})),c.a.createElement("label",null,"2.0",c.a.createElement(te,{itemName:"costRatioBaseForces",itemKey:"20",setCondition:this.handleSetCondition,value:e[20],max:8,min:5})),c.a.createElement("label",null,"2.5",c.a.createElement(te,{itemName:"costRatioBaseForces",itemKey:"25",setCondition:this.handleSetCondition,value:e[25],max:10,min:7})),c.a.createElement("label",null,"3.0",c.a.createElement(te,{itemName:"costRatioBaseForces",itemKey:"30",setCondition:this.handleSetCondition,value:e[30],max:10,min:8})))}}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var se=Object(l.b)(e=>e.datalistReducer,e=>({setCondition:K(e)}),(e,t)=>(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){re(e,t,n[t])})}return e})({},e,t,{toggleCheckList:(n,a)=>{t.setCondition(X(e,n,a))}}))(class extends c.a.PureComponent{render(){const e=this.props,t=e.filterContents,n=e.filterCondition,a=e.setCondition,r=e.toggleCheckList;return c.a.createElement("div",null,c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"勢力"),c.a.createElement(z,{itemName:"belongStates",items:t.belongStates,checkedItems:n.belongStates,onClickItem:r,square:!0})),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"コスト"),c.a.createElement(z,{itemName:"costs",items:t.costs,checkedItems:n.costs,onClickItem:r,square:!0})),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"兵種"),c.a.createElement(z,{itemName:"unitTypes",items:t.unitTypes,checkedItems:n.unitTypes,onClickItem:r,square:!0})),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"武力"),c.a.createElement("div",{className:"title-button"},c.a.createElement(ee,{itemName:"useCostRatioForce",setCondition:a,isOn:n.useCostRatioForce,labelOff:"通常",labelOn:"コスト比",width:180})),c.a.createElement("div",{className:w()("normal-force",{active:!n.useCostRatioForce})},c.a.createElement("div",{className:"range"},c.a.createElement(te,{itemName:"forceMin",setCondition:a,value:n.forceMin,max:10,min:1}),"-",c.a.createElement(te,{itemName:"forceMax",setCondition:a,value:n.forceMax,max:10,min:1}))),c.a.createElement("div",{className:w()("cost-ratio-force",{active:n.useCostRatioForce})},c.a.createElement("div",{className:"range"},c.a.createElement(te,{itemName:"costRatioForceMin",setCondition:a,value:n.costRatioForceMin,max:5,min:-5}),"以上"),c.a.createElement(ae,{costRatioBaseForces:n.costRatioBaseForces,setCondition:a}))),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"知力"),c.a.createElement("div",{className:"range"},c.a.createElement(te,{itemName:"intelligenceMin",setCondition:a,value:n.intelligenceMin,max:10,min:1}),"-",c.a.createElement(te,{itemName:"intelligenceMax",setCondition:a,value:n.intelligenceMax,max:10,min:1}))),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"征圧力"),c.a.createElement("div",{className:"range"},c.a.createElement(te,{itemName:"conquestMin",setCondition:a,value:n.conquestMin,max:4,min:0}),"-",c.a.createElement(te,{itemName:"conquestMax",setCondition:a,value:n.conquestMax,max:4,min:0}))),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"特技"),c.a.createElement("div",{className:"title-button"},c.a.createElement(ee,{itemName:"skillsAnd",setCondition:a,isOn:n.skillsAnd,labelOff:"OR",labelOn:"AND"})),c.a.createElement(Z,{itemName:"skills",items:t.skills,checkedItems:n.skills,onClickItem:r,square:!0})))}});n(125);const ce=[{id:"1",name:"あり"},{id:"0",name:"なし"}];function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=Object(l.b)(e=>e.datalistReducer,e=>({setCondition:K(e)}),(e,t)=>(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){ie(e,t,n[t])})}return e})({},e,t,{toggleCheckList:(n,a)=>{t.setCondition(X(e,n,a))}}))(class extends c.a.PureComponent{render(){const e=this.props,t=e.filterContents,n=e.filterCondition,a=e.setCondition,r=e.toggleCheckList,s=[];return t.versions.forEach((e,t)=>{s.push(c.a.createElement(z,{key:t+1,itemName:"versions",items:e,checkedItems:n.versions,onClickItem:r}))}),c.a.createElement("div",null,c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"登場弾"),c.a.createElement("div",{className:"title-button"},c.a.createElement(ee,{itemName:"enableDetailVersion",setCondition:a,isOn:n.enableDetailVersion,labelOff:"メジャーVer",labelOn:"詳細Ver",width:220})),c.a.createElement("div",{className:w()("major-version",{active:!n.enableDetailVersion})},c.a.createElement(z,{itemName:"majorVersions",items:t.majorVersions,checkedItems:n.majorVersions,onClickItem:r})),c.a.createElement("div",{className:w()("detail-version",{active:n.enableDetailVersion})},s)),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"将器主効果候補"),c.a.createElement("div",{className:"title-button"},c.a.createElement(ee,{itemName:"genMainsAnd",setCondition:a,isOn:n.genMainsAnd,labelOff:"OR",labelOn:"AND"})),c.a.createElement(z,{itemName:"genMains",items:t.genMains,checkedItems:n.genMains,onClickItem:r})),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"レアリティ"),c.a.createElement(z,{itemName:"rarities",items:t.rarities,checkedItems:n.rarities,onClickItem:r,square:!0})),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"官職"),c.a.createElement(z,{itemName:"generalTypes",items:t.generalTypes,checkedItems:n.generalTypes,onClickItem:r})),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"カード種別"),c.a.createElement(z,{itemName:"varTypes",items:t.varTypes,checkedItems:n.varTypes,onClickItem:r})),c.a.createElement("section",{className:"filter-section"},c.a.createElement("h2",{className:"title"},"ぽけっと武将"),c.a.createElement(z,{itemName:"pockets",items:ce,checkedItems:n.pockets,onClickItem:r})))}});function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){me(e,t,n[t])})}return e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,s=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const ue=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return`第${e}弾${t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?"-EX":n>0?`-${n}`:""}`};class pe{constructor(e,t,n){this.id=e,this.raw=t,Object.assign(this,n)}get code(){return this.raw.code}get name(){return this.personal?this.personal.name:""}get version(){return ue(this.majorVersion,this.addVersion,this.isEx)}get versionValue(){const e=this.isEx?"-EX":`-${this.addVersion}`;return`${this.majorVersion}${e}`}get hasPocket(){return""!==this.raw.pocket_code}get thumbUrl(){return`https://3594t.net/img/card_small/${this.code}.jpg`}}const fe=(e,t)=>`${t}`,he=e=>e.key,be=(e,t,n)=>e.map((e,a)=>n(e,t(e,a))),Ee=(e,t)=>Object.entries(e).map(e=>{let n=de(e,2),a=n[0],r=n[1];return t(r,`${a}`)}),ge=(e,t)=>{let n=e.code,a=e.name,r=e.name_short,s=e.short_name;return{id:t,code:n,name:a,nameShort:r||s}},ve={name:""},ye=(e,t)=>{const n=e.find(e=>e.id===t);return n||ve},Ce=e=>e.filter(e=>null!=e);var Ne=e=>{const t=be(e.STATE,fe,(e,t)=>{return le({},ge(e,t),{color:`rgb(${e.red}, ${e.green}, ${e.blue})`,thinColor:`rgba(${e.red}, ${e.green}, ${e.blue}, 0.2)`})}),n=Ee(e.COST,ge),a=be(e.UNIT_TYPE,he,(e,t)=>{return le({},ge(e,t),{nameShort:e.name[0]})}),r=be(e.SKILL,he,ge),s=be(e.GEN_MAIN,he,ge),c=Ee(e.RARITY,ge),i=be(e.GENERAL_TYPE,he,(e,t)=>{const n=ge(e,t);return""===e.name?le({},n,{name:"なし(女性)"}):n}),o=be(e.VER_TYPE,fe,ge).map(e=>"Ex"===e.name?le({},e,{name:"EX"}):e),l=be(e.STRAT,he,(e,t)=>le({id:t},e)),m={},d=be(e.GENERAL,fe,(o,d)=>{const u=parseInt(o.major_version),p=parseInt(o.add_version),f="2"===o.ver_type;return m[u]||(m[u]=[]),f||m[u].includes(p)||m[u].push(p),new pe(d,o,{majorVersion:u,addVersion:p,isEx:f,force:parseInt(o.buryoku),intelligence:parseInt(o.chiryoku),conquest:parseInt(o.seiatsu),cost:ye(n,o.cost),genMains:Ce([o.gen_main0,o.gen_main1,o.gen_main2].filter(e=>""!==e).map(e=>s.find(t=>t.id===e))),generalType:ye(i,o.general_type),personal:e.PERSONAL[parseInt(o.personal)],rarity:ye(c,o.rarity),skills:Ce([o.skill0,o.skill1,o.skill2].filter(e=>""!==e&&"0"!==e).map(e=>r.find(t=>t.id===e))),state:ye(t,o.state),unitType:ye(a,o.unit_type),strategy:l.find(e=>e.id===o.strat)})}),u=Object.keys(m).map(e=>parseInt(e)),p=(e,t)=>e-t;return u.sort(p),u.forEach(e=>{m[e].sort(p)}),{filterContents:{belongStates:t,costs:n,unitTypes:a,skills:r,genMains:s,rarities:c,generalTypes:i,varTypes:o,versions:Object.entries(m).map(e=>{let t=de(e,2),n=t[0],a=t[1];const r=be(a,e=>`${n}-${e}`,(e,t)=>({id:t,name:ue(n,e)}));return r.push({id:`${n}-EX`,name:ue(n,0,!0)}),r}),majorVersions:be(u,e=>`${e}`,(e,t)=>({id:t,name:ue(e)}))},generals:d,strategies:l}};const ke=(async()=>await(async()=>{const e=await fetch("https://gist.githubusercontent.com/boushi-bird/9fbed1f50fadcd04ea619355b5fa7a0c/raw/base.json");return await e.json()})())();function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){Ae(e,t,n[t])})}return e}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var je=Object(l.b)(e=>Oe({},e.windowReducer,{openedAnyModal:e.windowReducer.openedFilter||!e.windowReducer.ready,loading:!e.windowReducer.ready}),e=>Oe({fetchBaseData:async()=>{const t=await(async()=>{const e=await ke;return Ne(e)})();e(N.setBaseData(t)),e(h.beReady())}},Object(m.a)(Oe({clearActiveCard:j.clearActiveCard,resetConditions:N.resetConditions},h),e)))(class extends c.a.PureComponent{constructor(){super(...arguments),this.handleAppClick=(()=>{this.props.clearActiveCard()})}componentDidMount(){this.props.fetchBaseData()}render(){const e=this.props,t=e.ready,n=e.loading,a=e.resetConditions,r=e.openFilter,s=e.closeFilter,i=e.closeAllModal,o=e.changeActiveFilterTab,l=e.openedFilter,m=e.openedAnyModal,d=e.activeFilter;return c.a.createElement("div",{className:w()(["app-container",{modal:m,ready:t}]),onClick:this.handleAppClick},c.a.createElement("div",{className:"app-main"},c.a.createElement("div",{className:"card-list-container"},c.a.createElement("div",{className:"app-header"},c.a.createElement("div",{className:"app-header-title"},"三国志大戦デッキシミュレーター")),c.a.createElement("div",{className:"deck-boad-container"},c.a.createElement(V,null)),c.a.createElement("div",{className:"simple-filter-container"},c.a.createElement(Q,null),c.a.createElement("button",{className:"open-filter",onClick:r},"絞込")),c.a.createElement(G,null)),c.a.createElement("div",{className:w()(["card-filter-container",{open:l}])},c.a.createElement("h1",{className:"card-filter-title"},"絞り込みメニュー"),c.a.createElement("div",{className:"card-filter-buttons"},c.a.createElement(I,{tabs:f,activeTab:d,onTabChanged:o}),c.a.createElement(D,{resetConditions:a,closeFilter:s})),c.a.createElement("div",{className:w()(["card-filter-content",{active:"BASIC"===d}])},c.a.createElement(se,null)),c.a.createElement("div",{className:w()(["card-filter-content",{active:"DETAIL"===d}])},c.a.createElement(oe,null)))),c.a.createElement("div",{className:"modal-background",onClick:i}),c.a.createElement("div",{className:w()("loading-item",{loading:n})}))}});const Se={datalistReducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET_CONDITIONS":return g({},e,{filterCondition:y,effectiveFilterCondition:y});case"APPLY_CONDITION":return g({},e,{effectiveFilterCondition:Object(E.a)(e.filterCondition)});case"SET_CONDITION":return g({},e,{filterCondition:g({},e.filterCondition,t.payload.condition)});case"SET_BASE_DATA":{const n=t.payload.baseData,a=n.generals,r=n.filterContents;return g({},e,{filterCondition:y,effectiveFilterCondition:y,filterContents:r,generals:a})}default:return e}},windowReducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BE_READY":return u({},e,{ready:!0});case"CHANGE_FILTER_VISIBLE":return u({},e,{openedFilter:t.payload.openedFilter});case"CLOSE_ALL_MODAL":return u({},e,{openedFilter:!1});case"CHANGE_ACTIVE_FILTER":return u({},e,{activeFilter:t.payload.activeFilter});default:return e}},deckReducer:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_DECK_GENERAL":{const n=t.payload,a=n.general,r=n.cost,s=n.genMain;return k({},e,{activeIndex:void 0,deckCards:[...e.deckCards,{general:a,cost:r,genMain:s}]})}case"CHANGE_DECK_GENERAL":{const n=t.payload,a=n.index,r=n.card,s=r.general,c=r.cost,i=r.genMain,o=[...e.deckCards];return o[a]={general:s,cost:c,genMain:i},k({},e,{activeIndex:void 0,deckCards:o})}case"ADD_DECK_DUMMY":{const n=t.payload,a=n.cost,r=n.belongState,s=n.unitType;return k({},e,{activeIndex:void 0,deckCards:[...e.deckCards,{cost:a,belongState:r,unitType:s}]})}case"REMOVE_DECK":{const n=t.payload,a=e.deckCards.filter((e,t)=>t!==n);return k({},e,{activeIndex:void 0,deckCards:a})}case"SET_ACTIVE_CARD":return k({},e,{activeIndex:t.payload});case"CLEAR_ACTIVE_CARD":return k({},e,{activeIndex:void 0});case"SELECT_MAIN_GEN":{const n=t.payload,a=n.index,r=n.genMain,s=[...e.deckCards],c=s[a];return null==c?e:(s[a]=k({},c,{genMain:r}),k({},e,{activeIndex:a,deckCards:s}))}default:return e}}};var we=Object(m.c)(Object(m.b)(Se));r.a.load({custom:{families:["Noto Sans Japanese:n1,n4,n7"],urls:["https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"]}}),o.a.render(c.a.createElement(l.a,{store:we},c.a.createElement(je,null)),document.getElementById("app"))},73:function(e,t,n){},94:function(e,t,n){}});