export default {
  foods: {
    Leche: {
      code: 'Leche',
      desc: 'Leche desnatada',
    },
    Avena: {
      code: 'Avena',
      desc: 'Copos de avena',
    },
    Proteina: {
      code: 'Proteina',
      desc: 'Concentrado de proteina',
      notbuy: true,
    },
    Amilopectina: {
      code: 'Amilopectina',
      desc: 'Amilopectina/Palatinosa',
      notbuy: true,
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
        p: 23,
        ch: 0,
        chs: 0,
        f: 2.6,
        fs: 0.6,
      }
    },
    Almendras: {
      code: 'Almendras',
      desc: 'Almendra cruda',
    },
    Ensalada: {
      code: 'Ensalada',
      desc: 'Ensalada variada',
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
    },
    Requeson: {
      code: 'Requeson',
      desc: 'Queso batido 0%',
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
    },
    Huevos: {
      code: 'Huevos',
      desc: 'Huevos L',
      skipGrams: true,
    },
    AtunL: {
      code: 'AtunL',
      desc: 'Atún al natural (latas)',
      skipGrams: true,
    },
    Aceite: {
      code: 'Aceite',
      desc: 'Aceite de oliva',
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
    },
    Chocolate: {
      code: 'Chocolate',
      desc: 'Chocolate sin azucar',
    },
    PanCenteno: {
      code: 'PanCenteno',
      desc: 'Pan de centeno',
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
    },
    Patatas: {
      code: 'Patatas',
      desc: 'Patatas',
      macros: {
        p: 2.5,
        ch: 19,
        chs: 0,
        f: 0.1,
        fs: 0,
      }
    },
    Aguacate: {
      code: 'Aguacate',
      desc: 'Aguacate',
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
    },
    Arandanos: {
      code: 'Arandanos',
      desc: 'Arandanos congelados',
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
  ]
};
