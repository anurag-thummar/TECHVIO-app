import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./Faq.css"

const Faq = () => {
    return (
        <>
            <div className="faq_section">
                <div className="container">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How long does a website redesign take?</Accordion.Header>
                            <Accordion.Body>
                                A website redesign usually takes between 6 and 12 weeks to complete.
                                The timeline depends on factors like the size of the site and complexity of features.
                                Initial discussions focus on understanding your goals and requirements.
                                The design phase includes wireframes, mockups, and approvals.
                                Development involves coding, content integration, and testing.
                                Timely feedback during each stage can help keep the process efficient.
                                Launch planning ensures the transition is smooth and error-free.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What happens if my site breaks?</Accordion.Header>
                            <Accordion.Body>
                                If your site breaks, we first identify the root cause of the issue.
                                Common problems include plugin conflicts, server errors, or security breaches.
                                Our team is available to resolve issues promptly and minimize downtime.
                                Regular maintenance can help prevent these issues before they arise.
                                We also recommend implementing backups for quick recovery.
                                Security measures, such as firewalls, protect your site from future attacks.
                                Ongoing support plans ensure your website stays reliable and secure.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is the difference between my CMS, DNS, hosting, FTP, etc.?</Accordion.Header>
                            <Accordion.Body>
                                Your **CMS** is the tool for managing website content, like WordPress.
                                The **DNS** converts your domain name into an IP address for users to access.
                                **Hosting** provides the server space where your website files are stored.
                                **FTP** is a method to upload or manage files on your hosting server.
                                Think of it as different parts of a system working together.
                                Understanding these components can help you manage your website better.
                                We guide clients through these concepts to simplify the process.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Can you handle ongoing maintenance?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we offer complete maintenance services to keep your site running smoothly.
                                These include regular updates, security patches, and performance optimization.
                                Maintenance also covers fixing bugs or issues as they arise.
                                We monitor your site to ensure uptime and prevent potential problems.
                                Backups are part of our maintenance to safeguard your data.
                                You can opt for monthly or yearly plans based on your needs.
                                Our goal is to give you peace of mind while focusing on your business.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Do you only create WordPress websites?</Accordion.Header>
                            <Accordion.Body>
                                No, we create websites using various platforms to suit your needs.
                                WordPress is popular for its flexibility and ease of use.
                                We also work with platforms like Shopify, Squarespace, and custom code.
                                The platform choice depends on your business goals and budget.
                                For e-commerce, we might suggest Shopify or WooCommerce.
                                For portfolios or blogs, Squarespace or WordPress could work best.
                                We help you decide based on the features you require.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Can I update the website myself once it’s built?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we design websites with user-friendliness in mind.
                                If your site is built on WordPress, updating content is simple.
                                We ensure the admin panel is intuitive and easy to navigate.
                                Training sessions are provided to help you manage your site.
                                You can edit text, upload images, and make minor changes easily.
                                For complex updates, we’re always here to assist.
                                Empowering you to manage your site is part of our service.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Faq;
