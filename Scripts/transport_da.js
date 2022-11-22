/*! $FileVersion=1.1.496 */ var transport_da_fileVersion = "1.1.496"; 
function CreateDATransport(){var a={Send:function(c){try{var b=this._getMsgBusPlugin();if(!b){logError("[DA Transport] Current MsgBus Plugin does not support request/response.");return false}if(!b.IsAvailable()){logWarning("[DA Transport] Message Bus could not be loaded; subscriptions will not be active");return false}var g=ModuleManager.getSingleton("mappings");c=g.daMap(JSON.parse(c));var d=this._ComposePayload(c);if(null==d){return false}b.Publish("Data_Aggregator.Add_Data",d);logDebug("[DA Transport] Emit outbound data: "+d);return true}catch(f){logError("[DA Transport] Exception thrown when sending da event: "+f.message);return false}},_ComposePayload:function(c){try{var b={};var f={};var h={};c["__record.created"]=this._convertToLocalDate(new Date()).toISOString();c["__record.created"]=c["__record.created"].split("T").join(" ");for(var d in c){if(this._indexOf(this._metricList,d)!==-1){f[d]=c[d]}if(this._indexOf(this._dimensionList,d)!==-1){h[d]=c[d]}}b.metrics=f;b.dimensions=h;return JSON.stringify(b)}catch(g){logError("[DA Transport] _ComposePayload failed to build payload: exception is '"+g.message+"'");return null}},_LoadAttributes:function(){var c={};try{var b=JSONManager.getSingleton("da_definitions");c=b.data}catch(d){logError("[DA Transport] Could not load da_definitions.json "+d.message)}return c},Initialize:function(d,g,c){try{var b=this._LoadAttributes();this._metricList=b.metrics;this._dimensionList=b.dimensions;this._name=d;return this._setup()}catch(f){logError("[DA Transport]::Initialize Exception caught with message: "+f.message);return false}},_getMsgBusPlugin:function(){if(!this._msgBusPlugin){var b=getMessageBus();var c=b.GetVersion();if(("1"==c)){return null}return b}return this._msgBusPlugin},GetName:function(){return this._name},GetVersion:function(){return"0.0.0"},Uninitialize:function(){this._dictionary=null;this._config=null;this._name=null;this._msgBusPlugin=null;this._metricList=null;this._dimensionList=null},_setup:function(){this._msgBusPlugin=this._getMsgBusPlugin();return(this._msgBusPlugin!==null)},_convertToLocalDate:function(c){try{var b=new Date(c);var f=b.getTimezoneOffset();return new Date(b.getTime()-f*60000)}catch(d){return null}},_indexOf:function(b,f,e){var c=isFinite(e)?Math.floor(e):0;var d=isFinite(b.length)?Math.floor(b.length):0;if(c>=d){return -1}if(f===undefined){return -1}do{if(b[c]===f){return c}}while(++c<d);return -1},_config:{},_dictionary:{},_msgBusPlugin:null,_metricList:[],_dimensionList:[],_name:null};return a}ModuleManager.registerFactory("transport_da",CreateDATransport);
//DE35FDC8BE1076D39128D57499415F1EB54029AD0DF545E3BA56F793795DACBA9BDF28D57D430DCEA49663D38532A9CB4D43CDC2033DEBFCAA566FB64ACA40A7++