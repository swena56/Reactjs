import React from 'react';
import { storiesOf } from '@storybook/react';
import DailyRoutine from "./daily-routine";

storiesOf('TimeLines', module)
    .add('Daily', () => <DailyRoutine/>)
    ;
