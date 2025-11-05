import{o as t,q as y,s as x}from"./index-D9gi79PD.js";import{C as s}from"./table-D060eKuu.js";import{w}from"./decorator-DdMupD64.js";import"./vue.esm-bundler-X36X5nj_.js";import"./iframe-DdQc9Zgb.js";import"./v4-CtRu48qb.js";const T={parameters:{docs:{description:{component:"Wrapper of Ionic Datetime component. Read the [Ionic documentation](https://ionicframework.com/docs/api/datetime) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atom-change","atom-focus","atom-blur","atom-cancel"]}},decorators:[w],argTypes:{label:{control:"string",description:"The text of label when `useButton` prop is true."},cancelText:{control:"text",description:"The text to display on the cancel button."},clearText:{control:"text",description:"The text to display on the clear button."},datetimeId:{control:"text",defaultValue:{summary:"datetime"},description:"The id of the datetime."},dayValues:{control:"text",description:"The days that should be shown."},disabled:{control:"boolean",description:"If true, the user cannot interact with the datetime."},doneText:{control:"text",description:"The text to display on the done button."},formatOptions:{control:"object",description:"The options to pass to the Intl.DateTimeFormat object.",defaultValue:{summary:'{ date: { month: "2-digit", day: "2-digit", year: "numeric" }, time: { hour: "2-digit", minute: "2-digit" } }'},table:{type:{summary:"Intl.DateTimeFormatOptions"}}},highlightedDates:{control:"function",description:"Used to apply custom text and background colors to specific dates.",table:{type:{summary:"[{ date: string; textColor: string; backgroundColor: string; }] | (date: string) => { color: string; backgroundColor: string; }"}}},hourCycle:{control:"select",defaultValue:"h23",options:["h12","h23"],description:"The hour cycle of the datetime."},hourValues:{control:"text",description:"The hours that should be shown."},isDateEnabled:{control:"function",description:"A function that receives a date string and returns a boolean indicating if the date is enabled.",table:{type:{summary:"(dateString: string) => boolean"}}},locale:{control:"text",defaultValue:"pt-BR",description:"The locale to use for the datetime."},max:{control:"text",description:"The maximum datetime allowed."},min:{control:"text",description:"The minimum datetime allowed."},minuteValues:{control:"text",description:"The minutes that should be shown."},monthValues:{control:"text",description:"The months that should be shown."},multiple:{control:"boolean",description:"If true, the datetime allows multiple values."},name:{control:"text",description:"The name of the control, which is submitted with the form data."},presentation:{control:"select",defaultValue:{summary:"date"},options:["date","time","month-year","month","year"],description:"The presentation of the datetime."},rangeMode:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is in range mode."},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is readonly."},showClearButton:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the clear button is shown."},showDefaultButtons:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default buttons are shown."},showDefaultTimeLabel:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default time label is shown."},showDefaultTitle:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default title is shown."},size:{control:"select",defaultValue:{summary:"fixed"},options:["fixed","cover"],description:"If cover, the datetime will expand to cover the full width of its container. If fixed, the datetime will have a fixed width."},title:{control:"text",description:"The title of the datetime. If not provided, the title will be hidden.",table:{category:s.SLOTS}},timeLabel:{control:"text",description:"The time label of the datetime. If not provided, the time label will be hidden.",table:{category:s.SLOTS}},dateTarget:{control:"text",description:"The date value displayed when used with useButton. If not provided, the default date format will be shown.",table:{category:s.SLOTS}},timeTarget:{control:"text",description:"The time value displayed when used with useButton. If not provided, the default time format will be shown.",table:{category:s.SLOTS}},useButton:{control:"boolean",description:"If true, the datetime uses a button."},value:{control:"text",description:"The value of the datetime."},yearValues:{control:"text",description:"The years that should be shown."}}},C={cancelText:"Cancelar",clearText:"Limpar",dayValues:void 0,disabled:!1,doneText:"Confirmar",hourCycle:"h23",hourValues:void 0,locale:"pt-BR",max:void 0,min:void 0,minuteValues:void 0,monthValues:void 0,multiple:!1,name:"datetime",presentation:"date",rangeMode:!1,readonly:!1,showClearButton:!1,showDefaultButtons:!1,showDefaultTimeLabel:!1,showDefaultTitle:!1,size:"fixed",useButton:!1,value:void 0,yearValues:void 0},f={advancedDateConstraints:"This story shows how to use the `isDateEnabled` property to disable weekends using the following logic: `\nconst date = new Date(dateString);\nconst utcDay = date.getUTCDay();\nreturn utcDay !== 0 && utcDay !== 6;`",highlightingSpecificDatesArray:"This story shows how to use the `highlightedDates` property with an array to highlight specific dates.",highlightingSpecificDatesCallback:`This story shows how to use the \`highlightedDates\` property with a callback function to highlight dates based on custom logic using the following logic: \`
const date = new Date(dateString);
const day = date.getUTCDate();
if (day % 5 === 0) {
  return {
    textColor: "#800080",
    backgroundColor: "#ffc0cb",
  };
}
return undefined;\``},k={title:"Components/Datetime",...T},r={render:e=>({components:{AtomDatetime:t},setup(){return{args:e}},template:`
      <AtomDatetime
        cancelText="${e.cancelText}"
        clearText="${e.clearText}"
        disabled="${e.disabled}"
        doneText="${e.doneText}"
        hourCycle="${e.hourCycle}"
        locale="${e.locale}"
        max="${e.max}"
        min="${e.min}"
        multiple="${e.multiple}"
        name="${e.name}"
        presentation="${e.presentation}"
        readonly="${e.readonly}"
        showClearButton="${e.showClearButton}"
        showDefaultButtons="${e.showDefaultButtons}"
        showDefaultTimeLabel="${e.showDefaultTimeLabel}"
        showDefaultTitle="${e.showDefaultTitle}"
        size="${e.size}"
        useButton="${e.useButton}"
      >
        <span slot="time-label">{{ args.timeLabel }}</span>
        <span slot="title">{{ args.title }}</span>
      </AtomDatetime>
    `}),args:{...C}},i={render:()=>({components:{AtomDatetime:t},setup(){return{isDateEnabled:a=>{const o=new Date(a).getUTCDay();return o!==0&&o!==6}}},template:`
      <AtomDatetime :isDateEnabled="isDateEnabled" />
    `}),parameters:{docs:{description:{story:f.advancedDateConstraints}}}},l={render:e=>({components:{AtomDatetime:t},setup(){return{args:e}},template:`
      <AtomDatetime
        highlightedDates="${e.highlightedDates}"
        value="2025-01-01"
      />
    `}),args:{highlightedDates:[{date:"2025-01-05",textColor:"#800080",backgroundColor:"#ffc0cb"},{date:"2025-01-10",textColor:"#09721b",backgroundColor:"#c8e5d0"},{date:"2025-01-23",textColor:"rgb(68, 10, 184)",backgroundColor:"rgb(211, 200, 229)"}]},parameters:{docs:{description:{story:f.highlightingSpecificDatesArray}}}},d={render:()=>({components:{AtomDatetime:t},setup(){return{highlightedDates:a=>{if(new Date(a).getUTCDate()%5===0)return{textColor:"#800080",backgroundColor:"#ffc0cb"}}}},template:`
      <AtomDatetime
        :highlightedDates="highlightedDates"
      />
    `}),parameters:{docs:{description:{story:f.highlightingSpecificDatesCallback}}}},m={render:()=>({components:{AtomDatetime:t},template:`
      <AtomDatetime multiple="true" />
    `})},c={render:()=>({components:{AtomDatetime:t},data(){return{selectedDates:[]}},template:`
      <AtomDatetime rangeMode="true" />
    `})},b=()=>{const e=new Date,a=new Date;a.setDate(e.getDate()-30);const n=o=>o.toISOString().slice(0,10);return[n(a),n(e)]},A=new Date().toISOString().slice(0,10),u={render:()=>({components:{AtomDatetime:t},data(){return{defaultDates:b()}},template:`
      <AtomDatetime rangeMode="true" :value="defaultDates" />
    `}),parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days)."}}}},p={render:()=>({components:{AtomDatetime:t},data(){return{defaultDates:b()}},template:`
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
    `}),parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button."}}}},h={render:()=>({components:{AtomDatetime:t},data(){return{summerDates:b()}},template:`
      <AtomDatetime
        rangeMode="true"
        min="2025-01-01"
        :max="'${A}'"
        :value="summerDates"
        useButton="true"
        label="Select summer period"
        datetimeId="datetime-range-constrained"
      />
    `}),parameters:{docs:{description:{story:"This example demonstrates range mode with min/max constraints and default last 30 days selection (max is today)."}}}},g={render:e=>({components:{AtomDatetime:t,AtomCol:x,AtomGrid:y},setup(){return{args:e}},template:`
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
            formatOptions="${{date:{month:"long",year:"numeric"}}}"
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
    `})},D={render:()=>({components:{AtomDatetime:t},data(){return{workDates:["2025-07-07","2025-07-13"]}},template:`
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
    `}),parameters:{docs:{description:{story:'This example shows how to customize the button text to display "7 dias selecionados" instead of the default "7 days" text.'}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    template: \`
      <AtomDatetime multiple="true" />
    \`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const L=["Default","AdvancedDateConstraints","HighlightingSpecificDatesArray","HighlightingSpecificDatesCallback","WithMultipleDates","UsingRangeMode","RangeModeWithDefaultDates","RangeModeWithDefaultDatesAndButton","RangeModeWithMinMax","UsingWithButton","RangeModeCustomButtonText"];export{i as AdvancedDateConstraints,r as Default,l as HighlightingSpecificDatesArray,d as HighlightingSpecificDatesCallback,D as RangeModeCustomButtonText,u as RangeModeWithDefaultDates,p as RangeModeWithDefaultDatesAndButton,h as RangeModeWithMinMax,c as UsingRangeMode,g as UsingWithButton,m as WithMultipleDates,L as __namedExportsOrder,k as default};
