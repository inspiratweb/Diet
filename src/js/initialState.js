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
    },
    ArrozIntegral: {
      code: 'ArrozIntegral',
      desc: 'Arroz integral',
    },
    HarinaArroz: {
      code: 'HarinaArroz',
      desc: 'Harina de arroz',
    },
    Pollo: {
      code: 'Pollo',
      desc: 'Pechuga de pollo',
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
    },
    Nueces: {
      code: 'Nueces',
      desc: 'Nueces',
    },
    Patatas: {
      code: 'Patatas',
      desc: 'Patatas',
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
    }
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
  diet: {
    Desayuno: [
      { food: 'Merluza', qtty: 200 },
      { food: 'Avena', qtty: 100 },
    ],
    Almuerzo: [
      { food: 'Merluza', qtty: 200 },
      { food: 'Avena', qtty: 100 },
    ],
  }
};
