import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose prose-lg mx-auto text-gray-700">
          <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>Please read these Terms of Service ("Terms") carefully before using the BizMitra AI agent service (the "Service") operated by <strong>Firstrun Digital Media</strong> ("us," "we," or "our").</p>
          <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all users and others who access or use the Service.</p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-8">1. Description of Service</h2>
          <p>BizMitra provides an AI agentic chatbot on WhatsApp designed to assist businesses by automating responses to inquiries and managing schedules. The Service's performance is based on the information and instructions you provide.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">2. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>The accuracy and legality of all data, FAQs, and instructions you provide to the Service.</li>
            <li>Maintaining the confidentiality of your account information.</li>
            <li>Complying with all applicable laws and regulations, including those related to data privacy and communications (e.g., WhatsApp's Commerce Policy).</li>
            <li>You agree not to use the service for any illegal or unauthorized purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">3. Disclaimer of Warranties and Accuracy</h2>
          <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. While we strive for high accuracy, you acknowledge and agree that:</p>
          <ul>
            <li>The Service uses artificial intelligence, which may produce inaccurate, incomplete, or offensive information. We do not guarantee the accuracy, reliability, or completeness of any information provided by the AI agent.</li>
            <li>You are solely responsible for reviewing and verifying the AI's communications and actions (such as calendar bookings).</li>
            <li>We disclaim all warranties, express or implied, including but not limited to, implied warranties of merchantability and fitness for a particular purpose.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">4. Limitation of Liability</h2>
          <p>In no event shall Firstrun Digital Media, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
          <ul>
            <li>Your access to or use of or inability to access or use the Service.</li>
            <li>Any conduct or content of any third party on the Service.</li>
            <li>Any content obtained from the Service, including any errors or omissions in such content or actions taken based on it.</li>
            <li>Unauthorized access, use or alteration of your transmissions or content.</li>
          </ul>
          <p>Our liability shall be limited to the fullest extent permitted by applicable law, and in no event will our cumulative liability exceed the amount you paid for the Service in the three (3) months preceding the event giving rise to the claim.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">5. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">6. Contact Us</h2>
          <p>If you have any questions about these Terms, please <Link to="/contact" className="text-brand-highlight hover:underline">contact us</Link>. Or email us at: hello@bizmitra-ai.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
