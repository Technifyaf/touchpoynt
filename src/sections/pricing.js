/** @jsx jsx */
import { useState } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import { rgba } from 'polished';

const monthly = [
  {
    id: 1,
    title: 'Basic Plan',
    subtitle: 'For startups',
    amount: 249.99 ,
    isRecommended: false,
    buttonText: 'Start free trial',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Single admin user account with full system privileges and access',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Weekly ratings and review updates, plus summerised monthly reports`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Manage and track daily service complaints, requests and reviews `,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Provide service updates to users via email, SMS or WhatsApp,`,
      },
      {
        id: 5,
        isAvailable: false,
        title: 'Automate responses for frequently asked questions',
      },
    ],
  },
  {
    id: 2,
    title: 'Premium',
    subtitle: 'For enterprises',
    amount: 319.99,
    isRecommended: true,
    buttonText: 'Subscribe Now',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Everything in the free plan, plus team management features',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Provide service updates to users via mail, SMS or WhatsApp,`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Automate responses for frequently asked questions`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Categorise and aggreate engagements to provide a unified response.`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Track and viusalize single and summerised customer analytics`,
      },
    ],
  },
];
const annual = [
  {
    id: 1,
    title: 'Free Plan',
    subtitle: 'For Small teams or office',
    amount: 250 * 12 - 600,
    isRecommended: false,
    buttonText: 'Start free trail',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Single admin user account with full system privileges and access',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Weekly ratings and review updates, plus summerised monthly reports`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Manage and track daily service complaints, requests and reviews `,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Provide service updates to users via email, SMS or WhatsApp,`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Download and print courses and exercises in PDF`,
      },
    ],
  },
  {
    id: 2,
    title: 'Premium',
    subtitle: 'For startup enterprise',
    amount: 320 * 12 - 768,
    isRecommended: true,
    buttonText: 'Subscribe Now',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Everything in the free plan, plus team management features',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Provide service updates to users via mail, SMS or WhatsApp,`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Automate responses for frequently asked questions`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Categorise and aggreate engagements to provide a unified response.`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Track and viusalize single and summerised customer analytics`,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
    if (plan === 'annual') {
      setPlan({
        ...plan,
        active: 'annual',
        pricingPlan: annual,
      });
    }
  };
  return (
    <Box
      as="section"
      id="pricing"
      sx={styles.section}
      variant="section.pricing"
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What deal suit you perfect"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span" className="discount">
            Save 20%
          </Text>
          <Button
            variant="text"
            onClick={() => handlePlan('monthly')}
            className={`${plan.active === 'monthly' ? 'active' : ''}`}
          >
            Monthly Plan
          </Button>
          <Button
            variant="text"
            onClick={() => handlePlan('annual')}
            className={`${plan.active === 'annual' ? 'active' : ''}`}
          >
            Annual Plan
          </Button>
        </Flex>
        <Grid sx={styles.priceWrapper}>
          {plan.pricingPlan.map((price, index) => (
            <PriceTable price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  heading: {
    mb: [60, null, null, 50],
  },
  priceSwitcher: {
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    border: `1px solid ${rgba('#fff', 0.2)}`,
    margin: ['0 auto 40px', null, null, '0 auto 50px'],
    maxWidth: 300,
    position: 'relative',
    p: 2,
    '.discount': {
      position: 'absolute',
      backgroundColor: 'primary',
      color: '#fff',
      minHeight: 25,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'unset',
      borderRadius: 25,
      right: 38,
      top: '-17px',
    },
    button: {
      minHeight: '48px',
      px: '25px',
      fontWeight: 500,
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  priceWrapper: {
    gap: 30,
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(2,1fr)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
