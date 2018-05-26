import React from 'react';

import { storiesOf } from '@storybook/react';
import Calculator from "./calculator";

storiesOf('Calculator', module)
    .add('App', () => <Calculator/> )
;