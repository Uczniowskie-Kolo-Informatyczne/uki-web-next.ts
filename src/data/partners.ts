import PWCImage from '../../public/partners/PwC-logo.png';
import WydzialElektrycznyImage from '../../public/partners/logotyp_wydzial_elektryczny_PW.png';
import OKIImage from '../../public/partners/Olimpijskie_Koło_Informatyczne-logo.png';
import PasjaInformatykiImage from '../../public/partners/pasja_informatyki_logo.png';
import GoCloudImage from '../../public/partners/logo_GoCloud.png';
import MokotowaImage from '../../public/partners/logo_Mokotowa.png';
import HelionImage from '../../public/partners/logo_grupaHelion.jpg';
import CBSGImage from '../../public/partners/logo_CBSG.png';
import DBHostinguImage from '../../public/partners/logotyp_dhostingu.png';
import KIKImage from '../../public/partners/Logo_KIK.png';
import OnLineImage from '../../public/partners/logo_OnLine.png';
import SpaceRoboticsImage from '../../public/partners/logo_Space_Robotics.png';
import ZdajtoImage from '../../public/partners/logo_projektu_zdajto.app.png';
import Samoy3dImage from '../../public/partners/Frame_2NAKLEJKA-1.png';
import KaczkaImage from '../../public/partners/logo_kaczka.png';
import WawerImage from '../../public/partners/logo_wawer.svg';
import MRDMImage from '../../public/partners/logo-MRDM-RGB.jpg';
import MRDUImage from '../../public/partners/logo_młodziezowa_rada_Ursynowa.jpg';

export const partners = [
	{
		id: 'partner1',
		name: 'PwC Polska - wiodąca globalna organizacja świadcząca profesjonalne usługi doradcze ',
		image: PWCImage,
		link: 'https://www.pwc.pl/',
	},
	{
		id: 'partner2',
		name: 'Wydział Elektryczny Politechniki Warszawskiej',
		image: WydzialElektrycznyImage,
		link: 'https://www.ee.pw.edu.pl/',
	},
	{
		id: 'partner3',
		name: 'Olimpijskie Koło Informatyczne prowadzi zajęcia z algorytmiki dla młodzieży',
		image: OKIImage,
		link: 'https://oki.org.pl/',
	},
	{
		id: 'partner4',
		name: 'Pasja informatyki - największy kanał na polskim youtubie związany z nauczaniem informatyki',
		image: PasjaInformatykiImage,
		link: 'https://pasja-informatyki.pl/',
	},
	{
		id: 'partner5',
		name: 'GoCloud jest wiodącym partnerem firmy Google w zakresie rozwiązań do komunikacji, współpracy i wyszukiwania informacji',
		image: GoCloudImage,
		link: 'https://gocloud.pl/',
	},
	{
		id: 'partner6',
		name: 'Patronat honorowy Burmistrza Dzielnicy Mokotów m.st. Warszawy',
		image: MokotowaImage,
		link: 'https://mokotow.um.warszawa.pl/',
	},
	{
		id: 'partner7',
		name: 'Grupa Helion to największe polskie wydawnictwo związane z tematyką technologiczną',
		image: HelionImage,
		link: 'https://helion.pl/',
	},
	{
		id: 'partner8',
		name: 'Celem działalności CBSG Polska jest popularyzacja certyfikacji zawodowych Microsoft.',
		image: CBSGImage,
		link: 'https://cbsg.pl/',
	},
	{
		id: 'partner9',
		name: 'Dhosting - dostawca Elastycznego Web hostingu',
		image: DBHostinguImage,
		link: 'https://dhosting.pl/',
	},
	{
		id: 'partner10',
		name: 'Klub Inteligencji Katolickiej',
		image: KIKImage,
		link: 'https://donate.kik.waw.pl/pl',
	},
	{
		id: 'partner11',
		name: 'Firma zajmująca się przeprowadzaniem szkoleń dla szkół oraz przeprowadza konkurs Potyczki adminów ',
		image: OnLineImage,
		link: 'https://oedu.pl/',
	},
	{
		id: 'partner12',
		name: 'Koło naukowe zajmujące się robotyką i tworzeniem projektów technologicznych',
		image: SpaceRoboticsImage,
		link: 'https://kntspacerobotics.pl/',
	},
	{
		id: 'partner13',
		name: 'Projekt ZdajTo! jest aplikacją wspierającą uczniów w nauce do egzaminu ósmoklasisty',
		image: ZdajtoImage,
		link: 'https://zdajtoapp.pl/',
	},
	{
		id: 'partner14',
		name: 'Samoy3D - wyrobu z druku 3d',
		image: Samoy3dImage,
		link: 'https://samoy3d.pl/',
	},
	{
		id: 'partner15',
		name: 'Drukarnia internetowa, w której można zamówić materiały promocyjne do swoich projektów.',
		image: KaczkaImage,
		link: 'https://www.drukarnia-internetowa.pl/',
	},
	{
		id: 'partner16',
		name: 'MRDWawer ma za zadanie reprezentować głos młodych na forum dzielnicy i miasta',
		image: WawerImage,
		link: 'https://wawer.um.warszawa.pl/mlodziezowa-rada-dzielnic',
	},
	{
		id: 'partner17',
		name: 'Młodzieżowa Rada Dzielnicy Mokotów m.st. Warszawy',
		image: MRDMImage,
		link: 'https://www.facebook.com/mokotowmrd',
	},
	{
		id: 'partner18',
		name: 'MRDUrsynów ma za zadanie reprezentować głos młodych na forum dzielnicy i miasta',
		image: MRDUImage,
		link: 'https://ursynow.um.warszawa.pl/-/mlodziezowa-rada-dzielnicy-2',
	},
] as const;
