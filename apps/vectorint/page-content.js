(() => {
  const translations = window.K2040_TRANSLATIONS;
  if (!translations) return;

  const vectorint = {
    en: {
      developmentVersion: "Development v0.0.12",
      taggedVersion: "Latest tagged source v0.0.11",
      publishedDownload: "GitHub Release v0.0.8",
      downloadNote: "Vectorint 0.0.12 is the current development version. The latest developer-signed APK published on GitHub Releases remains v0.0.8; v0.0.12 has not been published as an APK.",
      whatsNewTitle: "What's new in 0.0.12",
      change1: "Tighter About card with clearer navigation and a current-version changelog",
      change2: "Dedicated licence and Sources views with labelled Repository, App website, Main website, and Ko-fi links",
      change3: "New in-app Privacy view reflecting the public privacy policy",
      change4: "Clearer privacy wording for local data, Android document providers, reminders, and data removal",
      change5: "The budgeting model and local-first behavior remain unchanged from 0.0.11",
      aboutText: "Vectorint starts with your current funds and shows Available now. Separate accounts, recurring income and expenses, widgets, and local backups refine the picture when you need them. The 0.0.12 development update focuses on clearer About, source, licence, and privacy information.",
      feature1: "Available now across the local accounts you choose to include",
      feature2: "One-off and recurring income and expenses with flexible timing",
      feature3: "Detailed and compact home-screen widgets plus monthly category overviews",
      feature4: "Local reminders with manual and automatic readable JSON backups",
      feature5: "Full-page Settings, three color palettes, English/German UI, and in-app About and Privacy information",
      privacyText: "Budget data stays in Vectorint's private app storage. Vectorint has no account, Internet permission, ads, analytics, telemetry, or tracking. Backups are saved only through Android locations you choose; a third-party document provider may synchronize those files under its own policy.",
      sourceText: "Vectorint is open source under GPL-3.0-only. The current development version is 0.0.12. The Vectorint Raven artwork is licensed separately under CC BY 4.0; third-party components retain their own licences.",
      screenshotsDescription: "Current app screenshots from the public development source. The published GitHub download remains v0.0.8."
    },
    de: {
      developmentVersion: "Entwicklung v0.0.12",
      taggedVersion: "Neuester Quellcode-Tag v0.0.11",
      publishedDownload: "GitHub-Release v0.0.8",
      downloadNote: "Vectorint 0.0.12 ist die aktuelle Entwicklungsversion. Die neueste über GitHub Releases veröffentlichte entwicklersignierte APK bleibt v0.0.8; v0.0.12 wurde noch nicht als APK veröffentlicht.",
      whatsNewTitle: "Neu in 0.0.12",
      change1: "Kompakterer „Über Vectorint“-Dialog mit klarerer Navigation und Changelog zur aktuellen Version",
      change2: "Eigene Bereiche für Lizenzen und Quellen mit beschrifteten Links zu Repository, App-Website, Hauptwebsite und Ko-fi",
      change3: "Neue Datenschutzansicht in der App, die die öffentliche Datenschutzrichtlinie widerspiegelt",
      change4: "Klarere Datenschutzhinweise zu lokalen Daten, Android-Dokumentanbietern, Erinnerungen und Datenlöschung",
      change5: "Budgetmodell und lokales Verhalten bleiben gegenüber 0.0.11 unverändert",
      aboutText: "Vectorint startet mit deinem aktuellen Guthaben und zeigt „Jetzt verfügbar“. Getrennte Konten, wiederkehrende Einnahmen und Ausgaben, Widgets und lokale Sicherungen verfeinern das Bild, wenn du sie brauchst. Die Entwicklungsversion 0.0.12 konzentriert sich auf klarere Angaben zu Über, Quellcode, Lizenzen und Datenschutz.",
      feature1: "„Jetzt verfügbar“ über die lokalen Konten, die du einbeziehen möchtest",
      feature2: "Einmalige und wiederkehrende Einnahmen und Ausgaben mit flexibler Zeitplanung",
      feature3: "Ausführliche und kompakte Startbildschirm-Widgets sowie monatliche Kategorieübersichten",
      feature4: "Lokale Erinnerungen mit manuellen und automatischen lesbaren JSON-Sicherungen",
      feature5: "Ganzseitige Einstellungen, drei Farbpaletten, deutsche/englische Oberfläche sowie Über- und Datenschutzinfos in der App",
      privacyText: "Budgetdaten bleiben im privaten App-Speicher von Vectorint. Vectorint hat kein Konto, keine Internetberechtigung, Werbung, Analyse, Telemetrie oder Tracking. Sicherungen werden nur über von dir gewählte Android-Speicherorte abgelegt; ein Drittanbieter-Dokumentanbieter kann diese Dateien nach seiner eigenen Richtlinie synchronisieren.",
      sourceText: "Vectorint ist unter GPL-3.0-only quelloffen. Die aktuelle Entwicklungsversion ist 0.0.12. Die Vectorint-Raben-Grafik steht separat unter CC BY 4.0; Drittanbieter-Komponenten behalten ihre eigenen Lizenzen.",
      screenshotsDescription: "Aktuelle App-Screenshots aus dem öffentlichen Entwicklungsquellcode. Der veröffentlichte GitHub-Download bleibt v0.0.8."
    },
    "pt-PT": {
      developmentVersion: "Desenvolvimento v0.0.12",
      taggedVersion: "Código-fonte com tag mais recente v0.0.11",
      publishedDownload: "GitHub Release v0.0.8",
      downloadNote: "O Vectorint 0.0.12 é a versão de desenvolvimento atual. O APK mais recente assinado pelo programador e publicado no GitHub Releases continua a ser o v0.0.8; o v0.0.12 ainda não foi publicado como APK.",
      whatsNewTitle: "Novidades na 0.0.12",
      change1: "Cartão Sobre mais compacto, com navegação mais clara e registo de alterações da versão atual",
      change2: "Vistas dedicadas de licenças e Fontes com ligações identificadas para Repositório, site da app, site principal e Ko-fi",
      change3: "Nova vista de Privacidade na app que reflete a política pública de privacidade",
      change4: "Texto de privacidade mais claro sobre dados locais, fornecedores de documentos Android, lembretes e remoção de dados",
      change5: "O modelo de orçamento e o comportamento local permanecem inalterados em relação à 0.0.11",
      aboutText: "O Vectorint começa com os seus fundos atuais e mostra Disponível agora. Contas separadas, rendimentos e despesas recorrentes, widgets e cópias de segurança locais refinam o resultado quando necessário. A versão de desenvolvimento 0.0.12 centra-se em informação mais clara sobre a app, código-fonte, licenças e privacidade.",
      feature1: "Disponível agora nas contas locais que escolher incluir",
      feature2: "Rendimentos e despesas únicos e recorrentes com calendário flexível",
      feature3: "Widgets detalhado e compacto no ecrã inicial e resumos mensais por categoria",
      feature4: "Lembretes locais com cópias de segurança JSON legíveis, manuais e automáticas",
      feature5: "Definições em página completa, três paletas de cores, interface em inglês/alemão e informação de Sobre e Privacidade na app",
      privacyText: "Os dados de orçamento permanecem no armazenamento privado da app Vectorint. O Vectorint não tem conta, permissão de Internet, publicidade, análises, telemetria ou rastreio. As cópias de segurança são guardadas apenas em locais Android escolhidos por si; um fornecedor de documentos de terceiros pode sincronizar esses ficheiros segundo a sua própria política.",
      sourceText: "O Vectorint é código aberto sob GPL-3.0-only. A versão de desenvolvimento atual é a 0.0.12. A ilustração do corvo Vectorint é licenciada separadamente sob CC BY 4.0; os componentes de terceiros mantêm as respetivas licenças.",
      screenshotsDescription: "Capturas de ecrã atuais da app a partir do código-fonte público de desenvolvimento. O download publicado no GitHub continua a ser o v0.0.8."
    },
    es: {
      developmentVersion: "Desarrollo v0.0.12",
      taggedVersion: "Último código fuente etiquetado v0.0.11",
      publishedDownload: "GitHub Release v0.0.8",
      downloadNote: "Vectorint 0.0.12 es la versión de desarrollo actual. El APK más reciente firmado por el desarrollador y publicado en GitHub Releases sigue siendo v0.0.8; v0.0.12 aún no se ha publicado como APK.",
      whatsNewTitle: "Novedades de 0.0.12",
      change1: "Tarjeta Acerca de más compacta, con navegación más clara y registro de cambios de la versión actual",
      change2: "Vistas dedicadas de licencias y Fuentes con enlaces identificados a Repositorio, sitio de la app, sitio principal y Ko-fi",
      change3: "Nueva vista de Privacidad dentro de la app que refleja la política pública de privacidad",
      change4: "Texto de privacidad más claro sobre datos locales, proveedores de documentos de Android, recordatorios y eliminación de datos",
      change5: "El modelo de presupuesto y el comportamiento local no cambian respecto a 0.0.11",
      aboutText: "Vectorint empieza con tus fondos actuales y muestra Disponible ahora. Las cuentas separadas, los ingresos y gastos recurrentes, los widgets y las copias de seguridad locales afinan el resultado cuando los necesitas. La versión de desarrollo 0.0.12 se centra en información más clara sobre la app, el código fuente, las licencias y la privacidad.",
      feature1: "Disponible ahora en las cuentas locales que elijas incluir",
      feature2: "Ingresos y gastos únicos y recurrentes con programación flexible",
      feature3: "Widgets detallado y compacto para la pantalla de inicio y resúmenes mensuales por categoría",
      feature4: "Recordatorios locales con copias de seguridad JSON legibles manuales y automáticas",
      feature5: "Ajustes a página completa, tres paletas de color, interfaz en inglés/alemán e información de Acerca de y Privacidad dentro de la app",
      privacyText: "Los datos de presupuesto permanecen en el almacenamiento privado de Vectorint. Vectorint no tiene cuenta, permiso de Internet, publicidad, análisis, telemetría ni seguimiento. Las copias de seguridad solo se guardan en ubicaciones de Android que elijas; un proveedor de documentos de terceros puede sincronizar esos archivos según su propia política.",
      sourceText: "Vectorint es de código abierto bajo GPL-3.0-only. La versión de desarrollo actual es 0.0.12. La ilustración del cuervo Vectorint se licencia por separado bajo CC BY 4.0; los componentes de terceros conservan sus propias licencias.",
      screenshotsDescription: "Capturas actuales de la app procedentes del código fuente público de desarrollo. La descarga publicada en GitHub sigue siendo v0.0.8."
    },
    fr: {
      developmentVersion: "Développement v0.0.12",
      taggedVersion: "Dernier code source balisé v0.0.11",
      publishedDownload: "GitHub Release v0.0.8",
      downloadNote: "Vectorint 0.0.12 est la version de développement actuelle. Le dernier APK signé par le développeur et publié sur GitHub Releases reste la v0.0.8 ; la v0.0.12 n’a pas encore été publiée sous forme d’APK.",
      whatsNewTitle: "Nouveautés de la 0.0.12",
      change1: "Carte À propos plus compacte, avec une navigation plus claire et le journal des modifications de la version actuelle",
      change2: "Vues dédiées aux licences et aux Sources avec des liens libellés vers le dépôt, le site de l’app, le site principal et Ko-fi",
      change3: "Nouvelle vue Confidentialité dans l’app reflétant la politique de confidentialité publique",
      change4: "Texte de confidentialité plus clair sur les données locales, les fournisseurs de documents Android, les rappels et la suppression des données",
      change5: "Le modèle budgétaire et le fonctionnement local restent inchangés par rapport à la 0.0.11",
      aboutText: "Vectorint commence avec vos fonds actuels et affiche Disponible maintenant. Les comptes séparés, les revenus et dépenses récurrents, les widgets et les sauvegardes locales affinent le résultat lorsque vous en avez besoin. La version de développement 0.0.12 met l’accent sur des informations plus claires concernant l’app, le code source, les licences et la confidentialité.",
      feature1: "Disponible maintenant pour les comptes locaux que vous choisissez d’inclure",
      feature2: "Revenus et dépenses ponctuels et récurrents avec planification flexible",
      feature3: "Widgets détaillé et compact pour l’écran d’accueil et aperçus mensuels par catégorie",
      feature4: "Rappels locaux avec sauvegardes JSON lisibles, manuelles et automatiques",
      feature5: "Réglages en pleine page, trois palettes de couleurs, interface anglais/allemand et informations À propos et Confidentialité dans l’app",
      privacyText: "Les données budgétaires restent dans le stockage privé de Vectorint. Vectorint n’utilise aucun compte, permission Internet, publicité, analyse, télémétrie ou suivi. Les sauvegardes sont enregistrées uniquement dans les emplacements Android que vous choisissez ; un fournisseur de documents tiers peut synchroniser ces fichiers selon sa propre politique.",
      sourceText: "Vectorint est open source sous GPL-3.0-only. La version de développement actuelle est la 0.0.12. L’illustration du corbeau Vectorint est sous licence distincte CC BY 4.0 ; les composants tiers conservent leurs propres licences.",
      screenshotsDescription: "Captures d’écran actuelles de l’app provenant du code source public de développement. Le téléchargement publié sur GitHub reste la v0.0.8."
    }
  };

  for (const [language, copy] of Object.entries(vectorint)) {
    const page = translations[language]?.pages?.vectorint;
    if (page) Object.assign(page, copy);
  }
})();
