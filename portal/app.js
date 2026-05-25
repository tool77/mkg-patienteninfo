const procedures = [
  {
    id: "extraktion",
    title: "Zahnextraktion",
    category: "chirurgie",
    status: "Final",
    source: "../extraktion/merkblatt_extraktion_ausfuehrlich_final.html",
    sourcePdf: "../extraktion/merkblatt_extraktion_ausfuehrlich_final.pdf",
    sourceLabel: "Finales Merkblatt öffnen",
    languages: {
      de: {
        label: "Deutsch",
        source: "../extraktion/merkblatt_extraktion_ausfuehrlich_final.html",
        sourcePdf: "../extraktion/merkblatt_extraktion_ausfuehrlich_final.pdf",
        pdfLabel: "PDF herunterladen",
        sourceLabel: "Finales Merkblatt öffnen"
      },
      en: {
        label: "English",
        source: "../extraktion/merkblatt_extraktion_ausfuehrlich_final_en.html",
        sourceLabel: "Open English handout"
      }
    },
    summary: "Die Zahnentfernung ist notwendig, wenn ein Zahn nicht erhaltungswürdig ist oder andere Behandlungen nicht sinnvoll sind. Danach stehen Nachsorge und spätere Lückenversorgung im Vordergrund.",
    goal: "Das Gespräch kann sich auf Indikation, Schwierigkeit, Provisorium und individuelle Risiken konzentrieren.",
    prep: ["Bei sichtbarer Frontzahnlücke Provisorium vor dem Extraktionstermin mit dem Hauszahnarzt klären.", "Blutverdünner, Bisphosphonate/Denosumab, Diabetes und Allergien angeben.", "Nachsorge- und Schmerzmittelschema lesen."],
    facts: [["Eingriff", "Einfache oder komplexe Zahnentfernung"], ["Dauer", "Meist 10-40 Minuten"], ["Fäden", "Werden nach 1-2 Wochen entfernt"], ["Danach", "Lückenversorgung mit Hauszahnarzt planen"]],
    timeline: [["Vorbereitung", "Medikamente, Provisorium und Anästhesie klären."], ["Entfernung", "Zahn wird gelockert; bei Bedarf in mehrere Stücke geteilt."], ["Wundversorgung", "Wunde wird gereinigt und ggf. vernäht."], ["Schonphase", "Kühlen, weiche Kost, kein Sport."], ["Lückenplanung", "Implantat, Brücke oder Prothese besprechen."]],
    sections: [
      { title: "Einfache und komplexe Extraktion", text: "Bei einfacher Extraktion wird der Zahn gelockert und entfernt. Bei komplexer Situation kann es nötig sein, etwas Knochen abzutragen und den Zahn in mehrere Stücke zu teilen." },
      { title: "Frontzahnlücke", text: "Ein sichtbares Provisorium wird vom Hauszahnarzt vorbereitet und muss vor dem Extraktionstermin fertig sein." },
      { title: "Warum die Lücke wichtig bleibt", text: "Bleibt eine Lücke langfristig offen, können Nachbarzähne kippen oder wandern. Die definitive Versorgung wird separat geplant." }
    ],
    risks: [["Nachblutung", "Selten, aber bei Blutverdünnern besonders relevant."], ["Trockene Alveole", "Schmerzhafte Wundheilungsstörung, häufiger bei Rauchern."], ["Infektion", "In der Regel gut behandelbar."], ["Nerv / MAV", "Je nach Region Unterkiefernerv oder Kieferhöhle relevant."]],
    aftercare: ["Erste 48 Std. kühlen.", "Weiche Kost, kein Sport für etwa eine Woche.", "Keine Aspirin/ASS.", "Ab Tag 2 vorsichtige Mundhygiene."],
    faq: [["Wie lange blutet es?", "Leichte Nachblutung ist möglich; bei starker Blutung Druck ausüben und Praxis kontaktieren."], ["Wann darf ich essen?", "Nach Abklingen der Betäubung, zunächst weich und lauwarm."], ["Was passiert mit der Lücke?", "Optionen sind Implantat, Brücke oder Prothese. Das wird mit dem Hauszahnarzt geplant."]]
  },
  {
    id: "extraktion_postop",
    title: "Nach der Zahnextraktion",
    category: "chirurgie",
    status: "Neu",
    source: "../extraktion/post_op_extraktion.html",
    sourceLabel: "Post-OP-Merkblatt öffnen",
    languages: {
      de: {
        label: "Deutsch",
        source: "../extraktion/post_op_extraktion.html",
        sourceLabel: "Post-OP-Merkblatt öffnen"
      },
      en: {
        label: "English",
        source: "../extraktion/post_op_extraktion_en.html",
        sourceLabel: "Open postoperative instructions"
      }
    },
    keywords: "postoperativ nachsorge zahnextraktion zahnentfernung blutung tupfer trockene alveole dry socket essen trinken sport mundhygiene strohhalm salzwasser kieferhöhle MAV",
    summary: "Postoperative Hinweise nach Einzelzahnextraktion: Tupferdruck, Blutpfropf schützen, Essen, Mundhygiene, Medikamente, Warnzeichen und MAV-Sonderregeln.",
    goal: "Patientinnen und Patienten haben nach der Zahnentfernung einen klaren Fahrplan für Blutungskontrolle, Schonung, Medikamente und Warnzeichen.",
    prep: ["Am OP-Tag vollständig lesen.", "Tupferdruck konstant halten und den Blutpfropf schützen.", "Bei Warnzeichen zuerst unsere postoperative Notfallnummer nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11."],
    facts: [["Fokus", "Erste Stunden und erste Tage"], ["Wichtig", "Blutpfropf schützen: kein Sog, kein Strohhalm, nicht kräftig spülen"], ["Blutung", "30 Min. konstant Druck auf Tupfer oder Stofftaschentuch"], ["Warnzeichen", "Nachblutung, Dry Socket, Fieber, Eiter, Taubheit, Atem-/Schluckprobleme"]],
    timeline: [["OP-Tag", "Ruhe, Tupferdruck, Oberkörper hoch, nicht spülen oder spucken."], ["Ab Folgetag", "Sanfte Mundspülung oder Salzwasser-Mundbad, nicht gurgeln."], ["Tag 2-5", "Trockene Alveole zeigt sich typischerweise mit zunehmendem, ausstrahlendem Schmerz."], ["Woche 1", "Schonung, weiche Kost, ggf. Fadenentfernung."], ["Sofort", "Bei Warnzeichen postoperative Notfallnummer nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    sections: [
      { title: "Die ersten Stunden", text: "Ruhe, Oberkörperhochlagerung und konstanter Tupferdruck sind entscheidend." },
      { title: "Blutpfropf schützen", text: "Kein Strohhalm, keine Sportflasche mit Sog, nicht kräftig spülen, nicht gurgeln und Speichel nicht kräftig ausspucken." },
      { title: "Warnzeichen", text: "Starke Blutung, zunehmende Schmerzen, Fieber, Eiter, anhaltende Taubheit und Atem-/Schluckprobleme müssen abgeklärt werden." }
    ],
    risks: [["Nachblutung", "Druck für 30 Minuten konstant ausüben; bei Persistenz melden."], ["Trockene Alveole", "Zunehmende, ausstrahlende Schmerzen ab Tag 2-5, oft mit schlechtem Geschmack oder Geruch."], ["Infektion", "Fieber, Eiter oder übler Geschmack."], ["Atem-/Schluckprobleme", "Postoperative Notfallnummer nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    aftercare: ["Ruhe am OP-Tag.", "Tupferdruck nicht ständig unterbrechen.", "Kein Sog an der Wunde: kein Strohhalm, nicht kräftig spülen oder ausspucken.", "Ausreichend essen und trinken.", "Kein Alkohol, Nikotin, Kaffee oder Energydrinks für mindestens 3-5 Tage."],
    faq: [["Wann darf ich essen?", "Wenn die Betäubung vollständig abgeklungen ist."], ["Wie stoppe ich eine Nachblutung?", "30 Minuten konstant auf Tupfer, Mullbinde oder sauberes Stofftaschentuch beißen und nicht ständig kontrollieren."], ["Was gilt bei Oberkiefer und Kieferhöhle?", "Nur wenn wir es Ihnen gesagt haben: nicht schnäuzen, mit offenem Mund niesen und Druckausgleich vermeiden."], ["Wann muss ich sofort handeln?", "Bei Problemen zuerst unsere postoperative Notfallnummer nutzen. Wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Nur bei lebensbedrohlicher Notlage, Atemnot, starker Schluckbehinderung oder raschem Anschwellen von Mundboden, Hals oder Zunge 112 rufen."]]
  },
  {
    id: "weisheitszahn",
    title: "Weisheitszahnentfernung",
    category: "chirurgie",
    status: "Final",
    source: "../weisheitszahn/merkblatt_weisheitszahn_ausfuehrlich_final.html",
    sourcePdf: "../weisheitszahn/merkblatt_weisheitszahn_ausfuehrlich_final.pdf",
    languages: {
      de: {
        label: "Deutsch",
        source: "../weisheitszahn/merkblatt_weisheitszahn_ausfuehrlich_final.html",
        sourcePdf: "../weisheitszahn/merkblatt_weisheitszahn_ausfuehrlich_final.pdf",
        sourceLabel: "Finales Handout öffnen",
        pdfLabel: "PDF herunterladen"
      },
      en: {
        label: "English",
        source: "../weisheitszahn/merkblatt_weisheitszahn_ausfuehrlich_final_en.html",
        sourceLabel: "Open English handout"
      }
    },
    summary: "Weisheitszähne werden entfernt, wenn Platzmangel, Entzündungen, Schädigung von Nachbarzähnen oder ungünstige Lage zu erwarten sind.",
    goal: "Patientinnen und Patienten kennen OP-Ablauf, typische Schwellung, Nerv-/Kieferhöhlenrisiken und Nachsorge.",
    prep: ["Schonzeit nach dem Eingriff einplanen.", "Medikamente, Allergien und Vorerkrankungen angeben.", "Warnsignale und Schmerztherapie vorab lesen."],
    facts: [["Region", "Ober- und/oder Unterkiefer"], ["Typisch", "Schwellung 2-3 Tage zunehmend"], ["Fäden", "Werden nach 1-2 Wochen entfernt"], ["Risiken", "Nerv, Kieferhöhle, Infektion, Nachblutung"]],
    timeline: [["Planung", "Röntgenbild, Lagebeurteilung und Anästhesieentscheidung."], ["OP", "Zahn wird freigelegt, ggf. Knochen abgetragen und Zahn in mehrere Stücke geteilt."], ["Erste Tage", "Kühlen, Schwellung, weiche Kost, Schmerzmittel."], ["Kontrolle", "Wundkontrolle und Fadenentfernung."], ["Heilung", "Knochen und Weichgewebe stabilisieren sich über Wochen."]],
    sections: [
      { title: "Warum entfernen", text: "Häufige Gründe sind wiederkehrende Entzündungen, Platzmangel, Zystenbildung, Schäden an Nachbarzähnen oder ungünstige Lage." },
      { title: "Unterkiefer und Nerv", text: "Der Unterkiefernerv kann in der Nähe der Wurzeln liegen. Eine vorübergehende Taubheit ist möglich, bleibende Schäden sind selten." },
      { title: "Oberkiefer und Kieferhöhle", text: "Im Oberkiefer kann die Kieferhöhle relevant sein. Falls eine MAV entsteht, wird sie direkt verschlossen." }
    ],
    risks: [["Schwellung / Hämatom", "Häufig und meist vorübergehend."], ["Nachblutung", "Mit Druck meist gut kontrollierbar."], ["Infektion / trockene Alveole", "Schmerzhaft, aber behandelbar."], ["Nerv / Kieferhöhle", "Anatomisch abhängig und röntgenologisch planbar."]],
    aftercare: ["Kühlen, Kopf hochlagern.", "Weiche Kost und körperliche Schonung.", "Keine Aspirin/ASS.", "Bei Atem-/Schluckproblemen oder rascher Schwellung sofort postoperative Notfallnummer nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11."],
    faq: [["Wann ist die Schwellung am stärksten?", "Häufig am zweiten bis dritten Tag."], ["Wann darf ich Sport machen?", "Meist nach etwa einer Woche, abhängig vom Verlauf."], ["Wann muss ich sofort anrufen?", "Bei Fieber, starker Blutung, zunehmender Schwellung oder Atem-/Schluckproblemen zuerst die postoperative Notfallnummer nutzen. Wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Nur bei lebensbedrohlicher Notlage 112."]]
  },
  {
    id: "weisheitszahn_postop",
    title: "Nach der Weisheitszahn-OP",
    category: "chirurgie",
    status: "Neu",
    source: "../weisheitszahn/post_op_weisheitszahn.html",
    sourcePdf: "../weisheitszahn/post_op_weisheitszahn.pdf",
    sourceLabel: "Post-OP-Merkblatt öffnen",
    languages: {
      de: {
        label: "Deutsch",
        source: "../weisheitszahn/post_op_weisheitszahn.html",
        sourcePdf: "../weisheitszahn/post_op_weisheitszahn.pdf",
        sourceLabel: "Post-OP-Merkblatt öffnen",
        pdfLabel: "PDF herunterladen"
      },
      en: {
        label: "English",
        source: "../weisheitszahn/post_op_weisheitszahn_en.html",
        sourceLabel: "Open postoperative instructions"
      }
    },
    keywords: "postoperativ nachsorge verhalten kühlen tupfer schwellung nachblutung schmerzmittel essen trinken sport notfall strohhalm salzwasser mundspülung kieferhöhle dry socket trockene alveole",
    summary: "Postoperative Hinweise für die ersten Stunden und Tage nach Weisheitszahnentfernung: Ruhe, Kühlung, Essen, Medikamente, Warnzeichen und Kontakt.",
    goal: "Patientinnen und Patienten haben direkt nach dem Eingriff einen klaren Fahrplan für Verhalten, Medikamente und Warnzeichen.",
    prep: ["Am OP-Tag vollständig lesen.", "Medikamente genau nach Plan einnehmen.", "Bei Warnzeichen zuerst unsere postoperative Notfallnummer nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11."],
    facts: [["Fokus", "Erste Stunden und erste Woche"], ["Kühlung", "Feucht, mild, 10 Min. kühlen / 10 Min. Pause"], ["Wichtig", "Kein Sog: kein Strohhalm, nicht kräftig spülen oder ausspucken"], ["Warnzeichen", "Blutung, Fieber, Eiter, zunehmende Schmerzen, Atem-/Schluckprobleme"]],
    timeline: [["OP-Tag", "Ruhe, Oberkörper erhöht, Tupfer konstant halten, milde feuchte Kühlung, kein Sog an der Wunde."], ["Ab Folgetag", "Sanfte Mundspülung oder Salzwasser-Mundbad, nicht gurgeln."], ["Tag 2-3", "Schwellung und Schmerzen können ihren Höhepunkt erreichen."], ["Woche 1", "Schonung, weiche Kost, Fäden werden meist entfernt."], ["Sofort", "Bei Warnzeichen postoperative Notfallnummer nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    sections: [
      { title: "Die ersten Stunden", text: "Ruhe, Oberkörperhochlagerung, konstantes Aufbeißen auf den Tupfer und feuchte milde Kühlung sind entscheidend." },
      { title: "Blutpfropf schützen", text: "Kein Strohhalm, keine Sportflasche mit Sog, nicht kräftig spülen, nicht gurgeln und Speichel nicht kräftig ausspucken." },
      { title: "Warnzeichen", text: "Starke Blutung, Fieber, Eiter, zunehmende Schmerzen nach Besserung, ausstrahlender Schmerz und anhaltende Taubheit müssen abgeklärt werden." }
    ],
    risks: [["Nachblutung", "Druck für 30 Minuten konstant ausüben; bei Persistenz melden."], ["Trockene Alveole", "Zunehmende, ausstrahlende Schmerzen nach anfänglicher Besserung ab Tag 3-4, oft mit schlechtem Geschmack oder Geruch."], ["Infektion", "Fieber, Eiter oder übler Geschmack."], ["Atem-/Schluckprobleme", "Postoperative Notfallnummer nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    aftercare: ["Absolute Ruhe am OP-Tag.", "Feucht und mild kühlen, kein Eispack.", "Kein Sog an der Wunde: kein Strohhalm, nicht kräftig spülen oder ausspucken.", "Ausreichend essen und trinken.", "Kein Alkohol, Nikotin, Kaffee oder Energydrinks für mindestens 3-5 Tage."],
    faq: [["Wann darf ich essen?", "Wenn die Betäubung vollständig abgeklungen ist."], ["Wie kühle ich richtig?", "Feuchtes kühles Tuch, etwa 10 Minuten kühlen und 10 Minuten Pause, kein Eispack."], ["Was gilt bei Oberkiefer und Kieferhöhle?", "Nur wenn wir es Ihnen gesagt haben: nicht schnäuzen, mit offenem Mund niesen und Druckausgleich vermeiden."], ["Wann muss ich sofort handeln?", "Bei Problemen zuerst unsere postoperative Notfallnummer nutzen. Wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Nur bei lebensbedrohlicher Notlage, Atemnot, starker Schluckbehinderung oder raschem Anschwellen von Hals oder Mundboden 112 rufen."]]
  }
];

const wisdomVisualGalleries = {
  opg: {
    title: "Röntgenbild verstehen",
    eyebrow: "Beispielbild",
    description: "Das OPG zeigt die Lage der Weisheitszähne im Ober- und Unterkiefer. Ihre individuelle Situation wird im Gespräch anhand Ihrer eigenen Aufnahme erklärt.",
    images: [
      {
        src: "assets/weisheitszaehne/opg-weisheitszaehne.jpg",
        alt: "OPG-Beispiel mit Weisheitszähnen im Ober- und Unterkiefer",
        caption: "Übersichtsaufnahme: Lage der Weisheitszähne, Nachbarzähne und anatomische Nähebeziehungen."
      }
    ]
  },
  oberkiefer: {
    title: "Ablauf im Oberkiefer",
    eyebrow: "Zeichnung",
    description: "Die Zeichnungen zeigen den typischen Ablauf bei einem retinierten Weisheitszahn im Oberkiefer. Je nach Lage kann der tatsächliche Eingriff einfacher oder umfangreicher sein.",
    images: [
      {
        src: "assets/weisheitszaehne/oberkiefer/01-ausgang.png",
        alt: "Oberkiefer: Ausgangssituation mit Weisheitszahn",
        caption: "Ausgangssituation: Der Weisheitszahn liegt im hinteren Oberkiefer."
      },
      {
        src: "assets/weisheitszaehne/oberkiefer/02-retiniert.png",
        alt: "Oberkiefer: retinierter Weisheitszahn unter Zahnfleisch und Knochen",
        caption: "Retinierte Lage: Der Zahn ist teilweise von Zahnfleisch und Knochen bedeckt."
      },
      {
        src: "assets/weisheitszaehne/oberkiefer/03-schnittfuehrung.png",
        alt: "Oberkiefer: geplante Schnittführung am Zahnfleisch",
        caption: "Das Zahnfleisch wird vorsichtig eröffnet."
      },
      {
        src: "assets/weisheitszaehne/oberkiefer/04-freilegung.png",
        alt: "Oberkiefer: Freilegung des Weisheitszahns",
        caption: "Falls nötig, wird Knochen nur minimal und schonend abgetragen."
      },
      {
        src: "assets/weisheitszaehne/oberkiefer/05-entfernung.png",
        alt: "Oberkiefer: Entfernung des Weisheitszahns",
        caption: "Der Zahn wird gelockert und entfernt."
      },
      {
        src: "assets/weisheitszaehne/oberkiefer/06-naht.png",
        alt: "Oberkiefer: Wundverschluss mit Naht",
        caption: "Die Wunde wird mit einigen Stichen vernäht."
      }
    ]
  },
  unterkiefer: {
    title: "Ablauf im Unterkiefer",
    eyebrow: "Zeichnung",
    description: "Im Unterkiefer ist der Knochen dichter. Deshalb wird der Zahn häufig freigelegt und bei Bedarf in mehrere Stücke geteilt, damit er ohne starken Druck entfernt werden kann.",
    images: [
      {
        src: "assets/weisheitszaehne/unterkiefer/01-ausgang.png",
        alt: "Unterkiefer: Ausgangssituation mit Weisheitszahn",
        caption: "Ausgangssituation: Der Weisheitszahn liegt im hinteren Unterkiefer."
      },
      {
        src: "assets/weisheitszaehne/unterkiefer/02-schnittfuehrung.png",
        alt: "Unterkiefer: geplante Schnittführung am Zahnfleisch",
        caption: "Das Zahnfleisch wird vorsichtig eröffnet."
      },
      {
        src: "assets/weisheitszaehne/unterkiefer/03-freilegung.png",
        alt: "Unterkiefer: Freilegung des Weisheitszahns",
        caption: "Der Zahn wird schonend zugänglich gemacht."
      },
      {
        src: "assets/weisheitszaehne/unterkiefer/04-teilung-mesial.png",
        alt: "Unterkiefer: Teilung des Weisheitszahns in mehrere Stücke",
        caption: "Bei Bedarf wird der Zahn in mehrere Stücke geteilt."
      },
      {
        src: "assets/weisheitszaehne/unterkiefer/05-teilung-distal.png",
        alt: "Unterkiefer: Entfernung einzelner Zahnanteile",
        caption: "Die einzelnen Anteile können dann kontrolliert herausgehoben werden."
      },
      {
        src: "assets/weisheitszaehne/unterkiefer/06-naht.png",
        alt: "Unterkiefer: Wundverschluss mit Naht",
        caption: "Am Ende wird die Wunde mit einigen Stichen verschlossen."
      }
    ]
  }
};

const visualAssetVersion = "20260525-weisheitszahn-visuals-3";
const defaultLanguage = "de";

const state = {
  activeId: new URLSearchParams(window.location.search).get("thema") || "weisheitszahn",
  language: new URLSearchParams(window.location.search).get("lang") || defaultLanguage
};

const activeCategory = document.querySelector("#activeCategory");
const activeTitle = document.querySelector("#activeTitle");
const viewerTitle = document.querySelector("#viewerTitle");
const portalContent = document.querySelector("#portalContent");
const contentTabs = document.querySelector("#contentTabs");
const sectionNav = document.querySelector("#sectionNav");
const languageSwitcher = document.querySelector("#languageSwitcher");
const sourceDocument = document.querySelector("#sourceDocument");
const pdfDocument = document.querySelector("#pdfDocument");
const printPreview = document.querySelector("#printPreview");
let activeVisualGalleryId = null;
let activeVisualIndex = 0;
let visualModal = null;

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getActiveProcedure() {
  return procedures.find((procedure) => procedure.id === state.activeId) || procedures[0];
}

function getProcedureLanguages(procedure) {
  return procedure.languages || {
    de: {
      label: "Deutsch",
      source: procedure.source,
      sourcePdf: procedure.sourcePdf,
      sourceLabel: procedure.sourceLabel,
      pdfLabel: "PDF herunterladen"
    }
  };
}

function getLanguageVariant(procedure) {
  const languages = getProcedureLanguages(procedure);
  const lang = languages[state.language] ? state.language : defaultLanguage;
  state.language = lang;
  return {
    lang,
    ...languages[lang]
  };
}

function procedureUrl(id, language = state.language) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("thema", id);
  if (language !== defaultLanguage) {
    url.searchParams.set("lang", language);
  }
  return url;
}

function renderLanguageSwitcher(procedure) {
  const languages = getProcedureLanguages(procedure);
  const entries = Object.entries(languages);

  if (!languageSwitcher || entries.length <= 1) {
    if (languageSwitcher) {
      languageSwitcher.hidden = true;
      languageSwitcher.innerHTML = "";
    }
    return;
  }

  languageSwitcher.hidden = false;
  languageSwitcher.innerHTML = `
    <div class="language-options">
      ${entries.map(([lang, option]) => `
        <button class="${lang === state.language ? "is-active" : ""}" type="button" data-lang="${escapeHtml(lang)}">
          ${escapeHtml(option.label)}
        </button>
      `).join("")}
    </div>
  `;

  languageSwitcher.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.language = button.dataset.lang || defaultLanguage;
      renderDetail({ historyMode: "push" });
    });
  });
}

function renderWisdomVisualLauncher() {
  return `
    <aside class="visual-launcher" aria-label="Ergänzende Zeichnungen zur Weisheitszahnentfernung">
      <div>
        <span class="visual-kicker">Bildlich erklärt</span>
        <h3>Röntgenbild und OP-Ablauf ansehen</h3>
        <p>Die Zeichnungen zeigen beispielhaft, wie Weisheitszähne im Röntgenbild liegen können und wie die Entfernung im Ober- und Unterkiefer abläuft.</p>
      </div>
      <div class="visual-actions">
        <button type="button" class="visual-link" data-visual-gallery="opg">Röntgenbild-Beispiel</button>
        <button type="button" class="visual-link" data-visual-gallery="oberkiefer">Ablauf Oberkiefer</button>
        <button type="button" class="visual-link" data-visual-gallery="unterkiefer">Ablauf Unterkiefer</button>
      </div>
    </aside>
  `;
}

function ensureVisualModal() {
  if (visualModal) return visualModal;

  const modal = document.createElement("div");
  modal.className = "visual-modal";
  modal.id = "visualModal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "visualModalTitle");
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="visual-backdrop" data-visual-close></div>
    <div class="visual-dialog">
      <button type="button" class="visual-close" data-visual-close aria-label="Zeichnung schließen">×</button>
      <div class="visual-copy">
        <span id="visualModalEyebrow" class="visual-kicker"></span>
        <h3 id="visualModalTitle"></h3>
        <p id="visualModalDescription"></p>
      </div>
      <figure class="visual-frame">
        <img id="visualModalImage" alt="">
        <figcaption id="visualModalCaption"></figcaption>
      </figure>
      <div class="visual-controls">
        <button type="button" data-visual-prev>Zurück</button>
        <span id="visualModalCounter"></span>
        <button type="button" data-visual-next>Weiter</button>
      </div>
    </div>
  `;
  document.body.append(modal);
  visualModal = modal;
  return modal;
}

function updateVisualModal() {
  const gallery = wisdomVisualGalleries[activeVisualGalleryId];
  if (!gallery) return;

  const image = gallery.images[activeVisualIndex];
  const modal = ensureVisualModal();
  modal.querySelector("#visualModalEyebrow").textContent = gallery.eyebrow;
  modal.querySelector("#visualModalTitle").textContent = gallery.title;
  modal.querySelector("#visualModalDescription").textContent = gallery.description;
  modal.querySelector("#visualModalImage").src = `${image.src}?v=${visualAssetVersion}`;
  modal.querySelector("#visualModalImage").alt = image.alt;
  modal.querySelector("#visualModalCaption").textContent = image.caption;
  modal.querySelector("#visualModalCounter").textContent = `${activeVisualIndex + 1} / ${gallery.images.length}`;
  modal.querySelector("[data-visual-prev]").disabled = gallery.images.length <= 1;
  modal.querySelector("[data-visual-next]").disabled = gallery.images.length <= 1;
}

function openVisualGallery(id) {
  if (!wisdomVisualGalleries[id]) return;
  activeVisualGalleryId = id;
  activeVisualIndex = 0;
  const modal = ensureVisualModal();
  updateVisualModal();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("has-visual-modal");
  modal.querySelector(".visual-close")?.focus();
}

function closeVisualGallery() {
  if (!visualModal) return;
  visualModal.classList.remove("is-open");
  visualModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("has-visual-modal");
}

function stepVisualGallery(direction) {
  const gallery = wisdomVisualGalleries[activeVisualGalleryId];
  if (!gallery || gallery.images.length <= 1) return;
  activeVisualIndex = (activeVisualIndex + direction + gallery.images.length) % gallery.images.length;
  updateVisualModal();
}

function injectWisdomVisuals(container) {
  const heading = Array.from(container.querySelectorAll("h2")).find((item) => item.textContent.includes("Ablauf des Eingriffs"));
  if (!heading || container.querySelector(".visual-launcher")) return;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = renderWisdomVisualLauncher();
  const nextHeading = Array.from(container.querySelectorAll("h2")).find((item) => item.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_PRECEDING);
  if (nextHeading) {
    nextHeading.parentNode.insertBefore(wrapper.firstElementChild, nextHeading);
  } else {
    heading.parentNode.insertBefore(wrapper.firstElementChild, heading.nextSibling);
  }
}

function renderContent(procedure) {
  portalContent.innerHTML = `
    <section id="vollstaendig" class="content-section source-section canonical-section">
      <div id="sourceFullContent" class="source-full-content" aria-live="polite">
        <div class="source-loading">Patienteninformation wird geladen.</div>
      </div>
    </section>
  `;
  contentTabs.innerHTML = "";
  sectionNav.innerHTML = '<div class="source-loading compact">Inhalt wird geladen.</div>';
}

function scrollToContentAnchor(hash, updateHash = true) {
  if (!hash || hash === "#") return false;
  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  if (updateHash && window.location.hash !== hash) {
    window.history.pushState({}, "", hash);
  }
  return true;
}

function stripRepeatedDocumentChrome(root) {
  root.querySelectorAll("style, script, link, meta, title").forEach((node) => node.remove());
  root.querySelectorAll(".header, .doc-header, .page-label, .footer, .page-footer, .foot, .contact-bar").forEach((node) => node.remove());
  root.querySelectorAll("[class]").forEach((node) => {
    const className = node.getAttribute("class") || "";
    if (/^(page|page-|doc-|practice-|praxis-|header|footer)/.test(className)) {
      node.removeAttribute("class");
    }
  });
}

function normalizeSourceContent(root) {
  stripRepeatedDocumentChrome(root);

  root.querySelectorAll(".section-heading, .section-header, .section-title").forEach((node) => {
    const heading = document.createElement("h2");
    heading.innerHTML = node.innerHTML;
    node.replaceWith(heading);
  });

  root.querySelectorAll("[style]").forEach((node) => node.removeAttribute("style"));
}

function renderEmbeddedSource(target, variant) {
  const navMarkup = '<a href="#vollstaendig">Patienteninformation</a>';
  contentTabs.innerHTML = navMarkup;
  sectionNav.innerHTML = navMarkup;
  target.innerHTML = `
    <div class="source-embed-note">
      Direkt geöffnete lokale Datei: Das Original-Merkblatt wird eingebettet angezeigt.
      Für die integrierte Portalansicht bitte über <code>localhost:8765</code> öffnen.
    </div>
    <iframe class="source-frame" src="${escapeHtml(variant.source)}" title="Patienteninformation"></iframe>
  `;
}

async function loadSourceContent(procedure, variant) {
  const target = document.querySelector("#sourceFullContent");
  if (!target) return;

  target.innerHTML = '<div class="source-loading">Patienteninformation wird geladen.</div>';

  if (window.location.protocol === "file:") {
    renderEmbeddedSource(target, variant);
    return;
  }

  try {
    const response = await fetch(variant.source, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    const sourceDoc = new DOMParser().parseFromString(html, "text/html");
    const pages = Array.from(sourceDoc.querySelectorAll(".page"));
    const container = document.createElement("div");
    container.className = "source-content-inner";
    container.dataset.procedure = procedure.id;

    const sourceNodes = pages.length ? pages : [sourceDoc.body];
    sourceNodes.forEach((page, index) => {
      const section = document.createElement("section");
      section.className = "source-page";
      section.dataset.page = String(index + 1);
      section.innerHTML = page.innerHTML;
      normalizeSourceContent(section);
      container.append(section);
    });

    if (procedure.id === "weisheitszahn") {
      injectWisdomVisuals(container);
    }

    const headings = Array.from(container.querySelectorAll("h2"));
    headings.forEach((heading, index) => {
      heading.id = `inhalt-${index + 1}`;
    });

    const navItems = headings.map((heading) => [heading.id, heading.textContent.trim()]).filter(([, label]) => label);
    const navMarkup = navItems.length
      ? navItems.map(([id, label]) => `<a href="#${escapeHtml(id)}">${escapeHtml(label)}</a>`).join("")
      : '<a href="#vollstaendig">Patienteninformation</a>';

    contentTabs.innerHTML = navMarkup;
    sectionNav.innerHTML = navMarkup;
    target.replaceChildren(container);

    if (window.location.hash) {
      window.requestAnimationFrame(() => scrollToContentAnchor(window.location.hash, false));
    }
  } catch (error) {
    target.innerHTML = `
      <div class="source-error">
        Die vollständige Patienteninformation konnte nicht geladen werden.
        <a href="${escapeHtml(variant.source)}" target="_blank" rel="noopener">Original-Merkblatt öffnen</a>
      </div>
    `;
  }
}

function renderDetail({ historyMode = "replace" } = {}) {
  const procedure = getActiveProcedure();
  const variant = getLanguageVariant(procedure);
  activeCategory.textContent = "Oralchirurgie";
  activeTitle.textContent = procedure.title;
  viewerTitle.textContent = procedure.title;
  renderLanguageSwitcher(procedure);
  const showPdfOnly = ["extraktion", "weisheitszahn", "weisheitszahn_postop"].includes(procedure.id) && Boolean(variant.sourcePdf);
  printPreview.hidden = showPdfOnly;
  sourceDocument.hidden = showPdfOnly;
  if (showPdfOnly) {
    sourceDocument.removeAttribute("href");
  } else {
    sourceDocument.href = variant.source;
    sourceDocument.textContent = variant.sourceLabel || procedure.sourceLabel || (variant.sourcePdf ? "Finales Handout öffnen" : "Original-Merkblatt öffnen");
  }
  if (variant.sourcePdf) {
    pdfDocument.href = variant.sourcePdf;
    pdfDocument.textContent = variant.pdfLabel || "PDF herunterladen";
    pdfDocument.hidden = false;
  } else {
    pdfDocument.removeAttribute("href");
    pdfDocument.hidden = true;
  }
  renderContent(procedure);
  loadSourceContent(procedure, variant);

  if (historyMode !== "none") {
    const url = procedureUrl(procedure.id, state.language);
    const historyState = { activeId: procedure.id, language: state.language };
    if (historyMode === "push") {
      window.history.pushState(historyState, "", url);
    } else {
      window.history.replaceState(historyState, "", url);
    }
  }
}

printPreview.addEventListener("click", () => window.print());

document.addEventListener("click", (event) => {
  const anchor = event.target.closest(".section-nav a, .content-tabs a");
  if (anchor?.hash && scrollToContentAnchor(anchor.hash)) {
    event.preventDefault();
    return;
  }

  const opener = event.target.closest("[data-visual-gallery]");
  if (opener) {
    openVisualGallery(opener.dataset.visualGallery);
    return;
  }

  if (event.target.closest("[data-visual-close]")) {
    closeVisualGallery();
    return;
  }

  if (event.target.closest("[data-visual-prev]")) {
    stepVisualGallery(-1);
    return;
  }

  if (event.target.closest("[data-visual-next]")) {
    stepVisualGallery(1);
  }
});

document.addEventListener("keydown", (event) => {
  if (!visualModal?.classList.contains("is-open")) return;
  if (event.key === "Escape") {
    closeVisualGallery();
  } else if (event.key === "ArrowLeft") {
    stepVisualGallery(-1);
  } else if (event.key === "ArrowRight") {
    stepVisualGallery(1);
  }
});

window.addEventListener("popstate", () => {
  const params = new URLSearchParams(window.location.search);
  const nextId = params.get("thema") || "weisheitszahn";
  state.activeId = procedures.some((procedure) => procedure.id === nextId) ? nextId : procedures[0].id;
  state.language = params.get("lang") || defaultLanguage;
  renderDetail({ historyMode: "none" });
});

if (!procedures.some((procedure) => procedure.id === state.activeId)) {
  state.activeId = procedures[0].id;
}

renderDetail();
