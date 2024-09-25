import Image from "next/image";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/interfaces/page/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavTabs } from "@/components/interfaces/page/nav-tabs";
import { Icons } from "@/components/icons";
import { getArchitectureCourses } from "@/lib/data/get-architecture-courses";
import ArchitecturePage from "./architecture/page";
import BestPracticesPage from "./best-practices/page";
import ProductionGradeProjectsPage from "./production-grade-projects/page";
import BuildFromScratchPage from "./build-from-scratch/page";

export default function RootPage() {

  const architectureCourses = getArchitectureCourses();

  return (
    <>
      <ArchitecturePage />
      <BestPracticesPage />
      <ProductionGradeProjectsPage />
      <BuildFromScratchPage />
    </>
  );
}
