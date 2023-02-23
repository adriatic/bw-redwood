import type { ComponentMeta, ComponentStory } from '@storybook/react'

import AggregatorLayout from './AggregatorLayout'

export const generated: ComponentStory<typeof AggregatorLayout> = (args) => {
  return <AggregatorLayout {...args} />
}

export default {
  title: 'Layouts/AggregatorLayout',
  component: AggregatorLayout,
} as ComponentMeta<typeof AggregatorLayout>
