"use client"
import { NavBarDemo } from "@/components/NavbarDemo";
import { HeroSectionDemo } from "@/components/HeroSectionDemo";
import { DisplayCardsDemo } from "@/components/DisplayCardsDemo";
import { DefaultDemo } from "@/components/FaqAccordion";
import { TimelineDemo } from "@/components/TimelineDemo";
import { GlowingEffectDemo } from "@/components/GlowingEffect";


export default function Home() {



  return (
    <div>
      <NavBarDemo />
      <HeroSectionDemo />
      <DisplayCardsDemo />
      <DefaultDemo />
      <TimelineDemo />
      <GlowingEffectDemo />

    </div>
  );
}
