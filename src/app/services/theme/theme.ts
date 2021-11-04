export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "backgroundImage": "../../assets/website_images/Day.jpeg",

    "--toggle-background-primary": "rgba(255, 221, 171, 1)",
    "--toggle-background-secondary": "rgba(255, 201, 121, 1)",
    "--toggle-background-tertiary": "rgba(208, 132, 16, 1)",
    "--toggle-background": "rgba(180, 116, 20, 1)",

    "--button": "rgba(236, 165, 59, 1)",
    "--button-border": "rgba(0, 0, 0, 1)",

    "--text-default": "rgba(0, 0, 0, 1)",
    "--text-primary": "linear-gradient(90deg, rgb(201, 124, 8), rgb(122, 73, 0))",

    "--logo-background": "linear-gradient(90deg, rgba(255, 255, 0, 0.8), rgba(249, 169, 36, 0.9), rgba(255, 38, 38, 1))",

    "--navbar-footer-area": "rgba( 255, 255, 255, 0.4)",

    "--glass": "linear-gradient(135deg ,rgba( 255, 255, 255, 0.7), rgba(147, 134, 134, 0.7))",
    "--glass-border": "linear-gradient(135deg ,rgba(200, 200, 200, 1), rgba(130, 130, 130, 1), rgba(0, 0, 0, 1))",

    "--background-shadow": "rgba(0, 0, 0, 0.25)",

    "--router-arrow": "rgba(255,255, 255, 1)",
    
    "--form-error": "rgba(214, 11, 11, 0.9)"
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "backgroundImage": "../../assets/website_images/Night.jpg",

    "--toggle-background-primary": "rgba(96, 107, 122, 1)",
    "--toggle-background-secondary": "rgba(34, 74, 87, 1)",
    "--toggle-background-tertiary": "rgba(220, 220, 220, 1)",
    "--toggle-background": "rgba(19, 38, 88, 1)",

    "--button": "rgba(71, 69, 66, 1)",
    "--button-border": "rgba(220, 220, 220, 1)",

    "--text-default": "rgba(255, 255, 255, 1)",
    "--text-primary": "linear-gradient(90deg, rgba(220, 220, 220, 0.9), rgba(255, 255, 255, 1))",

    "--logo-background": "linear-gradient(90deg, rgba(81, 81, 78, 1), rgba(174, 172, 168, 1), rgba(255, 255, 255, 1))",
    
    "--navbar-footer-area": "rgba(37, 37, 37, 0.4)",


    "--glass": "linear-gradient(135deg ,rgba(0, 0, 0, 0.5), rgba(37, 37, 37, 0.5))",
    "--glass-border": "linear-gradient(135deg ,rgba(120, 120, 120, 1), rgba(180, 180, 180, 1), rgba(255, 255, 255, 1))",

    "--background-shadow": "rgba(0, 0, 0, 0.6)",

    "--router-arrow": "rgba(255,255, 255, 1)",
    
    "--form-error": "rgba(214, 11, 11, 0.9)"
  }
};