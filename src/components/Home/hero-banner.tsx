"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroBanner() {
  const testimonials = [
    {
      id: 1,
      name: "Lucas Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "This app transformed how we handle customer inquiries. Quick response and intuitive features.",
      position: { top: "20%", right: "10%" },
    },
    {
      id: 2,
      name: "Sophia Park",
      role: "Customer support",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Exceptional service platform. Highly recommended!",
      position: { bottom: "20%", left: "10%" },
    },
  ];

  return (
    <section className="relative h-fit lg:h-screen overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row lg:h-screen">
          <div className="w-full lg:w-1/2 flex items-center relative z-10 px-4 lg:px-0 py-20 lg:py-0">
            <div className="max-w-xl">
              <div className="flex items-center space-x-2 mb-6">
                <span className="font-bold text-xl capitalize text-primary">
                  welcome to jithvar
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
                Web Development & Designing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="destructive">Talk To Expert</Button>
                <Button variant="outline">Discover More</Button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {["U1", "U2", "U3", "U4"].map((user) => (
                    <Avatar key={user} className="border-2 border-background">
                      <AvatarFallback>{user}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  100+ People gave us 5/5 Stars
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-[calc(100vh-5rem)] lg:h-full lg:w-1/2 lg:absolute lg:top-0 lg:right-0">
            <div className="relative h-full">
              {/* <img
                src="/img/new-bg.jpg"
                alt="Hero"
                className="w-full h-full object-cover"
              /> */}
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

              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="absolute z-20 hidden lg:block"
                  style={testimonial.position}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
                >
                  <Card className="w-[300px]">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            {testimonial.name}
                          </p>
                          {testimonial.role && (
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <div className="lg:hidden absolute bottom-8 left-0 right-0 px-4">
                <div className="grid grid-cols-2 gap-4">
                  {testimonials.map((testimonial) => (
                    <Card key={testimonial.id} className="w-full">
                      <CardContent className="p-4">
                        <div className="flex flex-col space-y-3">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={testimonial.avatar} />
                              <AvatarFallback>
                                {testimonial.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">
                                {testimonial.name}
                              </p>
                              {testimonial.role && (
                                <p className="text-xs text-muted-foreground">
                                  {testimonial.role}
                                </p>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.text}
                          </p>
                        </div>
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
