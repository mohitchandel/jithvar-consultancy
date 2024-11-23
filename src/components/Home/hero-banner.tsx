"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpRight, Users, Target, Rocket } from "lucide-react";

export default function HeroBanner() {
  const revenueData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 28 },
    { month: "Mar", value: 35 },
    { month: "Apr", value: 40 },
    { month: "May", value: 45 },
    { month: "Jun", value: 55 },
  ];

  const projectData = [
    { name: "Completed", value: 65 },
    { name: "In Progress", value: 25 },
    { name: "Planning", value: 10 },
  ];

  const performanceData = [
    { month: "Jan", value: 80 },
    { month: "Feb", value: 85 },
    { month: "Mar", value: 87 },
    { month: "Apr", value: 89 },
    { month: "May", value: 92 },
    { month: "Jun", value: 95 },
  ];

  const teamData = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 15 },
    { month: "Mar", value: 18 },
    { month: "Apr", value: 22 },
    { month: "May", value: 25 },
    { month: "Jun", value: 30 },
  ];

  const metricCards = [
    {
      id: 1,
      title: "Revenue Growth",
      value: "+127%",
      description: "Year over year growth",
      icon: <Rocket className="h-4 w-4" />,
      position: { top: "15%", right: "15%" },
      bg: "bg-blue-50",
      chart: (
        <ResponsiveContainer width="100%" height={40}>
          <AreaChart
            data={revenueData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563EB"
              fill="#93C5FD"
            />
          </AreaChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 2,
      title: "Project Success Rate",
      value: "94%",
      description: "Completed on time",
      icon: <Target className="h-4 w-4" />,
      position: { bottom: "50%", left: "10%" },
      bg: "bg-green-50",
      chart: (
        <ResponsiveContainer width="100%" height={60}>
          <PieChart>
            <Pie
              data={projectData}
              cx="50%"
              cy="50%"
              innerRadius={20}
              outerRadius={25}
              fill="#22C55E"
              dataKey="value"
            >
              {projectData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#22C55E" : "#86EFAC"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 3,
      title: "Performance Score",
      value: "95/100",
      description: "Average client rating",
      icon: <ArrowUpRight className="h-4 w-4" />,
      position: { top: "65%", left: "10%" },
      bg: "bg-purple-50",
      chart: (
        <ResponsiveContainer width="100%" height={40}>
          <LineChart data={performanceData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#7C3AED"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      id: 4,
      title: "Team Growth",
      value: "30+",
      description: "Expert developers",
      icon: <Users className="h-4 w-4" />,
      position: { bottom: "35%", right: "15%" },
      bg: "bg-rose-50",
      chart: (
        <ResponsiveContainer width="100%" height={40}>
          <BarChart data={teamData}>
            <Bar dataKey="value" fill="#FC2B46" />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
  ];

  return (
    <section className="relative h-fit lg:h-screen overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row lg:h-screen">
          <div className="w-full lg:w-1/2 flex items-center relative z-10 px-4 lg:px-0 py-20 lg:py-0">
            <div className="max-w-xl">
              <div className="flex items-center space-x-2 mb-6 capitalize">
                <span className="font-semibold text-md capitalize text-[#FC2B46] font-unbounded">
                  WELCOME TO JITHVAR
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 font-unbounded text-[#1F2937]">
                Web Development & Designing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your digital presence with our expert web development
                and design services. We deliver innovative solutions that drive
                real business growth.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-[#FC2B46]">
                  Talk To Expert <ArrowUpRight />
                </Button>
                <Button size="lg" className="bg-[#1F2937]">
                  Discover More <ArrowUpRight />
                </Button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {["U1", "U2", "U3", "U4"].map((user, i) => (
                    <Avatar key={user} className="border-2 border-background">
                      <AvatarImage src={`https://i.pravatar.cc/${i + 1}00`} />
                      <AvatarFallback>{user}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  100+ Successful Projects Delivered
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-[calc(100vh-5rem)] lg:h-full lg:w-1/2 lg:absolute lg:top-0 lg:right-0">
            <div className="relative h-full">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-black/50" />

              {metricCards.map((card) => (
                <motion.div
                  key={card.id}
                  className="absolute z-20 hidden lg:block"
                  style={card.position}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: card.id * 0.2 }}
                >
                  <Card
                    className={`w-[240px] ${card.bg} hover:shadow-lg transition-shadow duration-300`}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {card.title}
                          </p>
                          <h3 className="text-xl font-bold">{card.value}</h3>
                          <p className="text-xs text-muted-foreground">
                            {card.description}
                          </p>
                        </div>
                        <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                          {card.icon}
                        </div>
                      </div>
                      {card.chart}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <div className="lg:hidden absolute bottom-8 left-0 right-0 px-4">
                <div className="grid grid-cols-2 gap-4">
                  {metricCards.map((card) => (
                    <Card key={card.id} className={`w-full ${card.bg}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">
                              {card.title}
                            </p>
                            <h3 className="text-xl font-bold">{card.value}</h3>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                            {card.icon}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {card.description}
                        </p>
                        {card.chart}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
