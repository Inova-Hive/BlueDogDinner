import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">About Blu Dog Diner</h2>
            <p className="mb-4">
       Robert Menendez is top-tier chef with a passion for bringing classic dishes to life using quality well sourced ingredients. His love for fine cuisine and sharing food with people is met through Blu Dog Diner. The spin on traditional hot dog styles from around the country has brought a unique perspective on "fast food" that is slow enough that your taste buds wont miss a beat!
            </p>
            <h3 className="text-xl font-bold mb-2">1. Intellectual Property</h3>
            <p className="mb-4">
                The content and materials available on our website, including text, graphics, images, logos, and trademarks, are the intellectual property of our company and are protected by applicable intellectual property laws.
                You may not use, copy, distribute, modify, or reproduce any of the content or materials without our prior written permission.
            </p>
            <h3 className="text-xl font-bold mb-2">2. User Conduct</h3>
            <p className="mb-4">
                By using our website, you agree to abide by the following rules of conduct:
                <ul className="list-disc list-inside">
                    <li>Do not engage in any unlawful or fraudulent activities.</li>
                    <li>Do not upload or transmit any harmful or offensive content.</li>
                    <li>Do not interfere with the functioning of our website or disrupt the experiences of other users.</li>
                    <li>Do not attempt to gain unauthorized access to our website or any related systems or networks.</li>
                </ul>
            </p>
   
        </div>
    );
}

export default TermsOfService;
