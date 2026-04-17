import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = '+8613722777731';
  const message = 'Hello! I would like to inquire about your products.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-40 flex items-center gap-2 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="size-6" />
      <span className="hidden group-hover:inline-block text-sm pr-2 whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}
