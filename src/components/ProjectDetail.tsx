import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Globe, Smartphone, Cpu, Database, Code, Star, ExternalLink, Github, Calendar, Clock, Users, ChevronRight } from 'lucide-react';
import SEO from './SEO';
import { Project } from '../data/projectsData';

interface ProjectDetailProps {
  projects: Project[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id.toString() === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Project not found</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">The project you're looking for doesn't seem to exist.</p>
          <Link
            to="/projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'website':
      case 'web-app':
        return Globe;
      case 'mobile-app':
        return Smartphone;
      case 'desktop-app':
        return Code;
      case 'iot':
        return Cpu;
      case 'ai-ml':
        return Database;
      default:
        return Code;
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <SEO
        title={`${project.title} | STEM CS Club Projects`}
        description={project.description}
        keywords={project.tags.join(', ')}
        image={project.image}
        url={`https://stemcsclub.org/projects/${projectId}`}
      />
      
      {/* Breadcrumb */}
      <div className="bg-white mt-16 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center mr-3 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back
            </button>
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">
              {project.title}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            {/* Project Image */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white/20"
              >
                <img 
                  src={project.image || '/imgs/projects-hero.png'}
                  alt={project.title}
                  className="w-full h-auto object-cover aspect-video"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" /> Featured
                  </div>
                )}
                <div className={`absolute top-4 left-4 ${getDifficultyColor(project.difficulty)} px-3 py-1 rounded-full text-xs font-bold`}>
                  {project.difficulty}
                </div>
              </motion.div>
            </div>
            
            {/* Project Info */}
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                  <CategoryIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-blue-300 font-medium">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1).replace('-', ' ')}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h1>
              
              <p className="text-lg text-slate-300 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-300 mr-2" />
                  <span className="text-white">{formattedDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-300 mr-2" />
                  <span className="text-white">{project.completionTime}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-300 mr-2" />
                  <span className="text-white">
                    {project.members ? `${project.members.length} Members` : '1 Member'}
                  </span>
                </div>
              </div>
              
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Long Description */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Project Overview</h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p>{project.longDescription || project.description}</p>
                </div>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((item, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        {item.type === 'image' ? (
                          <img
                            src={item.url}
                            alt={item.caption}
                            className="w-full h-auto object-cover aspect-video"
                          />
                        ) : (
                          <video
                            src={item.url}
                            controls
                            className="w-full h-auto object-cover aspect-video"
                          />
                        )}
                        <div className="p-3 bg-slate-50 dark:bg-slate-700">
                          <p className="text-sm text-slate-600 dark:text-slate-300">{item.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Outcomes */}
              {project.learningOutcomes && project.learningOutcomes.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Learning Outcomes</h2>
                  <ul className="space-y-3">
                    {project.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Challenges Faced</h2>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center text-red-600 dark:text-red-300 font-medium text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Future Plans */}
              {project.futurePlans && project.futurePlans.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Future Development Plans</h2>
                  <ul className="space-y-4">
                    {project.futurePlans.map((plan, index) => (
                      <li key={index} className="flex">
                        <div className="mr-3 flex-shrink-0">
                          <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-300 font-medium text-sm">
                            {index + 1}
                          </div>
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Team Members */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Project Team
                </h3>
                <div className="space-y-4">
                  {project.members ? (
                    project.members.map((member) => (
                      <div key={member.id} className="flex items-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            {member.name}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex items-center">
                      <img
                        src={project.authorImage}
                        alt={project.author}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          {project.author}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Lead Developer
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Tags */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              {project.testimonials && project.testimonials.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Testimonials
                  </h3>
                  <div className="space-y-6">
                    {project.testimonials.map((testimonial, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4">
                        <blockquote className="italic text-slate-600 dark:text-slate-400 mb-3">
                          "{testimonial.text}"
                        </blockquote>
                        <div className="flex items-center">
                          {testimonial.image && (
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-8 h-8 rounded-full object-cover mr-3"
                            />
                          )}
                          <div>
                            <p className="font-medium text-slate-900 dark:text-white">
                              {testimonial.author}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .filter((_, index) => index < 3)
              .map(p => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                      {p.description}
                    </p>
                    <Link
                      to={`/projects/${p.id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      View Project <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
