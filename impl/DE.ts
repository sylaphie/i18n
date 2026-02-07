import type { Language } from '../language';
import 'dayjs/locale/de';

const language: Language = {
	name: 'Deutsch',
	code: 'DE',
	translator: 'HorizonCode',
	phrases: {
		'Why should i use osu.direct?': 'Warum sollte ich osu.direct nutzen?',
		'Blazing Fast Downloads': 'Blitzschnelle Downloads',
		'We know the pain of waiting for beatmaps to download. With osu.direct, you can enjoy blazing fast speeds without any subscription or payment. Say goodbye to slow downloads and hello to uninterrupted fun.':
			'Wir kennen die Qualen des Wartens auf Beatmaps beim herunterladen. Mit osu.direct kannst du blitzschnelle Geschwindigkeiten genießen, ohne dass du ein Abonnement abschließen oder bezahlen musst. Verabschiede dich von langsamen Downloads und begrüße den ununterbrochenen Spaß.',
		'Reliability You Can Trust': 'Verlässlichkeit, der Du vertrauen kannst',
		"Previously known as Kitsu, we've rebranded to osu.direct with a commitment to reliability. Trusted by major projects like osu!droid and Akatsuki, you can count on us to deliver seamless service.":
			'Früher unter dem Namen Kitsu bekannt, haben wir uns zu osu.direct umbenannt und uns der Zuverlässigkeit zu verschrieben. Große Projekte wie osu!droid und Akatsuki vertrauen auf uns, und Du kannst dich darauf verlassen, dass wir einen nahtlosen Service liefern.',
		'Wide Compatibility': 'Hohe Kompatibilität',
		"We're all about flexibility. Whether you need support for v1 or v2 API routes, or custom features for your next project, osu.direct has you covered. We're here to adapt to your needs and help you succeed.":
			'Bei uns dreht sich alles um Flexibilität. Egal, ob du Unterstützung für v1- oder v2-API-Routen oder benutzerdefinierte Funktionen für dein nächstes Projekt benötigst, osu.direct hat alles für dich. Wir passen uns an deine Bedürfnisse an und helfen dir, erfolgreich zu sein.',
		'Used and trusted by amazing projects like':
			'Verwendet und vertraut von erstaunlichen Projekten wie',
		'All Rights Reserved.': 'Alle Rechte vorbehalten.',
		'type in keywords...': 'Stichwörter eingeben...',
		Mode: 'Modus',
		Any: 'Alle',
		Qualified: 'Qualifiziert',
		Pending: 'Ausstehend',
		Graveyard: 'Begraben',
		graveyard: 'begraben',
		submitted: 'hochgeladen',
		'last updated': 'zuletzt aktualisiert',
		Length: 'Länge',
		Count: 'Anzahl',
		CTRL: 'STRG',
		'Quick Search': 'Schnellsuche',
		'showing {{from}} - {{to}} of {{total}} entries':
			'zeige {{from}} - {{to}} von {{total}} ergebnissen',
		'Search for Beatmaps...': 'Beatmaps suchen...',
		'Search for something c:': 'Suche nach etwas c:',
		'Loading Results...': 'Lade Ergebnisse...',
		'Search Results': 'Suchergebnisse',
		'No results found.': 'Keine Ergebnisse gefunden.',
		Browse: 'Suchen',
		'Support us!': 'Unterstütze uns!',
		'Join Discord': 'Discord beitreten',
		'More from': 'Mehr von',
		'Similar Sets': 'Ähnliche Sets',
		Categories: 'Kategorien',
		Hide: 'Verstecken',
		Show: 'Zeigen',
		Only: 'Nur',
		'Spotlighted beatmaps': 'Beatmaps im Spotlight',
		'Has Leaderboard': 'Hat Ranglisten',
		'Has Video': 'Hat Video',
		'Has Storyboard': 'Hat Storyboard',
		'Has Video and Storyboard': 'Hat Video und Storyboard',
		'BeatmapSet not found!': 'BeatmapSet nicht gefunden!',
		'Back to Browse Page': 'Zurück zur Browse Page',
		'Mapped by': 'Erstellt von',
		'mapped by': 'erstellt von',
		Title: 'Titel',
		Difficulty: 'Sternebewertung',
		Updated: 'Aktualisiert',
		updated: 'aktualisiert',
		created: 'erstellt',
		Submitted: 'Hochgeladen',
		Favourites: 'Favoriten',
		'Download Queue': 'Warteschlange',
		'Download Maps': 'Maps herrunterladen',
		'Download Maps (no video)': 'Maps herrunterladen (ohne video)',
		'Download (no video)': 'Download (ohne video)',
		'Add to collection.db': 'Zu collection.db hinzufügen',
		Favourite: 'Favorisieren',
		Collections: 'Kollektionen',
		'Edit Collection': 'Kollekiton bearbeiten',
		'Delete Collection': 'Kollektion löschen',
		'Show Unranked Guest Participations': 'Ungerankte Gastteilnahmen anzeigen',
		'Account History': 'Account Verlauf',
		'Guest Participation Beatmaps': 'Als Gast beigetragene Beatmaps',
		'Pending Beatmaps': 'Ausstehende Beatmaps',
		'Graveyarded Beatmaps': 'Begrabene Beatmaps',
		'This user has no ranked maps.': 'Dieser User hat keine gerankten Maps.',
		'This user has no loved maps.': 'Dieser User hat keine loved Maps.',
		'This user has no guest participations.': 'Dieser User hat keine als Gast beigetragene Maps.',
		'This user has no pending maps.': 'Dieser User hat keine ausstehenden Maps.',
		'This user has no WIP maps.': 'Dieser User hat keine WIP Maps.',
		'This user has no graveyarded maps.': 'Dieser User hat keine begrabenen Maps.',
		'Scan this QR code to instantly access the BeatmapSet page on any device, download it, and share it across different platforms.':
			'Scanne diesen QR-Code, um direkt die BeatmapSet-Seite auf jedem Gerät zu öffnen, sie herunterzuladen und auf verschiedenen Plattformen zu teilen.',
		'Download QR Code': 'QR-Code herunterladen',
		'Site not found!': 'Seite nicht gefunden!',
		'show more': 'mehr anzeigen',
		'Star Rating': 'Sternebewertung',
		Accuracy: 'Präzision',
		by: 'von',
		'Favourite Beatmaps': 'Beliebte Beatmaps',
		'Most Played Beatmaps': 'Meist gespielte Beatmaps',
		'New Ranked Beatmaps': 'Neu gerankte Beatmaps',
		'Seamless Compatibility': 'Nahtlose Kompatibilität',
		'seamlessly works with both osu!stable and osu!lazer clients, effortlessly importing downloaded beatmaps regardless of which client you use, ensuring a consistent and hassle-free experience across different versions of the game.':
			'Arbeitet nahtlos mit den beiden Clients osu!stable und osu!lazer zusammen und importiert heruntergeladene Beatmaps mühelos, unabhängig davon, welchen Client du verwendest, um eine konsistente und problemlose Erfahrung über verschiedene Versionen des Spiels hinweg zu gewährleisten.',
		'Easy Handling': 'Einfache Handhabung',
		'offers the same extensive features as the official website, providing users with a comprehensive platform for discovering and downloading beatmaps directly from their desktop application, streamlining the entire process.':
			'Bietet dieselben umfangreichen Funktionen wie die offizielle Website und stellt den Nutzern eine umfassende Plattform zum Entdecken und Herunterladen von Beatmaps direkt aus ihrer Desktop-Anwendung zur Verfügung, wodurch der gesamte Prozess vereinfacht wird.',
		'Familiar and Hassle-free Experience': 'Vertraute und mühelose Erfahrung',
		'ensures a seamless transition from the website by mirroring its intuitive and user-friendly interface. With the same UI design, users can effortlessly navigate, search, and download their favorite beatmaps with minimal effort, promoting overall usability and satisfaction without the need for relearning or adjustment.':
			'Sorgt für einen nahtlosen Übergang von der Website, indem es deren intuitive und benutzerfreundliche Oberfläche widerspiegelt. Mit dem gleichen UI-Design können die Benutzer mühelos navigieren, suchen und ihre Lieblings-Beatmaps mit minimalem Aufwand herunterladen, was die allgemeine Benutzerfreundlichkeit und Zufriedenheit fördert, ohne dass ein Umlernen oder eine Anpassung erforderlich ist.',
		'Why should i use the Desktop App?': 'Wieso sollte ich die Desktop App benutzen?',
		'Track all your downloads here in this Download Queue Manager.':
			'Verfolge alle deine Downloads hier in diesem Download Manager.',
		'Add advanced filter': 'Erweiterten Filter hinzufügen',
		'Select a filter value': 'Wähle einen Filterwert',
		'This is taking longer than expected...': 'Das dauert länger als erwartet...',
		'API Documentation': 'API-Dokumentation',
		'This beatmap contains a video': 'Diese Beatmap beinhaltet ein Video',
		'This beatmap contains a storyboard': 'Diese Beatmap beinhaltet ein Storyboard',
		'This beatmap is spotlighted': 'Diese Beatmap ist spotlighted',
		'Search, discover, and download osu! beatmaps': 'Suche, entdecke und downloade osu! beatmaps',
		'effortlessly. Built for speed and simplicity, designed for players, by players.':
			'mühelos. Entwickelt für Geschwindigkeit und Einfachheit, für Spieler, von Spielern.',
		'See why players love osu.direct': 'Schau, warum Spieler osu.direct lieben',
		'Terms of Service': 'Nutzungsbedingungen',
		'Download for Windows': 'Download für Windows',
		'By accessing or using our website, you agree to comply with and be bound by the following Terms of Service ("TOS"). These terms are in place to ensure fair and lawful use of our services. By continuing to browse or use osu.direct, you confirm that you have read, understood, and agreed to these terms. If you do not agree with any part of these terms, please refrain from using our service.':
			'Indem Sie auf unsere Website zugreifen oder sie nutzen, erklären Sie sich damit einverstanden, die folgenden Nutzungsbedingungen ("TOS") einzuhalten. Diese Bedingungen dienen dazu, eine faire und rechtmäßige Nutzung unserer Dienste zu gewährleisten. Indem Sie osu.direct weiterhin durchsuchen oder nutzen, bestätigen Sie, dass Sie diese Bedingungen gelesen und verstanden haben und ihnen zustimmen. Wenn Sie mit irgendeinem Teil dieser Bedingungen nicht einverstanden sind, sehen Sie bitte von der Nutzung unseres Dienstes ab.',
		'We encourage you to review these Terms of Service periodically, as they may be updated to reflect changes in legal requirements, service improvements, or community guidelines. Your continued use of osu.direct after any modifications constitutes acceptance of the revised terms.':
			'Wir empfehlen Ihnen, diese Nutzungsbedingungen in regelmäßigen Abständen zu überprüfen, da sie aktualisiert werden können, um Änderungen der rechtlichen Anforderungen, Serviceverbesserungen oder Community-Richtlinien zu berücksichtigen. Wenn Sie osu.direct nach einer Änderung weiterhin nutzen, erklären Sie sich mit den überarbeiteten Bedingungen einverstanden.',
		'1. Acceptance of Terms': '1. Akzeptanz der Bedingungen',
		'By using osu.direct, you agree to these Terms of Service and our Privacy Policy. You acknowledge that these terms form a binding agreement between you and osu.direct. We reserve the right to modify these terms at any time to accommodate new features, legal requirements, or other considerations. Any updates will be clearly communicated on our website, and it is your responsibility to stay informed about changes. Continued use of osu.direct signifies your acceptance of any modifications.':
			'Durch die Nutzung von osu.direct erklären Sie sich mit diesen Nutzungsbedingungen und unserer Datenschutzrichtlinie einverstanden. Sie erkennen an, dass diese Bedingungen eine verbindliche Vereinbarung zwischen Ihnen und osu.direct darstellen. Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern, um neue Funktionen, rechtliche Anforderungen oder andere Überlegungen zu berücksichtigen. Alle Aktualisierungen werden auf unserer Website deutlich bekannt gegeben, und es liegt in Ihrer Verantwortung, sich über Änderungen zu informieren. Die weitere Nutzung von osu.direct bedeutet, dass Sie mit den Änderungen einverstanden sind.',
		'2. Use of the Service': '2. Nutzung des Dienstes',
		'osu.direct provides a mirror for osu! beatmaps for convenience.':
			'osu.direct bietet der Einfachheit halber eine backup für osu! beatmaps.',
		'You agree not to use this service for any illegal or unauthorized purposes.':
			'Sie verpflichten sich, diesen Dienst nicht für illegale oder unbefugte Zwecke zu nutzen.',
		'You may not attempt to disrupt, modify, or exploit the service in any way.':
			'Sie dürfen nicht versuchen, den Dienst in irgendeiner Weise zu stören, zu verändern oder auszunutzen.',
		'Users can authenticate with Discord to create and manage beatmap collections.':
			'Benutzer können sich mit Discord authentifizieren, um Beatmap-Sammlungen zu erstellen und zu verwalten.',
		'Users can download beatmaps directly from the website.':
			'Die Nutzer können Beatmaps direkt von der Website herunterladen.',
		'Authentication is handled through the Discord API, and basic user data such as email, username and token is collected. This data is encrypted on our end to ensure security.':
			'Die Authentifizierung erfolgt über die Discord-API, und es werden grundlegende Benutzerdaten wie E-Mail, Benutzername und Token erfasst. Diese Daten werden auf unserer Seite verschlüsselt, um die Sicherheit zu gewährleisten.',
		'3. Intellectual Property': '3. Geistiges Eigentum',
		'osu.direct does not claim ownership of the beatmaps hosted on the platform. All beatmaps remain the property of their respective creators.':
			'osu.direct erhebt keinen Anspruch auf das Eigentum an den auf der Plattform gehosteten Beatmaps. Alle Beatmaps verbleiben im Eigentum ihrer jeweiligen Schöpfer.',
		'By using the service, you acknowledge that osu! and its assets are trademarks of ppy Pty Ltd.':
			'Durch die Nutzung des Dienstes erkennen Sie an, dass osu! und seine Vermögenswerte Marken von ppy Pty Ltd sind.',
		'If you are a content owner and wish to request removal of your work, please contact us.':
			'Wenn Sie ein Eigentümer von Inhalten sind und die Entfernung Ihres Werks beantragen möchten, wenden Sie sich bitte an uns.',
		'4. User Conduct': '4. Benutzerverhalten',
		'You agree to use the service responsibly and not abuse it.':
			'Sie verpflichten sich, den Dienst verantwortungsbewusst zu nutzen und ihn nicht zu missbrauchen.',
		'Do not upload or distribute any malicious, illegal, or copyrighted content without permission.':
			'Laden Sie keine bösartigen, illegalen oder urheberrechtlich geschützten Inhalte ohne Erlaubnis hoch oder verbreiten Sie diese nicht.',
		'Automatic downloading is allowed, but spamming API routes will lead to a ban.':
			'Automatisches Herunterladen ist erlaubt, aber Spamming von API-Routen führt zu einer Sperre.',
		'5. Liability Disclaimer': '5. Haftungsausschluss',
		'osu.direct is provided "as is" without any warranties or guarantees.':
			'osu.direct wird "wie besehen" zur Verfügung gestellt, ohne jegliche Garantien oder Gewährleistungen.',
		'We are not responsible for any damage, loss of data, or disruptions caused by using our service.':
			'Wir haften nicht für Schäden, Datenverluste oder Störungen, die durch die Nutzung unseres Dienstes verursacht werden.',
		'We reserve the right to limit or terminate access to the service at any time.':
			'Wir behalten uns das Recht vor, den Zugang zum Dienst jederzeit zu beschränken oder zu beenden.',
		'6. Termination': '6. Beendigung',
		'We reserve the right to suspend or terminate access to osu.direct at our discretion if users violate these terms or engage in harmful behavior. We may also restrict access to the service if it is necessary to protect the security and integrity of our platform.':
			'Wir behalten uns das Recht vor, den Zugang zu osu.direct nach eigenem Ermessen auszusetzen oder zu beenden, wenn Nutzer gegen diese Bedingungen verstoßen oder ein schädliches Verhalten an den Tag legen. Wir können auch den Zugang zum Dienst einschränken, wenn dies notwendig ist, um die Sicherheit und Integrität unserer Plattform zu schützen.',
		'7. Changes to the Terms': '7. Änderungen der Bedingungen',
		'We may modify these terms at any time. Continued use of osu.direct after changes are posted constitutes acceptance of the updated terms.':
			'Wir können diese Bedingungen jederzeit ändern. Die fortgesetzte Nutzung von osu.direct nach der Veröffentlichung von Änderungen bedeutet die Annahme der aktualisierten Bedingungen.',
		'8. Contact': '8. Kontakt',
		'For any questions or concerns about these terms, please contact us on our Discord:':
			'Wenn Sie Fragen oder Bedenken bezüglich dieser Bedingungen haben, kontaktieren Sie uns bitte auf unserem Discord:',
		'Last Updated': 'Zuletzt aktualisiert',
		'Discover and Download Beatmaps with Ease': 'Beatmaps ganz einfach entdecken und herunterladen',
		'Experience the seamless and powerful osu.direct app':
			'Erlebe die nahtlose und leistungsstarke osu.direct App',
		'Ready to get started?': 'Bereit durchzustarten?',
		'Download the app now and explore beatmaps like never before.':
			'Lade jetzt die App herunter und entdecke Beatmaps wie nie zuvor.',
		Download: 'Herunterladen',
		'Get Started': 'Jetzt loslegen'
	}
};

export default language;
