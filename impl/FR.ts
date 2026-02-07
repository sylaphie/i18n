import type { Language } from '../language';
import 'dayjs/locale/fr';

const language: Language = {
	name: 'Français',
	code: 'FR',
	translator: 'sylaphie',
	phrases: {
		'Why should i use osu.direct?': 'Pourquoi devrais-je utiliser osu.direct ?',
		'Blazing Fast Downloads': 'Téléchargements ultra-rapides',
		'We know the pain of waiting for beatmaps to download. With osu.direct, you can enjoy blazing fast speeds without any subscription or payment. Say goodbye to slow downloads and hello to uninterrupted fun.':
			"Nous connaissons la frustration d'attendre les téléchargements longs. Avec osu.direct, profitez de vitesses rapides sans abonnement ni paiement. Dites adieu aux téléchargements lents et bonjour au plaisir ininterrompu.",
		'Reliability You Can Trust': 'Une fiabilité à laquelle vous pouvez avoir confiance.',
		"Previously known as Kitsu, we've rebranded to osu.direct with a commitment to reliability. Trusted by major projects like osu!droid and Akatsuki, you can count on us to deliver seamless service.":
			"Anciennement sous le nom de Kitsu, nous avons changé d'identité pour osu.direct avec un engagement ferme envers la fiabilité. Utilisé par des projets majeurs comme osu!droid et Akatsuki, vous pouvez compter sur nous pour un service fluide.",
		'Wide Compatibility': 'Large compatibilité',
		"We're all about flexibility. Whether you need support for v1 or v2 API routes, or custom features for your next project, osu.direct has you covered. We're here to adapt to your needs and help you succeed.":
			"La flexibilité est notre priorité. Que vous ayez besoin de support pour les routes API v1 ou v2, ou de fonctionnalités personnalisées pour votre prochain projet, osu.direct répond à vos besoins. Nous sommes là pour nous adapter et vous aider à réussir.",
		'Used and trusted by amazing projects like':
			'Utilisé et approuvé par des projets incroyables comme',
		'All Rights Reserved.': 'Tous droits réservés.',
		'type in keywords...': 'tapez des mots-clés...',
		Mode: 'Mode',
		Any: 'Tous',
		Qualified: 'Qualifié',
		Pending: 'En attente',
		Ranked: 'Ranked',
		Loved: 'Loved',
		Artist: 'Artiste',
		'Featured Artist': 'Artiste featuré',
		Graveyard: 'Cimetière',
		graveyard: 'cimetière',
		Plays: 'Parties',
		Status: 'Statut',
		'Explicit Content': 'Contenu explicite',
		Extra: 'Extra',
		submitted: 'soumis',
		'last updated': 'dernière mise à jour',
		Reset: 'Réinitialiser',
		Length: 'Durée',
		Count: 'Nombre',
		Download: 'Télécharger',
		CTRL: 'CTRL',
		'Quick Search': 'Recherche rapide',
		'showing {{from}} - {{to}} of {{total}} entries':
			'affichage de {{from}} - {{to}} sur {{total}} entrées',
		'Search for Beatmaps...': 'Rechercher des beatmaps...',
		'Search for something c:': 'Rechercher quelque chose c:',
		'Loading Results...': 'Chargement des résultats...',
		'Search Results': 'Résultats de recherche',
		'No results found.': 'Aucun résultat trouvé.',
		Browse: 'Parcourir',
		'Support us!': 'Nous soutenir !',
		'Join Discord': 'Rejoindre le Discord',
		'More from': 'Plus de',
		'Similar Sets': 'Maps similaires',
		Categories: 'Catégories',
		Hide: 'Masquer',
		Show: 'Afficher',
		Only: 'Seulement',
		'Spotlighted beatmaps': 'Beatmaps en vedette',
		'Has Leaderboard': 'Possède un classement',
		'Has Video': 'Possède une vidéo',
		'Has Storyboard': 'Possède un storyboard',
		'Has Video and Storyboard': 'Possède une vidéo et un storyboard',
		'BeatmapSet not found!': 'BeatmapSet non trouvé !',
		'Back to Browse Page': 'Retour à la page de recherche',
		'Mapped by': 'Mappé par',
		'mapped by': 'mappé par',
		Title: 'Titre',
		Difficulty: 'Difficulté',
		Updated: 'Mis à jour',
		updated: 'mis à jour',
		created: 'créé',
		Submitted: 'Soumis',
		Favourites: 'Favoris',
		'Creator Name': 'Nom du créateur',
		'Creator ID': 'ID du créateur',
		'Circle Count': 'Nombre de cercles',
		'Slider Count': 'Nombre de sliders',
		'Spinner Count': 'Nombre de spinners',
		'Max Combo': 'Combo Max',
		'Play Count': 'Nombre de plays',
		'Download Queue': 'File de téléchargement',
		'Download Maps': 'Télécharger les maps',
		'Download Maps (no video)': 'Télécharger les maps (sans vidéo)',
		'Download (no video)': 'Télécharger (sans vidéo)',
		'Add to collection.db': 'Ajouter à collection.db',
		Favourite: 'Mettre en favori',
		Collections: 'Collections',
		'Edit Collection': 'Modifier la collection',
		'Delete Collection': 'Supprimer la collection',
		'Show Unranked Guest Participations': 'Afficher les participations guests non classées',
		'Account History': 'Historique du compte',
		'Guest Participation Beatmaps': 'Participations en tant que guest',
		'Pending Beatmaps': 'Beatmaps en attente',
		'Graveyarded Beatmaps': 'Beatmaps au cimetière',
		'This user has no ranked maps.': "Cet utilisateur n'a pas de maps ranked.",
		'This user has no loved maps.': "Cet utilisateur n'a pas de maps 'loved'.",
		'This user has no guest participations.': "Cet utilisateur n'a pas de participations invitées.",
		'This user has no pending maps.': "Cet utilisateur n'a pas de maps en attente.",
		'This user has no WIP maps.': "Cet utilisateur n'a pas de maps en cours (WIP).",
		'This user has no graveyarded maps.': "Cet utilisateur n'a pas de maps au cimetière.",
		'Scan this QR code to instantly access the BeatmapSet page on any device, download it, and share it across different platforms.':
			"Scannez ce QR code pour accéder instantanément à la page du BeatmapSet sur n'importe quel appareil, la télécharger et la partager sur différentes plateformes.",
		'Download QR Code': 'Télécharger le QR Code',
		'Site not found!': 'Site non trouvé !',
		'show more': 'en voir plus',
		'Star Rating': 'Nombre d’étoiles',
		Accuracy: 'Précision',
		'Circle Size': 'Taille des cercles',
		'Approach Rate': 'Vitesse d’approche',
		'HP Drain': 'Perte d\'HP',
		by: 'par',
		'Beatmap Preview': 'Aperçu de la beatmap',
		'Favourite Beatmaps': 'Beatmaps favorites',
		'Most Played Beatmaps': 'Beatmaps les plus jouées',
		'New Ranked Beatmaps': 'Nouvelles beatmaps Ranked',
		'Seamless Compatibility': 'Compatibilité parfaite',
		'seamlessly works with both osu!stable and osu!lazer clients, effortlessly importing downloaded beatmaps regardless of which client you use, ensuring a consistent and hassle-free experience across different versions of the game.':
			"Fonctionne parfaitement avec les clients osu!stable et osu!lazer, important sans effort les beatmaps téléchargées quel que soit le client utilisé, garantissant une expérience cohérente et sans tracas sur les différentes versions du jeu.",
		'Easy Handling': 'Prise en main facile',
		'offers the same extensive features as the official website, providing users with a comprehensive platform for discovering and downloading beatmaps directly from their desktop application, streamlining the entire process.':
			"Offre les mêmes fonctionnalités étendues que le site officiel, offrant aux utilisateurs une plateforme complète pour découvrir et télécharger des beatmaps directement depuis leur application de bureau, simplifiant ainsi tout le processus.",
		'Familiar and Hassle-free Experience': 'Expérience familière et sans effort',
		'ensures a seamless transition from the website by mirroring its intuitive and user-friendly interface. With the same UI design, users can effortlessly navigate, search, and download their favorite beatmaps with minimal effort, promoting overall usability and satisfaction without the need for relearning or adjustment.':
			"Assure une transition fluide depuis le site web en reflétant son interface intuitive et conviviale. Avec le même design d'interface, les utilisateurs peuvent naviguer, rechercher et télécharger leurs beatmaps préférées sans effort, favorisant l'ergonomie sans nécessiter de réapprentissage.",
		'Why should i use the Desktop App?': "Pourquoi devrais-je utiliser l'application de bureau ?",
		'Track all your downloads here in this Download Queue Manager.':
			'Suivez tous vos téléchargements ici dans le gestionnaire de file d’attente.',
		'Add advanced filter': 'Ajouter un filtre avancé',
		'Select a filter value': 'Sélectionner une valeur de filtre',
		'This is taking longer than expected...': 'Cela prend plus de temps que prévu...',
		'API Documentation': 'Documentation de l\'API',
		'This beatmap contains a video': 'Cette beatmap contient une vidéo',
		'This beatmap contains a storyboard': 'Cette beatmap contient un storyboard',
		'This beatmap is spotlighted': 'Cette beatmap est mise en vedette',
		'Search, discover, and download osu! beatmaps': 'Recherchez, découvrez et téléchargez des beatmaps osu!',
		'effortlessly. Built for speed and simplicity, designed for players, by players.':
			'sans effort. Conçu pour la vitesse et la simplicité, pour les joueurs, par des joueurs.',
		'See why players love osu.direct': 'Découvrez pourquoi les joueurs aiment osu.direct',
		'Terms of Service': 'Conditions d’utilisation',
		'Download for Windows': 'Télécharger pour Windows',
		'By accessing or using our website, you agree to comply with and be bound by the following Terms of Service ("TOS"). These terms are in place to ensure fair and lawful use of our services. By continuing to browse or use osu.direct, you confirm that you have read, understood, and agreed to these terms. If you do not agree with any part of these terms, please refrain from using our service.':
			"En accédant à notre site ou en l'utilisant, vous acceptez de vous conformer aux Conditions d'utilisation suivantes (« TOS »). Ces conditions sont en place pour garantir une utilisation équitable et légale de nos services. En continuant à naviguer sur osu.direct, vous confirmez avoir lu, compris et accepté ces conditions. Si vous n'êtes pas d'accord avec une partie de ces conditions, veuillez ne pas utiliser notre service.",
		'We encourage you to review these Terms of Service periodically, as they may be updated to reflect changes in legal requirements, service improvements, or community guidelines. Your continued use of osu.direct after any modifications constitutes acceptance of the revised terms.':
			"Nous vous encourageons à consulter périodiquement ces conditions, car elles peuvent être mises à jour pour refléter les changements légaux ou les améliorations de service. Votre utilisation continue d'osu.direct après toute modification constitue votre acceptation des nouvelles conditions.",
		'1. Acceptance of Terms': '1. Acceptation des conditions',
		'By using osu.direct, you agree to these Terms of Service and our Privacy Policy. You acknowledge that these terms form a binding agreement between you and osu.direct. We reserve the right to modify these terms at any time to accommodate new features, legal requirements, or other considerations. Any updates will be clearly communicated on our website, and it is your responsibility to stay informed about changes. Continued use of osu.direct signifies your acceptance of any modifications.':
			"En utilisant osu.direct, vous acceptez ces conditions et notre politique de confidentialité. Ces termes forment un accord contraignant. Nous nous réservons le droit de les modifier à tout moment. Toute mise à jour sera communiquée sur le site, et il est de votre responsabilité de rester informé. L'utilisation continue signifie l'acceptation des modifications.",
		'2. Use of the Service': '2. Utilisation du service',
		'osu.direct provides a mirror for osu! beatmaps for convenience.':
			'osu.direct fournit un miroir pour les beatmaps osu! par commodité.',
		'You agree not to use this service for any illegal or unauthorized purposes.':
			"Vous acceptez de ne pas utiliser ce service à des fins illégales ou non autorisées.",
		'You may not attempt to disrupt, modify, or exploit the service in any way.':
			"Vous ne devez pas tenter d'interrompre, modifier ou exploiter le service de quelque manière que ce soit.",
		'Users can authenticate with Discord to create and manage beatmap collections.':
			"Les utilisateurs peuvent s'authentifier avec Discord pour gérer des collections de beatmaps.",
		'Users can download beatmaps directly from the website.':
			"Les utilisateurs peuvent télécharger des beatmaps directement depuis le site.",
		'Authentication is handled through the Discord API, and basic user data such as email, username and token is collected. This data is encrypted on our end to ensure security.':
			"L'authentification est gérée via l'API Discord ; des données de base comme l'email, le nom d'utilisateur et votre token/jeton sont collectées et cryptées pour votre sécurité.",
		'3. Intellectual Property': '3. Propriété intellectuelle',
		'osu.direct does not claim ownership of the beatmaps hosted on the platform. All beatmaps remain the property of their respective creators.':
			"osu.direct ne revendique pas la propriété des beatmaps hébergées. Elles restent la propriété de leurs créateurs respectifs.",
		'By using the service, you acknowledge that osu! and its assets are trademarks of ppy Pty Ltd.':
			"En utilisant le service, vous reconnaissez qu'osu! et ses ressources sont des marques déposées de ppy Pty Ltd.",
		'If you are a content owner and wish to request removal of your work, please contact us.':
			"Si vous possédez du contenu et souhaitez demander son retrait, veuillez nous contacter.",
		'4. User Conduct': '4. Conduite de l’utilisateur',
		'You agree to use the service responsibly and not abuse it.':
			"Vous acceptez d'utiliser le service de manière responsable et de ne pas en abuser.",
		'Do not upload or distribute any malicious, illegal, or copyrighted content without permission.':
			"Ne distribuez pas de contenu malveillant, illégal ou protégé par le droit d'auteur sans permission.",
		'Automatic downloading is allowed, but spamming API routes will lead to a ban.':
			"Le téléchargement automatique est autorisé, mais le spam des routes API entraînera un bannissement.",
		'5. Liability Disclaimer': '5. Clause de non-responsabilité',
		'osu.direct is provided "as is" without any warranties or guarantees.':
			"osu.direct est fourni « tel quel » sans aucune garantie.",
		'We are not responsible for any damage, loss of data, or disruptions caused by using our service.':
			"Nous ne sommes pas responsables des dommages ou pertes de données causés par l'utilisation du service.",
		'We reserve the right to limit or terminate access to the service at any time.':
			"Nous nous réservons le droit de limiter ou de mettre fin à l'accès au service à tout moment.",
		'6. Termination': '6. Résiliation',
		'We reserve the right to suspend or terminate access to osu.direct at our discretion if users violate these terms or engage in harmful behavior. We may also restrict access to the service if it is necessary to protect the security and integrity of our platform.':
			"Nous nous réservons le droit de suspendre ou de résilier l'accès en cas de violation des conditions ou de comportement nuisible, ou pour protéger l'intégrité de la plateforme.",
		'7. Changes to the Terms': '7. Modification des conditions',
		'We may modify these terms at any time. Continued use of osu.direct after changes are posted constitutes acceptance of the updated terms.':
			"Nous pouvons modifier ces conditions à tout moment. L'utilisation continue après modification vaut acceptation.",
		'8. Contact': '8. Contact',
		'For any questions or concerns about these terms, please contact us on our Discord:':
			"Pour toute question concernant ces conditions, contactez-nous sur Discord :",
		'Last Updated': 'Dernière mise à jour',
		'Discover and Download Beatmaps with Ease': 'Découvrez et téléchargez des beatmaps en toute simplicité',
		'Experience the seamless and powerful osu.direct app':
			"Découvrez la puissance et la fluidité de l'application osu.direct",
		'Ready to get started?': 'Prêt à commencer ?',
		'Download the app now and explore beatmaps like never before.':
			"Téléchargez l'application maintenant et explorez les beatmaps comme jamais auparavant.",
		'Get Started': 'Commencer'
	}
};

export default language;
