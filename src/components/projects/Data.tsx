import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Blog Automation Challenge',
    description:
      'Built an MVP in 48 hours for blog automation, leading to an internal hackathon win at GrowthJockey. Created automated pipelines for content generation and publishing workflows, demonstrating rapid prototyping skills.',
    techStack: ['Python', 'Data Pipelines', 'Automation Tools', 'APIs'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/uppalrahi',
      },
    ],
    images: [],
  },
  {
    title: 'Family Offices & Founder Research Dashboard',
    description:
      'Created a comprehensive BI dashboard analyzing 4,500+ YC startups to identify business synergies during my internship at Varidus. Provided actionable insights for investment decisions using advanced data visualization and analytics.',
    techStack: ['Tableau', 'Python', 'SQL', 'Data Analysis'],
    date: '2024',
    links: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/rahiuppal',
      },
    ],
    images: [],
  },
  {
    title: 'Traway',
    description:
      'Co-founded a student travel service generating ₹1.7M annual revenue. Built operations optimization systems and managed logistics for student travel experiences. Scaled from idea to profitable business during college.',
    techStack: ['Operations Optimization', 'Logistics', 'Business Development'],
    date: '2023',
    links: [],
    images: [],
  },
  {
    title: 'The Loud Kitchens',
    description:
      'Co-founded a food donation initiative that served 500+ people. Standardized kitchen processes working with TAJ chefs and built management systems for efficient operations. Combined social impact with operational excellence.',
    techStack: ['Operations Management', 'Process Optimization', 'Social Impact'],
    date: '2023',
    links: [],
    images: [],
  },
  {
    title: 'RemoteOps 300 Project',
    description:
      'Designed comprehensive workflows for client operations, improving efficiency and successfully pitched solutions to clients. Focused on automation and process improvement using data-driven approaches.',
    techStack: ['Project Management', 'Python', 'Process Automation'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/uppalrahi',
      },
    ],
    images: [],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery section removed - no images defined yet */}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Automation',
    title: 'Blog Automation Challenge',
    src: '/automation-preview.png',
    content: <ProjectContent project={{ title: 'Blog Automation Challenge' }} />,
  },
  {
    category: 'Business Intelligence',
    title: 'Family Offices & Founder Research Dashboard',
    src: '/dashboard-preview.png',
    content: <ProjectContent project={{ title: 'Family Offices & Founder Research Dashboard' }} />,
  },
  {
    category: 'Startup',
    title: 'Traway',
    src: '/traway-preview.png',
    content: <ProjectContent project={{ title: 'Traway' }} />,
  },
  {
    category: 'Social Impact',
    title: 'The Loud Kitchens',
    src: '/kitchen-preview.png',
    content: <ProjectContent project={{ title: 'The Loud Kitchens' }} />,
  },
  {
    category: 'Process Optimization',
    title: 'RemoteOps 300 Project',
    src: '/remoteops-preview.png',
    content: <ProjectContent project={{ title: 'RemoteOps 300 Project' }} />,
  },
];
