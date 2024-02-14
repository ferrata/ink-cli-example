import { Select } from '@inkjs/ui'
import { Box, Text, render } from 'ink'
import React from 'react'

import { MultiSelect } from './components/multi-select-multi-state/multi-select-multi-state.js'

function MultiSelectComponent({ selected }: { selected: string[] }) {
  return (
    <>
      <Box>
        <Text>Multi-select</Text>
        <Text> (Press space to select, enter to submit)</Text>
      </Box>
      <MultiSelect
        options={[
          { label: 'First', value: 'first' },
          { label: 'Second', value: 'second' },
          { label: 'Third', value: 'third' },
          { label: 'Fourth', value: 'fourth' },
          { label: 'Fifth', value: 'fifth' },
        ]}
        defaultValue={selected}
        onChange={value => {
          console.log(value)
        }}
        onSubmit={value => {
          console.log(value)
          render(<App />)
        }}
      />
    </>
  )
}

export default function App() {
  return (
    <Select
      options={[
        { label: 'Multi-select', value: 'multi-select' },
        { label: 'Exit', value: 'exit' },
      ]}
      onChange={value => {
        // console.log(value)

        if (value === 'multi-select') {
          render(<MultiSelectComponent selected={['second']} />)
        } else if (value === 'exit') {
          process.exit(0)
        }
      }}
    />
  )
}
