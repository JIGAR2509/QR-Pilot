import { DetailFillFormData } from './variants';

export const inputData: DetailFillFormData = {
  text: '',
  website: '',
  whatsapp: { phone: '', message: '' },
  email: { email: '', subject: '', body: '' },
  contact: '',
  wifi: { ssid: '', password: '' },
  twitter: '',
  location: { lat: '', lng: '' },
  instagram: '',
};

export const isGenerateDisabled = (type: string, data?: DetailFillFormData) => {
  switch (type) {
    case 'Text':
      return !data?.text.trim();
    case 'Website':
      return !data?.website.trim();
    case 'Wi‑Fi':
      return !data?.wifi.ssid.trim() || !data?.wifi.password.trim();
    case 'Contact':
      return !data?.contact.trim();
    case 'WhatsApp':
      return !data?.whatsapp.phone.trim() || !data?.whatsapp.message.trim();
    case 'Email':
      return (
        !data?.email.email.trim() ||
        !data?.email.subject.trim() ||
        !data?.email.body.trim()
      );
    case 'Twitter':
      return !data?.twitter.trim();
    case 'Location':
      return !data?.location.lat.trim() || !data?.location.lng.trim();
    case 'Instagram':
      return !data?.instagram.trim();
    default:
      return true;
  }
};
