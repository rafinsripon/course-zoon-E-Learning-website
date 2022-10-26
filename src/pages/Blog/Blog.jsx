import React from 'react';

const Blog = () => {
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-00 dark:text-gray-100">
	        <div className="container p-6 mx-auto space-y-8 lg:px-24 md:px-6 px-2">
            <h2 className="text-6xl text-rose-400 mt-6 mb-16 font-bold">
                4 - Interviews Quetions
            </h2>
            <div className="bg-[#dad9d954] p-8 rounded-lg border-8 border-gray-200">
            <div className='text-slate-900'>
                <h2 className='text-3xl font-bold'>What Is Cors??</h2>
                <p className='text-base font-semibold mt-8'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request..</p>
                <p className='text-base font-semibold mt-6'>For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
            </div>
		    </div>
            <div className="bg-[#dad9d954] p-8 rounded-lg border-8 border-gray-200 mt-8">
            <div className='text-slate-900'>
                <h2 className='text-3xl font-bold'>Why are you using firebase?</h2>
                <p className='text-base font-semibold mt-8'>Firebase is Google’s Backend-as-a-Service (BAAS) solution for mobile app development. Originally, it was developed and launched in 2011 by Firebase Inc. and was later acquired by Google in 2014.</p>
                <h2 className='text-2xl font-bold text-slate-900 mb-3'>4 - Benefits of Using Google Firebase</h2>
                <li className='list-decimal font-semibold'>Google Analytics For Firebase: Google Analytics for Firebase allows you to track your users’ journey through realtime and custom reporting.</li>
                <li className='list-decimal font-semibold'>Realtime Database & Firestore: Firebase was originally developed to be a realtime database, and today that is still one of its key features.</li>
                <li className='list-decimal font-semibold'> Authentication: Most apps have some form of authentication feature that is necessary to identify the user. Thanks to Firebase’s easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes.</li>
                <li className='list-decimal font-semibold'>Crashlytics Firebase: Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality.</li>
                <h2 className='text-2xl font-bold mt-3 mb-3'> What other options do you have to implement authentication?</h2>
                <li className='list-disc font-semibold'>Biometrics Authentication.(BA)</li>
                <li className='list-disc font-semibold'>Token Authentication.</li>
                <li className='list-disc font-semibold'>Transaction Authentication.</li>
                <li className='list-disc font-semibold'>Multi-Factor Authentication (MFA)</li>
                <li className='list-disc font-semibold'>Out-of-Band Authentication (OOB)</li>
            </div>
		    </div>
            <div className="bg-[#dad9d954] p-8 rounded-lg border-8 border-gray-200 mt-8">
            <div className='text-slate-900'>
                <h2 className='text-3xl font-bold'>How does the private route work??</h2>
                <p className='text-base font-semibold mt-2'>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.</p>
            </div>
		    </div>
            <div className="bg-[#dad9d954] p-8 rounded-lg border-8 border-gray-200 mt-8">
                <div className='text-slate-900'>
                <h2 className='text-3xl font-bold'>What is Node.js?</h2>
                <p className='text-base font-semibold mt-2'>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
                <h2 className='text-3xl font-bold mt-2'>How does Node.js work?</h2>
                <p className='text-base font-semibold mt-2'>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>
	        </div>
        </section>
    );
};

export default Blog;