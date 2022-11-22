/*! $FileVersion=1.1.496 */ var aviary_client_fileVersion = "1.1.496"; 
function CreateAviaryClientHelper(){try{var a={Get:function(d){try{if(this._aviaryPlugin){return this._aviaryPlugin.Get(d)}}catch(c){this._logError("Get exception: "+c.message)}return null},Set:function(c,d){if(this._aviaryPlugin){this._aviaryPlugin.Set(c,d)}},ToJsonString:function(){try{if(this._aviaryPlugin){return this._aviaryPlugin.ToJsonString()}}catch(c){this._logError("ToJsonString exception: "+c.message)}return null},GetDirtyFlag:function(d){try{if(this._aviaryPlugin){return this._aviaryPlugin.GetDirtyFlag(d)}}catch(c){this._logError("GetDirtyFlag exception: "+c.message)}return true},Setup:function(){try{if(this._aviaryPlugin){return}var f=JSONManager.getSingleton("dictionary");var c=f.data;var d=c.product_settings;this._aviaryPlugin=getPluginFactory().Create("ContextItemAviaryStore");this._aviaryPlugin.Initialize(JSON.stringify(d));getScriptVariableStore().Set("ContextItemAviaryStore",this._aviaryPlugin)}catch(g){this._logError("Setup exception: "+g.message)}},_logInformation:function(c){logInformation("CreateAviaryClientHelper: "+c)},_logError:function(c){logError("CreateAviaryClientHelper: "+c)},_logWarning:function(c){logWarning("CreateAviaryClientHelper: "+c)},_logDebug:function(c){logDebug("CreateAviaryClientHelper: "+c)},_aviaryPlugin:null};a.Setup();return a}catch(b){logError("Failed to create the CreateAviaryClientHelper: "+b.message)}return null}ModuleManager.registerFactory("aviary_client",CreateAviaryClientHelper);
//472115A05A043C2591E7CBC196FBD50A5008CCE83846C80F4B612F87A5760A5D5B2BA0DC0BB96A23EB7195C48452AC019759E0104F36E53CA8821616B1F84133++