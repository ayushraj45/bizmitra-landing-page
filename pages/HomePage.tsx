import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClockIcon from '../components/icons/ClockIcon';
import TargetIcon from '../components/icons/TargetIcon';
import HeartIcon from '../components/icons/HeartIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import MoonIcon from '../components/icons/MoonIcon';

const CATCHPHRASES = [
  "No more CRM. No more chasing leads.",
  "Your time, now uninterrupted.",
  "New leads? BizMitra handles them — instantly.",
  "Reschedules? Done in chat — no pain."
];

const CatchphraseCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % CATCHPHRASES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 flex items-center justify-center">
      <div key={index} className="animate-fade-in text-center">
        <p className="text-lg md:text-xl text-gray-600">"{CATCHPHRASES[index]}"</p>
      </div>
    </div>
  );
};


const HeroSection: React.FC = () => (
  <div className="relative isolate overflow-hidden bg-brand-light">
    <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:py-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl animate-fade-in-up">
          Your Trusted Business Friend on WhatsApp
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          No more endless questions. No more scheduling stress. Let your WhatsApp do the heavy lifting so you can do what you love.
        </p>
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <CatchphraseCarousel />
        </div>
        <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link
            to="/pricing"
            className="rounded-md bg-brand-highlight px-5 py-3 text-base font-semibold text-white shadow-lg hover:bg-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-transform transform hover:scale-105"
          >
            Bring BizMitra to WhatsApp
          </Link>
        </div>
      </div>
       <div className="mx-auto mt-16 w-full max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:flex-1">
        <img 
            src="BizMitra1.png" 
            alt="App screenshot" 
            width={1000}
            height={800}
            className="w-full h-auto "
        />
      </div>
    </div>
  </div>
);

const benefits = [
  {
    icon: ClockIcon,
    title: 'Save Hours Every Day',
    description: 'Say goodbye to answering the same questions over and over. BizMitra responds instantly to FAQs, books and reschedules sessions automatically, and filters out unnecessary back‑and‑forth so you don’t have to.'
  },
  {
    icon: TargetIcon,
    title: 'Focus on What You Love',
    description: 'No more juggling calendars, rescheduling headaches, or repetitive explanations. BizMitra frees you to focus on coaching, consulting, teaching, or simply enjoying life.'
  },
  {
    icon: HeartIcon,
    title: 'Build Trust with Clients, Effortlessly',
    description: 'Conversations feel friendly and personal. You give BizMitra the tone, brand voice and instructions you prefer—and it delivers consistently, day or night.'
  },
  {
    icon: CalendarIcon,
    title: 'Automated Scheduling & Rescheduling',
    description: 'Clients ask for a slot, cancel, or want a new time? BizMitra checks your free slots, rebooks or reschedules immediately all within WhatsApp — no manual intervention.'
  },
  {
    icon: MoonIcon,
    title: 'Available 24/7 without you being awake',
    description: 'Busy schedule? No problem. BizMitra engages leads even when you’re offline, capturing interest and booking sessions while you sleep.'
  },
];

const BenefitsSection: React.FC = () => (
  <div id="benefits" className="bg-white py-24 sm:py-32 hash-link-offset">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-brand-highlight">Why BizMitra?</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Benefits to You</p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-brand-dark">
                    <benefit.icon className="h-5 w-5 flex-none text-brand-highlight" aria-hidden="true" />
                    {benefit.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                    <p className="flex-auto">{benefit.description}</p>
                </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

const howItWorksSteps = [
    { name: 'Connect', description: 'Connect your WhatsApp Business number and calendar.' },
    { name: 'Personalize', description: 'Set BizMitra’s tone and response style to what suits YOUR brand' },
    { name: 'Instruct', description: 'Add FAQs, service info, pricing or let BizMitra ask qualifying questions.' },
    { name: 'Go Live', description: 'BizMitra goes live: answers queries, books and reschedules, escalates only complex cases.' },
    { name: 'Review', description: 'You review summaries when convenient: no real‑time stress.' },
    { name: 'Tasks', description: 'BizMitra creates well defined tasks for you, allowing you to be on top your business.' },
];

const HowItWorksSection: React.FC = () => (
    <div className="bg-brand-light py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-brand-highlight">How It Works</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Simple, Clear, Human</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-24 lg:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div>
                <dl className="space-y-10">
                    {howItWorksSteps.map((step, index) => (
                        <div key={step.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-brand-dark">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-highlight">
                                   <span className="text-white font-bold">{index + 1}</span>
                                </div>
                                {step.name}
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-700">{step.description}</dd>
                        </div>
                    ))}
                </dl>
              </div>
              <div className="flex items-center justify-center">
                 <img src="howitworks.png" alt="How BizMitra Works" className="w-full max-w-md rounded-xl"/>
              </div>
            </div>
        </div>
    </div>
);

const ImagineSection: React.FC = () => (
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Imagine a Day with BizMitra</h2>
      <blockquote className="mt-8 text-lg leading-8 text-gray-800 border-l-4 border-brand-highlight pl-6 italic">
        <p>"A lead messages at 8 PM with questions. BizMitra answers instantly, books a slot next week, and sends a calendar invite. No replies needed from you. No missed opportunity. No chaos."</p>
      </blockquote>
      <p className="mt-6 text-lg leading-8 text-gray-700">
        You finish your coaching or gym session, check updates at your leisure. The day and your inbox stays calm.
      </p>
    </div>
  </div>
);

const audience = [
  {
    name: 'Therapists & Coaches',
    description: 'Get more time with clients, less inbox overload.',
    image: "therapist.png"
  },
  {
    name: 'Fitness Trainers & Yoga Gurus',
    description: 'Avoid scheduling confusion and rescheduling drama.',
    image: 'trainers.png'
  },
  {
    name: 'Consultants & Freelancers',
    description: 'Win without juggling dozens of client chats.',
    image: 'consultants.png'
  }
];

const TargetAudienceSection: React.FC = () => (
  <div id="get-started" className="bg-brand-light py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-brand-highlight">Perfect for Freelancers, Agencies & Service Pros In India</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">(But powerful for anyone.)</p>
      </div>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-12 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
        {audience.map((person) => (
          <div key={person.name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
              <img className="h-58 w-full object-cover" src={person.image} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-xl font-semibold text-brand-dark">{person.name}</p>
                <p className="mt-3 text-base text-gray-700">{person.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ImagineSection />
      <TargetAudienceSection />
    </div>
  );
};

export default HomePage;
