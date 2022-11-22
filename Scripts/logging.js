/*! $FileVersion=1.1.496 */ var logging_fileVersion = "1.1.496"; 
var debugEnable=false;function callerName(){var a=arguments.callee.toString();a=a.substr("function ".length);a=a.substr(0,a.indexOf("("));return a}function getLogger(){var b=getScriptVariableStore().Get("logging");if(b){return b}try{b=getPluginFactory().Create("logging");try{debugEnable=GetEngineProperty("Analytics.SDK.Script.Debug.Enable",debugEnable)}catch(a){}}catch(a){b={LogMessage:function(){},WriteToConsole:function(){},WriteToSyslog:function(){}}}getScriptVariableStore().Set("logging",b);return b}var LOG_SEVERITY_NORMAL=1;var LOG_SEVERITY_WARNING=2;var LOG_SEVERITY_INFORMATION=3;var LOG_SEVERITY_ERROR=4;var LOG_SEVERITY_CRITICAL=5;var SYSLOG_EMERG="emerg";var SYSLOG_ALERT="alert";var SYSLOG_CRITICAL="crticial";var SYSLOG_ERROR="error";var SYSLOG_WARN="warn";var SYSLOG_NOTICE="notice";var SYSLOG_INFO="info";var SYSLOG_DEBUG="debug";var logNormal=function(b){try{b=sanitizeLogMessage(b);getLogger().LogMessage(LOG_SEVERITY_NORMAL,"engine.js",0,callerName(),b);if(debugEnable){logConsole("[NORMAL]: "+b)}}catch(a){}};var logInformation=function(b){try{b=sanitizeLogMessage(b);getLogger().LogMessage(LOG_SEVERITY_NORMAL,"engine.js",0,callerName(),b);if(debugEnable){logConsole("[INFO]: "+b)}}catch(a){}};var logWarning=function(b){try{b=sanitizeLogMessage(b);getLogger().LogMessage(LOG_SEVERITY_WARNING,"engine.js",0,callerName(),b);if(debugEnable){logConsole("[WARNING]: "+b)}}catch(a){}};var logError=function(b){try{b=sanitizeLogMessage(b);getLogger().LogMessage(LOG_SEVERITY_ERROR,"engine.js",0,callerName(),b);if(debugEnable){logConsole("[ERROR]: "+b)}}catch(a){}};var logDebug=function(b){try{if(debugEnable){b=sanitizeLogMessage(b);logInformation(b)}}catch(a){}};var logConsole=function(b){try{b=sanitizeLogMessage(b);getLogger().WriteToConsole(b)}catch(a){}};var syslog=function(c,b){try{b=sanitizeLogMessage(b);getLogger().WriteToSyslog(c,b);if(debugEnable){logConsole("[SYSLOG]: "+b)}}catch(a){}};var traceMsg=function(b){try{b=sanitizeLogMessage(b);getLogger().WriteToTrace(b);if(debugEnable){logConsole("[TRACE]: "+b)}}catch(a){}};function analyticsLoggerPlugin(){var a=getScriptVariableStore().Get("analyticsLogger");if(!a){a=getPluginFactory().Create("analyticsLogger");getScriptVariableStore().Set("analyticsLogger",a)}return a}var logRawTrack=function(a,c){try{analyticsLoggerPlugin().WriteToRawTrackLog(a,c)}catch(b){logRawTrack=function(d,e){}}};var sanitizeLogData=function(a){try{var b=a.split("\\ufffd").join("")}catch(c){logError("SustainabilityTransport._sanitizeLogData:: Exception caught with message: "+c.message);return a}return b};var logTransports=function(a,f,d,c){try{c=sanitizeLogData(c);analyticsLoggerPlugin().WriteToTransportsLog(a,f,d,c)}catch(b){logTransports=function(h,l,k,j){try{j=sanitizeLogData(j);var g={unique_id:h,transport:l,success:k,payload:j};getMessageBus().Publish("Analytics.Transport.Log",JSON.stringify(g))}catch(i){}}}};var logAutomationError=function(b,d,a){try{analyticsLoggerPlugin().WriteToAutomationErrorLog(b,d,a)}catch(c){logAutomationError=function(f,g,e){logError("logAutomationError: Failed to log "+e)}}};var sanitizeLogMessage=function(b){try{return b.split("%").join("%%")}catch(a){}return""};
//E484205CA5A6C03755D8A89851B672D91707362590608E9FF5E2200DA7514B9E757FCF3214915D68594AEEEC0D2BFD6CC4385B8834F9788320FCEFA94DD4406E++