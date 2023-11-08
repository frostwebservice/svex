import{P as g,j as h,cj as K,f as b,d,k as p,au as U,q as P,b_ as Q,r as c,bs as X,E as J,cs as ee,D as z,l as y,cu as te,a9 as j,y as ne,C as oe,cv as re,bF as ie,F as ae,S as se}from"./app-614b2243.js";import{T as le}from"./Truck02-cc39385d.js";import{L as ce}from"./LinearProgress-964fb4ab.js";import{T as de,t as ue,a as M,b as w,c as L,d as N,e as A}from"./TimelineSeparator-8ea39650.js";const W=e=>{const{children:t,container:n,open:i,onClose:o}=e;return h(K,{anchor:"left",hideBackdrop:!0,ModalProps:{container:n,sx:{pointerEvents:"none",position:"absolute"}},onClose:o,open:i,PaperProps:{sx:{pointerEvents:"auto",position:"absolute"}},SlideProps:{container:n},variant:"temporary",children:[h(b,{alignItems:"flex-center",direction:"row",justifyContent:"space-between",sx:{p:2},children:[d(p,{variant:"h5",children:"Fleet"}),d(U,{onClick:o,children:d(P,{children:d(Q,{})})})]}),t]})};W.propTypes={children:g.node,container:g.any,onClose:g.func,open:g.bool};const fe=e=>{const{onDeselect:t,onSelect:n,selected:i,vehicle:o}=e,r=c.useCallback(()=>{i?t==null||t():n==null||n(o.id)},[t,n,i,o]);return h(b,{component:"li",children:[h(X,{sx:{alignItems:"center",justifyContent:"flex-start",p:2,textAlign:"left",width:"100%"},onClick:r,children:[d(J,{sx:{mr:2},children:d(P,{children:d(le,{})})}),h("div",{children:[d(p,{children:o.id}),d(p,{color:"text.secondary",variant:"body2",children:o.location})]})]}),h(ee,{in:i,children:[d(z,{}),h(y,{sx:{p:2},children:[h(b,{spacing:1,children:[d(p,{color:"text.secondary",variant:"caption",children:"Temperature (good)"}),h(b,{alignItems:"center",direction:"row",spacing:2,children:[d(ce,{value:8,sx:{flexGrow:1},variant:"determinate"}),d(p,{color:"text.secondary",variant:"body2",children:o.temp})]})]}),h(de,{position:"right",sx:{px:3,[`& .${ue.root}:before`]:{flex:0,padding:0}},children:[h(M,{children:[h(w,{children:[d(L,{color:"primary"}),d(N,{})]}),d(A,{children:h("div",{children:[d(p,{variant:"body2",children:"Tracking Number Created"}),d(p,{color:"text.secondary",variant:"caption",children:o.startedAt})]})})]}),h(M,{children:[h(w,{children:[d(L,{color:"primary"}),d(N,{})]}),d(A,{children:h("div",{children:[d(p,{variant:"body2",children:"Out for Delivery"}),d(p,{color:"text.secondary",variant:"caption",children:o.departedAt})]})})]}),h(M,{children:[d(w,{children:d(L,{color:"primary"})}),d(A,{children:h("div",{children:[d(p,{variant:"body2",children:"Arrived"}),d(p,{color:"text.secondary",variant:"caption",children:o.arrivedAt})]})})]})]})]})]})]})},R=e=>{const{onVehicleDeselect:t,onVehicleSelect:n,currentVehicleId:i,vehicles:o=[]}=e;return d(b,{component:"ul",divider:d(z,{}),sx:{borderBottomColor:"divider",borderBottomStyle:"solid",borderBottomWidth:1,listStyle:"none",m:0,p:0},children:o.map(r=>{const s=i?i===r.id:!1;return d(fe,{onDeselect:t,onSelect:n,selected:s,vehicle:r},r.id)})})};R.propTypes={currentVehicleId:g.string,onVehicleDeselect:g.func,onVehicleSelect:g.func,vehicles:g.array};const me=c.createContext(null);function he(e){const t=e.clone();return t.pixelsToGLUnits=e.pixelsToGLUnits,t}function V(e){return{longitude:e.center.lng,latitude:e.center.lat,zoom:e.zoom,pitch:e.pitch,bearing:e.bearing,padding:e.padding}}function O(e,t){const n=t.viewState||t;let i=!1;if("longitude"in n&&"latitude"in n){const o=e.center;e.center=new o.constructor(n.longitude,n.latitude),i=i||o!==e.center}if("zoom"in n){const o=e.zoom;e.zoom=n.zoom,i=i||o!==e.zoom}if("bearing"in n){const o=e.bearing;e.bearing=n.bearing,i=i||o!==e.bearing}if("pitch"in n){const o=e.pitch;e.pitch=n.pitch,i=i||o!==e.pitch}return n.padding&&!e.isPaddingEqual(n.padding)&&(i=!0,e.padding=n.padding),i}const pe=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function F(e){if(!e)return null;if(typeof e=="string"||("toJS"in e&&(e=e.toJS()),!e.layers))return e;const t={};for(const i of e.layers)t[i.id]=i;const n=e.layers.map(i=>{const o=t[i.ref];let r=null;if("interactive"in i&&(r={...i},delete r.interactive),o){r=r||{...i},delete r.ref;for(const s of pe)s in o&&(r[s]=o[s])}return r||i});return{...e,layers:n}}function ge(e,t){const n=Array.isArray(e)?e[0]:e?e.x:0,i=Array.isArray(e)?e[1]:e?e.y:0,o=Array.isArray(t)?t[0]:t?t.x:0,r=Array.isArray(t)?t[1]:t?t.y:0;return n===o&&i===r}function v(e,t){if(e===t)return!0;if(!e||!t)return!1;if(Array.isArray(e)){if(!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!v(e[n],t[n]))return!1;return!0}else if(Array.isArray(t))return!1;if(typeof e=="object"&&typeof t=="object"){const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(const o of n)if(!t.hasOwnProperty(o)||!v(e[o],t[o]))return!1;return!0}return!1}const I={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},k={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},B={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},ve=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],ye=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class C{constructor(t,n,i){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=o=>{const r=this.props[B[o.type]];r&&r(o)},this._onPointerEvent=o=>{(o.type==="mousemove"||o.type==="mouseout")&&this._updateHover(o);const r=this.props[I[o.type]];if(r){if(this.props.interactiveLayerIds&&o.type!=="mouseover"&&o.type!=="mouseout"){const s=this._hoveredFeatures||this._map.queryRenderedFeatures(o.point,{layers:this.props.interactiveLayerIds});o.features=s}r(o),delete o.features}},this._onCameraEvent=o=>{if(!this._internalUpdate){const r=this.props[k[o.type]];r&&r(o)}o.type in this._deferredEvents&&(this._deferredEvents[o.type]=!1)},this._MapClass=t,this.props=n,this._initialize(i)}get map(){return this._map}get transform(){return this._renderTransform}setProps(t){const n=this.props;this.props=t;const i=this._updateSettings(t,n);i&&this._createShadowTransform(this._map);const o=this._updateSize(t),r=this._updateViewState(t,!0);this._updateStyle(t,n),this._updateStyleComponents(t,n),this._updateHandlers(t,n),(i||o||r&&!this._map.isMoving())&&this.redraw()}static reuse(t,n){const i=C.savedMaps.pop();if(!i)return null;const o=i.map,r=o.getContainer();for(n.className=r.className;r.childNodes.length>0;)n.appendChild(r.childNodes[0]);o._container=n,i.setProps({...t,styleDiffing:!1}),o.resize();const{initialViewState:s}=t;return s&&(s.bounds?o.fitBounds(s.bounds,{...s.fitBoundsOptions,duration:0}):i._updateViewState(s,!1)),o.isStyleLoaded()?o.fire("load"):o.once("styledata",()=>o.fire("load")),i}_initialize(t){const{props:n}=this,i={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||_e()||null,container:t,style:F(n.mapStyle)},o=i.initialViewState||i.viewState||i;if(Object.assign(i,{center:[o.longitude||0,o.latitude||0],zoom:o.zoom||0,pitch:o.pitch||0,bearing:o.bearing||0}),n.gl){const a=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=a,n.gl)}const r=new this._MapClass(i);o.padding&&r.setPadding(o.padding),n.cursor&&(r.getCanvas().style.cursor=n.cursor),this._createShadowTransform(r);const s=r._render;r._render=a=>{this._inRender=!0,s.call(r,a),this._inRender=!1};const u=r._renderTaskQueue.run;r._renderTaskQueue.run=a=>{u.call(r._renderTaskQueue,a),this._onBeforeRepaint()},r.on("render",()=>this._onAfterRepaint());const l=r.fire;r.fire=this._fireEvent.bind(this,l),r.on("resize",()=>{this._renderTransform.resize(r.transform.width,r.transform.height)}),r.on("styledata",()=>this._updateStyleComponents(this.props,{})),r.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const a in I)r.on(a,this._onPointerEvent);for(const a in k)r.on(a,this._onCameraEvent);for(const a in B)r.on(a,this._onEvent);this._map=r}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),C.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const t=this._map;!this._inRender&&t.style&&(t._frame&&(t._frame.cancel(),t._frame=null),t._render())}_createShadowTransform(t){const n=he(t.transform);t.painter.transform=n,this._renderTransform=n}_updateSize(t){const{viewState:n}=t;if(n){const i=this._map;if(n.width!==i.transform.width||n.height!==i.transform.height)return i.resize(),!0}return!1}_updateViewState(t,n){if(this._internalUpdate)return!1;const i=this._map,o=this._renderTransform,{zoom:r,pitch:s,bearing:u}=o,l=i.isMoving();l&&(o.cameraElevationReference="sea");const a=O(o,{...V(i.transform),...t});if(l&&(o.cameraElevationReference="ground"),a&&n){const f=this._deferredEvents;f.move=!0,f.zoom||(f.zoom=r!==o.zoom),f.rotate||(f.rotate=u!==o.bearing),f.pitch||(f.pitch=s!==o.pitch)}return l||O(i.transform,t),a}_updateSettings(t,n){const i=this._map;let o=!1;for(const r of ve)r in t&&!v(t[r],n[r])&&(o=!0,i[`set${r[0].toUpperCase()}${r.slice(1)}`](t[r]));return o}_updateStyle(t,n){if(t.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=t.cursor),t.mapStyle!==n.mapStyle){const i={diff:t.styleDiffing};return"localIdeographFontFamily"in t&&(i.localIdeographFontFamily=t.localIdeographFontFamily),this._map.setStyle(F(t.mapStyle),i),!0}return!1}_updateStyleComponents(t,n){const i=this._map;let o=!1;return i.style.loaded()&&("light"in t&&!v(t.light,n.light)&&(o=!0,i.setLight(t.light)),"fog"in t&&!v(t.fog,n.fog)&&(o=!0,i.setFog(t.fog)),"terrain"in t&&!v(t.terrain,n.terrain)&&(!t.terrain||i.getSource(t.terrain.source))&&(o=!0,i.setTerrain(t.terrain))),o}_updateHandlers(t,n){const i=this._map;let o=!1;for(const r of ye){const s=t[r];v(s,n[r])||(o=!0,s?i[r].enable(s):i[r].disable())}return o}_updateHover(t){var n;const{props:i}=this;if(i.interactiveLayerIds&&(i.onMouseMove||i.onMouseEnter||i.onMouseLeave)){const r=t.type,s=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0;let u;if(r==="mousemove")try{u=this._map.queryRenderedFeatures(t.point,{layers:i.interactiveLayerIds})}catch{u=[]}else u=[];const l=u.length>0;!l&&s&&(t.type="mouseleave",this._onPointerEvent(t)),this._hoveredFeatures=u,l&&!s&&(t.type="mouseenter",this._onPointerEvent(t)),t.type=r}else this._hoveredFeatures=null}_fireEvent(t,n,i){const o=this._map,r=o.transform,s=typeof n=="string"?n:n.type;return s==="move"&&this._updateViewState(this.props,!1),s in k&&(typeof n=="object"&&(n.viewState=V(r)),this._map.isMoving())?(o.transform=this._renderTransform,t.call(o,n,i),o.transform=r,o):(t.call(o,n,i),o)}_onBeforeRepaint(){const t=this._map;this._internalUpdate=!0;for(const i in this._deferredEvents)this._deferredEvents[i]&&t.fire(i);this._internalUpdate=!1;const n=this._map.transform;this._map.transform=this._renderTransform,this._onAfterRepaint=()=>{this._map.transform=n}}}C.savedMaps=[];function _e(){let e=null;if(typeof location<"u"){const t=/access_token=([^&\/]*)/.exec(location.search);e=t&&t[1]}try{e=e||{}.MapboxAccessToken}catch{}try{e=e||{}.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return e}const Ce=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function Se(e,t){if(!e)return null;const n=e.map,i={getMap:()=>n,getCenter:()=>e.transform.center,getZoom:()=>e.transform.zoom,getBearing:()=>e.transform.bearing,getPitch:()=>e.transform.pitch,getPadding:()=>e.transform.padding,getBounds:()=>e.transform.getBounds(),project:o=>e.transform.locationPoint(t.LngLat.convert(o)),unproject:o=>e.transform.pointLocation(t.Point.convert(o)),queryTerrainElevation:(o,r)=>{const s=n.transform;n.transform=e.transform;const u=n.queryTerrainElevation(o,r);return n.transform=s,u}};for(const o of be(n))!(o in i)&&!Ce.includes(o)&&(i[o]=n[o].bind(n));return i}function be(e){const t=new Set;let n=e;for(;n;){for(const i of Object.getOwnPropertyNames(n))i[0]!=="_"&&typeof e[i]=="function"&&i!=="fire"&&i!=="setEventedParent"&&t.add(i);n=Object.getPrototypeOf(n)}return Array.from(t)}const xe=typeof document<"u"?c.useLayoutEffect:c.useEffect,Ee=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function Te(e,t){for(const n of Ee)n in t&&(e[n]=t[n]);t.RTLTextPlugin&&e.getRTLTextPluginStatus&&e.getRTLTextPluginStatus()==="unavailable"&&e.setRTLTextPlugin(t.RTLTextPlugin,n=>{n&&console.error(n)},!1)}const T=c.createContext(null),Me={minZoom:0,maxZoom:22,minPitch:0,maxPitch:60,scrollZoom:!0,boxZoom:!0,dragRotate:!0,dragPan:!0,keyboard:!0,doubleClickZoom:!0,touchZoomRotate:!0,touchPitch:!0,mapStyle:{version:8,sources:{},layers:[]},styleDiffing:!0,projection:"mercator",renderWorldCopies:!0,onError:e=>console.error(e.error),RTLTextPlugin:"https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"},D=c.forwardRef((e,t)=>{const n=c.useContext(me),[i,o]=c.useState(null),r=c.useRef(),{current:s}=c.useRef({mapLib:null,map:null});c.useEffect(()=>{const l=e.mapLib;let a=!0,f;return Promise.resolve(l||te(()=>import("./mapbox-gl-9dac6b8b.js").then(m=>m.m),["assets/mapbox-gl-9dac6b8b.js","assets/app-614b2243.js","assets/app-95a9c574.css"])).then(m=>{if(a){if(m.Map||(m=m.default),!m||!m.Map)throw new Error("Invalid mapLib");if(m.supported(e))Te(m,e),e.reuseMaps&&(f=C.reuse(e,r.current)),f||(f=new C(m.Map,e,r.current)),s.map=Se(f,m),s.mapLib=m,o(f),n==null||n.onMapMount(s.map,e.id);else throw new Error("Map is not supported by this browser")}}).catch(m=>{e.onError({type:"error",target:null,originalEvent:null,error:m})}),()=>{a=!1,f&&(n==null||n.onMapUnmount(e.id),e.reuseMaps?f.recycle():f.destroy())}},[]),xe(()=>{i&&i.setProps(e)}),c.useImperativeHandle(t,()=>s.map,[i]);const u=c.useMemo(()=>({position:"relative",width:"100%",height:"100%",...e.style}),[e.style]);return d("div",{id:e.id,ref:r,style:u,children:i&&d(T.Provider,{value:s,children:d("div",{"mapboxgl-children":"",children:e.children})})})});D.displayName="Map";D.defaultProps=Me;const we=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function _(e,t){if(!e||!t)return;const n=e.style;for(const i in t){const o=t[i];Number.isFinite(o)&&!we.test(i)?n[i]=`${o}px`:n[i]=o}}const Le={draggable:!1,popup:null,rotation:0,rotationAlignment:"auto",pitchAlignment:"auto"};function H(e){const{map:t,mapLib:n}=c.useContext(T),i=c.useRef({props:e});i.current.props=e;const o=c.useMemo(()=>{let r=!1;c.Children.forEach(e.children,l=>{l&&(r=!0)});const s={...e,element:r?document.createElement("div"):null},u=new n.Marker(s).setLngLat([e.longitude,e.latitude]);return u.getElement().addEventListener("click",l=>{var a,f;(f=(a=i.current.props).onClick)===null||f===void 0||f.call(a,{type:"click",target:u,originalEvent:l})}),u.on("dragstart",l=>{var a,f;const m=l;m.lngLat=o.getLngLat(),(f=(a=i.current.props).onDragStart)===null||f===void 0||f.call(a,m)}),u.on("drag",l=>{var a,f;const m=l;m.lngLat=o.getLngLat(),(f=(a=i.current.props).onDrag)===null||f===void 0||f.call(a,m)}),u.on("dragend",l=>{var a,f;const m=l;m.lngLat=o.getLngLat(),(f=(a=i.current.props).onDragEnd)===null||f===void 0||f.call(a,m)}),u},[]);return c.useEffect(()=>(o.addTo(t.getMap()),()=>{o.remove()}),[]),c.useEffect(()=>{_(o.getElement(),e.style)},[e.style]),(o.getLngLat().lng!==e.longitude||o.getLngLat().lat!==e.latitude)&&o.setLngLat([e.longitude,e.latitude]),e.offset&&!ge(o.getOffset(),e.offset)&&o.setOffset(e.offset),o.isDraggable()!==e.draggable&&o.setDraggable(e.draggable),o.getRotation()!==e.rotation&&o.setRotation(e.rotation),o.getRotationAlignment()!==e.rotationAlignment&&o.setRotationAlignment(e.rotationAlignment),o.getPitchAlignment()!==e.pitchAlignment&&o.setPitchAlignment(e.pitchAlignment),o.getPopup()!==e.popup&&o.setPopup(e.popup),j.createPortal(e.children,o.getElement())}H.defaultProps=Le;const Ae=c.memo(H);function Z(e){return new Set(e?e.trim().split(/\s+/):[])}function ke(e){const{map:t,mapLib:n}=c.useContext(T),i=c.useMemo(()=>document.createElement("div"),[]),o=c.useRef({props:e});o.current.props=e;const r=c.useMemo(()=>{const s={...e},u=new n.Popup(s).setLngLat([e.longitude,e.latitude]);return u.once("open",l=>{var a,f;(f=(a=o.current.props).onOpen)===null||f===void 0||f.call(a,l)}),u},[]);if(c.useEffect(()=>{const s=u=>{var l,a;(a=(l=o.current.props).onClose)===null||a===void 0||a.call(l,u)};return r.on("close",s),r.setDOMContent(i).addTo(t.getMap()),()=>{r.off("close",s),r.isOpen()&&r.remove()}},[]),c.useEffect(()=>{_(r.getElement(),e.style)},[e.style]),r.isOpen()&&((r.getLngLat().lng!==e.longitude||r.getLngLat().lat!==e.latitude)&&r.setLngLat([e.longitude,e.latitude]),e.offset&&!v(r.options.offset,e.offset)&&r.setOffset(e.offset),(r.options.anchor!==e.anchor||r.options.maxWidth!==e.maxWidth)&&(r.options.anchor=e.anchor,r.setMaxWidth(e.maxWidth)),r.options.className!==e.className)){const s=Z(r.options.className),u=Z(e.className);for(const l of s)u.has(l)||r.removeClassName(l);for(const l of u)s.has(l)||r.addClassName(l);r.options.className=e.className}return j.createPortal(e.children,i)}c.memo(ke);function x(e,t,n,i){const o=c.useContext(T),r=c.useMemo(()=>e(o),[]);return c.useEffect(()=>{const s=i||n||t,u=typeof t=="function"&&typeof n=="function"?t:null,l=typeof n=="function"?n:typeof t=="function"?t:null,{map:a}=o;return a.hasControl(r)||(a.addControl(r,s==null?void 0:s.position),u&&u(o)),()=>{l&&l(o),a.hasControl(r)&&a.removeControl(r)}},[]),r}function Re(e){const t=x(({mapLib:n})=>new n.AttributionControl(e),{position:e.position});return c.useEffect(()=>{_(t._container,e.style)},[e.style]),null}c.memo(Re);function Pe(e){const t=x(({mapLib:n})=>new n.FullscreenControl({container:e.containerId&&document.getElementById(e.containerId)}),{position:e.position});return c.useEffect(()=>{_(t._controlContainer,e.style)},[e.style]),null}c.memo(Pe);const q=c.forwardRef((e,t)=>{const n=c.useRef({props:e}),i=x(({mapLib:o})=>{const r=new o.GeolocateControl(e),s=r._setupUI;return r._setupUI=u=>{r._container.hasChildNodes()||s(u)},r.on("geolocate",u=>{var l,a;(a=(l=n.current.props).onGeolocate)===null||a===void 0||a.call(l,u)}),r.on("error",u=>{var l,a;(a=(l=n.current.props).onError)===null||a===void 0||a.call(l,u)}),r.on("outofmaxbounds",u=>{var l,a;(a=(l=n.current.props).onOutOfMaxBounds)===null||a===void 0||a.call(l,u)}),r.on("trackuserlocationstart",u=>{var l,a;(a=(l=n.current.props).onTrackUserLocationStart)===null||a===void 0||a.call(l,u)}),r.on("trackuserlocationend",u=>{var l,a;(a=(l=n.current.props).onTrackUserLocationEnd)===null||a===void 0||a.call(l,u)}),r},{position:e.position});return n.current.props=e,c.useImperativeHandle(t,()=>({trigger:()=>i.trigger()}),[]),c.useEffect(()=>{_(i._container,e.style)},[e.style]),null});q.displayName="GeolocateControl";c.memo(q);function ze(e){const t=x(({mapLib:n})=>new n.NavigationControl(e),{position:e.position});return c.useEffect(()=>{_(t._container,e.style)},[e.style]),null}c.memo(ze);const De={unit:"metric",maxWidth:100};function G(e){const t=x(({mapLib:n})=>new n.ScaleControl(e),{position:e.position});return(t.options.unit!==e.unit||t.options.maxWidth!==e.maxWidth)&&(t.options.maxWidth=e.maxWidth,t.setUnit(e.unit)),c.useEffect(()=>{_(t._container,e.style)},[e.style]),null}G.defaultProps=De;c.memo(G);const Ne={apiKey:"REACT_APP_MAPBOX_API_KEY"},E={latitude:40.74281576586265,longitude:-73.99277240443942,zoom:11},$=e=>{const{onVehicleSelect:t,currentVehicleId:n,vehicles:i=[]}=e,o=ne(),r=c.useRef(null),[s]=c.useState(()=>{if(n){const a=i.find(f=>f.id===n);return a?{latitude:a.latitude,longitude:a.longitude,zoom:13}:E}else return E}),u=c.useCallback(()=>{const a=r.current;if(!a)return;let f;const m=i.find(S=>S.id===n);m?f={center:[m.longitude,m.latitude]}:f={center:[E.longitude,E.latitude]},a.flyTo(f)},[i,n]);c.useEffect(()=>{u()},[i,n]);const l=o.palette.mode==="dark"?"mapbox://styles/mapbox/dark-v9":"mapbox://styles/mapbox/light-v9";return d(D,{attributionControl:!1,initialViewState:s,mapStyle:l,mapboxAccessToken:Ne.apiKey,ref:r,maxZoom:20,minZoom:11,children:i.map(a=>d(Ae,{latitude:a.latitude,longitude:a.longitude,onClick:()=>t==null?void 0:t(a.id),children:d(y,{sx:{height:50,width:50,...a.id===n&&{filter:f=>`drop-shadow(0px 0px 8px ${f.palette.primary.main})`},"& img":{height:"100%"}},children:d("img",{src:"/assets/car-marker.png"})})},a.id))})};$.propTypes={currentVehicleId:g.string,onVehicleSelect:g.func,vehicles:g.array};const Y=e=>{const{onDrawerOpen:t}=e;return d(y,{sx:{left:0,p:2,pointerEvents:"none",position:"absolute",top:0,width:"100%",zIndex:10},children:d(oe,{sx:{p:2,pointerEvents:"auto"},children:d(U,{onClick:t,children:d(P,{children:d(re,{})})})})})};Y.propTypes={onDrawerOpen:g.func};const Ve=()=>[{id:"VOL-653CD2",location:"New York, NY, USA",latitude:40.74759625348667,longitude:-74.00422032706065,temp:"8°C",startedAt:"Sep 01, 7:53 AM",departedAt:"Sep 01, 8:02 AM",arrivedAt:"Sep 01, 8:18 AM"},{id:"VOL-653CD3",location:"New York, NY, USA",latitude:40.75374208987527,longitude:-74.02878378307403,temp:"6°C",startedAt:"Sep 01, 8:21 AM",departedAt:"Sep 01, 8:36 AM",arrivedAt:"Sep 01, 9:54 AM"},{id:"VOL-653CD4",location:"New York, NY, USA",latitude:40.765281069832085,longitude:-73.96392724511145,temp:"8°C",startedAt:"Sep 01, 6:34 AM",departedAt:"Sep 01, 7:41 AM",arrivedAt:"Sep 01, 9:20 AM"}],Ze=()=>{var m;const e=c.useRef(null),t=ie(S=>S.breakpoints.up("md")),n=Ve(),[i,o]=c.useState(!1),[r,s]=c.useState((m=n[0])==null?void 0:m.id),u=c.useCallback(S=>{s(S)},[]),l=c.useCallback(()=>{s(void 0)},[]),a=c.useCallback(()=>{o(!0)},[]),f=c.useCallback(()=>{o(!1)},[]);return h(ae,{children:[d(se,{title:"Dashboard: Logistics Fleet"}),d(z,{}),h(y,{component:"main",ref:e,sx:{display:"flex",flex:"1 1 auto",overflow:"hidden",position:"relative"},children:[t&&h(y,{sx:{borderRightColor:"divider",borderRightStyle:"solid",borderRightWidth:1,flex:"0 0 400px"},children:[d(y,{sx:{p:2},children:d(p,{variant:"h5",children:"Fleet"})}),d(R,{currentVehicleId:r,onVehicleDeselect:l,onVehicleSelect:u,vehicles:n})]}),h(y,{sx:{flex:"1 1 auto",overflow:"hidden",position:"relative"},children:[!t&&d(Y,{onDrawerOpen:a}),d($,{currentVehicleId:r,onVehicleSelect:u,vehicles:n})]})]}),!t&&d(W,{container:e.current,onClose:f,open:i,children:d(R,{currentVehicleId:r,onVehicleDeselect:l,onVehicleSelect:u,vehicles:n})})]})};export{Ze as default};