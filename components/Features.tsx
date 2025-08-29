
import React from 'react';
import ShaderIcon from './icons/ShaderIcon';
import HologramIcon from './icons/HologramIcon';
import DepthMapIcon from './icons/DepthMapIcon';
import ExportIcon from './icons/ExportIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 border border-slate-700/80 rounded-xl p-6 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/20">
    <div className="flex items-center justify-center w-12 h-12 mb-4 bg-slate-700 rounded-lg text-cyan-400">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);


const Features: React.FC = () => {
  const features = [
    {
      icon: <ShaderIcon />,
      title: 'Geometric Shaders',
      description: 'Apply complex, generative shaders to create mesmerizing wireframes, voxel effects, and procedural textures.',
    },
    {
      icon: <HologramIcon />,
      title: 'Holographic FX',
      description: 'Add authentic holographic effects like scan lines, chromatic aberration, and digital glitches for a futuristic feel.',
    },
    {
      icon: <DepthMapIcon />,
      title: 'AI Depth Mapping',
      description: 'Our advanced AI generates accurate depth maps from single images, enabling true volumetric reconstruction.',
    },
    {
      icon: <ExportIcon />,
      title: 'Multiple Export Formats',
      description: 'Download your volumetric videos as MP4, GIF, or formats compatible with popular 3D software and game engines.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Powerful Features</h2>
          <p className="text-gray-400 mt-4">Everything you need to create next-generation visuals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
