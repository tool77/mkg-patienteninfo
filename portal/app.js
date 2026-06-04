const procedures = [
  {
    id: "implantat_basis",
    title: "Implantat Grundlagen",
    category: "implantologie",
    status: "Neu",
    source: "../implantat/implantat_basis.html",
    sourceLabel: "Grundlagen öffnen",
    keywords: "implantat grundlagen was ist ein implantat ablauf krone prothese hauszahnarzt dvt einheilung freilegung zahnersatz",
    summary: "Grundmodul für Patientinnen und Patienten: Was ein Implantat ist, wie Backward Planning funktioniert und wie Beratung, Planung, Implantation, Einheilung und spätere Prothetik grundsätzlich ablaufen.",
    goal: "Vor allen Spezialthemen entsteht ein gemeinsames Verständnis für Implantat, Aufbau, Krone/Prothese, Backward Planning, DVT-Planung und die Zusammenarbeit mit dem Hauszahnarzt.",
    prep: ["Medikamentenplan, Allergien und vorhandene Röntgenbilder mitbringen.", "Rauchen, Diabetes, Parodontitis und Blutverdünner offen angeben.", "Vorab klären, ob es um Einzelzahnlücke, mehrere Zähne oder einen zahnlosen Kiefer geht."],
    facts: [["Grundprinzip", "Künstliche Zahnwurzel im Kieferknochen"], ["Versorgung", "Implantat, Aufbau, Krone/Brücke/Prothese"], ["Normalablauf", "Beratung, Planung, OP, Einheilung, Prothetik"], ["Spezialpfade", "Sinuslift, Knochenaufbau, Sofortimplantat, zahnloser Kiefer"]],
    timeline: [["Beratung", "Befund, Alternativen, Wünsche, Medikamente und Risikofaktoren."], ["Backward Planning", "Zielzahnposition digital planen, Implantatposition ableiten und Knochenbedarf bestimmen."], ["Implantation", "Setzen des Implantats in Lokalanästhesie oder nach individueller Anästhesieplanung."], ["Einheilung", "Meist 3-4 Monate unbelastet; bei Aufbau länger."], ["Prothetik", "Freilegung, Abdruck/Scan und Versorgung beim Hauszahnarzt."]],
    sections: [
      { title: "Basis vor Spezialthemen", text: "Dieses Modul erklärt zuerst den normalen Implantatweg. Danach wird gezielt entschieden, ob Zusatzthemen wie Sinuslift, Knochenaufbau, Sofortimplantat oder zahnloser Kiefer relevant sind." },
      { title: "Chirurgie und Prothetik", text: "Das Implantat wird chirurgisch gesetzt. Die sichtbare Versorgung wird in der Regel durch den Hauszahnarzt geplant und hergestellt." },
      { title: "Backward Planning", text: "Die spätere Zahnposition wird zuerst geplant. Aus dieser Zielposition ergeben sich Implantatposition und der genaue Bereich, in dem ggf. Knochen aufgebaut werden muss." }
    ],
    risks: [["Implantatverlust", "Ein Implantat kann ausbleibend einheilen und muss dann entfernt werden."], ["Peri-Implantitis", "Langfristige Entzündung rund um das Implantat, begünstigt durch Rauchen, Parodontitis und schlechte Pflege."], ["Nachbarstrukturen", "Je nach Region sind Unterkiefernerv, Kieferhöhle oder Nachbarzähne relevant."], ["Planänderung", "DVT oder OP-Befund können Zusatzmaßnahmen oder ein anderes Vorgehen erforderlich machen."]],
    aftercare: ["Implantatregion in der Einheilzeit nicht belasten.", "Rauchen möglichst pausieren.", "Kontrolltermine wahrnehmen.", "Definitive Versorgung erst nach chirurgischer Freigabe planen."],
    faq: [["Ist ein Implantat ein kompletter Zahn?", "Nein. Das Implantat ersetzt die Zahnwurzel; die sichtbare Krone oder Prothese kommt später hinzu."], ["Wann brauche ich ein DVT?", "Wenn Knochenangebot, Nerv, Kieferhöhle oder die Implantatposition dreidimensional beurteilt werden müssen."], ["Warum mehrere Module?", "Weil ein einfaches Implantat, ein Sinuslift, ein großer Knochenaufbau und ein zahnloser Kiefer unterschiedliche Risiken und Abläufe haben."]]
  },
  {
    id: "implantat_vorbereitung",
    title: "Implantatberatung vorbereiten",
    category: "implantologie",
    status: "Neu",
    source: "../implantat/implantatberatung_vorbereitung.html",
    sourceLabel: "Vorabinformation öffnen",
    keywords: "implantatberatung vorbereiten implantat knochenaufbau augmentation sinuslift intern extern schalentechnik khoury semilunar zastrow neogen ptfe membran vertikale augmentation dvt",
    summary: "Vorabinformation für Patientinnen und Patienten, bei denen vor der Erstberatung noch nicht klar ist, ob ein Implantat ohne Aufbau, mit Backward Planning, Knochenaufbau, Sinuslift, Schalentechnik, Semilunar-Technik nach Zastrow oder Membranaufbau sinnvoll ist.",
    goal: "Patientinnen und Patienten kommen vorbereitet in die Beratung, ohne mehrere lange Spezialdokumente doppelt lesen zu müssen.",
    prep: ["Medikamentenplan, Allergien und vorhandene Röntgenbilder mitbringen.", "Rauchen, Diabetes, Blutverdünner, Bisphosphonate/Denosumab und Immunsuppression offen angeben.", "Verstehen, dass die konkrete Methode erst nach Untersuchung und ggf. DVT festgelegt wird."],
    facts: [["Zweck", "Orientierung vor der Erstberatung"], ["Entscheidung", "Nach Untersuchung und ggf. DVT"], ["Mögliche Wege", "Implantat, Knochenaufbau, Sinuslift, Schalentechnik, Semilunar, Membran"], ["Danach", "Gezieltes Detailmerkblatt zum geplanten Verfahren"]],
    timeline: [["Vorab", "Mögliche Wege kennen, ohne alle Detaildokumente lesen zu müssen."], ["Erstberatung", "Befund, Alternativen, Knochenangebot und Risiken besprechen."], ["Backward Planning", "Zielzahnposition aus Gegenseite oder Datenbank planen und daraus Implantatposition ableiten."], ["Entscheidung", "Einfaches Implantat, kleiner Aufbau, Sinuslift, größere Augmentation oder Alternative festlegen."], ["Unterlagen", "Passendes Detailmerkblatt und Heil- und Kostenplan erhalten."]],
    sections: [
      { title: "Warum diese Vorabinformation", text: "Vor der Untersuchung ist oft noch offen, ob der Knochen ausreicht oder welche Aufbauform notwendig wird. Die Seite gibt Orientierung, ohne mehrere Spezialaufklärungen zu wiederholen." },
      { title: "Schalentechnik, Semilunar und Membran", text: "Bei größerem Knochenmangel kommen je nach Defektform autologe Knochenschalen, Semilunar-Technik nach Zastrow oder titanverstärkte PTFE-Membranen infrage. Dieser Pfad wird als eigene Möglichkeit erklärt und nach Befund separat aufgeklärt." },
      { title: "Nach der Beratung gezielt", text: "Erst nach Befund und Planung erhalten Patientinnen und Patienten das Detaildokument, das wirklich zu ihrem geplanten Vorgehen passt." }
    ],
    risks: [["Überinformation", "Vorab nur Orientierung, Detailrisiken folgen nach festgelegtem Verfahren."], ["Planänderung", "DVT oder intraoperativer Befund kann den geplanten Weg verändern."], ["Größerer Aufbau", "Vertikale Augmentation, Schalentechnik, Semilunar-Technik oder Membranaufbau bedeuten meist längere Heilzeit und höheren Aufwand."], ["Alternative", "Manchmal ist eine prothetische Alternative sinnvoller als ein großer Aufbau."]],
    aftercare: ["Vorab keine OP-Regeln nötig.", "Zum Termin Unterlagen und Medikamentenliste mitbringen.", "Nach der Beratung gezieltes Detailmerkblatt lesen.", "Bei größerem Aufbau ausreichend Heilzeit einplanen."],
    faq: [["Muss ich schon wissen, welches Verfahren ich brauche?", "Nein. Das ist genau Aufgabe der Beratung und Planung."], ["Warum nicht alle Merkblätter vorab?", "Viele Inhalte würden sich wiederholen und ein Teil wäre für Sie später nicht relevant."], ["Was passiert bei zu wenig Knochenhöhe?", "Je nach Region kommen Sinuslift, vertikale Augmentation mit Schalentechnik, Semilunar-Technik, Membranaufbau oder eine Alternative infrage."]]
  },
  {
    id: "implantat",
    title: "Implantatberatung / Implantatinsertion",
    category: "implantologie",
    status: "Final",
    source: "../implantat/merkblatt_implantat_ausfuehrlich.html",
    summary: "Ein Zahnimplantat ersetzt eine fehlende Zahnwurzel. Es erhält Nachbarzähne, stabilisiert die Kaufunktion und dient später als Basis für die Krone durch den Hauszahnarzt.",
    goal: "Patientinnen und Patienten kommen mit einem klaren Verständnis für Implantat, Alternativen, Einheilzeit, DVT-Planung und prothetische Weiterbehandlung in die Beratung.",
    prep: ["Aktuelle Medikamentenliste und Allergien mitbringen.", "Rauchen, Diabetes, Parodontitis und Blutverdünner offen angeben.", "Vorhandene Röntgenbilder oder Unterlagen des Hauszahnarztes mitbringen."],
    facts: [["Behandlungsziel", "Fester Ersatz der fehlenden Zahnwurzel"], ["Typischer Ablauf", "Planung, Implantation, Einheilung, Freilegung, Krone"], ["Einheilzeit", "Meist 3-4 Monate"], ["Planung", "OPG oder DVT nach Befund"]],
    timeline: [["Planung", "Befund, Alternativen, Röntgenplanung und Kostenvoranschlag."], ["Implantation", "Setzen des Implantats in Lokalanästhesie oder Sedierung."], ["Einheilung", "Implantat wächst fest in den Knochen ein und bleibt unbelastet."], ["Freilegung", "Kleiner Zweiteingriff mit Einheilkappe oder Gingivaformer."], ["Krone", "Definitive Versorgung beim Hauszahnarzt."]],
    sections: [
      { title: "Brücke oder Implantat", text: "Eine Brücke kann schneller sein, erfordert aber in vielen Fällen das Beschleifen der Nachbarzähne. Das Implantat ersetzt nur den fehlenden Zahn und erhält die Nachbarzähne weitgehend unberührt." },
      { title: "Knochenangebot entscheidet", text: "Für eine stabile Implantation braucht es ausreichende Knochenbreite und -höhe. Wenn der Knochen zu schmal oder zu niedrig ist, wird ein Knochenaufbau oder im Oberkieferseitenzahnbereich ein Sinuslift notwendig." },
      { title: "DVT und Kostenvoranschlag", text: "In komplexeren Situationen zeigt ein DVT die Lage von Nerv, Kieferhöhle und Knochen dreidimensional. Danach kann der Eingriff exakt geplant und ein verbindlicher Kostenvoranschlag erstellt werden." }
    ],
    risks: [["Implantatverlust", "In wenigen Fällen wächst ein Implantat nicht korrekt ein und muss entfernt werden."], ["Peri-Implantitis", "Langfristige Entzündung rund um das Implantat, begünstigt durch Rauchen, Parodontitis und unzureichende Pflege."], ["Nerv / Kieferhöhle", "Je nach Region können Unterkiefernerv oder Kieferhöhle relevant sein."], ["Infektion / Nachblutung", "Selten, aber besonders bei Vorerkrankungen oder Blutverdünnern wichtig."]],
    aftercare: ["Implantatregion nicht belasten.", "Mundhygiene ab Tag 2 vorsichtig aufnehmen.", "Rauchen möglichst pausieren.", "Kontrollen und spätere Freilegung einplanen."],
    faq: [["Ist ein Implantat sofort belastbar?", "In der Regel nicht. Die sichere Einheilung hat Vorrang."], ["Wer macht die Krone?", "Die definitive Krone wird üblicherweise durch den Hauszahnarzt angefertigt."], ["Ist Titan MRT-tauglich?", "Titanimplantate sind grundsätzlich MRT-tauglich; informieren Sie die Radiologie trotzdem über Implantate."]]
  },
  {
    id: "vertikale_augmentation",
    title: "Vertikale Augmentation / Schalentechnik",
    category: "implantologie",
    status: "Neu",
    source: "../vertikale_augmentation/merkblatt_vertikale_augmentation_ausfuehrlich.html",
    sourceLabel: "Ausführliches Merkblatt öffnen",
    keywords: "vertikale augmentation schalentechnik khoury kieferwinkel cortical plate maxgraft cortico spenderknochen knochenaufbau implantat zweizeitig",
    summary: "Eigenständige Patienteninformation für größere vertikale Knochenaufbauten vor Implantaten, inklusive Khoury-Schalentechnik, allogener Cortical Plate, zweizeitigem Vorgehen, Risiken und Nachsorge.",
    goal: "Patientinnen und Patienten verstehen, warum bei bestimmten vertikalen Defekten zuerst Knochen aufgebaut und erst später implantiert wird.",
    prep: ["Medikamentenplan, Blutverdünner und Vorerkrankungen vollständig angeben.", "Vorhandene Röntgenbilder oder DVT mitbringen.", "Provisorium mit dem Hauszahnarzt so abstimmen, dass kein Druck auf den Aufbau entsteht."],
    facts: [["Ziel", "Knochenhöhe vor Implantation aufbauen"], ["Standard", "Schalentechnik nach Khoury"], ["Alternative", "Allogene Cortical Plate"], ["Ablauf", "Meist zweizeitig: Aufbau, Einheilung, Implantation"]],
    timeline: [["Planung", "DVT, Defektvermessung und Technikentscheidung."], ["Augmentation", "Knochenschale oder Cortical Plate wird fixiert und aufgefüllt."], ["Einheilung", "Häufig 4-6 Monate, bei größeren Defekten länger."], ["Implantation", "Reentry, Schraubenentfernung und Implantatsetzung bei stabilem Aufbau."], ["Krone", "Prothetische Versorgung nach Implantateinheilung."]],
    sections: [
      { title: "Warum zweizeitig", text: "Bei ausgeprägten vertikalen Defekten braucht der Aufbau Stabilität, geschützten Raum und Gefäßneubildung. Ein Implantat kann diesen Regenerationsprozess behindern." },
      { title: "Khoury-Schalentechnik", text: "Eigene dünne Knochenschalen aus dem Kieferwinkel schaffen einen stabilen biologischen Regenerationsraum." },
      { title: "Allogene Cortical Plate", text: "In geeigneten Fällen kann eine aufbereitete Spenderknochenplatte die Entnahmestelle vermeiden, ohne den Eingriff risikofrei zu machen." }
    ],
    risks: [["Nahtöffnung", "Platte, Membran oder Knochenmaterial kann sichtbar werden und muss kontrolliert werden."], ["Volumenverlust", "Knochen wird umgebaut; ggf. Zusatzaufbau oder Planänderung."], ["Nachblutung", "Relevant bei Blutverdünnung und bei zusätzlicher Knochenentnahme."], ["Nervreizung", "Bei Kieferwinkelentnahme möglich, meist vorübergehend."]],
    aftercare: ["Ruhe am OP-Tag, Oberkörper hoch.", "Nicht rauchen und nicht kräftig spülen.", "Provisorium darf nicht auf den Aufbau drücken.", "Kontrolltermine wahrnehmen.", "Bei Warnzeichen Notfallnummer nutzen."],
    faq: [["Warum nicht sofort implantieren?", "Bei bestimmten vertikalen Defekten würde das Implantat den Regenerationsraum und die Gefäßneubildung behindern."], ["Ist Eigenknochen besser?", "Eigenknochen bleibt der biologische Referenzstandard; allogene Cortical Plates sind eine Alternative für geeignete Fälle."], ["Wie lange dauert es?", "Meist mehrere Monate Einheilung vor der Implantation, abhängig von Defektgröße und Heilung."]]
  },
  {
    id: "augmentationstechniken",
    title: "Knochenaufbau-Techniken",
    category: "implantologie",
    status: "Neu",
    source: "../knochenaufbau/merkblatt_augmentationstechniken.html",
    sourceLabel: "Technikübersicht öffnen",
    keywords: "sticky bone semilunar technik schalentechnik autolog allogen alloplastisch cortico cortical plate titanverstaerkte ptfe teflon membran neogen knochenaufbau augmentation",
    summary: "Übersicht über die wichtigsten Aufbauprinzipien in der Implantologie: Sticky Bone, Semilunar-Technik, autologe Schalentechnik, allogene Cortical Plate und titanverstärkte PTFE-/Teflon-Membran.",
    goal: "Patientinnen und Patienten verstehen, warum Aufbauverfahren unterschiedlich sind und warum die Entscheidung erst nach DVT, Defektform und prothetischem Ziel fällt.",
    prep: ["Vorhandene Röntgenbilder oder DVT mitbringen.", "Bestehende Prothese oder Provisorium zur Druckkontrolle mitbringen.", "Rauchen, Blutverdünner, Diabetes, Bisphosphonate/Denosumab und Immunsuppression angeben."],
    facts: [["Techniken", "Sticky Bone, Semilunar, Schale, Cortical Plate, PTFE-Membran"], ["Entscheidung", "Nach Defektform, DVT und prothetischem Ziel"], ["Material", "Autolog, allogen, synthetisch/alloplastisch je nach Indikation"], ["Risiko", "Exposition, Infektion, Volumenverlust, Planänderung"]],
    timeline: [["Diagnostik", "DVT und Defektanalyse."], ["Technikwahl", "Partikulär, Schale, Membran oder Kombination."], ["Augmentation", "Aufbau wird stabilisiert und geschützt."], ["Einheilung", "Mehrere Monate, abhängig vom Umfang."], ["Implantation", "Gleichzeitig oder in zweiter Sitzung."]],
    sections: [
      { title: "Nicht jede Technik passt zu jedem Defekt", text: "Kleine Konturdefekte brauchen andere Lösungen als ausgeprägte Höhen- oder Breitenverluste." },
      { title: "Autolog, allogen, alloplastisch", text: "Autolog ist eigener Knochen. Allogen ist aufbereiteter Spenderknochen. Alloplastisch ist synthetisches Material. Diese Begriffe werden im konkreten Plan sauber getrennt." },
      { title: "Formstabilität ist entscheidend", text: "Schalen, Platten oder titanverstärkte Membranen schützen den Regenerationsraum, damit Knochen einheilen kann." }
    ],
    risks: [["Nahtöffnung / Exposition", "Membran, Platte oder Material kann sichtbar werden und muss kontrolliert werden."], ["Volumenverlust", "Ein Aufbau kann beim Umbau an Volumen verlieren."], ["Infektion", "Kann Einheilung gefährden und Zusatzmaßnahmen nötig machen."], ["Entnahmemorbidität", "Bei Eigenknochen können Beschwerden an der Entnahmestelle auftreten."]],
    aftercare: ["Kein Druck durch Provisorium oder Prothese.", "Nicht rauchen.", "Mundhygiene vorsichtig nach Anweisung.", "Kontrolltermine zuverlässig wahrnehmen."],
    faq: [["Ist Sticky Bone ein großer Aufbau?", "Meist eher ein partikuläres Verfahren für kleinere bis mittlere Defekte oder als Ergänzung."], ["Ist alloplastisch dasselbe wie allogen?", "Nein. Allogen ist Spenderknochen, alloplastisch ist synthetisch. Die Materialwahl wird konkret benannt."], ["Warum titanverstärkte PTFE-Membran?", "Sie hält den Regenerationsraum formstabil offen und schützt den Aufbau."]]
  },
  {
    id: "sofortimplantat",
    title: "Sofortimplantat",
    category: "implantologie",
    status: "Neu",
    source: "../sofortimplantat/merkblatt_sofortimplantat_ausfuehrlich.html",
    summary: "Beim Sofortimplantat wird der nicht erhaltungswürdige Zahn entfernt und das Implantat kann in derselben Sitzung in die frische Extraktionsalveole eingesetzt werden.",
    goal: "Der Termin kann sich auf Eignung, intraoperativen Planwechsel, Provisorium und Belastungsvermeidung konzentrieren.",
    prep: ["Frontzahnbereich: Provisorium vor dem OP-Termin beim Hauszahnarzt organisieren.", "Rauchen, Diabetes, Blutverdünner und Bisphosphonate/Denosumab angeben.", "Verstehen, dass die finale Entscheidung erst nach Zahnentfernung möglich ist."],
    facts: [["Besonderheit", "Implantat direkt nach Zahnentfernung"], ["Voraussetzung", "Intakte Knochenwand und Primärstabilität"], ["Plan B", "Socket Preservation und spätere Implantation"], ["Belastung", "In der Einheilphase vermeiden"]],
    timeline: [["Planung", "OPG/DVT, Provisorium und Kosten klären."], ["OP-Tag", "Schonende Zahnentfernung und direkte Beurteilung der Alveole."], ["Sofortimplantat", "Einsetzen nur bei sicherer Stabilität; Spalt ggf. mit Knochenersatzmaterial auffüllen."], ["Einheilung", "Meist 3-4 Monate unbelastet."], ["Krone", "Definitive Versorgung nach Freigabe."]],
    sections: [
      { title: "Kein Automatismus", text: "Ein Sofortimplantat wird nicht um jeden Preis gesetzt. Wenn die Knochenwand fehlt, eine Entzündung zu ausgeprägt ist oder das Implantat nicht stabil sitzt, wird verzögert implantiert." },
      { title: "Frontzahn und Provisorium", text: "Bei sichtbarer Lücke muss das Provisorium durch den Hauszahnarzt vorbereitet werden und vor dem Operationstermin fertig sein. Es darf die Wunde und das Implantat nicht belasten." },
      { title: "Warum trotzdem sinnvoll", text: "Wenn die Bedingungen stimmen, kann das Sofortimplantat den Behandlungsweg verkürzen und Knochen sowie Weichgewebe besser erhalten." }
    ],
    risks: [["Implantatverlust", "Etwas höheres Risiko als bei verzögerter Implantation."], ["Planwechsel", "Trotz Planung kann intraoperativ eine verzögerte Implantation sicherer sein."], ["Weichgewebsrückgang", "Besonders im Frontzahnbereich ästhetisch relevant."], ["Infektion / Wundheilung", "Risiko erhöht bei Rauchen, Diabetes oder vorhandener Entzündung."]],
    aftercare: ["Nicht auf Implantat oder Provisorium beißen.", "48 Std. kühlen und körperlich schonen.", "Nicht rauchen.", "Fäden nach 1-2 Wochen entfernen lassen."],
    faq: [["Kann der Zahn immer sofort ersetzt werden?", "Nein. Die endgültige Entscheidung fällt nach der Zahnentfernung."], ["Bekomme ich sofort eine feste Krone?", "In der Regel nicht. Eine ästhetische provisorische Lösung ist möglich, aber belastungsfrei."], ["Was gefährdet den Erfolg?", "Rauchen, Belastung, Entzündung, schlechte Hygiene und versäumte Kontrollen."]]
  },
  {
    id: "knochenaufbau",
    title: "Knochenaufbau / Augmentation",
    category: "implantologie",
    status: "Final",
    source: "../knochenaufbau/merkblatt_knochenaufbau_ausfuehrlich.html",
    summary: "Ein Knochenaufbau schafft die Breite oder Höhe, die für ein stabiles Implantat notwendig ist. Er kann gleichzeitig mit der Implantation oder in einem separaten Schritt erfolgen.",
    goal: "Patientinnen und Patienten verstehen, warum Knochen aufgebaut wird, welche Materialien eingesetzt werden und warum die Einheilzeit mehrere Monate beträgt.",
    prep: ["Rauchstatus und relevante Medikamente angeben.", "DVT-Planung und Materialwahl in der Beratung besprechen.", "Heilzeit und mögliche zweite Eingriffe realistisch einplanen."],
    facts: [["Ziel", "Stabiles Knochenlager für Implantate"], ["Methoden", "GBR, Membran, Schalentechnik, Knochenersatzmaterial"], ["Einheilzeit", "Häufig ca. 4 Monate"], ["Hauptrisiko", "Wundheilungsstörung oder Membranexposition"]],
    timeline: [["Planung", "3D-Diagnostik und Entscheidung über Technik."], ["Aufbau", "Knochen oder Ersatzmaterial wird eingebracht und geschützt."], ["Einheilung", "Material wird in körpereigenen Knochen integriert."], ["Implantation", "Gleichzeitig oder nach Abheilung, je nach Ausgangsbefund."], ["Weiterbehandlung", "Freilegung und spätere Krone."]],
    sections: [
      { title: "Warum Knochen fehlt", text: "Nach Zahnverlust, Entzündungen oder Parodontitis kann der Kieferkamm in Breite und Höhe zurückgehen. Ein Implantat braucht aber ein stabiles, ausreichend dickes Knochenlager." },
      { title: "Material und Membran", text: "Je nach Befund kommen eigene Knochenspäne, Knochenersatzmaterial, Membran oder Schalentechnik zum Einsatz. Die Membran schützt den Aufbau während der Heilung." },
      { title: "Geduld ist Teil der Behandlung", text: "Der Aufbau braucht Zeit. Zu frühe Belastung oder Rauchen erhöhen das Risiko für Wundheilungsprobleme deutlich." }
    ],
    risks: [["Membranexposition", "Die Membran kann teilweise sichtbar werden und muss kontrolliert werden."], ["Infektion", "Kann die Einheilung gefährden und zusätzliche Maßnahmen nötig machen."], ["Unzureichender Knochengewinn", "In seltenen Fällen reicht der Aufbau nicht aus."], ["Nachblutung / Schwellung", "Besonders bei größeren Aufbauten möglich."]],
    aftercare: ["Kein Druck auf die aufgebaute Region.", "Weiche Kost und vorsichtige Mundhygiene.", "Rauchen vermeiden.", "Kontrolltermine zuverlässig wahrnehmen."],
    faq: [["Ist Knochenersatzmaterial sicher?", "Die Materialwahl wird individuell getroffen und in der Beratung erklärt."], ["Kann Aufbau und Implantat gleichzeitig erfolgen?", "Ja, wenn die Stabilität ausreicht. Sonst wird zweizeitig behandelt."], ["Wie lange dauert die Heilung?", "Häufig etwa 4 Monate, abhängig von Umfang und Technik."]]
  },
  {
    id: "sinuslift",
    title: "Sinuslift intern / extern",
    category: "implantologie",
    status: "Final",
    source: "../sinuslift/merkblatt_sinuslift_ausfuehrlich.html",
    summary: "Ein Sinuslift hebt den Kieferhöhlenboden im Oberkieferseitenzahnbereich an, wenn die Knochenhöhe für ein Implantat nicht ausreicht.",
    goal: "Die Beratung kann auf Variante, Kieferhöhlenrisiken, Schnäuzverbot und zeitlichen Ablauf fokussieren.",
    prep: ["Chronische Sinusitis, HNO-Beschwerden oder Nasennebenhöhlenprobleme angeben.", "Nachsorgeregeln zur Kieferhöhle vorab lesen.", "Niesen, Schnäuzen und Druckbelastung nach OP vermeiden."],
    facts: [["Region", "Oberkieferseitenzahnbereich"], ["Varianten", "Interner oder externer Sinuslift"], ["Ziel", "Mehr Knochenhöhe für Implantate"], ["Hauptrisiko", "Perforation der Kieferhöhlenmembran"]],
    timeline: [["Planung", "DVT zur Beurteilung von Knochenhöhe und Kieferhöhle."], ["Sinuslift", "Kieferhöhlenmembran wird angehoben, Raum wird mit Material aufgefüllt."], ["Implantation", "Gleichzeitig oder nach Einheilung."], ["Schonphase", "Druck auf die Kieferhöhle vermeiden."], ["Kontrolle", "Heilung und Implantatplanung prüfen."]],
    sections: [
      { title: "Interner Sinuslift", text: "Bei moderatem Knochenmangel erfolgt die Anhebung über das Implantatbohrloch. Das ist meist weniger aufwändig." },
      { title: "Externer Sinuslift", text: "Bei stärkerem Knochenmangel wird seitlich ein kleines Knochenfenster angelegt. So kann die Membran kontrolliert angehoben und Material eingebracht werden." },
      { title: "Kieferhöhlenregeln", text: "Nach dem Eingriff sind Schnäuzen, Druckausgleich und starke Belastung kritisch. Niesen möglichst mit offenem Mund." }
    ],
    risks: [["Membranperforation", "Die Kieferhöhlenmembran kann einreißen; meist lässt sich das direkt versorgen."], ["Kieferhöhlenentzündung", "Druckgefühl, Sekret oder Fieber müssen abgeklärt werden."], ["MAV", "Eine Verbindung zwischen Mund und Kieferhöhle wird sofort verschlossen."], ["Infektion / Aufbauverlust", "Selten, aber behandlungsrelevant."]],
    aftercare: ["Nicht schnäuzen.", "Niesen mit offenem Mund.", "Kein Tauchen, Fliegen oder Druckausgleich nach individueller Vorgabe.", "Kontrollen wahrnehmen."],
    faq: [["Ist der Sinuslift schmerzhaft?", "Während des Eingriffs nicht; danach sind Druckgefühl und Schwellung möglich."], ["Kann das Implantat gleichzeitig gesetzt werden?", "Ja, wenn ausreichend Primärstabilität vorhanden ist."], ["Wann muss ich mich melden?", "Bei Fieber, eitrigem Sekret, zunehmendem Druck oder Luft-/Flüssigkeitsaustritt in die Nase."]]
  },
  {
    id: "implantat_freilegung",
    title: "Implantat-Freilegung",
    category: "implantologie",
    status: "Final",
    source: "../implantat_freilegung/merkblatt_implantat_freilegung_ausfuehrlich.html",
    summary: "Die Freilegung ist der kurze zweite Schritt nach der Implantateinheilung. Dabei wird das Implantat zugänglich gemacht und eine Einheilkappe oder ein Gingivaformer eingesetzt.",
    goal: "Patientinnen und Patienten kennen Umfang, Nachsorge und die Abstimmung mit der prothetischen Versorgung.",
    prep: ["Implantatpass oder Unterlagen mitbringen, falls vorhanden.", "Termin beim Hauszahnarzt für die weitere Versorgung abstimmen.", "Nachsorge und Fadenentfernung einplanen."],
    facts: [["Eingriff", "Kurzer Second-Stage-Eingriff"], ["Ziel", "Vorbereitung für Abdruck/Scan und Krone"], ["Belastung", "Meist gering"], ["Nachsorge", "Fäden nach 1-2 Wochen, falls genäht"]],
    timeline: [["Kontrolle", "Einheilung des Implantats wird geprüft."], ["Freilegung", "Schleimhaut wird eröffnet, Einheilkappe eingesetzt."], ["Weichgewebe", "Formung des Zahnfleischdurchtritts."], ["Hauszahnarzt", "Abdruck/Scan und Kronenversorgung."], ["Pflege", "Implantatprophylaxe langfristig wichtig."]],
    sections: [
      { title: "Einheilkappe oder Gingivaformer", text: "Das Bauteil ragt durch das Zahnfleisch und formt den späteren Austritt der Krone." },
      { title: "Provisorium", text: "Je nach Situation kann ein Provisorium angepasst werden. Es darf nicht ungünstig drücken." },
      { title: "Abstimmung mit Hauszahnarzt", text: "Nach der Freilegung beginnt die prothetische Phase mit Abdruck, Scan oder Kronenplanung." }
    ],
    risks: [["Nachblutung", "Selten und meist lokal beherrschbar."], ["Wundheilungsstörung", "Bei Druck, Rauchen oder schlechter Hygiene möglich."], ["Weichgewebsproblem", "Manchmal ist zusätzliche Schleimhautformung sinnvoll."], ["Infektion", "Selten, aber kontrollbedürftig."]],
    aftercare: ["Region sauber halten, aber nicht traumatisieren.", "Nicht an Einheilkappe manipulieren.", "Bei Lockerung oder Druckstelle melden.", "Folgetermin beim Hauszahnarzt abstimmen."],
    faq: [["Ist das eine große Operation?", "Nein, meist ein kurzer und gut verträglicher Eingriff."], ["Kann ich danach arbeiten?", "Oft ja, abhängig von Umfang und Anästhesieform."], ["Wann kommt die Krone?", "Nach Weichgewebsheilung und prothetischer Planung beim Hauszahnarzt."]]
  },
  {
    id: "zahnloser_oberkiefer",
    title: "Zahnloser Oberkiefer",
    category: "implantologie",
    status: "Neu",
    source: "../zahnloser_oberkiefer/merkblatt_zahnloser_oberkiefer_ausfuehrlich.html",
    sourceLabel: "Oberkiefer-Modul öffnen",
    keywords: "zahnloser oberkiefer implantate festsitzend herausnehmbar prothese sinuslift augmentation provisorium dvt sofortversorgung",
    summary: "Orientierung für implantologische Gesamtplanung im zahnlosen Oberkiefer: Backward Planning, herausnehmbar oder festsitzend, Implantatverteilung, Kieferhöhle, Knochenaufbau, Provisorium und prothetisches Ziel.",
    goal: "Patientinnen und Patienten verstehen, dass der zahnlose Oberkiefer ein Gesamtkonzept aus Chirurgie, Knochen, Weichgewebe und Prothetik braucht.",
    prep: ["Vorhandene Oberkieferprothese zum Termin mitbringen.", "Wünsche zu festsitzend/herausnehmbar, Ästhetik und Reinigung klären.", "Vorhandene Röntgenbilder, DVT und Medikamentenplan mitbringen."],
    facts: [["Planungsziel", "Gesamtkonzept statt Einzelzahnlücke"], ["Optionen", "Herausnehmbar stabilisiert oder festsitzend"], ["Häufig relevant", "Sinuslift, Knochenaufbau, Provisorium"], ["Diagnostik", "DVT und prothetische Analyse"]],
    timeline: [["Ziel", "Festsitzend oder herausnehmbar, Ästhetik, Sprache und Pflege klären."], ["Backward Planning", "Zielzähne digital planen, Implantatverteilung ableiten und Knochenbedarf bestimmen."], ["Aufbau?", "Sinuslift, horizontale oder vertikale Augmentation gezielt dort prüfen, wo Knochen fehlt."], ["Umsetzung", "Implantate, Einheilung, Freilegung und Prothetik."]],
    sections: [
      { title: "Oberkiefer ist nicht nur Implantatzahl", text: "Knochenqualität, Kieferhöhle, Lippenstütze, Prothesenbasis und Reinigbarkeit bestimmen das Konzept." },
      { title: "Festsitzend oder herausnehmbar", text: "Festsitzend kann wünschenswert sein, ist aber nicht automatisch in jeder Situation funktionell oder ästhetisch überlegen." },
      { title: "Provisorium schützt die Heilung", text: "Bestehende Prothesen müssen häufig weich unterfüttert oder entlastet werden, damit Aufbauten und Implantate nicht gedrückt werden." }
    ],
    risks: [["Sinuslift / Kieferhöhle", "Im Oberkieferseitenzahnbereich häufig planungsrelevant."], ["Aufbauverlust", "Bei größeren Augmentationen kann Volumenverlust oder Exposition auftreten."], ["Implantatverlust", "Risiko steigt bei Rauchen, Diabetes, Überlastung oder schlechter Knochenqualität."], ["Prothetische Kompromisse", "Lippenstütze, Reinigung und Reparierbarkeit müssen realistisch geplant werden."]],
    aftercare: ["Prothese nur nach Freigabe und entlastet tragen.", "Nicht rauchen.", "Kontrollen und prothetische Anpassungen einhalten.", "Bei Sinuslift Kieferhöhlenregeln beachten."],
    faq: [["Geht immer festsitzend?", "Nein. Knochen, Lippenstütze, Pflegefähigkeit, Kosten und Prognose entscheiden."], ["Brauche ich fast immer einen Sinuslift?", "Nicht immer, aber im hinteren Oberkiefer ist die Kieferhöhle häufig relevant."], ["Kann ich sofort feste Zähne bekommen?", "Nur bei geeigneter Planung und ausreichender Primärstabilität. Sonst ist Einheilung sicherer."]]
  },
  {
    id: "zahnloser_unterkiefer",
    title: "Zahnloser Unterkiefer",
    category: "implantologie",
    status: "Neu",
    source: "../zahnloser_unterkiefer/merkblatt_zahnloser_unterkiefer_ausfuehrlich.html",
    sourceLabel: "Unterkiefer-Modul öffnen",
    keywords: "zahnloser unterkiefer implantate deckprothese locator steg festsitzend interforaminaer nerv prothese sofortbelastung",
    summary: "Orientierung für implantologische Versorgung des zahnlosen Unterkiefers: Backward Planning, zwei oder mehr Implantate, Deckprothese, Steg oder festsitzendes Konzept, Nervverlauf und Prothesenanpassung.",
    goal: "Patientinnen und Patienten verstehen die typischen Wege zur Stabilisierung einer Unterkieferprothese und die Grenzen durch Nerv, Knochenform und Belastung.",
    prep: ["Vorhandene Unterkieferprothese zum Termin mitbringen.", "Beschwerden mit Halt, Druckstellen und Kauen konkret benennen.", "Medikamentenplan, Röntgenbilder und Risikofaktoren mitbringen."],
    facts: [["Basisweg", "Häufig zwei Implantate zur Prothesenstabilisierung"], ["Erweiterung", "Mehr Implantate für Steg oder festsitzende Planung"], ["Region", "Oft vorderer Unterkiefer zwischen den Nervenaustritten"], ["Belastung", "Sofortbelastung nur bei sicherer Primärstabilität"]],
    timeline: [["Ziel", "Deckprothese, Steg oder festsitzend festlegen."], ["Backward Planning", "Prothesenziel und Zahnposition digital planen, daraus Implantatpositionen ableiten."], ["Chirurgie", "Implantate an den geplanten Positionen setzen und Belastung festlegen."], ["Prothetik", "Prothese anpassen und Verbindungselemente einarbeiten."]],
    sections: [
      { title: "Zwei Implantate können viel verändern", text: "Gerade im Unterkiefer kann schon eine überschaubare Implantatlösung den Halt einer Prothese deutlich verbessern." },
      { title: "Nervabstand bestimmt die Planung", text: "Der Unterkiefernerv begrenzt viele Positionen. Deshalb wird häufig interforaminär geplant." },
      { title: "Prothese bleibt Teil der Behandlung", text: "Die Prothese muss entlastet, angepasst und später mit Verbindungselementen versorgt werden." }
    ],
    risks: [["Nervirritation", "Taubheit oder Missempfindung an Lippe/Kinn sind selten, aber wichtig."], ["Implantatverlust", "Frühe Belastung, Rauchen, Diabetes oder Infektion können Einheilung gefährden."], ["Prothesendruck", "Druckstellen können Wundheilung und Implantateinheilung stören."], ["Pflegeaufwand", "Locator, Steg oder Brücke brauchen regelmäßige Reinigung und Wartung."]],
    aftercare: ["Prothese nur nach Freigabe und entlastet tragen.", "Nicht auf frische Implantate beißen.", "Kontrollen für Druckstellen wahrnehmen.", "Langfristige Implantatprophylaxe einplanen."],
    faq: [["Reichen zwei Implantate?", "Für eine stabilisierte herausnehmbare Unterkieferprothese häufig ja. Für andere Ziele können mehr Implantate sinnvoll sein."], ["Warum nicht einfach im Seitenzahnbereich?", "Dort begrenzen Nervverlauf und Knochenhöhe die Planung."], ["Sind sofort feste Zähne möglich?", "Nur bei passender Stabilität und prothetischem Konzept. Einheilung bleibt oft sicherer."]]
  },
  {
    id: "wsr",
    title: "Wurzelspitzenresektion",
    category: "chirurgie",
    status: "Neu",
    source: "../wsr/merkblatt_wsr_ausfuehrlich.html",
    sourceLabel: "WSR-Merkblatt öffnen",
    keywords: "wurzelspitzenresektion wsr apiko apikale parodontitis wurzelbehandlung revision dvt cbct retrograde fuellung wurzelspitze osteolyse zahnerhalt",
    summary: "Die Wurzelspitzenresektion ist ein zahnerhaltender Eingriff bei Entzündung an der Wurzelspitze. Entscheidend sind Prognose, DVT-Planung und dichter retrograder Abschluss.",
    goal: "Patientinnen und Patienten verstehen, wann WSR sinnvoll ist, warum ein DVT häufig zur Prognoseeinschätzung hilft und welche privaten Zusatzleistungen entstehen können.",
    prep: ["Vorhandene Röntgenbilder, DVT-Daten oder Überweisung mitbringen.", "DVT-Kosten und retrograde Abschlussfüllung vor dem Eingriff besprechen.", "Blutverdünner, Diabetes, Immunsuppression und relevante Medikamente offen angeben."],
    facts: [["Ziel", "Zahnerhalt trotz Entzündung an der Wurzelspitze"], ["Diagnostik", "OPG/Zahnfilm, häufig ergänzend DVT"], ["DVT", "Private Leistung, ca. 180-280 Euro je nach Untersuchungsfeld"], ["Retrograder Verschluss", "Private Leistung, ca. 80 Euro pro Kanal"]],
    timeline: [["Diagnostik", "Röntgenbild, ggf. DVT und Prognoseprüfung."], ["Planung", "Alternativen, Kosten und Anästhesie klären."], ["WSR", "Wurzelspitze darstellen, kürzen, entzündliches Gewebe entfernen."], ["Verschluss", "Wurzelkanal von der Spitze her dicht verschließen."], ["Heilung", "Kontrolle, Fadenentfernung und Knochenheilung über Monate."]],
    sections: [
      { title: "Nicht jede WSR ist sinnvoll", text: "Die Operation ist nur dann sinnvoll, wenn der Zahn strukturell erhaltungswürdig ist und die Entzündung chirurgisch erreichbar ist." },
      { title: "DVT zur Prognose", text: "Ein DVT kann Ausdehnung der Entzündung, Wurzelanatomie, Kieferhöhle, Nervnähe und Hinweise auf nicht behandelbare Defekte besser zeigen." },
      { title: "Retrograde Abschlussfüllung", text: "Der dichte Verschluss von der Wurzelspitze her ist für den Behandlungserfolg wesentlich und wird pro Kanal privat berechnet." }
    ],
    risks: [["Rezidiv", "Die Entzündung kann trotz WSR fortbestehen oder erneut auftreten."], ["Zahnverlust", "Bei schlechter Prognose, Wurzelriss oder ausbleibender Heilung kann Zahnentfernung notwendig werden."], ["Nachbarstrukturen", "Je nach Region Kieferhöhle, Nasenboden, Nachbarzähne oder Unterkiefernerv."], ["Schwellung / Nachblutung", "Meist vorübergehend, bei Risikofaktoren relevanter."]],
    aftercare: ["Erste 48 Std. kühlen und körperlich schonen.", "Weiche Kost, keine Belastung auf der Wunde.", "Mundhygiene vorsichtig, keine Munddusche.", "Kontrollen und Fadenentfernung wahrnehmen."],
    faq: [["Ist die WSR eine Garantie?", "Nein. Sie verbessert die Chance auf Zahnerhalt, hängt aber stark von der Ausgangssituation ab."], ["Warum DVT?", "Zur besseren Prognoseeinschätzung, OP-Planung und Darstellung von Nachbarstrukturen."], ["Welche Kosten entstehen zusätzlich?", "DVT ca. 180-280 Euro, retrograde Abschlussfüllung ca. 80 Euro pro Kanal."]]
  },
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
    prep: ["Am OP-Tag vollständig lesen.", "Tupferdruck konstant halten und den Blutpfropf schützen.", "Bei Warnzeichen außerhalb der Praxissprechzeiten zuerst +49 151 10437450 nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11."],
    facts: [["Fokus", "Erste Stunden und erste Tage"], ["Wichtig", "Blutpfropf schützen: kein Sog, kein Strohhalm, nicht kräftig spülen"], ["Blutung", "30 Min. konstant Druck auf Tupfer oder Stofftaschentuch"], ["Warnzeichen", "Nachblutung, Dry Socket, Fieber, Eiter, Taubheit, Atem-/Schluckprobleme"]],
    timeline: [["OP-Tag", "Ruhe, Tupferdruck, Oberkörper hoch, nicht spülen oder spucken."], ["Ab Folgetag", "Sanfte Mundspülung oder Salzwasser-Mundbad, nicht gurgeln."], ["Tag 2-5", "Trockene Alveole zeigt sich typischerweise mit zunehmendem, ausstrahlendem Schmerz."], ["Woche 1", "Schonung, weiche Kost, ggf. Fadenentfernung."], ["Sofort", "Bei Warnzeichen außerhalb der Praxissprechzeiten +49 151 10437450 nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    sections: [
      { title: "Die ersten Stunden", text: "Ruhe, Oberkörperhochlagerung und konstanter Tupferdruck sind entscheidend." },
      { title: "Blutpfropf schützen", text: "Kein Strohhalm, keine Sportflasche mit Sog, nicht kräftig spülen, nicht gurgeln und Speichel nicht kräftig ausspucken." },
      { title: "Warnzeichen", text: "Starke Blutung, zunehmende Schmerzen, Fieber, Eiter, anhaltende Taubheit und Atem-/Schluckprobleme müssen abgeklärt werden." }
    ],
    risks: [["Nachblutung", "Druck für 30 Minuten konstant ausüben; bei Persistenz melden."], ["Trockene Alveole", "Zunehmende, ausstrahlende Schmerzen ab Tag 2-5, oft mit schlechtem Geschmack oder Geruch."], ["Infektion", "Fieber, Eiter oder übler Geschmack."], ["Atem-/Schluckprobleme", "Außerhalb der Praxissprechzeiten +49 151 10437450 nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    aftercare: ["Ruhe am OP-Tag.", "Tupferdruck nicht ständig unterbrechen.", "Kein Sog an der Wunde: kein Strohhalm, nicht kräftig spülen oder ausspucken.", "Ausreichend essen und trinken.", "Kein Alkohol, Nikotin, Kaffee oder Energydrinks für mindestens 3-5 Tage."],
    faq: [["Wann darf ich essen?", "Wenn die Betäubung vollständig abgeklungen ist."], ["Wie stoppe ich eine Nachblutung?", "30 Minuten konstant auf Tupfer, Mullbinde oder sauberes Stofftaschentuch beißen und nicht ständig kontrollieren."], ["Was gilt bei Oberkiefer und Kieferhöhle?", "Nur wenn wir es Ihnen gesagt haben: nicht schnäuzen, mit offenem Mund niesen und Druckausgleich vermeiden."], ["Wann muss ich sofort handeln?", "Bei Problemen außerhalb der Praxissprechzeiten zuerst +49 151 10437450 nutzen. Wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Nur bei lebensbedrohlicher Notlage, Atemnot, starker Schluckbehinderung oder raschem Anschwellen von Mundboden, Hals oder Zunge 112 rufen."]]
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
    aftercare: ["Kühlen, Kopf hochlagern.", "Weiche Kost und körperliche Schonung.", "Keine Aspirin/ASS.", "Bei Atem-/Schluckproblemen oder rascher Schwellung außerhalb der Praxissprechzeiten sofort +49 151 10437450 nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11."],
    faq: [["Wann ist die Schwellung am stärksten?", "Häufig am zweiten bis dritten Tag."], ["Wann darf ich Sport machen?", "Meist nach etwa einer Woche, abhängig vom Verlauf."], ["Wann muss ich sofort anrufen?", "Bei Fieber, starker Blutung, zunehmender Schwellung oder Atem-/Schluckproblemen außerhalb der Praxissprechzeiten zuerst +49 151 10437450 nutzen. Wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Nur bei lebensbedrohlicher Notlage 112."]]
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
    prep: ["Am OP-Tag vollständig lesen.", "Medikamente genau nach Plan einnehmen.", "Bei Warnzeichen außerhalb der Praxissprechzeiten zuerst +49 151 10437450 nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11."],
    facts: [["Fokus", "Erste Stunden und erste Woche"], ["Kühlung", "Feucht, mild, 10 Min. kühlen / 10 Min. Pause"], ["Wichtig", "Kein Sog: kein Strohhalm, nicht kräftig spülen oder ausspucken"], ["Warnzeichen", "Blutung, Fieber, Eiter, zunehmende Schmerzen, Atem-/Schluckprobleme"]],
    timeline: [["OP-Tag", "Ruhe, Oberkörper erhöht, Tupfer konstant halten, milde feuchte Kühlung, kein Sog an der Wunde."], ["Ab Folgetag", "Sanfte Mundspülung oder Salzwasser-Mundbad, nicht gurgeln."], ["Tag 2-3", "Schwellung und Schmerzen können ihren Höhepunkt erreichen."], ["Woche 1", "Schonung, weiche Kost, Fäden werden meist entfernt."], ["Sofort", "Bei Warnzeichen außerhalb der Praxissprechzeiten +49 151 10437450 nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    sections: [
      { title: "Die ersten Stunden", text: "Ruhe, Oberkörperhochlagerung, konstantes Aufbeißen auf den Tupfer und feuchte milde Kühlung sind entscheidend." },
      { title: "Blutpfropf schützen", text: "Kein Strohhalm, keine Sportflasche mit Sog, nicht kräftig spülen, nicht gurgeln und Speichel nicht kräftig ausspucken." },
      { title: "Warnzeichen", text: "Starke Blutung, Fieber, Eiter, zunehmende Schmerzen nach Besserung, ausstrahlender Schmerz und anhaltende Taubheit müssen abgeklärt werden." }
    ],
    risks: [["Nachblutung", "Druck für 30 Minuten konstant ausüben; bei Persistenz melden."], ["Trockene Alveole", "Zunehmende, ausstrahlende Schmerzen nach anfänglicher Besserung ab Tag 3-4, oft mit schlechtem Geschmack oder Geruch."], ["Infektion", "Fieber, Eiter oder übler Geschmack."], ["Atem-/Schluckprobleme", "Außerhalb der Praxissprechzeiten +49 151 10437450 nutzen; wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Bei lebensbedrohlicher Notlage 112."]],
    aftercare: ["Absolute Ruhe am OP-Tag.", "Feucht und mild kühlen, kein Eispack.", "Kein Sog an der Wunde: kein Strohhalm, nicht kräftig spülen oder ausspucken.", "Ausreichend essen und trinken.", "Kein Alkohol, Nikotin, Kaffee oder Energydrinks für mindestens 3-5 Tage."],
    faq: [["Wann darf ich essen?", "Wenn die Betäubung vollständig abgeklungen ist."], ["Wie kühle ich richtig?", "Feuchtes kühles Tuch, etwa 10 Minuten kühlen und 10 Minuten Pause, kein Eispack."], ["Was gilt bei Oberkiefer und Kieferhöhle?", "Nur wenn wir es Ihnen gesagt haben: nicht schnäuzen, mit offenem Mund niesen und Druckausgleich vermeiden."], ["Wann muss ich sofort handeln?", "Bei Problemen außerhalb der Praxissprechzeiten zuerst +49 151 10437450 nutzen. Wenn wir nicht erreichbar sind: zahnärztlicher Notdienst 01805 60 70 11. Nur bei lebensbedrohlicher Notlage, Atemnot, starker Schluckbehinderung oder raschem Anschwellen von Hals oder Mundboden 112 rufen."]]
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
  },
  wsr_ablauf: {
    title: "Ablauf der Wurzelspitzenresektion",
    eyebrow: "Zeichnung",
    description: "Die Zeichnungen zeigen den typischen Ablauf einer Wurzelspitzenresektion. Ihre individuelle Situation kann je nach Zahnregion, Wurzelanatomie und Entzündungsausdehnung abweichen.",
    images: [
      {
        src: "assets/wsr/01-osteolyse.png",
        alt: "Wurzelspitzenresektion: Entzündung an der Wurzelspitze",
        caption: "Entzündung im Knochen: An der Wurzelspitze befindet sich entzündliches Gewebe."
      },
      {
        src: "assets/wsr/02-darstellung-wurzelspitze.png",
        alt: "Wurzelspitzenresektion: Darstellung der Wurzelspitze",
        caption: "Darstellung der Wurzelspitze: Die Region wird über einen kleinen Zugang sichtbar gemacht."
      },
      {
        src: "assets/wsr/03-resektion.png",
        alt: "Wurzelspitzenresektion: Resektion der Wurzelspitze",
        caption: "Resektion: Die Wurzelspitze wird gekürzt und entzündliches Gewebe entfernt."
      },
      {
        src: "assets/wsr/04-retro-aufbereitung.png",
        alt: "Wurzelspitzenresektion: retrograde Aufbereitung",
        caption: "Retrograde Aufbereitung: Der Kanal wird von der Wurzelspitze her vorbereitet."
      },
      {
        src: "assets/wsr/05-retro-fuellung.png",
        alt: "Wurzelspitzenresektion: retrograde Abschlussfüllung",
        caption: "Retrograde Abschlussfüllung: Der Kanal wird an der Spitze dicht verschlossen."
      },
      {
        src: "assets/wsr/06-abheilung.png",
        alt: "Wurzelspitzenresektion: Abheilung des Knochens",
        caption: "Abheilung: Der Knochen heilt über Monate um die Wurzelspitze herum aus."
      }
    ]
  },
  wsr_step_1: {
    title: "1 · Entzündung im Knochen",
    eyebrow: "Zeichnung",
    description: "An der Wurzelspitze befindet sich entzündliches Gewebe. Im Röntgenbild oder DVT zeigt sich häufig eine Aufhellung im Knochen.",
    images: [
      {
        src: "assets/wsr/01-osteolyse.png",
        alt: "Wurzelspitzenresektion: Entzündung an der Wurzelspitze",
        caption: "Entzündung im Knochen: An der Wurzelspitze befindet sich entzündliches Gewebe."
      }
    ]
  },
  wsr_step_2: {
    title: "2 · Darstellung der Wurzelspitze",
    eyebrow: "Zeichnung",
    description: "Nach vollständiger Betäubung wird die Region über einen kleinen Zugang im Zahnfleisch und Knochen dargestellt.",
    images: [
      {
        src: "assets/wsr/02-darstellung-wurzelspitze.png",
        alt: "Wurzelspitzenresektion: Darstellung der Wurzelspitze",
        caption: "Darstellung der Wurzelspitze: Die Region wird über einen kleinen Zugang sichtbar gemacht."
      }
    ]
  },
  wsr_step_3: {
    title: "3 · Resektion",
    eyebrow: "Zeichnung",
    description: "Die Wurzelspitze wird gekürzt und entzündliches Gewebe wird entfernt. So kann die Ursache von der Wurzelspitze her behandelt werden.",
    images: [
      {
        src: "assets/wsr/03-resektion.png",
        alt: "Wurzelspitzenresektion: Resektion der Wurzelspitze",
        caption: "Resektion: Die Wurzelspitze wird gekürzt und entzündliches Gewebe entfernt."
      }
    ]
  },
  wsr_step_4: {
    title: "4 · Retrograde Aufbereitung",
    eyebrow: "Zeichnung",
    description: "Der Kanal wird von der Wurzelspitze her gereinigt und für den dichten Abschluss vorbereitet.",
    images: [
      {
        src: "assets/wsr/04-retro-aufbereitung.png",
        alt: "Wurzelspitzenresektion: retrograde Aufbereitung",
        caption: "Retrograde Aufbereitung: Der Kanal wird von der Wurzelspitze her vorbereitet."
      }
    ]
  },
  wsr_step_5: {
    title: "5 · Retrograde Abschlussfüllung",
    eyebrow: "Zeichnung",
    description: "Der Kanal wird an der Spitze dicht verschlossen. Dieser Schritt ist für den langfristigen Erfolg entscheidend.",
    images: [
      {
        src: "assets/wsr/05-retro-fuellung.png",
        alt: "Wurzelspitzenresektion: retrograde Abschlussfüllung",
        caption: "Retrograde Abschlussfüllung: Der Kanal wird an der Spitze dicht verschlossen."
      }
    ]
  },
  wsr_step_6: {
    title: "6 · Abheilung",
    eyebrow: "Zeichnung",
    description: "Nach der Wundheilung wird die Region kontrolliert. Der Knochen heilt über Monate um die Wurzelspitze herum aus.",
    images: [
      {
        src: "assets/wsr/06-abheilung.png",
        alt: "Wurzelspitzenresektion: Abheilung des Knochens",
        caption: "Abheilung: Der Knochen heilt über Monate um die Wurzelspitze herum aus."
      }
    ]
  }
};

const visualAssetVersion = "20260525-wsr-crop-1";
const defaultLanguage = "de";

const state = {
  activeId: new URLSearchParams(window.location.search).get("thema") || "implantat_basis",
  language: new URLSearchParams(window.location.search).get("lang") || defaultLanguage,
  filter: "all",
  query: ""
};

const listEl = document.querySelector("#procedureList");
const searchInput = document.querySelector("#searchInput");
const segmentButtons = Array.from(document.querySelectorAll(".segment[data-filter]"));
const activeCategory = document.querySelector("#activeCategory");
const activeTitle = document.querySelector("#activeTitle");
const viewerTitle = document.querySelector("#viewerTitle");
const portalContent = document.querySelector("#portalContent");
const contentTabs = document.querySelector("#contentTabs");
const sectionNav = document.querySelector("#sectionNav");
const languageSwitcher = document.querySelector("#languageSwitcher");
const sourceDocument = document.querySelector("#sourceDocument");
const pdfDocument = document.querySelector("#pdfDocument");
const copyLink = document.querySelector("#copyLink");
const printPreview = document.querySelector("#printPreview");
const toast = document.querySelector("#toast");
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

function patientLink(id) {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("thema", id);
  if (state.language !== defaultLanguage) {
    url.searchParams.set("lang", state.language);
  }
  return url.toString();
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function filteredProcedures() {
  const query = normalize(state.query.trim());
  return procedures.filter((procedure) => {
    const matchesFilter = state.filter === "all" || procedure.category === state.filter;
    const haystack = normalize(`${procedure.title} ${procedure.summary} ${procedure.keywords || ""}`);
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderList() {
  if (!listEl) return;
  const items = filteredProcedures();
  listEl.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Keine passende Patienteninformation gefunden.";
    listEl.append(empty);
    return;
  }

  for (const procedure of items) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `procedure-card${procedure.id === state.activeId ? " is-active" : ""}`;
    button.dataset.id = procedure.id;
    button.innerHTML = `
      <strong>${escapeHtml(procedure.title)}</strong>
      <span>${escapeHtml(procedure.summary)}</span>
    `;
    button.addEventListener("click", () => selectProcedure(procedure.id));
    listEl.append(button);
  }
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
    <div class="language-title">Sprache</div>
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
      renderDetail();
    });
  });
}

function renderImplantDiagram() {
  return `
    <figure class="schema-card" aria-label="Schemazeichnung eines Zahnimplantats im Knochen">
      <svg class="implant-schema" viewBox="0 0 920 620" role="img" aria-labelledby="implantSchemaTitle implantSchemaDesc">
        <title id="implantSchemaTitle">Schema Zahnimplantat mit Krone, Abutment, Prothetikschraube und Implantatkörper</title>
        <desc id="implantSchemaDesc">Vereinfachte Schnittzeichnung: oben Krone, darunter Abutment und innenliegende Prothetikschraube, unten Implantatkörper im Kieferknochen.</desc>

        <defs>
          <linearGradient id="crownShade" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#ffffff" />
            <stop offset="1" stop-color="#d8e8ee" />
          </linearGradient>
          <linearGradient id="metalShade" x1="0" x2="1">
            <stop offset="0" stop-color="#eef4f6" />
            <stop offset="0.48" stop-color="#8da1ad" />
            <stop offset="1" stop-color="#eef4f6" />
          </linearGradient>
          <pattern id="threadPattern" width="28" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(-18)">
            <path d="M0 24 L28 2" stroke="#5c7686" stroke-width="4" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="920" height="620" fill="#ffffff" />

        <path class="gingiva" d="M188 259 C278 221 371 232 458 256 C552 282 636 286 735 250 L735 342 C630 374 545 369 454 342 C365 317 277 307 188 343 Z" />
        <path class="bone" d="M152 337 C255 303 360 312 455 341 C552 371 654 378 768 338 L768 586 L152 586 Z" />
        <path class="bone-lines" d="M178 391 C280 361 355 365 453 394 C562 426 656 419 739 390 M180 457 C282 430 377 434 464 461 C561 492 660 489 738 456 M181 522 C281 500 376 501 470 526 C570 553 658 550 738 518" />

        <path class="crown" d="M357 54 C398 28 477 27 520 53 C548 70 563 102 559 136 C555 171 538 214 513 238 C486 265 390 264 363 236 C339 211 321 169 318 135 C315 101 329 72 357 54 Z" />
        <path class="crown-detail" d="M398 47 C385 86 384 131 397 164 M478 46 C491 87 490 129 476 164 M351 184 C405 202 475 203 528 184" />

        <path class="abutment" d="M392 239 L486 239 L510 322 C480 343 399 343 369 322 Z" />
        <path class="abutment-highlight" d="M413 252 L439 252 L425 322 L395 322 Z" />

        <path class="implant-body" d="M374 319 C401 335 476 335 503 319 L488 556 C463 573 413 573 388 556 Z" />
        <path class="implant-thread-fill" d="M383 348 L496 348 L492 534 L388 534 Z" />
        <path class="implant-outline" d="M374 319 C401 335 476 335 503 319 L488 556 C463 573 413 573 388 556 Z" />

        <path class="screw" d="M431 220 L456 220 L462 512 C453 520 434 520 425 512 Z" />
        <path class="screw-head" d="M413 220 C421 205 466 205 474 220 C466 235 421 235 413 220 Z" />
        <path class="screw-slot" d="M426 220 L461 220" />

        <g class="labels">
          <path d="M548 100 H724" />
          <text x="736" y="106">Krone</text>

          <path d="M508 274 H724" />
          <text x="736" y="280">Abutment</text>

          <path d="M462 398 H724" />
          <text x="736" y="394">
            <tspan x="736" dy="0">innenliegende</tspan>
            <tspan x="736" dy="22">Prothetikschraube</tspan>
          </text>

          <path d="M494 503 H724" />
          <text x="736" y="509">Implantat</text>

          <path d="M303 423 H116" />
          <text x="64" y="429">Kieferknochen</text>

          <path d="M300 277 H116" />
          <text x="64" y="283">Zahnfleisch</text>
        </g>
      </svg>
      <figcaption>Vereinfachte Schemazeichnung: Die Krone wird über das Abutment mit einer innenliegenden Prothetikschraube auf dem Implantat befestigt. Das Implantat selbst steht im Kieferknochen.</figcaption>
    </figure>
  `;
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

function renderWsrVisualLauncher() {
  return `
    <div class="visual-step-actions" aria-label="Bilder zur Wurzelspitzenresektion">
      <button type="button" class="visual-step-button" data-visual-gallery="wsr_ablauf">Bilder zum Ablauf öffnen</button>
    </div>
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

function injectWsrVisuals(container) {
  const heading = Array.from(container.querySelectorAll("h2")).find((item) => item.textContent.includes("Wie läuft die WSR ab"));
  const list = container.querySelector(".visual-step-list");
  if (!heading || !list || container.querySelector(".visual-step-actions")) return;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = renderWsrVisualLauncher();
  const actions = wrapper.firstElementChild;
  actions.querySelector("[data-visual-gallery]")?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openVisualGallery("wsr_ablauf");
  });
  list.after(actions);
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
      if (procedure.diagram === "implant" && index === 0) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = renderImplantDiagram();
        const firstHeading = section.querySelector("h2");
        if (firstHeading?.nextSibling) {
          firstHeading.parentNode.insertBefore(wrapper.firstElementChild, firstHeading.nextSibling);
        } else {
          section.prepend(wrapper.firstElementChild);
        }
      }
      container.append(section);
    });

    if (procedure.id === "weisheitszahn") {
      injectWisdomVisuals(container);
    } else if (procedure.id === "wsr") {
      injectWsrVisuals(container);
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
  } catch (error) {
    target.innerHTML = `
      <div class="source-error">
        Die vollständige Patienteninformation konnte nicht geladen werden.
        <a href="${escapeHtml(variant.source)}" target="_blank" rel="noopener">Original-Merkblatt öffnen</a>
      </div>
    `;
  }
}

function renderDetail() {
  const procedure = getActiveProcedure();
  const variant = getLanguageVariant(procedure);
  activeCategory.textContent = procedure.category === "implantologie" ? "Implantologie" : "Oralchirurgie";
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

  const url = new URL(window.location.href);
  url.searchParams.set("thema", procedure.id);
  if (state.language === defaultLanguage) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", state.language);
  }
  window.history.replaceState({}, "", url);
}

function selectProcedure(id) {
  state.activeId = id;
  renderList();
  renderDetail();
  document.querySelector(".detail")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

segmentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    segmentButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderList();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderList();
  });
}

if (copyLink) {
  copyLink.addEventListener("click", async () => {
    const link = patientLink(getActiveProcedure().id);
    try {
      await navigator.clipboard.writeText(link);
      showToast("Patientenlink kopiert.");
    } catch {
      showToast(link);
    }
  });
}

if (printPreview) {
  printPreview.addEventListener("click", () => window.print());
}

document.addEventListener("click", (event) => {
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

if (!procedures.some((procedure) => procedure.id === state.activeId)) {
  state.activeId = procedures[0].id;
}

renderList();
renderDetail();
