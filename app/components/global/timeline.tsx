import React from "react";
import { cn } from '../../lib/utils';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  location?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn("relative max-w-4xl mx-auto py-8", className)}>
      {/* Vertical line: start at first dot, end at last dot */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-0.5"
        style={{
          backgroundColor: "#0797A0",
          top: 'calc(4.5rem + 20px)', // 4.5rem (card padding+margin) + 24px (half card/dot height)
          bottom: 'calc(4.5rem + 24px)',
        }}
      />

      {events.map((event, index) => {
        const isLeft = index % 2 != 0;

        return (
          <div
            key={index}
            className={cn(
              "relative flex items-center mb-12 last:mb-0",
              isLeft ? "justify-start" : "justify-end"
            )}
          >
            {/* Content */}
            <div
              className={cn(
                "w-5/12 p-6 bg-card rounded-lg",
                isLeft ? "mr-auto text-right" : "ml-auto "
              )}
            >
              <div
                className="font-semibold mb-2"
                style={{ fontSize: "40px", color: "#0797A0" }}
              >
                {event.date}
              </div>
              {event.location && (
                <div className="text-sm text-cyan-400 mb-1">{event.location}</div>
              )}
              <h3
                className="font-semibold text-foreground mb-2"
                style={{ fontSize: "20px" }}
              >
                {event.title}
              </h3>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                {event.description}
              </p>
            </div>

            {/* Glowing dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 top-[20%]">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 w-4 h-4 bg-white rounded-full animate-pulse opacity-75 blur-sm" />
                {/* Inner dot */}
                <div className="relative w-4 h-4 bg-white rounded-full border-2 border-background shadow-lg">
                  {/* Inner glow */}
                  <div className="absolute inset-0.5 bg-white/50 rounded-full blur-[1px]" />
                </div>
              </div>
            </div>

            {/* Connector line to dot */}
            <div
              className={cn(
                "absolute top-[23%] w-8 h-0.5",
                isLeft ? "right-1/2 mr-2" : "left-1/2 ml-2"
              )}
              style={{ backgroundColor: "#0797A0" }}
            />
          </div>
        );
      })}
    </div>
  );
}
