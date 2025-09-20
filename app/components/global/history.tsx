"use client";
import React from "react";
import { useQuery } from '@tanstack/react-query';
import { api } from '../reactQuery/templateFetch';
import SectionHeading from "../reusable/SectionHeading";
import { Timeline } from "./timeline";

interface ApiHistoryItem {
  id: string;
  title: string;
  description: string;
  starting_year: number;
  ending_year: number;
}

interface HistoryApiResponse {
  message: string;
  data: ApiHistoryItem[];
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const defaultTimelineEvents = [
  {
    date: " 2019/20",
    title: "Creative Hub Founded",
    description:
      "Creative Hub founded with a vision to bring together artists and designers from around the world.",
  },
  {
    date: " 2024/25",
    title: "Creative Hub Reinitiated",
    description:
      "After a necessary pause, our community's resilient spirit reignited stronger than ever in 2024.",
  },
  {
    date: " 2025/26",
    title: "Creative Hub Revamp",
    description:
      "We proudly unveiled a bold new creative identity and platform to empower future creativity in 2025.",
  },
];

function useHistoryData() {
  return useQuery<HistoryApiResponse>({
    queryKey: ['history'],
    queryFn: () => api('/history'),
  });
}

export default function History() {
  const { data, isLoading, error } = useHistoryData();

  // Transform API data to component format
  const transformedData: TimelineEvent[] = data?.data ? data.data.map((item) => ({
    date: `${item.starting_year}/${item.ending_year.toString().slice(-2)}`,
    title: item.title,
    description: item.description,
  })) : defaultTimelineEvents;

  console.log('history data',data,error);

  // if (isLoading) {
  //   return <div>Loading history...</div>;
  // }

  // if (error) {
  //   return <div>Error loading history data</div>;
  // }

  return (
    <section id="history" className="py-12 px-4 max-w-6xl mx-auto">
      <SectionHeading
        text="How We Got Here"
        spanIndex={1}
      />
      <Timeline events={defaultTimelineEvents} />
    </section>
  );
}
