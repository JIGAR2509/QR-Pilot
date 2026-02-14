import React from 'react';
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
import { FormikErrors, FormikTouched, FormikHandlers } from 'formik';
import { TFunction } from 'i18next';
import * as Yup from 'yup';

import styles from './styles';

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
  values: DetailFillFormData,
  handleChange: FormikHandlers['handleChange'],
  handleBlur: FormikHandlers['handleBlur'],
  errors: FormikErrors<DetailFillFormData>,
  touched: FormikTouched<DetailFillFormData>,
  t: TFunction,
) => {
  switch (type) {
    case 'Text':
      return (
        <TextInputField
          label={t('detail.input.text_label')}
          placeholder={t('detail.input.text_placeholder')}
          multiline
          value={values.text}
          onChangeText={handleChange('text')}
          onBlur={handleBlur('text')}
          error={touched.text && errors.text}
        />
      );
    case 'Website':
      return (
        <TextInputField
          label={t('detail.input.website_label')}
          placeholder="example.com"
          value={values.website}
          onChangeText={handleChange('website')}
          onBlur={handleBlur('website')}
          error={touched.website && errors.website}
        />
      );
    case 'Wi-Fi':
      return (
        <>
          <TextInputField
            label={t('detail.input.ssid_label')}
            placeholder={t('detail.input.network_placeholder')}
            value={values.wifi.ssid}
            onChangeText={handleChange('wifi.ssid')}
            onBlur={handleBlur('wifi.ssid')}
            error={touched.wifi?.ssid && errors.wifi?.ssid}
          />
          <TextInputField
            label={t('detail.input.password_label')}
            placeholder={t('detail.input.password_label')}
            value={values.wifi.password}
            onChangeText={handleChange('wifi.password')}
            onBlur={handleBlur('wifi.password')}
            error={touched.wifi?.password && errors.wifi?.password}
          />
        </>
      );
    case 'Contact':
      return (
        <TextInputField
          label={t('detail.input.phone_label')}
          placeholder={t('detail.input.contact_placeholder')}
          keyboardType="phone-pad"
          value={values.contact}
          onChangeText={handleChange('contact')}
          onBlur={handleBlur('contact')}
          error={touched.contact && errors.contact}
        />
      );
    case 'WhatsApp':
      return (
        <>
          <TextInputField
            label={t('detail.input.phone_label')}
            placeholder="xxxxx"
            value={values.whatsapp.phone}
            onChangeText={handleChange('whatsapp.phone')}
            onBlur={handleBlur('whatsapp.phone')}
            error={touched.whatsapp?.phone && errors.whatsapp?.phone}
          />
          <TextInputField
            label={t('detail.input.message_label')}
            placeholder={t('detail.input.message_placeholder')}
            value={values.whatsapp.message}
            onChangeText={handleChange('whatsapp.message')}
            onBlur={handleBlur('whatsapp.message')}
            error={touched.whatsapp?.message && errors.whatsapp?.message}
          />
        </>
      );
    case 'Email':
      return (
        <>
          <TextInputField
            label={t('detail.input.email_label')}
            placeholder="abc@gmail.com"
            value={values.email.email}
            onChangeText={handleChange('email.email')}
            onBlur={handleBlur('email.email')}
            error={touched.email?.email && errors.email?.email}
          />
          <TextInputField
            label={t('detail.input.subject_label')}
            placeholder={t('detail.input.subject_label')}
            value={values.email.subject}
            onChangeText={handleChange('email.subject')}
            onBlur={handleBlur('email.subject')}
            error={touched.email?.subject && errors.email?.subject}
          />
          <TextInputField
            label={t('detail.input.body_label')}
            placeholder={t('detail.input.message_placeholder')}
            multiline
            value={values.email.body}
            onChangeText={handleChange('email.body')}
            onBlur={handleBlur('email.body')}
            error={touched.email?.body && errors.email?.body}
          />
        </>
      );
    case 'Twitter':
      return (
        <TextInputField
          label={t('detail.input.twitter_label')}
          placeholder={t('detail.input.username_placeholder')}
          value={values.twitter}
          onChangeText={handleChange('twitter')}
          onBlur={handleBlur('twitter')}
          error={touched.twitter && errors.twitter}
        />
      );
    case 'Location':
      return (
        <>
          <TextInputField
            label={t('detail.input.latitude_label')}
            placeholder="23.0225"
            value={values.location.lat}
            onChangeText={handleChange('location.lat')}
            onBlur={handleBlur('location.lat')}
            error={touched.location?.lat && errors.location?.lat}
            editable={!values.location.address}
          />
          <TextInputField
            label={t('detail.input.longitude_label')}
            placeholder="72.5714"
            value={values.location.lng}
            onChangeText={handleChange('location.lng')}
            onBlur={handleBlur('location.lng')}
            error={touched.location?.lng && errors.location?.lng}
            editable={!values.location.address}
          />

          <Text style={styles.orText}>OR</Text>

          <TextInputField
            label={t('detail.input.address_label')}
            placeholder={t('detail.input.address_placeholder')}
            value={values.location.address}
            maxLength={200}
            onChangeText={handleChange('location.address')}
            onBlur={handleBlur('location.address')}
            error={touched.location?.address && errors.location?.address}
            editable={!values.location.lat && !values.location.lng}
          />
        </>
      );
    case 'Instagram':
      return (
        <TextInputField
          label={t('detail.input.username_placeholder')}
          placeholder={t('detail.input.username_placeholder')}
          value={values.instagram}
          onChangeText={handleChange('instagram')}
          onBlur={handleBlur('instagram')}
          error={touched.instagram && errors.instagram}
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
    case 'Wi-Fi':
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
    case 'Wi-Fi':
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

export const getValidationSchema = (title: string) => {
  const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  const usernameRegExp = /^[a-zA-Z0-9._]+$/;

  switch (title) {
    case 'Text':
      return Yup.object().shape({
        text: Yup.string()
          .trim()
          .min(1, 'Cannot be empty')
          .required('Required'),
      });
    case 'Website':
      return Yup.object().shape({
        website: Yup.string()
          .url('Please enter a valid URL (include http/https)')
          .required('Required'),
      });
    case 'Wi-Fi':
      return Yup.object().shape({
        wifi: Yup.object().shape({
          ssid: Yup.string()
            .min(1)
            .max(32, 'SSID too long')
            .required('Required'),
          password: Yup.string()
            .min(1, 'Password required')
            .required('Required'),
        }),
      });
    case 'Contact':
      return Yup.object().shape({
        contact: Yup.string()
          .matches(phoneRegExp, 'Phone number is not valid')
          .required('Required'),
      });
    case 'WhatsApp':
      return Yup.object().shape({
        whatsapp: Yup.object().shape({
          phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Required'),
          message: Yup.string()
            .max(200, 'Message too long')
            .required('Required'),
        }),
      });
    case 'Email':
      return Yup.object().shape({
        email: Yup.object().shape({
          email: Yup.string()
            .trim()
            .email('Invalid email address')
            .required('Required'),
          subject: Yup.string().max(100).required('Required'),
          body: Yup.string().max(500).required('Required'),
        }),
      });
    case 'Twitter':
      return Yup.object().shape({
        twitter: Yup.string()
          .matches(usernameRegExp, 'Invalid username format')
          .required('Required'),
      });
    case 'Instagram':
      return Yup.object().shape({
        instagram: Yup.string()
          .matches(usernameRegExp, 'Invalid username format')
          .required('Required'),
      });
    case 'Location':
      return Yup.object().shape(
        {
          location: Yup.object().shape({
            lat: Yup.string().when('address', {
              is: (val: string) => !val || val.length === 0,
              then: schema =>
                schema
                  .required('Latitude is required')
                  .test('is-lat', 'Must be -90 to 90', val => {
                    const num = parseFloat(val || '0');
                    return num >= -90 && num <= 90;
                  }),
            }),
            lng: Yup.string().when('address', {
              is: (val: string) => !val || val.length === 0,
              then: schema =>
                schema
                  .required('Longitude is required')
                  .test('is-lng', 'Must be -180 to 180', val => {
                    const num = parseFloat(val || '0');
                    return num >= -180 && num <= 180;
                  }),
            }),
            address: Yup.string().max(255),
          }),
        },
        [
          ['lat', 'address'],
          ['lng', 'address'],
        ],
      );
    default:
      return Yup.object().shape({});
  }
};
