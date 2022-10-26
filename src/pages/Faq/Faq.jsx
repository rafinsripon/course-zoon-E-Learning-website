import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/Item/Item';

const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center">
            <Link to="/#" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </Link>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative"></span>
                </span>{' '}
                Do you have any Question?
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Loaded with awesome features like Documentation, Knowledgebase, Forum & more!Skive off he lost his bottle the little rotter absolutely bladdered in my flat William no biggie, gormless me old mucker such a fibber David bum bag so I said cack.!
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Item title="how to deploy react app?">
              For your React app, you'll have to drag and drop the build folder onto the Netlify Dashboard. Run npm run build beforehand to deploy the latest build. You can also connect GitHub, GitLab, or Bitbucket, depending on where your project is stored. This allows automatic deployment whenever you push your changes.
            </Item>
            <Item title="How can start Web development?">
              How can I start learning web development? Is it easy? And how can I keep up with the latest web designing technologies?
                These are the questions that appear in every beginner’s mind. There is also confusion between web designing and web development, but we’ll talk about web development
                It totally depends on how much you are interested in and are serious about it. if you desperately wanted to learn then you can easily be an expert on it. There’s nothing like it’s so hard or something like it’s so difficult to design websites like we use or look around our day-to-day life. e.g: Facebook, Google, Amazon, Flipkart, Snapdeal, and many more.
            </Item>
            <Item title="How to improve programming speed?">
            One of the most important thing when speeding up your programming speed is fully using the keyboard shortcuts and the hot keys of all the necessary coding application. It would be hard to change the habit in the beginning, but when you are starting familiar with all the shortcuts and hot keys, you will find that you almost can do everything without the mouse. When someone else saw you programming, they would think you are a professional programmer because the way you do programming are in another level.
            </Item>
            <Item title="How to Learn Programming?">
            One way many people start learning to code is by picking a popular programming language and jumping in head first with no direction. This could take the form of an online coding course, a tutorial project, or a random book purchase on a specific topic.Rarely do prospective developers start with a roadmap – a bird's eye view of the coding world that outlines a set of relevant programming concepts, languages, and tools that almost 100% of developers use every day.
            </Item>
          </div>
        </div>
      </div>
    );
};

export default Faq;