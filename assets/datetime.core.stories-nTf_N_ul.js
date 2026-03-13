import{P as e}from"./iframe-Dm0EU4CU.js";import{t}from"./table-7jAh1EVy.js";import{t as n}from"./decorator-B7evQOcP.js";var r={parameters:{docs:{description:{component:`Wrapper of Ionic Datetime component. Read the [Ionic documentation](https://ionicframework.com/docs/api/datetime) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomCancel`,`atom-change`,`atom-focus`,`atom-blur`,`atom-cancel`]}},decorators:[n],argTypes:{label:{control:`string`,description:"The text of label when `useButton` prop is true."},cancelText:{control:`text`,description:`The text to display on the cancel button.`},clearText:{control:`text`,description:`The text to display on the clear button.`},datetimeId:{control:`text`,defaultValue:{summary:`datetime`},description:`The id of the datetime.`},dayValues:{control:`text`,description:`The days that should be shown.`},disabled:{control:`boolean`,description:`If true, the user cannot interact with the datetime.`},doneText:{control:`text`,description:`The text to display on the done button.`},formatOptions:{control:`object`,description:`The options to pass to the Intl.DateTimeFormat object.`,defaultValue:{summary:`{ date: { month: "2-digit", day: "2-digit", year: "numeric" }, time: { hour: "2-digit", minute: "2-digit" } }`},table:{type:{summary:`Intl.DateTimeFormatOptions`}}},highlightedDates:{control:`function`,description:`Used to apply custom text and background colors to specific dates.`,table:{type:{summary:`[{ date: string; textColor: string; backgroundColor: string; }] | (date: string) => { color: string; backgroundColor: string; }`}}},hourCycle:{control:`select`,defaultValue:`h23`,options:[`h12`,`h23`],description:`The hour cycle of the datetime.`},hourValues:{control:`text`,description:`The hours that should be shown.`},isDateEnabled:{control:`function`,description:`A function that receives a date string and returns a boolean indicating if the date is enabled.`,table:{type:{summary:`(dateString: string) => boolean`}}},locale:{control:`text`,defaultValue:`pt-BR`,description:`The locale to use for the datetime.`},max:{control:`text`,description:`The maximum datetime allowed.`},min:{control:`text`,description:`The minimum datetime allowed.`},minuteValues:{control:`text`,description:`The minutes that should be shown.`},monthValues:{control:`text`,description:`The months that should be shown.`},multiple:{control:`boolean`,description:`If true, the datetime allows multiple values.`},name:{control:`text`,description:`The name of the control, which is submitted with the form data.`},presentation:{control:`select`,defaultValue:{summary:`date`},options:[`date`,`time`,`month-year`,`month`,`year`],description:`The presentation of the datetime.`},rangeMode:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the datetime is in range mode.`},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the datetime is readonly.`},showClearButton:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the clear button is shown.`},showDefaultButtons:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the default buttons are shown.`},showDefaultTimeLabel:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the default time label is shown.`},showDefaultTitle:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the default title is shown.`},size:{control:`select`,defaultValue:{summary:`fixed`},options:[`fixed`,`cover`],description:`If cover, the datetime will expand to cover the full width of its container. If fixed, the datetime will have a fixed width.`},title:{control:`text`,description:`The title of the datetime. If not provided, the title will be hidden.`,table:{category:t.SLOTS}},timeLabel:{control:`text`,description:`The time label of the datetime. If not provided, the time label will be hidden.`,table:{category:t.SLOTS}},dateTarget:{control:`text`,description:`The date value displayed when used with useButton. If not provided, the default date format will be shown.`,table:{category:t.SLOTS}},timeTarget:{control:`text`,description:`The time value displayed when used with useButton. If not provided, the default time format will be shown.`,table:{category:t.SLOTS}},useButton:{control:`boolean`,description:`If true, the datetime uses a button.`},value:{control:`text`,description:`The value of the datetime.`},yearValues:{control:`text`,description:`The years that should be shown.`}}},i={cancelText:`Cancelar`,clearText:`Limpar`,dayValues:void 0,disabled:!1,doneText:`Confirmar`,hourCycle:`h23`,hourValues:void 0,locale:`pt-BR`,max:void 0,min:void 0,minuteValues:void 0,monthValues:void 0,multiple:!1,name:`datetime`,presentation:`date`,rangeMode:!1,readonly:!1,showClearButton:!1,showDefaultButtons:!1,showDefaultTimeLabel:!1,showDefaultTitle:!1,size:`fixed`,useButton:!1,value:void 0,yearValues:void 0},a={advancedDateConstraints:"This story shows how to use the `isDateEnabled` property to disable weekends using the following logic: `\nconst date = new Date(dateString);\nconst utcDay = date.getUTCDay();\nreturn utcDay !== 0 && utcDay !== 6;`",highlightingSpecificDatesArray:"This story shows how to use the `highlightedDates` property with an array to highlight specific dates.",highlightingSpecificDatesCallback:`This story shows how to use the \`highlightedDates\` property with a callback function to highlight dates based on custom logic using the following logic: \`
const date = new Date(dateString);
const day = date.getUTCDate();
if (day % 5 === 0) {
  return {
    textColor: "#800080",
    backgroundColor: "#ffc0cb",
  };
}
return undefined;\``},o={title:`Components/Datetime`,...r},s={render:t=>e`
    <atom-datetime
      cancel-text="${t.cancelText}"
      clear-text="${t.clearText}"
      disabled="${t.disabled}"
      done-text="${t.doneText}"
      hour-cycle="${t.hourCycle}"
      locale="${t.locale}"
      max="${t.max}"
      min="${t.min}"
      multiple="${t.multiple}"
      name="${t.name}"
      presentation="${t.presentation}"
      readonly="${t.readonly}"
      show-clear-button="${t.showClearButton}"
      show-default-buttons="${t.showDefaultButtons}"
      show-default-time-label="${t.showDefaultTimeLabel}"
      show-default-title="${t.showDefaultTitle}"
      size="${t.size}"
      use-button="${t.useButton}"
      value="${t.value}"
    >
      <span slot="time-label">${t.timeLabel}</span>
      <span slot="title">${t.title}</span>
    </atom-datetime>
  `,args:{...i}},c={render:t=>e`
    <atom-datetime .isDateEnabled="${t.isDateEnabled}"></atom-datetime>
  `,args:{isDateEnabled:e=>{let t=new Date(e).getUTCDay();return t!==0&&t!==6}},parameters:{docs:{description:{story:a.advancedDateConstraints}}}},l={render:t=>e`
    <atom-datetime
      .highlightedDates="${t.highlightedDates}"
      value="2025-01-01"
    ></atom-datetime>
  `,args:{highlightedDates:[{date:`2025-01-05`,textColor:`#800080`,backgroundColor:`#ffc0cb`},{date:`2025-01-10`,textColor:`#09721b`,backgroundColor:`#c8e5d0`},{date:`2025-01-23`,textColor:`rgb(68, 10, 184)`,backgroundColor:`rgb(211, 200, 229)`}]},parameters:{docs:{description:{story:a.highlightingSpecificDatesArray}}}},u={render:t=>e`
    <atom-datetime .highlightedDates="${t.highlightedDates}"></atom-datetime>
  `,args:{highlightedDates:e=>{if(new Date(e).getUTCDate()%5==0)return{textColor:`#800080`,backgroundColor:`#ffc0cb`}}},parameters:{docs:{description:{story:a.highlightingSpecificDatesCallback}}}},d={render:()=>e` <atom-datetime multiple></atom-datetime> `},f={render:()=>e` <atom-datetime range-mode></atom-datetime> `},p=()=>{let e=new Date,t=new Date;t.setDate(e.getDate()-30);let n=e=>e.toISOString().slice(0,10);return[n(t),n(e)]},m=new Date().toISOString().slice(0,10),h={render:()=>e`
    <atom-datetime range-mode .value=${p()}></atom-datetime>
  `,parameters:{docs:{description:{story:`This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days).`}}}},g={render:()=>e`
    <atom-datetime
      range-mode
      use-button="true"
      label="Selecionar período"
      datetime-id="datetime-range-with-button"
      cancel-text="Cancelar"
      clear-text="Limpar"
      done-text="Confirmar"
      locale="pt-BR"
      .value=${p()}
    ></atom-datetime>
  `,parameters:{docs:{description:{story:`This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button.`}}}},_={render:()=>e`
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
      max="${m}"
      .value=${p()}
    ></atom-datetime>
  `,parameters:{docs:{description:{story:`This example shows the Datetime component in range mode with min/max date restrictions (last 30 days, max is today).`}}}},v={render:()=>e`
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
          .formatOptions="${{date:{month:`long`,year:`numeric`}}}"
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
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => html\` <atom-datetime multiple></atom-datetime> \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\` <atom-datetime range-mode></atom-datetime> \`
}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`AdvancedDateConstraints`,`HighlightingSpecificDatesArray`,`HighlightingSpecificDatesCallback`,`WithMultipleDates`,`UsingRangeMode`,`RangeModeWithDefaultDates`,`RangeModeWithDefaultDatesAndButton`,`RangeModeWithMinMax`,`UsingWithButton`];export{c as AdvancedDateConstraints,s as Default,l as HighlightingSpecificDatesArray,u as HighlightingSpecificDatesCallback,h as RangeModeWithDefaultDates,g as RangeModeWithDefaultDatesAndButton,_ as RangeModeWithMinMax,f as UsingRangeMode,v as UsingWithButton,d as WithMultipleDates,y as __namedExportsOrder,o as default};