import { PublicationsSlider } from '@/components/home/PublicationsSlider';
import { Container } from '@/components/inc/Container';
import { SectionTitle } from '@/components/inc/SectionTitle';
import { SectionContainer } from '../../components/inc/SectionContainer';
import { ProjectsSlider } from '@/components/home/ProjectsSlider';
import { projects } from '../../data/projects';
import type { StaticImageData } from 'next/image';
import { getMetadataTitle } from '@/utils/getMetadataTitle';
import { publicationsSchema } from '@/utils/schemas/publicationsSchema';
import { fetchData } from '@/utils/axios';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/swiper.css';

export type Project = {
	readonly id: number;
	readonly image: StaticImageData;
	readonly title: string;
	readonly link: string;
	readonly opis: string;
	readonly sukcesy: readonly string[];
	readonly data: string;
	readonly uki: boolean;
};

const fetchPublications = async () => {
	const publications = await fetchData('api/articles/timestamp');

	return publicationsSchema.parse(publications);
};

const fetchProjects = () => {
	// https://github.com/Uczniowskie-Kolo-Informatyczne/uki-web-next.ts/issues/13
	return projects;
};

export const metadata = {
	title: getMetadataTitle('UKI'),
};

export default async function HomePage() {
	const publications = await fetchPublications();
	const projects = fetchProjects();

	return (
		<Container size="lg">
			<SectionContainer>
				<div id="publications-section-title">
					<SectionTitle tag="h3">Ogłoszenia</SectionTitle>
				</div>

				<div>
					<PublicationsSlider publications={publications} />
				</div>
			</SectionContainer>

			<SectionContainer>
				<div id="projects-section-title">
					<SectionTitle tag="h3">Projekty</SectionTitle>
				</div>

				<div>
					<ProjectsSlider projects={projects} />
				</div>
			</SectionContainer>
		</Container>
	);
}
