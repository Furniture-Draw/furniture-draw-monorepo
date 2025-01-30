'use client';

import React from 'react';
import './features.css';
import { Navigation } from '@furniture-draw/navigation';

const steps = [
  {
    id: 1,
    title: 'Login',
    description: '',
    image: './images/login.avif',
  },
  {
    id: 2,
    title: 'Click Start Drawing',
    description: 'Click { image } button from the home page.',
    image: './images/clickStartDrawing.avif',
  },
  {
    id: 3,
    title: 'Sign in with Google',
    description:
      'First of all, you must be logged into your Google account. Then, click on the Sign in with Google button',
    image: './images/signinWithGoogle.avif',
  },
  {
    id: 4,
    title: 'choose an Account',
    description: 'Choose the account you will use.',
    image: './images/signinWithGoogle.avif',
  },
  {
    id: 5,
    title: 'Register',
    description: 'Fill in the required fields.',
    image: './images/signinWithGoogle.avif',
  },
  {
    id: 6,
    title: 'Start Project',
    description:
      'From the page that opens, you can create a new project or open or delete an existing project.',
    image: './images/signinWithGoogle.avif',
  },
  {
    id: 7,
    title: 'Create Project',
    description:
      'You can create a new project by entering the project name here.',
    image: './images/signinWithGoogle.avif',
  },
  {
    id: 8,
    title: 'Start Drawing',
    description:
      'Now that it has formed on the walls, we can start adding cabinets to our room.',
    image: './images/signinWithGoogle.avif',
  },
];

const renderDescription = (description: string, image: string | undefined) => {
  const parts = description.split('{ image }');
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <img src={image} alt="Inline Image" className="inline-image-class" />
      )}{' '}
    </React.Fragment>
  ));
};

const Features = () => {
  return (
    <div className="relative">
      <Navigation />
      <div className="container mx-auto p-6 mt-24">
        <h1 className="text-3xl font-bold mb-4">DOWNLOADING PROGRAM</h1>
        <p className="text-gray-700 mb-6">
          Things to consider when installing the program are explained below.
        </p>
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start space-x-4">
              <img
                src={step.image}
                alt={step.title}
                className="w-24 h-24 object-cover rounded-lg border"
              />
              <div>
                <h2 className="text-xl font-semibold">{step.title}</h2>
                <p className="text-gray-600">
                  {renderDescription(step.description, step.image)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
