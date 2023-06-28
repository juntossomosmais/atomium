/*! For license information please see 8930.02e61e97.iframe.bundle.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[8930],{"../../packages/core/dist/esm/data-7705bb41.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>getDayColumnData,B:()=>getYearColumnData,C:()=>isMonthFirstLocale,D:()=>getTimeColumnsData,E:()=>isLocaleDayPeriodRTL,F:()=>getDaysOfWeek,G:()=>getMonthAndYear,H:()=>getDaysOfMonth,I:()=>generateMonths,J:()=>is24Hour,K:()=>getLocalizedTime,L:()=>getMonthAndDay,M:()=>formatValue,N:()=>getNextYear,O:()=>getPreviousYear,P:()=>clampDate,Q:()=>parseAmPm,R:()=>calculateHourFromAMPM,S:()=>getLocalizedDateTime,T:()=>getMonthDayAndYear,a:()=>getDay,b:()=>isAfter,c:()=>isSameDay,d:()=>getPreviousMonth,e:()=>getNextMonth,f:()=>getPartsFromCalendarDay,g:()=>generateDayAriaLabel,h:()=>getEndOfWeek,i:()=>isBefore,j:()=>getStartOfWeek,k:()=>getPreviousDay,l:()=>getNextDay,m:()=>getPreviousWeek,n:()=>getNextWeek,o:()=>parseMaxParts,p:()=>parseMinParts,q:()=>parseDate,r:()=>convertToArrayOfNumbers,s:()=>convertDataToISO,t:()=>getToday,u:()=>getClosestValidDate,v:()=>validateParts,w:()=>warnIfValueOutOfBounds,x:()=>getNumDaysInMonth,y:()=>getCombinedDateColumnData,z:()=>getMonthColumnData});var _index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/core/dist/esm/index-24e88bd3.js");const isSameDay=(baseParts,compareParts)=>baseParts.month===compareParts.month&&baseParts.day===compareParts.day&&baseParts.year===compareParts.year,isBefore=(baseParts,compareParts)=>!!(baseParts.year<compareParts.year||baseParts.year===compareParts.year&&baseParts.month<compareParts.month||baseParts.year===compareParts.year&&baseParts.month===compareParts.month&&null!==baseParts.day&&baseParts.day<compareParts.day),isAfter=(baseParts,compareParts)=>!!(baseParts.year>compareParts.year||baseParts.year===compareParts.year&&baseParts.month>compareParts.month||baseParts.year===compareParts.year&&baseParts.month===compareParts.month&&null!==baseParts.day&&baseParts.day>compareParts.day),warnIfValueOutOfBounds=(value,min,max)=>{const valueArray=Array.isArray(value)?value:[value];for(const val of valueArray)if(void 0!==min&&isBefore(val,min)||void 0!==max&&isAfter(val,max)){(0,_index_24e88bd3_js__WEBPACK_IMPORTED_MODULE_0__.p)(`The value provided to ion-datetime is out of bounds.\n\nMin: ${JSON.stringify(min)}\nMax: ${JSON.stringify(max)}\nValue: ${JSON.stringify(value)}`);break}},is24Hour=(locale,hourCycle)=>{if(void 0!==hourCycle)return"h23"===hourCycle;const formatted=new Intl.DateTimeFormat(locale,{hour:"numeric"}),options=formatted.resolvedOptions();if(void 0!==options.hourCycle)return"h23"===options.hourCycle;const date=new Date("5/18/2021 00:00"),hour=formatted.formatToParts(date).find((p=>"hour"===p.type));if(!hour)throw new Error("Hour value not found from DateTimeFormat");return"00"===hour.value},getNumDaysInMonth=(month,year)=>4===month||6===month||9===month||11===month?30:2===month?(year=>year%4==0&&year%100!=0||year%400==0)(year)?29:28:31,isMonthFirstLocale=(locale,formatOptions={month:"numeric",year:"numeric"})=>"month"===new Intl.DateTimeFormat(locale,formatOptions).formatToParts(new Date)[0].type,isLocaleDayPeriodRTL=locale=>"dayPeriod"===new Intl.DateTimeFormat(locale,{hour:"numeric"}).formatToParts(new Date)[0].type,ISO_8601_REGEXP=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,TIME_REGEXP=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,convertToArrayOfNumbers=input=>{if(void 0===input)return;let values,processedInput=input;return"string"==typeof input&&(processedInput=input.replace(/\[|\]|\s/g,"").split(",")),values=Array.isArray(processedInput)?processedInput.map((num=>parseInt(num,10))).filter(isFinite):[processedInput],values},getPartsFromCalendarDay=el=>({month:parseInt(el.getAttribute("data-month"),10),day:parseInt(el.getAttribute("data-day"),10),year:parseInt(el.getAttribute("data-year"),10),dayOfWeek:parseInt(el.getAttribute("data-day-of-week"),10)});function parseDate(val){if(Array.isArray(val))return val.map((valStr=>parseDate(valStr)));let parse=null;if(null!=val&&""!==val&&(parse=TIME_REGEXP.exec(val),parse?(parse.unshift(void 0,void 0),parse[2]=parse[3]=void 0):parse=ISO_8601_REGEXP.exec(val)),null!==parse){for(let i=1;i<8;i++)parse[i]=void 0!==parse[i]?parseInt(parse[i],10):void 0;return{year:parse[1],month:parse[2],day:parse[3],hour:parse[4],minute:parse[5],ampm:parse[4]<12?"am":"pm"}}}const clampDate=(dateParts,minParts,maxParts)=>minParts&&isBefore(dateParts,minParts)?minParts:maxParts&&isAfter(dateParts,maxParts)?maxParts:dateParts,parseAmPm=hour=>hour>=12?"pm":"am",parseMaxParts=(max,todayParts)=>{const{month,day,year,hour,minute}=parseDate(max),yearValue=null!=year?year:todayParts.year,monthValue=null!=month?month:12;return{month:monthValue,day:null!=day?day:getNumDaysInMonth(monthValue,yearValue),year:yearValue,hour:null!=hour?hour:23,minute:null!=minute?minute:59}},parseMinParts=(min,todayParts)=>{const{month,day,year,hour,minute}=parseDate(min);return{month:null!=month?month:1,day:null!=day?day:1,year:null!=year?year:todayParts.year,hour:null!=hour?hour:0,minute:null!=minute?minute:0}},twoDigit=val=>("0"+(void 0!==val?Math.abs(val):"0")).slice(-2),fourDigit=val=>("000"+(void 0!==val?Math.abs(val):"0")).slice(-4);function convertDataToISO(data){if(Array.isArray(data))return data.map((parts=>convertDataToISO(parts)));let rtn="";return void 0!==data.year?(rtn=fourDigit(data.year),void 0!==data.month&&(rtn+="-"+twoDigit(data.month),void 0!==data.day&&(rtn+="-"+twoDigit(data.day),void 0!==data.hour&&(rtn+=`T${twoDigit(data.hour)}:${twoDigit(data.minute)}:00`)))):void 0!==data.hour&&(rtn=twoDigit(data.hour)+":"+twoDigit(data.minute)),rtn}const convert12HourTo24Hour=(hour,ampm)=>void 0===ampm?hour:"am"===ampm?12===hour?0:hour:12===hour?12:hour+12,getStartOfWeek=refParts=>{const{dayOfWeek}=refParts;if(null==dayOfWeek)throw new Error("No day of week provided");return subtractDays(refParts,dayOfWeek)},getEndOfWeek=refParts=>{const{dayOfWeek}=refParts;if(null==dayOfWeek)throw new Error("No day of week provided");return addDays(refParts,6-dayOfWeek)},getNextDay=refParts=>addDays(refParts,1),getPreviousDay=refParts=>subtractDays(refParts,1),getPreviousWeek=refParts=>subtractDays(refParts,7),getNextWeek=refParts=>addDays(refParts,7),subtractDays=(refParts,numDays)=>{const{month,day,year}=refParts;if(null===day)throw new Error("No day provided");const workingParts={month,day,year};if(workingParts.day=day-numDays,workingParts.day<1&&(workingParts.month-=1),workingParts.month<1&&(workingParts.month=12,workingParts.year-=1),workingParts.day<1){const daysInMonth=getNumDaysInMonth(workingParts.month,workingParts.year);workingParts.day=daysInMonth+workingParts.day}return workingParts},addDays=(refParts,numDays)=>{const{month,day,year}=refParts;if(null===day)throw new Error("No day provided");const workingParts={month,day,year},daysInMonth=getNumDaysInMonth(month,year);return workingParts.day=day+numDays,workingParts.day>daysInMonth&&(workingParts.day-=daysInMonth,workingParts.month+=1),workingParts.month>12&&(workingParts.month=1,workingParts.year+=1),workingParts},getPreviousMonth=refParts=>{const month=1===refParts.month?12:refParts.month-1,year=1===refParts.month?refParts.year-1:refParts.year,numDaysInMonth=getNumDaysInMonth(month,year);return{month,year,day:numDaysInMonth<refParts.day?numDaysInMonth:refParts.day}},getNextMonth=refParts=>{const month=12===refParts.month?1:refParts.month+1,year=12===refParts.month?refParts.year+1:refParts.year,numDaysInMonth=getNumDaysInMonth(month,year);return{month,year,day:numDaysInMonth<refParts.day?numDaysInMonth:refParts.day}},changeYear=(refParts,yearDelta)=>{const month=refParts.month,year=refParts.year+yearDelta,numDaysInMonth=getNumDaysInMonth(month,year);return{month,year,day:numDaysInMonth<refParts.day?numDaysInMonth:refParts.day}},getPreviousYear=refParts=>changeYear(refParts,-1),getNextYear=refParts=>changeYear(refParts,1),getInternalHourValue=(hour,use24Hour,ampm)=>use24Hour?hour:convert12HourTo24Hour(hour,ampm),calculateHourFromAMPM=(currentParts,newAMPM)=>{const{ampm:currentAMPM,hour}=currentParts;let newHour=hour;return"am"===currentAMPM&&"pm"===newAMPM?newHour=convert12HourTo24Hour(newHour,"pm"):"pm"===currentAMPM&&"am"===newAMPM&&(newHour=Math.abs(newHour-12)),newHour},validateParts=(parts,minParts,maxParts)=>{const{month,day,year}=parts,partsCopy=clampDate(Object.assign({},parts),minParts,maxParts),numDays=getNumDaysInMonth(month,year);return null!==day&&numDays<day&&(partsCopy.day=numDays),void 0!==minParts&&isSameDay(partsCopy,minParts)&&void 0!==partsCopy.hour&&void 0!==minParts.hour&&(partsCopy.hour<minParts.hour?(partsCopy.hour=minParts.hour,partsCopy.minute=minParts.minute):partsCopy.hour===minParts.hour&&void 0!==partsCopy.minute&&void 0!==minParts.minute&&partsCopy.minute<minParts.minute&&(partsCopy.minute=minParts.minute)),void 0!==maxParts&&isSameDay(parts,maxParts)&&void 0!==partsCopy.hour&&void 0!==maxParts.hour&&(partsCopy.hour>maxParts.hour?(partsCopy.hour=maxParts.hour,partsCopy.minute=maxParts.minute):partsCopy.hour===maxParts.hour&&void 0!==partsCopy.minute&&void 0!==maxParts.minute&&partsCopy.minute>maxParts.minute&&(partsCopy.minute=maxParts.minute)),partsCopy},getClosestValidDate=(refParts,monthValues,dayValues,yearValues,hourValues,minuteValues)=>{const{hour,minute,day,month,year}=refParts,copyParts=Object.assign(Object.assign({},refParts),{dayOfWeek:void 0});return void 0!==monthValues&&(copyParts.month=findClosestValue(month,monthValues)),null!==day&&void 0!==dayValues&&(copyParts.day=findClosestValue(day,dayValues)),void 0!==yearValues&&(copyParts.year=findClosestValue(year,yearValues)),void 0!==hour&&void 0!==hourValues&&(copyParts.hour=findClosestValue(hour,hourValues),copyParts.ampm=parseAmPm(copyParts.hour)),void 0!==minute&&void 0!==minuteValues&&(copyParts.minute=findClosestValue(minute,minuteValues)),copyParts},findClosestValue=(reference,values)=>{let closestValue=values[0],rank=Math.abs(closestValue-reference);for(let i=1;i<values.length;i++){const value=values[i],valueRank=Math.abs(value-reference);valueRank<rank&&(closestValue=value,rank=valueRank)}return closestValue},getLocalizedTime=(locale,refParts,use24Hour)=>{const timeParts={hour:refParts.hour,minute:refParts.minute};return void 0===timeParts.hour||void 0===timeParts.minute?"Invalid Time":new Intl.DateTimeFormat(locale,{hour:"numeric",minute:"numeric",timeZone:"UTC",hourCycle:use24Hour?"h23":"h12"}).format(new Date(convertDataToISO(Object.assign({year:2023,day:1,month:1},timeParts))+"Z"))},addTimePadding=value=>{const valueToString=value.toString();return valueToString.length>1?valueToString:`0${valueToString}`},getFormattedHour=(hour,use24Hour)=>use24Hour?addTimePadding(hour):0===hour?"12":hour.toString(),generateDayAriaLabel=(locale,today,refParts)=>{if(null===refParts.day)return null;const date=new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`),labelString=new Intl.DateTimeFormat(locale,{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}).format(date);return today?`Today, ${labelString}`:labelString},getMonthAndDay=(locale,refParts)=>{const date=new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);return new Intl.DateTimeFormat(locale,{weekday:"short",month:"short",day:"numeric",timeZone:"UTC"}).format(date)},getMonthAndYear=(locale,refParts)=>{const date=new Date(`${refParts.month}/${refParts.day}/${refParts.year} GMT+0000`);return new Intl.DateTimeFormat(locale,{month:"long",year:"numeric",timeZone:"UTC"}).format(date)},getMonthDayAndYear=(locale,refParts)=>getLocalizedDateTime(locale,refParts,{month:"short",day:"numeric",year:"numeric"}),getDay=(locale,refParts)=>getLocalizedDateTimeParts(locale,refParts,{day:"numeric"}).find((obj=>"day"===obj.type)).value,getYear=(locale,refParts)=>getLocalizedDateTime(locale,refParts,{year:"numeric"}),getNormalizedDate=refParts=>{const timeString=void 0!==refParts.hour&&void 0!==refParts.minute?` ${refParts.hour}:${refParts.minute}`:"";return new Date(`${refParts.month}/${refParts.day}/${refParts.year}${timeString} GMT+0000`)},getLocalizedDateTime=(locale,refParts,options)=>{const date=getNormalizedDate(refParts);return getDateTimeFormat(locale,options).format(date)},getLocalizedDateTimeParts=(locale,refParts,options)=>{const date=getNormalizedDate(refParts);return getDateTimeFormat(locale,options).formatToParts(date)},getDateTimeFormat=(locale,options)=>new Intl.DateTimeFormat(locale,Object.assign(Object.assign({},options),{timeZone:"UTC"})),getTodayLabel=locale=>{if("RelativeTimeFormat"in Intl){const label=new Intl.RelativeTimeFormat(locale,{numeric:"auto"}).format(0,"day");return label.charAt(0).toUpperCase()+label.slice(1)}return"Today"},removeDateTzOffset=date=>{const tzOffset=date.getTimezoneOffset();return date.setMinutes(date.getMinutes()-tzOffset),date},DATE_AM=removeDateTzOffset(new Date("2022T01:00")),DATE_PM=removeDateTzOffset(new Date("2022T13:00")),getLocalizedDayPeriod=(locale,dayPeriod)=>{const date="am"===dayPeriod?DATE_AM:DATE_PM,localizedDayPeriod=new Intl.DateTimeFormat(locale,{hour:"numeric",timeZone:"UTC"}).formatToParts(date).find((part=>"dayPeriod"===part.type));return localizedDayPeriod?localizedDayPeriod.value:(dayPeriod=>void 0===dayPeriod?"":dayPeriod.toUpperCase())(dayPeriod)},formatValue=value=>Array.isArray(value)?value.join(","):value,getToday=()=>removeDateTzOffset(new Date).toISOString(),minutes=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],hour12=[0,1,2,3,4,5,6,7,8,9,10,11],hour23=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],getDaysOfWeek=(locale,mode,firstDayOfWeek=0)=>{const weekdayFormat="ios"===mode?"short":"narrow",intl=new Intl.DateTimeFormat(locale,{weekday:weekdayFormat}),startDate=new Date("11/01/2020"),daysOfWeek=[];for(let i=firstDayOfWeek;i<firstDayOfWeek+7;i++){const currentDate=new Date(startDate);currentDate.setDate(currentDate.getDate()+i),daysOfWeek.push(intl.format(currentDate))}return daysOfWeek},getDaysOfMonth=(month,year,firstDayOfWeek)=>{const numDays=getNumDaysInMonth(month,year),firstOfMonth=new Date(`${month}/1/${year}`).getDay(),offset=firstOfMonth>=firstDayOfWeek?firstOfMonth-(firstDayOfWeek+1):6-(firstDayOfWeek-firstOfMonth);let days=[];for(let i=1;i<=numDays;i++)days.push({day:i,dayOfWeek:(offset+i)%7});for(let i=0;i<=offset;i++)days=[{day:null,dayOfWeek:null},...days];return days},generateTime=(refParts,hourCycle="h12",minParts,maxParts,hourValues,minuteValues)=>{const use24Hour="h23"===hourCycle;let processedHours=use24Hour?hour23:hour12,processedMinutes=minutes,isAMAllowed=!0,isPMAllowed=!0;if(hourValues&&(processedHours=processedHours.filter((hour=>hourValues.includes(hour)))),minuteValues&&(processedMinutes=processedMinutes.filter((minute=>minuteValues.includes(minute)))),minParts)if(isSameDay(refParts,minParts)){if(void 0!==minParts.hour&&(processedHours=processedHours.filter((hour=>{const convertedHour="pm"===refParts.ampm?(hour+12)%24:hour;return(use24Hour?hour:convertedHour)>=minParts.hour})),isAMAllowed=minParts.hour<13),void 0!==minParts.minute){let isPastMinHour=!1;void 0!==minParts.hour&&void 0!==refParts.hour&&refParts.hour>minParts.hour&&(isPastMinHour=!0),processedMinutes=processedMinutes.filter((minute=>!!isPastMinHour||minute>=minParts.minute))}}else isBefore(refParts,minParts)&&(processedHours=[],processedMinutes=[],isAMAllowed=isPMAllowed=!1);return maxParts&&(isSameDay(refParts,maxParts)?(void 0!==maxParts.hour&&(processedHours=processedHours.filter((hour=>{const convertedHour="pm"===refParts.ampm?(hour+12)%24:hour;return(use24Hour?hour:convertedHour)<=maxParts.hour})),isPMAllowed=maxParts.hour>=12),void 0!==maxParts.minute&&refParts.hour===maxParts.hour&&(processedMinutes=processedMinutes.filter((minute=>minute<=maxParts.minute)))):isAfter(refParts,maxParts)&&(processedHours=[],processedMinutes=[],isAMAllowed=isPMAllowed=!1)),{hours:processedHours,minutes:processedMinutes,am:isAMAllowed,pm:isPMAllowed}},generateMonths=refParts=>[getPreviousMonth(refParts),{month:refParts.month,year:refParts.year,day:refParts.day},getNextMonth(refParts)],getMonthColumnData=(locale,refParts,minParts,maxParts,monthValues,formatOptions={month:"long"})=>{const{year}=refParts,months=[];if(void 0!==monthValues){let processedMonths=monthValues;void 0!==(null==maxParts?void 0:maxParts.month)&&(processedMonths=processedMonths.filter((month=>month<=maxParts.month))),void 0!==(null==minParts?void 0:minParts.month)&&(processedMonths=processedMonths.filter((month=>month>=minParts.month))),processedMonths.forEach((processedMonth=>{const date=new Date(`${processedMonth}/1/${year} GMT+0000`),monthString=new Intl.DateTimeFormat(locale,Object.assign(Object.assign({},formatOptions),{timeZone:"UTC"})).format(date);months.push({text:monthString,value:processedMonth})}))}else{const maxMonth=maxParts&&maxParts.year===year?maxParts.month:12;for(let i=minParts&&minParts.year===year?minParts.month:1;i<=maxMonth;i++){const date=new Date(`${i}/1/${year} GMT+0000`),monthString=new Intl.DateTimeFormat(locale,Object.assign(Object.assign({},formatOptions),{timeZone:"UTC"})).format(date);months.push({text:monthString,value:i})}}return months},getDayColumnData=(locale,refParts,minParts,maxParts,dayValues,formatOptions={day:"numeric"})=>{const{month,year}=refParts,days=[],numDaysInMonth=getNumDaysInMonth(month,year),maxDay=null!==(null==maxParts?void 0:maxParts.day)&&void 0!==(null==maxParts?void 0:maxParts.day)&&maxParts.year===year&&maxParts.month===month?maxParts.day:numDaysInMonth,minDay=null!==(null==minParts?void 0:minParts.day)&&void 0!==(null==minParts?void 0:minParts.day)&&minParts.year===year&&minParts.month===month?minParts.day:1;if(void 0!==dayValues){let processedDays=dayValues;processedDays=processedDays.filter((day=>day>=minDay&&day<=maxDay)),processedDays.forEach((processedDay=>{const date=new Date(`${month}/${processedDay}/${year} GMT+0000`),dayString=new Intl.DateTimeFormat(locale,Object.assign(Object.assign({},formatOptions),{timeZone:"UTC"})).format(date);days.push({text:dayString,value:processedDay})}))}else for(let i=minDay;i<=maxDay;i++){const date=new Date(`${month}/${i}/${year} GMT+0000`),dayString=new Intl.DateTimeFormat(locale,Object.assign(Object.assign({},formatOptions),{timeZone:"UTC"})).format(date);days.push({text:dayString,value:i})}return days},getYearColumnData=(locale,refParts,minParts,maxParts,yearValues)=>{var _a,_b;let processedYears=[];if(void 0!==yearValues)processedYears=yearValues,void 0!==(null==maxParts?void 0:maxParts.year)&&(processedYears=processedYears.filter((year=>year<=maxParts.year))),void 0!==(null==minParts?void 0:minParts.year)&&(processedYears=processedYears.filter((year=>year>=minParts.year)));else{const{year}=refParts,maxYear=null!==(_a=null==maxParts?void 0:maxParts.year)&&void 0!==_a?_a:year,minYear=null!==(_b=null==minParts?void 0:minParts.year)&&void 0!==_b?_b:year-100;for(let i=maxYear;i>=minYear;i--)processedYears.push(i)}return processedYears.map((year=>({text:getYear(locale,{year,month:refParts.month,day:refParts.day}),value:year})))},getAllMonthsInRange=(currentParts,maxParts)=>currentParts.month===maxParts.month&&currentParts.year===maxParts.year?[currentParts]:[currentParts,...getAllMonthsInRange(getNextMonth(currentParts),maxParts)],getCombinedDateColumnData=(locale,todayParts,minParts,maxParts,dayValues,monthValues)=>{let items=[],parts=[],months=getAllMonthsInRange(minParts,maxParts);return monthValues&&(months=months.filter((({month})=>monthValues.includes(month)))),months.forEach((monthObject=>{const referenceMonth={month:monthObject.month,day:null,year:monthObject.year},monthDays=getDayColumnData(locale,referenceMonth,minParts,maxParts,dayValues,{month:"short",day:"numeric",weekday:"short"}),dateParts=[],dateColumnItems=[];monthDays.forEach((dayObject=>{const isToday=isSameDay(Object.assign(Object.assign({},referenceMonth),{day:dayObject.value}),todayParts);dateColumnItems.push({text:isToday?getTodayLabel(locale):dayObject.text,value:`${referenceMonth.year}-${referenceMonth.month}-${dayObject.value}`}),dateParts.push({month:referenceMonth.month,year:referenceMonth.year,day:dayObject.value})})),parts=[...parts,...dateParts],items=[...items,...dateColumnItems]})),{parts,items}},getTimeColumnsData=(locale,refParts,hourCycle,minParts,maxParts,allowedHourValues,allowedMinuteValues)=>{const use24Hour=is24Hour(locale,hourCycle),{hours,minutes,am,pm}=generateTime(refParts,use24Hour?"h23":"h12",minParts,maxParts,allowedHourValues,allowedMinuteValues),hoursItems=hours.map((hour=>({text:getFormattedHour(hour,use24Hour),value:getInternalHourValue(hour,use24Hour,refParts.ampm)}))),minutesItems=minutes.map((minute=>({text:addTimePadding(minute),value:minute}))),dayPeriodItems=[];return am&&!use24Hour&&dayPeriodItems.push({text:getLocalizedDayPeriod(locale,"am"),value:"am"}),pm&&!use24Hour&&dayPeriodItems.push({text:getLocalizedDayPeriod(locale,"pm"),value:"pm"}),{minutesData:minutesItems,hoursData:hoursItems,dayPeriodData:dayPeriodItems}}},"../../packages/core/dist/esm/helpers-13791ab7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>addEventListener,b:()=>removeEventListener,c:()=>inheritAttributes,d:()=>componentOnReady,e:()=>renderHiddenInput,f:()=>clamp,g:()=>getElementRoot,h:()=>isEndSide,i:()=>inheritAriaAttributes,j:()=>focusElement,k:()=>assert,l:()=>hasLazyBuild,m:()=>debounceEvent,n:()=>getAriaLabel,o:()=>findItemLabel,p:()=>debounce,q:()=>hasShadowDom,r:()=>raf,s:()=>shallowEqualStringMap,t:()=>transitionEndAsync,u:()=>now,v:()=>pointerCoord});const transitionEndAsync=(el,expectedDuration=0)=>new Promise((resolve=>{transitionEnd(el,expectedDuration,resolve)})),transitionEnd=(el,expectedDuration=0,callback)=>{let unRegTrans,animationTimeout;const opts={passive:!0},unregister=()=>{unRegTrans&&unRegTrans()},onTransitionEnd=ev=>{void 0!==ev&&el!==ev.target||(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),animationTimeout=setTimeout(onTransitionEnd,expectedDuration+500),unRegTrans=()=>{animationTimeout&&(clearTimeout(animationTimeout),animationTimeout=void 0),el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister},componentOnReady=(el,callback)=>{el.componentOnReady?el.componentOnReady().then((resolvedEl=>callback(resolvedEl))):raf((()=>callback(el)))},hasLazyBuild=stencilEl=>void 0!==stencilEl.componentOnReady,inheritAttributes=(el,attributes=[])=>{const attributeObject={};return attributes.forEach((attr=>{if(el.hasAttribute(attr)){null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr)}})),attributeObject},ariaAttributes=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],inheritAriaAttributes=(el,ignoreList)=>{let attributesToInherit=ariaAttributes;return ignoreList&&ignoreList.length>0&&(attributesToInherit=attributesToInherit.filter((attr=>!ignoreList.includes(attr)))),inheritAttributes(el,attributesToInherit)},addEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=(el,eventName,callback,opts)=>{var _a;if("undefined"!=typeof window){const win=window,config=null===(_a=null==win?void 0:win.Ionic)||void 0===_a?void 0:_a.config;if(config){const rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=(el,fallback=el)=>el.shadowRoot||fallback,raf=h=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h),hasShadowDom=el=>!!el.shadowRoot&&!!el.attachShadow,findItemLabel=componentEl=>{const itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},focusElement=el=>{if(el.focus(),el.classList.contains("ion-focusable")){const app=el.closest("ion-app");app&&app.setFocus([el])}},getAriaLabel=(componentEl,inputId)=>{let labelText;const labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id;let labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector(`label[for="${componentId}"]`),label&&(""!==label.id?labelId=label.id:label.id=labelId=`${componentId}-lbl`,labelText=label.textContent)),{label,labelId,labelText}},renderHiddenInput=(always,container,name,value,disabled)=>{if(always||hasShadowDom(container)){let input=container.querySelector("input.aux-input");input||(input=container.ownerDocument.createElement("input"),input.type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=(min,n,max)=>Math.max(min,Math.min(n,max)),assert=(actual,reason)=>{if(!actual){const message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=ev=>ev.timeStamp||Date.now(),pointerCoord=ev=>{if(ev){const changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){const touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=side=>{const isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error(`"${side}" is not a valid value for [side]. Use "start" or "end" instead.`)}},debounceEvent=(event,wait)=>{const original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=(func,wait=0)=>{let timer;return(...args)=>{clearTimeout(timer),timer=setTimeout(func,wait,...args)}},shallowEqualStringMap=(map1,map2)=>{if(null!=map1||(map1={}),null!=map2||(map2={}),map1===map2)return!0;const keys1=Object.keys(map1);if(keys1.length!==Object.keys(map2).length)return!1;for(const k1 of keys1){if(!(k1 in map2))return!1;if(map1[k1]!==map2[k1])return!1}return!0}},"../../packages/core/dist/esm/index-24e88bd3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>printIonError,b:()=>printRequiredElementError,p:()=>printIonWarning});const printIonWarning=(message,...params)=>console.warn(`[Ionic Warning]: ${message}`,...params),printIonError=(message,...params)=>console.error(`[Ionic Error]: ${message}`,...params),printRequiredElementError=(el,...targetSelectors)=>console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(" or ")}.`)},"../../packages/core/dist/esm/theme-bc7eaa70.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>createColorClasses,g:()=>getClassMap,h:()=>hostContext,o:()=>openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter((c=>null!=c)).map((c=>c.trim())).filter((c=>""!==c));return[]})(classes).forEach((c=>map[c]=!0)),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}}}]);