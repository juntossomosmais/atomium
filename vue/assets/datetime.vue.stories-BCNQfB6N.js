import{D as e,T as t,k as n}from"./iframe-DHKEqBzE.js";import{t as r}from"./table-DZkiv1k4.js";import{t as i}from"./decorator-tF45y5qF.js";var a={parameters:{docs:{description:{component:`Wrapper of Ionic Datetime component. Read the [Ionic documentation](https://ionicframework.com/docs/api/datetime) for more information about the available properties and possibilities.`}},actions:{handles:[`atomChange`,`atomFocus`,`atomBlur`,`atomCancel`,`atom-change`,`atom-focus`,`atom-blur`,`atom-cancel`]}},decorators:[i],argTypes:{label:{control:`string`,description:"The text of label when `useButton` prop is true."},cancelText:{control:`text`,description:`The text to display on the cancel button.`},clearText:{control:`text`,description:`The text to display on the clear button.`},datetimeId:{control:`text`,defaultValue:{summary:`datetime`},description:`The id of the datetime.`},dayValues:{control:`text`,description:`The days that should be shown.`},disabled:{control:`boolean`,description:`If true, the user cannot interact with the datetime.`},doneText:{control:`text`,description:`The text to display on the done button.`},formatOptions:{control:`object`,description:`The options to pass to the Intl.DateTimeFormat object.`,defaultValue:{summary:`{ date: { month: "2-digit", day: "2-digit", year: "numeric" }, time: { hour: "2-digit", minute: "2-digit" } }`},table:{type:{summary:`Intl.DateTimeFormatOptions`}}},highlightedDates:{control:`function`,description:`Used to apply custom text and background colors to specific dates.`,table:{type:{summary:`[{ date: string; textColor: string; backgroundColor: string; }] | (date: string) => { color: string; backgroundColor: string; }`}}},hourCycle:{control:`select`,defaultValue:`h23`,options:[`h12`,`h23`],description:`The hour cycle of the datetime.`},hourValues:{control:`text`,description:`The hours that should be shown.`},isDateEnabled:{control:`function`,description:`A function that receives a date string and returns a boolean indicating if the date is enabled.`,table:{type:{summary:`(dateString: string) => boolean`}}},locale:{control:`text`,defaultValue:`pt-BR`,description:`The locale to use for the datetime.`},max:{control:`text`,description:`The maximum datetime allowed.`},min:{control:`text`,description:`The minimum datetime allowed.`},minuteValues:{control:`text`,description:`The minutes that should be shown.`},monthValues:{control:`text`,description:`The months that should be shown.`},multiple:{control:`boolean`,description:`If true, the datetime allows multiple values.`},name:{control:`text`,description:`The name of the control, which is submitted with the form data.`},presentation:{control:`select`,defaultValue:{summary:`date`},options:[`date`,`time`,`month-year`,`month`,`year`],description:`The presentation of the datetime.`},rangeMode:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the datetime is in range mode.`},readonly:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the datetime is readonly.`},showClearButton:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the clear button is shown.`},showDefaultButtons:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the default buttons are shown.`},showDefaultTimeLabel:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the default time label is shown.`},showDefaultTitle:{control:`boolean`,defaultValue:{summary:`false`},description:`If true, the default title is shown.`},size:{control:`select`,defaultValue:{summary:`fixed`},options:[`fixed`,`cover`],description:`If cover, the datetime will expand to cover the full width of its container. If fixed, the datetime will have a fixed width.`},title:{control:`text`,description:`The title of the datetime. If not provided, the title will be hidden.`,table:{category:r.SLOTS}},timeLabel:{control:`text`,description:`The time label of the datetime. If not provided, the time label will be hidden.`,table:{category:r.SLOTS}},dateTarget:{control:`text`,description:`The date value displayed when used with useButton. If not provided, the default date format will be shown.`,table:{category:r.SLOTS}},timeTarget:{control:`text`,description:`The time value displayed when used with useButton. If not provided, the default time format will be shown.`,table:{category:r.SLOTS}},useButton:{control:`boolean`,description:`If true, the datetime uses a button.`},value:{control:`text`,description:`The value of the datetime.`},yearValues:{control:`text`,description:`The years that should be shown.`}}},o={cancelText:`Cancelar`,clearText:`Limpar`,dayValues:void 0,disabled:!1,doneText:`Confirmar`,hourCycle:`h23`,hourValues:void 0,locale:`pt-BR`,max:void 0,min:void 0,minuteValues:void 0,monthValues:void 0,multiple:!1,name:`datetime`,presentation:`date`,rangeMode:!1,readonly:!1,showClearButton:!1,showDefaultButtons:!1,showDefaultTimeLabel:!1,showDefaultTitle:!1,size:`fixed`,useButton:!1,value:void 0,yearValues:void 0},s={advancedDateConstraints:"This story shows how to use the `isDateEnabled` property to disable weekends using the following logic: `\nconst date = new Date(dateString);\nconst utcDay = date.getUTCDay();\nreturn utcDay !== 0 && utcDay !== 6;`",highlightingSpecificDatesArray:"This story shows how to use the `highlightedDates` property with an array to highlight specific dates.",highlightingSpecificDatesCallback:`This story shows how to use the \`highlightedDates\` property with a callback function to highlight dates based on custom logic using the following logic: \`
const date = new Date(dateString);
const day = date.getUTCDate();
if (day % 5 === 0) {
  return {
    textColor: "#800080",
    backgroundColor: "#ffc0cb",
  };
}
return undefined;\``},c={title:`Components/Datetime`,...a},l={render:t=>({components:{AtomDatetime:e},setup(){return{args:t}},template:`
      <AtomDatetime
        cancelText="${t.cancelText}"
        clearText="${t.clearText}"
        disabled="${t.disabled}"
        doneText="${t.doneText}"
        hourCycle="${t.hourCycle}"
        locale="${t.locale}"
        max="${t.max}"
        min="${t.min}"
        multiple="${t.multiple}"
        name="${t.name}"
        presentation="${t.presentation}"
        readonly="${t.readonly}"
        showClearButton="${t.showClearButton}"
        showDefaultButtons="${t.showDefaultButtons}"
        showDefaultTimeLabel="${t.showDefaultTimeLabel}"
        showDefaultTitle="${t.showDefaultTitle}"
        size="${t.size}"
        useButton="${t.useButton}"
      >
        <span slot="time-label">{{ args.timeLabel }}</span>
        <span slot="title">{{ args.title }}</span>
      </AtomDatetime>
    `}),args:{...o}},u={render:()=>({components:{AtomDatetime:e},setup(){return{isDateEnabled:e=>{let t=new Date(e).getUTCDay();return t!==0&&t!==6}}},template:`
      <AtomDatetime :isDateEnabled="isDateEnabled" />
    `}),parameters:{docs:{description:{story:s.advancedDateConstraints}}}},d={render:t=>({components:{AtomDatetime:e},setup(){return{args:t}},template:`
      <AtomDatetime
        highlightedDates="${t.highlightedDates}"
        value="2025-01-01"
      />
    `}),args:{highlightedDates:[{date:`2025-01-05`,textColor:`#800080`,backgroundColor:`#ffc0cb`},{date:`2025-01-10`,textColor:`#09721b`,backgroundColor:`#c8e5d0`},{date:`2025-01-23`,textColor:`rgb(68, 10, 184)`,backgroundColor:`rgb(211, 200, 229)`}]},parameters:{docs:{description:{story:s.highlightingSpecificDatesArray}}}},f={render:()=>({components:{AtomDatetime:e},setup(){return{highlightedDates:e=>{if(new Date(e).getUTCDate()%5==0)return{textColor:`#800080`,backgroundColor:`#ffc0cb`}}}},template:`
      <AtomDatetime
        :highlightedDates="highlightedDates"
      />
    `}),parameters:{docs:{description:{story:s.highlightingSpecificDatesCallback}}}},p={render:()=>({components:{AtomDatetime:e},template:`
      <AtomDatetime multiple="true" />
    `})},m={render:()=>({components:{AtomDatetime:e},data(){return{selectedDates:[]}},template:`
      <AtomDatetime rangeMode="true" />
    `})},h=()=>{let e=new Date,t=new Date;t.setDate(e.getDate()-30);let n=e=>e.toISOString().slice(0,10);return[n(t),n(e)]},g=new Date().toISOString().slice(0,10),_={render:()=>({components:{AtomDatetime:e},data(){return{defaultDates:h()}},template:`
      <AtomDatetime rangeMode="true" :value="defaultDates" />
    `}),parameters:{docs:{description:{story:`This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days).`}}}},v={render:()=>({components:{AtomDatetime:e},data(){return{defaultDates:h()}},template:`
      <AtomDatetime
        rangeMode="true"
        useButton="true"
        label="Selecionar período"
        datetimeId="datetime-range-with-button"
        cancelText="Cancelar"
        clearText="Limpar"
        doneText="Confirmar"
        locale="pt-BR"
        :value="defaultDates"
      >
        <span slot="date-target">Últimos 30 dias</span>
      </AtomDatetime>
    `}),parameters:{docs:{description:{story:`This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button.`}}}},y={render:()=>({components:{AtomDatetime:e},data(){return{summerDates:h()}},template:`
      <AtomDatetime
        rangeMode="true"
        min="2025-01-01"
        :max="'${g}'"
        :value="summerDates"
        useButton="true"
        label="Select summer period"
        datetimeId="datetime-range-constrained"
      />
    `}),parameters:{docs:{description:{story:`This example demonstrates range mode with min/max constraints and default last 30 days selection (max is today).`}}}},b={render:r=>({components:{AtomDatetime:e,AtomCol:t,AtomGrid:n},setup(){return{args:r}},template:`
      <AtomGrid>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma data"
            datetimeId="datetime-with-button-date"
            presentation="date"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma hora"
            datetimeId="datetime-with-button-time"
            presentation="time"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione um mês e ano"
            datetimeId="datetime-with-button-year-month"
            presentation="month-year"
            formatOptions="[object Object]"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma data"
            datetimeId="datetime-with-button-date"
            presentation="date"
          >
            <span slot="date-target">Custom Date</span>
          </AtomDatetime>
        </AtomCol>
      </AtomGrid>
    `})},x={render:()=>({components:{AtomDatetime:e},data(){return{workDates:[`2025-07-07`,`2025-07-13`]}},template:`
      <AtomDatetime
        rangeMode="true"
        useButton="true"
        label="Período de trabalho"
        datetimeId="datetime-range-custom-text"
        cancelText="Cancelar"
        clearText="Limpar"
        doneText="Confirmar"
        locale="pt-BR"
        :value="workDates"
      >
        <span slot="date-target">7 dias selecionados</span>
      </AtomDatetime>
    `}),parameters:{docs:{description:{story:`This example shows how to customize the button text to display "7 dias selecionados" instead of the default "7 days" text.`}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomDatetime
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AtomDatetime
        cancelText="\${args.cancelText}"
        clearText="\${args.clearText}"
        disabled="\${args.disabled}"
        doneText="\${args.doneText}"
        hourCycle="\${args.hourCycle}"
        locale="\${args.locale}"
        max="\${args.max}"
        min="\${args.min}"
        multiple="\${args.multiple}"
        name="\${args.name}"
        presentation="\${args.presentation}"
        readonly="\${args.readonly}"
        showClearButton="\${args.showClearButton}"
        showDefaultButtons="\${args.showDefaultButtons}"
        showDefaultTimeLabel="\${args.showDefaultTimeLabel}"
        showDefaultTitle="\${args.showDefaultTitle}"
        size="\${args.size}"
        useButton="\${args.useButton}"
      >
        <span slot="time-label">{{ args.timeLabel }}</span>
        <span slot="title">{{ args.title }}</span>
      </AtomDatetime>
    \`
  }),
  args: {
    ...DatetimeComponentArgs
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    setup() {
      const isDateEnabled = dateString => {
        const date = new Date(dateString);
        const utcDay = date.getUTCDay();
        return utcDay !== 0 && utcDay !== 6;
      };
      return {
        isDateEnabled
      };
    },
    template: \`
      <AtomDatetime :isDateEnabled="isDateEnabled" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.advancedDateConstraints
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomDatetime
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AtomDatetime
        highlightedDates="\${args.highlightedDates}"
        value="2025-01-01"
      />
    \`
  }),
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    setup() {
      const highlightedDates = dateString => {
        const date = new Date(dateString);
        const day = date.getUTCDate();
        if (day % 5 === 0) {
          return {
            textColor: '#800080',
            backgroundColor: '#ffc0cb'
          };
        }
        return undefined;
      };
      return {
        highlightedDates
      };
    },
    template: \`
      <AtomDatetime
        :highlightedDates="highlightedDates"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: DatetimeExampleTexts.highlightingSpecificDatesCallback
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    template: \`
      <AtomDatetime multiple="true" />
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    data() {
      return {
        selectedDates: [] as string[]
      };
    },
    template: \`
      <AtomDatetime rangeMode="true" />
    \`
  })
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    data() {
      return {
        defaultDates: getLast30DaysRange()
      };
    },
    template: \`
      <AtomDatetime rangeMode="true" :value="defaultDates" />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days).'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    data() {
      return {
        defaultDates: getLast30DaysRange()
      };
    },
    template: \`
      <AtomDatetime
        rangeMode="true"
        useButton="true"
        label="Selecionar período"
        datetimeId="datetime-range-with-button"
        cancelText="Cancelar"
        clearText="Limpar"
        doneText="Confirmar"
        locale="pt-BR"
        :value="defaultDates"
      >
        <span slot="date-target">Últimos 30 dias</span>
      </AtomDatetime>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    data() {
      return {
        summerDates: getLast30DaysRange()
      };
    },
    template: \`
      <AtomDatetime
        rangeMode="true"
        min="2025-01-01"
        :max="'\${todayISO}'"
        :value="summerDates"
        useButton="true"
        label="Select summer period"
        datetimeId="datetime-range-constrained"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates range mode with min/max constraints and default last 30 days selection (max is today).'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomDatetime,
      AtomCol,
      AtomGrid
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <AtomGrid>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma data"
            datetimeId="datetime-with-button-date"
            presentation="date"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma hora"
            datetimeId="datetime-with-button-time"
            presentation="time"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione um mês e ano"
            datetimeId="datetime-with-button-year-month"
            presentation="month-year"
            formatOptions="\${{
      date: {
        month: 'long',
        year: 'numeric'
      }
    }}"
          />
        </AtomCol>
        <AtomCol size="8">
          <AtomDatetime
            useButton="true"
            label="Selecione uma data"
            datetimeId="datetime-with-button-date"
            presentation="date"
          >
            <span slot="date-target">Custom Date</span>
          </AtomDatetime>
        </AtomCol>
      </AtomGrid>
    \`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    data() {
      return {
        workDates: ['2025-07-07', '2025-07-13']
      };
    },
    template: \`
      <AtomDatetime
        rangeMode="true"
        useButton="true"
        label="Período de trabalho"
        datetimeId="datetime-range-custom-text"
        cancelText="Cancelar"
        clearText="Limpar"
        doneText="Confirmar"
        locale="pt-BR"
        :value="workDates"
      >
        <span slot="date-target">7 dias selecionados</span>
      </AtomDatetime>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This example shows how to customize the button text to display "7 dias selecionados" instead of the default "7 days" text.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};var S=[`Default`,`AdvancedDateConstraints`,`HighlightingSpecificDatesArray`,`HighlightingSpecificDatesCallback`,`WithMultipleDates`,`UsingRangeMode`,`RangeModeWithDefaultDates`,`RangeModeWithDefaultDatesAndButton`,`RangeModeWithMinMax`,`UsingWithButton`,`RangeModeCustomButtonText`];export{u as AdvancedDateConstraints,l as Default,d as HighlightingSpecificDatesArray,f as HighlightingSpecificDatesCallback,x as RangeModeCustomButtonText,_ as RangeModeWithDefaultDates,v as RangeModeWithDefaultDatesAndButton,y as RangeModeWithMinMax,m as UsingRangeMode,b as UsingWithButton,p as WithMultipleDates,S as __namedExportsOrder,c as default};