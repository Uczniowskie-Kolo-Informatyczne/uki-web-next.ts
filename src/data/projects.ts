import SprawneMiastoImage from '../../public/projects/sprawnemiasto.png';
import CyberInfoImage from '../../public/projects/cyberinfo.png';
import NetcordImage from '../../public/projects/netcord.png';

export const projects = [
	{
		id: 1,
		image: SprawneMiastoImage,
		title: 'Sprawne Miasto',
		link: 'https://sprawnemiasto.pl/',
		opis: 'System zgłaszania usterek infrastruktury publicznej na terenie polskich gmin.',
		sukcesy: [
			'Projekt został wyróżniony mianem najlepszego projektu technologicznego w województwie mazowieckim przez Fundację Zwolnieni z Teorii',
		],
		data: '05.11.2021',
		uki: true,
	},
	{
		id: 2,
		image: CyberInfoImage,
		title: 'CyberInfo',
		link: 'https://cyberinfo.website/',
		opis: 'Nowoczesny i zaawansowany serwis informacyjny o tematyce cyberbezpieczeństwa biorący udział w Olimpiadzie Zwolnień z Teorii.',
		sukcesy: [
			'Projekt CyberInfo jest dopiero rozwijany i jeszcze nie zdobył żadnych sukcesów.',
		],
		data: '09.05.2022',
		uki: true,
	},
	{
		id: 3,
		image: NetcordImage,
		title: 'NetCord',
		link: 'https://netcord.dev/',
		opis: 'Lekki oraz asynchroniczny wrapper API Discorda',
		sukcesy: ['Ponad 20 tysięcy pobrań w serwisie NuGet'],
		data: '16.11.2021',
		uki: true,
	},
];
