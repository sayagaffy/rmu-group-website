// src/data/processing.ts
// Static content for Processing page

export interface ProcessingContent {
  hero: {
    title: string;
    subtitle: string;
    image: string;
  };
  mpalTechnology: {
    title: string;
    description: string;
    process: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    image: string;
  };
  features: {
    title: string;
    items: Array<{
      number: number;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  benefits: {
    title: string;
    environmental: {
      title: string;
      points: string[];
    };
    economic: {
      title: string;
      points: string[];
    };
    technical: {
      title: string;
      points: string[];
    };
  };
  products: {
    title: string;
    description: string;
    items: Array<{
      name: string;
      grade: string;
      application: string;
      image: string;
    }>;
  };
}

export const processingContent: ProcessingContent = {
  hero: {
    title: "Advanced Processing Technology",
    subtitle:
      "Transforming nickel ore into battery-grade materials with MPAL technology",
    image: "/images/processing/processing-hero.jpg",
  },

  mpalTechnology: {
    title: "MPAL (Modular Pressure Acid Leaching) Technology",
    description:
      "Our proprietary MPAL process represents a breakthrough in nickel processing, offering superior efficiency and environmental performance compared to traditional HPAL (High Pressure Acid Leaching) methods.",
    process: [
      {
        step: 1,
        title: "Ore Preparation",
        description:
          "Crushing and grinding of nickel laterite ore to optimal particle size for efficient leaching",
      },
      {
        step: 2,
        title: "High Pressure Leaching",
        description:
          "Controlled acid leaching at high pressure (40 bar) and temperature (250°C)",
      },
      {
        step: 3,
        title: "Solid-Liquid Separation",
        description:
          "Advanced filtration to separate nickel-rich solution from residual solids",
      },
      {
        step: 4,
        title: "Purification",
        description:
          "Removal of impurities through precipitation and ion exchange processes",
      },
      {
        step: 5,
        title: "Product Recovery",
        description:
          "Production of Mixed Hydroxide Precipitate (MHP) or Nickel Sulfate",
      },
    ],
    image: "/images/processing/facility-interior.jpg",
  },

  features: {
    title: "Technology Advantages",
    items: [
      {
        number: 1,
        title: "Proven Technology, Modified",
        description:
          "Based on well-established hydrometallurgical processes, optimized for Indonesian laterite ores",
        icon: "check-circle",
      },
      {
        number: 2,
        title: "Lower Capital Expenditure",
        description:
          "Medium pressure equipment is significantly less expensive than high-pressure alternatives",
        icon: "trending-down",
      },
      {
        number: 3,
        title: "Reduced Operating Costs",
        description:
          "Lower energy consumption and maintenance requirements translate to competitive operating costs",
        icon: "dollar-sign",
      },
      {
        number: 4,
        title: "ESG Compliance",
        description:
          "Reduced emissions, water recycling, and responsible waste management",
        icon: "leaf",
      },
    ],
  },

  benefits: {
    title: "Comprehensive Benefits",
    environmental: {
      title: "Environmental",
      points: [
        "Lower CO2 emissions compared to traditional smelting",
        "Closed-loop water recycling system",
        "Responsible tailings management",
        "Reduced energy consumption per tonne of product",
      ],
    },
    economic: {
      title: "Economic",
      points: [
        "30-40% lower CAPEX vs HPAL",
        "20-25% lower OPEX per tonne",
        "Faster project development timeline",
        "Attractive project economics at current nickel prices",
      ],
    },
    technical: {
      title: "Technical",
      points: [
        "High nickel recovery rates (>85%)",
        "Flexibility to produce MHP or Nickel Sulfate",
        "Suitable for various laterite ore types",
        "Proven scalability and reliability",
      ],
    },
  },

  products: {
    title: "Our Products",
    description:
      "We produce battery-grade nickel products that meet the stringent requirements of the EV industry",
    items: [
      {
        name: "Mixed Hydroxide Precipitate (MHP)",
        grade: "Ni: 30-40%, Co: 1-3%",
        application: "Intermediate product for nickel sulfate production",
        image: "/images/processing/mhp-product.jpg",
      },
      {
        name: "Nickel Sulfate",
        grade: "NiSO4·6H2O (>99% purity)",
        application: "Direct input for NCA/NMC battery cathode production",
        image: "/images/processing/nickel-sulfate.jpg",
      },
    ],
  },
};
