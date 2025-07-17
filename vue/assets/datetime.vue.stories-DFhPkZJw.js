import{o as t,q as re,s as ie}from"./index-BA2KGP3l.js";import{C as r}from"./table-D060eKuu.js";import{w as le}from"./decorator-DFROgT0E.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-DN2UPSYz.js";import"./v4-CtRu48qb.js";const de={parameters:{docs:{description:{component:"Wrapper of Ionic Datetime component. Read the [Ionic documentation](https://ionicframework.com/docs/api/datetime) for more information about the available properties and possibilities."}},actions:{handles:["atomChange","atomFocus","atomBlur","atomCancel","atom-change","atom-focus","atom-blur","atom-cancel"]}},decorators:[le],argTypes:{label:{control:"string",description:"The text of label when `useButton` prop is true."},cancelText:{control:"text",description:"The text to display on the cancel button."},clearText:{control:"text",description:"The text to display on the clear button."},datetimeId:{control:"text",defaultValue:{summary:"datetime"},description:"The id of the datetime."},dayValues:{control:"text",description:"The days that should be shown."},disabled:{control:"boolean",description:"If true, the user cannot interact with the datetime."},doneText:{control:"text",description:"The text to display on the done button."},formatOptions:{control:"object",description:"The options to pass to the Intl.DateTimeFormat object.",defaultValue:{summary:'{ date: { month: "2-digit", day: "2-digit", year: "numeric" }, time: { hour: "2-digit", minute: "2-digit" } }'},table:{type:{summary:"Intl.DateTimeFormatOptions"}}},highlightedDates:{control:"function",description:"Used to apply custom text and background colors to specific dates.",table:{type:{summary:"[{ date: string; textColor: string; backgroundColor: string; }] | (date: string) => { color: string; backgroundColor: string; }"}}},hourCycle:{control:"select",defaultValue:"h23",options:["h12","h23"],description:"The hour cycle of the datetime."},hourValues:{control:"text",description:"The hours that should be shown."},isDateEnabled:{control:"function",description:"A function that receives a date string and returns a boolean indicating if the date is enabled.",table:{type:{summary:"(dateString: string) => boolean"}}},locale:{control:"text",defaultValue:"pt-BR",description:"The locale to use for the datetime."},max:{control:"text",description:"The maximum datetime allowed."},min:{control:"text",description:"The minimum datetime allowed."},minuteValues:{control:"text",description:"The minutes that should be shown."},monthValues:{control:"text",description:"The months that should be shown."},multiple:{control:"boolean",description:"If true, the datetime allows multiple values."},name:{control:"text",description:"The name of the control, which is submitted with the form data."},presentation:{control:"select",defaultValue:{summary:"date"},options:["date","time","month-year","month","year"],description:"The presentation of the datetime."},rangeMode:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is in range mode."},readonly:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the datetime is readonly."},showClearButton:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the clear button is shown."},showDefaultButtons:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default buttons are shown."},showDefaultTimeLabel:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default time label is shown."},showDefaultTitle:{control:"boolean",defaultValue:{summary:"false"},description:"If true, the default title is shown."},size:{control:"select",defaultValue:{summary:"fixed"},options:["fixed","cover"],description:"If cover, the datetime will expand to cover the full width of its container. If fixed, the datetime will have a fixed width."},title:{control:"text",description:"The title of the datetime. If not provided, the title will be hidden.",table:{category:r.SLOTS}},timeLabel:{control:"text",description:"The time label of the datetime. If not provided, the time label will be hidden.",table:{category:r.SLOTS}},dateTarget:{control:"text",description:"The date value displayed when used with useButton. If not provided, the default date format will be shown.",table:{category:r.SLOTS}},timeTarget:{control:"text",description:"The time value displayed when used with useButton. If not provided, the default time format will be shown.",table:{category:r.SLOTS}},useButton:{control:"boolean",description:"If true, the datetime uses a button."},value:{control:"text",description:"The value of the datetime."},yearValues:{control:"text",description:"The years that should be shown."}}},me={cancelText:"Cancelar",clearText:"Limpar",dayValues:void 0,disabled:!1,doneText:"Confirmar",hourCycle:"h23",hourValues:void 0,locale:"pt-BR",max:void 0,min:void 0,minuteValues:void 0,monthValues:void 0,multiple:!1,name:"datetime",presentation:"date",rangeMode:!1,readonly:!1,showClearButton:!1,showDefaultButtons:!1,showDefaultTimeLabel:!1,showDefaultTitle:!1,size:"fixed",useButton:!1,value:void 0,yearValues:void 0},x={advancedDateConstraints:"This story shows how to use the `isDateEnabled` property to disable weekends using the following logic: `\nconst date = new Date(dateString);\nconst utcDay = date.getUTCDay();\nreturn utcDay !== 0 && utcDay !== 6;`",highlightingSpecificDatesArray:"This story shows how to use the `highlightedDates` property with an array to highlight specific dates.",highlightingSpecificDatesCallback:`This story shows how to use the \`highlightedDates\` property with a callback function to highlight dates based on custom logic using the following logic: \`
const date = new Date(dateString);
const day = date.getUTCDate();
if (day % 5 === 0) {
  return {
    textColor: "#800080",
    backgroundColor: "#ffc0cb",
  };
}
return undefined;\``},fe={title:"Components/Datetime",...de},i={render:e=>({components:{AtomDatetime:t},setup(){return{args:e}},template:`
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
    `}),args:{...me}},l={render:()=>({components:{AtomDatetime:t},setup(){return{isDateEnabled:a=>{const n=new Date(a).getUTCDay();return n!==0&&n!==6}}},template:`
      <AtomDatetime :isDateEnabled="isDateEnabled" />
    `}),parameters:{docs:{description:{story:x.advancedDateConstraints}}}},d={render:e=>({components:{AtomDatetime:t},setup(){return{args:e}},template:`
      <AtomDatetime
        highlightedDates="${e.highlightedDates}"
        value="2025-01-01"
      />
    `}),args:{highlightedDates:[{date:"2025-01-05",textColor:"#800080",backgroundColor:"#ffc0cb"},{date:"2025-01-10",textColor:"#09721b",backgroundColor:"#c8e5d0"},{date:"2025-01-23",textColor:"rgb(68, 10, 184)",backgroundColor:"rgb(211, 200, 229)"}]},parameters:{docs:{description:{story:x.highlightingSpecificDatesArray}}}},m={render:()=>({components:{AtomDatetime:t},setup(){return{highlightedDates:a=>{if(new Date(a).getUTCDate()%5===0)return{textColor:"#800080",backgroundColor:"#ffc0cb"}}}},template:`
      <AtomDatetime
        :highlightedDates="highlightedDates"
      />
    `}),parameters:{docs:{description:{story:x.highlightingSpecificDatesCallback}}}},c={render:()=>({components:{AtomDatetime:t},template:`
      <AtomDatetime multiple="true" />
    `})},u={render:()=>({components:{AtomDatetime:t},data(){return{selectedDates:[]}},template:`
      <AtomDatetime rangeMode="true" />
    `})},o=()=>{const e=new Date,a=new Date;a.setDate(e.getDate()-30);const s=n=>n.toISOString().slice(0,10);return[s(a),s(e)]},p={render:()=>({components:{AtomDatetime:t},data(){return{defaultDates:o()}},template:`
      <AtomDatetime rangeMode="true" :value="defaultDates" />
    `}),parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with default start and end dates pre-selected (last 30 days)."}}}},h={render:()=>({components:{AtomDatetime:t},data(){return{defaultDates:o()}},template:`
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
    `}),parameters:{docs:{description:{story:"This example shows the Datetime component in range mode with button interface, default dates (last 30 days), and custom Portuguese text in the button."}}}},g={render:()=>({components:{AtomDatetime:t},data(){return{weekDates:o()}},template:`
      <AtomDatetime
        rangeMode="true"
        :value="weekDates"
        presentation="date"
      />
    `}),parameters:{docs:{description:{story:"This example demonstrates a week selection using range mode (last 30 days)."}}}},D={render:()=>({components:{AtomDatetime:t},data(){return{monthDates:o()}},template:`
      <AtomDatetime
        rangeMode="true"
        :value="monthDates"
        presentation="date"
      />
    `}),parameters:{docs:{description:{story:"This example shows a full month selection using range mode (last 30 days)."}}}},f={render:()=>({components:{AtomDatetime:t},data(){return{summerDates:o()}},template:`
      <AtomDatetime
        rangeMode="true"
        min="2025-01-01"
        max="2025-12-31"
        :value="summerDates"
        useButton="true"
        label="Select summer period"
        datetimeId="datetime-range-constrained"
      />
    `}),parameters:{docs:{description:{story:"This example demonstrates range mode with min/max constraints and default last 30 days selection."}}}},b={render:e=>({components:{AtomDatetime:t,AtomCol:ie,AtomGrid:re},setup(){return{args:e}},template:`
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
    `})},y={render:()=>({components:{AtomDatetime:t},data(){return{workDates:["2025-07-07","2025-07-13"]}},template:`
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
    `}),parameters:{docs:{description:{story:'This example shows how to customize the button text to display "7 dias selecionados" instead of the default "7 days" text.'}}}};var w,T,A;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var C,S,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var v,$,M;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(M=($=d.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var I,k,R;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var L,V,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    template: \`
      <AtomDatetime multiple="true" />
    \`
  })
}`,...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var z,W,U;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(W=u.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var O,G,H;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var P,_,F;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(_=h.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var j,q,J;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    data() {
      return {
        weekDates: getLast30DaysRange()
      };
    },
    template: \`
      <AtomDatetime
        rangeMode="true"
        :value="weekDates"
        presentation="date"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates a week selection using range mode (last 30 days).'
      }
    }
  }
}`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,N,Q;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomDatetime
    },
    data() {
      return {
        monthDates: getLast30DaysRange()
      };
    },
    template: \`
      <AtomDatetime
        rangeMode="true"
        :value="monthDates"
        presentation="date"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This example shows a full month selection using range mode (last 30 days).'
      }
    }
  }
}`,...(Q=(N=D.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        max="2025-12-31"
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
        story: 'This example demonstrates range mode with min/max constraints and default last 30 days selection.'
      }
    }
  }
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,oe,se;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const be=["Default","AdvancedDateConstraints","HighlightingSpecificDatesArray","HighlightingSpecificDatesCallback","WithMultipleDates","UsingRangeMode","RangeModeWithDefaultDates","RangeModeWithDefaultDatesAndButton","RangeModeWeekExample","RangeModeMonthExample","RangeModeWithMinMax","UsingWithButton","RangeModeCustomButtonText"];export{l as AdvancedDateConstraints,i as Default,d as HighlightingSpecificDatesArray,m as HighlightingSpecificDatesCallback,y as RangeModeCustomButtonText,D as RangeModeMonthExample,g as RangeModeWeekExample,p as RangeModeWithDefaultDates,h as RangeModeWithDefaultDatesAndButton,f as RangeModeWithMinMax,u as UsingRangeMode,b as UsingWithButton,c as WithMultipleDates,be as __namedExportsOrder,fe as default};
