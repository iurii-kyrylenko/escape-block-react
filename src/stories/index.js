import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import EscBlock from '../components/EscBlock'
import Board from '../components/Board'

storiesOf('EscBlock', module)
.add('API', () => (
  <EscBlock />
))

storiesOf('Markup', module)
.add('Board', () => (
  <Board />
))
