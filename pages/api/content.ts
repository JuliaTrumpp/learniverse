const data = {
  moduleCards: [
    {
      name: "Lineare Algebra",
      number: "2350",
      description: "Als Grundlage für Lineare Algebra empfehlen wir Analysis",
      color: "var(--math)",
    },
    {
      name: "Computergrafik",
      number: "4120",
      description:
        "Als Grundlage für Computergrafik empfehlen wir Lineare Algebra und Programmieren 3",
      color: "var(--cs-application)",
    },
    {
      name: "Analysis",
      number: "1340",
      description: "Als Grundlage für Analysis empfehlen wir Analysis",
      color: "var(--math)",
    },
    {
      name: "Angewandte Mathematik",
      number: "3360",
      description:
        "Als Grundlage für Angewandte Mathematik empfehlen wir Analysis und Lineare Algebra.",
      color: "var(--math)",
    },
    {
      name: "Programmieren 1",
      number: "1120",
      description: "Als Grundlage für Programmieren 1 empfehlen wir Analysis",
      color: "var(--cs-application)",
    },
    {
      name: "Programmieren 2",
      number: "2130",
      description: "Als Grundlage für Programmieren 2 empfehlen wir Analysis",
      color: "var(--cs-application)",
    },
    {
      name: "Programmieren 3",
      number: "3140",
      description:
        "Als Grundlage für Programmieren 3 empfehlen wir Programmieren 2 und Algorithmen und Datenstrukturen.",
      color: "var(--cs-application)",
    },
  ],
  modules: [
    {
      modulename: "Lineare Algebra",
      suggestedModules: ["Analysis", "Angewandte Mathematik", "Computergrafik"],
      chapters: [
        {
          name: "Vektorräume",
          number: "1",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Vektorräume und Unterräume",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Linearkombination und Erzeugnisse",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            },
            {
              title: "Lineare Abhängigkeit und Unabhängigkeit",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Skalarprodukt",
          number: "2",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Skalarprodukt und Norm",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Winkel und Orthogonalität",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Vektorprodukt",
          number: "3",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Vektorprodukt für 3-Dimensionale Euklidische Vektorräume",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Vektorprodukt für den Geometrischen Vektorraum",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Lineare Gleichungssysteme",
          number: "4",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Bezeichnungen und Sprechweisen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Struktur der Lösungsmengen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Lineare Abbildungen",
          number: "5",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Definitionen und Sprechweisen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Matrixdarstellung Linearer Abbildungen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Bild und Kern Linearer Abbildungen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Quaternionen",
          number: "6",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Quaternionenalgebra",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Geometrische Anwendungen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Determinanten",
          number: "7",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Permutationen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Determinanten",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Eigenwerte von Abbildungen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Kurven",
          number: "8",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Konvexe Mengen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Bernsteinpolynome",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
      ],
    },
    {
      modulename: "Computergrafik",
      suggestedModules: [
        "Analysis",
        "Angewandte Mathematik",
        "Lineare Algebra",
      ],
      chapters: [
        {
          name: "2D Transformationen und Homogene Koordinaten",
          number: "1",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Transformationen in 2D",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Homogene Koordinaten",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Raytracing",
          number: "2",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Implementierung eines Raytracers",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Farben und Beleuchtung",
          number: "3",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "So Sehen Wir Farben",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "So Werden Farben Dargestellt",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
      ],
    },
    {
      modulename: "Analysis",
      suggestedModules: [
        "Lineare Algebra",
        "Angewandte Mathematik",
        "Computergrafik",
      ],
      chapters: [
        {
          name: "Folgen und Reihen",
          number: "1",
          introductionText:
            "Ordnet man jeder natürlichen Zahl n eine reelle Zahl eindeutig zu, so entsteht eine unendliche (reelle) Folge. Die einzelnen Werte der Folge heißen Folgenglieder und werden mit Indizes durchnummeriert. Im Unterschied zu einer Menge kann bei einer Folge ein und das selbe Glied mehrere Male auftreten. Die Definition einer Folge kann auf zweierlei Arten. Viele Folgen lassen sich nach einem Bildungsgesetz mittels eines Terms aufstellen. Das Bildungsgesetz wird hierzu in runde Klammern geschrieben.",
          videoIds: [
            "yr5nnZud5ao",
            "QLSBPdmTKys",
            "nEyl0VobgWA",
            "qVv_y5sJgkk",
          ],
          contentPart: [
            {
              title: "Wichtige Folgen",
              description:
                "Eine arithmetische Folge ist eine Folge, bei der benachbarte Folgenglieder stets den gleichen Abstand haben. Beispiele sind die häufig verwendeten Folgen der geraden Zahlen 2, 4, 6, … mit der Funktionsvorschrift. Eine Potenzfolge ist eine Folge, für die die Potenzfunktion die Glieder liefert (Erzeugende Funktion). So wie in einer arithmetischen Folge aufeinanderfolgende Glieder den gleichen Abstand haben, so stehen in einer geometrischen Folge. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Wichtige Reihen",
              description:
                "Ob bei Aufgaben mit Taylorreihen oder Konvergenz von Reihen - hin und wieder ist es nützlich ein paar Reihen zu kennen. Wichtige Reihen für Funktionen sind: Reihe der e-Funktion, Reihe der Logarithmus-Funktion, Reihe der Sinus-Funktion, Reihe der Kosinus-Funktion. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Differenzialrechnung mit einer Variablen",
          number: "2",
          introductionText:
            "Im Folgenden Kapitel gehen wir alle wichtigen Begriffe zur Differentialrechnung ein. Dabei klären wir die Zusammenhänge zwischen den einzelnen Themen und verschaffen dir so einen guten Gesamtüberblick zur Differentialrechnung. Du hättest gern alle wichtigen Themen zur Differentialrechnung kurz und kompakt zusammengefasst? Dann schau dir einfach unser Video  zur Differentialrechnung an. Dort erklären wir dir anschaulich alle Zusammenhänge.",
          videoIds: [
            "WPXVvoXqcjg",
            "OCj3DtX9hDw",
            "AWdLkNZJZ70",
            "Sm0Go9IioJ4",
            "Jmaak1LXeZE",
            "9WAG2P1B3us",
          ],
          contentPart: [
            {
              title: "Hauptanwendungen der Differenzialrechnung",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Unterschied Differenzialrechnung mit und ohne Variable",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Spezielle Funktionen",
          number: "3",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "xRftyh3kC_Q",
            "GwK6p5oRP-A",
            "wduDctLri80",
            "gDb3k0XfLec",
            "vWYo-7UpT_U",
            "yW7koh2voMc",
            "Q2BfXeFp_6c",
            "prDqFFQJ0Ho",
          ],
          contentPart: [
            {
              title: "Kubische Funktionen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Funktionale Darstellung komplexer Gleichungssysteme",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Integralrechnung",
          number: "4",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: ["sMoN6HiEoAA", "sMoN6HiEoAA", "sMoN6HiEoAA"],
          contentPart: [
            {
              title: "Offene und Geschlossene Intervalle",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Grenzwertanalyse Mit Intervallen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Funktionen Mit Mehreren Variablen",
          number: "5",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: ["sMoN6HiEoAA", "sMoN6HiEoAA", "sMoN6HiEoAA"],
          contentPart: [
            {
              title: "Funktionen Mit Komplexen Zahlen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Funktionen Mit Mehreren Variablen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Funktionenreihen",
          number: "6",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: ["sMoN6HiEoAA", "sMoN6HiEoAA", "sMoN6HiEoAA"],
          contentPart: [
            {
              title: "Die Geometrische Reihe",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Wichtige Reihen der Mathematik",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Transformationen",
          number: "7",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: ["sMoN6HiEoAA", "sMoN6HiEoAA", "sMoN6HiEoAA"],
          contentPart: [
            {
              title: "Transformation der Exponentialfunktion",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Transformationen Ganzrationaler Funktionen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Differenzialrechnung mit einer Variablen",
          number: "8",
          introductionText:
            "Im Folgenden Kapitel gehen wir alle wichtigen Begriffe zur Differentialrechnung ein. Dabei klären wir die Zusammenhänge zwischen den einzelnen Themen und verschaffen dir so einen guten Gesamtüberblick zur Differentialrechnung. Du hättest gern alle wichtigen Themen zur Differentialrechnung kurz und kompakt zusammengefasst? Dann schau dir einfach unser Video  zur Differentialrechnung an. Dort erklären wir dir anschaulich alle Zusammenhänge.",
          videoIds: [
            "WPXVvoXqcjg",
            "OCj3DtX9hDw",
            "AWdLkNZJZ70",
            "Sm0Go9IioJ4",
            "Jmaak1LXeZE",
            "9WAG2P1B3us",
          ],
          contentPart: [
            {
              title: "Hauptanwendungen der Differenzialrechnung",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Unterschied Differenzialrechnung mit und ohne Variable",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Differenzialrechnung mit einer Variablen",
          number: "9",
          introductionText:
            "Im Folgenden Kapitel gehen wir alle wichtigen Begriffe zur Differentialrechnung ein. Dabei klären wir die Zusammenhänge zwischen den einzelnen Themen und verschaffen dir so einen guten Gesamtüberblick zur Differentialrechnung. Du hättest gern alle wichtigen Themen zur Differentialrechnung kurz und kompakt zusammengefasst? Dann schau dir einfach unser Video  zur Differentialrechnung an. Dort erklären wir dir anschaulich alle Zusammenhänge.",
          videoIds: [
            "WPXVvoXqcjg",
            "OCj3DtX9hDw",
            "AWdLkNZJZ70",
            "Sm0Go9IioJ4",
            "Jmaak1LXeZE",
            "9WAG2P1B3us",
          ],
          contentPart: [
            {
              title: "Hauptanwendungen der Differenzialrechnung",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Unterschied Differenzialrechnung mit und ohne Variable",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Differenzialrechnung mit einer Variablen",
          number: "10",
          introductionText:
            "Im Folgenden Kapitel gehen wir alle wichtigen Begriffe zur Differentialrechnung ein. Dabei klären wir die Zusammenhänge zwischen den einzelnen Themen und verschaffen dir so einen guten Gesamtüberblick zur Differentialrechnung. Du hättest gern alle wichtigen Themen zur Differentialrechnung kurz und kompakt zusammengefasst? Dann schau dir einfach unser Video  zur Differentialrechnung an. Dort erklären wir dir anschaulich alle Zusammenhänge.",
          videoIds: [
            "WPXVvoXqcjg",
            "OCj3DtX9hDw",
            "AWdLkNZJZ70",
            "Sm0Go9IioJ4",
            "Jmaak1LXeZE",
            "9WAG2P1B3us",
          ],
          contentPart: [
            {
              title: "Hauptanwendungen der Differenzialrechnung",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Unterschied Differenzialrechnung mit und ohne Variable",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Differenzialrechnung mit einer Variablen",
          number: "11",
          introductionText:
            "Im Folgenden Kapitel gehen wir alle wichtigen Begriffe zur Differentialrechnung ein. Dabei klären wir die Zusammenhänge zwischen den einzelnen Themen und verschaffen dir so einen guten Gesamtüberblick zur Differentialrechnung. Du hättest gern alle wichtigen Themen zur Differentialrechnung kurz und kompakt zusammengefasst? Dann schau dir einfach unser Video  zur Differentialrechnung an. Dort erklären wir dir anschaulich alle Zusammenhänge.",
          videoIds: [
            "WPXVvoXqcjg",
            "OCj3DtX9hDw",
            "AWdLkNZJZ70",
            "Sm0Go9IioJ4",
            "Jmaak1LXeZE",
            "9WAG2P1B3us",
          ],
          contentPart: [
            {
              title: "Hauptanwendungen der Differenzialrechnung",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Unterschied Differenzialrechnung mit und ohne Variable",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Differenzialrechnung mit einer Variablen",
          number: "12",
          introductionText:
            "Im Folgenden Kapitel gehen wir alle wichtigen Begriffe zur Differentialrechnung ein. Dabei klären wir die Zusammenhänge zwischen den einzelnen Themen und verschaffen dir so einen guten Gesamtüberblick zur Differentialrechnung. Du hättest gern alle wichtigen Themen zur Differentialrechnung kurz und kompakt zusammengefasst? Dann schau dir einfach unser Video  zur Differentialrechnung an. Dort erklären wir dir anschaulich alle Zusammenhänge.",
          videoIds: [
            "WPXVvoXqcjg",
            "OCj3DtX9hDw",
            "AWdLkNZJZ70",
            "Sm0Go9IioJ4",
            "Jmaak1LXeZE",
            "9WAG2P1B3us",
          ],
          contentPart: [
            {
              title: "Hauptanwendungen der Differenzialrechnung",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Unterschied Differenzialrechnung mit und ohne Variable",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        }
      ],
    },
    {
      modulename: "Angewandte Mathematik",
      suggestedModules: ["Analysis", "Computergrafik", "Lineare Algebra"],
      chapters: [
        {
          name: "Grundlegende Beweisverfahren",
          number: "1",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Deduktive Beweise",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Reduktion auf Definitionen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Stochastik",
          number: "2",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: " Grundlagen der Kombinatorik",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
        {
          name: "Schließende Statistik",
          number: "3",
          introductionText:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
          videoIds: [
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
            "sMoN6HiEoAA",
          ],
          contentPart: [
            {
              title: "Punktschatzungen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
            {
              title: "Intervallschatzungen",
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
            },
          ],
        },
      ],
    },
    {
      modulename: "Geheim",
      suggestedModules: [
        "Analysis",
        "Angewandte Mathematik",
        "Lineare Algebra",
      ],
      chapters: [
        {
          name: "Du solltest nicht hier sein",
          number: "1",
          introductionText:
            "Diese Seite ist nicht für deine Augen gedacht. Geh woanders hin.",
          videoIds: [
            "yBdpmNVxN-k",
            "uyuVH3J3tdQ",
            "7DecQMWyX0Y",
            "1qCQW0Pbl3A",
            "yVtn55y0Gj8",
            "gyal9T_fQ-8",
            "CLkHPb5G4u8",
          ],
          contentPart: [
            {
              title: "Hier gibts nichts zu sehen",
              description: "Guck lieber Computergrafik oder so.",
            },
            {
              title: "Hier ist nichts",
              description: "Tschüss",
            },
          ],
        },
        {
          name: "Du solltest nicht hier sein",
          number: "2",
          introductionText:
            "Diese Seite ist nicht für deine Augen gedacht. Geh woanders hin.",
          videoIds: [
            "yBdpmNVxN-k",
            "uyuVH3J3tdQ",
            "7DecQMWyX0Y",
            "1qCQW0Pbl3A",
            "yVtn55y0Gj8",
            "xuF0AGaUhb8",
            "gyal9T_fQ-8",
            "CLkHPb5G4u8",
          ],
          contentPart: [
            {
              title: "Hier gibts nichts zu sehen",
              description: "Guck lieber Computergrafik oder so.",
            },
            {
              title: "Hier ist nichts",
              description: "Tschüss",
            },
          ],
        },
        {
          name: "Du solltest nicht hier sein",
          number: "3",
          introductionText:
            "Diese Seite ist nicht für deine Augen gedacht. Geh woanders hin.",
          videoIds: [
            "yBdpmNVxN-k",
            "uyuVH3J3tdQ",
            "7DecQMWyX0Y",
            "1qCQW0Pbl3A",
            "yVtn55y0Gj8",
            "xuF0AGaUhb8",
            "gyal9T_fQ-8",
            "CLkHPb5G4u8",
          ],
          contentPart: [
            {
              title: "Hier gibts nichts zu sehen",
              description: "Guck lieber Computergrafik oder so.",
            },
            {
              title: "Hier ist nichts",
              description: "Tschüss",
            },
          ],
        },
      ],
    },
  ],
};

export default data;
