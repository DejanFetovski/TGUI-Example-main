import React, { useState } from 'react'

import { AppRoot, FixedLayout, List, Tabbar } from '@xelene/tgui'
import { CellSection } from './components/CellSection'
import { FormSection } from './components/FormSection/FormSection'
import { BannerSection } from './components/BannerSection'
import { TimelineSection } from './components/TimelineSection/TimelineSection'
import { TooltipSection } from './components/TooltipSection/TooltipSection'
import { ModalSection } from './components/ModalSection/ModalSection'
import { AccordionSection } from './components/AccordionSection/AccordionSection'

import { Icon28Chat } from '@xelene/tgui/dist/icons/28/chat'
import { Icon28Devices } from '@xelene/tgui/dist/icons/28/devices'
import { Icon28Stats } from '@xelene/tgui/dist/icons/28/stats'

const tabs = [
  {
    id: 0,
    text: 'Chat',
    Icon: Icon28Chat,
  },
  {
    id: 1,
    text: 'Devices',
    Icon: Icon28Devices,
  },
  {
    id: 2,
    text: 'Stats',
    Icon: Icon28Stats,
  },
]

export const App = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id)
  return (
    <AppRoot platform="ios">
      <List>
        <CellSection />
        <AccordionSection />
        <FormSection />
        <BannerSection />
        <TimelineSection />
        <TooltipSection />
        <ModalSection />
      </List>
      <FixedLayout vertical="bottom">
        <Tabbar>
          {tabs.map(({ id, text, Icon }) => (
            <Tabbar.Item
              key={id}
              text={text}
              selected={id === currentTab}
              onClick={() => setCurrentTab(id)}
            >
              <Icon />
            </Tabbar.Item>
          ))}
        </Tabbar>
      </FixedLayout>
    </AppRoot>
  )
}
