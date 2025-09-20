"use client";
// import { useQuery } from '@tanstack/react-query';
// import { api } from '../reactQuery/templateFetch';
import TeamSection from './teamSection';

// interface ApiTeamMember {
//   id: string;
//   name: string;
//   designation: string;
//   role: string;
//   img_url: string;
//   is_lead: boolean;
//   starting_year: number;
//   ending_year: number;
//   github_url: string;
//   linkedin_url: string;
//   instagram_url: string;
// }

// interface TeamApiResponse {
//   data: ApiTeamMember[];
// }

interface TeamMember {
  id: number;
  name: string;
  role: string;
  subRole: string;
  image: string;
  socials: { instagram?: string; github?: string; linkedin?: string };
}

// function useTeamData() {
//   return useQuery<TeamApiResponse>({
//     queryKey: ['teams'],
//     queryFn: () => api('/teams/get-latest'),
//   });
// }

export default function TeamSectionWrapper() {
  // const { data, isLoading, error } = useTeamData();

  // Demo content - same as original
  const demoData: TeamMember[] = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    name: "Nirjala Shakya",
    role: "Creative Lead",
    subRole: "Backend Lead",
    image: "/images/mock-avatar.jpg",
    socials: { instagram: "#", github: "#", linkedin: "#" },
  }));

  // Transform API data to component format
  // const transformedData: TeamMember[] = data?.data ? data.data.map((member, index) => ({
  //   id: index + 1,
  //   name: member.name,
  //   role: member.designation,
  //   subRole: member.role,
  //   image: member.img_url,
  //   socials: {
  //     instagram: member.instagram_url,
  //     github: member.github_url,
  //     linkedin: member.linkedin_url,
  //   },
  // })) : [];

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error loading team data</div>;
  // }

  return <TeamSection teamData={demoData} />;
}