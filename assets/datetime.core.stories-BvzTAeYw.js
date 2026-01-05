import{U as t}from"./iframe-Csm4GGMy.js";import{C as n}from"./table-D060eKuu.js";import{w as y}from"./decorator-DE0w0T0C.js";import"./preload-helper-PPVm8Dsz.js";const D={parameters:{docs:{description:{component:"Wrapper of Ionic Datetime component. Read the [Ionic documentation](https://ionicframework.com/docs/api/datetime) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atom-change","atom-focus","atom-blur","atom-cancel"]}},decorators:[y],argTypes:{label:{control:"string",description:"The text of label when `useButton` prop is true."},cancelText:{control:"text",description:"The text to display on the cancel button."},clearText:{control:"text",description:"The text to display on the clear button."},datetimeId:{control:"text",defaultValue:{summary:"datetime"},description:"The id of the datetime."},dayValues:{control:"text",description:"The days that should be shown."},disabled:{control:"boolean",description:"If true, the user cannot interact with the datetime."},doneText:{control:"text",description:"The text to display on the done button."},formatOptions:{control:"object",description:"The options to pass to the Intl.DateTimeFormat object.",defaultValue:{summary:'{ date: { month: "2-digit", day: "2-digit", year: "numeric" }, time: { hour: "2-digit", minute: "2-digit" } }'},table:{type:{summary:"Intl.DateTimeFormatOptions"}}},highlightedDates:{control:"function",description:"Used to apply custom text and background colors to specific dates.",table:{type:{summary:"[{ date: string; textColor: string; backgroundColor: string; }] | (date: string) => { color: string; backgroundColor: string; }"}}},hourCycle:{control:"select",defaultValue:"h23",options:["h12","h23"],description:"The hour cycle of the datetime."},hourValues:{control:"text",description:"The hours that should be shown."},isDateEnabled:{control:"function",description:"A function that receives a date string and returns a boolean indicating if the date is enabled.",table:{type:{summary:"(dateString: string) => boolean"}}},locale:{control:"text",defaultValue:"pt-BR",description:"The locale to use for the datetime."},max:{control:"text",description:"The maximum datetime allowed."},min:{control:"text",description:"The minimum datetime allowed."},minuteValues:{control:"text",description:"The minutes that should be shown."},monthValues:{control:"text",description:"The months that should be shown."},multiple:{control:"boolean",description:"If true, the datetime allows multiple values."},name:{control:"text",description:"The name of the control, which is submitted with the form data."},presentation:{control:"select",defaultValue:{summary:"date"},options:["date","time","month-year","month","year"],description:"The presentation of the datetime."},rangeMode:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is in range mode."},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is readonly."},showClearButton:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the clear button is shown."},showDefaultButtons:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default buttons are shown."},showDefaultTimeLabel:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default time label is shown."},showDefaultTitle:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default title is shown."},size:{control:"select",defaultValue:{summary:"fixed"},options:["fixed","cover"],description:"If cover, the datetime will expand to cover the full width of its container. If fixed, the datetime will have a fixed width."},title:{control:"text",description:"The title of the datetime. If not provided, the title will be hidden.",table:{category:n.SLOTS}},timeLabel:{control:"text",description:"The time label of the datetime. If not provided, the time label will be hidden.",table:{category:n.SLOTS}},dateTarget:{control:"text",description:"The date value displayed when used with useButton. If not provided, the default date format will be shown.",table:{category:n.SLOTS}},timeTarget:{control:"text",description:"The time value displayed when used with useButton. If not provided, the default time format will be shown.",table:{category:n.SLOTS}},useButton:{control:"boolean",description:"If true, the datetime uses a button."},value:{control:"text",description:"The value of the datetime."},yearValues:{control:"text",description:"The years that should be shown."}}},x={cancelText:"Cancelar",clearText:"Limpar",dayValues:void 0,disabled:!1,doneText:"Confirmar",hourCycle:"h23",hourValues:void 0,locale:"pt-BR",max:void 0,min:void 0,minuteValues:void 0,monthValues:void 0,multiple:!1,name:"datetime",presentation:"date",rangeMode:!1,readonly:!1,showClearButton:!1,showDefaultButtons:!1,showDefaultTimeLabel:!1,showDefaultTitle:!1,size:"fixed",useButton:!1,value:void 0,yearValues:void 0},g={advancedDateConstraints:"This story shows how to use the `isDateEnabled` property to disable weekends using the following logic: `\nconst date = new Date(dateString);\nconst utcDay = date.getUTCDay();\nreturn utcDay !== 0 && utcDay !== 6;`",highlightingSpecificDatesArray:"This story shows how to use the `highlightedDates` property with an array to highlight specific dates.",highlightingSpecificDatesCallback:`This story shows how to use the \`highlightedDates\` property with a callback function to highlight dates based on custom logic using the following logic: \`
const date = new Date(dateString);
const day = date.getUTCDate();
if (day % 5 === 0) {
  return {
    textColor: "#800080",
    backgroundColor: "#ffc0cb",
  };
}
return undefined;\``},v={title:"Components/Datetime",...D},i={render:e=>t`
    <atom-datetime
      cancel-text="${e.cancelText}"
      clear-text="${e.clearText}"
      disabled="${e.disabled}"
      done-text="${e.doneText}"
      hour-cycle="${e.hourCycle}"
      locale="${e.locale}"
      max="${e.max}"
      min="${e.min}"
      multiple="${e.multiple}"
      name="${e.name}"
      presentation="${e.presentation}"
      readonly="${e.readonly}"
      show-clear-button="${e.showClearButton}"
      show-default-buttons="${e.showDefaultButtons}"
      show-default-time-label="${e.showDefaultTimeLabel}"
      show-default-title="${e.showDefaultTitle}"
      size="${e.size}"
      use-button="${e.useButton}"
      value="${e.value}"
    >
      <span slot="time-label">${e.timeLabel}</span>
      <span slot="title">${e.title}</span>
    </atom-datetime>
  `,args:{...x}},r={render:e=>t`
    <atom-datetime .isDateEnabled="${e.isDateEnabled}"></atom-datetime>
  `,args:{isDateEnabled:e=>{const a=new Date(e).getUTCDay();return a!==0&&a!==6}},parameters:{docs:{description:{story:g.advancedDateConstraints}}}},s={render:e=>t`
    <atom-datetime
      .highlightedDates="${e.highlightedDates}"
      value="2025-01-01"
    ></atom-datetime>
  `,args:{highlightedDates:[{date:"2025-01-05",textColor:"#800080",backgroundColor:"#ffc0cb"},{date:"2025-01-10",textColor:"#09721b",backgroundColor:"#c8e5d0"},{date:"2025-01-23",textColor:"rgb(68, 10, 184)",backgroundColor:"rgb(211, 200, 229)"}]},parameters:{docs:{description:{story:g.highlightingSpecificDatesArray}}}},d={render:e=>t`
    <atom-datetime .highlightedDates="${e.highlightedDates}"></atom-datetime>
  `,args:{highlightedDates:e=>{if(new Date(e).getUTCDate()%5===0)return{textColor:"#800080",backgroundColor:"#ffc0cb"}}},parameters:{docs:{description:{story:g.highlightingSpecificDatesCallback}}}},l={render:()=>t` <atom-datetime multiple></atom-datetime> `},m={render:()=>t` <atom-datetime range-mode></atom-datetime> `},f=()=>{const e=new Date,o=new Date;o.setDate(e.getDate()-30);const a=b=>b.toISOString().slice(0,10);return[a(o),a(e)]},w=new Date().toISOString().slice(0,10),c={render:()=>t`
    <atom-datetime range-mode .value=${f()}></atom-datetime>
  `,parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days)."}}}},u={render:()=>t`
    <atom-datetime
      range-mode
      use-button="true"
      label="Selecionar período"
      datetime-id="datetime-range-with-button"
      cancel-text="Cancelar"
      clear-text="Limpar"
      done-text="Confirmar"
      locale="pt-BR"
      .value=${f()}
    ></atom-datetime>
  `,parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button."}}}},h={render:()=>t`
    <atom-datetime
      range-mode
      use-button="true"
      label="Selecionar período (min/max)"
      datetime-id="datetime-range-min-max"
      cancel-text="Cancelar"
      clear-text="Limpar"
      done-text="Confirmar"
      locale="pt-BR"
      min="2025-01-01"
      max="${w}"
      .value=${f()}
    ></atom-datetime>
  `,parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with min/max date restrictions (last 30 days, max is today)."}}}},p={render:()=>t`
    <atom-grid>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma data"
          datetime-id="datetime-with-button-date"
          presentation="date"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma hora"
          datetime-id="datetime-with-button-time"
          presentation="time"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione um mês e ano"
          datetime-id="datetime-with-button-year-month"
          presentation="month-year"
          .formatOptions="${{date:{month:"long",year:"numeric"}}}"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma data"
          datetime-id="datetime-with-custom-date-format"
          presentation="date"
        >
          <span slot="date-target">Custom Date</span>
        </atom-datetime>
      </atom-col>
    </atom-grid>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-datetime
      cancel-text="\${args.cancelText}"
      clear-text="\${args.clearText}"
      disabled="\${args.disabled}"
      done-text="\${args.doneText}"
      hour-cycle="\${args.hourCycle}"
      locale="\${args.locale}"
      max="\${args.max}"
      min="\${args.min}"
      multiple="\${args.multiple}"
      name="\${args.name}"
      presentation="\${args.presentation}"
      readonly="\${args.readonly}"
      show-clear-button="\${args.showClearButton}"
      show-default-buttons="\${args.showDefaultButtons}"
      show-default-time-label="\${args.showDefaultTimeLabel}"
      show-default-title="\${args.showDefaultTitle}"
      size="\${args.size}"
      use-button="\${args.useButton}"
      value="\${args.value}"
    >
      <span slot="time-label">\${args.timeLabel}</span>
      <span slot="title">\${args.title}</span>
    </atom-datetime>
  \`,
  args: {
    ...DatetimeComponentArgs
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-datetime .isDateEnabled="\${args.isDateEnabled}"></atom-datetime>
  \`,
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-datetime
      .highlightedDates="\${args.highlightedDates}"
      value="2025-01-01"
    ></atom-datetime>
  \`,
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-datetime .highlightedDates="\${args.highlightedDates}"></atom-datetime>
  \`,
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{\n  render: () => html` <atom-datetime multiple></atom-datetime> `\n}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  render: () => html` <atom-datetime range-mode></atom-datetime> `\n}",...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-datetime range-mode .value=\${getLast30DaysRange()}></atom-datetime>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days).'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-datetime
      range-mode
      use-button="true"
      label="Selecionar período"
      datetime-id="datetime-range-with-button"
      cancel-text="Cancelar"
      clear-text="Limpar"
      done-text="Confirmar"
      locale="pt-BR"
      .value=\${getLast30DaysRange()}
    ></atom-datetime>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-datetime
      range-mode
      use-button="true"
      label="Selecionar período (min/max)"
      datetime-id="datetime-range-min-max"
      cancel-text="Cancelar"
      clear-text="Limpar"
      done-text="Confirmar"
      locale="pt-BR"
      min="2025-01-01"
      max="\${todayISO}"
      .value=\${getLast30DaysRange()}
    ></atom-datetime>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'This example shows the Datetime component in range mode with min/max date restrictions (last 30 days, max is today).'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-grid>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma data"
          datetime-id="datetime-with-button-date"
          presentation="date"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma hora"
          datetime-id="datetime-with-button-time"
          presentation="time"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione um mês e ano"
          datetime-id="datetime-with-button-year-month"
          presentation="month-year"
          .formatOptions="\${{
    date: {
      month: 'long',
      year: 'numeric'
    }
  }}"
        ></atom-datetime>
      </atom-col>
      <atom-col size="8">
        <atom-datetime
          use-button="true"
          label="Selecione uma data"
          datetime-id="datetime-with-custom-date-format"
          presentation="date"
        >
          <span slot="date-target">Custom Date</span>
        </atom-datetime>
      </atom-col>
    </atom-grid>
  \`
}`,...p.parameters?.docs?.source}}};const B=["Default","AdvancedDateConstraints","HighlightingSpecificDatesArray","HighlightingSpecificDatesCallback","WithMultipleDates","UsingRangeMode","RangeModeWithDefaultDates","RangeModeWithDefaultDatesAndButton","RangeModeWithMinMax","UsingWithButton"];export{r as AdvancedDateConstraints,i as Default,s as HighlightingSpecificDatesArray,d as HighlightingSpecificDatesCallback,c as RangeModeWithDefaultDates,u as RangeModeWithDefaultDatesAndButton,h as RangeModeWithMinMax,m as UsingRangeMode,p as UsingWithButton,l as WithMultipleDates,B as __namedExportsOrder,v as default};
