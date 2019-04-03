export type MarkerSelection = {
  quality: {
    impure: boolean;
    normal: boolean;
    pure: boolean;
  };
  slugs: {
    green: boolean;
    yellow: boolean;
    purple: boolean;
  };
  nodes: {
    iron: boolean;
    copper: boolean;
    limestone: boolean;
    coal: boolean;
    oil: boolean;
    caterium: boolean;
    geysers: boolean;
    sulfur: boolean;
    bauxite: boolean;
    quartz: boolean;
    uranium: boolean;
    sam: boolean;
  };
  geysers: boolean;
  dropPods: boolean;
  unknowns: boolean;
};

export function getDefaultSelection(hash?: string): MarkerSelection {
  return {
    quality: {
      impure: true,
      normal: true,
      pure: true
    },
    slugs: {
      green: false,
      yellow: false,
      purple: false
    },
    nodes: {
      iron: true,
      copper: true,
      limestone: true,
      coal: false,
      oil: false,
      caterium: false,
      geysers: false,
      sulfur: false,
      bauxite: false,
      quartz: false,
      uranium: false,
      sam: false
    },
    geysers: false,
    dropPods: false,
    unknowns: false
  };
}
