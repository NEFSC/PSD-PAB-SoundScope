"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3340],{33340:(e,n,t)=>{t.r(n),t.d(n,{default:()=>y});var o=t(68239),i=t(76867),r=t(36768),l=t(71677),a=t(32895),c=t(78156),s=t.n(c);const d="availableProviders";function m(e){const{schema:n}=e,t=n.title,o=n.description,i=e.formContext.settings,r=i.get(d).user,l={...n.default};if(r)for(const e of Object.keys(l))l[e]=e in r?r[e]:-1;const[a,m]=(0,c.useState)(l);return s().createElement("div",null,s().createElement("fieldset",null,s().createElement("legend",null,t),s().createElement("p",{className:"field-description"},o),Object.keys(l).map((e=>s().createElement("div",{key:e,className:"form-group small-field"},s().createElement("div",null,s().createElement("h3",null," ",e),s().createElement("div",{className:"inputFieldWrapper"},s().createElement("input",{className:"form-control",type:"number",value:a[e],onChange:n=>{((e,n)=>{const t={...a,[e]:parseInt(n.target.value)};i.set(d,t).catch(console.error),m(t)})(e,n)}}))))))))}const p="@jupyterlab/completer-extension:manager",u="@jupyterlab/completer-extension:inline-completer";var v;!function(e){e.nextInline="inline-completer:next",e.previousInline="inline-completer:previous",e.acceptInline="inline-completer:accept",e.invokeInline="inline-completer:invoke"}(v||(v={}));const I={id:"@jupyterlab/completer-extension:base-service",description:"Adds context and kernel completion providers.",requires:[i.ICompletionProviderManager],autoStart:!0,activate:(e,n)=>{n.registerProvider(new i.ContextCompleterProvider),n.registerProvider(new i.KernelCompleterProvider)}},f={id:"@jupyterlab/completer-extension:inline-history",description:"Adds inline completion provider suggesting code from execution history.",requires:[i.ICompletionProviderManager],optional:[l.ITranslator],autoStart:!0,activate:(e,n,t)=>{n.registerInlineProvider(new i.HistoryInlineCompletionProvider({translator:null!=t?t:l.nullTranslator}))}},g={id:"@jupyterlab/completer-extension:inline-completer-factory",description:"Provides a factory for inline completer.",provides:i.IInlineCompleterFactory,optional:[l.ITranslator],autoStart:!0,activate:(e,n)=>{const t=(n||l.nullTranslator).load("jupyterlab");return{factory:n=>{const r=new i.InlineCompleter({...n,trans:t}),l=n=>{const t=e.commands.keyBindings.find((e=>e.command===n)),o=t?a.CommandRegistry.formatKeystroke(t.keys):"";return o?`${o}`:""},c={[v.previousInline]:l(v.previousInline),[v.nextInline]:l(v.nextInline),[v.acceptInline]:l(v.acceptInline)};return e.commands.keyBindingChanged.connect(((e,n)=>{const t=n.binding.command;c.hasOwnProperty(t)&&(c[t]=l(t))})),r.toolbar.addItem("previous-inline-completion",new o.CommandToolbarButton({commands:e.commands,icon:o.caretLeftIcon,id:v.previousInline,label:()=>c[v.previousInline],caption:t.__("Previous")})),r.toolbar.addItem("next-inline-completion",new o.CommandToolbarButton({commands:e.commands,icon:o.caretRightIcon,id:v.nextInline,label:()=>c[v.nextInline],caption:t.__("Next")})),r.toolbar.addItem("accept-inline-completion",new o.CommandToolbarButton({commands:e.commands,icon:o.checkIcon,id:v.acceptInline,label:()=>c[v.acceptInline],caption:t.__("Accept")})),r}}}},b={id:u,description:"Provides a factory for inline completer.",requires:[i.ICompletionProviderManager,i.IInlineCompleterFactory,r.ISettingRegistry],optional:[l.ITranslator],autoStart:!0,activate:(e,n,t,o,i)=>{n.setInlineCompleterFactory(t);const r=(i||l.nullTranslator).load("jupyterlab"),a=()=>!!e.shell.currentWidget&&!!n.inline;e.commands.addCommand(v.nextInline,{execute:()=>{var t;null===(t=n.inline)||void 0===t||t.cycle(e.shell.currentWidget.id,"next")},label:r.__("Next Inline Completion"),isEnabled:a}),e.commands.addCommand(v.previousInline,{execute:()=>{var t;null===(t=n.inline)||void 0===t||t.cycle(e.shell.currentWidget.id,"previous")},label:r.__("Previous Inline Completion"),isEnabled:a}),e.commands.addCommand(v.acceptInline,{execute:()=>{var t;null===(t=n.inline)||void 0===t||t.accept(e.shell.currentWidget.id)},label:r.__("Accept Inline Completion"),isEnabled:a}),e.commands.addCommand(v.invokeInline,{execute:()=>{var t;null===(t=n.inline)||void 0===t||t.invoke(e.shell.currentWidget.id)},label:r.__("Invoke Inline Completer"),isEnabled:a});const c=e=>{var t;null===(t=n.inline)||void 0===t||t.configure(e.composite)};e.restored.then((()=>{var e;const t=null!==(e=n.inlineProviders)&&void 0!==e?e:[],i=e=>{var n,t;return{enabled:!0,timeout:5e3,debouncerDelay:0,...null!==(t=null===(n=e.schema)||void 0===n?void 0:n.default)&&void 0!==t?t:{}}};o.transform(u,{compose:e=>{var n,o;const r=null!==(n=e.data.composite.providers)&&void 0!==n?n:{};for(const e of t){const n=i(e);r[e.identifier]={...n,...null!==(o=r[e.identifier])&&void 0!==o?o:{}}}return e.data.composite.providers=r,e},fetch:e=>{var n,o;const l=e.schema.properties,a={};for(const e of t)a[e.identifier]={title:r.__("%1 provider",e.name),properties:{...null!==(o=null===(n=e.schema)||void 0===n?void 0:n.properties)&&void 0!==o?o:{},timeout:{title:r.__("Timeout"),description:r.__("Timeout for %1 provider (in milliseconds).",e.name),type:"number",minimum:0},debouncerDelay:{title:r.__("Debouncer delay"),minimum:0,description:r.__("Time since the last key press to wait before requesting completions from %1 provider (in milliseconds).",e.name),type:"number"},enabled:{title:r.__("Enabled"),description:r.__("Whether to fetch completions %1 provider.",e.name),type:"boolean"}},default:i(e),type:"object"};return l.providers.properties=a,e}}),o.load(u).then((e=>{c(e),e.changed.connect((e=>{c(e)}))})).catch(console.error)})).catch(console.error);const s=n=>e.commands.keyBindings.find((e=>e.command===n)),d={[v.acceptInline]:s(v.acceptInline),[v.invokeInline]:s(v.invokeInline)};e.commands.keyBindingChanged.connect(((e,n)=>{const t=n.binding.command;d.hasOwnProperty(t)&&(d[t]=s(t))})),document.addEventListener("keydown",(n=>{if(!(n.target instanceof Element))return;const t=n.target;switch(n.keyCode){case 9:{const o=[d[v.acceptInline],d[v.invokeInline]];for(const i of o)if(i&&1===i.keys.length&&"Tab"===i.keys[0]&&t.closest(i.selector))return e.commands.execute(i.command).catch(console.error),n.preventDefault(),n.stopPropagation(),void n.stopImmediatePropagation();break}default:return}}),!0)}},h={id:p,description:"Provides the completion provider manager.",requires:[r.ISettingRegistry],optional:[o.IFormRendererRegistry],provides:i.ICompletionProviderManager,autoStart:!0,activate:(e,n,t)=>{const o="availableProviders",r=new i.CompletionProviderManager,l=(e,n)=>{var t;const i=e.get(o),l=e.get("providerTimeout"),a=e.get("showDocumentationPanel"),c=e.get("autoCompletion");r.setTimeout(l.composite),r.setShowDocumentationPanel(a.composite),r.setContinuousHinting(c.composite);const s=null!==(t=i.user)&&void 0!==t?t:i.composite,d=Object.entries(null!=s?s:{}).filter((e=>e[1]>=0&&n.includes(e[0]))).sort((([,e],[,n])=>n-e)).map((e=>e[0]));r.activateProvider(d)};if(e.restored.then((()=>{const e=[...r.getProviders().entries()],t=e.map((([e,n])=>e));n.transform(p,{fetch:n=>{const t=n.schema.properties,i={};return e.forEach((([e,n],t)=>{var o;i[e]=null!==(o=n.rank)&&void 0!==o?o:10*(t+1)})),t[o].default=i,n}}),n.load(p).then((e=>{l(e,t),e.changed.connect((e=>{l(e,t)}))})).catch(console.error)})).catch(console.error),t){const e={fieldRenderer:e=>m(e)};t.addRenderer(`${p}.availableProviders`,e)}return r}},y=[h,I,f,g,b]}}]);