
import 'react';

declare module 'react' {
  interface JSX {
    // Définir les éléments intrinsèques que vous utilisez dans votre projet
    // Par exemple, pour les éléments div, input, etc. :
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
      // Ajoutez d'autres éléments si nécessaire
    }
  }
}
