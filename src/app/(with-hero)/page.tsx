import { PublicationsSlider } from '@/components/home/PublicationsSlider';
import { Container } from '@/components/inc/Container';
import { SectionTitle } from '@/components/inc/SectionTitle';
import { fetchData } from '@/utils/fetchData';
import { SectionContainer } from '../../components/inc/SectionContainer';
import { ProjectsSlider } from '@/components/home/ProjectsSlider';
import { projects } from '../../data/projects';
import type { StaticImageData } from 'next/image';

export type Publication = {
	_id: number;
	timestamp: string;
	title: string;
	description: string;
	link: string;
	image: string;
};

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

const fetchPublications = async (): Promise<Publication[]> => {
	return await fetchData('https://uki.edu.pl/api/articles/timestamp');
};

const fetchProjects = async () => {
	return projects;
};

export default async function Home() {
	const publications = await fetchPublications();
	const projects = await fetchProjects();

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
