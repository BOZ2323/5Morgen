const lines = [
  {
    "name": "U1",
    "color": "#7DAD4A",
    "type": "linear",
    "stations": [
      "Warschauer Straße",
      "Schlesisches Tor",
      "Görlitzer Bahnhof",
      "Kottbusser Tor",
      "Prinzenstraße",
      "Hallesches Tor",
      "Möckernbrücke",
      "Gleisdreieck",
      "Kurfürstenstraße",
      "Nollendorfplatz",
      "Wittenbergplatz",
      "Kurfürstendamm",
      "Uhlandstraße"
    ]
  },
  {
    "name": "U2",
    "color": "#DB4018",
    "type": "linear",
    "stations": [
      "Pankow",
      "Vinetastraße",
      "Schönhauser Allee",
      "Eberswalder Straße",
      "Senefelderplatz",
      "Rosa-Luxemburg-Platz",
      "Alexanderplatz",
      "Klosterstraße",
      "Märkisches Museum",
      "Spittelmarkt",
      "Hausvogteiplatz",
      "Stadtmitte",
      "Potsdamer Platz",
      "Mohrenstraße",
      "Mendelssohn-Bartholdy-Park",
      "Gleisdreieck",
      "Bülowstraße",
      "Nollendorfplatz",
      "Wittenbergplatz",
      "Zoologischer Garten",
      "Ernst-Reuter-Platz",
      "Deutsche Oper",
      "Bismarckstraße",
      "Sophie-Charlotte-Platz",
      "Kaiserdamm",
      "Theodor-Heuss-Platz",
      "Neu-Westend",
      "Olympia-Stadion",
      "Ruhleben"
    ]
  },
  {
    "name": "U3",
    "color": "#007B5B",
    "type": "linear",
    "stations": [
      "Warschauer Straße",
      "Schlesisches Tor",
      "Görlitzer Bahnhof",
      "Kottbusser Tor",
      "Prinzenstraße",
      "Hallesches Tor",
      "Möckernbrücke",
      "Gleisdreieck",
      "Kurfürstenstraße",
      "Nollendorfplatz",
      "Wittenbergplatz",
      "Augsburger Straße",
      "Nürnberger Platz",
      "Spichernstraße",
      "Hohenzollernplatz",
      "Fehrbelliner Platz",
      "Heidelberger Platz",
      "Rüdesheimer Platz",
      "Breitenbachplatz",
      "Podbielskiallee",
      "Dahlem-Dorf",
      "Freie Universität (Thielplatz)",
      "Oskar-Helene-Heim",
      "Onkel Toms Hütte",
      "Krumme Lanke"
    ]
  },
  {
    "name": "U4",
    "color": "#F0D81C",
    "type": "linear",
    "stations": [
      "Nollendorfplatz",
      "Viktoria-Luise-Platz",
      "Bayerischer Platz",
      "Rathaus Schöneberg",
      "Innsbrucker Platz"
    ]
  },
  {
    "name": "U5",
    "color": "#7F532D",
    "type": "linear",
    "stations": [
      "Bundestag",
      "Brandenburger Tor",
      "Unter den Linden",
      "Kupfergraben",
      "Museumsinsel",
      "Rotes Rathaus",
      "Alexanderplatz",
      "Schillingstraße",
      "Strausberger Platz",
      "Weberwiese",
      "Frankfurter Tor",
      "Samariterstraße",
      "Frankfurter Allee",
      "Magdalenenstraße",
      "Lichtenberg",
      "Friedrichsfelde",
      "Tierpark",
      "Biesdorf-Süd",
      "Elsterwerdaer Platz",
      "Wuhletal",
      "Kaulsdorf-Nord",
      "Kienberg (Gärten der Welt)",
      "Cottbusser Platz",
      "Hellersdorf",
      "Louis-Lewin-Straße",
      "Hönow"
    ]
  },
  {
    "name": "U6",
    "color": "#8D6DAD",
    "type": "linear",
    "stations": [
      "Alt-Tegel",
      "Borsigwerke",
      "Holzhauser Straße",
      "Otisstraße",
      "Scharnweberstraße",
      "Kurt-Schumacher-Platz",
      "Afrikanische Straße",
      "Rehberge",
      "Seestraße",
      "Leopoldplatz",
      "Wedding",
      "Reinickendorfer Straße",
      "Schwartzkopffstraße",
      "Naturkundemuseum",
      "Oranienburger Tor",
      "Friedrichstraße",
      "Nord-Süd Tunnel",
      "Unter den Linden",
      "Stadtmitte",
      "Kochstraße",
      "Hallesches Tor",
      "Mehringdamm",
      "Platz der Luftbrücke",
      "Paradestraße",
      "Tempelhof",
      "Alt-Tempelhof",
      "Kaiserin-Augusta-Straße",
      "Teltowkanal",
      "Ullsteinstraße",
      "Westphalweg",
      "Alt-Mariendorf"
    ]
  },
  {
    "name": "U7",
    "color": "#518EBB",
    "type": "linear",
    "stations": [
      "Rathaus Spandau",
      "Altstadt Spandau",
      "Zitadelle",
      "Haselhorst",
      "Paulsternstraße",
      "Rohrdamm",
      "Siemensdamm",
      "Halemweg",
      "Jakob-Kaiser-Platz",
      "Jungfernheide",
      "Mierendorffplatz",
      "Richard-Wagner-Platz",
      "Bismarckstraße",
      "Wilmersdorfer Straße",
      "Charlottenburg",
      "Adenauerplatz",
      "Konstanzer Straße",
      "Fehrbelliner Platz",
      "Blissestraße",
      "Bayerischer Platz",
      "Eisenacher Straße",
      "Kleistpark",
      "Yorckstraße",
      "Möckernbrücke",
      "Mehringdamm",
      "Gneisenaustraße",
      "Südstern",
      "Hermannplatz",
      "Rathaus Neukölln",
      "Karl-Marx-Straße",
      "Neukölln",
      "Grenzallee",
      "Blaschkoallee",
      "Parchimer Allee",
      "Britz-Süd",
      "Johannisthaler Chaussee",
      "Britz Depot",
      "Lipschitzallee",
      "Wutzkyallee",
      "Zwickauer Damm",
      "Rudow"
    ]
  },
  {
    "name": "U8",
    "color": "#1C4E87",
    "type": "linear",
    "stations": [
      "Quermatengraben",
      "Wittenau",
      "Rathaus Reinickendorf",
      "Nordgraben",
      "Karl-Bonhoeffer-Nervenklinik",
      "Kienhorstgraben",
      "Lindauer Allee",
      "Paracelsus-Bad",
      "Residenzstraße",
      "Franz-Neumann-Platz",
      "Osloer Straße",
      "Panke",
      "Pankstraße",
      "Gesundbrunnen",
      "Voltastraße",
      "Bernauer Straße",
      "Rosenthaler Platz",
      "Weinmeisterstraße",
      "Alexanderplatz",
      "Jannowitzbrücke",
      "Heinrich-Heine-Straße",
      "Moritzplatz",
      "Kottbusser Tor",
      "Landwehrkanal",
      "Schönleinstraße",
      "Hermannplatz",
      "Boddinstraße",
      "Leinestraße",
      "Hermannstraße"
    ]
  },
  {
    "name": "U9",
    "color": "#F37A17",
    "type": "linear",
    "stations": [
      "Osloer Straße",
      "Nauener Platz",
      "Leopoldplatz",
      "Amrumer Straße",
      "Westhafen",
      "Birkenstraße",
      "Turmstraße",
      "Hansaplatz",
      "Zoologischer Garten",
      "Kurfürstendamm",
      "Spichernstraße",
      "Güntzelstraße",
      "Bundesplatz",
      "Friedrich-Wilhelm-Platz",
      "Walther-Schreiber-Platz",
      "Schloßstraße",
      "Rathaus Steglitz"
    ]
  }
]
export { lines };