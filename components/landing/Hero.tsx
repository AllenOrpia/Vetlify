import { SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center overflow-hidden pt-20">
      {/* GRID BG  */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-linear-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-linear-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">
                    AI-powered veterinary assistant
                  </span>
                </div>

                {/* HEADLINE */}
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter">
                  Book appointments, get advice, and manage your pet's health
                  with ease.
                </h1>

                {/* SUBHEADLINE */}
                <p className="text-lg text-muted-foreground">
                  Your all-in-one platform for seamless veterinary care.
                  Schedule appointments, access expert advice, and keep your
                  pet's health records organized in one convenient place.
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <SignUpButton mode="modal">
                    <Button size={"lg"}>
                      <MicIcon className="mr-2 h-5 w-5" />
                      Try voice agent
                    </Button>
                  </SignUpButton>

                  <SignUpButton mode="modal">
                    <Button size={"lg"} variant={"outline"}>
                      <CalendarIcon className="mr-2 h-5 w-5" />
                      Book an appointment
                    </Button>
                  </SignUpButton>
                </div>

                {/* TESTIMONIAL */}
                <div className="pt-8">
                  <div className="flex items-center gap-6">
                    {/* USER IMGS */}
                    
                    <div className="flex -space-x-3">
                      <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                        alt="Jessica Davis"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                        alt="Sam Miller"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                        alt="Anna Lopez"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                        alt="Mike Rodriguez"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                      <Image
                        src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                        alt="Katie Lee"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-background"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
