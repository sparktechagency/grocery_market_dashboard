import React from 'react';
import { Button } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';

const Subscriptions = () => {
    const pricingPlans = [
        {
            title: "Normal User",
            price: "$0.00",
            buttonText: "Current plan",
            active: false,
            features: [
                'Access to basic store management features',
                'Limited product listings',
                'Standard transaction fees',
                'Basic analytics and reports',
                'Standard customer support',
                'Limited promotional tools',
            ]
        },
        {
            title: "Plus User",
            price: "$10.00",
            buttonText: "Purchase",
            active: true,
            features: [
                'Unlimited product listings',
                'Lower transaction fees',
                'Advanced analytics and sales reports',
                'Priority customer support',
                'Custom store branding',
                'Featured store listing',
                'Exclusive promotional tools',
                'Automated inventory management',
                'Bulk product import/export',
                'Immediate cash-out with 1% fee',
            ]
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row justify-center gap-6 bg-gray-100 py-10">
            {pricingPlans.map((plan, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-between rounded-lg p-6 w-full max-w-sm border ${plan.active
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-black border-gray-200'
                        }`}
                >
                    <div>
                        <h2 className={`text-lg font-semibold mb-2 ${plan.active ? 'text-white' : 'text-gray-800'}`}>
                            {plan.title}
                        </h2>
                        <p className="text-3xl font-bold">
                            {plan.price}
                            <span className="text-base font-normal">/month</span>
                        </p>

                        <div className={`mt-4 mb-2 text-sm ${plan.active ? 'text-white' : 'text-gray-700'}`}>
                            Features are included
                        </div>
                        <hr className={`${plan.active ? 'border-white' : 'border-gray-300'} mb-4`} />

                        <ul className={`space-y-2 text-sm ${plan.active ? 'text-white' : 'text-gray-700'}`}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <CheckCircleFilled className="text-green-400 mt-1" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button
                        className={`mt-6 w-full font-semibold ${plan.active
                            ? 'bg-white text-green-600 hover:text-green-700 hover:!border-white'
                            : 'border-gray-400 text-black hover:border-black'
                            }`}
                        type={plan.active ? 'default' : 'default'}
                        disabled={!plan.active && plan.title === 'Normal User'}
                    >
                        {plan.buttonText}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default Subscriptions;
