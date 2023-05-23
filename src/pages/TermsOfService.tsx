import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="mb-4">
                These Terms of Service ("Terms") govern your use of our website. 
                By accessing or using our website, you agree to be bound by these Terms. 
                If you do not agree to these Terms, please do not use our website.
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
            <h3 className="text-xl font-bold mb-2">3. Limitation of Liability</h3>
            <p className="mb-4">
                We make no representations or warranties of any kind, express or implied, regarding the use or results of our website.
                In no event shall we be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of our website.
            </p>
            <h3 className="text-xl font-bold mb-2">4. Indemnification</h3>
            <p className="mb-4">
                You agree to indemnify and hold us harmless from any claims, liabilities, damages, losses, or expenses, including attorney's fees, arising out of your use of our website or violation of these Terms.
            </p>
            <h3 className="text-xl font-bold mb-2">5. Changes to these Terms</h3>
            <p className="mb-4">
                We reserve the right to modify or update these Terms at any time without prior notice.
                By continuing to use our website after any modifications or updates, you agree to be bound by the revised Terms.
            </p>
            <h3 className="text-xl font-bold mb-2">6. Contact Us</h3>
            <p className="mb-4">
                If you have any questions or concerns about these Terms of Service, please contact us at Bludogdiner@gmail.com.
            </p>
        </div>
    );
}

export default TermsOfService;
