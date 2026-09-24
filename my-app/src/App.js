import React, { useState } from 'react';

import { BpkCode } from '@skyscanner/backpack-web/bpk-component-code';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';

import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './App.scss';
import format from 'date-fns/format';

const getClassName = cssModules(STYLES);


const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
    {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
   {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
  },
    {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
   {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  }
  // ...
];

const App = () => {

const [currentMonth, setCurrentMonth] = useState(new Date());
const [selectedDate, setSelectedDate] = useState(null);





  return (
  <div className={getClassName('App')}>
    <header className={getClassName('App__header')}>
      <div className={getClassName('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={getClassName('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <main className={getClassName('App__main')}>
<div className={getClassName('App__calendar')}>
     <BpkCalendar
  id="flight-schedule-calendar"
  daysOfWeek={daysOfWeek}
  weekStartsOn={1}
  formatDateFull={formatDateFull}
  formatMonth={formatMonth}
  changeMonthLabel="Change month"
  nextMonthLabel="Next month"
  previousMonthLabel="Previous month"
  month={currentMonth}
  onMonthChange={(event, { month }) => setCurrentMonth(month)}
  onDateSelect={setSelectedDate}
   selectionConfiguration={{
    type: CALENDAR_SELECTION_TYPE.single,
    date: selectedDate,
  }}
/>
</div>

    </main>
  </div>
);
};

export default App;
