/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Is the custormer end service only available via mobile App ?',
    contents: (
      <div>
        No visit our webiste and create and log into your account, search for your desired company and start engaging.
      </div>
    ),
  },
  {
    title: 'App installation failed ?',
    contents: (
      <div>
       Take a snapshot and email it to support.touchpoynt@gmail.com
      </div>
    ),
  },
  {
    title: `Who rewards my loyalty?`,
    contents: (
      <div>
       Your providers reward your loyalty to their service and we reward loyalty to ourservice, 
      </div>
    ),
  },
  {
    title: `What do I get in rewards?`,
    contents: (
      <div>
        You can choose to aggregate your score points from all your providers and redeem them for cash or get in kind rewards such as discounts, gifts and bonuses.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="Do you have any quesiton"
          description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
