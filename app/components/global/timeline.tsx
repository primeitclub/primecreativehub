import { cn } from '../../lib/utils';


interface TimelineEvent {
  date: string
  title: string
  description: string
  location?: string
}

interface TimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function Timeline({ events, className }: TimelineProps) {
  return (
    <div className={cn("relative lg:max-w-4xl max-w-[50rem] mx-auto py-20", className)}>
      {/* Desktop: Vertical line in center, Mobile: Vertical line on left */}
      <div
        className={cn(
          "absolute w-1 rounded-2xl",
          // Desktop: center line
          " md:left-1/2 transform -translate-x-1/2",
          // Mobile: left line
          "hidden md:block left-5",
        )}
        style={{
          backgroundColor: "#0797A0",
          top: "calc(4.5rem + 20px)",
          bottom: "calc(4.5rem + 24px)",
        }}
      />

      {/* Mobile: Left-aligned vertical line */}
      <div
        className={cn("absolute w-1 rounded-2xl md:hidden left-6")}
        style={{
          backgroundColor: "#0797A0",
          top: "calc(2rem + 20px)",
          bottom: "calc(2rem + 24px)",
        }}
      />

      {events.map((event, index) => {
        const isLeft = index % 2 != 0

        return (
          <div
            key={index}
            className={cn(
              "relative flex items-center mb-12 last:mb-0",
              // Desktop: alternating layout
              "md:mb-0",
              isLeft ? "md:justify-start" : "md:justify-end",
              // Mobile: all items aligned left
              "justify-start",
            )}
          >
            {/* Content */}
            <div
              className={cn(
                "p-6 bg-card rounded-lg",
                // Desktop: alternating sides with 5/12 width
                isLeft ? "md:w-5/12 md:mr-auto md:text-right" : "md:w-5/12 md:ml-auto",
                // Mobile: full width with left margin for timeline
                "w-full ml-16 md:ml-0",
              )}
            >
              <div className="font-semibold mb-2 text-[#0797A0] text-[22px] sm:text-[20px] lg:text-[40px]">
                {event.date}
              </div>
              {event.location && <div className="text-sm text-cyan-400 mb-1">{event.location}</div>}
              <h3 className="font-semibold text-foreground mb-2 text-[16px] sm:text-[16px] md:text-[14px] lg:text-[24px]">
                {event.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] mt-1 md:mt-2 lg:mt-[8.5px]">
                {event.description}
              </p>
            </div>

            {/* Desktop: Glowing dot in center */}
            <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 z-10 top-[22%]">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-pulse opacity-75 blur-sm" />
                {/* Inner dot */}
                <div className="relative w-2 h-2 bg-white rounded-full shadow-lg border-3 p-1 border-[#020E0F]">
                  {/* Inner glow */}
                  <div className="absolute inset-0.5 bg-white/50 rounded-full blur-[1px]" />
                </div>
              </div>
            </div>

            {/* Mobile: Glowing dot on left */}
            <div className="absolute md:hidden left-6 transform translate-x-[-5px] md:-translate-x-1/2 z-10 top-[22%]">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-pulse opacity-75 blur-sm" />
                {/* Inner dot */}
                <div className="relative w-2 h-2 bg-white rounded-full shadow-lg border-3 p-1 border-[#020E0F]">
                  {/* Inner glow */}
                  <div className="absolute inset-0.5 bg-white/50 rounded-full blur-[1px]" />
                </div>
              </div>
            </div>

            {/* Desktop: Connector line to center dot */}
            <div
              className={cn(
                "absolute hidden md:block top-[24%] w-8 h-1 rounded-2xl",
                isLeft ? "right-1/2 mr-2" : "left-1/2 ml-2",
              )}
              style={{ backgroundColor: "#0797A0" }}
            />

            {/* Mobile: Connector line to left dot */}
            <div
              className="absolute md:hidden top-[24%] left-8 w-6 h-1 rounded-2xl"
              style={{ backgroundColor: "#0797A0" }}
            />
          </div>
        )
      })}
    </div>
  )
}
