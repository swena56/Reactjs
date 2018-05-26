import React from 'react';

import { storiesOf } from '@storybook/react';

import BingoBoard from "./BingoBoard";

storiesOf('Bingo', module)
    .add('App', () => <BingoBoard/> )
;