import React, { useState } from "react";

const About = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null); // Close if already open
    } else {
      setOpenSection(section); // Open the clicked section
    }
  };

  return (
    <section className="py-8 px-4  text-gray-800">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Our Notes App</h2>
      <p className="text-lg mb-6">
        Welcome to a secure and efficient note-taking app designed to keep your thoughts, ideas, and important
        information organized and accessible from anywhere. Our app combines modern web technologies for a smooth
        experience and ensures your data is safely stored and managed in the cloud.
      </p>
    </div>
  
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">How It Works:</h3>
      <ul className="space-y-4 text-gray-700">
        <li>
          <strong className="font-semibold text-gray-900">Frontend:</strong> Built using <span className="font-medium text-gray-900">React</span>, our frontend offers a user-friendly interface that makes it easy to create, edit, and manage your notes. With intuitive navigation, you can focus on what matters—your content.
        </li>
        <li>
          <strong className="font-semibold text-gray-900">Backend & Database:</strong> We use <span className="font-medium text-gray-900">Node.js</span> and <span className="font-medium text-gray-900">Express</span> on the backend, enabling fast and secure interactions with the server. All notes are stored safely in <span className="font-medium text-gray-900">MongoDB</span>, a robust and scalable NoSQL database designed to handle data efficiently.
        </li>
        <li>
          <strong className="font-semibold text-gray-900">Security in the Cloud:</strong> To ensure your notes are protected, our app uses secure storage solutions and robust encryption practices. By keeping your notes in the cloud, you can access them anytime, anywhere, while knowing that they’re safe from data loss or unauthorized access.
        </li>
      </ul>
  
      <p className="mt-6 text-lg text-gray-800">
        Whether you're jotting down quick reminders or storing detailed plans, our app is built to keep your notes organized, accessible, and secure. Start using the app today and experience a new level of convenience and peace of mind with your note storage.
      </p>
    </div>
  </section>
  
  );
};

export default About;
