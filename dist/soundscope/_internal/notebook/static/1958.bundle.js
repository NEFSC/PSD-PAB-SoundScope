"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1958],{31958:(e,t,a)=>{a.r(t),a.d(t,{Grid:()=>i,GridModel:()=>c});var o,r=a(95585),s=a(81997),n=a(31516),l=a(71677),d=a(78947);class i extends n.Panel{constructor(e){super();const{commands:t,model:a,themeManager:s}=e;this.model=a;const n=new c(e.translator),l=new r.DataGrid,i=new o.MouseHandler;i.doubleClicked.connect(((e,a)=>t.execute(d.q.CommandIDs.inspectVariable,{variableReference:n.getVariableReference(a.row),name:n.getVariableName(a.row)}))),i.selected.connect(((e,t)=>{const{row:a}=t;this.model.selectedVariable={name:n.getVariableName(a),value:n.data("body",a,1),type:n.data("body",a,2),variablesReference:n.getVariableReference(a)}})),l.dataModel=n,l.keyHandler=new r.BasicKeyHandler,l.mouseHandler=i,l.selectionModel=new r.BasicSelectionModel({dataModel:n}),l.stretchLastColumn=!0,l.node.style.height="100%",this._grid=l,s&&s.themeChanged.connect(this._updateStyles,this),this.addWidget(l)}set filter(e){this._grid.dataModel.filter=e,this.update()}set scope(e){this._grid.dataModel.scope=e,this.update()}get dataModel(){return this._grid.dataModel}onAfterAttach(e){super.onAfterAttach(e),this._updateStyles()}_updateStyles(){const{style:e,textRenderer:t}=o.computeStyle();this._grid.cellRenderers.update({},t),this._grid.style=e}}class c extends r.DataModel{constructor(e){super(),this._filter=new Set,this._scope="",this._data={name:[],type:[],value:[],variablesReference:[]},this._trans=(e||l.nullTranslator).load("jupyterlab")}get filter(){return this._filter}set filter(e){this._filter=e}get scope(){return this._scope}set scope(e){this._scope=e}rowCount(e){return"body"===e?this._data.name.length:1}columnCount(e){return"body"===e?2:1}data(e,t,a){return"row-header"===e?this._data.name[t]:"column-header"===e?1===a?this._trans.__("Value"):this._trans.__("Type"):"corner-header"===e?this._trans.__("Name"):1===a?this._data.value[t]:this._data.type[t]}getVariableReference(e){return this._data.variablesReference[e]}getVariableName(e){return this._data.name[e]}setData(e){var t,a;this._clearData(),this.emitChanged({type:"model-reset"});const o=null!==(t=e.find((e=>e.name===this._scope)))&&void 0!==t?t:e[0],r=(null!==(a=null==o?void 0:o.variables)&&void 0!==a?a:[]).filter((e=>e.name&&!this._filter.has(e.name)));r.forEach(((e,t)=>{var a;this._data.name[t]=e.name,this._data.type[t]=null!==(a=e.type)&&void 0!==a?a:"",this._data.value[t]=e.value,this._data.variablesReference[t]=e.variablesReference})),this.emitChanged({type:"rows-inserted",region:"body",index:1,span:r.length})}_clearData(){this._data={name:[],type:[],value:[],variablesReference:[]}}}!function(e){e.computeStyle=function(){const e=function(){const e=document.createElement("div");return e.className="jp-DebuggerVariables-colorPalette",e.innerHTML='\n        <div class="jp-mod-void"></div>\n        <div class="jp-mod-background"></div>\n        <div class="jp-mod-header-background"></div>\n        <div class="jp-mod-grid-line"></div>\n        <div class="jp-mod-header-grid-line"></div>\n        <div class="jp-mod-selection"></div>\n        <div class="jp-mod-text"></div>\n      ',e}();let t;document.body.appendChild(e),t=e.querySelector(".jp-mod-void");const a=getComputedStyle(t).color;t=e.querySelector(".jp-mod-background");const o=getComputedStyle(t).color;t=e.querySelector(".jp-mod-header-background");const s=getComputedStyle(t).color;t=e.querySelector(".jp-mod-grid-line");const n=getComputedStyle(t).color;t=e.querySelector(".jp-mod-header-grid-line");const l=getComputedStyle(t).color;t=e.querySelector(".jp-mod-selection");const d=getComputedStyle(t).color;t=e.querySelector(".jp-mod-text");const i=getComputedStyle(t).color;return document.body.removeChild(e),{style:{voidColor:a,backgroundColor:o,headerBackgroundColor:s,gridLineColor:n,headerGridLineColor:l,rowBackgroundColor:e=>e%2==0?a:o,selectionFillColor:d},textRenderer:new r.TextRenderer({font:"12px sans-serif",textColor:i,backgroundColor:"",verticalAlignment:"center",horizontalAlignment:"left"})}};class t extends r.BasicMouseHandler{constructor(){super(...arguments),this._doubleClicked=new s.Signal(this),this._selected=new s.Signal(this)}get doubleClicked(){return this._doubleClicked}get selected(){return this._selected}dispose(){this.isDisposed||(s.Signal.disconnectSender(this),super.dispose())}onMouseDoubleClick(e,t){const a=e.hitTest(t.clientX,t.clientY);this._doubleClicked.emit(a)}onMouseDown(e,t){let{clientX:a,clientY:o}=t,r=e.hitTest(a,o);this._selected.emit(r),super.onMouseDown(e,t)}onContextMenu(e,t){let{clientX:a,clientY:o}=t,r=e.hitTest(a,o);this._selected.emit(r)}}e.MouseHandler=t}(o||(o={}))}}]);