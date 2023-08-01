import { Container } from '@/components/inc/Container';
import { SectionContainer } from '@/components/inc/SectionContainer';
import { SectionTitle } from '@/components/inc/SectionTitle';
import { getMetadataTitle } from '@/utils/getMetadataTitle';
import '../../../styles/statute.css';
import Link from 'next/link';

export const metadata = {
	title: getMetadataTitle('Statut'),
};

export default async function StatutePage() {
	return (
		<Container size="lg">
			<SectionContainer>
				<SectionTitle tag="h2">
					Statut Uczniowskiego Koła Informatycznego
				</SectionTitle>

				<ol role="list" className="flex flex-col gap-20 text-lg">
					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział I
								</h3>
								<p className="text-2xl font-medium">
									Postanowienia Ogólne
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Koło przyjmuje nazwę Uczniowskie Koło
									Informatyczne.
								</li>
								<li>
									Koło działa przy Zespole Szkół Licealnych i
									Technicznych nr 1 w Warszawie.
								</li>
								<li>
									Koło nie posiada osobowości prawnej i
									funkcjonuje w ramach struktury Zespołu Szkół
									Licealnych i Technicznych nr 1 w Warszawie.
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział II
								</h3>
								<p className="text-2xl font-medium">
									Cele Koła
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Celem Koła jest ułatwienie jego członkom
									rozwijania i pogłębiania wiedzy w
									dziedzinach związanych z informatyką.
								</li>
								<li className="text-center">
									<span>
										Koło realizuje cele, o których mowa w
										§1, poprzez:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											Organizację warsztatów w celu
											doskonalenia wiedzy członków Koła;
										</li>
										<li>
											Organizację innych przedsięwzięć
											związanych z działalnością Koła;
										</li>
										<li>
											Prowadzenie strony internetowej
											Koła;
										</li>
										<li>
											Prowadzenie i tworzenie projektów
											technologicznych;
										</li>
										<li>
											Współpracę z instytucjami i
											organizatorami projektów
										</li>
									</ul>
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział III
								</h3>
								<p className="text-2xl font-medium">
									Członkowie Koła
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Członkiem Koła może zostać każdy uczeń bądź
									student zainteresowany realizację celów
									Koła.
								</li>
								<li className="text-center">
									<span>
										Członkiem Koła staje się osoba, która
										pozytywnie przeszła dowolny z warunków
										procesu rekrutacji:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											Wypełniła formularz na stronie
											internetowej podając swój e-mail,
											imię i umiejętności
										</li>
										<li>
											Zarejestrowała się na stronie
											internetowej
										</li>
									</ul>
								</li>
								<li className="text-center">
									<span>Prawa członka Koła:</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>Uczestnictwo w zebraniach Koła</li>
										<li>
											Uczestnictwo w wydarzeniach
											organizowanych przez Koło
										</li>
										<li>Tworzenie projektów</li>
										<li>
											Konsultacje z opiekunem i Zarządem
											Koła
										</li>
									</ul>
								</li>
								<li className="text-center">
									<span>Obowiązki członka Koła:</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											Przestrzegać postanowień niniejszego
											Statutu
										</li>
										<li>
											Aktywne uczestnictwo w pracach Koła
										</li>
										<li>
											Dbanie o pozytywny wizerunek Koła
										</li>
										<li>
											Stosowanie się do uchwał Zarządu
											Koła.
										</li>
									</ul>
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział IV
								</h3>
								<p className="text-2xl font-medium">
									Władze Koła
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Zarząd Koła składa się z przynajmniej 2
									osób.
								</li>
								<li>
									Zarząd Koła stanowi: przewodniczący Koła i
									zastępcy przewodniczącego Koła.
								</li>
								<li>
									Zarząd Koła powoływany jest na czas
									nieokreślony.
								</li>
								<li>
									Wszystkie znaczące decyzje dotyczące Zarządu
									Koła oraz funkcjonowania Koła podejmowane są
									na drodze obrad Zarządu, dalej zwanymi
									Obradami Zarządu.
								</li>
								<li>
									Spraw znaczących nie definiuje się jako
									kontynuacji uprzednio ustalonych zadań.
								</li>
								<li>
									Wszelkie zmiany w składzie Zarządu Koła
									ogłaszane są przy pomocy oficjalnych kanałów
									informacyjnych Koła.
								</li>
								<li>
									Oficjalnym kanałem informacyjnym koła jest
									strona internetowa:{' '}
									<Link
										className="underline"
										href="https://www.uki.edu.pl/"
									>
										www.uki.edu.pl
									</Link>
								</li>
								<li>
									Zarząd Koła zastrzega sobie prawo do
									ostatecznej interpretacji zapisów zawartych
									w niniejszym Statucie Koła
								</li>
								<li>
									Zarząd Koła określa zakres współpracy z
									organizatorami projektów
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział V
								</h3>
								<p className="text-2xl font-medium">
									Obrady Zarządu
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Obrady muszą być zwołane 24 godziny
									wcześniej przed wyznaczonym terminem
								</li>
								<li>
									Członek Zarządu w trybie nagłym może zwołać
									obrady Zarządu Koła w okresie krótszym niż
									24 godziny od wyznaczonego terminu.
								</li>
								<li>
									Uprawnionym do uczestnictwa i oddawania
									głosów podczas Obrad Zarządu jest każdy
									Członek Zarządu.
								</li>
								<li className="text-center">
									<span>
										Podczas Obrad Zarządu przy quorum
										wynoszącym 75% uprawnionych mogą zostać
										podjęte decyzje dotyczące:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>uprawomocnienia uchwał,</li>
										<li>
											rozpoczęcia prac nad projektami
											realizowanymi w ramach Koła,
										</li>
										<li>
											przydzielania prac dotyczących
											administracji i promocji Koła,
										</li>
										<li>udzielanie patronatu Koła.</li>
									</ul>
								</li>
								<li className="text-center">
									<span>
										Podczas Obrad Zarządu przy quorum
										wynoszącym 100% uprawnionych mogą zostać
										podjęte decyzję:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											Powołanie i odwołanie członków
											Zarządu Koła
										</li>
										<li>
											Ustanowienie planu budżetowego Koła
										</li>
										<li>
											zmiany lub ustanowienia programu
											prac Koła
										</li>
									</ul>
								</li>
								<li>
									W przypadku równej liczbie oddanych głosów
									Członków Zarządu, przewodniczący podejmuje
									decyzję w sprawie wydanej decyzji.
								</li>
								<li className="text-center">
									<span>
										Do kompetencji Przewodniczącego Koła
										należy:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											Kierowanie bieżącą działalnością
											Koła
										</li>
										<li>Zarządzanie pracą Koła</li>
										<li>Reprezentowanie Zarządu Koła</li>
										<li>Zarządzanie finansami Koła</li>
										<li>Koordynacja obrad Zarządu</li>
									</ul>
								</li>
								<li className="text-center">
									<span>
										Do kompetencji Zarządu Koła należy:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>Reprezentowanie Koła</li>
										<li>
											Przyjmowanie oraz wykreślanie
											członków Koła
										</li>
										<li>
											Współtworzenie i podejmowanie uchwał
											dotyczących funkcjonowania Koła
										</li>
										<li>
											Wspieranie przewodniczącego w
											bieżącej działalności Koła
										</li>
									</ul>
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział VI
								</h3>
								<p className="text-2xl font-medium">
									Opiekun koła
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Opiekunem Koła może być pracownik Zespołu
									Szkół Licealnych i Technicznych nr 1 w
									Warszawie.
								</li>
								<li>
									Opiekuna Koła powołuje Dyrekcja Zespołu
									Szkół Licealnych i Technicznych nr 1 w
									Warszawie.
								</li>
								<li>
									Opiekun Koła powoływany jest na czas
									nieokreślony.
								</li>
								<li className="text-center">
									<span>
										Do kompetencji Opiekuna Koła należy:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											Wspieranie i koordynacja
											działalności Koła;
										</li>
										<li>
											Odwoływanie Członków Zarządu Koła
										</li>
										<li>
											Rozstrzyganie sporów pomiędzy
											Członkami Koła.
										</li>
									</ul>
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział VII
								</h3>
								<p className="text-2xl font-medium">
									Patronat Koła
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Decyzję o objęciu patronatem danego
									przedsięwzięcia podejmuje Zarząd na drodze
									Obrad Zarządu.
								</li>
								<li className="text-center">
									<span>
										Celem uzyskania patronatu Koła należy
										przesłać wypełniony wniosek dostępny na
										stronie internetowej pod adresem{' '}
										<Link
											href="https://www.uki.edu.pl/"
											className="underline"
										>
											https://www.uki.edu.pl/
										</Link>
										, na adres mailowy{' '}
										<a
											href="mailto:kontakt@uki.edu.pl"
											className="underline"
										>
											kontakt@uki.edu.pl
										</a>
										.
									</span>
								</li>
								<li>
									Zarząd ma możliwość odwołanie udzielonego
									patronatu, bez podania przyczyny.
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział VIII
								</h3>
								<p className="text-2xl font-medium">
									Majątek i finanse Koła
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Praca w organach Koła ma charakter
									społeczny.
								</li>
								<li className="text-center">
									<span>
										Dla realizacji swoich celów Koło
										korzysta ze środków finansowych:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											przyznanych przez Zespół Szkół
											Licealnych i Technicznych nr 1 w
											Warszawie,
										</li>
										<li>
											przekazanych przez sponsorów w
											formie darowizn,
										</li>
										<li>
											z dobrowolnych wpłat na konto Koła,
										</li>
									</ul>
								</li>
								<li>
									Praca w tym wartość intelektualna,
									wykonywana na rzecz Koła staje się jego
									własnością.
								</li>
							</ol>
						</article>
					</li>

					<li className="text-center">
						<article className="flex flex-col items-center gap-5">
							<hgroup className="space-y-2 text-center">
								<h3 className="text-4xl font-bold">
									Rozdział IX
								</h3>
								<p className="text-2xl font-medium">
									Postanowienia końcowe
								</p>
							</hgroup>

							<ol
								role="list"
								className="statute-custom-style mx-auto flex flex-col items-center gap-1 text-gray-300"
							>
								<li>
									Zmiany dotyczące Statutu Koła wprowadza
									przewodniczący w porozumieniu z Zarządem
									Koła
								</li>
								<li>
									Dyrektor Zespołu Szkół Licealnych i
									Technicznych uchyla zmianę Statutu Koła
									niezgodną z przepisami prawa bądź ze
									statutem szkoły.
								</li>
								<li className="text-center">
									<span>
										Rozwiązanie Koła następuje w drodze:
									</span>
									<ul className="flex list-disc flex-col items-center text-base">
										<li>
											Uchwały zarządu Koła w porozumieniu
											i akceptacji Opiekuna Koła.
										</li>
										<li>
											Decyzji Dyrektora Zespołu Szkół
											Licealnych i Technicznych nr 1 w
											Warszawie.
										</li>
									</ul>
								</li>
							</ol>
						</article>
					</li>
				</ol>
			</SectionContainer>
		</Container>
	);
}
