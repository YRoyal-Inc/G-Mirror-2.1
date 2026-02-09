export const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://storage.googleapis.com/lexis-ia.firebasestorage.app/users/Z9nAjAuFZ6cAHwvC6897zJjNXA13/projects/c84c5b46-d10c-42d2-90a3-65d7f5908d54/logos/logo-primary.svg" alt="G-Mirror" className="h-8 brightness-0 invert" />
              
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              La première solution de mirroring de carte SIM au Gabon. Restez connecté, peu importe l'état de votre matériel.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Produit</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sécurité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Statut du réseau</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Légal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-sm text-gray-500">
          <p>G-Mirror © 2024 YRoyal_Inc Tous droits réservés. Franceville, Gabon.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};