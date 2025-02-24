import{g as o}from"./capacitor-74355484-sCloY8M9.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var n;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(n||(n={}));/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var t;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(t||(t={}));const r={getEngine(){const e=o();if(e!=null&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return e!=null&&e.getResizeMode?e.getResizeMode().catch(i=>{if(i.code!==n.Unimplemented)throw i}):Promise.resolve(void 0)}};export{r as K,t as a};
