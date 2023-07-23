import { AccordionContainer } from '@/components/inc/Accordion/AccordionContainer';
import { AccordionContent } from '@/components/inc/Accordion/AccordionContent';
import { AccordionHeader } from '@/components/inc/Accordion/AccordionHeader';
import { AccordionItem } from '@/components/inc/Accordion/AccordionItem';
import { Container } from '@/components/inc/Container';
import { SectionContainer } from '@/components/inc/SectionContainer';
import { SectionTitle } from '@/components/inc/SectionTitle';
import { questions } from '@/data/questions';
import { getMetadataTitle } from '@/utils/getMetadataTitle';
import Image from 'next/image';
import AboutLogo from '../../../../public/aboutlogo.svg';

export const metadata = {
	title: getMetadataTitle('Faq'),
};

const fetchQuestions = () => {
	// https://github.com/Uczniowskie-Kolo-Informatyczne/uki-web-next.ts/issues/13
	return questions;
};

export default async function FaqPage() {
	const questions = fetchQuestions();

	return (
		<Container size="lg">
			<SectionContainer>
				<SectionTitle tag="h2">
					Najczęściej zadawane pytania
				</SectionTitle>

				<div className="flex flex-col gap-10 lg:flex-row">
					<div className="w-full lg:w-1/2">
						<AccordionContainer>
							<div className="flex flex-col gap-4">
								{questions.map(({ id, question, answer }) => (
									<AccordionItem id={String(id)} key={id}>
										<div className="rounded-lg bg-black/10">
											<AccordionHeader rounded="lg">
												<div className="h-full w-full p-5 text-left font-medium lg:text-lg">
													{question}
												</div>
											</AccordionHeader>

											<AccordionContent>
												<div className="bg-black/[.1] p-5 tracking-wide text-gray-300">
													{answer}
												</div>
											</AccordionContent>
										</div>
									</AccordionItem>
								))}
							</div>
						</AccordionContainer>
					</div>

					<div className="mt-8 w-full lg:m-12 lg:mt-0 lg:w-1/2">
						<Image src={AboutLogo} alt="" />
					</div>
				</div>
			</SectionContainer>
		</Container>
	);
}
