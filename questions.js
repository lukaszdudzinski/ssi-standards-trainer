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
    "answer": 0,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "VI. Współczynnik ilościowy w wodzie",
      "page": 54,
      "quote": "Liczba ta może wzrosnąć do 6:2, jeżeli instruktor korzysta z pomocy jednego (1) certyﬁkowanego asystenta."
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
      "page": 59,
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
      "page": 60,
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
      "page": 51,
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
      "page": 78,
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
      "page": 122,
      "quote": "Certyfikowany asystent o aktywnym statusie może nadzorować powierzchniowe ćwiczenia pod pośrednim nadzorem instruktora."
    }
  },
  {
    "question": "Co dzieje się z Training Record (Dokumentacją szkolenia) przed uzyskaniem przez Kandydata certyfikatu Specialty Instructor?",
    "options": [
      "Przesłane to MySSI",
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
      "page": 54,
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
      "page": 53,
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
      "page": 53,
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
      "page": 65,
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
      "section": "Open Water Diver - Minimalny nadzór",
      "page": 54,
      "quote": "Open Water Instructor z aktywnym statusem musi bezpośrednio nadzorować wszystkie nurkowania szkoleniowe na Wodach Otwartych."
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
      "page": 49,
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
      "section": "Specialty Instruktor - Metody Certyfikacji",
      "page": 128,
      "quote": "a. Seminarium dla Instruktorów Specjalizacji. Minimalny Stopień Instruktora: Posiadający aktywny status Assistant Instructor Trainer, posiadający uprawnienia instruktorskie danej specjalizacji może prowadzić seminarium. Wymagania do ukończenia kursu: Ukończenie seminarium dla instruktorów specjalizacji zgodnie z podręcznikiem instruktorskim. Uwaga: W przypadku tej metody nie jest wymagany dowód zalogowanych nurkowań."
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
      "page": 55,
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
      "page": 54,
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
      "page": 162,
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
      "page": 58,
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
      "page": 63,
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
      "page": 51,
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
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Metoda współnauczania (Co-Teaching)",
      "page": 133,
      "quote": "Kandydat może prowadzić współnauczanie (co-teaching) konkretnego programu specjalizacji z osobą posiadającą aktywny status Instruktora Specjalizacji danej specjalizacji. Instruktor prowadzący co-teaching musi wystawić minimum pięć (5) certyfikatów danej specjalizacji, zanim będzie mógł prowadzić współnauczanie."
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
      "page": 154,
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
      "page": 75,
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
    "answer": 3,
    "reference": {
      "chapter": "Open Water Diver (ISO 24801-2)",
      "section": "VI. Współczynnik ilościowy w wodzie - Basen",
      "page": 53,
      "quote": "Współczynnik kursant-instruktor: 8:1. Współczynnik może wzrosnąć do 10:2 z jednym (1) certyfikowanym asystentem lub do 12:3 z dwoma (2) certyfikowanymi asystentami."
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
      "page": 40,
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
      "Wszelkie nurkowania szkoleniowe na Wodach Otwartych mogą zostać przeprowadzone przed ukończeniem sesji teoretycznych."
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
      "section": "Łączenie nitroxu z OWD",
      "page": 69,
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
      "page": 85,
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
      "chapter": "Prowadzenie programów SSI",
      "section": "Wymogi dotyczące zajęć w wodzie",
      "page": 41,
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
      "page": 117,
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
      "page": 84,
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
    "question": "Kandydacy na Divemastera muszą posiadać przed certyfikacją:",
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
      "page": 84,
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
      "Dno must być płaskie lub o łagodnym nachyleniu nieutrudniającym stania.",
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
      "page": 13,
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
  },
  {
    "question": "Aby zdobyć kartę Referral Diver, Kursant musi ukończyć:",
    "options": [
      "Egzamin końcowy Referral Diver",
      "Wszystkie zajęcia teoretyczne i sesje szkoleniowe w basenie/wodach ograniczonych z podręcznika instruktora programu Open Water Diver.",
      "Nurkowanie szkoleniowe na wodach otwartych Nurkowanie 1 z podręcznika instruktora Open Water Diver.",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver | Indoor Diver | Referral Diver",
      "page": 53,
      "quote": "Kursant, który ukończy wszystkie zajęcia teoretyczne oraz zajęcia basenowe/w ograniczonym akwenie wymagane w ramach programu Open Water Diver , może otrzymać cyfrową kartę Referral Diver."
    }
  },
  {
    "question": "Aby wykonać upgrade uprawnień z Indoor Diver do Open Water Diver, kursant musi ukończyć:",
    "options": [
      "Basen/wody ograniczone 4-6 zgodnie z podręcznikiem instruktora do programu Open Water Diver",
      "Wszystkie odpowiedzi są prawidłowe",
      "Dodatkowe nurkowania szkoleniowe na wodach otwartych spełniające cele nurkowań szkoleniowych na wodach otwartych 1-4 zgodnie z podręcznikiem instruktora do programu Open Water Diver.",
      "Egzamin końcowy programu Open Water Diver"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver | Indoor Diver | Referral Diver",
      "page": 55,
      "quote": "Aby awansować na Open Water Diver , Indoor Diver musi: ● Ukończenie dwóch (2) dodatkowych Nurkowań szkoleniowych na wodach otwartych na płetwonurka oraz ocena umiejętności opisanych w Nurkowaniach szkoleniowych na wodach otwartych 1-4 Podręcznika instruktora dla Open Water Diver w środowisku wód otwartych."
    }
  },
  {
    "question": "Aby ukończyć Experienced Diver Test, kursant musi:",
    "options": [
      "Mieć co najmniej 15 lat",
      "Wszystkie odpowiedzi są prawidłowe",
      "Dostarczyć podpisane oświadczenie opisujące jego wcześniejsze szkolenie i doświadczenie nurkowe.",
      "Przedstawić dowód wcześniejszego doświadczenia i szkolenia"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Experienced Diver Test",
      "page": 56,
      "quote": "● Minimalny wiek | 15 lat. ● Kursant musi przedstawić podpisane oświadczenie dotyczące wcześniejszego szkolenia i doświadczenia nurkowego. ● Kursant musi dostarczyć dowód swojego doświadczenia i poprzedniego szkolenia."
    }
  },
  {
    "question": "Kto może oceniać kursantów na Diver Stress & Rescue lub Dive Guide przy użyciu Experienced Diver Test?",
    "options": [
      "Specialty Instructor z odpowiednią certyfikacją instruktorską",
      "Wszystkie odpowiedzi są prawidłowe",
      "Dowolny Assistant Instructor",
      "Divemaster z odpowiednią certyfikacją instruktora."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Experienced Diver Test",
      "page": 56,
      "quote": "Jeśli Experienced Diver Test jest wykorzystywany do oceny kandydatów do programów Diver Stress and Rescue lub Dive Guide: ● Specialty Instructor z aktywnym statusem i właściwym certyﬁkatem instruktorskim musi bezpośrednio nadzorować wszystkie zajęcia teoretyczne i zajęcia w wodzie."
    }
  },
  {
    "question": "Kursant kończący Experienced Diver Test dla certyfikacji Open Water Diver musi:",
    "options": [
      "Ukończyć egzamin końcowy Open Water Diver.",
      "Wypełnić oceny sprawności kursanta w wodzie",
      "Ukończyć co najmniej 1 sesję szkoleniową w basenie/wodach ograniczonych oraz 2 nurkowania szkoleniowe na wodach otwartych, w tym wszystkie wymagane umiejętności z podręcznika instruktora (Open Water Diver).",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Experienced Diver Test",
      "page": 57,
      "quote": "● Zaliczyć egzamin końcowy programu. ● Ukończyć co najmniej jedne (1) zajęcia w basenie/ograniczonym akwenie oraz uzyskać pozytywne oceny umiejętności zgodnie z podręcznikiem instruktorskim do programu Open Water Diver . ● Ukończyć ocenę sprawności wodnej Kursanta opisaną w Ogólnych Standardach Szkolenia SSI. ● Wykonać co najmniej dwa (2) nurkowania szkoleniowe na Wodach Otwartych zgodnie z podręcznikiem instruktorskim do programu Open Water Diver . ● Ukończyć wszystkie wymagane ćwiczenia z Nurkowań szkoleniowych na wodach otwartych 1-4, zgodnie z podręcznikiem instruktora dla Open Water Diver."
    }
  },
  {
    "question": "Jak opisano w Ogólnych Standardach Programów Specjalizacji:",
    "options": [
      "W przypadku łączenia 2 programów specjalizacji wymagane są co najmniej 3 nurkowania szkoleniowe w wodach otwartych.",
      "Jeśli inny program specjalizacji jest połączony z Deep Diving, wymagane są co najmniej 2 sesje basenowe/w wodach ograniczonych.",
      "Jeśli programy specjalizacji są łączone, kursant musi posiadać co najmniej certyfikat Scuba Diver przed uzyskaniem certyfikatu specjalizacji.",
      "W przypadku łączenia 3 programów specjalizacji wymagane jest co najmniej 5 nurkowań szkoleniowych w wodach otwartych."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Ogólne Standardy Specjalizacji",
      "page": 58,
      "quote": "● Jeżeli dwa (2) programy specjalizacji są prowadzone jednocześnie, należy przeprowadzić co najmniej trzy (3) nurkowania szkoleniowe na Wodach Otwartych."
    }
  },
  {
    "question": "Jak opisano w Ogólnych Standardach Programów Specjalizacji:",
    "options": [
      "Profesjonalista SSI może zaliczyć 2 nurkowania doświadczeniowe (Experience) do odpowiedniej specjalizacji, jeśli kursant przedstawi dowód odbycia nurkowania.",
      "Nurkowania doświadczeniowe (Experience) liczą się do odpowiedniej specjalizacji tylko wtedy, gdy zostały ukończone w Centrum Szkoleniowym SSI.",
      "Kursant może zaliczyć 1 nurkowanie doświadczeniowe (Experience) na poczet odpowiedniej specjalizacji, jeśli nurkowanie zostało zweryfikowane przez jego partnera nurkowego.",
      "Profesjonalista SSI może zaliczyć 1 nurkowanie doświadczeniowe (Experience) na poczet odpowiedniej specjalizacji, jeśli kursant przedstawi dowód odbycia nurkowania."
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Ogólne Standardy Specjalizacji",
      "page": 59,
      "quote": "● Jeżeli kursant posiada potwierdzone doświadczenie w zakresie odpowiadającym programowi specjalizacji SSI, Profesjonalista SSI może podjąć decyzję o zaliczeniu jednego (1) nurkowania na poczet danego programu specjalizacji SSI."
    }
  },
  {
    "question": "Które z poniższych stwierdzeń dotyczących wymagań ukończenia kursu Enriched Air Nitrox jest prawdziwe?",
    "options": [
      "Kursanci Enriched Air Nitrox 32 ukończyli tylko część teoretyczną szkolenia.",
      "Kursanci Enriched Air Nitrox 40 ukończyli sesję zajęć praktycznych.",
      "Wszyscy kursanci Enriched Air Nitrox zdają egzamin końcowy programu.",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Specjalizacje wiedzy o nurkowaniu",
      "section": "Enriched Air Nitrox (EAN) 32 i 40 (ISO 11107)",
      "page": 70,
      "quote": "● Ukończyć Zajęcia Teoretyczne 1-3 tak, jak określono w podręczniku instruktorskim Enriched Air Nitrox. ● Zaliczyć egzamin końcowy programu. ... ● Ukończyć wszystkie Zajęcia Teoretyczne tak, jak określono w podręczniku instruktorskim Enriched Air Nitrox. ● Zaliczyć egzamin końcowy programu. ● Ukończyć zajęcia aplikacji praktycznej określone w podręczniku instruktorskim Enriched Air Nitrox."
    }
  },
  {
    "question": "Kursanci Diver Stress & Rescue muszą mieć:",
    "options": [
      "12 lat i fizyczną zdolność do ukończenia wymaganych ćwiczeń",
      "10 lat i fizyczną zdolność do ukończenia wymaganych ćwiczeń",
      "18 lat",
      "12 lat"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Specjalizacje na Wodach Otwartych",
      "section": "Diver Stress & Rescue",
      "page": 85,
      "quote": "● Minimalny wiek | 12 lat. ● Kursant powinien posiadać sprawność ﬁzyczną, pozwalającą na wykonanie wymaganych ćwiczeń."
    }
  },
  {
    "question": "Ilu kursantów może uczestniczyć w sesjach podwodnych programu Diver Stress & Rescue z dwoma 13-letnimi kursantami i dwoma certyfikowanymi asystentami?",
    "options": [
      "8",
      "10",
      "4",
      "6"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Specjalizacje na Wodach Otwartych",
      "section": "Diver Stress & Rescue",
      "page": 60,
      "quote": "Kursanci w wieku 12-14 lat: ● Współczynnik kursant-instruktor: 6:1."
    }
  },
  {
    "question": "Kursanci Dive Guide muszą:",
    "options": [
      "Mieć 18 lat",
      "Posiadać certyfikat SSI Diver Stress & Rescue lub równoważny.",
      "Mieć 50 zalogowanych nurkowań trwających co najmniej 25 godzin",
      "Posiadać certyfikaty Deep Diving, Navigation oraz Night Diving & Limited Visibility."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Certyfikacja Dive Guide'a | Divemaster ISO 24801-3",
      "section": "Certyfikacja Dive Guide'a | Divemaster ISO 24801-3",
      "page": 65,
      "quote": "Kandydat musi posiadać następujące certyﬁkaty SSI lub równoważne z uznanych organizacji nurkowych: ● Diver Stress & Rescue"
    }
  },
  {
    "question": "Divemasterzy mogą ubiegać się o certyfikat Specialty Instructor których specjalizacji?",
    "options": [
      "Navigation",
      "Boat Diving",
      "Science of Diving",
      "Marine Ecology"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Instruktor Specjalizacje ekologiczne",
      "page": 122,
      "quote": "● Marine Ecology"
    }
  },
  {
    "question": "Divemasterzy SSI o statusie aktywnym mogą:",
    "options": [
      "Zabrać 2 kursantów na nurkowanie wycieczkowe podczas programu Open Water Diver.",
      "Zakwalifikować się jako instruktor specjalizacji ekologicznych.",
      "Zapisać się na kurs instruktorski SSI Instructor Training Course",
      "Wszystkie odpowiedzi są prawidłowe"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Instruktor Specjalizacje ekologiczne",
      "page": 152,
      "quote": "Professionals o aktywnym statusie SSI mogą kwaliﬁkować się do nauczania programów Ecology Specialty."
    }
  },
  {
    "question": "Aby asystować przy programach specjalizacji nurkowych, Divemaster musi:",
    "options": [
      "Asystować przy co najmniej 2 programach specjalizacji pod bezpośrednim nadzorem instruktora specjalizacji",
      "Posiadać certyfikację na poziomie nurka dla odpowiedniego programu",
      "Być certyfikowanym instruktorem specjalizacji dla odpowiedniego programu.",
      "Musi posiadać dowód doświadczenia 5 nurkowań dla odpowiedniego programu."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Korzystanie z pomocy certyfikowanych asystentów",
      "page": 34,
      "quote": "● W przypadku programów specjalizacji certyﬁkowany asystent musi posiadać certyﬁkat na poziomie nurka dla danego programu."
    }
  },
  {
    "question": "Open Water Instructor może zdobyć certyfikat Deep Diving Instructor za pomocą jakiej metody?",
    "options": [
      "Tylko seminarium dla instruktorów Specialty",
      "Tylko aplikacja weryfikująca (Direct Application)",
      "Tylko seminarium dla instruktorów Specialty i współnauczanie",
      "Seminarium dla instruktorów Specialty, współnauczanie lub wniosek weryfikacyjny"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Specialty Instruktor",
      "page": 127,
      "quote": "Istnieją trzy metody uzyskania licencji uprawniającej do nauczania programów Specjalizacji SSI: ● Seminarium dla Instruktorów Specjalizacji ● Współnauczanie (Co-Teaching) ● Weryﬁkacja/Wniosek (niedostępne dla Divemasterów)"
    }
  },
  {
    "question": "Które certyfikaty Specialty Instructor są warunkiem wstępnym dla Decompression Diving Instructor?",
    "options": [
      "Deep Diving",
      "Enriched Air Nitrox - 40",
      "Wszystkie odpowiedzi są prawidłowe",
      "Science of Diving"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Specialty Instruktor",
      "page": 128,
      "quote": "Posiadać następujące aktywne certyﬁkaty Specialty Instruktor SSI lub równoważne certyﬁkaty uznanej agencji szkoleniowej: ● Deep Diving ● Enriched Air Nitrox ● Science of Diving"
    }
  },
  {
    "question": "Open Water Instructor może zdobyć certyfikat Advanced Wreck Diving Instructor za pomocą której metody?",
    "options": [
      "Wspólnauczania",
      "Weryfikacji aplikacji",
      "Wszystkie odpowiedzi są prawidłowe",
      "Seminarium dla instruktorów Specialty"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Specialty Instruktor",
      "page": 127,
      "quote": "Advanced Wreck Diving OWI T (1)"
    }
  },
  {
    "question": "Aby uzyskać certyfikat Specialty Instructor dla DPV Diving podczas seminarium, kandydat musi:",
    "options": [
      "Posiadać certyfikat DPV Diving na poziomie kursanta",
      "Posiadać co najmniej 5 nurkowań z doświadczeniem DPV Diving",
      "Ukończyć co najmniej 2 sesje szkoleniowe w basenie/wodach ograniczonych z użyciem DPV.",
      "Wykonać co najmniej 3 nurkowania szkoleniowe na wodach otwartych z użyciem DPV."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Specialty Instruktor",
      "page": 127,
      "quote": "1 | Przedstawić dowód posiadania certyﬁkatu na poziomie nurka SSI lub równoważnego certyﬁkatu wydanego przez uznaną agencję szkoleniową."
    }
  },
  {
    "question": "Które z poniższych jest akceptowanym dowodem certyfikacji dla metody Weryfikacji Aplikacji?",
    "options": [
      "Egzamin końcowy ukończony w innej agencji szkoleniowej.",
      "Ukończenie materiałów z programów dla kursanta",
      "Wszystkie odpowiedzi są prawidłowe",
      "20 nurkowań w odpowiedniej specjalizacji lub dowód doświadczenia dla specjalizacji innych niż nurkowe"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Specialty Instruktor",
      "page": 128,
      "quote": "● Posiadać co najmniej 20 zalogowanych nurkowań w odpowiedniej specjalności. ● W przypadku specjalizacji innych niż nurkowanie należy przedstawić dowód doświadczenia (np. | certyﬁkat serwisanta producenta dla Equipment Techniques)."
    }
  },
  {
    "question": "Właściwe SSI Service Center może mieć dodatkowe wymagania dotyczące ukończenia metody Weryfikacji Aplikacji w oparciu o:",
    "options": [
      "Regionalną kulturę lub lokalne prawa",
      "Lokalne prawa i przepisy",
      "Najlepsze praktyki i regulacje",
      "Przepisy regionalne i wymagania klientów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Specialty Instruktor",
      "page": 128,
      "quote": "Uwaga | Odpowiedzialne za kurs SSI Service Center może przedstawić dodatkowe wymagania do ukończenia kursu na podstawie lokalnego prawa i regulacji."
    }
  },
  {
    "question": "Divemasterzy z innych agencji szkoleniowych mogą uzyskać równoważną certyfikację SSI, jeśli:",
    "options": [
      "Uiszczą oni dodatkową opłatę na rzecz swojego Centrum Szkoleniowego SSI.",
      "Uzyskają oni zatwierdzenie wykwalifikowanego Instructor Trainera.",
      "Spełniają warunki wstępne SSI i ukończyli wymagania określone w podręczniku instruktora dla programu Divemaster.",
      "Ukończą kurs Instructor Training Course."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Divemaster | ISO 24801-3",
      "page": 120,
      "quote": "Kandydaci z innych agencji szkoleniowych muszą ukończyć cały program Divemaster SSI, aby uzyskać certyﬁkację."
    }
  },
  {
    "question": "Która z poniższych certyfikacji może być zastosowana do minimalnych wymagań dla karty uznania Divemaster Instructor?",
    "options": [
      "Tylko certyfikaty Open Water Diver i specjalizacji na wodach otwartych, takie jak Deep Diving.",
      "Jakiekolwiek profesjonalne certyfikacje, takie jak Open Water Instructor.",
      "Open Water Diver i jakiekolwiek certyfikaty specjalizacji.",
      "Tylko certyfikaty specjalizacji na wodach otwartych, takie jak Deep Diving."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Divemaster Instructor",
      "page": 132,
      "quote": "Wydano: ● Co najmniej 25 certyﬁkacji z dowolnego programu Nurkowania Rekreacyjnego (Recreational Scuba)."
    }
  },
  {
    "question": "Nurek może zaliczyć pierwsze nurkowanie szkoleniowe z jakiej specjalizacji na poczet wymaganych nurkowań Advanced Open Water Diver?",
    "options": [
      "Advanced Wreck Diving",
      "Wszystkie odpowiedzi są poprawne",
      "Night & Limited Visibility",
      "Decompression Diving"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "Advanced Open Water Diver",
      "page": 63,
      "quote": "● Night & Limited Visibility"
    }
  },
  {
    "question": "Instruktor prowadzący program Advanced Open Water Diver musi:",
    "options": [
      "Być co najmniej Open Water Instructor",
      "Wszystkie odpowiedzi są poprawne",
      "Posiadać bezpośrednią wiedzę na temat wymaganego sprzętu i umiejętności dla każdego nurkowania, które przeprowadza.",
      "Posiadać zweryfikowane umiejętności przez Managera QMS"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Załącznik",
      "section": "Lista zmian Scuba",
      "page": 177,
      "quote": "Program Advanced Adventurer może prowadzić aktywny instruktor Open Water . Instruktor musi posiadać bezpośrednią wiedzę na temat wymaganego sprzętu i ćwiczeń dla każdego nurkowania przygodowego, które prowadzi. ... Manager QMS ośrodka szkoleniowego jest odpowiedzialny za sprawdzenie, czy instruktor posiada stosowne uprawnienia na poziomie kursanta lub co najmniej pięć nurkowań w stosownej specjalizacji przed przeprowadzeniem szkolenia."
    }
  },
  {
    "question": "Program Advanced Open Water Diver:",
    "options": [
      "Powinien kłaść nacisk na wiedzę teoretyczną z odpowiednich specjalizacji",
      "Nie wymaga sesji szkoleniowej w basenie/wodach ograniczonych dla specjalizacji sprzętowych",
      "Wszystkie odpowiedzi są poprawne",
      "Powinien koncentrować się na praktycznych umiejętnościach nurkowych z odpowiednich specjalizacji"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "Advanced Open Water Diver",
      "page": 62,
      "quote": "Program ten został zaprojektowany tak, aby w pełni koncentrować się na praktycznych ćwiczeniach nurkowych."
    }
  },
  {
    "question": "Które z poniższych wymagań zostały wyjaśnione w Ogólnych Standardach Specjalizacji Programów?",
    "options": [
      "Kursanci muszą ukończyć sesję szkoleniową na basenie / w ograniczonym akwenie Open Water Diver przed przystąpieniem do Specjalizacje na Wodach Otwartych",
      "Nurkowania szkoleniowe na wodach otwartych dla programów specjalizacji nie mogą być łączone z nurkowaniami szkoleniowymi na wodach otwartych na poziomie podstawowym, a certyfikat specjalizacji musi zostać wydany po uzyskaniu certyfikatu Open Water Diver.",
      "Wszystkie odpowiedzi są poprawne",
      "Nurkowania szkoleniowe na wodach otwartych zaliczane są do odpowiedniego programu specjalizacji tylko w przypadku specjalizacji z obowiązkowymi nurkowaniami szkoleniowymi na wodach otwartych"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Ogólne Standardy Specjalizacji",
      "page": 55,
      "quote": "● Nurkowania szkoleniowe na Wodach Otwartych dla jakiegokolwiek programu Specjalizacji nie mogą być łączone z nurkowaniami szkoleniowymi na Wodach Otwartych dla programów poziomu podstawowego. ● Certyﬁkat specjalizacji może być wydany dopiero po wydaniu certyﬁkatu Open Water Diver ."
    }
  }
,
  {
    "question": "Scuba Schools International (SSI) zostało założone w 1970 roku przez:",
    "options": [
          "Międzynarodową koalicję producentów sprzętu nurkowego.",
          "Grupę wyspecjalizowanych przedsiębiorców branży nurkowej.",
          "Zarząd Recreational Scuba Training Council (RSTC).",
          "Niezależną komisję instruktorów i egzaminatorów ISO."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Historia i filozofia SSI",
      "section": "Historia i założenie",
      "page": 1,
      "quote": "Od momentu rozpoczęcia działalności w 1970 r. przez grupę wyspecjalizowanych przedsiębiorców branży nurkowej..."
    }
  },
  {
    "question": "W Cyklu Lojalnościowym Klienta faza, która bezpośrednio następuje po \"Pozyskaniu Klienta\" (Customer Acquisition), to:",
    "options": [
          "Zaangażowanie Klienta (Customer Commitment).",
          "Utrzymanie Klienta (Customer Retention).",
          "Przywiązanie/Rozwój Klienta (Customer Development).",
          "Faza Sprzedaży (Sales Phase)."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Historia i filozofia SSI",
      "section": "Cykl Lojalnościowy",
      "page": 2,
      "quote": "Customer Acquisition -> Customer Development (Education/Bonding Phase)."
    }
  },
  {
    "question": "Doświadczenie, jako jeden z elementów Diamentu Nurka SSI, jest definiowane jako:",
    "options": [
          "Wyłącznie liczba nurkowań zarejestrowanych po uzyskaniu certyfikatu Open Water Diver.",
          "Umiejętność obsługi zaawansowanego sprzętu w trudnych warunkach środowiskowych.",
          "Łącznik pomiędzy komponentami Diamentu Nurka, mający na celu stworzenie nurka zaangażowanego na całe życie.",
          "Zbiór certyfikatów uzyskanych w ramach ścieżki kontynuacji edukacji."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Historia i filozofia SSI",
      "section": "Diament Nurka",
      "page": 2,
      "quote": "Doświadczenie to łącznik pomiędzy komponentami Diamentu Nurka tak, aby stworzyć nurka zaangażowanego na całe życie."
    }
  },
  {
    "question": "Filozofia SSI \"Komfort przez powtarzanie\" zakłada, że prawdziwe opanowanie czynności wynika z:",
    "options": [
          "Jednokrotnego, poprawnego zademonstrowania umiejętności przez kursanta w akwenie ograniczonym.",
          "Samodzielnego przestudiowania filmów instruktażowych w aplikacji MySSI przed zajęciami.",
          "Nauki etapami, rozwijania pamięci mięśniowej i wprowadzania stopniowo coraz bardziej złożonych zadań.",
          "Intensywnego przeszkolenia w wodzie w ciągu jednego weekendu w celu maksymalizacji retencji wiedzy."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Historia i filozofia SSI",
      "section": "Komfort przez powtarzanie",
      "page": 2,
      "quote": "...wynika z nauki poszczególnych jego etapów, a następnie rozwijania komfortu i pamięci mięśniowej poprzez powtarzanie ćwiczenia..."
    }
  },
  {
    "question": "Według podręcznika, głównym słabym punktem Baz Nurkowych (Resortów) w budowaniu relacji z nurkiem jest:",
    "options": [
          "Brak wykwalifikowanej kadry do prowadzenia programów profesjonalnych.",
          "Trudność w budowaniu długotrwałego związku z nurkiem, który odwiedza bazę rzadko.",
          "Ograniczony dostęp do nowoczesnych materiałów cyfrowych SSI.",
          "Brak możliwości sprzedaży sprzętu nurkowego ze względu na logistykę transportową."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Historia i filozofia SSI",
      "section": "Sieć Centrów Szkoleniowych",
      "page": 2,
      "quote": "Ów brak długotrwałego związku z nurkiem jest na ogół słabym punktem... baz nurkowych SSI."
    }
  },
  {
    "question": "W domenie kognitywnej (poznawczej) nauki, krok 2 procesu rozwoju wiedzy polega na tym, że:",
    "options": [
          "Kursanci rozumieją nowe informacje i stosują je w nowym środowisku (np. podczas warsztatów).",
          "Instruktor przekazuje informacje poprzez wykład wspierany prezentacją PEG.",
          "Kursant zalicza egzamin końcowy z wynikiem nie niższym niż 80%.",
          "Następuje transfer wiedzy poprzez samodzielne czytanie cyfrowych materiałów szkoleniowych."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Metodyka nauczania",
      "section": "Kognitywna domena nauki",
      "page": 3,
      "quote": "Krok 2: Twoi kursanci rozumieją nowe informacje i stosują je w nowym środowisku."
    }
  },
  {
    "question": "Na którym etapie psychomotorycznej domeny nauki celem kursanta jest \"perfekcyjne wykonywanie umiejętności za każdym razem, na maksymalnym poziomie zaawansowania\"?",
    "options": [
          "Etap 1: Nauka wykonywania umiejętności.",
          "Etap 2: Ćwiczenie umiejętności.",
          "Etap 3: Osiągnięcie biegłości.",
          "Etap 4: Automatyzacja odruchowa."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Metodyka nauczania",
      "section": "Psychomotoryczna domena nauki",
      "page": 3,
      "quote": "3 | Osiągnięcie biegłości... Celem kursanta jest perfekcyjne wykonywanie umiejętności za każdym razem..."
    }
  },
  {
    "question": "Badania nad domeną afektywną (uczenia się postaw) wskazują, że kursant o negatywnym nastawieniu (negatywnym afekcie):",
    "options": [
          "Uczy się szybciej, starając się jak najszybciej opuścić stresujące środowisko.",
          "Słabiej się uczy i zapamiętuje mniej informacji.",
          "Wykazuje większą dbałość o detale techniczne z powodu zwiększonej czujności.",
          "Nie wykazuje statystycznie istotnych różnic w procesie przyswajania wiedzy."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Metodyka nauczania",
      "section": "Afektywna domena uczenia się",
      "page": 4,
      "quote": "...kursant o mniej pozytywnym nastawieniu (negatywnym afekcie) słabiej się uczy i zapamiętuje mniej informacji."
    }
  },
  {
    "question": "Która cecha uczenia się dorosłych nakłada na instruktora obowiązek pełnienia roli mentora, dając kursantom pewien stopień władzy nad procesem szkolenia?",
    "options": [
          "Dorośli są zorientowani na cel.",
          "Dorośli są praktyczni.",
          "Dorośli są niezależni i samodzielni.",
          "Dorośli wymagają szacunku."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Metodyka nauczania",
      "section": "Cechy dorosłych kursantów",
      "page": 4,
      "quote": "Dorośli są niezależni i samodzielni... Chcą mieć pewien stopień władzy i odpowiedzialności... Jako instruktor motywujący powinieneś zachęcać..."
    }
  },
  {
    "question": "\"Dorośli preferują praktyczne uczenie się, które wyjaśnia, w jaki sposób 'jak' i 'czego' się uczą\". To stwierdzenie definiuje cechę:",
    "options": [
          "Praktyczności (Dorośli są praktyczni).",
          "Istotności (Dorośli muszą być przekonani, że zagadnienia są istotne).",
          "Doświadczenia życiowego (Dorośli zbierają własne doświadczenia).",
          "Samodzielności (Dorośli są niezależni)."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Metodyka nauczania",
      "section": "Cechy dorosłych kursantów",
      "page": 4,
      "quote": "Dorośli są praktyczni... Dorośli preferują praktyczne uczenie się, które wyjaśnia, w jaki sposób 'jak' i 'czego' się uczą."
    }
  },
  {
    "question": "Zgodnie z andragogiką, dorośli kursanci odrzucają treści i działania instruktora, jeżeli:",
    "options": [
          "Nie są one poparte badaniami naukowymi w podręczniku.",
          "Odczuwają, że są im one narzucane (brak szacunku dla ich niezależności).",
          "Wymagają one zbyt dużej sprawności fizycznej w akwenie ograniczonym.",
          "Odbywają się wyłącznie przy użyciu materiałów cyfrowych."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Metodyka nauczania",
      "section": "Cechy dorosłych kursantów",
      "page": 4,
      "quote": "Dorośli odrzucają treści, idee, działania, jeśli odczuwają, że są one im narzucane."
    }
  },
  {
    "question": "Według Diamentu Nurka, nurkowie posiadający własny, odpowiednio dopasowany sprzęt:",
    "options": [
          "Wykazują statystycznie mniejsze zaangażowanie w lokalne życie centrum nurkowego.",
          "Są bardziej skłonni do wspierania Centrum Szkoleniowego poprzez serwis i udział w dodatkowych programach.",
          "Częściej rezygnują z nurkowania z powodu kosztów konserwacji sprzętu.",
          "Nurkują wyłącznie w bazach nurkowych oferujących bezpłatne logowanie."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Historia i filozofia SSI",
      "section": "Diament Nurka",
      "page": 2,
      "quote": "Nurkowie, którzy kupują sprzęt od swojego lokalnego Centrum Szkoleniowego są również bardziej skłonni do wspierania go..."
    }
  },
  {
    "question": "Zasada Elastyczności SSI pozwala profesjonaliście na:",
    "options": [
          "Dowolne skracanie czasu trwania sesji w wodzie poniżej minimum.",
          "Wybór najlepszej metody szkoleniowej i kolejności sesji, o ile spełnione są wymagane treści i Standardy.",
          "Pominięcie sesji w akwenie ograniczonym, jeśli kursant wykazuje wybitne zdolności.",
          "Modyfikację Standardów SSI w celu dopasowania ich do wymogów lokalnych stowarzyszeń."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Historia i filozofia SSI",
      "section": "Zasada Elastyczności",
      "page": 3,
      "quote": "Zasada ta określa, które treści muszą być zgodne z określonym schematem i pozwala profesjonaliście wybrać najlepszą metodę..."
    }
  },
  {
    "question": "Kiedy nurek musi podpisać Oświadczenie medyczne i kwestionariusz SSI?",
    "options": [
          "Bezpośrednio przed certyfikacją końcową.",
          "Przed jakimikolwiek zajęciami w wodzie.",
          "Wyłącznie przed pierwszym nurkowaniem w wodach otwartych.",
          "Tylko w przypadku programów profesjonalnych (AI, OWI)."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Oświadczenie medyczne i prywatności",
      "page": 13,
      "quote": "Aktualne Oświadczenie medyczne... jest wymagane: Przed jakimikolwiek zajęciami w wodzie."
    }
  },
  {
    "question": "Obejrzenie wideo \"SSI Świadomość Ryzyka, Część 1\" jest wymagane od każdego kursanta poziomu podstawowego:",
    "options": [
          "Po zakończeniu wszystkich nurkowań szkoleniowych.",
          "Przed jakimikolwiek zajęciami w wodzie.",
          "Tylko jeśli kursant nie posiada ubezpieczenia nurkowego.",
          "Wyłącznie przed przystąpieniem do egzaminu końcowego."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Świadomość Ryzyka",
      "page": 12,
      "quote": "Każdy kursant... musi obejrzeć video 'SSI Świadomość Ryzyka, Część 1'... Przed jakimikolwiek zajęciami w wodzie."
    }
  },
  {
    "question": "Nurkowania szkoleniowe w wodach otwartych muszą zostać ukończone przez kursanta w ciągu:",
    "options": [
          "12 miesięcy od pierwszych zajęć teoretycznych.",
          "6 miesięcy od ostatnich zajęć teoretycznych lub sesji szkoleniowej w wodzie.",
          "3 miesięcy od zaliczenia wszystkich umiejętności w basenie.",
          "24 miesięcy, pod warunkiem posiadania statusu Referral Diver."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Ukończenie szkolenia",
      "page": 13,
      "quote": "...ukończone: W ciągu sześciu (6) miesięcy od ostatnich zajęć teoretycznych lub sesji szkoleniowej w wodzie."
    }
  },
  {
    "question": "Jeśli kursant poziomu podstawowego nie uczestniczył w zajęciach w wodzie przez więcej niż 12 miesięcy, musi on:",
    "options": [
          "Ukończyć wyłącznie program Scuba Skills Update.",
          "Rozpocząć od początku pełny program poziomu podstawowego.",
          "Zdać ponownie egzamin końcowy i wykonać dwa nurkowania adaptacyjne.",
          "Przejrzeć materiały cyfrowe i uzyskać pisemną zgodę Regional Service Center."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Przerwy w szkoleniu",
      "page": 13,
      "quote": "Jeśli upłynęło więcej niż 12 miesięcy od ostatnich zajęć w wodzie... musi rozpocząć od początku program poziomu podstawowego."
    }
  },
  {
    "question": "Zgodnie z Ogólnymi Standardami, profesjonalista SSI podczas szkolenia w wodzie musi posiadać:",
    "options": [
          "Komputer nurkowy, bojkę SMB oraz urządzenie do sygnalizacji na powierzchni.",
          "Wyłącznie tradycyjne tabele nurkowe i głębokościomierz analogowy.",
          "Skafander suchy z dwoma niezależnymi źródłami wyporu.",
          "Zapasowy automat oddechowy zintegrowany z inflatorem jacketu (bez octopusa)."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Wymagany sprzęt profesjonalisty",
      "page": 35,
      "quote": "...każdy Profesjonalista SSI musi używać: Komputera nurkowego, Bojki dekompresyjnej (SMB) oraz urządzenia do sygnalizacji..."
    }
  },
  {
    "question": "Za tworzenie materiałów szkoleniowych, certyfikatów oraz czuwanie nad utrzymaniem Standardów SSI odpowiada:",
    "options": [
          "Lokalne Centrum Szkoleniowe (Training Center).",
          "Regionalne Service Center.",
          "Centrala SSI (Headquarters).",
          "Międzynarodowa komisja WRSTC."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Organizacja SSI",
      "section": "Zadania Zespołu",
      "page": 12,
      "quote": "Centrala SSI tworzy materiały... rozwija i czuwa nad utrzymaniem Standardów Szkoleniowych SSI."
    }
  },
  {
    "question": "Do obowiązków Regionalnego SSI Service Center należy:",
    "options": [
          "Bezpośrednie szkolenie i certyfikowanie nurków rekreacyjnych.",
          "Wydawanie referencji dla profesjonalistów oraz nadzór nad procedurami składania skarg.",
          "Projektowanie i produkcja sprzętu nurkowego dla afiliowanych centrów.",
          "Prowadzenie wyłącznie programów Instructor Evaluation (IE)."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Organizacja SSI",
      "section": "Regionalne Service Center",
      "page": 12,
      "quote": "Regionalne SSI Service Center... Przetwarza dokumenty i wydaje referencje... oraz nadzorują wszelkie procedury składania skarg."
    }
  },
  {
    "question": "Manager QMS Centrum Szkoleniowego jest odpowiedzialny za:",
    "options": [
          "Sprzedaż detaliczną sprzętu i organizację wyjazdów.",
          "Nadzorowanie programu zarządzania jakością przy użyciu Systemu Zarządzania Jakością SSI.",
          "Serwisowanie automatów oddechowych i legalizację butli.",
          "Prowadzenie szkoleń dla personelu pomocniczego w zakresie marketingu."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Organizacja SSI",
      "section": "System Zarządzania Jakością (QMS)",
      "page": 12,
      "quote": "...Manager QMS... który nadzoruje program zarządzania jakością przy użyciu Systemu Zarządzania Jakością SSI (QMS)."
    }
  },
  {
    "question": "Minimalny wynik wymagany do zaliczenia egzaminu końcowego przez kandydata na profesjonalistę (AI) wynosi:",
    "options": [
          "80%.",
          "85%.",
          "90%.",
          "100%."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Egzaminy końcowe",
      "page": 32,
      "quote": "Kursanci muszą zdobyć wynik minimalny 80%, a profesjonaliści 90%."
    }
  },
  {
    "question": "W jaki sposób nurek uzyskuje dostęp do swoich cyfrowych kart certyfikacyjnych (D-Cards)?",
    "options": [
          "Są one wysyłane pocztą tradycyjną z Centrali SSI.",
          "Są dostępne natychmiast po wydaniu w aplikacji MySSI.",
          "Wymagają osobistego odbioru w Regional Service Center.",
          "Można je pobrać wyłącznie po opłaceniu składki \"Platinum Membership\"."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Poziomy i stopnie",
      "page": 64,
      "quote": "...cyfrowe kopie wszystkich otrzymanych certyfikatów (D-Card) i kart uznaniowych, do których dostęp możliwy jest natychmiast po wydaniu."
    }
  },
  {
    "question": "Gdzie profesjonalista SSI znajdzie dokumentację kursanta (Training Records) do wydrukowania?",
    "options": [
          "W publicznej sekcji strony divessi.com.",
          "W strefie pobrań (download) w profilu MySSI Profesjonalisty.",
          "W aplikacji MySSI w sekcji \"Logbook Kursanta\".",
          "Wyłącznie in formie papierowej, zamawiając w Service Center."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Strefa pobrań MySSI",
      "page": 12,
      "quote": "Dokumentację Kursanta (Training Records) do wydrukowania można znaleźć: W strefie pobrań in profilu MySSI Profesjonalisty."
    }
  },
  {
    "question": "Programy pozyskiwania klientów (akwizycyjne), takie jak Try Scuba, charakteryzują się tym, że:",
    "options": [
          "Wydaje się dla nich pełną kartę certyfikacyjną OWD.",
          "Materiały cyfrowe są bezpłatne lub oferowane w niższej cenie, a kursant otrzymuje kartę uznaniową.",
          "Wymagają one zaliczenia egzaminu końcowego z wynikiem 80%.",
          "Mogą być prowadzone wyłącznie przez Instructor Trainerów."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Programy Pozyskiwania Klientów",
      "page": 46,
      "quote": "Cyfrowe materiały do nauki są bezpłatne lub oferowane po niższej cenie, a kursanci otrzymują kartę uznaniową zamiast karty certyfikacyjnej."
    }
  },
  {
    "question": "Assistant Instructor (AI) może prowadzić ćwiczenia praktyczne w basenie dla programu OWD pod nadzorem pośrednim, z wyjątkiem:",
    "options": [
          "Oczyszczania maski i odszukiwania automatu.",
          "Ćwiczeń awaryjnego wynurzania.",
          "Kontroli pływalności i zdejmowania pasów balastowych.",
          "Pływania pod wodą w pełnym sprzęcie."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Zespół Szkoleniowy - AI",
      "page": 122,
      "quote": "...ćwiczenia praktyczne in basenie... programu Open Water Diver pod pośrednim nadzorem... z wyjątkiem ćwiczeń wynurzenia awaryjnego."
    }
  },
  {
    "question": "Kto może oceniać umiejętności na powierzchni podczas nurkowań w wodach otwartych pod nadzorem pośrednim Open Water Instructora?",
    "options": [
          "Każdy Divemaster z aktywnym statusem.",
          "Assistant Instructor.",
          "Specjalnie przeszkolony członek personelu pomocniczego bazy.",
          "Wyłącznie aktywny Open Water Instructor."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Zespół Szkoleniowy - AI",
      "page": 122,
      "quote": "Instruktorzy Asystujący mogą oceniać umiejętności na powierzchni pod pośrednim nadzorem Open Water Instructor."
    }
  },
  {
    "question": "Kandydat na stopień Assistant Instructor musi mieć zalogowanych co najmniej:",
    "options": [
          "60 nurkowań (40 godzin).",
          "75 nurkowań (50 godzin).",
          "100 nurkowań (75 godzin).",
          "50 nurkowań (30 godzin)."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagania dla stopnia AI",
      "page": 121,
      "quote": "Zalogowanie przynajmniej 75 nurkowań in wodach otwartych o łącznym czasie 50 godzin lub więcej."
    }
  },
  {
    "question": "Który z wymienionych programów AI może prowadzić samodzielnie i wystawiać dla niego karty uznaniowe?",
    "options": [
          "Diver Stress and Rescue.",
          "Perfect Buoyancy.",
          "Deep Diving.",
          "Wreck Diving."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "AI - Uprawnienia",
      "page": 122,
      "quote": "Assistant Instructors prowadzą Programy Specjalizacji SSI, Try Scuba, Scuba Skills Update i Perfect Buoyancy."
    }
  },
  {
    "question": "Certyfikowany asystent (np. Divemaster) może podwyższyć współczynnik ilościowy kursant-instruktor:",
    "options": [
          "W każdym programie SSI bez żadnych ograniczeń.",
          "W ramach niektórych programów szkoleniowych SSI określonych w standardach.",
          "Tylko jeśli wszyscy kursanci mają powyżej 18 lat.",
          "Wyłącznie podczas zajęć teoretycznych in sali wykładowej."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Korzystanie z certyfikowanych asystentów",
      "page": 122,
      "quote": "Mogą pomóc... oraz mogą podwyższyć współczynnik ilościowy... in ramach niektórych programów szkoleniowych SSI."
    }
  },
  {
    "question": "Program SSI Dive Guide może być nauczany przez profesjonalistę o statusie:",
    "options": [
          "Aktywny Divemaster.",
          "Aktywny Assistant Instructor.",
          "Aktywny Specialty Instructor Dive Guide lub wyższy.",
          "Wyłącznie Instructor Trainer."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Uprawnienia do nauczania Dive Guide",
      "page": 130,
      "quote": "Program SSI Dive Guide może być nauczany przez: Aktywny status Specialty Instructor Dive Guide lub wyższy."
    }
  },
  {
    "question": "Aby AI mógł prowadzić program \"Explorers\", musi on posiadać stopień:",
    "options": [
          "Science of Diving Instructor.",
          "Scuba Rangers Instructor (Explorers Instructor).",
          "React Right Instructor.",
          "Specialty Instructor Navigation."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "Kto może prowadzić program",
      "page": 154,
      "quote": "...może być prowadzony przez Assistant Instructor SSI z certyfikatem Scuba Rangers Instructor."
    }
  },
  {
    "question": "Przed przystąpieniem do Instructor Evaluation (IE), kandydat na stopień Open Water Instructor must:",
    "options": [
          "Ukończyć Instructor Training Course (ITC).",
          "Wydać co najmniej 10 certyfikatów Perfect Buoyancy.",
          "Zalogować 200 nurkowań in 5 różnych środowiskach.",
          "Asystować przy 10 pełnych kursach OWD."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Kandydat na stopień OWI",
      "page": 129,
      "quote": "Przed przystąpieniem do egzaminu Instructor Evaluation, kandydat na stopień Open Water Instructor must: Ukończyć Instructor Training Course."
    }
  },
  {
    "question": "Kandydat na poziom Assistant Instructor Trainer must wydać co najmniej:",
    "options": [
          "10 certyfikatów Scuba Diver i/lub Open Water.",
          "30 certyfikatów Scuba Diver i/lub Open Water.",
          "50 certyfikatów Scuba Diver i/lub Open Water.",
          "100 certyfikatów Scuba Diver i/lub Open Water."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagania dla AIT",
      "page": 134,
      "quote": "...kandydat na poziom Assistant Instructor Trainer must wydać przynajmniej: 30 certyfikatów Scuba Diver i / lub Open Water."
    }
  },
  {
    "question": "Stopień uznaniowy \"Specialty Diver\" jest automatycznie generowany po:",
    "options": [
          "Ukończeniu 2 specjalizacji i zalogowaniu 12 nurkowań.",
          "Ukończeniu 4 specjalizacji i zalogowaniu 24 nurkowań.",
          "Ukończeniu 5 specjalizacji i zalogowaniu 50 nurkowań.",
          "Zalogowaniu 100 nurkowań bez względu na liczbę specjalizacji."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Karty uznaniowe",
      "page": 63,
      "quote": "Specialty Diver: ukończone dwa programy Specjalizacji i zalogowanych 12 nurkowań."
    }
  },
  {
    "question": "Stopień uznaniowy \"Master Diver\" wymaga ukończenia:",
    "options": [
          "4 specjalizacji i zalogowania 50 nurkowań.",
          "4 specjalizacji, programu Diver Stress and Rescue i zalogowania 50 nurkowań.",
          "5 specjalizacji i zalogowania 100 nurkowań.",
          "Statusu Divemastera i zalogowania 60 nurkowań."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Karty uznaniowe - Master Diver",
      "page": 63,
      "quote": "Master Diver: ukończone cztery programy Specjalizacji, program Diver Stress and Rescue i zalogowanych 50 nurkowań."
    }
  },
  {
    "question": "Jeśli profesjonalista SSI był nieaktywny przez okres od 2 do 5 lat, jedną z opcji powrotu do statusu aktywnego jest:",
    "options": [
          "Wyłącznie opłacenie zaległych składek członkowskich.",
          "Współnauczenie przynajmniej jednego (1) programu Open Water Diver.",
          "Zalogowanie 20 nurkowań stażowych pod nadzorem Service Center.",
          "Przejście pełnego programu Crossover."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Odnowienie statusu profesjonalnego",
      "page": 127,
      "quote": "...jedną z opcji powrotu... Współnauczać przynajmniej jeden (1) program Open Water Diver."
    }
  },
  {
    "question": "Program Snorkeling może być prowadzony samodzielnie przez:",
    "options": [
          "Każdego nurka z certyfikatem Open Water Diver.",
          "Profesjonalnego Dive Guide'a (Professional Dive Guide) o aktywnym statusie.",
          "Wyłącznie Assistant Instructor Trainerów.",
          "Członków personelu pomocniczego po wewnętrznym szkoleniu bazy."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Uprawnienia Snorkeling",
      "page": 43,
      "quote": "Professional Dive Guide, posiadający aktywny status... może... prowadzić program Snorkeling."
    }
  },
  {
    "question": "W programie Scuba Diver, jeżeli jeden lub więcej kursantów ma mniej niż 15 lat, maksymalny współczynnik (ratio) wynosi:",
    "options": [
          "8:1.",
          "6:1.",
          "4:1.",
          "2:1."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Współczynniki ilościowe w wodzie - Scuba Diver",
      "page": 50,
      "quote": "Jeśli jeden lub więcej kursantów in programie Scuba Diver ma / mają mniej niż 15 lat, maksymalny współczynnik... wynosi: 4:1."
    }
  },
  {
    "question": "Maksymalny współczynnik kursant-instruktor na wodach otwartych w trakcie programu Basic Diver wynosi:",
    "options": [
          "8:1.",
          "4:1 (6:2 z certyfikowanym asystentem).",
          "2:1.",
          "6:1."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Basic Diver (ISO 11121) - Współczynnik ilościowy w wodzie",
      "page": 48,
      "quote": "Prawidłowa odpowiedź to: 4:1 (czterech kursantów na jednego instruktora). Współczynnik ten może jednak zostać zwiększony do 6:2, jeżeli instruktor korzysta z pomocy jednego certyfikowanego asystenta."
    }
  },
  {
    "question": "Jeżeli w programie poziomu podstawowego uczestniczy kursant mający mniej niż 12 lat, maksymalny współczynnik w wodach otwartych wynosi:",
    "options": [
          "6:1.",
          "4:1.",
          "8:2.",
          "2:1."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Współczynniki dla dzieci w OWD",
      "page": 53,
      "quote": "Jeśli jakikolwiek kursant... ma mniej niż 12 lat, maksymalny współczynnik... na wodach otwartych... wynosi: 4:1."
    }
  },
  {
    "question": "Maksymalna głębokość nauczania umiejętności awaryjnego wynurzania podczas dowolnego nurkowania wynosi:",
    "options": [
          "9 metrów.",
          "10 metrów.",
          "15 metrów lub mniej.",
          "Nie ma sztywnego limitu głębokości."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Ćwiczenia wynurzeń awaryjnych",
      "page": 35,
      "quote": "Maksymalna głębokość nauczania umiejętności awaryjnego wynurzania... wynosi: Piętnaście (15) metrów lub mniej."
    }
  },
  {
    "question": "Zgodnie z definicją SSI, obiekt do \"Indoor Diving\" musi mieć minimalną głębokość:",
    "options": [
          "3 metrów.",
          "4 metrów.",
          "5 metrów.",
          "10 metrów."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Indoor Diving",
      "page": 45,
      "quote": "Program Indoor Diving wymaga: ... Obiektu o minimalnej głębokości pięciu (5) metrów."
    }
  },
  {
    "question": "Maksymalna długość \"przepłynięcia przez przestrzenie zamknięte\" (swim-through) dla nurkowań rekreacyjnych wynosi:",
    "options": [
          "5 metrów.",
          "10 metrów.",
          "20 metrów.",
          "15 metrów."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Przepłynięcia przez przestrzenie zamknięte",
      "page": 36,
      "quote": " SSI 'przepłynięcia przez przestrzenie zamknięte'... Maksymalna długość wynosi dziesięć (10) metrów."
    }
  },
  {
    "question": "Poziom uznaniowy \"Platinum 1000 Diver\" wymaga od nurka zalogowania:",
    "options": [
          "500 nurkowań.",
          "1000 nurkowań.",
          "5000 nurkowań.",
          "100 nurkowań i statusu profesjonalnego."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Poziomy uznaniowe",
      "page": 64,
      "quote": "Poziom 9 - Platinum 1000 Diver: 1000 zalogowanych nurkowań."
    }
  },
  {
    "question": "Program SSI Explorers jest przeznaczony dla dzieci w wieku:",
    "options": [
          "6-8 lat.",
          "8-10 lat.",
          "10-12 lat.",
          "12-14 lat."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "Przeznaczenie wiekowe",
      "page": 154,
      "quote": "...jest przeznaczony dla kursantów in wieku od 8 do 10 lat."
    }
  },
  {
    "question": "Wymogiem dla certyfikatu Junior Open Water Diver jest to, że:",
    "options": [
          "Pozwala on na nurkowanie do 40 metrów.",
          "Nurek musi być bezpośrednio nadzorowany w wodzie przez profesjonalistę.",
          "Nie wymaga on zaliczenia sesji in akwenie ograniczonym.",
          "Jest ważny tylko do ukończenia 18 roku życia, po czym wygasa."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Junior Open Water Diver - Limity",
      "page": 59,
      "quote": "...Junior Open Water Diver, wymagają, aby nurek był bezpośrednio nadzorowany in wodzie przez profesjonalistę."
    }
  },
  {
    "question": "Przed otrzymaniem certyfikatu Referral Diver kursant musi:",
    "options": [
          "Ukończyć tylko zajęcia teoretyczne.",
          "Ukończyć wszystkie zajęcia w basenie oraz oceny umiejętności zawarte w podręczniku OWD.",
          "Wykonać dwa nurkowania szkoleniowe in wodach otwartych.",
          "Zaliczyć egzamin końcowy z wynikiem 90%."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Referral Diver - Wymagania",
      "page": 51,
      "quote": "Przed otrzymaniem certyfikatu Referral Diver... Ukończyć wszystkie zajęcia in basenie... oraz oceny umiejętności..."
    }
  },
  {
    "question": "Ocena sprawności fizycznej kandydata na AI obejmuje holowanie nurka na powierzchni w czasie poniżej:",
    "options": [
          "5 minut.",
          "8 minut.",
          "10 minut.",
          "12 minut."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "AI - Testy sprawnościowe",
      "page": 121,
      "quote": "Ocena sprawności fizycznej kandydata... obejmuje: Pełne ćwiczenie ratowania nurka z holowaniem... in czasie poniżej osiem (8) minut."
    }
  },
  {
    "question": "Minimalny wiek pozwalający na zakwalifikowanie do programu Advanced Adventurer wynosi:",
    "options": [
          "10 lat.",
          "12 lat.",
          "15 lat.",
          "18 lat."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Advanced Adventurer - Wymagania",
      "page": 61,
      "quote": "Minimalny wiek do zakwalifikowania do programu Advanced Adventurer: ... Wynosi 10 lat."
    }
  },
  {
    "question": "Jaki jest minimalny wiek wymagany od kandydata, aby mógł on przystąpić do programu Snorkeling Instructor?",
    "options": [
          "15 lat",
          "16 lat",
          "18 lat",
          "21 lat"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Snorkeling Instructor",
      "page": 124,
      "quote": "Kandydaci do programu Snorkeling Instructor muszą: Mieć skończone 18 lat"
    }
  },
  {
    "question": "Jeśli kursant poziomu podstawowego nie brał udziału w zajęciach w wodzie przez ponad 12 miesięcy, musi on:",
    "options": [
          "Ukończyć program Scuba Skills Update",
          "Ponownie zarejestrować się na pełny kurs Open Water Diver",
          "Zaliczyć jedynie powtórkę wiedzy teoretycznej",
          "Odbyć dwa nurkowania stażowe z Divemasterem"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Przerwy in zajęciach w wodzie",
      "page": 13,
      "quote": "Jeśli upłynęło więcej niż 12 miesięcy od ostatnich zajęć in wodzie, kursant poziomu podstawowego: Musi ukończyć Scuba Skills Update"
    }
  },
  {
    "question": "Jaki jest wymagany wynik procentowy, aby Profesjonalista SSI zaliczył egzamin końcowy z dowolnego programu zawodowego?",
    "options": [
          "80%",
          "85%",
          "90%",
          "100%"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Profesjonalne Egzaminy",
      "page": 32,
      "quote": "Kursanci muszą zdobyć wynik minimalny 80%, a profesjonaliści 90%"
    }
  },
  {
    "question": "Ile zalogowanych nurkowań w wodach otwartych musi posiadać kandydat, aby otrzymać stopień SSI Divemaster?",
    "options": [
          "40 nurkowań",
          "50 nurkowań",
          "60 nurkowań",
          "75 nurkowań"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagania stopnia Divemaster",
      "page": 123,
      "quote": "Mieć zalogowanych przynajmniej 60 nurkowań in wodach otwartych"
    }
  },
  {
    "question": "Program Explorers jest przeznaczony dla dzieci w przedziale wiekowym:",
    "options": [
          "6 do 8 lat",
          "8 do 10 lat",
          "10 do 12 lat",
          "12 do 14 lat"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "System Edukacji",
      "page": 154,
      "quote": "Explorers... jest przeznaczony dla kursantów in wieku od 8 do 10 lat"
    }
  },
  {
    "question": "Jaki jest maksymalny współczynnik kursant-instruktor na wodach otwartych podczas programu Basic Diver?",
    "options": [
          "1:1",
          "2:1",
          "4:1 (może być 6:2 z asystentem)",
          "6:1"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Basic Diver (ISO 11121) - Współczynnik ilościowy w wodzie",
      "page": 48,
      "quote": "Prawidłowa odpowiedź to: 4:1. Współczynnik ten może jednak zostać zwiększony do 6:2, jeżeli instruktor korzysta z pomocy asystenta."
    }
  },
  {
    "question": "W jakim maksymalnym terminie od ostatnich zajęć teoretycznych lub sesji w wodzie muszą zostać ukończone wymagane nurkowania szkoleniowe w wodach otwartych?",
    "options": [
          "3 miesiące",
          "6 miesięcy",
          "9 miesięcy",
          "12 miesięcy"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Ramy czasowe szkolenia",
      "page": 13,
      "quote": "Wymagane nurkowania szkoleniowe in wodach otwartych must zostać ukończone: W ciągu sześciu (6) miesięcy"
    }
  },
  {
    "question": "Ile certyfikatów (łącznie Scuba Diver i/lub Open Water Diver) musi wydać Assistant Instructor Trainer, aby spełnić jeden z wymogów tego stopnia?",
    "options": [
          "20 certyfikatów",
          "30 certyfikatów",
          "40 certyfikatów",
          "50 certyfikatów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymogi AIT",
      "page": 134,
      "quote": "kandydat na poziom Assistant Instructor Trainer must wydać przynajmniej: 40 certyfikatów Scuba Diver i / lub Open Water"
    }
  },
  {
    "question": "If jeden lub więcej kursantów w programie Scuba Diver ma mniej niż 15 lat, maksymalny współczynnik kursant-instruktor wynosi:",
    "options": [
          "2:1",
          "4:1",
          "6:1",
          "8:2"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Junior Scuba Diver współczynniki",
      "page": 50,
      "quote": "Jeśli jeden lub więcej kursantów in programie Scuba Diver ma / mają mniej niż 15 lat, maksymalny współczynnik kursant -instruktor wynosi: 4:1"
    }
  },
  {
    "question": "Assistant Instructor może uzyskać uprawnienia do prowadzenia której z poniższych specjalności nurkowych?",
    "options": [
          "Deep Diving",
          "Stress and Rescue",
          "Navigation",
          "Science of Diving"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "AI Specialty Uprawnienia",
      "page": 122,
      "quote": "Assistant Instructor może zdobyć kwalifikacje do prowadzenia... Equipment Techniques, Navigation i Wreck Diving"
    }
  },
  {
    "question": "Co z poniższych Assistant Instructor może oceniać podczas nurkowań szkoleniowych w wodach otwartych?",
    "options": [
          "Ćwiczenia awaryjne pod bezpośrednim nadzorem",
          "Umiejętności na powierzchni pod pośrednim nadzorem instruktora OWI",
          "Wszystkie umiejętności pod bezpośrednim nadzorem",
          "Umiejętności nawigacyjne pod pośrednim nadzorem"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "AI Rola na wodach otwartych",
      "page": 122,
      "quote": "osoby posiadające stopień Instruktora Asystującego mogą oceniać umiejętności na powierzchni pod pośrednim nadzorem Open Water Instructor"
    }
  },
  {
    "question": "Jaki jest minimalny wiek wymagany dla stopnia uznaniowego Master Diver?",
    "options": [
          "10 lat",
          "12 lat",
          "15 lat",
          "18 lat"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Master Diver - Wiek",
      "page": 63,
      "quote": "Master Diver: ukończone cztery programy Specjalizacji, program Diver Stress and Rescue i zalogowanych 50 nurkowań"
    }
  },
  {
    "question": "Ile nurkowań musi mieć zalogowanych kandydat na stopień Assistant Instructor (AI)?",
    "options": [
          "60 nurkowań",
          "75 nurkowań (lub 50 godzin)",
          "100 nurkowań",
          "125 nurkowań"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "AI - Wymagania wstępne",
      "page": 121,
      "quote": "Zalogowanie przynajmniej 75 nurkowań in wodach otwartych o łącznym czasie 50 godzin lub więcej"
    }
  },
  {
    "question": "Aby nurek mógł otrzymać stopień uznaniowy Century Diver, musi mieć zalogowanych:",
    "options": [
          "50 nurkowań",
          "100 nurkowań",
          "150 nurkowań",
          "200 nurkowań"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Stopnie uznaniowe",
      "page": 64,
      "quote": "Poziom 5 - Century Diver: 100 zalogowanych nurkowań"
    }
  },
  {
    "question": "Który program może prowadzić Assistant Instructor w akwenie ograniczonym pod nadzorem pośrednim Open Water Instruktora (z wyłączeniem ćwiczeń awaryjnych)?",
    "options": [
          "Sesje basenowe kursu Dive Guide",
          "Ćwiczenia w akwenie ograniczonym programu Open Water Diver",
          "Całość programu Stress and Rescue",
          "Nurkowanie w akwenie ograniczonym programu Deep Diving"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "AI Uprawnienia Confined Water",
      "page": 122,
      "quote": "Mogą także prowadzić zajęcia teoretyczne i ćwiczenia praktyczne in basenie... programu Open Water Diver pod pośrednim nadzorem"
    }
  },
  {
    "question": "W przypadku profesjonalisty, który pozostawał nieaktywny przez okres od 2 do 5 lat, jedną z opcji odnowienia statusu jest:",
    "options": [
          "Ponowne przejście kursu ITC",
          "Współnauczenie przynajmniej jednego (1) programu Open Water Diver",
          "Jedynie opłacenie zaległych składek",
          "Zaliczenie egzaminu instruktorskiego (IE)"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Nieaktywny status 2-5 lat",
      "page": 127,
      "quote": "If Profesjonalista SSI pozostawał nieaktywny przez 2 do 5 lat... Współnauczać przynajmniej jeden (1) program Open Water Diver"
    }
  },
  {
    "question": "Jaki jest maksymalny współczynnik kursant-instruktor na wodach otwartych, jeśli w grupie znajduje się kursant poniżej 12 roku życia?",
    "options": [
          "2:1",
          "4:1",
          "6:1",
          "8:2"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Współczynnik dla dzieci poniżej 12 lat",
      "page": 53,
      "quote": "Jeśli jakikolwiek kursant... ma mniej niż 12 lat, maksymalny współczynnik... na wodach otwartych... wynosi: 4:1"
    }
  },
  {
    "question": "Przed otrzymaniem certyfikatu Referral Diver, kursant musi ukończyć:",
    "options": [
          "Wszystkie zajęcia w akwenie ograniczonym oraz oceny umiejętności z OWD",
          "Tylko teorię i egzamin końcowy",
          "Przynajmniej dwa nurkowania w wodach otwartych",
          "Całość szkolenia z wyjątkiem egzaminu końcowego"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Referral Diver Wymagania",
      "page": 51,
      "quote": "Przed otrzymaniem certyfikatu Referral Diver, kursant must: Ukończyć wszystkie zajęcia in basenie/ograniczonym akwenie oraz oceny umiejętności"
    }
  },
  {
    "question": "Ile nurkowań szkoleniowych w wodach otwartych musi zaliczyć nurek ze stopniem Indoor Diver, aby podwyższyć kwalifikacje do Open Water Diver?",
    "options": [
          "1 nurkowanie",
          "2 nurkowania",
          "4 nurkowania",
          "6 nurkowań"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Indoor upgrade do OWD",
      "page": 53,
      "quote": "Poziom Indoor Diver może zostać podwyższony... po... przeprowadzeniu: 4 nurkowań szkoleniowych in wodach otwartych"
    }
  },
  {
    "question": "Jaki jest minimalny wiek wymagany do udziału w programie Advanced Adventurer?",
    "options": [
          "10 lat",
          "12 lat",
          "14 lat",
          "15 lat"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Advanced Adventurer",
      "page": 61,
      "quote": "Minimalny wiek do zakwalifikowania do programu Advanced Adventurer... Wynosi 12 lat"
    }
  },
  {
    "question": "Który z wymienionych Profesjonalistów SSI może prowadzić program SSI Dive Guide?",
    "options": [
          "Aktywny Assistant Instructor",
          "Wyłącznie Instructor Trainer",
          "Aktywny Specialty Instructor Dive Guide (lub wyższy)",
          "Każdy nurek ze stopniem Master Diver"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Kto może uczyć Dive Guide",
      "page": 130,
      "quote": "Program SSI Dive Guide może być nauczany przez: Aktywny status Specialty Instructor Dive Guide lub wyższy."
    }
  },
  {
    "question": "Jaką liczbę certyfikatów musi wydać instruktor, aby ubiegać się o stopień Master Instructor?",
    "options": [
          "150",
          "200",
          "250",
          "500"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagania Master Instructor",
      "page": 133,
      "quote": "Wydać przynajmniej 200 certyfikatów"
    }
  },
  {
    "question": "Maksymalna głębokość dla programu Indoor Diving, określona w standardach dla specjalnych obiektów, wynosi:",
    "options": [
          "4 metry",
          "5 metrów",
          "6 metrów",
          "10 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Głębokość Indoor Diving",
      "page": 45,
      "quote": "Program Indoor Diving wymaga: Obiektu o minimalnej głębokości pięciu (5) metrów"
    }
  },
  {
    "question": "Jaki jest limit głębokości dla nauczania umiejętności awaryjnego wynurzania w wodach otwartych?",
    "options": [
          "5 metrów lub mniej",
          "9 metrów lub mniej",
          "10 metrów lub mniej",
          "12 metrów lub mniej"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Wynurzenia awaryjne wody otwarte",
      "page": 35,
      "quote": "Maksymalna głębokość nauczania umiejętności awaryjnego wynurzania... wynosi: Dziesięć (10) metrów lub mniej"
    }
  },
  {
    "question": "Zgodnie z definicją standardów SSI, \"przepłynięcie przez przestrzenie zamknięte\" nie może być dłuższe niż:",
    "options": [
          "5 metrów",
          "10 metrów",
          "15 metrów",
          "20 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Przestrzenie zamknięte",
      "page": 36,
      "quote": "przepłynięcia przez przestrzenie zamknięte... Maksymalna długość wynosi dziesięć (10) metrów"
    }
  },
  {
    "question": "Kiedy musi zostać przeprowadzona ocena sprawności w wodzie dla kursantów poziomu podstawowego?",
    "options": [
          "Zanim wezmą udział w jakimkolwiek szkoleniu w wodach otwartych",
          "Po pierwszym nurkowaniu w wodach otwartych",
          "Przed przystąpieniem do egzaminu końcowego",
          "Dowolnym momencie przed certyfikacją"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Ocena sprawności w wodzie",
      "page": 3,
      "quote": "Ocena sprawności in wodzie must być przeprowadzona, zanim... Wezmą udział in jakimkolwiek szkoleniu in wodach otwartych"
    }
  },
  {
    "question": "Kto może prowadzić program Try Scuba (zgodnie z listą uprawnień w standardach)?",
    "options": [
          "Aktywny Dive Guide",
          "Aktywny Divemaster",
          "Wyłącznie Open Water Instructor",
          "Każdy nurek ze stopniem Master Diver"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba - Kto prowadzi",
      "page": 46,
      "quote": "Program Try Scuba może być przeprowadzony przez aktywnego: Divemastera"
    }
  },
  {
    "question": "Ile nurkowań musi mieć zalogowanych kandydat na stopień Open Water Instructor przed przystąpieniem do Instructor Evaluation?",
    "options": [
          "75 nurkowań",
          "100 nurkowań",
          "125 nurkowań",
          "150 nurkowań"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagania OWI",
      "page": 129,
      "quote": "kandydat na stopień Open Water Instructor must: Zalogować przynajmniej 125 nurkowań in wodach otwartych"
    }
  },
  {
    "question": "Co musi posiadać kursant uczestniczący w programie Wiedzy Nurkowej (np. Science of Diving)?",
    "options": [
          "Certyfikat Open Water Diver",
          "Przynajmniej 12 lat",
          "Zalogowane 24 nurkowania",
          "Certyfikat Divemaster"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Wiedza nurkowa - Wymogi",
      "page": 66,
      "quote": "Specjalności z zakresu Wiedzy Nurkowej... muszą posiadać przynajmniej: co najmniej 12 lat"
    }
  },
  {
    "question": "Pierwsze obowiązkowe nurkowanie szkoleniowe w każdym programie specjalizacji SSI musi być:",
    "options": [
          "Nadzorowane pośrednio",
          "Nadzorowane bezpośrednio",
          "Wykonane wyłącznie z asystentem",
          "Poprzedzone sesją w akwenie ograniczonym"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Specjalizacje - Nadzór",
      "page": 55,
      "quote": "Pierwsze obowiązkowe nurkowanie szkoleniowe... must być: Bezpośrednio nadzorowane"
    }
  },
  {
    "question": "Jaki stopień musi posiadać kandydat (niebędący medykiem), aby zostać React Right Instructor?",
    "options": [
          "Aktywny Divemaster",
          "Assistant Instructor",
          "Open Water Instructor",
          "Divemaster Instructor"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "React Right Instructor",
      "page": 135,
      "quote": "jaki jest minimalny wymagany stopień... aby zostać React Right Instructor? Aktywny Divemaster"
    }
  },
  {
    "question": "Na jaką głębokość w wodzie słonej należy zejść, aby ciśnienie wzrosło o 1 bar?",
    "options": [
          "9,8 metra",
          "10 metrów",
          "10,3 metra",
          "12 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Fizyka nurkowania",
      "section": "Ciśnienie",
      "page": 20,
      "quote": "10 metrów wody słonej (MSW) = 1 bar"
    }
  },
  {
    "question": "Przerwanie ciągłości tkanki płucnej może nastąpić przy wynurzeniu z głębokości zaledwie:",
    "options": [
          "0,8 metra",
          "1,0 metra",
          "1,2 metra",
          "1,5 metra"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Fizjologia nurkowania",
      "section": "Urazy ciśnieniowe płuc",
      "page": 24,
      "quote": "Przerwanie ciągłości tkanki płucnej... wynurzenia z głębokości nie większej niż: 1,2 metra"
    }
  },
  {
    "question": "Jaka jest nowa grupa powtórzeniowa po przerwie powierzchniowej 2h 45min, jeśli grupa wyjściowa to D?",
    "options": [
          "Grupa A",
          "Grupa B",
          "Grupa C",
          "Pozostaje Grupa D"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Teoria dekompresji",
      "section": "Tabela przerw powierzchniowych",
      "page": 26,
      "quote": "Po przerwie powierzchniowej trwającej 2 godziny 45 minut rozpoczętej z grupą powtórzeniową D... nowa grupa... A"
    }
  },
  {
    "question": "Jakie jest powierzchniowe zużycie powietrza (SAC) nurka: 10m głębokości (woda słona), 10 min czasu, zużycie 50 bar, butla 10l?",
    "options": [
          "20 l/min",
          "25 l/min",
          "30 l/min",
          "35 l/min"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Fizyka nurkowania",
      "section": "Zużycie gazu (SAC)",
      "page": 21,
      "quote": "SAC nurka... 10m, 10 min, 50 bar, 10l... 25 litrów / minutę"
    }
  },
  {
    "question": "MOD dla Nitroksu 40% przy ppO2 1.4 bar w wodzie słonej wynosi:",
    "options": [
          "20 metrów",
          "25 metrów",
          "30 metrów",
          "35 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Fizyka nurkowania",
      "section": "Maksymalna głębokość operacyjna (MOD)",
      "page": 22,
      "quote": "MOD dla mieszaniny 40% nitroksu in oceanie wyniesie: 25 metrów"
    }
  },
  {
    "question": "Przystanek bezpieczeństwa zalecany przez SSI to:",
    "options": [
          "3 metry / 3-5 minut",
          "5 metrów / 1-3 minuty",
          "5 metrów / 3-5 minut",
          "6 metrów / 3 minuty"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Teoria dekompresji",
      "section": "Procedura przystanków",
      "page": 27,
      "quote": "Rekomendowana głębokość i czas... na przystanku bezpieczeństwa... 5 metrów / 3-5 minut"
    }
  },
  {
    "question": "Zjawisko \"ucisku\" (squeeze) występuje, gdy:",
    "options": [
          "Ciśnienie wewnątrz przestrzeni jest wyższe niż na zewnątrz",
          "Ciśnienie na zewnątrz jest wyższe niż wewnątrz zamkniętej przestrzeni",
          "Ciśnienie gazu jest równe ciśnieniu otoczenia",
          "Nurek wykonuje zbyt gwałtowne wydechy"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Fizjologia nurkowania",
      "section": "Barotrauma (squeeze)",
      "page": 25,
      "quote": "uciskiem (squeezem) zdarza się, kiedy: Ciśnienie na zewnątrz zamkniętej przestrzeni powietrznej jest wyższe niż ciśnienie in niej panujące"
    }
  },
  {
    "question": "Ile nurkowań i jakich specjalności wymaga stopień uznaniowy Specialty Diver?",
    "options": [
          "2 specjalności i 12 nurkowań",
          "2 specjalności i 24 nurkowania",
          "4 specjalności i 24 nurkowania",
          "4 specjalności i 50 nurkowań"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Karty uznaniowe - Specialty Diver",
      "page": 63,
      "quote": "Specialty Diver: ukończone dwa programy Specjalizacji i zalogowanych 12 nurkowań"
    }
  },
  {
    "question": "W jakim czasie instruktor ma obowiązek certyfikować kursanta po spełnieniu wszystkich wymagań szkoleniowych?",
    "options": [
          "W ciągu 24 godzin",
          "W ciągu 7 dni",
          "W ciągu 14 dni",
          "W ciągu 30 dni"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Procedura certyfikacji",
      "page": 12,
      "quote": "Trzeba go certyfikować in ciągu siedmiu (7) dni"
    }
  },
  {
    "question": "Jaki dokument jest absolutnie wymagany przed jakimikolwiek zajęciami w wodzie?",
    "options": [
          "Certyfikat ukończenia e-learningu",
          "Ważne oświadczenie medyczne/kwestionariusz",
          "Dowód ubezpieczenia nurkowego",
          "Karta uznaniowa Try Scuba"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Oświadczenie medyczne",
      "page": 13,
      "quote": "Aktualne Oświadczenie medyczne... jest wymagane: Przed jakimikolwiek zajęciami in wodzie"
    }
  },
  {
    "question": "Jaka jest wymagana odległość przepłynięcia pod wodą w teście sprawności fizycznej kandydata na profesjonalistę?",
    "options": [
          "15 metrów",
          "25 metrów",
          "50 metrów",
          "100 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Testy sprawnościowe w wodzie",
      "page": 121,
      "quote": "Ocena sprawności fizycznej kandydata... Przepłynięcie pod wodą odcinka o długości 50 metrów"
    }
  },
  {
    "question": "Ile nurkowań musi mieć zalogowanych kandydat, aby ubiegać się o stopień Master Instructor?",
    "options": [
          "150",
          "200",
          "250",
          "500"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Master Instructor - Wymagania",
      "page": 133,
      "quote": "Mieć zalogowanych przynajmniej 250 nurkowań in wodach otwartych"
    }
  },
  {
    "question": "O ile osób można zwiększyć współczynnik kursant-instruktor w programie Open Water Diver po dodaniu jednego certyfikowanego asystenta?",
    "options": [
          "O 1 osobę",
          "O 2 osoby",
          "O 4 osoby",
          "Nie można zwiększać współczynników"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Zwiększanie współczynnika",
      "page": 54,
      "quote": "Certyfikowani asystenci... mogą podwyższyć współczynnik ilościowy in wodzie"
    }
  },
  {
    "question": "Certyfikat Advanced Open Water Diver w SSI wymaga:",
    "options": [
          "5 nurkowań przygodowych",
          "4 specjalności i 24 zalogowanych nurkowań",
          "5 specjalności i 50 nurkowań",
          "2 specjalności i 12 nurkowań"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Karty uznaniowe - AOWD",
      "page": 63,
      "quote": "Advanced Open Water Diver: ukończone cztery programy Specjalizacji i zalogowane 24 nurkowania"
    }
  },
  {
    "question": "Program Scuba Skills Update może być prowadzony dla niecertyfikowanego kursanta OWD, jeśli:",
    "options": [
          "Nie może być prowadzony dla niecertyfikowanych",
          "Zaliczył on wszystkie nurkowania szkoleniowe w basenie",
          "Zdał on egzamin końcowy OWD",
          "Ma on co najmniej 18 lat"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "SSU - Dla niecertyfikowanych",
      "page": 60,
      "quote": "kursant Open Water Diver może uczestniczyć in Scuba Skills Update. Prawda, jeśli zaliczył wszystkie nurkowania szkoleniowe in basenie"
    }
  },
  {
    "question": "Maksymalny czas przepłynięcia z holowaniem nurka w teście sprawności fizycznej kandydata na profesjonalistę to:",
    "options": [
          "Poniżej 5 minut",
          "Poniżej 8 minut",
          "Poniżej 10 minut",
          "Poniżej 15 minut"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Sprawność fizyczna - Holowanie",
      "page": 121,
      "quote": "ratowania nurka z holowaniem... in czasie poniżej osiem (8) minut"
    }
  },
  {
    "question": "Dokumentacja szkolenia (Training Records) musi być prowadzona w celu:",
    "options": [
          "Wyłącznie celów marketingowych",
          "Zapewnienia standardów QMS i śledzenia postępów kursanta",
          "Uzyskania zniżek w Centrali SSI",
          "Potwierdzenia zakupu sprzętu"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "System QMS i Dokumenty",
      "page": 12,
      "quote": "Ten system zostanie omówiony... zapewnia kursantom wysokiej jakości szkolenie"
    }
  },
  {
    "question": "Która ze specjalności NIE zalicza się do \"Open Water Specialties\" (Wód Otwartych) według standardów w tekście źródłowym?",
    "options": [
          "Dry Suit Diving",
          "Navigation",
          "Deep Diving",
          "Wreck Diving"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Kategorie specjalizacji",
      "page": 55,
      "quote": "Która z poniższych specjalności NIE zalicza się do... Open Water Specialty... Wreck Diving"
    }
  },
  {
    "question": "W teście wstępnym (Pre-test) dla kandydatów ITC, wymagany wynik zaliczenia każdej sekcji to:",
    "options": [
          "80%",
          "90%",
          "100%",
          "85%"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "ITC - Testy wstępne",
      "page": 128,
      "quote": "Każdą część testu wstępnego do programu musisz zaliczyć z wynikiem 100%"
    }
  }
,
  {
    "question": "Jaki jest maksymalny dopuszczalny współczynnik kursant-instruktor podczas nurkowań szkoleniowych w programie Deep Diving na głębokościach przekraczających 30 metrów?",
    "options": [
          "8:1",
          "6:1",
          "4:1",
          "2:1"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Specjalizacje na Wodach Otwartych",
      "section": "Deep Diving",
      "page": 43,
      "quote": "Nurkowania na głębokość poniżej 30 metrów - Współczynnik kursant-instruktor: 4:1"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jakie wymagania uprawnień musi spełnić instruktor bezpośrednio nadzorujący szkolenie w wodzie w ramach specjalizacji Dry Suit Diving?",
    "options": [
          "Aktywny status Assistant Instructor posiadający certyfikat nurka Dry Suit.",
          "Aktywny status SSI Open Water Instructor.",
          "Aktywny status SSI Dry Suit Diving Specialty Instructor.",
          "Status Divemaster Instructor."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Suche skafandry",
      "page": 51,
      "quote": "instruktor bezpośrednio nadzorujący program musi posiadać aktywny status SSI Dry Suit Diving Specialty Instructor"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Ile wynosi maksymalny dopuszczalny limit głębokości dla kursantów w wieku 12-14 lat podczas nurkowania szkoleniowego Deep Diving w programie Advanced Open Water Diver?",
    "options": [
          "12 metrów",
          "18 metrów",
          "21 metrów",
          "30 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "VI. Limity głębokości",
      "page": 63,
      "quote": "Maksymalny limit głębokości na wodach otwartych dla kursantów w wieku od 12 do 14 lat podczas Nurkowania Szkoleniowego na Wodach Otwartych Deep Diving wynosi 21 metrów"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "W przypadku jednoczesnego prowadzenia trzech (3) programów specjalizacji rekreacyjnych, jaka jest minimalna wymagana liczba nurkowań szkoleniowych na wodach otwartych?",
    "options": [
          "3 nurkowania",
          "4 nurkowania",
          "5 nurkowań",
          "6 nurkowań"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "IV. Łączenie programów",
      "page": 55,
      "quote": "Jeżeli trzy (3) programy specjalizacji są prowadzone jednocześnie, należy przeprowadzić co najmniej cztery (4) nurkowania szkoleniowe"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Który z poniższych warunków musi zostać spełniony, aby kursant poziomu podstawowego mógł korzystać z suchego skafandra podczas szkolenia na wodach otwartych?",
    "options": [
          "Musi posiadać własny, dopasowany suchy skafander.",
          "Musi ukończyć sesję w basenie/ograniczonym akwenie z programu Dry Suit Diving przed wodami otwartymi.",
          "Musi mieć zalogowane minimum 10 nurkowań w piance.",
          "Musi posiadać zaświadczenie od producenta skafandra."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Suche skafandry",
      "page": 51,
      "quote": "Sesja szkoleniowa na basenie/ograniczonym akwenie dla specjalizacji Dry Suit Diving musi zostać ukończona przed jakimkolwiek szkoleniem na wodach otwartych"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaka procedura jest wymagana wyłącznie dla certyfikacji Enriched Air Nitrox 40, a nie jest obowiązkowa dla Nitrox 32?",
    "options": [
          "Zaliczenie egzaminu końcowego na 90%.",
          "Ukończenie zajęć aplikacji praktycznej określonych w podręczniku instruktorskim.",
          "Wykonanie dwóch nurkowań szkoleniowych na głębokości 30 metrów.",
          "Ukończenie programu Science of Diving."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Enriched Air Nitrox",
      "section": "IX. Wymagania (b)",
      "page": 71,
      "quote": "Enriched Air Nitrox 40 (...) Ukończyć zajęć aplikacji praktycznej określone w podręczniku instruktorskim"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Które dwa nurkowania szkoleniowe na wodach otwartych są zdefiniowane jako obowiązkowe do ukończenia programu Advanced Open Water Diver?",
    "options": [
          "Perfect Buoyancy i Navigation.",
          "Deep Diving i Night & Limited Visibility.",
          "Deep Diving i Navigation.",
          "Wreck Diving i Deep Diving."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "IX. Wymagania (a)",
      "page": 62,
      "quote": "Obowiązkowe nurkowania: Ukończyć Nurkowanie (...) Deep Diving 1 (...) Ukończyć Nurkowanie (...) Nawigacja 1"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest zalecany limit głębokości dla nurka posiadającego certyfikat Junior Advanced Open Water Diver?",
    "options": [
          "12 metrów",
          "18 metrów",
          "21 metrów",
          "30 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "X. Certyfikacja",
      "page": 63,
      "quote": "Kursanci w wieku poniżej 15 lat otrzymują certyfikat Junior Advanced Open Water Diver (...) w ramach zalecanego limitu głębokości 21 metrów"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "W jaki sposób nurek Junior Advanced Open Water Diver może uzyskać limity głębokości dla dorosłych (30 m) po ukończeniu 15. roku życia?",
    "options": [
          "Poprzez automatyczną aktualizację w systemie MySSI.",
          "Poprzez ukończenie pełnej specjalizacji Deep Diving.",
          "Wykonując nurkowanie uaktualniające na głębokości od 21 do 30 metrów z Open Water Instructor.",
          "Zdając ponownie egzamin końcowy z programu Advanced Open Water Diver."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "X. Certyfikacja",
      "page": 63,
      "quote": "kursanci mogą przejść do limitów głębokości dla dorosłych, wykonując nurkowanie uaktualniające na głębokości od 21 do 30 metrów z Open Water Instructor"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest minimalny wiek kandydata, aby mógł on zostać zakwalifikowany do udziału w programie specjalizacji Navigation?",
    "options": [
          "8 lat",
          "10 lat",
          "12 lat",
          "15 lat"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Navigation",
      "section": "III. Wymagania wstępne",
      "page": 75,
      "quote": "Minimalny wiek | 10 lat"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Ile wynosi zalecany czas trwania (godziny ukończenia) dla programu specjalizacji Photo & Video?",
    "options": [
          "3-6 godzin",
          "5-10 godzin",
          "10-15 godzin",
          "Powyżej 15 godzin"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Photo & Video",
      "section": "IV. Czas trwania",
      "page": 78,
      "quote": "Zalecane godziny ukończenia | 5-10"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest maksymalny limit głębokości na wodach otwartych dla nurków in wieku 10 i 11 lat uczestniczących w programie Altitude Diving?",
    "options": [
          "5 metrów",
          "12 metrów",
          "18 metrów",
          "30 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Altitude Diving",
      "section": "VI. Limity głębokości",
      "page": 81,
      "quote": "Maksymalny limit głębokości wody otwartej dla 10- i 11-latków | 12 metrów"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Zgodnie z celami programu Science of Diving, który z wymienionych tematów NIE jest częścią tego szkolenia?",
    "options": [
          "Fizyka nurkowania i fizjologia.",
          "Techniki nawigacji podwodnej.",
          "Teoria dekompresji i środowisko wodne.",
          "Sprzęt nurkowy."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Science of Diving",
      "section": "I. Cel",
      "page": 66,
      "quote": "fizyki nurkowania, fizjologii nurkowania, teorii dekompresji, środowiska wodnego i sprzętu nurkowego"
    },
    "category": "Fizyka i Fizjologia"
  },
  {
    "question": "Ile nurkowań szkoleniowych na wodach otwartych musi wykonać kursant, aby ukończyć program specjalizacji Deep Diving?",
    "options": [
          "Co najmniej jedno (1)",
          "Co najmniej dwa (2)",
          "Co najmniej trzy (3)",
          "Dokładnie cztery (4)"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Deep Diving",
      "section": "IX. Wymagania do ukończenia kursu",
      "page": 75,
      "quote": "Kursant musi wykonać co najmniej trzy (3) nurkowania szkoleniowe w Wodach Otwartych"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest wymagany zakres głębokości dla trzeciego (3.) nurkowania szkoleniowego w programie Deep Diving?",
    "options": [
          "18 do 30 metrów",
          "24 do 30 metrów",
          "30 do 40 metrów",
          "Dokładnie 40 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Deep Diving",
      "section": "VI. Limity głębokości",
      "page": 75,
      "quote": "Nurkowanie 3 | 30 do 40 metrów"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jakie są minimalne wymagania wstępne dla kursanta chcącego rozpocząć program Diver Stress & Rescue?",
    "options": [
          "Wiek 15 lat i 20 nurkowań.",
          "Wiek 12 lat i certyfikat Referral Diver (lub równoważny).",
          "Wiek 10 lat i certyfikat Open Water Diver.",
          "Wiek 18 lat i certyfikat Divemaster."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Diver Stress & Rescue",
      "section": "III. Wymagania wstępne",
      "page": 80,
      "quote": "Minimalny wiek | 12 lat (...) Referral Diver"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest maksymalny dopuszczalny limit głębokości dla ćwiczenia \"Ratowanie nieprzytomnego nurka\" w programie Diver Stress & Rescue?",
    "options": [
          "5 metrów",
          "9 metrów",
          "12 metrów",
          "18 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Diver Stress & Rescue",
      "section": "VI. Limity głębokości",
      "page": 80,
      "quote": "Maksymalny limit głębokości nurkowania na Wodach Otwartych | Ratowanie nieprzytomnego nurka na głębokości 9 metrów"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Które programy specjalizacji SSI są zdefiniowane jako nieposiadające obowiązkowego szkolenia w wodzie?",
    "options": [
          "Perfect Buoyancy i Equipment Techniques.",
          "Ecology i Diving Knowledge (np. Science of Diving).",
          "Waves, Tides & Currents i Navigation.",
          "Night & Limited Visibility i Boat Diving."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "I. Specjalizacje nieobejmujące nurkowania",
      "page": 55,
      "quote": "Programy specjalizacji Ecology i Diving Knowledge nie mają obowiązkowego szkolenia w wodzie"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Koniec: Kiedy może zostać wydany certyfikat specjalizacji, jeśli program ten jest łączony z kursem Open Water Diver?",
    "options": [
          "Natychmiast po zaliczeniu ćwiczeń specjalizacji.",
          "Dopiero po wydaniu certyfikatu Open Water Diver.",
          "Po zalogowaniu 24 nurkowań przez kursanta.",
          "W zamian za certyfikat Open Water Diver."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "IV. Łączenie programów",
      "page": 55,
      "quote": "Certyfikat specjalizacji może być wydany dopiero po wydaniu certyfikatu Open Water Diver"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaką kartę uznaniową może wydać Centrum Szkoleniowe, jeśli kursant ukończył 3 nurkowania szkoleniowe w ramach programu Advanced Open Water Diver, ale nie ukończył całego kursu?",
    "options": [
          "Specialty Diver Card.",
          "Advanced Specialty Diver Card.",
          "Advanced Open Water Dive Recognition Card.",
          "Referral Diver Card."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "XII. Wydawanie karty uznaniowej",
      "page": 63,
      "quote": "Centra Szkoleniowe mogą wydać 'Advanced Open Water Dive Recognition Card' dokumentującą do trzech (3) nurkowań"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Ile zalogowanych nurkowań na wodach otwartych oraz ile godzin czasu pod wodą jest wymagane, aby rozpocząć program Divemaster?",
    "options": [
          "25 nurkowań / 15 godzin.",
          "40 nurkowań / 25 godzin.",
          "50 nurkowań / 32 godziny.",
          "60 nurkowań / 40 godzin."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Certyfikacja Dive Guide'a | Divemaster",
      "page": 123,
      "quote": "Co najmniej 40 zalogowanych nurkowań na Wodach Otwartych, trwających co najmniej 25 godzin"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Aby uzyskać certyfikat Divemaster, kandydat musi udokumentować co najmniej 60 nurkowań o łącznym czasie trwania minimum:",
    "options": [
          "32 godziny.",
          "40 godzin.",
          "50 godzin.",
          "100 godzin."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Dive Guide do Divemaster",
      "page": 123,
      "quote": "Zalogować co najmniej 60 nurkowań na wodach otwartych o łącznej długości 40 godzin lub więcej"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jakie dodatkowe wymaganie edukacyjne musi spełnić SSI Dive Guide, aby dokonać upgrade'u do poziomu Divemaster?",
    "options": [
          "Ukończyć 100 nurkowań.",
          "Zaliczyć egzamin końcowy programu Science of Diving.",
          "Odbyć staż asystencki przy 3 kursach OWD.",
          "Posiadać certyfikat Dry Suit Diving Instructor."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Dive Guide do Divemaster - Upgrade",
      "page": 123,
      "quote": "Zaliczyć egzamin końcowy programu Science of Diving"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Zgodnie z wymaganiami wstępnymi dla kandydata, jaki jest minimalny wiek uprawniający do rozpoczęcia programu Dive Guide/Divemaster?",
    "options": [
          "15 lat",
          "18 lat",
          "20 lat",
          "21 lat"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Certyfikacja Dive Guide'a | Divemaster",
      "page": 123,
      "quote": "Minimalny wiek | 15 lat"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Zgodnie ze standardem ISO 24801-3 (Upgrade), jaki jest minimalny wiek wymagany do uzyskania certyfikacji na poziomie Divemaster?",
    "options": [
          "15 lat",
          "16 lat",
          "18 lat",
          "21 lat"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Dive Guide do Divemaster - ISO",
      "page": 123,
      "quote": "Minimalny wiek | 18 lat"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "W jaki sposób kandydat na Divemastera może spełnić wymagania dotyczące specjalizacji Deep, Navigation oraz Night & Limited Visibility?",
    "options": [
          "Wyłącznie poprzez posiadanie certyfikatów tych specjalizacji.",
          "Posiadając certyfikaty LUB udowadniając doświadczenie (min. 5 nurkowań w każdej z nich).",
          "Wyłącznie poprzez zaliczenie egzaminów teoretycznych z tych działów.",
          "Nie są one wymagane na tym poziomie."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Certyfikacja Dive Guide'a | Divemaster",
      "page": 123,
      "quote": "posiadać następujące certyfikaty SSI lub równoważne (...) lub udowodnić doświadczenie, tj. co najmniej pięć (5) zalogowanych nurkowań"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Który z wymienionych programów może prowadzić aktywny Assistant Instructor, ale nie posiada do tego uprawnień Divemaster?",
    "options": [
          "Dive Guide.",
          "Try Scuba (w środowisku basenu/ograniczonego akwenu).",
          "Scuba Skills Update (dla nurków certyfikowanych).",
          "Science of Diving."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba - Prowadzący",
      "page": 46,
      "quote": "Program Try Scuba może prowadzić aktywny Instruktor Asystujący (Assistant Instructor)"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Kto może pełnić rolę certyfikowanego asystenta w celu zwiększenia współczynników kursant-instruktor w programach specjalizacji?",
    "options": [
          "Dowolny nurek Master Diver.",
          "Profesjonalista SSI posiadający certyfikat na poziomie nurka dla danej specjalizacji.",
          "Wyłącznie inny aktywny instruktor.",
          "Każdy pracownik Centrum Szkoleniowego SSI."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Korzystanie z pomocy certyfikowanych asystentów",
      "page": 122,
      "quote": "W przypadku programów specjalizacji certyfikowany asystent musi posiadać certyfikat na poziomie nurka dla danego programu"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest minimalny wynik procentowy wymagany do zaliczenia egzaminów końcowych na poziomach Professional SSI?",
    "options": [
          "80%",
          "85%",
          "90%",
          "100%"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Ocena wiedzy i umiejętności",
      "page": 128,
      "quote": "Minimalny wynik dla programów na poziomie Professional | 90%"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki jest okres ważności dowodu szkolenia z RKO, Pierwszej Pomocy i Podawania Tlenu dla kandydata na poziomy profesjonalne?",
    "options": [
          "1 rok.",
          "2 lata.",
          "5 lat.",
          "Bezterminowo."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Dokumentacja szkolenia - Kandydaci",
      "page": 121,
      "quote": "Dowód odbycia szkolenia z RKO / pierwszej pomocy / tlenowej w ciągu ostatnich dwóch (2) lat"
    },
    "category": "Fizyka i Fizjologia"
  },
  {
    "question": "Przez jaki minimalny okres Centrum Szkoleniowe SSI musi przechowywać Dokumentację Szkolenia (Training Record) kursanta?",
    "options": [
          "2 lata.",
          "5 lat.",
          "10 lat.",
          "20 lat."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Procedury certyfikacji",
      "page": 12,
      "quote": "Dokumentacja szkolenia musi być przechowywana przez Centrum Szkoleniowe przez co najmniej dziesięć (10) lat"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki status posiada Profesjonalista SSI, który uiścił składkę roczną, ale nie jest afiliowany do aktywnego Centrum Szkoleniowego?",
    "options": [
          "Active.",
          "Inactive.",
          "Canceled.",
          "Retired."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Status SSI Professional",
      "page": 126,
      "quote": "nie jest afiliowany do posiadającego aktywnego statusu Centrum Szkoleniowego SSI"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Który stopień instruktorski jest minimalnie wymagany, aby przeprowadzić proces przywracania statusu dla wszystkich certyfikacji zawodowych płetwonurków rekreacyjnych?",
    "options": [
          "Divemaster Instructor.",
          "Assistant Instructor Trainer.",
          "Instructor Trainer.",
          "Open Water Instructor."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Przywrócenie Aktywnego Statusu",
      "page": 127,
      "quote": "Instruktor Trainer o aktywnym statusie może ukończyć proces dla wszystkich certyfikacji zawodowych płetwonurków rekreacyjnych"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Co dzieje się ze statusem Profesjonalisty SSI, który brał udział w zdarzeniu prowadzącym do śmierci uczestnika pod jego bezpośrednim nadzorem?",
    "options": [
          "Zostaje wydalony (Expelled).",
          "Automatycznie otrzymuje status \"Wstrzymany administracyjnie\" (Administrative Hold).",
          "Zostaje przeniesiony w stan spoczynku (Retired).",
          "Zachowuje status aktywny do czasu zakończenia śledztwa."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Status SSI Professional - Zawieszenia",
      "page": 126,
      "quote": "zaangażowany w wydarzenie prowadzące do śmierci uczestnika (...) automatycznie otrzymuje status 'Wstrzymany administracyjnie'"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Kto może pełnić rolę certyfikowanego asystenta podczas prowadzenia programu Divemaster?",
    "options": [
          "Divemaster o aktywnym statusie.",
          "Aktywny Assistant Instructor lub Profesjonalista o wyższych uprawnieniach.",
          "Dowolny nurek Master Diver.",
          "Wyłącznie Instructor Trainer."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Korzystanie z pomocy certyfikowanych asystentów",
      "page": 122,
      "quote": "SSI Assistant Instructor z aktywnym statusem może działać jako certyfikowany asystent programu Divemaster"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Na której stronie w spisie treści standardów SSI 2025 znajduje się sekcja dotycząca Programów Classified Diving?",
    "options": [
          "83",
          "119",
          "142",
          "172"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wstęp i struktura standardów",
      "section": "Spis treści",
      "page": 142,
      "quote": "Programy Classified Diving 142"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Zgodnie z wymaganiami dla Pełnego Systemu Nurkowego Sidemount, jakiej długości powinien być wąż automatu z drugim stopniem, z którego nurek oddycha jako głównego?",
    "options": [
          "50-75 cm",
          "100-150 cm",
          "1.8-2.1 metra",
          "Minimum 3 metry"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Konfiguracje sprzętowe",
      "section": "Nurkowanie Sidemount",
      "page": 37,
      "quote": "Jeden automat z drugim stopniem z wężem długości 1.8-2.1 metra"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "W konfiguracji Sidemount, wąż o długości 50-75 cm musi być wyposażony w:",
    "options": [
          "Karabinek tłokowy.",
          "Pętlę do zawieszenia automatu na szyi (neckloop).",
          "Zawór odcinający.",
          "Szybkozłącze inflatora."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Konfiguracje sprzętowe",
      "section": "Nurkowanie Sidemount - Elementy",
      "page": 37,
      "quote": "wężem 50-75 cm, z pętlą do zawieszenia automatu na szyi"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "W konfiguracji Sidemount, każda używana butla musi posiadać:",
    "options": [
          "Jeden zbiorczy manometr.",
          "Jeden, podłączony do butli lewej.",
          "Osobny manometr (każda butla musi być wyposażona w manometr).",
          "Transmitery i manometr w konsoli."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Konfiguracje sprzętowe",
      "section": "Nurkowanie Sidemount - Manometry",
      "page": 37,
      "quote": "każda butla musi być wyposażona w manometr"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest maksymalny dopuszczalny limit ppO2 podczas fazy dekompresji w programie Decompression Diving?",
    "options": [
          "1.1 bar",
          "1.4 bar",
          "1.5 bar",
          "1.6 bar"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Decompression Diving - Limity",
      "page": 36,
      "quote": "Podczas szkolenia programu Decompression Diving ppO2 dla fazy dekompresji nie może przekroczyć 1.6 bar"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "W programie Decompression Diving, jakie urządzenie sygnalizacyjne jest wymagane do wypuszczania z głębokości?",
    "options": [
          "Boja typu \"prosiak\".",
          "Czerwona boja sygnalizacyjna (DSMB) oraz szpulka lub kołowrotek.",
          "Dowolna flaga nurkowa.",
          "Gwizdek o dużym natężeniu dźwięku."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Decompression Diving - Sprzęt",
      "page": 36,
      "quote": "Jedno urządzenie sygnalizacyjne do wypuszczania z głębokości (zalecana jest czerwona boja sygnalizacyjna (...) Szpulka lub kołowrotek"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jak definiowany jest \"dystans pływania\" (odległość liniowa) w nurkowaniu w przestrzeniach zamkniętych?",
    "options": [
          "Odległość od wejścia do najdalszego punktu penetracji.",
          "Suma odległości pionowej i poziomej, którą nurek musi pokonać do powierzchni.",
          "Maksymalna długość liny poręczowej.",
          "Odległość między partnerami nurkowymi."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Miejsca szkoleń i limity głębokości",
      "section": "Przestrzenie zamknięte - definicje",
      "page": 36,
      "quote": "Dystans pływania definiowany jest jako suma odległości pionowej i poziomej, którą nurek musi pokonać"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Ile wynosi maksymalna odległość liniowa (dystans pływania) dopuszczalna w programie Cavern & Cenote Diving?",
    "options": [
          "30 metrów",
          "40 metrów",
          "60 metrów",
          "100 metrów"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Miejsca szkoleń i limity głębokości",
      "section": "Cavern & Cenote Diving",
      "page": 36,
      "quote": "w Cavern & Cenote Diving maksymalna odległość liniowa wynosi 60 metrów"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest maksymalny limit czasu dekompresji dopuszczalny podczas nurkowań w programie szkoleniowym Decompression Diving?",
    "options": [
          "5 minut",
          "10 minut",
          "15 minut",
          "Brak limitu przy odpowiednim zapasie gazu."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Decompression Diving - Limity czasu",
      "page": 36,
      "quote": "Decompression Diving | 40 metrów i 15 minut dekompresji"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest maksymalny limit głębokości dla nurkowań w programie Decompression Diving?",
    "options": [
          "30 metrów",
          "40 metrów",
          "45 metrów",
          "50 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Decompression Diving - Limity głębokości",
      "page": 36,
      "quote": "Decompression Diving | 40 metrów"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Zgodnie z listą zmian Scuba, pod jaką datą widnieją zmiany w standardach dotyczące m.in. Systemu Zarządzania Jakością (QMS)?",
    "options": [
          "1 stycznia 2025 r.",
          "1 lutego 2025 r.",
          "15 października 2025 r.",
          "27 kwietnia 2026 r."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Załącznik",
      "section": "Lista zmian Scuba",
      "page": 172,
      "quote": "Zmiany obowiązujące od 15 października 2025 r. 172"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jakie wymaganie musi spełnić Profesjonalista SSI (OWI i wyżej) w statusie nieaktywnym powyżej 10 lat, aby powrócić do statusu aktywnego?",
    "options": [
          "Ukończyć wyłącznie Scuba Skills Update.",
          "Spełnić wymagania certyfikacyjne dla najwyższego stopnia oraz dodatkowo zdać Instructor Evaluation.",
          "Ponownie ukończyć kurs ITC (Instructor Training Course).",
          "Wnieść opłatę za reaktywację bez dodatkowych egzaminów."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Przywrócenie statusu nieaktywnego",
      "page": 127,
      "quote": "Ponad dziesięć (10) lat (...) Instruktorzy Open Water Instructor (Open Water Instructor) i wyżsi muszą również zdać Instructor Evaluation"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Ile zalogowanych nurkowań praktycznego doświadczenia musi posiadać Profesjonalista SSI, zanim zacznie używać suchego skafandra podczas prowadzenia programów SSI?",
    "options": [
          "5 nurkowań",
          "10 nurkowań",
          "25 nurkowań",
          "50 nurkowań"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Suche skafandry - Doświadczenie pro",
      "page": 51,
      "quote": "używający suchych skafandrów (...) muszą mieć praktyczne doświadczenie w korzystaniu z tego typu sprzętu (co najmniej 10 zalogowanych nurkowań)"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Zgodnie ze Standardami Etycznymi, co musi zrobić Profesjonalista SSI w przypadku skazania za przestępstwo na tle seksualnym?",
    "options": [
          "Może kontynuować pracę pod nadzorem.",
          "Musi powiadomić SSI natychmiast lub przed jakimkolwiek szkoleniem na poziomie profesjonalnym.",
          "Nie musi informować SSI, jeśli czyn nie miał związku z nurkowaniem.",
          "Musi zawiesić swoją działalność na okres 5 lat."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Standardy Etyczne",
      "page": 12,
      "quote": "Jeśli zostałeś skazany za przestępstwo lub jakiekolwiek wykroczenie na tle seksualnym, jesteś zobowiązany do powiadomienia SSI – natychmiast"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki system zastąpił poprzednie procedury MAP (Monitor Assessment Program) oraz procedury zażaleń w SSI?",
    "options": [
          "System MySSI App 3.0.",
          "Nowy System Zarządzania Jakością (QMS).",
          "Globalny Rekord Szkolenia.",
          "Międzynarodowy Kodeks Etyki."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Zarządzanie jakością",
      "page": 12,
      "quote": "Nowy System Zarządzania Jakością (QMS) zastępuje ze skutkiem natychmiastowym poprzednie wersje Programu Oceny Monitora (MAP)"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Zgodnie z wymaganiami dla programu Classified Dive Buddy, jakie są uprawnienia nurka z certyfikatem Classified Buddy Level 3?",
    "options": [
          "Może nurkować z jednym nurkiem posiadającym certyfikat Open Water Diver.",
          "Może nurkować z jednym nurkiem o stopniu Classified Diver Level 3.",
          "Musi nurkować z co najmniej dwoma partnerami, z których jeden musi być Profesjonalistą SSI lub posiadać certyfikat Classified Dive Buddy.",
          "Może samodzielnie nadzorować grupę Classified Divers w wodach otwartych."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Classified Diving",
      "section": "Classified Dive Buddy",
      "page": 142,
      "quote": "Musi nurkować z co najmniej dwoma (2) partnerami, z których co najmniej jeden musi być Profesjonalistą SSI o aktywnym statusie lub posiadać certyfikat Classified Dive Buddy."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest maksymalny współczynnik kursantów do instruktora dla certyfikowanego nurka Classified Diver Level 2 podczas nurkowania w wodach otwartych?",
    "options": [
          "1:1 (wyłącznie z Instruktorem Classified Diving).",
          "2:1 (Classified Diver do dwóch partnerów lub jednego Profesjonalisty SSI).",
          "4:1 (pod nadzorem Divemastera).",
          "Nie ma limitów, o ile nurek posiada własny sprzęt."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Classified Diving",
      "section": "Współczynniki Classified",
      "page": 142,
      "quote": "Classified Diver Level 2 (Direct Supervision) [...] Współczynnik kursant-instruktor: 2:1 (Classified Diver do dwóch partnerów lub jednego profesjonalisty)."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Który z wymienionych Profesjonalistów SSI może uzyskać uprawnienia Classified Diving Instructor?",
    "options": [
          "Każdy Divemaster o aktywnym statusie.",
          "Assistant Instructor o aktywnym statusie, po ukończeniu seminarium.",
          "Aktywny Open Water Instructor (lub wyższy), który posiada certyfikat instruktora specjalizacji Diver Stress & Rescue.",
          "Wyłącznie Instructor Certifier."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Classified Diving",
      "section": "Classified Diving Instructor",
      "page": 142,
      "quote": "Musi posiadać certyfikat Open Water Instructor o aktywnym statusie lub wyższy [...] Posiadać certyfikat instruktora specjalizacji SSI Diver Stress & Rescue."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Ile nurkowań w wodach otwartych musi zalogować kandydat na Classified Diving Instructor przed certyfikacją?",
    "options": [
          "Minimum 50 nurkowań.",
          "Minimum 100 nurkowań.",
          "Minimum 200 nurkowań.",
          "Minimum 150 nurkowań."
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Classified Diving",
      "section": "Classified Diving Instructor - Wymagania",
      "page": 142,
      "quote": "Zalogować co najmniej 150 nurkowań na wodach otwartych."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Z jakich elementów składa się Pełny System Snorkelingowy zgodnie ze standardami SSI?",
    "options": [
          "Maska, fajka, płetwy, kamizelka ratunkowa.",
          "Maska, fajka, płetwy, skafander odpowiadający panującym warunkom środowiskowym.",
          "Maska, fajka, płetwy, pas balastowy.",
          "Maska, fajka, płetwy, boja sygnalizacyjna."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Snorkelingowe",
      "section": "Wymagany Sprzęt",
      "page": 43,
      "quote": "Pełny System Snorkelingowy, który zawiera: Maskę, Fajkę, Płetwy, Skafander odpowiadający panującym warunkom środowiskowym"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Kto może prowadzić program Snorkel Diver i wydawać karty uznaniowe?",
    "options": [
          "Wyłącznie Open Water Instructor.",
          "Każdy SSI Professional o aktywnym statusie (od stopnia Dive Guide).",
          "Wyłącznie certyfikowany Snorkel Instructor (ISO 13970).",
          "Divemaster, pod warunkiem asystowania instruktorowi."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Snorkelingowe",
      "section": "Snorkel Instructor",
      "page": 43,
      "quote": "Profesjonalista SSI o aktywnym statusie (stopień Dive Guide lub wyższy) może prowadzić program Snorkel Diver."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest minimalny wiek kandydata na certyfikat Classified Dive Buddy?",
    "options": [
          "12 lat.",
          "15 lat.",
          "18 lat.",
          "21 lat."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Classified Diving",
      "section": "Classified Dive Buddy - Wymagania",
      "page": 142,
      "quote": "Minimalny wiek: 18 lat."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jakie są wymagania dla Profesjonalisty SSI, aby móc korzystać z masek pełnotwarzowych (Full Face Mask) podczas prowadzenia programów SSI?",
    "options": [
          "Musi posiadać certyfikat nurka Full Face Mask.",
          "Musi posiadać co najmniej 10 zalogowanych nurkowań w takim sprzęcie przed jego użyciem w szkoleniu.",
          "Musi być co najmniej Master Instruktorem.",
          "Wygamane jest wyłącznie ubezpieczenie OC obejmujące maski pełnotwarzowe."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Prowadzenie programów SSI",
      "section": "Definicje sprzętowe - maski pełnotwarzowe",
      "page": 35,
      "quote": "Profesjonaliści SSI, którzy używają suchych skafandrów lub masek pełnotwarzowych podczas programów SSI, muszą mieć praktyczne doświadczenie w korzystaniu z tego typu sprzętu (co najmniej 10 zalogowanych nurkowań)"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "W programie Snorkel Instructor (ISO 13970), kandydat niebędący jeszcze profesjonalistą SSI musi:",
    "options": [
          "Mieć ukończone 21 lat.",
          "Przejść ocenę umiejętności w wodzie dla kandydata na profesjonalistę oraz zaliczyć egzamin teoretyczny.",
          "Posiadać certyfikat Master Diver.",
          "Wykonać 100 nurkowań snorkelingowych."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Snorkelingowe",
      "section": "Snorkel Instructor - Klienci",
      "page": 43,
      "quote": "Kandydaci niebędący specjalistami SSI [...] Ocena umiejętności w wodzie kandydata Professional [...] Egzamin teoretyczny Snorkel Instructor."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Podczas szkolenia Classified Diving, jeśli instruktor korzysta z pomocy certyfikowanego asystenta, asystent ten musi posiadać co najmniej stopień:",
    "options": [
          "Divemaster.",
          "Assistant Instructor.",
          "Classified Dive Buddy.",
          "Dive Guide o aktywnym statusie."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Classified Diving",
      "section": "Asystenci Classified",
      "page": 142,
      "quote": "Certyfikowany asystent musi posiadać certyfikat na poziomie Classified Dive Buddy."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest minimalny wiek uczestnika, który chce wziąć udział w programie SSI Explorers (np. Scuba Explorer)?",
    "options": [
          "5 lat.",
          "6 lat.",
          "8 lat.",
          "10 lat."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "Explorers - Minimalny wiek",
      "page": 154,
      "quote": "Minimalny wiek: 6 lat."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest maksymalny limit głębokości dla uczestnika programu Scuba Explorer w basenie?",
    "options": [
          "2 metry.",
          "3 metry.",
          "4 metry.",
          "5 metrów."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "Scuba Explorer - Limity",
      "page": 154,
      "quote": "Maksymalny limit głębokości (basen): 4 metry."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Kto jest uprawniony do prowadzenia i certyfikowania programów SSI Explorers?",
    "options": [
          "Każdy Divemaster o aktywnym statusie.",
          "Aktywny Instruktor SSI Explorer (lub OWI z odpowiednią orientacją).",
          "Wyłącznie Assistant Instructor Trainer.",
          "Każdy instruktor specjalizacji ekologicznych."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "Explorer Instructor",
      "page": 154,
      "quote": "Programy Profesjonalne: Instruktor SSI Explorer."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki dokument musi posiadać kandydat na profesjonalistę SSI w zakresie Pierwszej Pomocy i RKO w momencie certyfikacji?",
    "options": [
          "Dowód szkolenia z ostatnich 3 lat.",
          "Dowód szkolenia z ostatnich 24 miesięcy (2 lat).",
          "Dowód szkolenia z ostatnich 12 miesięcy.",
          "Dowód ukończenia studiów medycznych."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagane zaświadczenia medyczne",
      "page": 121,
      "quote": "Dowód odbycia szkolenia z RKO w ciągu ostatnich dwóch (2) lat / Dowód odbycia szkolenia z udzielania pierwszej pomocy w ciągu ostatnich dwóch (2) lat."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Program React Right Update jest zalecany lub wymagany co ile miesięcy w celu odświeżenia umiejętności?",
    "options": [
          "Co 12 miesięcy.",
          "Co 24 miesiące.",
          "Co 36 miesięcy.",
          "Raz na 5 lat."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "React Right Update",
      "page": 85,
      "quote": "Okresy ważności szkoleń RKO/Pierwszej Pomocy [...] w ciągu ostatnich dwóch (2) lat."
    },
    "category": "Fizyka i Fizjologia"
  },
  {
    "question": "Który z poniższych komponentów NIE jest częścią obowiązkową certyfikacji React Right (chyba że standard lokalny stanowi inaczej)?",
    "options": [
          "Pierwsza pomoc (First Aid).",
          "RKO (CPR).",
          "Podawanie tlenu w wypadkach nurkowych (O2 Provider).",
          "Ratownictwo wodne z użyciem łodzi."
    ],
    "answer": 3,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "React Right - Sekcje",
      "page": 85,
      "quote": "Program React Right składa się z następujących komponentów podstawowych: Pierwsza pomoc i RKO, Podawanie tlenu, AED."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Czy instruktorzy specjalizacji ekologicznych (Ecology), którzy nie prowadzą zajęć w wodzie, muszą przesyłać dowód szkolenia RKO/Pierwszej Pomocy do MySSI?",
    "options": [
          "Tak, wszyscy instruktorzy muszą to robić corocznie.",
          "Nie, kandydaci na instruktorów specjalizacji ekologicznych są zwolnieni z tego wymogu.",
          "Tylko jeśli mają powyżej 40 lat.",
          "Tak, ale tylko jeśli są afiliowani przy centrum Diamond."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wymagane dokumenty w profilu",
      "page": 122,
      "quote": "Kandydaci na poniższe programy nie muszą przesyłać powyższych dokumentów: Specialty Instruktor z wyłączeniem kandydatów na instruktorów React Right."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jakie stopnie uznaniowe (Recognition Levels) występują w programie SSI Explorers?",
    "options": [
          "Bronze, Silver, Gold.",
          "Explorer, Specialist, Master Explorer.",
          "Snorkel, Scuba, Mermaid i Free Diving Explorers.",
          "Level 1, Level 2, Master."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Explorers",
      "section": "Explorers - Stopnie",
      "page": 154,
      "quote": "Stopnie uznaniowe programów SSI Explorers: Snorkel Explorer, Scuba Explorer, Mermaid Explorer, Free Diving Explorer."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Co musi zrobić aktywny Profesjonalista SSI, gdy jego stan zdrowia ulegnie zmianie w sposób zakłócający zdolność do nauczania?",
    "options": [
          "Przejść na status \"Retired\".",
          "Powiadomić SSI i przesłać nowy Kwestionariusz Medyczny Uczestnika z podpisem lekarza.",
          "Przestać nurkować na 30 dni bez informowania agencji.",
          "Zrezygnować z ubezpieczenia OC."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Powiadomienia medyczne pro",
      "page": 121,
      "quote": "Professionals o aktywnym statusie SSI są zobowiązani do powiadomienia SSI o wystąpieniu stanu chorobowego [...] Muszą oni przesłać nowy Kwestionariusz Medyczny Uczestnika."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Podczas programu Try Scuba, jaki jest maksymalny współczynnik instruktora do dzieci w wieku 8-9 lat w basenie?",
    "options": [
          "2:1.",
          "4:1 (można zwiększyć do 6:2 z asystentem).",
          "6:1.",
          "8:1."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba - Współczynniki dla dzieci",
      "page": 46,
      "quote": "kursanci w wieku 8 i 9 lat: Współczynnik kursant-instruktor: 4:1. Liczba ta może wzrosnąć do 6:2, jeżeli instruktor korzysta z pomocy jednego (1) certyfikowanego asystenta."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Aby agencja szkoleniowa została uznana przez SSI za \"Uznaną Agencję\", musi posiadać aktywny globalny certyfikat ISO lub:",
    "options": [
          "Działać w co najmniej 100 krajach.",
          "Być aktywnym członkiem co najmniej jednego RSTC.",
          "Posiadać własną fabrykę sprzętu.",
          "Mieć siedzibę w USA lub Europie."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Kryteria Uznania SSI",
      "page": 55,
      "quote": "Posiadać aktywny globalny certyfikat ISO lub być aktywnym członkiem co najmniej jednego RSTC."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Ile języków musi obejmować zestaw materiałów agencji, aby aspirowała do miana agencji uznanej przez SSI?",
    "options": [
          "Co najmniej jeden (angielski).",
          "Co najmniej dwa.",
          "Co najmniej trzy (3).",
          "Co najmniej pięć."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Kryteria Uznania SSI - Języki",
      "page": 55,
      "quote": "Musi zapewniać pełny zestaw materiałów szkoleniowych w co najmniej trzech (3) językach."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jakie są wymagania wiekowe dla kandydata przystępującego do Experienced Diver Test (EDT) na poziomie Open Water Diver?",
    "options": [
          "10 lat.",
          "12 lat.",
          "15 lat.",
          "18 lat."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Experienced Diver Test - Wiek",
      "page": 54,
      "quote": "Minimalny wiek: 15 lat."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Ile nurkowań szkoleniowych w wodach otwartych musi wykonać nurek w ramach Experienced Diver Test dla certyfikacji Open Water Diver?",
    "options": [
          "Minimum jedno (1).",
          "Minimum dwa (2).",
          "Minimum cztery (4).",
          "Tylko sesję na basenie."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Experienced Diver Test - Wody Otwarte",
      "page": 54,
      "quote": "Wykonać co najmniej dwa (2) nurkowania szkoleniowe na Wodach Otwartych zgodnie z podręcznikiem instruktorskim do programu Open Water Diver."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Kto może oceniać kandydatów do programów Diver Stress & Rescue lub Dive Guide przy użyciu Experienced Diver Test?",
    "options": [
          "Każdy Divemaster o aktywnym statusie.",
          "Specialty Instructor z aktywnym statusem i właściwym certyfikatem instruktorskim.",
          "Wyłącznie Instructor Trainer.",
          "Każdy Assistant Instructor pod nadzorem pośrednim."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Experienced Diver Test - Nadzór",
      "page": 54,
      "quote": "Specialty Instructor z aktywnym statusem i właściwym certyfikatem instruktorskim musi bezpośrednio nadzorować wszystkie zajęcia teoretyczne i zajęcia w wodzie."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Co nurek musi przedstawić przed przystąpieniem do Experienced Diver Test?",
    "options": [
          "Zaświadczenie od notariusza o zagubieniu karty.",
          "Podpisane oświadczenie dotyczące wcześniejszego szkolenia i doświadczenia oraz dowód tego doświadczenia (np. logbook).",
          "Wyciąg z konta bankowego potwierdzający opłacenie kursów w innej agencji.",
          "Certyfikat Nitrox z agencji uznanej."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Experienced Diver Test - Warunki",
      "page": 54,
      "quote": "Kursant musi przedstawić podpisane oświadczenie dotyczące wcześniejszego szkolenia i doświadczenia nurkowego. Kursant musi dostarczyć dowód swojego doświadczenia."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Kandydaci z innych agencji starający się o crossover na poziom Professional SSI nie mogą:",
    "options": [
          "Mieć więcej niż 50 lat.",
          "Być zaangażowani w nierozwiązaną sprawę dotyczącą zgodności jakości (QMS) z inną agencją.",
          "Posiadać ubezpieczenia OC z innej firmy niż DAN.",
          "Mieć mniej niż 100 zalogowanych nurkowań."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Procedury Crossover - Jakość",
      "page": 128,
      "quote": "Kandydat nie może być zaangażowany w nierozwiązaną sprawę dotyczącą zgodności jakości z inną agencją szkoleniową."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Ile nurkowań \"Experience\" (doświadczalnych) może zaliczyć Profesjonalista SSI na poczet danego programu specjalizacji, jeśli nurek przedstawi podpisany logbook?",
    "options": [
          "Wszystkie wymagane nurkowania.",
          "Maksymalnie dwa.",
          "Maksymalnie jedno (1).",
          "Żadnego – wszystkie nurkowania muszą być szkoleniowe."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Zaliczenie nurkowań doświadczalnych",
      "page": 55,
      "quote": "Profesjonalista SSI może podjąć decyzję o zaliczeniu jednego (1) nurkowania na poczet danego program specjalizacji SSI."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaka jest minimalna liczba instruktorów, którą musi posiadać agencja na świecie, aby spełnić kryteria uznania przez SSI?",
    "options": [
          "100.",
          "250.",
          "500.",
          "1000."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Kryteria Uznania SSI - Rozmiar",
      "page": 55,
      "quote": "Posiadać co najmniej 250 instruktorów i 50 autoryzowanych centrów szkoleniowych na całym świecie."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Certyfikacja Enriched Air Nitrox 32 kwalifikuje nurka do:",
    "options": [
          "Używania mieszanin do EAN40.",
          "Używania mieszanin gazowych do EAN32 włącznie.",
          "Prowadzenia analizy gazu bez nadzoru.",
          "Nurkowania na głębokość 40 metrów."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Enriched Air Nitrox",
      "section": "Enriched Air Nitrox 32",
      "page": 71,
      "quote": "Certyfikacja Enriched Air Nitrox 32 kwalifikuje nurka do używania mieszanin gazowych do EAN32 włącznie."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest maksymalny termin na przetworzenie certyfikacji lub uznania w systemie MySSI od zakończenia programu?",
    "options": [
          "24 godziny.",
          "7 dni.",
          "14 dni.",
          "30 dni."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Przetwarzanie certyfikacji",
      "page": 12,
      "quote": "Wszystkie certyfikacje i wyróżnienia muszą zostać przetworzone w ciągu siedmiu (7) dni od zakończenia programu."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Przez jaki minimalny okres Centrum Szkoleniowe SSI musi przechowywać Dokumentację Szkolenia (Training Record) kursantów?",
    "options": [
          "2 lata.",
          "5 lat.",
          "10 lat (chyba że lokalne prawo wymaga dłuższego okresu).",
          "Bezterminowo."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Przechowywanie dokumentów",
      "page": 12,
      "quote": "Dokumentacja szkolenia musi być przechowywana przez Centrum Szkoleniowe przez co najmniej dziesięć (10) lat."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki status otrzymuje automatycznie Profesjonalista SSI, który brał udział w zdarzeniu prowadzącym do śmierci uczestnika pod jego bezpośrednim nadzorem?",
    "options": [
          "Inactive.",
          "Administrative Hold (Wstrzymany administracyjnie).",
          "Expelled.",
          "Canceled."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wydarzenia krytyczne - zawieszenie",
      "page": 126,
      "quote": "Profesjonalista SSI, który był zaangażowany w wydarzenie prowadzące do śmierci uczestnika [...] automatycznie otrzymuje status „Wstrzymany administracyjnie”"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Kto ponosi wyłączną odpowiedzialność za weryfikację, czy Profesjonalista SSI posiada odpowiednie ubezpieczenie OC?",
    "options": [
          "SSI International.",
          "SSI Service Center.",
          "Sam Profesjonalista SSI (SSI i SC nie są za to odpowiedzialne).",
          "Agent ubezpieczeniowy DAN."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Ubezpieczenie OC",
      "page": 121,
      "quote": "SSI i SSI Service Centers nie są odpowiedzialne za weryfikację, czy SSI Professional spełnia wymagania dotyczące ubezpieczenia od odpowiedzialności zawodowej."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Co oznacza status \"Retired\" (W spoczynku) dla Profesjonalisty SSI?",
    "options": [
          "Utrata wszystkich uprawnień do nauczania.",
          "Pozostanie w aktywnym statusie dla najwyższej certyfikacji zawodowej, dla której spełnia się minimalne wymagania (np. OWI zamiast IT).",
          "Możliwość nauczania tylko w basenach.",
          "Dożywotnie zwolnienie z opłat członkowskich."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Status emerytowany",
      "page": 126,
      "quote": "SSI Professionals na emeryturze pozostają w aktywnym statusie dla najwyższej certyfikacji zawodowej, dla której spełniają minimalne wymagania aktywnego statusu."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Kiedy Profesjonalista SSI musi powiadomić SSI o wyroku za przestępstwo lub wykroczenie na tle seksualnym?",
    "options": [
          "During corocznego odnowienia statusu.",
          "Natychmiast lub przed jakimkolwiek szkoleniem na poziomie profesjonalnym.",
          "Tylko jeśli ofiarą był nurek.",
          "Nie ma takiego obowiązku w UE."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Standardy Etyczne pro",
      "page": 12,
      "quote": "Jeśli zostałeś skazany za przestępstwo lub jakiekolwiek wykroczenie na tle seksualnym, jesteś zobowiązany do powiadomienia SSI – natychmiast lub przed jakimkolwiek szkoleniem na poziomie profesjonalnym."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Profesjonalista o statusie \"Expelled\" (Wydalony):",
    "options": [
          "Może wrócić do SSI po 10 latach.",
          "Nie może ponownie otrzymać statusu aktywnego SSI na całym świecie.",
          "Może uczyć tylko Try Scuba.",
          "Może pracować jako Dive Guide, ale nie jako instruktor."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Wydalenie ze struktur",
      "page": 126,
      "quote": "Osoba posiadając status \"Wydalony\" nie może ponownie otrzymać statusu aktywnego SSI na całym świecie."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki status posiada Profesjonalista SSI, który opłacił składki, ale nie jest afiliowany przy aktywnym Centrum Szkoleniowym?",
    "options": [
          "Active.",
          "Inactive.",
          "Canceled.",
          "Suspended."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Afiliacja centrów",
      "page": 126,
      "quote": "Status nieaktywny posiada Profesjonalista nurkowy SSI [...] nie jest afiliowany do posiadającego aktywnego statusu Centrum Szkoleniowego SSI."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaka procedura QMS jest stosowana w przypadku otrzymania skargi na Profesjonalistę SSI?",
    "options": [
          "Program Oceny Monitora (MAP).",
          "System Zarządzania Jakością (QMS).",
          "Natychmiastowe usunięcie z bazy MySSI.",
          "Przekazanie sprawy do lokalnej policji."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "QMS procedury",
      "page": 12,
      "quote": "Nowy System Zarządzania Jakością (QMS) zastępuje ze skutkiem natychmiastowym poprzednie wersje Programu Oceny Monitora (MAP)."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki jest minimalny wynik procentowy wymagany do zaliczenia Egzaminu Końcowego na poziomie Professional (np. ITC)?",
    "options": [
          "80%.",
          "85%.",
          "90%.",
          "100%."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "ITC Egzaminy",
      "page": 128,
      "quote": "Minimalny wynik dla programów na poziomie Professional: 90%."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Aby Dive Guide mógł podnieść uprawnienia do stopnia Divemaster (ISO 24801-3), musi mieć zalogowane łącznie:",
    "options": [
          "40 nurkowań (25h).",
          "50 nurkowań (32h).",
          "60 nurkowań (40h) oraz zdać egzamin Science of Diving.",
          "100 nurkowań."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Upgrade Dive Guide do Divemaster",
      "page": 123,
      "quote": "Zalogować co najmniej 60 nurkowań na wodach otwartych o łącznej długości 40 godzin lub więcej. Zaliczyć egzamin końcowy programu Science of Diving."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Który stopień profesjonalny uprawnia do asystowania podczas Instructor Training Course (ITC)?",
    "options": [
          "Master Instructor.",
          "Assistant Instructor Trainer (o aktywnym statusie).",
          "Divemaster Instructor.",
          "Każdy instruktor z 5-letnim stażem."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Asystowanie w ITC",
      "page": 134,
      "quote": "Assistant Instructor Trainer SSI z aktywnym statusem może asystować podczas Instructor Training Course."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest maksymalny współczynnik kursantów na instruktora podczas nurkowania specjalizacji Deep Diving na głębokość poniżej 30 metrów?",
    "options": [
          "8:1.",
          "6:1 (z jednym asystentem).",
          "4:1 (bez możliwości zwiększenia współczynnika przez asystentów).",
          "2:1."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Deep Diving",
      "section": "Współczynniki ilościowe",
      "page": 75,
      "quote": "Nurkowania na głębokość poniżej 30 metrów: Współczynnik kursant-instruktor: 4:1. Nie można korzystać z pomocy certyfikowanych asystentów, żeby zwiększyć współczynniki."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Czy Divemaster SSI o aktywnym statusie może uczyć specjalizacji ekologicznych (Ecology)?",
    "options": [
          "Nie, te programy są zarezerwowane dla instruktorów OWI.",
          "Tak, jeśli posiada certyfikat instruktorski dla danej specjalizacji ekologicznej.",
          "Tak, wszystkie specjalizacje wiedzy są automatycznie dostępne dla Divemasterów.",
          "Tak, ale tylko pod bezpośrednim nadzorem instruktora."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Uprawnienia specjalizacji ekologicznych",
      "page": 123,
      "quote": "Instruktor Specjalizacje ekologiczne [...] (Dostępne dla stopnia Divemaster)."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Kandydat Professional, który był nieaktywny (status Inactive/Canceled) przez ponad 5 lat, ale mniej niż 10 lat, musi:",
    "options": [
          "Tylko opłacić zaległe składki.",
          "Ukończyć wszystkie wymagania certyfikacyjne dla swojego najwyższego stopnia (w tym oceny w wodzie i egzaminy).",
          "Przejść ponownie kurs Open Water Diver.",
          "Wykonać 10 nurkowań pod nadzorem Certifiera."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Odnowienie statusu pro >5 lat",
      "page": 127,
      "quote": "Okres dłuższy niż pięć (5) lat [...] Ukończenie wszystkich wymagań certyfikacyjnych dla ich najwyższego profesjonalnego certyfikatu."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest minimalny wiek do certyfikacji na poziomie Open Water Instructor?",
    "options": [
          "17 lat.",
          "18 lat.",
          "21 lat.",
          "25 lat."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Open Water Instructor - Wiek",
      "page": 129,
      "quote": "Minimalny wiek: 18 lat."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Kto może prowadzić Egzamin Końcowy podczas oceny instruktorskiej (Instructor Evaluation)?",
    "options": [
          "Instructor Trainer.",
          "Instructor Certifier.",
          "Dowolny Course Director.",
          "Regional Manager SSI."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Instructor Certifier - Uprawnienia",
      "page": 136,
      "quote": "Instructor Certifier (ISO 24802-2)"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest minimalny łączny czas denny dla nurkowań szkoleniowych na wodach otwartych w programie Open Water Diver?",
    "options": [
          "60 minut.",
          "80 minut.",
          "100 minut.",
          "120 minut."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver - Czas szkolenia",
      "page": 53,
      "quote": "Minimalny łączny czas denny dla Nurkowań szkoleniowych na wodach otwartych: 80 minut."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest maksymalny współczynnik kursantów na instruktora w basenie dla programu Open Water Diver?",
    "options": [
          "4:1.",
          "8:1.",
          "10:1.",
          "12:1."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Confined Water OWD współczynniki",
      "page": 53,
      "quote": "Współczynnik kursant-instruktor: 8:1."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "If instruktor prowadzi szkolenie Deep Diving, w którym bierze udział dwoje 13-latków i dwoje certyfikowanych asystentów, jaki jest maksymalny dopuszczalny współczynnik?",
    "options": [
          "8:3.",
          "6:2.",
          "4:1 (gdyż udział osób niepełnoletnich ogranicza współczynnik do 4:1 i asystenci nie mogą go zwiększyć).",
          "12:1."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Deep Diving",
      "section": "Deep Diving - Współczynniki",
      "page": 75,
      "quote": "Stosunek kursantów do instruktorów wynosi 4:1, gdy w szkoleniu uczestniczą osoby niepełnoletnie. [...] nie mogą oni być wykorzystywani do zwiększania stosunku."
    },
    "category": "Współczynniki i Wiek"
  }
,
  {
    "question": "Który z poniższych zestawów wymagań jest poprawny dla uzyskania stopnia Master Diver, będącego najwyższym wyróżnieniem w nurkowaniu rekreacyjnym?",
    "options": [
          "Ukończenie 4 specjalizacji, kursu Diver Stress & Rescue oraz posiadanie 50 zalogowanych nurkowań.",
          "Ukończenie 5 dowolnych specjalizacji (w tym Deep Diving) oraz posiadanie 50 zalogowanych nurkowań.",
          "Ukończenie 4 specjalizacji, w tym Deep i Navigation, oraz 100 zalogowanych nurkowań.",
          "Ukończenie dowolnych 4 specjalizacji oraz 50 zalogowanych nurkowań, bez konieczności Stress & Rescue."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Karty Uznania SSI",
      "section": "Master Diver Wymagania",
      "page": 117,
      "quote": "Master Diver (wymagania: 4 specjalizacje + Diver Stress & Rescue + 50 nurkowań)."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Ile certyfikatów z uznanych agencji zewnętrznych (nie-SSI) można maksymalnie zaliczyć na poczet wymagań karty uznaniowej Master Diver?",
    "options": [
          "Wszystkie, pod warunkiem przeprowadzenia Experienced Diver Test.",
          "Maksymalnie jeden.",
          "Maksymalnie dwa.",
          "Żadnego; wszystkie specjalizacje do stopnia Master Diver must być ukończone w SSI."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Tabele Równoważności",
      "section": "Master Diver agencje zewnętrzne",
      "page": 170,
      "quote": "(Zgodnie z systemem SSI): Na poczet Master Diver można zaliczyć maksymalnie dwie certyfikacje agencji zewnętrznych."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaka jest zasadnicza różnica w procedurze wydawania kart „Uznania za postępy” (np. Specialty Diver) a kart „Uznania za doświadczenie” (np. Century Diver, Gold, Platinum)?",
    "options": [
          "Karty za doświadczenie wymagają egzaminu końcowego, karty za postępy tylko logbooka.",
          "Karty za postępy są wydawane po ukończeniu konkretnych programów, karty za doświadczenie bazują wyłącznie na liczbie zalogowanych nurkowań (np. Century = 100, Platinum = 1000).",
          "Karty za doświadczenie muszą być zawsze podpisane przez Instructor Trainera.",
          "Nie ma różnicy; obie grupy wymagają ukończenia sesji akademickiej."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Karty Uznania SSI",
      "section": "Uznanie za doświadczenie a postępy",
      "page": 118,
      "quote": "Uznanie za doświadczenie w nurkowaniu: Century Diver (100 nurkowań), Gold (500), Platinum (1000)..."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "W przypadku programów uznaniowych, które nie posiadają egzaminu końcowego, Profesjonalista SSI wydający kartę jest zobowiązany do:",
    "options": [
          "Automatycznego wydania karty po wpisaniu nurkowań do MySSI.",
          "Zweryfikowania wiedzy kursanta poprzez ukończenie sesji akademickiej lub zadawanie pytań.",
          "Pobrania opłaty i wydania karty bez dodatkowej weryfikacji.",
          "Uzyskania zgody od Regionalnego Managera QMS."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Procedury certyfikacji",
      "page": 16,
      "quote": "Professional SSI wydający kartę certyfikacji lub uznania musi zweryfikować, czy Kursant posiada odpowiedni poziom wiedzy poprzez ukończenie sesji akademickiej lub poprzez zadawanie pytań."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Czy karta uznaniowa SSI (np. Platinum Diver) uprawnia do samodzielnego nurkowania bez dodatkowego przeszkolenia?",
    "options": [
          "Tak, jeśli nurek posiada stopień Open Water Diver.",
          "Tak, ale tylko do głębokości 12 metrów.",
          "Nie, jest ona dowodem doświadczenia, ale nie stanowi licencji uprawniającej do nowych form aktywności bez szkolenia.",
          "Tak, każda karta uznaniowa SSI jest równoważna z certyfikatem Open Water Diver."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Definicje Programów",
      "section": "Karty uznaniowe - Uprawnienia",
      "page": 10,
      "quote": "Karta uznaniowa jest dowodem posiadanego doświadczenia, ale nie kwalifikuje kursanta do samodzielnego nurkowania bez dodatkowego przeszkolenia."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki jest maksymalny czas na przetworzenie certyfikacji lub karty uznaniowej w systemie MySSI od momentu zakończenia programu?",
    "options": [
          "24 godziny.",
          "72 godziny.",
          "7 dni.",
          "14 dni."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Procedury certyfikacji",
      "page": 16,
      "quote": "Wszystkie certyfikacje i wyróżnienia muszą zostać przetworzone w ciągu siedmiu (7) dni od zakończenia programu."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Aby otrzymać kartę uznaniową Century Diver, nurek musi posiadać:",
    "options": [
          "100 zalogowanych nurkowań.",
          "100 certyfikacji wydanych innym nurkom (jako instruktor).",
          "50 nurkowań i 4 specjalizacje.",
          "100 godzin czasu dennego."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Karty Uznania SSI",
      "section": "Century Diver",
      "page": 118,
      "quote": "Century Diver (100 nurkowań)."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Dokumentacja szkolenia (Training Record) i logbook są wymagane do wydania karty uznania:",
    "options": [
          "Tylko w przypadku programów zawodowych.",
          "Tylko dla nurków poniżej 15 roku życia.",
          "Zawsze; instruktor musi potwierdzić, że kursant spełnił wymagania na poziomie zadowalającym.",
          "Nigdy; system MySSI generuje karty automatycznie na podstawie algorytmu."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Definicje Programów",
      "section": "Program uznaniowy - Potwierdzenie",
      "page": 10,
      "quote": "SSI wydaje kartę uznaniową po otrzymaniu od Profesjonalisty SSI i Centrum Szkoleniowego SSI potwierdzenia spełnienia wszystkich wymagań... co powinno być udokumentowane w Dokumentacji Szkolenia i logbooku."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Zgodnie ze standardami sprzętowymi, \"Pełny System Snorkelingowy\" musi zawierać:",
    "options": [
          "Maskę, fajkę i płetwy.",
          "Maskę, fajkę, płetwy oraz skafander odpowiadający panującym warunkom.",
          "Maskę, fajkę i kamizelkę wypornościową.",
          "Tylko maskę i płetwy."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Snorkelingowe",
      "section": "Pełny System Snorkelingowy",
      "page": 27,
      "quote": "Pełny System Snorkelingowy, który zawiera: Maskę, Fajkę, Płetwy, Skafander odpowiadający panującym warunkom środowiskowym."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jeśli podczas programu Snorkel Diver lub Try Scuba woda w basenie/ograniczonym akwenie jest zbyt głęboka, aby kursanci mogli swobodnie stanąć (głowa nad wodą), instruktor musi:",
    "options": [
          "Zmniejszyć grupę o połowę.",
          "Wykorzystać platformę znajdującą się maksymalnie na 2 metrach głębokości.",
          "Odwołać zajęcia lub przenieść je na wody otwarte.",
          "Wyposażyć każdego uczestnika w bojkę sygnalizacyjną."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Miejsca szkoleń i limity głębokości",
      "section": "Głęboka woda ograniczona",
      "page": 40,
      "quote": "Jeżeli woda jest zbyt głęboka, instruktor musi wykorzystać platformę znajdującą się maksymalnie na 2 metrach głębokości..."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest minimalny wiek uczestnika, aby mógł on wziąć udział w programie Try Scuba w ograniczonym akwenie (nie w basenie) i jaki jest wtedy współczynnik instruktor:kursant dla dzieci w wieku 8-9 lat?",
    "options": [
          "8 lat; współczynnik 2:1 (może wzrosnąć do 4:2 z asystentem).",
          "10 lat; współczynnik 4:1.",
          "8 lat; współczynnik 4:1 bez możliwości zwiększenia.",
          "12 lat; współczynnik 1:1."
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba - Współczynniki",
      "page": 46,
      "quote": "Try Scuba w ograniczonym akwenie: 8 i 9 lat | Współczynnik 2:1. Liczba ta może wzrosnąć do 4:2, jeżeli instruktor korzysta z pomocy jednego (1) certyfikowanego asystenta."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Program Snorkel Instructor (zgodny z ISO 13970) uprawnia do:",
    "options": [
          "Prowadzenia programu Scuba Skills Update.",
          "Prowadzenia i certyfikowania programów Snorkel Diver.",
          "Asystowania przy kursach Open Water Diver na wodach otwartych.",
          "Wydawania certyfikatów Indoor Diver."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Snorkel Instructor - Uprawnienia",
      "page": 164,
      "quote": "Uprawnienia obejmują prowadzenie i certyfikowanie programów Snorkel Diver."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Czy podczas snorkelingowych programów doświadczalnych (np. Try Snorkeling) instruktor może zwiększyć współczynnik uczestników poprzez użycie certyfikowanych asystentów?",
    "options": [
          "Tak, o 2 osoby na każdego asystenta.",
          "Tak, ale tylko w basenie.",
          "Nie, standardy dla programów Try Scuba/Snorkeling wyraźnie zabraniają zwiększania współczynników przez asystentów.",
          "Zależy to od przejrzystości wody."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba - Limit asystentów",
      "page": 46,
      "quote": "Nie można korzystać z pomocy certyfikowanych asystentów, żeby zwiększyć współczynniki."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jakie wymagania administracyjne muszą zostać spełnione przed zajęciami w wodzie dla uczestnika programu Snorkel Diver?",
    "options": [
          "Tylko Formularz Rejestracyjny.",
          "Formularz Rejestracyjny oraz Oświadczenie o stanie zdrowia (Kwestionariusz Medyczny).",
          "Zgoda lekarza jest zawsze obowiązkowa.",
          "Brak wymagań dla programów nie-nurkowych."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Snorkelingowe",
      "section": "Snorkel Diver - Administracja",
      "page": 163,
      "quote": "Wymagania administracyjne: Przed rozpoczęciem programu kursanci muszą wypełnić: Formularz rejestracyjny... oświadczenie o stanie zdrowia..."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Maksymalna głębokość dla wszystkich szkoleń snorkelingowych prowadzonych w basenie lub ograniczonym akwenie wynosi:",
    "options": [
          "2 metry.",
          "4 metry.",
          "5 metrów.",
          "Brak limitu, jeśli instruktor ma kontakt fizyczny."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Miejsca szkoleń i limity głębokości",
      "section": "Szkolenia basenowe snorkeling",
      "page": 40,
      "quote": "Maksymalna głębokość dla wszystkich szkoleń na basenie/ograniczonym akwenie wynosi 5 metrów..."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jak długo ważna jest „Umowa przejęcia ryzyka” oraz „Dodatek dla młodzieży” od daty ich podpisania?",
    "options": [
          "2 lata.",
          "1 rok.",
          "Do zakończenia szkolenia, nie dłużej niż 6 miesięcy.",
          "Bezterminowo w ramach jednego centrum."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Dokumentacja szkolenia - Ważność",
      "page": 13,
      "quote": "Umowa przejęcia ryzyka... Ważny przez jeden (1) rok od daty podpisania. Dodatek dla młodzieży... Ważny przez jeden (1) rok."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Którre z poniższych stwierdzeń dotyczących podpisywania dokumentacji przez osoby nieletnie jest prawdziwe?",
    "options": [
          "Nieletni mogą podpisywać dokumenty cyfrowo w MySSI.",
          "Osoby nieletnie nie mogą podpisywać dokumentacji cyfrowej; wymagane są podpisy rodzica/opiekuna na wersjach papierowych.",
          "Podpis nieletniego jest wystarczający powyżej 12 roku życia.",
          "Tylko instruktor podpisuje dokumenty nieletniego."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Dokumentacja szkolenia nieletnich",
      "page": 12,
      "quote": "Osoby niepełnoletnie nie mogą podpisywać dokumentacji cyfrowej."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Przez jaki minimalny okres Centrum Szkoleniowe SSI musi przechowywać oryginały Dokumentacji Szkolenia (Training Record)?",
    "options": [
          "2 lata.",
          "5 lat.",
          "10 lat (chyba że prawo lokalne wymaga dłuższego okresu).",
          "Przez cały okres aktywności nurka w MySSI."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Dokumentacja Szkolenia - Archiwizacja",
      "page": 17,
      "quote": "Dokumentacja szkolenia musi być przechowywana przez Centrum Szkoleniowe przez co najmniej dziesięć (10) lat."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Kandydat na stopień Profesjonalny SSI musi dostarczyć zgodę lekarza na nurkowanie, która jest:",
    "options": [
          "Ważna przez 2 lata od daty badania.",
          "Datowana w ciągu jednego (1) roku od daty ukończenia szkolenia profesjonalnego.",
          "Podpisana tylko przez samego kandydata, jeśli nie ma chorób.",
          "Wymagana tylko dla instruktorów technicznych (XR)."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Zgoda lekarska profesjonalisty",
      "page": 14,
      "quote": "Kandydaci do Programów Profesjonalnych są zobowiązani do dostarczenia Zezwolenia Lekarskiego... datowanego w ciągu jednego (1) roku od daty ukończenia ich szkolenia."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Dowód odbycia szkolenia z RKO, Pierwszej Pomocy oraz Podawania Tlenu dla kandydatów na stopnie Professional musi być przesłany do MySSI i być ważny:",
    "options": [
          "W ciągu ostatnich 12 miesięcy.",
          "W ciągu ostatnich 2 lat.",
          "Bezterminowo.",
          "Tylko w momencie przystępowania do Instructor Evaluation."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Szkolenie pierwszej pomocy pro",
      "page": 14,
      "quote": "Dowód odbycia szkolenia z RKO... w ciągu ostatnich dwóch (2) lat."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jeśli kursant ulegnie wypadkowi lub poważnie zachoruje w ciągu roku od podpisania Kwestionariusza Medycznego, musi on:",
    "options": [
          "Tylko poinformować instruktora o powrocie do zdrowia.",
          "Wypełnić nowy Kwestionariusz Medyczny i uzyskać nową Zgodę Lekarza przed wejściem do wody.",
          "Odczekać 14 dni od zakończenia leczenia.",
          "Zrobić Scuba Skills Update."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Zmiana stanu zdrowia kursanta",
      "page": 14,
      "quote": "Jeśli Kursant zachoruje lub odniesie obrażenia w ciągu roku, musi on wypełnić nowy Kwestionariusz Medyczny Uczestnika i Zgodę Lekarza..."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Gdzie muszą pozostać oryginały dokumentacji medycznej i szkoleniowej w przypadku procedury „Referral”?",
    "options": [
          "Są przekazywane kursantowi, aby zabrał je do nowego centrum.",
          "Muszą pozostać w Centrum Szkoleniowym, w którym kursant rozpoczął szkolenie.",
          "Są niszczone po wydaniu karty Referral Diver.",
          "Są wysyłane pocztą do biura SSI Service Center."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Referral",
      "page": 17,
      "quote": "Wszystkie oryginały dokumentacji szkoleniowej oraz formularzy medycznych muszą pozostać w Centrum Szkoleniowym, w którym kursant rozpoczął szkolenie."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Który dokument w systemie SSI posiada „stałą ważność” w ramach danej kategorii (np. Scuba) i jest potwierdzany przy każdym kolejnym programie?",
    "options": [
          "Kwestionariusz Medyczny.",
          "Umowa przejęcia ryzyka.",
          "Kodeks Odpowiedzialnego Nurka SSI.",
          "Dodatek dla młodzieży."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Kodeks Odpowiedzialnego Nurka",
      "page": 13,
      "quote": "Kodeks Odpowiedzialnego Nurka SSI: Stała ważność w ramach kategorii... i jest potwierdzana poprzez podpisanie protokołu ukończenia dowolnego programu."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Czy Dokumentacja Szkolenia przechowywana cyfrowo na serwerach SSI zwalnia Centrum z obowiązku przechowywania kopii papierowych?",
    "options": [
          "Nie, papier jest zawsze wymagany.",
          "Tak, cyfrowe elementy przesłane do MySSI spełniają wymagania dotyczące przechowywania dokumentacji.",
          "Tylko jeśli centrum posiada certyfikat ISO.",
          "Tylko dla programów poziomu podstawowego."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Dokumentacja szkolenia - cyfrowa",
      "page": 17,
      "quote": "Cyfrowe elementy dokumentacji szkolenia, które są przesyłane do MySSI, są bezpiecznie przechowywane na serwerach SSI. Spełnia to wymagania Centrum Szkoleniowego dotyczące przechowywania dokumentacji."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Kandydat Professional przed wydaniem certyfikacji musi przesłać do MySSI:",
    "options": [
          "Raport z 100 nurkowań.",
          "Rekord ukończenia programu (Program Completion Record) przesłany cyfrowo.",
          "Potwierdzenie zakupu własnego automatu.",
          "Pisemną rekomendację od dwóch innych instruktorów."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Wymagania Administracyjne",
      "section": "Zakończenie szkolenia pro",
      "page": 12,
      "quote": "Kandydaci Professional must wypełnić całą wymaganą dokumentację cyfrowo... Rekord ukończenia programu musi zostać przesłany do systemu MySSI przed wydaniem Certyfikacji."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Instruktor prowadzi kurs łączony: Nawigacja, Nurkowanie Nocne oraz Nurkowanie z Łodzi. Ile minimalnie nurkowań na wodach otwartych musi wykonać kursant, aby zaliczyć te trzy specjalizacje?",
    "options": [
          "3 nurkowania.",
          "4 nurkowania.",
          "5 nurkowań.",
          "6 nurkowań."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "IV. Łączenie programów",
      "page": 58,
      "quote": "Jeżeli trzy (3) programy specjalizacji są prowadzone jednocześnie, należy przeprowadzić co najmniej cztery (4) nurkowania szkoleniowe na Wodach Otwartych."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Instruktor łączy 4 specjalizacje w jednym cyklu. Ile minimalnie nurkowań szkoleniowych należy przeprowadzić?",
    "options": [
          "4 nurkowania.",
          "5 nurkowań.",
          "6 nurkowań.",
          "Standardy zabraniają łączenia więcej niż 3 specjalizacji."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "IV. Łączenie programów",
      "page": 59,
      "quote": "Jeżeli cztery (4) programy specjalizacji są prowadzone jednocześnie, należy przeprowadzić co najmniej pięć (5) nurkowań szkoleniowych na Wodach Otwartych."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Które z wymienionych programów są kategorycznie wyłączone z ogólnych zasad łączenia nurkowań i wymagają pełnej liczby nurkowań zgodnie ze swoimi standardami?",
    "options": [
          "Boat Diving, Navigation, Search & Recovery.",
          "Deep Diving, Diver Stress & Rescue, Decompression Diving.",
          "Night & Limited Visibility, Waves, Tides & Currents.",
          "Perfect Buoyancy i Enriched Air Nitrox."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "IV. Łączenie programów",
      "page": 59,
      "quote": "W przypadku następujących programów, wszystkie obowiązkowe... nurkowania... muszą być ukończone zgodnie z standardami dla danego programu: Deep Diving, Diver Stress & Rescue, Decompression Diving."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Zgodnie z „Uwagą” w standardach Altitude Diving, nurkowania szkoleniowe dla specjalizacji:",
    "options": [
          "Mogą być łączone z nurkowaniami 3 i 4 kursu Open Water Diver.",
          "Nie mogą być łączone z nurkowaniami szkoleniowymi programów poziomu podstawowego (entry-level).",
          "Muszą być wykonywane wyłącznie po 50 nurkowaniach stażu.",
          "Mogą być zaliczone przed ukończeniem teorii OWD."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Altitude Diving",
      "section": "VI. Limity głębokości",
      "page": 65,
      "quote": "Uwaga | Nurkowania szkoleniowe na wodach otwartych dla wszystkich specjalizacji nie mogą być łączone z nurkowaniami szkoleniowymi na wodach otwartych dla programów entry-level."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Nurek posiada potwierdzone i podpisane doświadczenie (logbook) w zakresie nurkowania z łodzi (Boat Diving). Ile nurkowań na poczet tej specjalizacji może maksymalnie zaliczyć instruktor?",
    "options": [
          "Wszystkie wymagane nurkowania.",
          "Maksymalnie jedno (1) nurkowanie.",
          "Maksymalnie dwa (2) nurkowania.",
          "Żadnego; każde nurkowanie musi być szkoleniowe."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Zaliczenie nurkowań doświadczalnych",
      "page": 59,
      "quote": "...Profesjonalista SSI może podjąć decyzję o zaliczeniu jednego (1) nurkowania na poczet danego program specjalizacji SSI."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jeśli program specjalizacji jest prowadzony równolegle z kursem Open Water Diver, kiedy można wydać certyfikat specjalizacji?",
    "options": [
          "Natychmiast po nurkowaniu specjalizacji.",
          "Dopiero po wydaniu certyfikatu Open Water Diver.",
          "Po zalogowaniu 24 nurkowań.",
          "Tylko jeśli instruktor posiada stopień Master Instructor."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "IV. Łączenie programów",
      "page": 59,
      "quote": "Certyfikat specjalizacji może być wydany dopiero po wydaniu certyfikatu Open Water Diver."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki dowód jest wymagany, aby zaliczyć nurkowanie z doświadczeniem na poczet specjalizacji?",
    "options": [
          "Zdjęcie z łodzi.",
          "Ustne oświadczenie nurka.",
          "Nurkowanie zarejestrowane, potwierdzone i podpisane przez profesjonalistę nurkowego w logbooku.",
          "Faktura za wypożyczenie sprzętu."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Zaliczenie nurkowań doświadczalnych",
      "page": 59,
      "quote": "Uwaga | Dowód nurkowania z doświadczeniem musi być zarejestrowany, potwierdzony i podpisany przez profesjonalistę nurkowego."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaka jest maksymalna liczba nurkowań szkoleniowych, które można przeprowadzić z kursantem w ciągu jednego dnia (bez dekompresji)?",
    "options": [
          "2 nurkowania.",
          "3 nurkowania.",
          "4 nurkowania.",
          "Brak limitu."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Liczba nurkowań szkoleniowych",
      "page": 32,
      "quote": "Maksymalna, dopuszczalna ilość nurkowań szkoleniowych w wodach otwartych w ciągu jednego dnia to 3..."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Ile nurkowań dziennie dopuszczają standardy, jeśli choć jedno z nich planuje lub faktycznie wymaga przystanków dekompresyjnych?",
    "options": [
          "Jedno.",
          "Dwa.",
          "Trzy.",
          "Dekompresja jest zabroniona na szkoleniach rekreacyjnych."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Liczba nurkowań szkoleniowych - Dekompresja",
      "page": 32,
      "quote": "Maksymalna liczba nurkowań szkoleniowych to dwa (2) dziennie, jeśli jakiekolwiek nurkowanie danego dnia planuje lub faktycznie wymaga przystanków dekompresyjnych."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Program Advanced Open Water Diver wymaga ukończenia 5 nurkowań z różnych specjalizacji. Które dwa są obowiązkowe?",
    "options": [
          "Deep Diving i Night Diving.",
          "Navigation i Deep Diving.",
          "Stress & Rescue i Navigation.",
          "Perfect Buoyancy i Deep Diving."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Advanced Open Water Diver",
      "section": "Wymagania",
      "page": 63,
      "quote": "Obowiązkowe nurkowania: Deep Diving 1... oraz Nawigacja 1."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Kto posiada uprawnienia do asystowania podczas Instructor Training Course (ITC) oraz seminarium Assistant Instructor Trainer?",
    "options": [
          "Każdy Master Instructor.",
          "Assistant Instructor Trainer o aktywnym statusie.",
          "Tylko Instructor Certifier.",
          "Divemaster o aktywnym statusie."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Asystowanie w szkoleniach pro",
      "page": 34,
      "quote": "Assistant Instructor Trainer SSI z aktywnym statusem może asystować podczas Instructor Training Course i Assistant Instructor Trainer Seminar."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Profesjonalista SSI o stopniu Instructor Trainer, który nie spełnia minimalnych wymagań dla tego poziomu, ale spełnia je dla stopnia Open Water Instructor, przechodzi w status:",
    "options": [
          "Status Anulowany.",
          "Status „Retired” (W spoczynku) dla stopnia IT, zachowując aktywny status OWI.",
          "Status Wydalony.",
          "Status Nieaktywny dla wszystkich stopni."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Status pro - emerytura",
      "page": 22,
      "quote": "SSI Professionals na emeryturze pozostają w aktywnym statusie dla najwyższej certyfikacji zawodowej, dla której spełniają minimalne wymagania aktywnego statusu."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Aby powrócić do statusu aktywnego po przerwie trwającej od 5 do 10 lat (status anulowany), instruktor musi:",
    "options": [
          "Tylko opłacić składkę.",
          "Ukończyć wszystkie wymagania certyfikacyjne dla swojego najwyższego stopnia (oceny w wodzie, egzaminy, teoria).",
          "Odbyć 50 nurkowań stażowych.",
          "Przejść ponownie pełny kurs Dive Guide."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Przywrócenie statusu 5-10 lat",
      "page": 23,
      "quote": "Okres dłuższy niż pięć (5) lat... Ukończenie wszystkich wymagań certyfikacyjnych dla ich najwyższego profesjonalnego certyfikatu..."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Instruktorzy (OWI i wyżej), którzy chcą wrócić do statusu aktywnego po przerwie dłuższej niż 10 lat, muszą dodatkowo:",
    "options": [
          "Ukończyć kurs Divemastera.",
          "Zdać ponownie Instructor Evaluation (IE).",
          "Kupić nowe materiały cyfrowe.",
          "Uzyskać zgodę od SSI International."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Przywrócenie statusu >10 lat",
      "page": 24,
      "quote": "Instruktorzy Open Water Instructor (Open Water Instructor) i wyżsi muszą również zdać Instructor Evaluation."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaka jest rola „Instruktora Certifier” (Instructor Certifier) w procesie szkolenia?",
    "options": [
          "Odpowiada za sprzedaż sprzętu.",
          "Jest instruktorem rekordu, odpowiedzialnym za finalną ocenę umiejętności/wiedzy i prawidłowość dokumentacji.",
          "Może certyfikować wyłącznie Divemasterów.",
          "Jest jedyną osobą uprawnioną do podpisywania logbooków."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Instructor Certifier",
      "page": 16,
      "quote": "Instruktor Certifier jest instruktorem rekordu... Jest on odpowiedzialny za zapewnienie, że dokumentacja szkolenia jest prawidłowo wypełniona..."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki status otrzymuje automatycznie Profesjonalista SSI zaangażowany w zdarzenie prowadzące do śmierci uczestnika pod jego bezpośrednim nadzorem?",
    "options": [
          "Status Wydalony (Expelled).",
          "Status Wstrzymany Administracyjnie (Administrative Hold).",
          "Status Retired.",
          "Status Canceled."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Status pro - Wstrzymanie",
      "page": 22,
      "quote": "Profesjonalista SSI, który był zaangażowany w wydarzenie prowadzące do śmierci uczestnika... automatycznie otrzymuje status „Wstrzymany administracyjnie”."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Kto może prowadzić seminarium dla kandydatów na stopień Specialty Instructor?",
    "options": [
          "Divemaster Instructor.",
          "Assistant Instructor Trainer lub wyższy stopień.",
          "Każdy instruktor z 2-letnim stażem.",
          "Tylko Manager QMS."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Seminaria Specialty Instructor",
      "page": 132,
      "quote": "Assistant Instructor Trainer lub wyższy (np. Instructor Trainer) mogą prowadzić seminaria dla Instruktorów Specjalizacji."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Czy SSI Professional ze statusem „Nieaktywnym” (Inactive) może prowadzić programy SSI?",
    "options": [
          "Tak, pod nadzorem innego instruktora.",
          "Nie, nie może prowadzić żadnych programów SSI do czasu przywrócenia statusu aktywnego.",
          "Tak, ale tylko zajęcia teoretyczne.",
          "Tak, wyłącznie programy Try Scuba."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Status nieaktywny - ograniczenia",
      "page": 21,
      "quote": "Status nieaktywny... nie mogą prowadzić żadnych programów SSI dopóki nie przywrócą statusu aktywnego."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Zgodnie ze standardami, ubezpieczenie OC Profesjonalisty SSI musi:",
    "options": [
          "Obejmować wyłącznie nurkowania w kraju zamieszkania.",
          "Zawierać SSI jako dodatkowo ubezpieczonego (jeśli wymaga tego prawo lokalne).",
          "Być dobrowolne.",
          "Obejmować tylko nurkowania techniczne."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Ubezpieczenie OC - Wymagania",
      "page": 20,
      "quote": "Profesjonalista SSI must: Zagwarantować, że SSI zostanie uwzględniona jako dodatkowo ubezpieczony na polisie..."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki stopień uprawnia do prowadzenia i certyfikowania programu Divemaster?",
    "options": [
          "Open Water Instructor.",
          "Dive Guide Instructor o aktywnym statusie.",
          "Tylko Instructor Trainer.",
          "Assistant Instructor."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Prowadzenie Divemastera",
      "page": 83,
      "quote": "Instruktor Dive Guide o aktywnym statusie może prowadzić program Divemaster."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Które z poniższych NIE jest jednym z 4 kryteriów uznania innej agencji szkoleniowej przez SSI?",
    "options": [
          "Działanie na rynku od co najmniej 5 lat.",
          "Posiadanie co najmniej 250 instruktorów i 50 centrów na świecie.",
          "Posiadanie własnego centrum medycznego dla nurków.",
          "Aktywny certyfikat ISO lub członkostwo w RSTC."
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Specjalizacji",
      "section": "Kryteria Uznania innej agencji",
      "page": 19,
      "quote": "Lista zawiera: 5 lat rynkowych, 3 języki, 250 instruktorów, ISO/RSTC. Brak zapisu o centrum medycznym."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "W konfiguracji Sidemount, nurek musi posiadać automat z wężem o długości:",
    "options": [
          "100-120 cm.",
          "1.8 - 2.1 metra (tzw. długi wąż).",
          "75 cm.",
          "3 metry."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Konfiguracje sprzętowe",
      "section": "Sidemount - wąż",
      "page": 30,
      "quote": "Jeden automat z drugim stopniem z wężem długości 1.8-2.1 metra."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jakie są wymagania dotyczące manometrów w programach Decompression Diving oraz Sidemount?",
    "options": [
          "Jeden manometr na butli głównej jest wystarczający.",
          "Każda butla (główna, stage, niezależne butle sidemount) musi być wyposażona w manometr.",
          "Manometry mogą być zastąpione transmiterami bez wersji analogowej.",
          "Tylko butla dekompresyjna musi mieć manometr."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Konfiguracje sprzętowe",
      "section": "Wymagania dotyczące manometrów",
      "page": 30,
      "quote": "Każda butla musi być wyposażona w manometr."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaka jest maksymalna dopuszczalna wartość ppO2 podczas fazy dekompresji w programie Decompression Diving?",
    "options": [
          "1.4 bara.",
          "1.6 bara.",
          "1.2 bara.",
          "2.0 bary."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Decompression Diving - limit ppO2",
      "page": 27,
      "quote": "Podczas szkolenia programu Decompression Diving ppO2 dla fazy dekompresji nie może przekroczyć 1.6 bar."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Definicja „przestrzeni zamkniętej ze strefą dostępu światła dziennego” (Overhead Environment) wymaga, aby kursant:",
    "options": [
          "Był w odległości 100 metrów od wyjścia.",
          "Przez cały czas widział bezpieczne okno naturalnego światła dziennego.",
          "Nurkował wyłącznie w nocy.",
          "Posiadał dwa niezależne źródła gazu."
    ],
    "answer": 1,
    "reference": {
      "chapter": "Miejsca szkoleń i limity głębokości",
      "section": "Przestrzenie zamknięte - światło",
      "page": 41,
      "quote": "Ma wyraźnie widoczny punkt wejścia i przez cały czas kursant widzi bezpieczne okno naturalnego światła dziennego..."
    },
    "category": "Współczynniki i Wiek"
  }
,
  {
    "question": "W Pełnym Systemie Nurkowym Sidemount, każdy manometr musi być wyposażony w wąż wysokiego ciśnienia o ściśle określonej długości. Jaki to zakres?",
    "options": [
          "10-15 cm",
          "15-25 cm",
          "50-75 cm",
          "Standardy nie określają długości węża HP w tej konfiguracji"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > III. Nurkowanie Sidemount > a.",
      "page": 30,
      "quote": "Manometr z wężem wysokiego ciśnienia o długości 15-25 cm"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaka jest wymagana długość węża drugiego stopnia automatu, który w konfiguracji Sidemount służy jako tzw. \"wąż długi\"?",
    "options": [
          "1.5 - 2.0 metra",
          "1.8 - 2.1 metra",
          "Dokładnie 2.1 metra",
          "Minimum 2.1 metra"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > III. Nurkowanie Sidemount > a.",
      "page": 30,
      "quote": "Jeden automat z drugim stopniem z wężem długości 1.8-2.1 metra"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Podczas realizacji programu Decompression Diving, jakie jest maksymalne dopuszczalne ciśnienie parcjalne tlenu (ppO2) wyłącznie dla fazy dekompresji?",
    "options": [
          "1.4 bar",
          "1.5 bar",
          "1.6 bar",
          "1.6 bar, ale tylko przy użyciu czystego tlenu"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > I. Gaz oddechowy",
      "page": 27,
      "quote": "Podczas szkolenia programu Decompression Diving ppO2 dla fazy dekompresji nie może przekroczyć 1.6 bar."
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jeżeli instrukcja obsługi regulatora wyraźnie stwierdza, że jest on przeznaczony do użytku wyłącznie przez jedną osobę, w co musi być wyposażony instruktor SSI podczas ćwiczeń air-sharing jako dawca?",
    "options": [
          "W zintegrowany system alternatywnego źródła powietrza (np. Air2)",
          "W niezależny, nadmiarowy system oddechowy",
          "W automat o zwiększonym wydatku (High-flow)",
          "W takim przypadku instruktor nie może być dawcą gazu"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Filozofia SSI szkolenia w wodzie > I. c. Uwaga",
      "page": 10,
      "quote": "Jeśli Podręcznik wyraźnie mówi, że regulator jest przeznaczony do użytku tylko przez jedną osobę, instruktor musi być przynajmniej wyposażony w niezależny nadmiarowy system oddechowy"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Który z poniższych parametrów jest jednym z czterech kryteriów niezbędnych, aby agencja szkoleniowa mogła zostać uznana przez SSI za \"Uznaną Agencję Szkoleniową\"?",
    "options": [
          "Posiadanie minimum 100 autoryzowanych centrów szkoleniowych",
          "Zapewnienie materiałów szkoleniowych w co najmniej trzech (3) językach",
          "Działanie na rynku od co najmniej dziesięciu (10) lat",
          "Posiadanie co najmniej 500 aktywnych instruktorów na świecie"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Certyfikaty równoważne > III. Kryteria Uznania SSI",
      "page": 19,
      "quote": "Musi zapewniać pełny zestaw materiałów szkoleniowych w co najmniej trzech (3) językach."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaka jest wymagana długość węża dla drugiego stopnia automatu, który jest zawieszony na szyi kursanta (na pętli) w konfiguracji Sidemount?",
    "options": [
          "15-25 cm",
          "50-75 cm",
          "1.8-2.1 metra",
          "Długość dowolna, pod warunkiem zachowania opływowości"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > III. Nurkowanie Sidemount > a.",
      "page": 30,
      "quote": "Jeden automat z drugim stopniem z wężem 50-75 cm, z pętlą do zawieszenia automatu na szyi"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "W programie Decompression Diving, jaki typ boi sygnalizacyjnej do wypuszczania z głębokości jest konkretnie zalecany przez standardy?",
    "options": [
          "Boja żółta (Emergency)",
          "Boja czerwona",
          "Boja o wyporności minimum 25 kg",
          "Dowolna boja z flagą nurkową"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > IV. Program Decompression Diving > a.",
      "page": 36,
      "quote": "Jedno urządzenie sygnalizacyjne do wypuszczania z głębokości (zalecana jest czerwona boja sygnalizacyjna...)"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Kiedy używanie fajki podczas szkolenia w wodzie jest uznawane za opcjonalne według uznania instruktora?",
    "options": [
          "Wyłącznie w programach Deep Diving i Wreck Diving",
          "We wszystkich programach z wyjątkiem: Snorkel Diver, Scuba Diver, Referral Diver, Indoor Diver i Open Water Diver",
          "Tylko podczas sesji w basenie (Pool)",
          "Nigdy – fajka jest elementem obowiązkowym każdego Pełnego Systemu Nurkowego"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > II. Nurkowanie rekreacyjne > a. Uwaga",
      "page": 29,
      "quote": "używanie fajki... jest opcjonalne dla wszystkich programów oprócz: Snorkel Diver, Scuba Diver, Referral Diver, Indoor Diver i Open Water Diver."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Który element wyposażenia ratunkowego musi być dostępny w pobliżu miejsca szkolenia zgodnie z wymogiem \"Obowiązku opieki\" (Duty of Care)?",
    "options": [
          "Defibraylator AED",
          "Sprzęt łączności",
          "Zestaw do intubacji",
          "Analizator helowy"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Obowiązek opieki > VI. Sprzęt ratunkowy",
      "page": 15,
      "quote": "W pobliżu miejsca szkolenia musi być dostępny sprzęt ratunkowy, w tym apteczka pierwszej pomocy, aparat tlenowy i sprzęt łączności."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki jest wymóg doświadczenia dla Profesjonalisty SSI, który zamierza używać maski pełnotwarzowej (Full Face Mask) podczas prowadzenia programów SSI?",
    "options": [
          "Posiadanie certyfikatu Specialty Instructor FFM",
          "Minimum 10 zalogowanych nurkowań in tym typie sprzętu",
          "Minimum 25 zalogowanych nurkowań w tym typie sprzętu",
          "Brak specyficznych wymagań dotyczących liczby nurkowań"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > II. Nurkowanie rekreacyjne > b. Zalecenie",
      "page": 29,
      "quote": "Profesjonaliści SSI, którzy używają... masek pełnotwarzowych... muszą mieć praktyczne doświadczenie... (co najmniej 10 zalogowanych nurkowań)"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jak standardy SSI definiują \"odległość linearną\" (Linear Distance) w kontekście środowisk zamkniętych (Overhead Environment)?",
    "options": [
          "Pozioma odległość od wyjścia do strefy światła",
          "Najkrótsza droga do najbliższego punktu pionowego dostępu",
          "Suma odległości pionowej i poziomej, którą nurek musi pokonać, aby osiągnąć powierzchnię",
          "Odległość mierzona wzdłuż liny poręczowej (main line)"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Przestrzenie zamknięte > I. Odległość linearna",
      "page": 41,
      "quote": "Dystans pływania definiowany jest jako suma odległości pionowej i poziomej, którą nurek musi pokonać, żeby osiągnąć powierzchnię wody."
    },
    "category": "Fizyka i Fizjologia"
  },
  {
    "question": "Nurek posiadający certyfikat Advanced Open Water Diver eksploruje jaskinię (Cavern) na głębokości 25 metrów. Jaki jest jego maksymalny dopuszczalny dystans penetracji w poziomie, przy całkowitym limicie odległości linearnej 60m?",
    "options": [
          "35 metrów",
          "40 metrów",
          "30 metrów",
          "25 metrów"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Przestrzenie zamknięte > I. Odległość linearna",
      "page": 41,
      "quote": "Advanced Open Water Diver... eksplorujący jaskinię na głębokości 25 metrów miałby zatem dozwolony maksymalny dystans penetracji wynoszący 35 metrów."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jakie precyzyjne parametry musi spełniać obiekt sztuczny, aby został sklasyfikowany jako miejsce do \"Nurkowania Indoor\"?",
    "options": [
          "Głębokość min. 4m i powierzchnia min. 100 m²",
          "Głębokość powyżej 5m i powierzchnia min. 100 m²",
          "Głębokość min. 5m i powierzchnia min. 50 m²",
          "Dowolna struktura sztuczna głębsza niż 5 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Definicje związane ze środowiskiem > VII. Nurkowanie Indoor",
      "page": 13,
      "quote": "Akwaria i specjalnie zbudowane sztuczne obiekty... o minimalnej głębokości większej niż pięć (5) metrów i minimalnej powierzchni wody wynoszącej 100 metrów kwadratowych"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Która z cech NIE jest wymagana, aby struktura mogła zostać uznana za \"przestrzeń zamkniętą, przez którą można przepłynąć\" (swim-through) w nurkowaniu rekreacyjnym?",
    "options": [
          "Długość mniejsza niż 10 metrów",
          "Maksymalna głębokość nieprzekraczająca 30 metrów",
          "Widoczne i wyodrębnione punkty wejścia i wyjścia",
          "Szerokość pozwalająca na przepłynięcie dwóch nurków obok siebie"
    ],
    "answer": 3,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Przestrzenie zamknięte > II. Przestrzeń zamknięta, przez którą można przepłynąć",
      "page": 41,
      "quote": "Struktura ta posiada następujące cechy: Mieć mniej niż 10 metrów długości. Maksymalna głębokość nie może przekraczać 30 metrów. Posiada wyodrębnione i widoczne punkty wejścia i wyjścia"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Co musi zrobić Profesjonalista SSI, jeśli klient prosi o wydanie ekwiwalentnego certyfikatu SSI na podstawie licencji z agencji NIE-uznawanej przez SSI?",
    "options": [
          "Wydać certyfikat automatycznie po opłaceniu składki",
          "Przeprowadzić SSI Experienced Diver Test (egzamin, sesja basenowa i min. 2 nurkowania na wodach otwartych)",
          "Wymagana jest wyłącznie weryfikacja logbooka (min. 50 nurkowań)",
          "Nie ma możliwości wydania ekwiwalentu z agencji nieuznawanej"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Certyfikaty równoważne > II. Certyfikaty Nie-Uznanych Przez SSI Agencji",
      "page": 19,
      "quote": "Kursanci ci muszą pomyślnie zdać test SSI Experienced Diver, zgodnie ze standardami szkolenia SSI."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Na jakiej maksymalnej głębokości musi zostać umieszczona platforma szkoleniowa w ograniczonym akwenie, jeśli dno znajduje się zbyt głęboko, by kursanci mogli swobodnie stanąć?",
    "options": [
          "1 metr",
          "2 metry",
          "3 metry",
          "5 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Miejsca szkoleń i limity głębokości > II. Ograniczony akwen",
      "page": 40,
      "quote": "instruktor musi wykorzystać platformę znajdującą się maksymalnie na 2 metrach głębokości"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest maksymalny limit głębokości dla nurka w wieku 10-11 lat posiadającego certyfikat Open Water Diver?",
    "options": [
          "12 metrów (z profesjonalistą lub certyfikowaną osobą dorosłą)",
          "12 metrów (wyłącznie pod bezpośrednim nadzorem instruktora)",
          "18 metrów (jak dorośli)",
          "5 metrów"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Miejsca szkoleń i limity głębokości > IV. Zalecane limity głębokości",
      "page": 40,
      "quote": "10- i 11-latki | 12 metrów z profesjonalnym nurkiem o aktywnym statusie lub certyfikowaną osobą dorosłą"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Od jakiej wysokości nad poziomem morza nurkowanie musi być planowane jako \"Nurkowanie w górach\" (Altitude Diving)?",
    "options": [
          "Powyżej 100 metrów",
          "Powyżej 300 metrów",
          "Powyżej 500 metrów",
          "Powyżej 1000 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Definicje związane ze środowiskiem > IV. Nurkowanie w górach",
      "page": 13,
      "quote": "Profesjonalista SSI musi planować wszystkie nurkowania na wysokości powyżej 300 metrów przy użyciu specjalnych... tabel"
    },
    "category": "Specjalizacje"
  },
  {
    "question": "Jaki jest wymagany poziom rezerwy gazu w momencie wynurzenia podczas nurkowania w przestrzeni zamkniętej poza strefą światła dziennego?",
    "options": [
          "50 bar",
          "1/4 całkowitego zapasu gazu",
          "1/3 całkowitego zapasu gazu",
          "Rezerwa obliczona na 5 minut pobytu na dnie przy SCR=20l/min"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Przestrzenie zamknięte > IV. Nurkowania poza strefą światła dziennego",
      "page": 41,
      "quote": "zaplanowano odpowiednią ilość gazu, aby w momencie wynurzenia zachowana została rezerwa w ilości 1/3 całkowitej ilości zapasu gazu"
    },
    "category": "Fizyka i Fizjologia"
  },
  {
    "question": "Jakie jest dopuszczalne ppO2 dla kursanta w programie Enriched Air Nitrox (EAN)?",
    "options": [
          "Maksymalnie 1.4 bar w dowolnym momencie nurkowania",
          "Maksymalnie 1.6 bar w dowolnym momencie nurkowania",
          "1.4 bar podczas fazy dennej i 1.6 bar podczas przystanku bezpieczeństwa",
          "Zależne od MOD wyliczonej dla EAN32"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Definicje sprzętowe > I. Gaz oddechowy",
      "page": 27,
      "quote": "Jeżeli gazem oddechowym jest nitroks, ppO2 w dowolnym momencie nurkowania nie może przekraczać 1.4 bara."
    },
    "category": "Fizyka i Fizjologia"
  },
  {
    "question": "Kto w strukturach SSI może ubiegać się o status \"Retired\" (W spoczynku), jeśli nie spełnia minimalnych wymagań aktywnego statusu dla swoich najwyższych uprawnień?",
    "options": [
          "Każdy Profesjonalista SSI po 60. roku życia",
          "Wyłącznie Instruktorzy Open Water (OWI)",
          "Assistant Instructor Trainers, Instructor Trainers oraz Instructor Certifiers",
          "Każdy Profesjonalista SSI, który zaprzestał działalności komercyjnej"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Status SSI Professional > VII. Status „w spoczynku” (Retired)",
      "page": 22,
      "quote": "Certyfikaty, których to dotyczy: Assistant Instructor Trainer, Instructor Trainer, Instructor Certifier"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki status otrzymuje Profesjonalista SSI w wyniku incydentu prowadzącego do śmierci uczestnika szkolenia, nad którym sprawował on bezpośredni nadzór?",
    "options": [
          "Expelled (Wydalony)",
          "Suspended (Zawieszony)",
          "Administrative Hold (Wstrzymany administracyjnie)",
          "Canceled (Anulowany)"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Status SSI Professional > IV. Status „Wstrzymany administracyjnie”",
      "page": 22,
      "quote": "Profesjonalista SSI, który był zaangażowany w wydarzenie prowadzące do śmierci uczestnika... automatycznie otrzymuje status „Wstrzymany administracyjnie”"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaca procedura obowiązuje instruktora Open Water Instructor, który chce przywrócić aktywny status po przerwie trwającej ponad dziesięć (10) lat?",
    "options": [
          "Ukończenie Scuba Skills Update i opłacenie składki",
          "Ponowne ukończenie pełnego kursu ITC",
          "Ukończenie wszystkich wymagań certyfikacyjnych dla najwyższego stopnia oraz zdanie Instructor Evaluation (IE)",
          "Procedura taka sama jak po 3 latach przerwy"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Przywrócenie Aktywnego Statusu > II. d. Ponad dziesięć (10) lat",
      "page": 24,
      "quote": "Instruktorzy Open Water Instructor (Open Water Instructor) i wyżsi muszą również zdać Instructor Evaluation."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Kto ponosi ostateczną odpowiedzialność za przeprowadzenie sprawdzenia przeszłości kryminalnej (Criminal Background Check) Profesjonalisty SSI pracującego z małoletnimi?",
    "options": [
          "Wyłącznie Service Center SSI",
          "Każdy SSI Professional i Centrum Szkoleniowe (zgodnie z przepisami lokalnymi)",
          "Rodzice kursanta przed podpisaniem Addendum",
          "SSI International poprzez system MySSI"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Jak korzystać ze Standardów > IV. a. Sprawdzenie przeszłości kryminalnej",
      "page": 12,
      "quote": "Każdy SSI Professional i Centrum Szkoleniowe są odpowiedzialne za zrozumienie i przestrzeganie wszelkich odpowiednich przepisów lokalnych..."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Przez jaki minimalny okres Centrum Szkoleniowe SSI musi przechowywać dokumentację szkoleniową (Training Records) kursantów?",
    "options": [
          "2 lata",
          "5 lat",
          "10 lat",
          "Przez cały okres aktywności zawodowej instruktora"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Wymagania Administracyjne > Procedury certyfikacji > VIII. b. Dokumentacja szkolenia",
      "page": 17,
      "quote": "Dokumentacja szkolenia musi być przechowywana przez Centrum Szkoleniowe przez co najmniej dziesięć (10) lat."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Co dzieje się z Profesjonalistą SSI, który został wydalony (Expelled) z innej agencji nurkowej (np. PADI, CMAS)?",
    "options": [
          "Automatycznie traci status w SSI bez możliwości odwołania",
          "Może kwalifikować się do statusu aktywnego SSI, ale decyzja leży w gestii SSI International i jest rozpatrywana indywidualnie",
          "SSI nie weryfikuje statusu w innych agencjach",
          "Musi ponownie ukończyć kurs Science of Diving, aby dowieść kompetencji"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Status SSI Professional > VI. a. Osoby wydalone z innych agencji",
      "page": 22,
      "quote": "If Professional zostanie wydalony z innej agencji... Decyzja ta leży w gestii SSI International i będzie rozpatrywana indywidualnie."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jakie uprawnienia zachowuje SSI Professional o statusie \"Retired\"?",
    "options": [
          "Nie może prowadzić żadnych programów w wodzie",
          "Pozostaje w aktywnym statusie dla najwyższej certyfikacji zawodowej, dla której spełnia minimalne wymagania i może prowadzić programy na poziomie kursanta",
          "Może prowadzić wyłącznie zajęcia teoretyczne (Academic)",
          "Może wydawać certyfikaty, ale nie może ich podpisywać"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Status SSI Professional > VII. Status „w spoczynku” (Retired)",
      "page": 22,
      "quote": "pozostają w aktywnym statusie dla najwyższej certyfikacji zawodowej... Mogą oni również nadal prowadzić wszystkie programy na poziomie Kursanta"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "W jakim terminie od zakończenia programu wszystkie certyfikacje muszą zostać przetworzone w systemie MySSI?",
    "options": [
          "W ciągu 24 godzin",
          "W ciągu 7 dni",
          "W ciągu 14 dni",
          "Do końca miesiąca rozliczeniowego"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Wymagania Administracyjne > Procedury certyfikacji > III. Wydawanie certyfikatów",
      "page": 16,
      "quote": "Wszystkie certyfikacje i wyróżnienia must zostać przetworzone w ciągu siedmiu (7) dni od zakończenia programu."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jak długo ważna jest Umowa przejęcia ryzyka i zwolnienia od odpowiedzialności (Liability Release) od daty jej podpisania?",
    "options": [
          "Bezterminowo dla danego Centrum",
          "Przez sześć (6) miesięcy",
          "Przez jeden (1) rok",
          "Tylko przez czas trwania konkretnego kursu"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Dokumentacja szkolenia > II. a. Przed rozpoczęciem szkolenia",
      "page": 13,
      "quote": "Umowa przejęcia ryzyka... Ważny przez jeden (1) rok od daty podpisania."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki status posiada Profesjonalista SSI, który nie opłacił rocznej składki członkowskiej (Professional Renewal)?",
    "options": [
          "Inactive",
          "Suspended",
          "Canceled",
          "Retired"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Status SSI Professional > III. Status \"Anulowany\" (Canceled)",
      "page": 21,
      "quote": "Osoba która posiada certyfikat Profesjonalisty SSI, ale nie wniosła opłaty rocznej do SSI."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki jest maksymalny współczynnik kursantów do instruktora (Ratio) w programie Open Water Diver dla młodzieży w wieku 10-14 lat przy wykorzystaniu dwóch (2) certyfikowanych asystentów na wodach otwartych?",
    "options": [
          "6:2",
          "8:3",
          "10:3",
          "12:3"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Scuba Diver > VI. b. Wody ograniczone i Wody otwarte",
      "page": 53,
      "quote": "Liczba ta może wzrosnąć do 8:3, jeżeli instruktor korzysta z pomocy dwóch (2) certyfikowanych asystentów."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest dopuszczalny stosunek liczby kursantów do instruktora (Ratio) w wodzie, jeżeli podczas podstawowego szkolenia kursanci używają suchych skafandrów?",
    "options": [
          "8:1",
          "6:1",
          "4:1",
          "2:1"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Specjalistyczny sprzęt nurkowy > II. Suche skafandry",
      "page": 30,
      "quote": "Stosunek liczby kursantów do liczby instruktorów na każdym podstawowym szkoleniu w wodzie, na którym kursant będzie nurkował w suchym skafandrze, wynosi 4:1."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Zgodnie z zaleceniami SSI, jaki jest sugerowany czas przerw powierzchniowych między nurkowaniami dla nurków w wieku 10-14 lat, jeżeli wykonują oni trzy (3) nurkowania dziennie?",
    "options": [
          "Minimum 1 godzina",
          "Minimum 2 godziny",
          "Minimum 30 minut",
          "Standardy nie określają przerw dla tej grupy wiekowej"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Czas trwania programu > III. Zalecenie",
      "page": 13,
      "quote": "wydłuż przerwy powierzchniowe do dwóch (2 ) godzin między nurkowaniami"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaka jest maksymalna liczba kursantów na jednego instruktora w programie Deep Diving podczas nurkowań na głębokość większą niż 30 metrów?",
    "options": [
          "8:1 (z asystentem)",
          "6:1",
          "4:1 (bez możliwości zwiększenia przez asystentów)",
          "2:1"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Programy Kontynuacji Edukacji",
      "section": "Deep Diving > VII. Współczynnik ilościowy w wodzie",
      "page": 75,
      "quote": "Nurkowania na głębokość poniżej 30 metrów: Współczynnik kursant-instruktor: 4:1. Nie można korzystać z pomocy certyfikowanych asystentów..."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Kiedy certyfikowany Divemaster SSI może asystować przy programach specjalistycznych?",
    "options": [
          "Zawsze, bez dodatkowych wymogów",
          "Tylko jeśli posiada certyfikat na poziomie nurka (User Level) dla danej specjalizacji",
          "Tylko jeśli ukończył Specialty Instructor Seminar",
          "Divemasterzy nie mogą asystować w specjalizacjach, tylko w OWD"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Korzystanie z pomocy certyfikowanych asystentów > I.",
      "page": 122,
      "quote": "W przypadku programów specjalizacji certyfikowany asystent musi posiadać certyfikat na poziomie nurka dla danego programu."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest maksymalny współczynnik w wodzie dla programu Try Scuba w ograniczonym akwenie dla dzieci w wieku 8-9 lat przy asyście jednego (1) pomocnika?",
    "options": [
          "2:1",
          "4:2",
          "6:2",
          "8:1"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Doświadczania",
      "section": "Try Scuba > VII. b. Ograniczony akwen",
      "page": 46,
      "quote": "kursanci w wieku 8 i 9 lat: Współczynnik... 2:1. Liczba ta może wzrosnąć do 4:2, jeżeli instruktor korzysta z pomocy jednego (1) certyfikowanego asystenta."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Kto musi bezpośrednio prowadzić wszystkie symulowane umiejętności awaryjnego wynurzania (np. ESA) podczas każdego szkolenia w wodzie?",
    "options": [
          "Dowolny aktywny Divemaster",
          "Assistant Instructor pod nadzorem pośrednim",
          "Open Water Instructor lub Profesjonalista SSI o wyższych uprawnieniach",
          "Wyłącznie Instructor Trainer"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Nadzór > VI. Umiejętności wynurzenia awaryjnego",
      "page": 15,
      "quote": "SSI Open Water Instructor lub wyższy musi bezpośrednio prowadzić wszystkie symulowane umiejętności awaryjnego wynurzania"
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Zgodnie z zaleceniami SSI, jakie ograniczenie czasowe należy rozważyć dla nurkowań głębszych niż 12 metrów przeprowadzanych z nurkami w wieku 10-14 lat (przy 3 nurkowaniach dziennie)?",
    "options": [
          "Skrócenie czasu dennego do 15 minut",
          "Skrócenie maksymalnego czasu nurkowania do 30 minut",
          "Brak ograniczeń czasowych, liczy się tylko głębokość",
          "Nurkowie ci nie mogą przekraczać 12 metrów głębokości"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Czas trwania programu > III. Zalecenie",
      "page": 13,
      "quote": "zmniejsz maksymalny czas nurkowania do 30 minut dla nurkowań głębszych niż 12 metrów"
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Na jaką maksymalną głębokość można zabrać kursanta podczas symulowanego wynurzenia awaryjnego (ESA) na wodach otwartych?",
    "options": [
          "5 metrów",
          "9 metrów",
          "12 metrów",
          "18 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Nadzór > VI. Umiejętności wynurzenia awaryjnego",
      "page": 15,
      "quote": "Każde szkolenie z zakresu wynurzania się... musi być przeprowadzone z głębokości dziewięciu (9) metrów lub mniejszej."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jaki jest minimalny wiek kandydata na program SSI Divemaster?",
    "options": [
          "15 lat",
          "17 lat",
          "18 lat",
          "21 lat"
    ],
    "answer": 0,
    "reference": {
      "chapter": "Programy Profesjonalne",
      "section": "Divemaster > III. Wymagania wstępne dla kandydata",
      "page": 123,
      "quote": "Minimalny wiek | 15 lat."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Które z poniższych ćwiczeń jest kategorycznie zabronione przez \"Zasadę elastyczności SSI\" i nie może być nauczane?",
    "options": [
          "Zdejmowanie maski w toni",
          "Oddychanie bezpośrednio z zaworu butli (free-flow)",
          "Nurkowanie bez komputera",
          "Holowanie partnera na dystansie 100 metrów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Jak korzystać ze Standardów > V. Zasada elastyczności SSI",
      "page": 12,
      "quote": "Ćwiczenia takie jak... oddychanie bezpośrednio z zaworu butli... nie są zatwierdzone przez SSI"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "W jakim terminie Profesjonalista SSI musi niezwłocznie powiadomić Service Center o incydencie nurkowym, którego był świadkiem lub uczestnikiem?",
    "options": [
          "W ciągu 24 godzin",
          "Niezwłocznie (Immediately)",
          "W ciągu 7 dni",
          "Tylko jeśli poszkodowany zgłosił sprawę do sądu"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Obowiązek opieki > VII. Procedury składania sprawozdań",
      "page": 15,
      "quote": "musi niezwłocznie powiadomić odpowiedzialne Service Center SSI"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Co instruktor SSI musi posiadać na piśmie dla każdego miejsca nurkowego, w którym prowadzi szkolenia w wodzie?",
    "options": [
          "Pozwolenie od władz lokalnych",
          "Plan ratunkowy (Emergency Action Plan)",
          "Analizę składu chemicznego wody",
          "Listę obecności kursantów"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Obowiązek opieki > V. Plan działania w nagłych wypadkach",
      "page": 15,
      "quote": "musi posiadać na piśmie plan ratunkowy na wypadek wystąpienia sytuacji awaryjnej"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jeśli od ostatniej sesji w wodzie kursanta na poziomie podstawowym minęło więcej niż 12 miesięcy, co jest wymaganą procedurą przed kontynuacją szkolenia?",
    "options": [
          "Powtórzenie egzaminu końcowego",
          "Ukończenie pełnego programu SSI Scuba Skills Update",
          "Jedynie krótki wywiad z instruktorem",
          "Rozpoczęcie kursu od początku (re-enrollment)"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Czas trwania programu > II. Czas na ukończenie kursu",
      "page": 13,
      "quote": "jeśli minęło więcej niż 12 miesięcy od ostatniej sesji kursanta w wodzie, musi on ukończyć SSI Scuba Skills Update."
    },
    "category": "Metodyka i Psychologia"
  },
  {
    "question": "Jaki jest minimalny wynik zaliczenia egzaminu końcowego dla programów poziomu Professional (np. Divemaster, ITC)?",
    "options": [
          "80%",
          "85%",
          "90%",
          "100% (wszystkie błędy muszą być omówione do 100%)"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Ocena wiedzy i umiejętności > II. Egzamin Końcowy",
      "page": 16,
      "quote": "Minimalny wynik dla programów na poziomie Professional | 90%."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Co SSI zaleca nurkowi, który nie nurkował przez pięć (5) lat lub dłużej przed wymianą zagubionej karty certyfikacyjnej?",
    "options": [
          "Przedłożenie dowodu 10 nurkowań z ostatniego roku",
          "Ukończenie programu Scuba Skills Update",
          "Zakup nowego zestawu Digital Kit",
          "Zaliczenie Experienced Diver Test"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Wymagania Administracyjne > Procedury certyfikacji > VII. Zalecenie",
      "page": 16,
      "quote": "Osoby, które nie nurkowały przez pięć (5) lat lub dłużej... powinny zapisać się do programu Scuba Skills Update"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Czy Profesjonalista SSI może wykonywać inne czynności (np. profesjonalna fotografia/filmowanie) podczas nadzorowania kursantów na poziomie podstawowym (Entry-level)?",
    "options": [
          "Tak, jeśli ma dwóch certyfikowanych asystentów",
          "Nie, nie może zajmować się innymi czynnościami niż nadzór (z wyjątkiem np. małego aparatu do dokumentacji)",
          "Tak, o ile warunki są idealne (Visibility > 20m)",
          "Tak, ale tylko w basenie"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Prowadzenie programów SSI > Nadzór",
      "page": 15,
      "quote": "Profesjonaliści SSI nie mogą zajmować się innymi czynnościami niż nadzór... Można jednak wykonywać czynności... np. robienie zdjęć za pomocą małego aparatu"
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Kto ponosi odpowiedzialność za weryfikację ubezpieczenia OC Profesjonalisty SSI (jeśli jest wymagane)?",
    "options": [
          "SSI International",
          "Service Center SSI",
          "Sam Profesjonalista SSI (Service Center nie weryfikuje polisy, choć certyfikacje mogą być wstrzymane)",
          "Manager QMS podczas audytu"
    ],
    "answer": 2,
    "reference": {
      "chapter": "Ogólne Standardy Obowiązków",
      "section": "Obowiązki Profesjonalisty SSI > Wymagania dotyczące odpowiedzialności zawodowej > I.",
      "page": 20,
      "quote": "SSI i SSI Service Centers nie są odpowiedzialne za weryfikację, czy SSI Professional spełnia wymagania dotyczące ubezpieczenia..."
    },
    "category": "Standardy Ogólne"
  },
  {
    "question": "Jaki jest minimalny łączny czas denny wymagany dla Nurkowań szkoleniowych na wodach otwartych w programie Open Water Diver?",
    "options": [
          "60 minut",
          "80 minut",
          "100 minut",
          "Brak limitu czasu, liczy się zaliczenie umiejętności"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Programy Poziomu Podstawowego",
      "section": "Open Water Diver > IV. Czas trwania",
      "page": 53,
      "quote": "Minimalny łączny czas denny dla Nurkowań szkoleniowych na wodach otwartych | 80 minut."
    },
    "category": "Współczynniki i Wiek"
  },
  {
    "question": "Jakie jest kategoryczne ograniczenie dotyczące pory dnia dla nurkowań szkoleniowych w ramach wszystkich programów wstępnych (Entry-level)?",
    "options": [
          "Muszą być prowadzone między godziną 8:00 a 18:00",
          "Muszą być przeprowadzone w ciągu dnia (pomiędzy wschodem a zachodem słońca)",
          "Muszą odbywać się przy świetle o natężeniu min. 500 luksów",
          "Nie ma ograniczeń pory dnia, jeśli instruktor ma mocną latarkę"
    ],
    "answer": 1,
    "reference": {
      "chapter": "Ogólne Standardy Szkoleniowe",
      "section": "Jak korzystać ze Standardów > Definicje Programów > I. Program poziomu podstawowego",
      "page": 10,
      "quote": "Nurkowania szkoleniowe... muszą być przeprowadzone w ciągu dnia (pomiędzy wschodem a zachodem słońca)"
    },
    "category": "Współczynniki i Wiek"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DB;
}
