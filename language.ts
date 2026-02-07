import EN from './impl/EN';
import DE from './impl/DE';
import RU from './impl/RU';
import FR from './impl/FR';

export type Language = {
	name: string;
	code: string;
	aliases?: string[];
	translator: string;
	phrases: { [key: string]: string };
};

export const languages: Language[] = [EN, DE, RU, FR];

export const getLanguage = (code: string) =>
	languages.find((lang) => lang.code === (code?.toUpperCase() ?? 'EN')) ||
	languages.find((lang) => lang.aliases?.includes(code?.toUpperCase() ?? 'EN'));

export const __ = (
	key: string,
	lang: string,
	placeholders?: { [key: string]: string | number }
) => {
	const language = getLanguage(lang);
	let translation = language?.phrases[key] ?? key;
	if (placeholders) {
		for (const [placeholder, value] of Object.entries(placeholders)) {
			translation = translation.replace(new RegExp(`{{${placeholder}}}`, 'g'), value.toString());
		}
	}
	return translation;
};
