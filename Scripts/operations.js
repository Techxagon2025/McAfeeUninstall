/*! $FileVersion=1.1.496 */ var operations_fileVersion = "1.1.496"; 
function CreateDataOperations(){var a={apply:function(c,b){try{if(!b){return c}if(!this._isValidValue(c)){this._logWarning("Invalid value Val("+c+"). Operation with operationConfig("+JSON.stringify(b)+") will not be applied");return null}return this[b.name](c,b.params)}catch(d){this._logError("operations:apply: Excption caught("+d.message+". Val("+c+"), operationConfig("+JSON.stringify(b)+")");return null}},noop:function(b){return b},equal:function(b,c){return b==c},isValueValid:function(b){return(b!="[not assigned]")&&(b!="[ruleMismatch]")&&(b!="[ruleError]")},notNull:function(b){return(b!=null)},at:function(b,c){if(!b||!this._isValidValue(b)){return null}return b[c]},combineCustomDate:function(b,c){if(findObjectSize(b)!=findObjectSize(c)){return null}return b.InstalledYear+"-"+b.InstalledMonth+"-"+b.InstalledDate},split:function(b,c){return b.split(c)},first:function(c){for(var b in c){if(c[b]!=null){return c[b]}}return null},mask:function(b,c){return b&c},or:function(c){for(var b in c){if(c[b]){return true}}return false},and:function(c){for(var b in c){if(!c[b]){return false}}return true},multiply:function(b,c){return parseInt(b,10)*c},divide:function(b,c){return parseInt(b,10)/c},join:function(b,c){return b.join(c)},cleanLocaleCode:function(b,d){try{if(b){if(typeof b!="string"){b=String(b)}if(b.length==4){b="0x"+b}}}catch(c){this._logError("splitLocaleCode exception: "+c.message)}return b},daysTo:function(b){if(typeof b.getTime!=="function"){this._logError("daysTo: value is not datetime object ("+b+")");return null}return this._getDaysBetween(b,null)},round:function(f,h){try{if(!h){return f}var c=h.multiple;var b=h.roundUp;if(!c){return f}var d=parseInt((f/c),10)*c;if(b==true){return d+c}return d}catch(g){this._logError("roundtoNearestMultiple: { numToRound: "+f+", multiple: "+c+", roundUp: "+b+" } exception caught with message: "+g.message);return f}},timeSince:function(h,i){if((h==null)||(typeof h.getTime!=="function")){this._logError("daysTo: value is not datetime object ("+h+")");return null}var g=1000*60;var f=g*60;var c=f*24;var d=Date.now();var b=d-h.getTime();if(!i||i==="days"){return parseInt(b/c,10)}if(i==="hours"){return parseInt((b%c)/f,10)}if(i==="minutes"){return parseInt(((b%c)%f)/g,10)}return null},getKeyFromJson:function(c,f){try{var b=JSON.parse(c);return b[f.key]}catch(d){this._logError("getKeyFromJson: exception ("+d.message+")");return null}},transform:function(b,c){return c[b]},transformWithDefault:function(b,d){try{if(d.hasOwnProperty(b)){return d[b]}else{return d["default"]}}catch(c){this._logError("transformWithDefault: exception ("+c.message+")");return null}},dateToEpoch:function(b){return b.getTime()/1000},epochToISODate:function(c){if(!c){return null}var b=new Date(0);b.setUTCSeconds(c);return b.toISOString()},dateToISO:function(b,c){if(!b||!this._isValidValue(b)){return null}if(c&&c==="dateTime"){return b.toISOString()}return b.toISOString(true)},wssDateToDate:function(d){if(!d||(8!=d.length)){return null}var c=parseInt(d.substr(0,4),10);var f=parseInt(d.substr(4,2),10);var b=parseInt(d.substr(6,2),10);if(!c||!f||!b){return null}return new Date(c,f-1,b)},_isValidValue:function(b){if(b=="[not assigned]"||b=="[ruleMismatch]"||b=="[ruleError]"){return false}return true},_getDaysBetween:function(g,i){try{var c=1000*60*60*24;var d=g.getTime();var f;if(!i){f=Date.now()}else{f=i.getTime()}var b=d-f;return parseInt((b/c),10)}catch(h){this._logError("Exception caught while calculating difference between dates: "+h.message)}return null},containsIn:function(c,d){var b=parseInt(c,10);if(d[b]!==undefined){return d[b]}return null},stringToDate:function(k){try{if(!k||(14>k.length)){return null}var h=parseInt(k.substr(0,4),10);var g=parseInt(k.substr(4,2),10);var i=parseInt(k.substr(6,2),10);var d=parseInt(k.substr(8,2),10);var c=parseInt(k.substr(10,2),10);var b=parseInt(k.substr(12,2),10);var j=!h||!g||!i||!d||!c||!b;if(j){return null}return new Date(h,g-1,i,d,c,b)}catch(f){this._logError("Exception caught in stringToDate: "+f.message)}return null},stringToISODate:function(b){return this.dateToISO(this.stringToDate(b),"dateTime")},ISOStringToDatetime:function(c){try{if(!c){return c}return new Date(c)}catch(b){this._logError("Exception caught in ISOStringToDatetime: "+e.message)}return null},IfCondition:function(j,f){var d=function b(p,o){var n=/{{(.*?)}}/g;var m=n.exec(o);if(m){return p[m[1]]}return o};try{for(var k in f.conditions){var c=f.conditions[k];var i=d(j,c.left_operand);var h=d(j,c.right_operand);var l=d(j,c.result);if(this[c.operation](i,h)){return l}}return f["else"]}catch(g){this._logError("IfCondition: exception ("+g.message+")");return null}},_logInfo:function(b){logInformation("operations: "+b)},_logError:function(b){logError("operations: "+b)},_logWarning:function(b){logWarning("operations: "+b)}};return a}ModuleManager.registerFactory("operations",CreateDataOperations);
//A1B276B5231140F602DD4DC83B274C97AA70DC0B4852F8EC384DE5D60F6E20B03E9A01D5CD827ECC3B15B26D0F3416C3553778F557230690465611DF73CDCD5C++