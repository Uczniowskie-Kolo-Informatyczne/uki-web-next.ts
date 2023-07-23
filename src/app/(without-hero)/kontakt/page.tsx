import { ContactForm } from '@/components/contact/contactForm/ContactForm';
import { Container } from '@/components/inc/Container';
import { SectionContainer } from '@/components/inc/SectionContainer';
import { SectionTitle } from '@/components/inc/SectionTitle';

export default function ContactPage() {
	return (
		<Container size="lg">
			<SectionContainer>
				<SectionTitle tag="h2">Formularz kontaktowy</SectionTitle>

				<div>
					<ContactForm />
				</div>
			</SectionContainer>
		</Container>
	);
}
