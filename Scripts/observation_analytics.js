/*! $FileVersion=1.1.496 */ var observation_analytics_fileVersion = "1.1.496"; 
function getObservationAnalyticsEngine(){
/*
     *  config format:
     *   'Message.Name' : {                 // name of obsved message on messagebus that we will subscribe to
     *       'map' : {                      // map from message keys --> analytic friendly keys
     *           'Count' : 'Metric1',       // ex. 'Count' : 123  --> 'Metric1' : 123
     *           'Policy' : 'Event.Label'   // ex. 'Policy' : 'XYZ' --> 'Event.Label' : 'XYZ'
     *       },
     *       'default' : {                  // default values that are not specified in the obsved message
     *           'hit_event_id' : 'XYZ'
     *       }
     *   }
     */
var a=function(){var d=JSONManager.getSingleton("observability_datasets");if(!d){d={data:{}}}return d.data};var b=a();var c={start:function(){try{var d=getMessageBus();for(var f in b){d.Subscribe(f)}logDebug("observationEngine Started")}catch(g){logError("observationEngine.start(): "+g.message)}},handle:function(h,k){try{logDebug("observationEngine.handle() Received "+h+" : "+JSON.stringify(k));var d=b[h];if(!d){logDebug("observationEngine.handle() Received an unknown event: "+h);return}var f=d.map;var g=d["default"];var i={UniqueIdentifier:g.hit_event_id,type:"event",payload:{"Tracker.Type":"event"}};for(var l in f){if(!(l in k)){logWarning("observationEngine.handle() Dropping event "+h+" expecting key: "+l);return}i.payload[f[l]]=k[l]}for(var l in g){if(!(l in i.payload)){i.payload[l]=g[l]}}logDebug("observationEngine.handle() Sending to transport: "+JSON.stringify(i));var m=ModuleManager.getSingleton("event_handler");m.handleV1Record(i)}catch(j){logError("observationEngine.handle() Failed to handle message on message bus: "+j.message)}}};return c}ModuleManager.registerFactory("observation_analytics",getObservationAnalyticsEngine);
//7F00FC2417B4E1B773767B6B33DCB9C7DBA52584B90795021C8E142D8741B8A3FD01233DCC20A19C7349DA0378CB33BEC1D63E124547626F7C9B4867088EA599++