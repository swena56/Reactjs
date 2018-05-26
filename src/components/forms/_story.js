import React from 'react';
import { storiesOf } from '@storybook/react';
import LeaveComment from "./LeaveComment";
import Login from "./Login";

storiesOf('Forms', module)
    .add('Leave Comment', () => <LeaveComment/>)
    .add('Login', () => <Login/>)
;
