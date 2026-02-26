import{j as t}from"./iframe-Xde5Z66N.js";import{o as a,q as y,s as r}from"./index-_rCUTZzq.js";import{C as s}from"./table-D060eKuu.js";import{w}from"./decorator-Bqm8FLi4.js";import"./preload-helper-PPVm8Dsz.js";const T={parameters:{docs:{description:{component:"Wrapper of Ionic Datetime component. Read the [Ionic documentation](https://ionicframework.com/docs/api/datetime) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atom-change","atom-focus","atom-blur","atom-cancel"]}},decorators:[w],argTypes:{label:{control:"string",description:"The text of label when `useButton` prop is true."},cancelText:{control:"text",description:"The text to display on the cancel button."},clearText:{control:"text",description:"The text to display on the clear button."},datetimeId:{control:"text",defaultValue:{summary:"datetime"},description:"The id of the datetime."},dayValues:{control:"text",description:"The days that should be shown."},disabled:{control:"boolean",description:"If true, the user cannot interact with the datetime."},doneText:{control:"text",description:"The text to display on the done button."},formatOptions:{control:"object",description:"The options to pass to the Intl.DateTimeFormat object.",defaultValue:{summary:'{ date: { month: "2-digit", day: "2-digit", year: "numeric" }, time: { hour: "2-digit", minute: "2-digit" } }'},table:{type:{summary:"Intl.DateTimeFormatOptions"}}},highlightedDates:{control:"function",description:"Used to apply custom text and background colors to specific dates.",table:{type:{summary:"[{ date: string; textColor: string; backgroundColor: string; }] | (date: string) => { color: string; backgroundColor: string; }"}}},hourCycle:{control:"select",defaultValue:"h23",options:["h12","h23"],description:"The hour cycle of the datetime."},hourValues:{control:"text",description:"The hours that should be shown."},isDateEnabled:{control:"function",description:"A function that receives a date string and returns a boolean indicating if the date is enabled.",table:{type:{summary:"(dateString: string) => boolean"}}},locale:{control:"text",defaultValue:"pt-BR",description:"The locale to use for the datetime."},max:{control:"text",description:"The maximum datetime allowed."},min:{control:"text",description:"The minimum datetime allowed."},minuteValues:{control:"text",description:"The minutes that should be shown."},monthValues:{control:"text",description:"The months that should be shown."},multiple:{control:"boolean",description:"If true, the datetime allows multiple values."},name:{control:"text",description:"The name of the control, which is submitted with the form data."},presentation:{control:"select",defaultValue:{summary:"date"},options:["date","time","month-year","month","year"],description:"The presentation of the datetime."},rangeMode:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is in range mode."},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is readonly."},showClearButton:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the clear button is shown."},showDefaultButtons:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default buttons are shown."},showDefaultTimeLabel:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default time label is shown."},showDefaultTitle:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default title is shown."},size:{control:"select",defaultValue:{summary:"fixed"},options:["fixed","cover"],description:"If cover, the datetime will expand to cover the full width of its container. If fixed, the datetime will have a fixed width."},title:{control:"text",description:"The title of the datetime. If not provided, the title will be hidden.",table:{category:s.SLOTS}},timeLabel:{control:"text",description:"The time label of the datetime. If not provided, the time label will be hidden.",table:{category:s.SLOTS}},dateTarget:{control:"text",description:"The date value displayed when used with useButton. If not provided, the default date format will be shown.",table:{category:s.SLOTS}},timeTarget:{control:"text",description:"The time value displayed when used with useButton. If not provided, the default time format will be shown.",table:{category:s.SLOTS}},useButton:{control:"boolean",description:"If true, the datetime uses a button."},value:{control:"text",description:"The value of the datetime."},yearValues:{control:"text",description:"The years that should be shown."}}},C={cancelText:"Cancelar",clearText:"Limpar",dayValues:void 0,disabled:!1,doneText:"Confirmar",hourCycle:"h23",hourValues:void 0,locale:"pt-BR",max:void 0,min:void 0,minuteValues:void 0,monthValues:void 0,multiple:!1,name:"datetime",presentation:"date",rangeMode:!1,readonly:!1,showClearButton:!1,showDefaultButtons:!1,showDefaultTimeLabel:!1,showDefaultTitle:!1,size:"fixed",useButton:!1,value:void 0,yearValues:void 0},D={advancedDateConstraints:"This story shows how to use the `isDateEnabled` property to disable weekends using the following logic: `\nconst date = new Date(dateString);\nconst utcDay = date.getUTCDay();\nreturn utcDay !== 0 && utcDay !== 6;`",highlightingSpecificDatesArray:"This story shows how to use the `highlightedDates` property with an array to highlight specific dates.",highlightingSpecificDatesCallback:`This story shows how to use the \`highlightedDates\` property with a callback function to highlight dates based on custom logic using the following logic: \`
const date = new Date(dateString);
const day = date.getUTCDate();
if (day % 5 === 0) {
  return {
    textColor: "#800080",
    backgroundColor: "#ffc0cb",
  };
}
return undefined;\``},b=()=>{const e=new Date,n=new Date;n.setDate(e.getDate()-30);const o=x=>x.toISOString().slice(0,10);return[o(n),o(e)]},S=new Date().toISOString().slice(0,10),M={title:"Components/Datetime",...T},i={render:e=>t.jsxs(a,{cancelText:e.cancelText,clearText:e.clearText,disabled:e.disabled,doneText:e.doneText,"hour-cycle":e.hourCycle,locale:e.locale,max:e.max,min:e.min,multiple:e.multiple,name:e.name,presentation:e.presentation,readonly:e.readonly,showClearButton:e.showClearButton,showDefaultButtons:e.showDefaultButtons,showDefaultTimeLabel:e.showDefaultTimeLabel,showDefaultTitle:e.showDefaultTitle,size:e.size,useButton:e.useButton,value:e.value,children:[t.jsx("span",{slot:"time-label",children:e.timeLabel}),t.jsx("span",{slot:"title",children:e.title})]}),args:{...C}},l={render:e=>t.jsx(a,{isDateEnabled:e.isDateEnabled}),args:{isDateEnabled:e=>{const o=new Date(e).getUTCDay();return o!==0&&o!==6}},parameters:{docs:{description:{story:D.advancedDateConstraints}}}},d={render:e=>t.jsx(a,{highlightedDates:e.highlightedDates,value:"2025-01-01"}),args:{highlightedDates:[{date:"2025-01-05",textColor:"#800080",backgroundColor:"#ffc0cb"},{date:"2025-01-10",textColor:"#09721b",backgroundColor:"#c8e5d0"},{date:"2025-01-23",textColor:"rgb(68, 10, 184)",backgroundColor:"rgb(211, 200, 229)"}]},parameters:{docs:{description:{story:D.highlightingSpecificDatesArray}}}},c={render:e=>t.jsx(a,{highlightedDates:e.highlightedDates}),args:{highlightedDates:e=>{if(new Date(e).getUTCDate()%5===0)return{textColor:"#800080",backgroundColor:"#ffc0cb"}}},parameters:{docs:{description:{story:D.highlightingSpecificDatesCallback}}}},m={render:()=>t.jsx(a,{multiple:!0})},u={render:()=>t.jsx(a,{rangeMode:!0})},h={render:()=>t.jsx(a,{rangeMode:!0,value:b()}),parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days)."}}}},p={render:()=>t.jsx(a,{rangeMode:!0,useButton:!0,label:"Selecionar período",datetimeId:"datetime-range-with-button",cancelText:"Cancelar",clearText:"Limpar",doneText:"Confirmar",locale:"pt-BR",value:b()}),parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with button interface and default dates (last 30 days)."}}}},g={render:()=>t.jsx(a,{rangeMode:!0,min:"2025-01-01",max:S,value:b(),useButton:!0,label:"Selecionar período de verão",datetimeId:"datetime-range-constrained",cancelText:"Cancelar",clearText:"Limpar",doneText:"Confirmar",locale:"pt-BR"}),parameters:{docs:{description:{story:"This example demonstrates range mode with min/max constraints and default last 30 days selection (max is today)."}}}},f={render:()=>t.jsxs(y,{children:[t.jsx(r,{size:"8",children:t.jsx(a,{useButton:!0,label:"Selecione uma data",datetimeId:"datetime-with-button-date",presentation:"date"})}),t.jsx(r,{size:"8",children:t.jsx(a,{useButton:!0,label:"Selecione uma hora",datetimeId:"datetime-with-button-time",presentation:"time"})}),t.jsx(r,{size:"8",children:t.jsx(a,{useButton:!0,label:"Selecione um mês e ano",datetimeId:"datetime-with-button-year-month",presentation:"month-year",formatOptions:{date:{month:"long",year:"numeric"}}})}),t.jsx(r,{size:"8",children:t.jsx(a,{useButton:!0,label:"Selecione uma data",datetimeId:"datetime-with-custom-date-format",presentation:"date",children:t.jsx("span",{slot:"date-target",children:"Custom-Date"})})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <AtomDatetime cancelText={args.cancelText} clearText={args.clearText} disabled={args.disabled} doneText={args.doneText} hour-cycle={args.hourCycle} locale={args.locale} max={args.max} min={args.min} multiple={args.multiple} name={args.name} presentation={args.presentation} readonly={args.readonly} showClearButton={args.showClearButton} showDefaultButtons={args.showDefaultButtons} showDefaultTimeLabel={args.showDefaultTimeLabel} showDefaultTitle={args.showDefaultTitle} size={args.size} useButton={args.useButton} value={args.value}>
      <span slot='time-label'>{args.timeLabel}</span>
      <span slot='title'>{args.title}</span>
    </AtomDatetime>,
  args: {
    ...DatetimeComponentArgs
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <AtomDatetime isDateEnabled={args.isDateEnabled} />,
  args: {
    isDateEnabled: dateString => {
      const date = new Date(dateString);
      const utcDay = date.getUTCDay();
      return utcDay !== 0 && utcDay !== 6;
    }
  },
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.advancedDateConstraints
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <AtomDatetime highlightedDates={args.highlightedDates} value={'2025-01-01'} />,
  args: {
    highlightedDates: [{
      date: '2025-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb'
    }, {
      date: '2025-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0'
    }, {
      date: '2025-01-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.highlightingSpecificDatesArray
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <AtomDatetime highlightedDates={args.highlightedDates} />,
  args: {
    highlightedDates: dateString => {
      const date = new Date(dateString);
      const day = date.getUTCDate();
      if (day % 5 === 0) {
        return {
          textColor: '#800080',
          backgroundColor: '#ffc0cb'
        };
      }
      return undefined;
    }
  },
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.highlightingSpecificDatesCallback
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <AtomDatetime multiple={true} />
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AtomDatetime rangeMode={true} />
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AtomDatetime rangeMode={true} value={getLast30DaysRange()} />,
  parameters: {
    docs: {
      description: {
        story: 'This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days).'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <AtomDatetime rangeMode={true} useButton={true} label='Selecionar período' datetimeId='datetime-range-with-button' cancelText='Cancelar' clearText='Limpar' doneText='Confirmar' locale='pt-BR' value={getLast30DaysRange()} />,
  parameters: {
    docs: {
      description: {
        story: 'This example shows the Datetime component in range mode with button interface and default dates (last 30 days).'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AtomDatetime rangeMode={true} min='2025-01-01' max={todayISO} value={getLast30DaysRange()} useButton={true} label='Selecionar período de verão' datetimeId='datetime-range-constrained' cancelText='Cancelar' clearText='Limpar' doneText='Confirmar' locale='pt-BR' />,
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates range mode with min/max constraints and default last 30 days selection (max is today).'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <AtomGrid>
      <AtomCol size='8'>
        <AtomDatetime useButton={true} label='Selecione uma data' datetimeId='datetime-with-button-date' presentation='date' />
      </AtomCol>
      <AtomCol size='8'>
        <AtomDatetime useButton={true} label='Selecione uma hora' datetimeId='datetime-with-button-time' presentation='time' />
      </AtomCol>
      <AtomCol size='8'>
        <AtomDatetime useButton={true} label='Selecione um mês e ano' datetimeId='datetime-with-button-year-month' presentation='month-year' formatOptions={{
        date: {
          month: 'long',
          year: 'numeric'
        }
      }} />
      </AtomCol>
      <AtomCol size='8'>
        <AtomDatetime useButton={true} label='Selecione uma data' datetimeId='datetime-with-custom-date-format' presentation='date'>
          <span slot='date-target'>Custom-Date</span>
        </AtomDatetime>
      </AtomCol>
    </AtomGrid>
}`,...f.parameters?.docs?.source}}};const L=["Default","AdvancedDateConstraints","HighlightingSpecificDatesArray","HighlightingSpecificDatesCallback","WithMultipleDates","UsingRangeMode","RangeModeWithDefaultDates","RangeModeWithDefaultDatesAndButton","RangeModeWithMinMax","UsingWithButton"];export{l as AdvancedDateConstraints,i as Default,d as HighlightingSpecificDatesArray,c as HighlightingSpecificDatesCallback,h as RangeModeWithDefaultDates,p as RangeModeWithDefaultDatesAndButton,g as RangeModeWithMinMax,u as UsingRangeMode,f as UsingWithButton,m as WithMultipleDates,L as __namedExportsOrder,M as default};
