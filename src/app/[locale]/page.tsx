import "./globals.css";
import Header from "../../components/Header/index"
import FirstScreen from "../../components/FirstScreen/index"
import ContentScreen from "../../components/ContentScreen/index"
import ProgramsScreen from "../../components/ProgramsScreen/index"
import Ladies from "../../components/Ladies/index"
import Interier from "../../components/Interier/index"
import ClientPopup from "../../components/PopUp/index";
import Footer from "../../components/Footer/index"
import { unstable_setRequestLocale } from 'next-intl/server';


interface Params {
  locale: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const locale = params?.locale || 'ru';
  const translations = await import(`../../../messages/${locale}.json`);
  const t = translations.default.HomePage;

  return {
    title: t.title,
    description: t.description,
  };
}
export async function generateStaticParams() {
  const locales = ["uk", "en", "ru"]; // List of locales you want to support

  return locales.map((locale) => ({
    locale, // Return an object for each dynamic path
  }));
}
export default function Home({ params }: { params: Params }) {
  const locale = params?.locale || 'ru';

  // Установка локалі, якщо вона необхідна
  unstable_setRequestLocale(locale);

  return (
    <div className="d-flex flex-column">
      <Header />
      <FirstScreen />
      <section><ContentScreen textNeeded="1" /></section>
      <section className="dops"><ProgramsScreen /></section>
      <Ladies />
      <section> <ContentScreen textNeeded="2" /></section>
      <section className='container d-flex justify-content-center'>
        <ClientPopup id='endbutt' name='endbutt' />
      </section>
      <section> <ContentScreen textNeeded="3" /></section>
      <Interier />
      <section>
        <ContentScreen textNeeded="4" /></section>
      <Footer />
    </div>
  );

}
