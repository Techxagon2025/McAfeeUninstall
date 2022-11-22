/*! $FileVersion=1.1.496 */ var mcutil_fileVersion = "1.1.496"; 
function CreateMcUtilHelper(){var a={_logError:function(b){logError("mcUtil: "+b)},_logInfo:function(b){logInformation("mcUtil: "+b)},_getPlugin:function(){if(!this._plugin){var c=ModuleManager.getSingleton("data_collector");var b=c.get("Analytics.SDK.Version");if(b.match("^2.[0-5]")){this._logInfo("This SDK does not support mcUtil plugin. sdkVer("+b+")");return null}this._plugin=getPluginFactory().Create("mcUtil")}return this._plugin},_plugin:null,_hardwareId:null,_softwareId:null,storeHardwareAndSoftwareId:function(d){try{this._logInfo("storeHardwareAndSoftwareId - start");if(!this._getPlugin()){return}var b=d;if(!d){var h=ModuleManager.getSingleton("data_collector");var f=h.get("WSS.Hardware.ID");b=(f==="[ruleMismatch]")?true:false;this._logInfo("value: "+f);this._logInfo("storeValue: "+b)}if(!b){this._logInfo("Not going to storeValue");return}this._invokeGetMachineId();if(!this._softwareId){this._logError("storeHardwareAndSoftwareId: No value for softwareId");return}if(!this._hardwareId){this._logError("storeHardwareAndSoftwareId: No value for hardwareId");return}var c=ModuleManager.getSingleton("registry");c.openKey("HKLM\\SOFTWARE\\McAfee\\McClientAnalytics",true);c.setValue("WSS_HardwareId",this._hardwareId);c.setValue("WSS_SoftwareId",this._softwareId)}catch(g){this._logError("storeHardwareAndSoftwareId: "+g.message)}},getHardwareId:function(){if(!this._hardwareId){this._getMachineId()}return this._hardwareId},getSoftwareId:function(){if(!this._softwareId){this._getMachineId()}return this._softwareId},_invokeGetMachineId:function(){var d=this._getPlugin();if(!d){logError("No mcUtil plugin created");return false}var b=d.GetMachineId();var c=JSON.parse(b);this._hardwareId=c.hardwareId;this._softwareId=c.softwareId;return true}};return a}ModuleManager.registerFactory("mcutil",CreateMcUtilHelper);
//7A8B771D3D7FB5F9D8D8C4AF987A59407BAE81181AA9A2A19D0D52266DFC4B0884BF7E2247717E8F9FE84E814414F0B7B09C0FBBF34AA6DB19AD59CE8FE93793++