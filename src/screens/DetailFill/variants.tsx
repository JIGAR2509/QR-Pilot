/* eslint-disable react-native/no-inline-styles */
import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
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
import { Text } from 'react-native';
import { fontSize } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

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
    address: string;
  };
  instagram: string;
}

export const renderInputVariants = (
  type: string,
  formData: DetailFillFormData,
  setFormData: Dispatch<SetStateAction<DetailFillFormData>>,
  t: any,
) => {
  switch (type) {
    case 'Text':
      return (
        <TextInputField
          label={t('detail.input.text_label')}
          placeholder={t('detail.input.text_placeholder')}
          multiline
          value={formData.text}
          onChangeText={(v: string) => setFormData(p => ({ ...p, text: v }))}
        />
      );
    case 'Website':
      return (
        <TextInputField
          label={t('detail.input.website_label')}
          placeholder="example.com"
          value={formData.website}
          onChangeText={(v: string) => setFormData(p => ({ ...p, website: v }))}
        />
      );
    case 'Wi‑Fi':
      return (
        <>
          <TextInputField
            label={t('detail.input.ssid_label')}
            placeholder={t('detail.input.network_placeholder')}
            value={formData.wifi.ssid}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                wifi: { ...p.wifi, ssid: v },
              }))
            }
          />
          <TextInputField
            label={t('detail.input.password_label')}
            placeholder={t('detail.input.password_label')}
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
          label={t('detail.input.phone_label')}
          placeholder={t('detail.input.contact_placeholder')}
          keyboardType="phone-pad"
          value={formData.contact}
          onChangeText={(v: string) => setFormData(p => ({ ...p, contact: v }))}
        />
      );
    case 'WhatsApp':
      return (
        <>
          <TextInputField
            label={t('detail.input.phone_label')}
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
            label={t('detail.input.message_label')}
            placeholder={t('detail.input.message_placeholder')}
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
            label={t('detail.input.email_label')}
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
            label={t('detail.input.subject_label')}
            placeholder={t('detail.input.subject_label')}
            value={formData.email.subject}
            onChangeText={(v: string) =>
              setFormData(p => ({
                ...p,
                email: { ...p.email, subject: v },
              }))
            }
          />
          <TextInputField
            label={t('detail.input.body_label')}
            placeholder={t('detail.input.message_placeholder')}
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
          label={t('detail.input.twitter_label')}
          placeholder={t('detail.input.username_placeholder')}
          value={formData.twitter}
          onChangeText={(v: string) => setFormData(p => ({ ...p, twitter: v }))}
        />
      );
    case 'Location':
      return (
        <>
          {formData.location.address.length > 0 ? null : (
            <>
              <TextInputField
                label={t('detail.input.latitude_label')}
                placeholder="23.0225"
                value={formData.location.lat}
                onChangeText={(v: string) =>
                  setFormData(p => ({
                    ...p,
                    location: { ...p.location, lat: v },
                  }))
                }
                editable={formData.location.address ? false : true}
              />
              <TextInputField
                label={t('detail.input.longitude_label')}
                placeholder="72.5714"
                value={formData.location.lng}
                onChangeText={(v: string) =>
                  setFormData(p => ({
                    ...p,
                    location: { ...p.location, lng: v },
                  }))
                }
                editable={formData.location.address ? false : true}
              />
            </>
          )}
          {formData.location.lat.length > 0 ||
          formData.location.lng.length > 0 ? null : (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: fontSize.lg,
                  color: colors.white,
                  fontFamily: fonts.bold,
                }}
              >
                OR
              </Text>
              <TextInputField
                label={t('detail.input.address_label')}
                placeholder={t('detail.input.address_placeholder')}
                value={formData.location.address}
                maxLength={200}
                onChangeText={(v: string) =>
                  setFormData(p => ({
                    ...p,
                    location: { ...p.location, address: v },
                  }))
                }
                editable={
                  formData.location.lat || formData.location.lng ? false : true
                }
              />
            </>
          )}
        </>
      );
    case 'Instagram':
      return (
        <TextInputField
          label={t('detail.input.username_placeholder')}
          placeholder={t('detail.input.username_placeholder')}
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
      return formData.location.address
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            formData.location.address,
          )}`
        : `geo:${formData.location.lat},${formData.location.lng}`;
    case 'Instagram':
      return `https://instagram.com/${formData.instagram}`;
    default:
      return '';
  }
};
