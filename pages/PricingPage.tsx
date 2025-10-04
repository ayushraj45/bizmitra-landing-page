
import React from 'react';
import CheckIcon from '../components/icons/CheckIcon';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    price: { monthly: '₹0000', annually: '₹00000' },
    description: 'For individuals and freelancers getting started.',
    features: [
      '500 conversations/month',
      'Automated FAQ responses',
      'Task management',
      'Basic analytics',
    ],
    mostPopular: false,
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '#',
    price: { monthly: '₹0000', annually: '₹00000' },
    description: 'For growing businesses that need more power.',
    features: [
      '2,000 conversations/month',
      'All Starter features, plus:',
      'Customizable bot personality',
      'Scheduling & rescheduling',
      'Priority email support',
    ],
    mostPopular: true,
  },
  // {
  //   name: 'Scale',
  //   id: 'tier-scale',
  //   href: '#',
  //   price: { monthly: '₹7,999', annually: '₹79,990' },
  //   description: 'For established businesses that need it all.',
  //   features: [
  //     'Unlimited WhatsApp Numbers',
  //     '10,000 conversations/month',
  //     'All Growth features, plus:',
  //     'API access',
  //     'Dedicated account manager',
  //     '24/7 phone support',
  //   ],
  //   mostPopular: false,
  // },
]

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

const PricingPage: React.FC = () => {
  const [frequency, setFrequency] = React.useState('monthly');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-highlight">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
            Pricing plans for teams of all sizes (Coming Soon)
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose a plan that's right for you and start saving time today.
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
            <legend className="sr-only">Payment frequency</legend>
            <label className={classNames(frequency === 'monthly' ? 'bg-brand-highlight text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1')}>
              <input type="radio" name="frequency" value="monthly" className="sr-only" onChange={() => setFrequency('monthly')} checked={frequency === 'monthly'} />
              <span>Monthly</span>
            </label>
            <label className={classNames(frequency === 'annually' ? 'bg-brand-highlight text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1')}>
              <input type="radio" name="frequency" value="annually" className="sr-only" onChange={() => setFrequency('annually')} checked={frequency === 'annually'} />
              <span>Annually (Save 15%)</span>
            </label>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-brand-highlight' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-brand-highlight' : 'text-brand-dark',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-brand-dark">
                  {tier.price[frequency as keyof typeof tier.price]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/{frequency === 'monthly' ? 'month' : 'year'}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-brand-highlight text-white shadow-sm hover:bg-brand-accent'
                    : 'text-brand-highlight ring-1 ring-inset ring-brand-highlight/50 hover:ring-brand-highlight',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-highlight'
                )}
              >
                Contact Us
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-brand-highlight" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingPage;
