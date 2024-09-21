import React from 'react';
import lightLogo from './sigterm-logo.png';


const steps = [{
    text: 'Click the button below to get started'
}, {
    text: 'Be sure to check the box at the end of the process to allow the stack to apply properly.'
}, {
    text: 'Once the stack is completed, check the Outputs tab and make note of the Amazon Resource Names (ARN) as we will need this information in order to connect.'
}, {
    text: 'Provide us the ARN:'
}]

function App() {
    return (
        <div className="h-full bg-gray-900">
            <div className="h-full container mx-auto md:px-72 px-5">
                <img className="pt-5" src={lightLogo} width={250} height={250}
                     alt="Logo"/>
                <h3 className="mt-5 text-4xl text-white">AWS ACCESS</h3>

                <p className="mt-2 text-gray-400"><strong
                    className="font-semibold text-white">We makes use of cross-account IAM
                    roles in
                    order
                    to gain access and insight into your AWS account. The button below will take
                    you to
                    Amazon's Cloudformation service and offer to launch a new
                    stack. Cloudformation
                    stack
                    will
                    create the required IAM resources for us to manage your account
                    securely. </strong></p>
                <ul className="mt-4 max-w-md space-y-5 list-decimal list-inside text-gray-400">
                    {steps.map((step, key) => (
                        <li key={key}>
                            <span>{step.text}</span>
                        </li>))}

                </ul>

                <button type="button"
                        className="mt-5 text-left focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-orange-900">Launch
                    ReadOnly Stack
                </button>
                <br/>
                <code className="text-orange-400">arn:aws:iam::XXXXXXXXXX:role/SigtermMonitoringReadOnly</code>
                <br/>
                <button type="button"
                        className="mt-5 text-left focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-orange-900">Launch
                    Launch ReadOnly Without Data Stack
                </button>
                <br/>
                <code className="text-orange-400">arn:aws:iam::XXXXXXXXXX:role/SigtermMonitoringReadOnlyWithoutData</code>
                <br/>
                <button type="button"
                        className="mt-5 text-left focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:focus:ring-orange-900">Launch
                    Launch Admin Stack
                </button>
                <br/>
                <code className="text-orange-400">arn:aws:iam::XXXXXXXXXX:role/SigtermMonitoringAdmin</code>
            </div>
        </div>
    );
}

export default App;
