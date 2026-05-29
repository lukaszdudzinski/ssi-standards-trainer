// Baza pytań dla SSI Instructor Standards Trainer PWA
const QUESTIONS_DB = [
  {
    "question": "Jaki jest współczynnik szkolenia w wodzie otwartej z jednym certyfikowanym asystentem podczas programu Open Water Diver dla Kursantów, którzy ukończyli 13 lat?",
    "options": [
      "6:2",
      "10:2",
      "12:3",
      "8:1"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "VI. Współczynnik ilościowy w wodzie",
      "page": 50,
      "quote": "Współczynnik może wzrosnąć do 10:2 z jednym (1) certyﬁkowanym asystentem."
    }
  },
  {
    "question": "Jaka jest maksymalna głębokość dla programu Try Scuba?",
    "options": [
      "3 metry",
      "5 metrów",
      "12 metrów",
      "10 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "V. Limity głębokości - Try Scuba",
      "page": 46,
      "quote": "Maksymalny limit głębokości wynosi 5 metrów w basenie/wodach ograniczonych i wodach otwartych."
    }
  },
  {
    "question": "Ocena sprawności kursanta w wodzie musi zostać ukończona przed:",
    "options": [
      "Wszelkimi szkoleniami w wodzie",
      "Wydaniem karty certyfikacyjnej",
      "Wszelkimi nurkowaniami szkoleniowymi na wodach otwartych",
      "Ukończeniem Nurkowania Szkoleniowego na Wodach Otwartych 4"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ocena Sprawności w Wodzie",
      "section": "Ocena sprawności fizycznej Kursanta w wodzie",
      "page": 3,
      "quote": "Ocena sprawności w wodzie musi zostać ukończona przed rozpoczęciem jakiegokolwiek szkolenia na wodach otwartych."
    }
  },
  {
    "question": "Jakie są wymagania wstępne dla kursantów programu Scuba Skills Update?",
    "options": [
      "Deep Diving",
      "Master Diver",
      "Divemaster",
      "Open Water Diver lub Referral Diver"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Scuba Skills Update - Wymagania wstępne",
      "page": 55,
      "quote": "Certyfikat Open Water Diver (lub równoważny), nurek w statusie Referral lub nurek posiadający certyfikat podstawowy."
    }
  },
  {
    "question": "Nurkowie Junior Open Water Diver muszą nurkować pod nadzorem:",
    "options": [
      "Pośrednim, profesjonalisty nurkowego lub dorosłego Scuba Diver",
      "Bezpośrednim, Profesjonalisty Nurkowego lub dorosłego nurka Open Water Diver",
      "Bezpośrednim, branżowego profesjonalisty lub Divemastera",
      "Pośrednim, Dive Guide'a lub dorosłego nurka Stress & Rescue"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Junior Open Water Diver - Limity",
      "page": 55,
      "quote": "Musi nurkować z dorosłym certyfikowanym nurkiem (lub profesjonalistą SSI) o poziomie wyszkolenia Open Water Diver lub wyższym."
    }
  },
  {
    "question": "Jaka jest maksymalna głębokość dla programu Scuba Skills Update?",
    "options": [
      "3 metry",
      "12 metrów",
      "5 metrów",
      "18 metrów"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Scuba Skills Update - Limity",
      "page": 46,
      "quote": "Maksymalny limit głębokości dla certyfikowanych nurków wynosi 18 metrów (lub limit głębokości z ich certyfikatu)."
    }
  },
  {
    "question": "Program Scuba Diver to:",
    "options": [
      "Zajęcia akademickie i sesje szkoleniowe na basenie/ograniczonym akwenie 7 programu Open Water Diver.",
      "Warunek wstępny do uzyskania certyfikatu Open Water Diver.",
      "Wymagane, aby zostać nurkiem autonomicznym",
      "Pierwsza połowa programu Open Water Diver - zajęcia akademickie i szkolenie w wodzie."
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Scuba Diver - Definicja",
      "page": 49,
      "quote": "Program Scuba Diver stanowi około połowę programu Open Water Diver i uprawnia do nurkowania pod bezpośrednim nadzorem."
    }
  },
  {
    "question": "Jeśli suche skafandry są używane podczas szkolenia, Instruktor Wód Otwartych (Open Water Instructor) bezpośrednio nadzorujący program musi również:",
    "options": [
      "Posiadać certyfikację w zakresie suchego skafandra na poziomie kursanta",
      "Posiadać aktywny status SSI Dry Suit Diving Instructor.",
      "Być Instruktorem Dry Suit Diving z dowolnej agencji",
      "Posiadać co najmniej pięć zalogowanych nurkowań w suchym skafandrze"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Specjalistyczny sprzęt nurkowy",
      "page": 33,
      "quote": "Instruktor prowadzący szkolenie w suchym skafandrze musi posiadać aktywny status instruktora specjalizacji SSI Dry Suit Diving."
    }
  },
  {
    "question": "Assistant Instructor może ukończyć certyfikację Specialty Instructor dla:",
    "options": [
      "Navigation",
      "Deep Diving",
      "Wszystkie odpowiedzi są prawidłowe",
      "Equipment Techniques, Science of Diving, Enriched Air Nitrox itp."
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Assistant Instructor - Uprawnienia",
      "page": 122,
      "quote": "Assistant Instructor może uzyskać uprawnienia instruktorskie dla specjalizacji nie-nurkowych (Ecology, Equipment Techniques) oraz wybranych basenowych."
    }
  },
  {
    "question": "Posiadający aktywny status _____ musi zaprezentować/nadzorować wszystkie umiejętności awaryjnego wynurzania podczas szkolenia w wodzie.",
    "options": [
      "Open Water Instructor (Open Water Instructor), bezpośrednio",
      "Open Water Instructor (Open Water Instructor), pośrednio",
      "Assistant Instructor, bezpośrednio",
      "Assistant Instructor, pośrednio"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Nadzór nad ćwiczeniami awaryjnymi",
      "page": 35,
      "quote": "Aktywny status Open Water Instructor (lub wyższy) musi bezpośrednio nadzorować wszystkie ćwiczenia awaryjnego wynurzania."
    }
  },
  {
    "question": "Ile sesji w wodzie jest wymaganych do ukończenia programu specjalizacji Perfect Buoyancy?",
    "options": [
      "Trzy",
      "Cztery",
      "Dwa",
      "Jeden"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Specjalizacje basenowe/w wodach ograniczonych",
      "section": "Perfect Buoyancy - Wymagania w wodzie",
      "page": 75,
      "quote": "Wymagane jest ukończenie co najmniej dwóch (2) sesji szkoleniowych w wodzie (basen/wody ograniczone lub wody otwarte)."
    }
  },
  {
    "question": "Kto może nadzorować powierzchniowe ćwiczenia na wodach otwartych podczas nurkowań szkoleniowych na wodach otwartych, jeśli są one pośrednio nadzorowane przez Open Water Instructor?",
    "options": [
      "Każdy certyfikowany asystent o aktywnym statusie",
      "Żadna odpowiedź nie jest poprawna",
      "Divemaster o aktywnym statusie",
      "Assistant Instructor o aktywnym statusie"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Korzystanie z pomocy certyfikowanych asystentów",
      "page": 34,
      "quote": "Certyfikowany asystent o aktywnym statusie może nadzorować powierzchniowe ćwiczenia pod pośrednim nadzorem instruktora."
    }
  },
  {
    "question": "Co dzieje się z Training Record (Dokumentacją szkolenia) przed uzyskaniem przez Kandydata certyfikatu Specialty Instructor?",
    "options": [
      "Przesłane do MySSI",
      "Wysłane do lokalnego SSI Service Center",
      "Digitalizowane przez Centrum Szkoleniowe",
      "Wysłane do SSI International"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Dokumentacja szkolenia i Formularze prywatności",
      "page": 12,
      "quote": "Wszystkie dokumenty szkoleniowe muszą zostać zdigitalizowane i zachowane przez Centrum Szkoleniowe."
    }
  },
  {
    "question": "W jaki sposób Scuba Diver może uzyskać stopień Open Water Diver?",
    "options": [
      "Ukończenie Zajęć Szkoleniowych na wodach otwartych 4-6 z programu Open Water Diver oraz egzamin końcowy Open Water Diver.",
      "Ukończenie Basen/Wody ograniczone Zajęcia 4-6 z programu Open Water Diver.",
      "Wszystkie odpowiedzi są prawidłowe",
      "Ukończenie Zajęć w wodzie ograniczonej 4-6, Nurkowań na wodach otwartych 3-4 i egzaminu końcowego OWD."
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Upgrade z Scuba Diver do Open Water Diver",
      "page": 51,
      "quote": "Należy ukończyć brakujące zajęcia teoretyczne, sesje basenowe 4-6, nurkowania 3-4 na wodach otwartych oraz egzamin końcowy OWD."
    }
  },
  {
    "question": "Jaki jest minimalny wiek, aby zarejestrować się do programu Open Water Diver?",
    "options": [
      "15 lat",
      "12 lat",
      "8 lat",
      "10 lat"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Wymagania wstępne",
      "page": 46,
      "quote": "Minimalny wiek | 10 lat. (Uwaga: Osoby w wieku 10-14 lat otrzymują certyfikat Junior OWD)."
    }
  },
  {
    "question": "Jaki jest współczynnik szkolenia w wodzie otwartej podczas programu Open Water Diver dla kursantów, którzy mają więcej niż 15 lat?",
    "options": [
      "10:2",
      "12:3 z certyfikowanym asystentem",
      "6:2",
      "8:1"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "VI. Współczynnik ilościowy w wodzie",
      "page": 46,
      "quote": "Współczynnik kursant-instruktor: 8:1"
    }
  },
  {
    "question": "Kto podpisuje Dokumentację Ukończenia Szkolenia Instruktora Specjalizacji dla metody współnauczania?",
    "options": [
      "Manager QMS Centrum Szkoleniowego i główny instruktor",
      "Tylko główny instruktor",
      "Tylko Kandydat i Instruktor Specialty",
      "Kierownik SSI Service Center"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Metoda współnauczania (Co-Teaching)",
      "page": 133,
      "quote": "Dokumentację musi podpisać certyfikowany instruktor prowadzący (główny) oraz manager ds. zarządzania jakością (QMS) Centrum."
    }
  },
  {
    "question": "Program Scuba Skills Update (Scuba Skills Update) przeznaczony jest dla:",
    "options": [
      "Certyfikowani nurkowie, którzy utracili dowód swojej certyfikacji",
      "Niecertyfikowani nurkowie, którzy chcą spróbować nurkowania po raz pierwszy",
      "Professionals powracający do aktywnego statusu z SSI",
      "Certyfikowani nurkowie, którzy chcą odświeżyć swoją wiedzę i ćwiczenia nurkowe"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Scuba Skills Update - Definicja",
      "page": 60,
      "quote": "Program przeznaczony jest dla certyfikowanych nurków, którzy chcą odświeżyć wiedzę i umiejętności po okresie braku aktywności."
    }
  },
  {
    "question": "Kto może nadzorować wszystkie Nurkowania szkoleniowe na wodach otwartych podczas programu Open Water Diver?",
    "options": [
      "Aktywny status Open Water Instructor (Open Water Instructor)",
      "Open Water Instructor (Open Water Instructor) w dowolnym statusie",
      "Aktywny status Assistant Instructor",
      "Każdy certyfikowany asystent"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Prowadzenie programu",
      "page": 53,
      "quote": "Program może prowadzić i certyfikować wyłącznie aktywny status SSI Open Water Instructor (lub wyższy)."
    }
  },
  {
    "question": "Open Water Instructor (Open Water Instructor) może:",
    "options": [
      "Nauczanie programu Dive Guide",
      "Samodzielne nauczanie wszystkich programów Poziomu Podstawowego",
      "Wszystkie odpowiedzi są prawidłowe",
      "Kwalifikacje do nauczania dowolnego programu Specialty"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Open Water Instructor - Uprawnienia",
      "page": 131,
      "quote": "Może samodzielnie prowadzić i certyfikować wszystkie programy poziomu podstawowego (Try Scuba, Scuba Diver, Open Water Diver)."
    }
  },
  {
    "question": "Której metody certyfikacji można użyć do uzyskania certyfikatu Specialty Instructor?",
    "options": [
      "Wszystkie odpowiedzi są prawidłowe",
      "Seminarium dla instruktorów Specialty",
      "Współnauczanie",
      "Aplikacja weryfikująca (Direct Application)"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Metody certyfikacji Specialty Instructor",
      "page": 132,
      "quote": "Dostępne metody to: udział w seminarium, metoda współnauczania (co-teaching) lub bezpośrednia aplikacja weryfikująca."
    }
  },
  {
    "question": "Kto może prowadzić zajęcia w ramach programu Scuba Explorer?",
    "options": [
      "A SSI Explorer Professional",
      "Divemaster SSI z certyfikatem instruktora Scuba Explorer Instructor.",
      "aktywny status Scuba Explorer Instructor",
      "Kandydat na stanowisko Assistant Instructor"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "SSI Explorers",
      "page": 154,
      "quote": "Instruktor programu Explorer posiadający aktywny status i uprawnienia do danej kategorii może prowadzić program SSI Explorers."
    }
  },
  {
    "question": "Wymagania wstępne dla kursantów Scuba Explorer obejmują:",
    "options": [
      "Przepłynięcie 8 metrów bez pomocy do pływania lub wyporności, wiek co najmniej 8 lat.",
      "Przepłynięcie 12 metrów bez pomocy do pływania i asekuracji, wiek co najmniej 8 lat.",
      "Przepłynąć 8 metrów bez pomocy do pływania lub wyporności, mieć co najmniej 6 lat",
      "Przepłynięcie 12 metrów bez pomocy do pływania i asekuracji, wiek co najmniej 6 lat."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "SSI Explorers",
      "page": 154,
      "quote": "Przed rozpoczęciem jakichkolwiek zajęć w wodzie: Przepłynąć 12m bez jakichkolwiek pomocy pływackich. Scuba Explorer | Minimalny wiek | 8 lat."
    }
  },
  {
    "question": "Assistant Instructor musi ukończyć _________, aby zostać Open Water Instructor (Open Water Instructor).",
    "options": [
      "Kurs instruktorski (Instructor Training Course)",
      "Ocena Instructor Evaluation",
      "Wymagania dotyczące utrzymania aktywnego statusu",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Droga rozwoju instruktorskiego",
      "page": 129,
      "quote": "Kandydat musi ukończyć pełny kurs ITC, zaliczyć ocenę Instructor Evaluation (IE) oraz opłacić status aktywny na dany rok."
    }
  },
  {
    "question": "Jaki jest maksymalny limit głębokości dla certyfikowanych Scuba Diverów?",
    "options": [
      "18 metrów",
      "12 metrów",
      "10 metrów",
      "21 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Scuba Diver - Limity głębokości",
      "page": 50,
      "quote": "Certyfikowani nurkowie Scuba Diver mogą nurkować do głębokości maksymalnie 12 metrów pod nadzorem profesjonalisty."
    }
  },
  {
    "question": "Dowód: Ile zalogowanych nurkowań jest wymaganych dla Night & Limited Visibility Specialty Instructor Seminar?",
    "options": [
      "Brak",
      "10",
      "20",
      "5"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Tabela wymagań dla Specialty Instructor",
      "page": 132,
      "quote": "W przypadku udziału w oficjalnym seminarium instruktorskim (Seminar), wymagane zalogowane nurkowania to: Brak."
    }
  },
  {
    "question": "Czy program Perfect Buoyancy można połączyć z programem Open Water Diver?",
    "options": [
      "Tak, po ukończeniu nurkowań basenowych",
      "Nie",
      "Tak, ale certyfikat PB wydaje się dopiero po certyfikacji OWD",
      "Tak, pod warunkiem zgody biura krajowego"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Łączenie programów szkoleniowych",
      "page": 58,
      "quote": "Program Perfect Buoyancy można łączyć ze szkoleniem OWD, jednak certyfikacja PB następuje po wydaniu certyfikatu OWD."
    }
  },
  {
    "question": "Czy program SSI Open Water Diver jest certyfikowany przez ISO?",
    "options": [
      "Nie, tylko przez RSTC",
      "Tak, spełnia wymogi normy ISO 24801-2",
      "Tak, ale tylko w Europie",
      "Nie"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver (ISO 24801-2)",
      "page": 53,
      "quote": "Program SSI Open Water Diver jest w pełni certyfikowany jako zgodny z międzynarodową normą ISO 24801-2."
    }
  },
  {
    "question": "Czy program Perfect Buoyancy może być w całości prowadzony w otwartym środowisku wodnym?",
    "options": [
      "Nie, wymaga co najmniej 1 sesji basenowej",
      "Tak",
      "Nie, musi być w 100% na basenie",
      "Tak, ale tylko dla dorosłych"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Specjalizacje basenowe/w wodach ograniczonych",
      "section": "Perfect Buoyancy - Prowadzenie programu",
      "page": 75,
      "quote": "Wszystkie sesje w wodzie mogą być przeprowadzone w wodach ograniczonych lub w wodach otwartych."
    }
  },
  {
    "question": "W jaki sposób Assistant Instructor może zdobyć certyfikat Ecology Instructor?",
    "options": [
      "Seminarium dla Instruktorów Specialty lub Współnauczanie",
      "Najpierw muszą zostać Open Water Instructor.",
      "Tylko Seminarium dla Instruktorów Specialty",
      "Seminarium dla Instruktorów Specialty, współnauczanie lub bezpośrednia aplikacja weryfikacyjna"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Ecology Instructor - Certyfikacja",
      "page": 132,
      "quote": "Dla specjalizacji ekologicznych (nie-nurkowych) asystent instruktora może złożyć wniosek weryfikacyjny (Application)."
    }
  },
  {
    "question": "Ile nurkowań szkoleniowych na wodach otwartych ma program Open Water Diver, zgodnie z podręcznikiem Instruktora i standardami szkoleniowymi?",
    "options": [
      "Trzy",
      "Dwa",
      "Pięć",
      "Cztery"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Wymagania w wodzie",
      "page": 53,
      "quote": "Wymagane jest ukończenie co najmniej czterech (4) nurkowań szkoleniowych na wodach otwartych."
    }
  },
  {
    "question": "Nurkowania Szkoleniowe w Wodach otwartych 1 i 2 z programu Open Water Diver mogą zostać ukończone:",
    "options": [
      "Tylko na otwartych wodach",
      "W wodzie ograniczonej o wystarczającej głębokości",
      "W dowolnym środowisku o wystarczającej głębokości",
      "W krytych obiektach do nurkowania (indoor) spełniających kryteria"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Szkolenie w wodzie",
      "page": 53,
      "quote": "Nurkowania 1 i 2 na wodach otwartych mogą zostać zrealizowane w zatwierdzonym krytym obiekcie do nurkowania (indoor)."
    }
  },
  {
    "question": "Kto może prowadzić Seminarium dla Instruktorów Specialty?",
    "options": [
      "Dowolny Assistant Instructor Trainer w statusie aktywnym",
      "Aktywny status Assistant Instructor Trainer certyfikowany jako instruktor w odpowiedniej specjalności.",
      "Dowolny Instruktor Specialty o statusie aktywnym",
      "Assistant Instructor certyfikowany jako instruktor w odpowiedniej specjalności"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Kto może prowadzić Seminaria Specialty?",
      "page": 133,
      "quote": "Seminarium może prowadzić aktywny Assistant Instructor Trainer (lub wyższy) certyfikowany jako instruktor danej specjalności."
    }
  },
  {
    "question": "Program SSI Explorers jest przeznaczony dla dzieci:",
    "options": [
      "Starszych niż 10 lat",
      "Młodszych niż 10 lat",
      "Młodszych niż 6 lat",
      "W wieku od 6 do 11 lat (maksymalnie 12 lat w zależności od kraju)"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "SSI Explorers",
      "page": 154,
      "quote": "Program SSI Explorers jest skierowany do dzieci w wieku od 6 do 11 lat (maksymalnie do 12 lat na podstawie lokalnych przepisów i regulacji)."
    }
  },
  {
    "question": "Który z poniższych programów jest programem specjalizacji Explorer?",
    "options": [
      "Full Face Mask Explorer",
      "Wreck Exterior Explorer",
      "Perfect Buoyancy Explorer",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "SSI Explorers",
      "page": 154,
      "quote": "Uczestnicy, którzy ukończyli program Scuba Explorer, mogą ukończyć następujące specjalizacje: Enriched Air Nitrox Explorer, Perfect Buoyancy Explorer, Search & Recovery Explorer"
    }
  },
  {
    "question": "Uczestnicy Try Scuba ukończą:",
    "options": [
      "Ustny egzamin końcowy i nurkowanie w basenie/ograniczonym akwenie.",
      "Doświadczenie w nurkowaniu w basenie/ograniczonym akwenie i jedno nurkowanie na wodach otwartych.",
      "Doświadczenie w nurkowaniu w basenie/ograniczonym akwenie",
      "Obowiązkowa ocena umiejętności na basenie/ograniczonym akwenie"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba - Definicja i zakres",
      "page": 46,
      "quote": "Try Scuba to krótkie doświadczenie nurkowe w basenie/wodach ograniczonych, bez formalnej oceny umiejętności."
    }
  },
  {
    "question": "Jakie są wymagania dotyczące ukończenia programu specjalizacji Perfect Buoyancy?",
    "options": [
      "Ukończ wszystkie zajęcia teoretyczne i oceny z podręcznika instruktora Perfect Buoyancy.",
      "Egzamin końcowy programu",
      "Ukończenie co najmniej dwóch (2) szkoleń w wodzie z podręcznika instruktora Perfect Buoyancy.",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Specjalizacje basenowe/w wodach ograniczonych",
      "section": "Perfect Buoyancy - Wymagania ukończenia",
      "page": 75,
      "quote": "Wymagane jest ukończenie teorii, zdanie egzaminu (jeśli występuje) oraz zaliczenie dwóch sesji w wodzie."
    }
  },
  {
    "question": "Ilu kursantów może być nadzorowanych przez certyfikowanego asystenta podczas wycieczki podwodnej w programie Open Water Diver?",
    "options": [
      "Dwóch",
      "Jeden",
      "Certyfikowani asystenci nie mogą sprawować nadzoru nad kursantami",
      "Trzech"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Korzystanie z pomocy certyfikowanych asystentów",
      "page": 34,
      "quote": "Aktywny certyfikowany asystent może prowadzić maksymalnie dwóch (2) kursantów na wycieczkę podwodną podczas nurkowań OWD."
    }
  },
  {
    "question": "Jaki jest minimalny wiek dla programu Try Scuba?",
    "options": [
      "6 lat",
      "10 lat",
      "12 lat",
      "8 lat"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba - Wymagania wstępne",
      "page": 46,
      "quote": "Minimalny wiek uczestnika programu Try Scuba to 8 lat."
    }
  },
  {
    "question": "Ile sesji teoretycznych ma program Open Water Diver, zgodnie z podręcznikiem Instruktora i standardami szkolenia?",
    "options": [
      "Trzy",
      "Pięć",
      "Siedem",
      "Sześć"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Zajęcia teoretyczne",
      "page": 53,
      "quote": "Program Open Water Diver obejmuje sześć (6) sesji akademickich (rozdziałów teorii)."
    }
  },
  {
    "question": "Łączny czas denny dla nurkowań szkoleniowych na wodach otwartych w ramach programu Open Water Diver musi wynosić co najmniej:",
    "options": [
      "60 minut",
      "80 minut",
      "16-32 minuty",
      "90 minut"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Czas szkolenia w wodzie",
      "page": 53,
      "quote": "Minimalny łączny czas denny dla wszystkich nurkowań szkoleniowych na wodach otwartych wynosi 80 minut."
    }
  },
  {
    "question": "Kursanci kończący program Scuba Diver muszą ukończyć:",
    "options": [
      "Zajęcia teoretyczne 1-6, Zajęcia w Basen/Wody ograniczone Zajęcia 1-6, Nurkowanie Szkoleniowe w Wodach otwartych 1-2, Egzamin końcowy Scuba Diver.",
      "Zajęcia teoretyczne 1-3, Zajęcia w Basen/Wody ograniczone Zajęcia Otwartych 1-3, Nurkowanie Szkoleniowe w Wodach otwartych 1-2, Egzamin końcowy Scuba Diver.",
      "Zajęcia teoretyczne 1-3, Zajęcia w Basen/Wodach ograniczonych 1-6, Nurkowania Szkoleniowe w Wodach otwartych 1-4, Egzamin końcowy Scuba Diver.",
      "Zajęcia teoretyczne 1-3, Zajęcia w Basen/Wody ograniczone Zajęcia 1-3, Nurkowania 1-2 na wodach otwartych oraz egzamin końcowy."
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Scuba Diver - Wymagania ukończenia",
      "page": 50,
      "quote": "Należy ukończyć rozdziały teorii 1-3, sesje w wodzie ograniczonej 1-3, nurkowania na wodach otwartych 1-2 oraz egzamin końcowy Scuba Diver."
    }
  },
  {
    "question": "Jaka jest minimalna profesjonalna Certyfikacja, aby zostać Instruktorem Computer Diving?",
    "options": [
      "Open Water Instructor",
      "Divemaster",
      "Assistant Instructor",
      "Dive Guide"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagania dla Specialty Instructor",
      "page": 122,
      "quote": "Assistant Instructor może uzyskać uprawnienia instruktora specjalizacji Computer Diving."
    }
  },
  {
    "question": "Głównym Instruktorem w metodzie współnauczania musi być:",
    "options": [
      "Open Water Instructor (Instruktor Wód Otwartych) i Specialty Instructor (Instruktor Specjalizacji) dla odpowiedniego programu.",
      "Instruktor Specialty, który wydał co najmniej pięć stosownych Certyfikacji",
      "Specialty Instructor dla odpowiedniego programu",
      "Open Water Instructor (Open Water Instructor) z odpowiednią certyfikacją na poziomie kursanta"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Metoda współnauczania (Co-Teaching)",
      "page": 133,
      "quote": "Głównym instruktorem odpowiedzialnym za program musi być certyfikowany Specialty Instructor dla odpowiedniego programu."
    }
  },
  {
    "question": "Które z poniższych są częścią programu SSI Explorer?",
    "options": [
      "Snorkel Explorer",
      "Scuba Explorer",
      "Wszystkie odpowiedzi są prawidłowe",
      "Freediving Explorer"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "SSI Explorers - Moduły",
      "page": 47,
      "quote": "Snorkel Explorer, Mermaid Explorer, Freediving Explorer, Scuba Explorer"
    }
  },
  {
    "question": "13-letni kursanci Open Water Diver musi przebywać płycej niż ____ podczas Nurkowania Szkoleniowego w Wodach Otwartych 3 i 4?",
    "options": [
      "12 metrów",
      "5 metrów",
      "21 metrów",
      "18 metrów"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Limity głębokości dla Juniorów",
      "page": 16,
      "quote": "Kursanci w wieku 12-14 lat podczas nurkowań szkoleniowych 3 i 4 nie mogą przekroczyć głębokości 12 metrów."
    }
  },
  {
    "question": "Program specjalizacji Perfect Buoyancy to:",
    "options": [
      "Specjalizacje na Wodach Otwartych",
      "Specjalizacje sprzętowe",
      "Specjalizacje wiedzy o nurkowaniu",
      "Specjalizacje basenowe / w ograniczonym akwenie"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Specjalizacje basenowe/w wodach ograniczonych",
      "section": "Perfect Buoyancy - Kategoria",
      "page": 75,
      "quote": "Perfect Buoyancy jest klasyfikowany jako specjalizacja basenowa / w wodach ograniczonych."
    }
  },
  {
    "question": "Przed wydaniem Certyfikacji Perfect Buoyancy nurek musi posiadać co najmniej stopień:",
    "options": [
      "Scuba Diver",
      "Open Water Diver lub Referral Diver",
      "Referral Diver",
      "Basic Diver"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Specjalizacje basenowe/w wodach ograniczonych",
      "section": "Perfect Buoyancy - Wymagania wstępne",
      "page": 46,
      "quote": "Wymagania wstępne dla kursanta obejmują posiadanie certyfikatu Open Water Diver lub statusu Referral Diver."
    }
  },
  {
    "question": "Jaka jest maksymalna liczba kursantów kursu Open Water Diver, których instruktor może szkolić w basenie/wodach ograniczonych?",
    "options": [
      "Nie ma ograniczeń co do liczby kursantów w basenie.",
      "4",
      "12",
      "8 na jednego instruktora (lub do 10:2 z asystentami)"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "V. Współczynnik ilościowy w wodzie",
      "page": 40,
      "quote": "Maksymalny współczynnik ilościowy instruktor-kursant na basenie/wodach ograniczonych wynosi 12:1."
    }
  },
  {
    "question": "Jakie jest minimalne wymagane aktywne uprawnienie instruktorskie, aby prowadzić ćwiczenia awaryjnego wynurzania podczas szkolenia w wodzie?",
    "options": [
      "Assistant Instructor",
      "Open Water Instructor",
      "Certyfikowany asystent",
      "Divemaster"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Nadzór nad ćwiczeniami awaryjnymi",
      "page": 35,
      "quote": "Tylko instruktor o aktywnym statusie Open Water Instructor (lub wyższym) może bezpośrednio prowadzić te ćwiczenia."
    }
  },
  {
    "question": "Nurkowania szkoleniowe na wodach otwartych dla kursantów Open Water Diver w wieku 10-11 lat musi odbywać się na głębokości mniejszej niż:",
    "options": [
      "15 metrów",
      "18 metrów",
      "12 metrów",
      "5 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Junior OWD - Limity głębokości",
      "page": 65,
      "quote": "Maksymalny limit głębokości wody otwartej dla 10- i 11-latków | 12 metrów"
    }
  },
  {
    "question": "Jaka jest prawidłowa kolejność przeprowadzania nurkowań szkoleniowych na wodach otwartych w programie Open Water Diver?",
    "options": [
      "Nurkowanie szkoleniowe na Wodach Otwartych nr 1 może zostać przeprowadzone przed ukończeniem części teoretycznej oraz zajęć w basenie.",
      "Nurkowanie szkoleniowe na Wodach Otwartych nr 2 może zostać przeprowadzone przed ukończeniem sesji teoretycznych 1-3.",
      "Nurkowania 1 i 2 na Wodach Otwartych mogą zostać przeprowadzone po ukończeniu odpowiadających im sesji teoretycznych oraz zajęć basenowych.",
      "Wszystkie nurkowania szkoleniowe na Wodach Otwartych mogą zostać przeprowadzone przed ukończeniem sesji teoretycznych."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Szkolenie w wodzie",
      "page": 8,
      "quote": "Nurkowania szkoleniowe na wodach otwartych mogą być realizowane wyłącznie po ukończeniu odpowiadających im sesji teoretycznych i basenowych."
    }
  },
  {
    "question": "Nurkowie, którzy ukończyli program Scuba Diver, są certyfikowani do nurkowania:",
    "options": [
      "Do 18 metrów głębokości pod nadzorem profesjonalisty nurkowego.",
      "Do 12 metrów głębokości pod bezpośrednim nadzorem profesjonalisty nurkowego.",
      "Do 15 metrów głębokości pod nadzorem certyfikowanego asystenta",
      "Do 18 metrów głębokości z wykwalifikowanym partnerem nurkowym"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Scuba Diver - Uprawnienia",
      "page": 50,
      "quote": "Są uprawnieni do nurkowania do głębokości 12 metrów pod bezpośrednim nadzorem profesjonalisty nurkowego."
    }
  },
  {
    "question": "Program Referral Diver pozwala kursantowi na:",
    "options": [
      "Ukończenie zajęć teoretycznych w jednym centrum szkoleniowym, a szkolenia w wodzie w innym.",
      "Ukończenie całego szkolenia w jednym centrum szkoleniowym, a otrzymanie karty z innego.",
      "Ukończenie zajęć teoretycznych i sesji basenowych w jednym Centrum Szkoleniowym oraz nurkowań w wodach otwartych w innym.",
      "Ukończenie wszystkich zajęć teoretycznych w jednej organizacji, a nurkowań w wodach otwartych w innej."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Referral Diver - Definicja",
      "page": 53,
      "quote": "Kursant, który ukończy wszystkie zajęcia teoretyczne oraz zajęcia basenowe/w ograniczonym akwenie wymagane w ramach programu Open Water Diver , może otrzymać cyfrową kartę Referral Diver . Oznacza to, że może wykonać szkoleniowe nurkowania w wodach otwartych w późniejszym terminie i/lub z innym ośrodkiem szkoleniowym SSI."
    }
  },
  {
    "question": "Aby awansować z stopnia Referral Diver na Open Water Diver, Kursant musi ukończyć:",
    "options": [
      "Nurkowania Szkoleniowe w Wodach otwartych 1-4 z podręcznika instruktora Open Water Diver oraz Egzamin końcowy",
      "Tylko Egzamin końcowy Open Water Diver",
      "Zajęcia 4-6 w basenie/wodach ograniczonych z podręcznika OWD",
      "Tylko nurkowania 3 i 4 na wodach otwartych"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Referral Diver - Upgrade do OWD",
      "page": 55,
      "quote": "Aby awansować na Open Water Diver , Referral Diver musi: Ukończenie wszystkich czterech (4) nurkowań szkoleniowych na wodach otwartych"
    }
  },
  {
    "question": "Aby zdobyć kartę Indoor Diver, Kursant musi ukończyć:",
    "options": [
      "Co najmniej 4 nurkowania szkoleniowe 'Indoor' (w krytym obiekcie) spełniające cele nurkowań 1-4 OWD, teorię i egzamin.",
      "Wszystkie sesje szkoleniowe na basenie/wodach ograniczonych z podręcznika instruktora Open Water Diver.",
      "Wszystkie odpowiedzi są prawidłowe",
      "Wszystkie sesje szkoleniowe i egzamin końcowy z programu Open Water Diver bez nurkowań."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Indoor Diver - Wymagania",
      "page": 54,
      "quote": "Ukończyć co najmniej cztery (4) nurkowania szkoleniowe w środowisku indoor , w sprzęcie SCUBA oraz wszystkie oceny umiejętności wyszczególnione w Podręczniku Instruktora dla kursu Open Water Diver ."
    }
  },
  {
    "question": "Nurek z certyfikatem Enriched Air Nitrox 32 posiada kwalifikacje do:",
    "options": [
      "Używania nitroksu do głębokości 32 metrów.",
      "Korzystania z mieszanin nitroksowych o zawartości tlenu do 32% bez nadzoru.",
      "Analizowania gazu przez Centrum Szkoleniowe, ale nie przez siebie.",
      "Ukończenia aktualizacji online dla Enriched Air Nitrox 40 bez zajęć praktycznych"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Specjalizacje wiedzy o nurkowaniu",
      "section": "Enriched Air Nitrox (EAN) 32",
      "page": 69,
      "quote": "Maksymalna zawartość tlenu w mieszaninie wynosi 32%. Ograniczone do nurkowań bezdekompresyjnych."
    }
  },
  {
    "question": "Aby wykonać upgrade z Enriched Air Nitrox 32 do Enriched Air Nitrox 40, kursant musi ukończyć:",
    "options": [
      "Pozostałą sesję akademicką i sesję zajęć praktycznych (warsztat analizy gazu)",
      "Zajęcia praktyczne i co najmniej jedno nurkowanie szkoleniowe w wodzie.",
      "Wszystkie sesje akademickie i powtórzenie Egzaminu końcowego",
      "Zajęcia praktyczne i co najmniej 2 nurkowania w basenie/wodach ograniczonych"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Specjalizacje wiedzy o nurkowaniu",
      "section": "Enriched Air Nitrox 40 - Wymagania",
      "page": 57,
      "quote": "Zajęcia praktyczne z Enriched Air Nitrox obejmujące analizę mieszaniny oddechowej muszą zostać ukończone przed ukończeniem dodatkowego szkolenia teoretycznego w programie Enriched Air Nitrox 40."
    }
  },
  {
    "question": "Kiedy Kursanci mogą używać nitroxu podczas programu Open Water Diver?",
    "options": [
      "Po uzyskaniu certyfikatu Enriched Air Nitrox 32",
      "Po ukończeniu co najmniej 2 sesji szkoleniowych na basenie z użyciem nitroksu",
      "Po ukończeniu sesji akademickich i zajęć praktycznych w ramach programu specjalizacji Enriched Air Nitrox",
      "Kursanci Open Water Diver nie mogą używać nitroksu podczas szkolenia."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Łączenie Nitroxu z OWD",
      "page": 58,
      "quote": "Kursanci rekrutujący się z innych programów entry-level mogą ukończyć teorię i warsztat z analizy tlenu z programu specjalizacji Enriched Air Nitrox i używać nitroksu w limitach ich certyﬁkacji"
    }
  },
  {
    "question": "Nurkowie z certyfikatem Diver Stress & Rescue posiadają kwalifikacje do:",
    "options": [
      "Nadzoru nad personelem ratunkowym podczas akcji ratunkowej w wodzie",
      "Zarządzania typowymi sytuacjami awaryjnymi napotykanymi przez nurków rekreacyjnych",
      "Zarządzania nurkami rekreacyjnymi w typowych sytuacjach awaryjnych",
      "Radzenia sobie z typowymi sytuacjami awaryjnymi napotykanymi przez nurków scuba i nurków Extended Range."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Specjalizacje na Wodach Otwartych",
      "section": "Diver Stress & Rescue - Uprawnienia",
      "page": 83,
      "quote": "Celem programu specjalizacji SSI Diver Stress & Rescue jest dostarczenie kursantom wiedzy i umiejętności niezbędnych do rozpoznawania stresu, zapobiegania wypadkom nurkowym oraz właściwego zarządzania sytuacjami awaryjnymi."
    }
  },
  {
    "question": "Jaki jest maksymalny limit głębokości dla ćwiczeń awaryjnego wynurzania prowadzonych podczas programu Diver Stress & Rescue?",
    "options": [
      "10 metrów",
      "12 metrów",
      "9 metrów",
      "5 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Specjalizacje na Wodach Otwartych",
      "section": "Diver Stress & Rescue - Ćwiczenia w wodzie",
      "page": 46,
      "quote": "Maksymalny limit głębokości basenu/akwenu ograniczonego | 5 metrów. Maksymalna głębokość wód otwartych | 30 metrów. Maksymalna głębokość dla ćwiczeń awaryjnego wynurzenia | 9 metrów."
    }
  },
  {
    "question": "Program Diver Stress & Rescue obejmuje sesje akademickie oraz:",
    "options": [
      "Co najmniej jedną sesję szkoleniową na basenie/wodach ograniczonych oraz 2 nurkowania szkoleniowe na wodach otwartych.",
      "3 sesje szkoleniowe na basenie/wodach ograniczonych oraz 3 nurkowania szkoleniowe na wodach otwartych.",
      "Co najmniej 3 nurkowania szkoleniowe na wodach otwartych.",
      "Dowolną kombinację szkoleń w wodzie, pod warunkiem ukończenia wszystkich scenariuszy ratunkowych."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Specjalizacje na Wodach Otwartych",
      "section": "Diver Stress & Rescue - Wymagania w wodzie",
      "page": 50,
      "quote": "Zalecane godziny ukończenia | 10-15. 1 sesja w basenie/akwenie ograniczonym. Co najmniej 2 nurkowania w wodach otwartych."
    }
  },
  {
    "question": "Ile certyfikacji spoza SSI można zaliczyć na poczet karty uznania Master Diver?",
    "options": [
      "Dwa",
      "Trzy, jeśli Centrum Szkoleniowe SSI je zatwierdzi",
      "Jedną",
      "Specjalizacje spoza SSI nie mogą zostać zaliczone na poczet karty Master Diver."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Certyfikaty równoważne i karty uznania",
      "page": 18,
      "quote": "Maksymalnie dwie (2) specjalizacje rekreacyjne z innej uznanej agencji szkoleniowej mogą być zaliczone"
    }
  },
  {
    "question": "Dive Guide'owie chcący zdobyć Kartę Uznania Marine Guide muszą:",
    "options": [
      "Najpierw ukończyć program Divemaster",
      "Ukończyć jak najwięcej Specjalizacji ekologicznych",
      "Wybierać najkrótsze specjalizacje aby uzyskać kartę szybciej",
      "Ukończyć program Marine Ecology, Blue Oceans, oraz dwa (2) dodatkowe programy specjalizacji SSI Ecology"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Karty uznania SSI",
      "section": "Marine Guide - Wymagania",
      "page": 83,
      "quote": "Dive Guide o aktywnym statusie, który ukończy cztery (4) określone programy specjalizacji ekologicznych oraz program Blue Oceans, może złożyć wniosek o wydanie karty uznaniowej Marine Guide."
    }
  },
  {
    "question": "Program Dive Guide jest:",
    "options": [
      "Wykorzystuje te same materiały szkoleniowe, co program Divemaster.",
      "Musi być prowadzony przez Assistant Instructor Trainer lub wyżej",
      "Jest pierwszym programem Profesjonalnym SSI",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Dive Guide - Wprowadzenie",
      "page": 119,
      "quote": "Program Dive Guide to pierwszy profesjonalny poziom szkolenia SSI."
    }
  },
  {
    "question": "Przed uzyskaniem karty certyfikacyjnej kursanci Dive Guide muszą:",
    "options": [
      "Ukończyć egzamin końcowy Science of Diving.",
      "Zalogować co najmniej 50 nurkowań na wodach otwartych trwających łącznie co najmniej 25 godzin.",
      "Zalogować co najmniej 50 nurkowań na wodach otwartych trwających łącznie co najmniej 32 godziny",
      "Zalogować co najmniej 40 nurkowań na wodach otwartych trwających łącznie co najmniej 32 godziny."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Dive Guide - Wymagania certyfikacji",
      "page": 119,
      "quote": "Zalogowane 50 nurkowań na wodach otwartych trwających łącznie co najmniej 25 godzin przed certyﬁkacją."
    }
  },
  {
    "question": "Dive Guide kończący aktualizację do stopnia Divemaster musi:",
    "options": [
      "Wszystkie odpowiedzi są prawidłowe",
      "Mieć ukończone 18 lat",
      "Spełnić wszystkie wymagania dotyczące utrzymania aktywnego statusu.",
      "Ukończyć egzamin końcowy Science of Diving."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Divemaster - Wymagania i Upgrade",
      "page": 3,
      "quote": "Science of Diving jest obowiązkowym programem specjalizacji dla certyﬁkacji na poziomie Divemaster."
    }
  },
  {
    "question": "Jaka jest największa różnica w uprawnieniach między certyfikatami Dive Guide i Divemaster?",
    "options": [
      "Divemaster kończy dodatkowe szkolenia w wodzie",
      "Divemaster posiada automatyczne uprawnienia Certyfikowanego Asystenta",
      "Dive Guide może pełnić rolę certyfikowanego asystenta bez ograniczeń",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Divemaster - Uprawnienia",
      "page": 125,
      "quote": "Aktywny Divemaster może pełnić funkcję certyﬁkowanego asystenta podczas wszystkich rekreacyjnych programów szkoleniowych SSI w wodzie."
    }
  },
  {
    "question": "Kandydaci na Divemastera muszą posiadać przed certyfikacją:",
    "options": [
      "Mieć ukończone 20 lat",
      "Posiadać 70 zalogowanych nurkowań trwających co najmniej 25 godzin.",
      "Posiadać zalogowane co najmniej 60 nurkowań w wodzie otwartej trwających łącznie 40 godzin lub więcej.",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Divemaster - Wymagania wstępne",
      "page": 125,
      "quote": "Zalogowane co najmniej 60 nurkowań na wodach otwartych trwających łącznie co najmniej 40 godzin przed certyﬁkacją."
    }
  },
  {
    "question": "Jaki jest minimalny wiek do ukończenia programu Advanced Open Water Diver?",
    "options": [
      "Minimalny wiek dla każdego nurkowania jest określony w standardach specyficznych dla danego programu (np. 10-12 lat)",
      "10 lat",
      "15 lat",
      "12 lat"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Advanced Open Water Diver - Wymagania",
      "page": 62,
      "quote": "Minimalny wiek uczestnika zależy od wymogów wiekowych poszczególnych specjalizacji wchodzących w skład programu."
    }
  },
  {
    "question": "Program Advanced Open Water Diver wymaga od kursanta ukończenia co najmniej:",
    "options": [
      "5 nurkowań z 3 różnych specjalizacji",
      "3 nurkowania z 3 różnych specjalizacji",
      "Ukończenia 4 programów specjalizacji oraz zalogowania 24 nurkowań",
      "5 nurkowań wymienionych w standardach Advanced Open Water Diver"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Advanced Open Water Diver - Certyfikacja",
      "page": 62,
      "quote": "Karta uznaniowa AOWD jest wydawana po ukończeniu czterech (4) programów specjalizacji i zalogowaniu 24 nurkowań."
    }
  },
  {
    "question": "Zgodnie ze standardami SSI, w basenie lub wodach ograniczonych czas trwania zajęć w wodzie podczas jednej sesji szkoleniowej nie może przekroczyć:",
    "options": [
      "120 minut",
      "Nie ma sztywnych limitów, zależy to od komfortu kursantów i temperatury wody.",
      "60 minut",
      "90 minut"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Czas trwania programu i ograniczenia czasowe",
      "page": 32,
      "quote": "Czas trwania sesji basenowych nie jest określony; instruktor decyduje w oparciu o komfort i bezpieczeństwo."
    }
  },
  {
    "question": "Kto może certyfikować nurka na specjalizację Science of Diving?",
    "options": [
      "Dowolny nurek posiadający stopień Master Diver.",
      "Aktywny Assistant Instructor (lub wyższy) certyfikowany jako Science of Diving Instructor.",
      "Wyłącznie aktywny Master Instructor.",
      "Tylko instruktor posiadający stopień Specialty Instructor z co najmniej 10 certyfikacjami."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Science of Diving - Kadra",
      "page": 128,
      "quote": "Program może prowadzić aktywny Assistant Instructor (lub wyższy) posiadający uprawnienia instruktorskie dla tej specjalności."
    }
  },
  {
    "question": "Podczas programu OWD, jakie jest maksymalne dopuszczalne nachylenie dna basenu/wód ograniczonych w strefie płytkiej wody przeznaczonej na ćwiczenia początkowe?",
    "options": [
      "Nie ma znaczenia, byle głębokość była odpowiednia.",
      "Dno musi być płaskie lub o łagodnym nachyleniu nieutrudniającym stania.",
      "Dopuszczalne jest pionowe urwisko o głębokości do 3 metrów.",
      "Maksymalnie 45 stopni nachylenia."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Miejsca szkoleń - Woda ograniczona",
      "page": 41,
      "quote": "Obszar płytkiej wody basenu musi być wystarczająco duży, aby pomieścić wszystkich kursantów, a dno musi być płaskie lub łagodnie nachylone tak, by ułatwiać wygodne stanie."
    }
  },
  {
    "question": "Jak długo zachowuje ważność cyfrowy formularz oświadczenia zdrowotnego (Medical Statement) podpisany przez lekarza?",
    "options": [
      "6 miesięcy",
      "2 lata",
      "1 rok",
      "3 lata"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Dokumentacja szkolenia i Formularze prywatności",
      "page": 12,
      "quote": "Cyfrowy/papierowy formularz oceny medycznej lekarza zachowuje ważność przez jeden (1) rok od daty podpisania przez lekarza"
    }
  },
  {
    "question": "Jaki jest minimalny wiek dziecka, aby uczestniczyć w specjalizacji basenowej Perfect Buoyancy?",
    "options": [
      "8 lat",
      "12 lat",
      "10 lat",
      "14 lat"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Specjalizacje basenowe/w wodach ograniczonych",
      "section": "Perfect Buoyancy - Wymagania wstępne",
      "page": 48,
      "quote": "Minimalny wiek | 10 lat."
    }
  },
  {
    "question": "Kto może prowadzić program specjalizacji Altitude Diving (Nurkowanie Górskie) w SSI?",
    "options": [
      "Dowolny certyfikowany asystent o aktywnym statusie",
      "Aktywny Specialty Instructor dla odpowiedniego programu specjalizacji.",
      "Tylko Master Instructor",
      "Tylko Open Water Instructor z 10 nurkowaniami górskimi"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Altitude Diving Instructor - Wymagania",
      "page": 132,
      "quote": "Program może prowadzić Specialty Instructor posiadający uprawnienia dla danego programu"
    }
  },
  {
    "question": "Na jakiej wysokości nad poziomem morza rozpoczyna się kwalifikowanie nurkowania jako nurkowanie górskie (Altitude Diving)?",
    "options": [
      "100 metrów",
      "500 metrów",
      "300 metrów",
      "1000 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Specjalizacje wiedzy o nurkowaniu",
      "section": "Altitude Diving - Zakres",
      "page": 65,
      "quote": "Nurkowanie górskie definiuje się jako nurkowanie na wysokości pomiędzy 300 a 3000 metrów nad poziomem morza."
    }
  },
  {
    "question": "Jaki jest maksymalny dopuszczalny ppO2 (ciśnienie cząstkowe tlenu) w fazie dennej podczas szkolenia rekreacyjnego SSI?",
    "options": [
      "1.6 bara",
      "1.2 bara",
      "1.4 bara",
      "1.0 bar"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Specjalizacje wiedzy o nurkowaniu",
      "section": "Enriched Air Nitrox - Limity",
      "page": 40,
      "quote": "Nie przekraczać maksymalnego ppO2 wynoszącego 1,4 bara podczas nurkowania rekreacyjnego w fazie dennej"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DB;
}
