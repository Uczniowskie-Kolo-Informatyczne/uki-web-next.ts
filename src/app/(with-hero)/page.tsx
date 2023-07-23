import { PublicationsSlider } from '@/components/home/PublicationsSlider';
import { Container } from '@/components/inc/Container';
import { SectionTitle } from '@/components/inc/SectionTitle';
import { fetchData } from '@/utils/fetchData';
import { SectionContainer } from '../../components/inc/SectionContainer';
import { ProjectsSlider } from '@/components/home/ProjectsSlider';
import { projects } from '../../data/projects';
import type { StaticImageData } from 'next/image';
import { getMetadataTitle } from '@/utils/getMetadataTitle';
import { publicationsSchema } from '@/utils/schemas/publicationsSchema';

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
	const publications = await fetchData(
		'https://uki.edu.pl/api/articles/timestamp'
	);

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
				<SectionTitle tag="h3">Ogłoszenia</SectionTitle>

				<div>
					<PublicationsSlider publications={publications} />
				</div>
			</SectionContainer>

			<SectionContainer>
				<SectionTitle tag="h3">Projekty</SectionTitle>

				<div>
					<ProjectsSlider projects={projects} />
				</div>
			</SectionContainer>
		</Container>
	);
}
