
import AboutSection from "@/components/home/AboutSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import Header from "@/components/home/Header";
import MobileSection from "@/components/home/MobileSection";
import NewsSection from "@/components/home/NewsSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PartnersSection from "@/components/home/PartnersSection";
import { apiService } from "@/data/api.service";
import { ProjectsType } from "@/data/models/types";
import { getLocale } from "next-intl/server";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";


export default async function Home() {
  // const t = useTranslations('home');
  const local = await getLocale();
  const { data: projects } = await apiService.get<{ data: ProjectsType[] }>(API_ROUTES_PROVIDER.projects, {
    lang: local
  });
  return (
    <>
      <Header projects={projects} />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <AchievementsSection />
      <NewsSection />
      <MobileSection />
      <PartnersSection />
    </>
  );
}
