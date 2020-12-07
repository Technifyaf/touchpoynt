/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import chart from 'assets/images/icons/bar-chart.svg';
import smile from 'assets/images/icons/smile.svg';
import reward from 'assets/images/icons/gift.svg';
import user from 'assets/images/icons/user-plus.svg';

const data = [
  {
    id: 1,
    icon: user,
    title: 'Know your customer',
    description: `Keep a record of customer interaction and experience`,
  },
  {
    id: 2,
    icon: chart,
    title: 'Understand your customers',
    description: 'See your businesss from your customers` perfective',
  },
  {
    id: 3,
    icon: smile,
    title: 'Improve customer experience',
    description: 'Make data driven decisions and satisfy your customers',
  },
  {
    id: 4,
    icon: reward,
    title: 'Reward customer loyalty',
    description: 'Reward loyalty and incentivise forgiveness',
  },
 
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Benefits"
          description="Why you can't afford not to use this product"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};
