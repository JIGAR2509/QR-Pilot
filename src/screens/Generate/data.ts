import React from 'react';
import { SvgProps } from 'react-native-svg';
import TextIcon from '../../assets/icons/text.svg';
import WebsiteIcon from '../../assets/icons/web.svg';
import WifiIcon from '../../assets/icons/wifi.svg';
import ContactIcon from '../../assets/icons/contact.svg';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';
import EmailIcon from '../../assets/icons/email.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import LocationIcon from '../../assets/icons/location.svg';

export interface QROption {
  id: string;
  title: string;
  type: string;
  Icon: React.FC<SvgProps>;
}

export const QR_OPTIONS: QROption[] = [
  { id: '1', title: 'Text', type: 'text', Icon: TextIcon },
  { id: '2', title: 'Website', type: 'website', Icon: WebsiteIcon },
  { id: '3', title: 'Wi‑Fi', type: 'wifi', Icon: WifiIcon },
  { id: '4', title: 'Contact', type: 'contact', Icon: ContactIcon },
  { id: '5', title: 'WhatsApp', type: 'whatsapp', Icon: WhatsappIcon },
  { id: '6', title: 'Email', type: 'email', Icon: EmailIcon },
  { id: '7', title: 'Twitter', type: 'twitter', Icon: TwitterIcon },
  { id: '8', title: 'Instagram', type: 'instagram', Icon: InstagramIcon },
  { id: '9', title: 'Location', type: 'location', Icon: LocationIcon },
];
