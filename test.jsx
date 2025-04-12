import React, { useState } from 'react';
const InternshipPortfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [formData, setFormData] = useState({
        name: '', email: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const skills = ['React', 'JavaScript', 'Python', 'Data Analysis', 'Machine Learning', 'Git', 'Problem Solving'];
    const projects = [{
        title: "Machine Learning Recommendation System",
        description: "Built a collaborative filtering system recommending personalized content.",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        details: "Developed an advanced recommendation engine using collaborative filtering techniques, improving user engagement by 40%."
    }, {
        title: "Real-time Data Visualization Dashboard",
        description: "Created interactive web dashboard for tracking key performance metrics.",
        technologies: ["React", "D3.js", "Node.js"],
        details: "Implemented a responsive dashboard with real-time data updates and custom visualization components."
    }];
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({name: '', email: '', message: ''});
        }, 3000);
    };
    return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 font-sans">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
            {/* Navigation */}
            <nav className="bg-blue-50 p-4 flex justify-center space-x-6">
                {['About', 'Skills', 'Projects', 'Contact'].map(section => (<button
                    key={section}
                    onClick={() => setActiveSection(section.toLowerCase())}
                    className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-110 ${activeSection === section.toLowerCase() ? 'bg-blue-600 text-white scale-110' : 'hover:bg-blue-200'}`}
                >
                    {section}
                </button>))}
            </nav>
            {/* Content Sections */}
            <main className="p-8">
                {activeSection === 'about' && (<section className="text-center">
                    <h2 className="text-3xl font-bold mb-4 animate-bounce">Welcome to My Portfolio</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6 animate-fade-in">
                        Passionate technology enthusiast with a strong background in data science and web
                        development.
                        Committed to leveraging cutting-edge technologies to solve real-world challenges.
                    </p>
                    <button
                        onClick={() => window.open('/resume.pdf', '_blank')}
                        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
                    >
                        Download Resume
                    </button>
                </section>)}
                {activeSection === 'skills' && (<section>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map(skill => (<span
                            key={skill}
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${hoveredSkill === skill ? 'bg-blue-600 text-white scale-110' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                        >
                    {skill}
                  </span>))}
                    </div>
                    {hoveredSkill && (<p className="text-center mt-4 animate-fade-in">
                        Explore more about {hoveredSkill}!
                    </p>)}
                </section>)}
                {activeSection === 'projects' && (<section>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map(project => (<div
                            key={project.title}
                            onClick={() => setSelectedProject(project)}
                            className={`bg-blue-50 p-6 rounded-xl shadow-md cursor-pointer transition-all transform hover:scale-105 ${selectedProject === project ? 'border-4 border-blue-600' : 'hover:shadow-lg'}`}
                        >
                            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (<span
                                    key={tech}
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                >
                          {tech}
                        </span>))}
                            </div>
                        </div>))}
                    </div>
                    {selectedProject && (<div className="mt-6 p-4 bg-blue-100 rounded-lg animate-slide-in">
                        <h4 className="text-xl font-semibold mb-2">{selectedProject.title} Details</h4>
                        <p>{selectedProject.details}</p>
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                        >
                            Close Details
                        </button>
                    </div>)}
                </section>)}
                {activeSection === 'contact' && (<section>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Contact Me</h2>
                    {!submitted ? (<form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Your Name"
                            required
                            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="Your Email"
                            required
                            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            placeholder="Your Message"
                            required
                            className="w-full p-3 mb-4 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95"
                        >
                            Send Message
                        </button>
                    </form>) : (<div className="text-center text-green-600 animate-bounce">
                        Thank you! Your message has been submitted.
                    </div>)}
                </section>)}
            </main>
        </div>
    </div>);
};
export default InternshipPortfolio;