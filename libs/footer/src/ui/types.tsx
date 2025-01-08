export interface FooterProps {
    title: string;
    description: string;
    links: {
      socialMedia: unknown;
      product: { label: string; url: string }[];
      resources: { label: string; url: string }[];
      company: { label: string; url: string }[];
    };
    socialMedia: {
      iconClass: string;
      url: string;
    }[];
  }  