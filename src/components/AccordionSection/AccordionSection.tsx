import { Accordion, Section, Subheadline } from '@xelene/tgui'
import { useState } from 'react'
import styles from './AccordionSection.module.css'

export const AccordionSection = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Section header="Accordion section">
      <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
        <Accordion.Summary>History of accordion</Accordion.Summary>
        <Accordion.Content>
          <Subheadline level="2" className={styles.content}>
            This is Accordion.Content component, it is just body of Accordion.
          </Subheadline>
        </Accordion.Content>
      </Accordion>
    </Section>
  )
}
