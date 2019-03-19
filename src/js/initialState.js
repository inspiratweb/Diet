export default {
  foods: {
    LecheD: {
      code: 'LecheD',
      desc: 'Leche desnatada',
      macros: {
        p: 3.1,
        ch: 4.7,
        chs: 4.7,
        f: 0.3,
        fs: 0.2,
      },
    },
    LecheSD: {
      code: 'LecheSD',
      desc: 'Leche semidesnatada',
      macros: {
        p: 3.1,
        ch: 4.7,
        chs: 4.7,
        f: 1.55,
        fs: 1,
      },
    },
    Avena: {
      code: 'Avena',
      desc: 'Copos de avena',
      macros: {
        p: 14,
        ch: 59,
        chs: 0.7,
        f: 7,
        fs: 1.3,
      },
    },
    Proteina: {
      code: 'Proteina',
      desc: 'Concentrado de proteina',
      notbuy: true,
      macros: {
        p: 75,
        ch: 7.6,
        chs: 3.7,
        f: 7.4,
        fs: 4.9,
      },
    },
    Amilopectina: {
      code: 'Amilopectina',
      desc: 'Amilopectina/Palatinosa',
      notbuy: true,
      macros: {
        p: 0,
        ch: 88,
        chs: 0,
        f: 0,
        fs: 0,
      },
    },
    Piña: {
      code: 'Piña',
      desc: 'Piña en su jugo',
    },
    ArrozBasmati: {
      code: 'ArrozBasmati',
      desc: 'Arroz basmati',
      macros: {
        p: 9,
        ch: 78,
        chs: 0.5,
        f: 0.6,
        fs: 0.2,
      }
    },
    ArrozIntegral: {
      code: 'ArrozIntegral',
      desc: 'Arroz integral',
      macros: {
        p: 8.9,
        ch: 71.3,
        chs: 2.4,
        f: 2.9,
        fs: 0.5,
      }
    },
    HarinaArroz: {
      code: 'HarinaArroz',
      desc: 'Harina de arroz',
    },
    Pollo: {
      code: 'Pollo',
      desc: 'Pechuga de pollo',
      macros: {
        p: 20,
        ch: 0,
        chs: 0,
        f: 1,
        fs: 0.4,
      }
    },
    Pavo: {
      code: 'Pavo',
      desc: 'Pechuga de pavo',
      macros: {
        p: 23,
        ch: 0,
        chs: 0,
        f: 2.6,
        fs: 0.6,
      }
    },
    CarnePicada: {
      code: 'CarnePicada',
      desc: 'Ternera picada',
      macros: {
        p: 18,
        ch: 0,
        chs: 0,
        f: 15,
        fs: 0,
      }
    },
    Almendras: {
      code: 'Almendras',
      desc: 'Almendra cruda',
      macros: {
        p: 25.3,
        ch: 5.4,
        chs: 5.4,
        f: 50.9,
        fs: 3.9,
      },
    },
    Ensalada: {
      code: 'Ensalada',
      desc: 'Ensalada variada',
      macros: {
        p: 1.1,
        ch: 0.8,
        chs: 0,
        f: 0.3,
        fs: 0.1,
      },
    },
    Tortitas: {
      code: 'Tortitas',
      desc: 'Tortitas de maiz/arroz',
    },
    Batido: {
      code: 'Batido',
      desc: 'Batido P50+B10+C8',
      notbuy: true,
    },
    Brocoli: {
      code: 'Brocoli',
      desc: 'Brocoli',
      macros: {
        p: 2.8,
        ch: 6.6,
        chs: 1.7,
        f: 0.4,
        fs: 0,
      },
    },
    Requeson: {
      code: 'Requeson',
      desc: 'Queso batido 0%',
      macros: {
        p: 8,
        ch: 3.5,
        chs: 3.5,
        f: 0.1,
        fs: 0,
      },
    },
    Miel: {
      code: 'Miel',
      desc: 'Miel',
    },
    Platano: {
      code: 'Platano',
      desc: 'Platano',
      skipGrams: true,
      eq: 120,
      macros: {
        p: 1,
        ch: 21,
        chs: 12,
        f: 0.3,
        fs: 0.1,
      }
    },
    Manzana: {
      code: 'Manzana',
      desc: 'Manzana',
      skipGrams: true,
      eq: 180,
      macros: {
        p: 0.3,
        ch: 14.7,
        chs: 0,
        f: 0.2,
        fs: 0,
      },
    },
    Huevos: {
      code: 'Huevos',
      desc: 'Huevos L',
      skipGrams: true,
      eq: 55,
      macros: {
        p: 12.5,
        ch: 0.5,
        chs: 0.5,
        f: 11.1,
        fs: 3.1,
      },
    },
    AtunL: {
      code: 'AtunL',
      desc: 'Atún al natural (latas)',
      skipGrams: true,
      eq: 60,
      macros: {
        p: 18,
        ch: 0.5,
        chs: 0.5,
        f: 0.7,
        fs: 0.2,
      },
    },
    Aceite: {
      code: 'Aceite',
      desc: 'Aceite de oliva',
      macros: {
        p: 0,
        ch: 0,
        chs: 0,
        f: 92,
        fs: 14,
      },
    },
    Agua: {
      code: 'Agua',
      desc: 'Agua',
      notbuy: true,
    },
    CremaCacahuete: {
      code: 'CremaCacahuete',
      desc: 'Crema de cacahuete',
      notbuy: true,
      macros: {
        p: 30,
        ch: 12,
        chs: 5.9,
        f: 46,
        fs: 8.2,
      },
    },
    Chocolate: {
      code: 'Chocolate',
      desc: 'Chocolate sin azucar',
      macros: {
        p: 6,
        ch: 46,
        chs: 1,
        f: 31,
        fs: 19,
      },
    },
    PanCenteno: {
      code: 'PanCenteno',
      desc: 'Pan de centeno',
      macros: {
        p: 10,
        ch: 35,
        chs: 2.5,
        f: 7.6,
        fs: 1,
      },
    },
    Canela: {
      code: 'Canela',
      desc: 'Canela molida',
      skipGrams: true,
    },
    Limon: {
      code: 'Limon',
      desc: 'Limon',
      skipGrams: true,
    },
    RalladuraLimon: {
      code: 'RalladuraLimon',
      desc: 'Ralladura de limon',
      notbuy: true,
    },
    Jamon: {
      code: 'Jamon',
      desc: 'Jamon serrano',
      macros: {
        p: 33.5,
        ch: 1,
        chs: 0.5,
        f: 4.6,
        fs: 1,
      },
    },
    Lomo: {
      code: 'Lomo',
      desc: 'Lomo embuchado',
    },
    Yogur: {
      code: 'Yogur',
      desc: 'Yogur 0% pasas/nueces',
    },
    Chia: {
      code: 'Chia',
      desc: 'Semillas de chia',
      skipGrams: true,
    },
    Nueces: {
      code: 'Nueces',
      desc: 'Nueces',
      macros: {
        p: 17,
        ch: 2.2,
        chs: 1.7,
        f: 70,
        fs: 6,
      },
    },
    Patatas: {
      code: 'Patatas',
      desc: 'Patatas',
      macros: {
        p: 1.5,
        ch: 13.3,
        chs: 2.1,
        f: 0.1,
        fs: 0,
      }
    },
    Aguacate: {
      code: 'Aguacate',
      desc: 'Aguacate',
      macros: {
        p: 2,
        ch: 9,
        chs: 0,
        f: 15,
        fs: 0,
      },
    },
    'Q - Havarti': {
      code: 'Q - Havarti',
      desc: 'Queso havarti',
      skipGrams: true,
    },
    'Q - Cabra': {
      code: 'Q - Cabra',
      desc: 'Queso de cabra',
    },
    BolloTruño: {
      code: 'BolloTruño',
      desc: 'Bollo proteico',
      macros: {
        p: 32.8,
        ch: 11.2,
        chs: 3.2,
        f: 9.3,
        fs: 3.5,
      },
    },
    Arandanos: {
      code: 'Arandanos',
      desc: 'Arandanos congelados',
      macros: {
        p: 0.7,
        ch: 11,
        chs: 10,
        f: 0,
        fs: 0,
      },
    },
    FrutosRojos: {
      code: 'FrutosRojos',
      desc: 'Frutos rojos congelados',
    },
    Merluza: {
      code: 'Merluza',
      desc: 'Merluza congelada',
    },
    Panga: {
      code: 'Panga',
      desc: 'Panga congelada',
    },
    Pasta: {
      code: 'Pasta',
      desc: 'Pasta',
      macros: {
        p: 11,
        ch: 72,
        chs: 3.5,
        f: 1.5,
        fs: 0.3,
      }
    },
  },
  meals: {
    Desayuno: {
      time: 8,
      desc: 'Desayuno',
    },
    Almuerzo: {
      time: 11,
      desc: 'Almuerzo',
    },
    Comida: {
      time: 14,
      desc: 'Comida',
    },
    Tentempie: {
      time: 17,
      desc: 'Tentempié',
    },
    PostEntreno: {
      time: 20,
      desc: 'Post entreno',
    },
    Merienda: {
      time: 21,
      desc: 'Merienda',
    },
    Cena: {
      time: 23,
      desc: 'Cena',
    }
  },
  similars: [
    ['Pasta', 'Patatas', 'ArrozBasmati', 'ArrozIntegral'],
    ['Pollo', 'CarnePicada', 'Pavo'],
  ]
};
