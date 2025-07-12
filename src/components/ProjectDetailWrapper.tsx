import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectsData';
import ProjectDetail from './ProjectDetail';

const ProjectDetailWrapper: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  return <ProjectDetail projects={projects} />;
};

export default ProjectDetailWrapper;
