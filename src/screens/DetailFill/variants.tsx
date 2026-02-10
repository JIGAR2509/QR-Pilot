import React, { Dispatch, SetStateAction } from 'react';
import TextInputField from '../../components/TextInputField';
import TextIcon from '../../assets/icons/text_yellow.svg';
import WebsiteIcon from '../../assets/icons/web_yellow.svg';
import WifiIcon from '../../assets/icons/wifi_yellow.svg';
import ContactIcon from '../../assets/icons/contact_yellow.svg';
import WhatsappIcon from '../../assets/icons/whatsapp_yellow.svg';
import EmailIcon from '../../assets/icons/email_yellow.svg';
import TwitterIcon from '../../assets/icons/twitter_yellow.svg';
import InstagramIcon from '../../assets/icons/instagram_yellow.svg';
import LocationIcon from '../../assets/icons/location_yellow.svg';

export interface DetailFillFormData {
  text: string;
  website: string;
  whatsapp: {
    phone: string;
    message: string;
  };
  email: {
    email: string;
    subject: string;
    body: string;
  };
  contact: string;
  wifi: {
    ssid: string;
    password: string;
  };
  twitter: string;
  location: {
    lat: string;
    lng: string;
  };
  instagram: string;
}

export const renderInputVariants = (
  type: string,
  formData: DetailFillFormData,
  setFormData: Dispatch<SetStateAction<DetailFillFormData>>,
) => {
  switch (type) {
    case 'Text':
      return (
        <TextInputField
          label="Text"
          placeholder="Enter text"
          multiline
          value={formData.text}
          onChangeText={(v: string) => setFormData(p => ({ ...p, text: v }))}
        />
      );
    case 'Website':
      return (
        <TextInputField
          label="Website URL"
          placeholder="example.com"
          value={formData.website}
          onChangeText={(v: string) => setFormData(p => ({ ...p, website: v }))}
        />
      );
    case 'Wi‑Fi':
      return (
        <>
          <TextInputField
            label="SSID"
            placeholder="Network Name"
            value={formData.wifi.ssid}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                wifi: { ...p.wifi, ssid: v },
              }))
            }
          />
          <TextInputField
            label="Password"
            placeholder="Password"
            value={formData.wifi.password}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                wifi: { ...p.wifi, password: v },
              }))
            }
          />
        </>
      );
    case 'Contact':
      return (
        <TextInputField
          label="Phone Number"
          placeholder="Contact Number"
          keyboardType="phone-pad"
          value={formData.contact}
          onChangeText={(v: string) => setFormData(p => ({ ...p, contact: v }))}
        />
      );
    case 'WhatsApp':
      return (
        <>
          <TextInputField
            label="Phone Number"
            placeholder="xxxxx"
            value={formData.whatsapp.phone}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                whatsapp: { ...p.whatsapp, phone: v },
              }))
            }
          />
          <TextInputField
            label="Message"
            placeholder="xyz..."
            value={formData.whatsapp.message}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                whatsapp: { ...p.whatsapp, message: v },
              }))
            }
          />
        </>
      );
    case 'Email':
      return (
        <>
          <TextInputField
            label="Email"
            placeholder="abc@gmail.com"
            value={formData.email.email}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                email: { ...p.email, email: v },
              }))
            }
          />
          <TextInputField
            label="Subject"
            placeholder="Subject"
            value={formData.email.subject}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                email: { ...p.email, subject: v },
              }))
            }
          />
          <TextInputField
            label="Body"
            placeholder="Message"
            multiline
            value={formData.email.body}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                email: { ...p.email, body: v },
              }))
            }
          />
        </>
      );
    case 'Twitter':
      return (
        <TextInputField
          label="Twitter Username"
          placeholder="username"
          value={formData.twitter}
          onChangeText={(v: string) => setFormData(p => ({ ...p, twitter: v }))}
        />
      );
    case 'Location':
      return (
        <>
          <TextInputField
            label="Latitude"
            placeholder="23.0225"
            value={formData.location.lat}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                location: { ...p.location, lat: v },
              }))
            }
          />
          <TextInputField
            label="Longitude"
            placeholder="72.5714"
            value={formData.location.lng}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                location: { ...p.location, lng: v },
              }))
            }
          />
        </>
      );
    case 'Instagram':
      return (
        <TextInputField
          label="Username"
          placeholder="username"
          value={formData.instagram}
          onChangeText={(v: string) =>
            setFormData(p => ({ ...p, instagram: v }))
          }
        />
      );
  }
};

export const renderIcon = (type: string) => {
  switch (type) {
    case 'Text':
      return <TextIcon width={60} height={60} />;
    case 'Website':
      return <WebsiteIcon width={60} height={60} />;
    case 'Wi‑Fi':
      return <WifiIcon width={60} height={60} />;
    case 'Contact':
      return <ContactIcon width={60} height={60} />;
    case 'WhatsApp':
      return <WhatsappIcon width={60} height={60} />;
    case 'Email':
      return <EmailIcon width={60} height={60} />;
    case 'Twitter':
      return <TwitterIcon width={60} height={60} />;
    case 'Location':
      return <LocationIcon width={60} height={60} />;
    case 'Instagram':
      return <InstagramIcon width={60} height={60} />;
  }
};

export const getQRData = (type: string, formData: DetailFillFormData) => {
  switch (type) {
    case 'Text':
      return formData.text;
    case 'Website':
      return formData.website;
    case 'Wi‑Fi':
      return `WIFI:S:${formData.wifi.ssid};T:WPA;P:${formData.wifi.password};;`;
    case 'Contact':
      return `tel:${formData.contact}`;
    case 'WhatsApp':
      return `https://wa.me/${
        formData.whatsapp.phone
      }?text=${encodeURIComponent(formData.whatsapp.message)}`;
    case 'Email':
      return `mailto:${formData.email.email}?subject=${encodeURIComponent(
        formData.email.subject,
      )}&body=${encodeURIComponent(formData.email.body)}`;
    case 'Twitter':
      return `https://twitter.com/${formData.twitter}`;
    case 'Location':
      return `geo:${formData.location.lat},${formData.location.lng}`;
    case 'Instagram':
      return `https://instagram.com/${formData.instagram}`;
    default:
      return '';
  }
};
