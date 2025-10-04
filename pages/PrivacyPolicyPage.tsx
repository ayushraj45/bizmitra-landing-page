
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose prose-lg mx-auto text-gray-700">
          <h1 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>This Privacy Policy describes how BizMitra ("we," "us," or "our") collects, uses, and discloses your information when you use our AI agentic chatbot service on WhatsApp (the "Service"). This Service is a product of <strong>Firstrun Digital Media</strong>.</p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-8">1. Information We Collect</h2>
          <p>We collect information necessary to provide and improve our Service. This includes:</p>
          <ul>
            <li><strong>WhatsApp Information:</strong> Your WhatsApp phone number and public profile information.</li>
            <li><strong>User Instructions and Data:</strong> Any instructions, FAQs, pricing information, and business-specific data you provide for the AI to use in conversations.</li>
            <li><strong>Conversation Data:</strong> The content of conversations between your clients and the BizMitra AI agent to operate and enhance the service.</li>
            <li><strong>Calendar Information:</strong> To schedule and reschedule appointments, we require access to your connected calendar to view free/busy slots. We do not store the details of your personal events.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">2. How We Use Your Information</h2>
          <p>Your information is used for the following purposes:</p>
          <ul>
            <li>To operate and maintain the Service.</li>
            <li>To enable the AI agent to respond to inquiries, schedule appointments, and perform its designated tasks.</li>
            <li>To personalize the AI's tone and responses according to your instructions.</li>
            <li>To communicate with you about your account and provide customer support.</li>
            <li>To monitor and analyze usage to improve the Service's performance and accuracy.</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">3. Data Storage and Security</h2>
          <p>We implement reasonable security measures to protect your information. However, no electronic storage or transmission over the internet is completely secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security. Data is stored on secure cloud servers, and access is strictly limited.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">4. AI and Data Processing</h2>
          <p>Our Service utilizes third-party AI models to process conversations. While we provide the AI with the context and instructions you set, the generation of responses is automated. We are not responsible for the underlying processing by these models but are committed to working with reputable AI providers.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">5. Your Rights</h2>
          <p>You have the right to access, update, or delete the information you have provided to us. You can manage most of your data directly through the Service's settings or by contacting us.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">6. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2 className="text-2xl font-bold text-brand-dark mt-8">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please <Link to="/contact" className="text-brand-highlight hover:underline">contact us</Link>. Or email us at: bizmitraai@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
