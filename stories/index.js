import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import HostInfo from "../src/host-info";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Host Info', module)
//     .addDecorator(story => (
//     <div style={{backgroundColor: '#414042', height:'100%', width: '100%'}}>
//         {story()}
//     </div>
// ))
    .add('initial', () => <HostInfo/>);