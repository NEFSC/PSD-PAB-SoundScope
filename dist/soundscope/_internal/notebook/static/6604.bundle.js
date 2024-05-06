"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6604,2088],{6604:(e,o,t)=>{t.r(o),t.d(o,{default:()=>b});var n,i=t(46122),r=t(38639),l=t(89421),s=t(43833),a=t(70856),d=t(53757),c=t(71677),u=t(33625),p=t(31516);!function(e){e.dismiss="tooltip:dismiss",e.launchConsole="tooltip:launch-console",e.launchNotebook="tooltip:launch-notebook",e.launchFile="tooltip:launch-file"}(n||(n={}));const m={id:"@jupyterlab/tooltip-extension:manager",description:"Provides the tooltip manager.",autoStart:!0,optional:[c.ITranslator],provides:d.ITooltipManager,activate:(e,o)=>{const t=(null!=o?o:c.nullTranslator).load("jupyterlab");let i=null;return e.commands.addCommand(n.dismiss,{label:t.__("Dismiss the tooltip"),execute:()=>{i&&(i.dispose(),i=null)}}),{invoke(e){const{anchor:o,editor:t,kernel:n,rendermime:r}=e;return i&&(i.dispose(),i=null),T.fetch({detail:0,editor:t,kernel:n}).then((e=>{i=new d.Tooltip({anchor:o,bundle:e,editor:t,rendermime:r}),p.Widget.attach(i,document.body)})).catch((()=>{}))}}}},h={id:"@jupyterlab/tooltip-extension:consoles",description:"Adds the tooltip capability to consoles.",autoStart:!0,optional:[c.ITranslator],requires:[d.ITooltipManager,i.IConsoleTracker],activate:(e,o,t,i)=>{const r=(null!=i?i:c.nullTranslator).load("jupyterlab");e.commands.addCommand(n.launchConsole,{label:r.__("Open the tooltip"),execute:()=>{var e,n;const i=t.currentWidget;if(!i)return;const r=i.console,l=null===(e=r.promptCell)||void 0===e?void 0:e.editor,s=null===(n=r.sessionContext.session)||void 0===n?void 0:n.kernel,a=r.rendermime;return l&&s&&a?o.invoke({anchor:r,editor:l,kernel:s,rendermime:a}):void 0}})}},v={id:"@jupyterlab/tooltip-extension:notebooks",description:"Adds the tooltip capability to notebooks.",autoStart:!0,optional:[c.ITranslator],requires:[d.ITooltipManager,s.INotebookTracker],activate:(e,o,t,i)=>{const r=(null!=i?i:c.nullTranslator).load("jupyterlab");e.commands.addCommand(n.launchNotebook,{label:r.__("Open the tooltip"),execute:()=>{var e,n;const i=t.currentWidget;if(!i)return;const r=i.content,l=null===(e=r.activeCell)||void 0===e?void 0:e.editor,s=null===(n=i.sessionContext.session)||void 0===n?void 0:n.kernel,a=r.rendermime;return l&&s&&a?o.invoke({anchor:r,editor:l,kernel:s,rendermime:a}):void 0}})}},k={id:"@jupyterlab/tooltip-extension:files",description:"Adds the tooltip capability to file editors.",autoStart:!0,optional:[c.ITranslator],requires:[d.ITooltipManager,l.IEditorTracker,a.IRenderMimeRegistry],activate:(e,o,t,i,r)=>{const l=(null!=r?r:c.nullTranslator).load("jupyterlab"),s={},a=e.serviceManager.sessions,d=(e,o)=>{t.forEach((e=>{const t=(0,u.find)(o,(o=>e.context.path===o.path));if(t){const o=s[e.id];if(o&&o.id===t.id)return;o&&(delete s[e.id],o.dispose());const n=a.connectTo({model:t});s[e.id]=n}else{const o=s[e.id];o&&(o.dispose(),delete s[e.id])}}))};d(0,a.running()),a.runningChanged.connect(d),t.widgetAdded.connect(((e,o)=>{o.disposed.connect((e=>{const o=s[e.id];o&&(o.dispose(),delete s[e.id])}))})),e.commands.addCommand(n.launchFile,{label:l.__("Open the tooltip"),execute:async()=>{const e=t.currentWidget,n=e&&s[e.id]&&s[e.id].kernel;if(!n)return;const r=e.content,l=null==r?void 0:r.editor;return l&&n&&i?o.invoke({anchor:r,editor:l,kernel:n,rendermime:i}):void 0}})}},b=[m,h,v,k];var T;!function(e){let o=0;e.fetch=function(e){const{detail:t,editor:n,kernel:i}=e,l=n.model.sharedModel.getSource(),s=n.getCursorPosition(),a=r.Text.jsIndexToCharIndex(n.getOffsetAt(s),l);if(!l||!i)return Promise.reject(void 0);const d={code:l,cursor_pos:a,detail_level:t||0},c=++o;return i.requestInspect(d).then((e=>{const t=e.content;return c!==o?Promise.reject(void 0):"ok"===t.status&&t.found?Promise.resolve(t.data):Promise.reject(void 0)}))}}(T||(T={}))}}]);