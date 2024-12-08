import Empathy from "../components/unauthorized/Empathy";
import Features from "../components/unauthorized/Features";
import Hero from "../components/unauthorized/Hero";
import ReportFormIntro from "../components/unauthorized/ReportFormIntro";
import Stories from "../components/unauthorized/Stories";

export default function UnauthorizedPage() {
  return (
    <>
      <Hero />
      <Empathy />
      <Features />
      <Stories />
      <ReportFormIntro />
    </>
  );
}
