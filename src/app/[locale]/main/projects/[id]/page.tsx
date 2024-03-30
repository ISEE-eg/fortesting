import DetailsHeader from "@/components/project-details/DetailsHeader";
import ProjectGallery from "@/components/project-details/ProjectGallery";
import ProjectInfo from "@/components/project-details/ProjectInfo";
import ProjectView from "@/components/project-details/ProjectView";
import { API_ROUTES_PROVIDER } from "@/data/api-provider";
import { apiService } from "@/data/api.service";
import { ProjectsType } from "@/data/models/types";
import { useLocale } from "next-intl";
import { getLocale } from "next-intl/server";


export default async function ProjectDetails({ params }: { params: { [key: string]: string } }) {
    const lang = await getLocale();

    const {data: project} = await apiService.get<{data: ProjectsType}>(`${API_ROUTES_PROVIDER.projects}/${params.id}`, {
        lang
    });
    

    return (
        <>
            <DetailsHeader project={project} />
            <ProjectInfo project={project} />
            <ProjectView project={project} />
            {
                project.gallery.length > 0 ? <ProjectGallery project={project} /> : null
            }
        </>
    )
}
